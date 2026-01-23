import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

export type Language = 'en' | 'ta';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = signal<Language>('en');
  private translations: any = {};
  private translationsLoaded = new BehaviorSubject<boolean>(false);

  currentLang$ = this.currentLang.asReadonly();
  translationsLoaded$ = this.translationsLoaded.asObservable();

  constructor(private http: HttpClient) {
    // Load saved language preference or default to English
    const savedLang = localStorage.getItem('preferred-language') as Language;
    const initialLang = savedLang || 'en';
    this.loadTranslations(initialLang);
  }

  private loadTranslations(lang: Language): void {
    this.http.get(`/assets/i18n/${lang}.json`).subscribe({
      next: (data) => {
        this.translations = data;
        this.currentLang.set(lang);
        this.translationsLoaded.next(true);
        localStorage.setItem('preferred-language', lang);
      },
      error: (err) => {
        console.error('Error loading translations:', err);
        // Fallback to English if translation file fails to load
        if (lang !== 'en') {
          this.loadTranslations('en');
        }
      }
    });
  }

  switchLanguage(lang: Language): void {
    if (lang !== this.currentLang()) {
      this.translationsLoaded.next(false);
      this.loadTranslations(lang);
    }
  }

  getCurrentLanguage(): Language {
    return this.currentLang();
  }

  translate(key: string): string {
    const keys = key.split('.');
    let value = this.translations;

    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  }

  // Helper method to get nested translations
  get(key: string): any {
    const keys = key.split('.');
    let value = this.translations;

    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        return null;
      }
    }

    return value;
  }
}
