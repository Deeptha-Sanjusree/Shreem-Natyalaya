import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template:`
  <nav class="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center h-20 gap-10">
      <!-- Logo -->
      <a routerLink="/" class="flex items-center space-x-3 shrink-0" (click)="closeMenu()">
        <div class="text-2xl font-serif font-bold text-ocean-800 whitespace-nowrap">
          Shreem Natyalaya
        </div>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8 whitespace-nowrap flex-nowrap">
        <a 
          routerLink="/" 
          routerLinkActive="text-ocean-700 font-semibold"
          [routerLinkActiveOptions]="{exact: true}"
          class="text-gray-700 hover:text-ocean-700 transition-colors duration-200 font-medium whitespace-nowrap"
        >
          Home
        </a>
        <a 
          routerLink="/about-guru" 
          routerLinkActive="text-ocean-700 font-semibold"
          class="text-gray-700 hover:text-ocean-700 transition-colors duration-200 font-medium whitespace-nowrap"
        >
          About Guru
        </a>
        <a 
          routerLink="/guru-parampara" 
          routerLinkActive="text-ocean-700 font-semibold"
          class="text-gray-700 hover:text-ocean-700 transition-colors duration-200 font-medium whitespace-nowrap"
        >
          Guru Parampara
        </a>
        <a 
          routerLink="/courses" 
          routerLinkActive="text-ocean-700 font-semibold"
          class="text-gray-700 hover:text-ocean-700 transition-colors duration-200 font-medium whitespace-nowrap"
        >
          Courses
        </a>
        <a 
          routerLink="/upcoming-events" 
          routerLinkActive="text-ocean-700 font-semibold"
          class="text-gray-700 hover:text-ocean-700 transition-colors duration-200 font-medium whitespace-nowrap"
        >
          Upcoming Events
        </a>
        <a 
          routerLink="/branches" 
          routerLinkActive="text-ocean-700 font-semibold"
          class="text-gray-700 hover:text-ocean-700 transition-colors duration-200 font-medium whitespace-nowrap"
        >
          Our Branches
        </a>
        <a 
          routerLink="/collaborate" 
          routerLinkActive="text-ocean-700 font-semibold"
          class="text-gray-700 hover:text-ocean-700 transition-colors duration-200 font-medium whitespace-nowrap"
        >
          Collaborate with us
        </a>
        <a 
          routerLink="/contact" 
          routerLinkActive="text-ocean-700 font-semibold"
          class="text-gray-700 hover:text-ocean-700 transition-colors duration-200 font-medium whitespace-nowrap"
        >
          Contact
        </a>
      </div>

      <!-- Mobile menu button -->
      <button 
        (click)="toggleMenu()"
        class="md:hidden ml-auto inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-ocean-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ocean-500"
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
          (click)="closeMenu()"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ocean-700 hover:bg-gray-50 transition-colors duration-200"
        >
          Home
        </a>
        <a 
          routerLink="/about-guru" 
          routerLinkActive="bg-ocean-50 text-ocean-700"
          (click)="closeMenu()"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ocean-700 hover:bg-gray-50 transition-colors duration-200"
        >
          About Guru
        </a>
        <a 
          routerLink="/guru-parampara" 
          routerLinkActive="bg-ocean-50 text-ocean-700"
          (click)="closeMenu()"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ocean-700 hover:bg-gray-50 transition-colors duration-200"
        >
          Guru Parampara
        </a>
        <a 
          routerLink="/courses" 
          routerLinkActive="bg-ocean-50 text-ocean-700"
          (click)="closeMenu()"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ocean-700 hover:bg-gray-50 transition-colors duration-200"
        >
          Courses
        </a>
        <a 
          routerLink="/upcoming-events" 
          routerLinkActive="bg-ocean-50 text-ocean-700"
          (click)="closeMenu()"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ocean-700 hover:bg-gray-50 transition-colors duration-200"
        >
          Upcoming Events
        </a>
        <a 
          routerLink="/branches" 
          routerLinkActive="bg-ocean-50 text-ocean-700"
          (click)="closeMenu()"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ocean-700 hover:bg-gray-50 transition-colors duration-200"
        >
          Our Branches
        </a>
        <a 
          routerLink="/collaborate" 
          routerLinkActive="bg-ocean-50 text-ocean-700"
          (click)="closeMenu()"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ocean-700 hover:bg-gray-50 transition-colors duration-200"
        >
          Collaborate with us
        </a>
        <a 
          routerLink="/contact" 
          routerLinkActive="bg-ocean-50 text-ocean-700"
          (click)="closeMenu()"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ocean-700 hover:bg-gray-50 transition-colors duration-200"
        >
          Contact
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

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
