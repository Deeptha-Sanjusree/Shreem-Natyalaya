import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService, Language } from '../services/translation.service';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslatePipe],
  template:`
  <nav class="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">
      <!-- Logo and Brand Name -->
      <a routerLink="/" class="flex items-center gap-3 shrink-0" (click)="navigateAndScroll()">
        <img
          src="/assets/images/logo.jpg"
          alt="Shreem Natyalaya Logo"
          class="h-12 w-12 object-contr "
        />
        <div class="text-md md:text-md font-serif font-bold text-ocean-800 whitespace-nowrap">
          {{ 'nav.instituteName' | translate }}
        </div>
      </a>

      <!-- Desktop Navigation & Language Switcher -->
      <div class="hidden md:flex items-center flex-1 justify-end ml-8 lg:ml-12">
        <div class="flex items-center space-x-3 lg:space-x-5 xl:space-x-6">
          <a 
            routerLink="/" 
            routerLinkActive="text-ocean-700 font-semibold"
            [routerLinkActiveOptions]="{exact: true}"
            class="px-2 py-2 text-gray-700 hover:text-ocean-700 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium whitespace-nowrap"
            (click)="scrollToTop()"
          >
            {{ 'nav.home' | translate }}
          </a>
          <a 
            routerLink="/about-guru" 
            routerLinkActive="text-ocean-700 font-semibold"
            class="px-2 py-2 text-gray-700 hover:text-ocean-700 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium whitespace-nowrap"
            (click)="scrollToTop()"
          >
            {{ 'nav.aboutGuru' | translate }}
          </a>
          <a 
            routerLink="/guru-parampara" 
            routerLinkActive="text-ocean-700 font-semibold"
            class="px-2 py-2 text-gray-700 hover:text-ocean-700 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium whitespace-nowrap"
            (click)="scrollToTop()"
          >
            {{ 'nav.guruParampara' | translate }}
          </a>
          <a 
            routerLink="/courses" 
            routerLinkActive="text-ocean-700 font-semibold"
            class="px-2 py-2 text-gray-700 hover:text-ocean-700 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium whitespace-nowrap"
            (click)="scrollToTop()"
          >
            {{ 'nav.courses' | translate }}
          </a>
          <a 
            routerLink="/upcoming-events" 
            routerLinkActive="text-ocean-700 font-semibold"
            class="px-2 py-2 text-gray-700 hover:text-ocean-700 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium whitespace-nowrap"
            (click)="scrollToTop()"
          >
            {{ 'nav.upcomingEvents' | translate }}
          </a>
          <a 
            routerLink="/branches" 
            routerLinkActive="text-ocean-700 font-semibold"
            class="px-2 py-2 text-gray-700 hover:text-ocean-700 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium whitespace-nowrap"
            (click)="scrollToTop()"
          >
            {{ 'nav.branches' | translate }}
          </a>
          <a 
            routerLink="/collaborate" 
            routerLinkActive="text-ocean-700 font-semibold"
            class="px-2 py-2 text-gray-700 hover:text-ocean-700 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium whitespace-nowrap"
            (click)="scrollToTop()"
          >
            {{ 'nav.collaborate' | translate }}
          </a>
          <a 
            routerLink="/contact" 
            routerLinkActive="text-ocean-700 font-semibold"
            class="px-2 py-2 text-gray-700 hover:text-ocean-700 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium whitespace-nowrap"
            (click)="scrollToTop()"
          >
            {{ 'nav.contact' | translate }}
          </a>
        </div>

        <!-- Language Switcher -->
        <div class="flex items-center relative ml-4 lg:ml-6">
        <button
          (click)="toggleLangMenu()"
          class="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          aria-label="Change language"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          <span class="font-medium">{{ currentLang() === 'en' ? 'EN' : 'த' }}</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        @if (isLangMenuOpen()) {
          <div class="absolute right-0 top-full mt-2 w-36 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
            <div class="py-1">
              <button
                (click)="switchLanguage('en')"
                class="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                [class.bg-ocean-50]="currentLang() === 'en'"
                [class.text-ocean-700]="currentLang() === 'en'"
                [class.font-semibold]="currentLang() === 'en'"
              >
                English
              </button>
              <button
                (click)="switchLanguage('ta')"
                class="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                [class.bg-ocean-50]="currentLang() === 'ta'"
                [class.text-ocean-700]="currentLang() === 'ta'"
                [class.font-semibold]="currentLang() === 'ta'"
              >
                தமிழ் (Tamil)
              </button>
            </div>
          </div>
        }
        </div>
      </div>

      <!-- Mobile Menu & Language buttons -->
      <div class="md:hidden flex items-center gap-2">
        <!-- Mobile menu button -->
        <button 
          (click)="toggleMenu()"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-ocean-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ocean-500"
          aria-label="Toggle menu"
        >
          @if (!isMenuOpen()) {
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          } @else {
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          }
        </button>

        <!-- Mobile Language Switcher -->
        <div class="relative">
          <button
            (click)="toggleLangMenu()"
            class="flex items-center space-x-1 px-2 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Change language"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span class="font-medium text-sm">{{ currentLang() === 'en' ? 'EN' : 'த' }}</span>
          </button>
          
          @if (isLangMenuOpen()) {
            <div class="absolute right-0 top-full mt-2 w-36 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
              <div class="py-1">
                <button
                  (click)="switchLanguage('en')"
                  class="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                  [class.bg-ocean-50]="currentLang() === 'en'"
                  [class.text-ocean-700]="currentLang() === 'en'"
                  [class.font-semibold]="currentLang() === 'en'"
                >
                  English
                </button>
                <button
                  (click)="switchLanguage('ta')"
                  class="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                  [class.bg-ocean-50]="currentLang() === 'ta'"
                  [class.text-ocean-700]="currentLang() === 'ta'"
                  [class.font-semibold]="currentLang() === 'ta'"
                >
                  தமிழ் (Tamil)
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  @if (isMenuOpen()) {
    <div class="md:hidden border-t border-gray-200">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a 
          routerLink="/" 
          routerLinkActive="bg-ocean-50 text-ocean-700"
          [routerLinkActiveOptions]="{exact: true}"
          (click)="navigateAndScroll()"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ocean-700 hover:bg-gray-50 transition-colors duration-200"
        >
          {{'nav.home' | translate}}
        </a>
        <a 
          routerLink="/about-guru" 
          routerLinkActive="bg-ocean-50 text-ocean-700"
          (click)="navigateAndScroll()"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ocean-700 hover:bg-gray-50 transition-colors duration-200"
        >
          {{'nav.aboutGuru' | translate}}
        </a>
        <a 
          routerLink="/guru-parampara" 
          routerLinkActive="bg-ocean-50 text-ocean-700"
          (click)="navigateAndScroll()"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ocean-700 hover:bg-gray-50 transition-colors duration-200"
        >
          {{'nav.guruParampara' | translate}}
        </a>
        <a 
          routerLink="/courses" 
          routerLinkActive="bg-ocean-50 text-ocean-700"
          (click)="navigateAndScroll()"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ocean-700 hover:bg-gray-50 transition-colors duration-200"
        >
          {{'nav.courses' | translate}}
        </a>
        <a 
          routerLink="/upcoming-events" 
          routerLinkActive="bg-ocean-50 text-ocean-700"
          (click)="navigateAndScroll()"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ocean-700 hover:bg-gray-50 transition-colors duration-200"
        >
          {{'nav.upcomingEvents' | translate}}
        </a>
        <a 
          routerLink="/branches" 
          routerLinkActive="bg-ocean-50 text-ocean-700"
          (click)="navigateAndScroll()"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ocean-700 hover:bg-gray-50 transition-colors duration-200"
        >
          {{'nav.branches' | translate}}
        </a>
        <a 
          routerLink="/collaborate" 
          routerLinkActive="bg-ocean-50 text-ocean-700"
          (click)="navigateAndScroll()"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ocean-700 hover:bg-gray-50 transition-colors duration-200"
        >
          {{'nav.collaborate' | translate}}
        </a>
        <a 
          routerLink="/contact" 
          routerLinkActive="bg-ocean-50 text-ocean-700"
          (click)="navigateAndScroll()"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ocean-700 hover:bg-gray-50 transition-colors duration-200"
        >
          {{'nav.contact' | translate}}
        </a>
      </div>
    </div>
  }
</nav>
<div class="h-20"></div>
`
})
export class NavbarComponent {
  protected readonly isMenuOpen = signal(false);
  protected readonly isLangMenuOpen = signal(false);

  constructor(protected translationService: TranslationService) {}

  get currentLang() {
    return this.translationService.currentLang$;
  }

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
    this.isLangMenuOpen.set(false);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  toggleLangMenu(): void {
    this.isLangMenuOpen.update(value => !value);
  }

  switchLanguage(lang: Language): void {
    this.translationService.switchLanguage(lang);
    this.isLangMenuOpen.set(false);
    this.closeMenu();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateAndScroll(): void {
    this.closeMenu();
    this.scrollToTop();
  }
}
