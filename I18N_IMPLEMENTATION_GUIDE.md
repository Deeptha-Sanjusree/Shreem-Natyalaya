# Internationalization (i18n) Implementation Guide

## Overview
This guide explains how to implement English and Tamil language support for the Shreem Natyalaya website.

## Files Created

### 1. Translation Files
- `/src/assets/i18n/en.json` - English translations
- `/src/assets/i18n/ta.json` - Tamil translations

### 2. Service & Pipe
- `/src/app/services/translation.service.ts` - Translation service
- `/src/app/pipes/translate.pipe.ts` - Translation pipe for templates

## Implementation Steps

### Step 1: Update Navbar Component

The navbar component needs to be updated to include a language switcher. Here's what needs to be added:

1. **Import the translation service and pipe:**
```typescript
import { TranslationService, Language } from '../services/translation.service';
import { TranslatePipe } from '../pipes/translate.pipe';
```

2. **Add to imports array:**
```typescript
imports: [CommonModule, RouterLink, RouterLinkActive, TranslatePipe]
```

3. **Add language switcher UI in the template** (after the navigation links, before mobile menu button):
```html
<!-- Language Switcher (Desktop) -->
<div class="hidden md:flex items-center ml-auto">
  <div class="relative">
    <button
      (click)="toggleLangMenu()"
      class="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
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
      <div class="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
        <div class="py-1">
          <button
            (click)="switchLanguage('en')"
            class="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            [class.bg-ocean-50]="currentLang() === 'en'"
            [class.text-ocean-700]="currentLang() === 'en'"
            [class.font-semibold]="currentLang() === 'en'"
          >
            English
          </button>
          <button
            (click)="switchLanguage('ta')"
            class="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
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
```

4. **Add language switcher to mobile menu** (at the end of mobile menu links):
```html
<!-- Language Switcher (Mobile) -->
<div class="border-t border-gray-200 pt-2 mt-2">
  <div class="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
    Language / மொழி
  </div>
  <button
    (click)="switchLanguage('en')"
    class="w-full text-left px-3 py-2 rounded-md text-base font-medium"
    [class.bg-ocean-50]="currentLang() === 'en'"
    [class.text-ocean-700]="currentLang() === 'en'"
  >
    English
  </button>
  <button
    (click)="switchLanguage('ta')"
    class="w-full text-left px-3 py-2 rounded-md text-base font-medium"
    [class.bg-ocean-50]="currentLang() === 'ta'"
    [class.text-ocean-700]="currentLang() === 'ta'"
  >
    தமிழ் (Tamil)
  </button>
</div>
```

5. **Update the component class:**
```typescript
export class NavbarComponent {
  protected readonly isMenuOpen = signal(false);
  protected readonly isLangMenuOpen = signal(false);

  constructor(protected translationService: TranslationService) {}

  currentLang = this.translationService.currentLang$;

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
```

### Step 2: Use Translations in Components

To use translations in any component:

1. **Import the pipe:**
```typescript
import { TranslatePipe } from '../pipes/translate.pipe';
```

2. **Add to imports:**
```typescript
imports: [CommonModule, TranslatePipe]
```

3. **Use in template:**
```html
<!-- Simple translation -->
<h1>{{ 'home.hero.title' | translate }}</h1>

<!-- In attributes -->
<button [attr.aria-label]="'common.close' | translate">
  {{ 'common.close' | translate }}
</button>
```

### Step 3: Access Translation Data in TypeScript

If you need to access translations in TypeScript code:

```typescript
constructor(private translationService: TranslationService) {}

ngOnInit() {
  // Get a single translation
  const title = this.translationService.translate('home.hero.title');
  
  // Get an object/array
  const coursePoints = this.translationService.get('home.courses.bharatanatyam.points');
}
```

## Translation Keys Structure

The JSON files are organized hierarchically:

```
nav.*                    - Navigation items
home.hero.*             - Home page hero section
home.courses.*          - Course cards
home.stats.*            - Statistics section
home.whyChoose.*        - Why choose us section
courses.*               - Courses page
courseDetail.*          - Course detail page
guruParampara.*         - Guru Parampara page
gallery.*               - Gallery page
contact.*               - Contact page
footer.*                - Footer content
common.*                - Common UI elements
```

## Features

1. **Persistent Language Selection**: User's language preference is saved in localStorage
2. **Automatic Loading**: Translations load automatically on app start
3. **Reactive Updates**: All components update immediately when language changes
4. **Fallback**: Falls back to English if translation file fails to load
5. **Type Safety**: Language type is restricted to 'en' | 'ta'

## Next Steps

1. Update navbar.component.ts with the language switcher code above
2. Update each component to use the translate pipe
3. Replace hard-coded text with translation keys
4. Test language switching functionality
5. Add more translation keys as needed

## Example Component Update

Before:
```html
<h1>Welcome to Shreem Natyalaya</h1>
<p>Learn classical arts</p>
```

After:
```html
<h1>{{ 'home.hero.title' | translate }}</h1>
<p>{{ 'home.hero.subtitle' | translate }}</p>
```

## Testing

1. Start the development server
2. Click the language switcher in the navbar
3. Verify all text changes to the selected language
4. Refresh the page - language preference should persist
5. Test on mobile view as well

## Notes

- The translation service is provided at root level, so it's available throughout the app
- Translations are loaded asynchronously, so there may be a brief moment before they appear
- You can add more languages by creating additional JSON files (e.g., `hi.json` for Hindi)
- Update the `Language` type in `translation.service.ts` if adding more languages
