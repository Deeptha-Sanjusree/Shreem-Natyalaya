import { Component, OnInit, signal, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslationService } from '../services/translation.service';

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, TranslatePipe],
  styles: [`
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }
    .animate-blink {
      animation: blink 1s ease-in-out 3;
    }
  `],
  //templateUrl: './home.component.html',
  template:`<!-- Full Viewport Hero Section with Auto Background Carousel -->
  <section class="relative h-[60vh] md:h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Carousel Images -->
    <div class="absolute inset-0 z-0">
    @for (image of heroImages; track image; let i = $index) {
      <div 
        class="absolute inset-0 bg-cover bg-center md:bg-[center_20%] transition-opacity ease-in-out"
        [class.opacity-100]="currentSlide() === i"
        [class.opacity-0]="currentSlide() !== i"
        [style.background-image]="'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(' + image + ')'"
      ></div>
    }
  </div>


  <!-- Hero Content -->
  <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    @if (showHeroText()) {
    <div class="hidden md:block animate-fade-in-up animate-blink">
      <h1 class="text-5xl md:text-6xl lg:text-7xl text-white/50 font-serif font-bold text-white mb-6 drop-shadow-2xl">
        {{ 'home.hero.title' | translate }}
      </h1>
      <p class="text-2xl md:text-3xl text-white/60 mb-8 font-serif italic drop-shadow-lg">
        {{ 'home.hero.subtitle' | translate }}
      </p>
      <p class="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-md">
        {{ 'home.hero.description' | translate }}
      </p>
      <a 
        routerLink="/contact" 
        class="inline-block px-10 py-4 bg-ocean-800 hover:bg-ocean-500 text-white text-lg font-semibold rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:scale-105 hover:-translate-y-1"
      >
        {{ 'home.hero.cta' | translate }}
      </a>
    </div>
    }
  </div>

  <!-- Scroll Indicator -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce-slow">
    <svg class="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</section>

<!-- Introduction Section -->
<section class="py-16 md:py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="bg-gradient-to-br from-cream-50 to-ocean-50 border-2 border-ocean-200 rounded-xl p-8 md:p-12 lg:p-16">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-xl md:text-xl font-serif font-bold text-ocean-900 mb-6">
        {{'home.about.title' | translate }}
      </h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">   
        {{'home.about.description1' | translate }}
        {{'home.about.description2' | translate }}
      </p>
      <p class="text-lg text-gray-700 leading-relaxed">
        {{'home.about.description3' | translate }}
      </p>
    </div>
    </div>
  </div>
</section>

<!-- Courses Highlight -->
<section class="py-16 md:py-24 bg-cream-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-4">
        {{'courses.title' | translate }}
      </h2>
      <p class="text-lg text-gray-600">
        {{'courses.subtitle' | translate}}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Bharatanatyam -->
      <div class="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
        <div class="text-center mb-4">
          <div class="w-20 h-20 flex items-center justify-center mx-auto mb-4 overflow-hidden">
            <img src="/assets/images/natrajar.jpeg" class="w-full h-full object-contain" alt="Bharatanatyam"/>
          </div>
 <h3 class="text-xl font-serif font-semibold text-ocean-900 mb-3">{{'home.courses.bharatanatyam.title' | translate}}</h3>
          <p class="text-sm text-gray-600 mb-4">{{'home.courses.bharatanatyam.description' | translate}}</p>
        </div>
        <ul class="text-left space-y-2 mb-4 flex-grow">
          <li class="flex items-start text-sm text-gray-700">
            <svg class="w-4 h-4 text-ocean-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>{{'home.courses.bharatanatyam.point1' | translate}}</span>
          </li>
          <li class="flex items-start text-sm text-gray-700">
            <svg class="w-4 h-4 text-ocean-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>{{'home.courses.bharatanatyam.point2' | translate}}</span>
          </li>
          <li class="flex items-start text-sm text-gray-700">
            <svg class="w-4 h-4 text-ocean-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>{{'home.courses.bharatanatyam.point3' | translate}}</span>
          </li>
        </ul>
        <div class="text-center">
          <a routerLink="/courses" class="text-ocean-700 hover:text-ocean-800 font-semibold text-sm">
             {{ 'home.courses.bharatanatyam.learnmore' | translate }}
          </a>
        </div>
      </div>

      <!-- Veena -->
      <div class="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
        <div class="text-center mb-4">
          <div class="w-20 h-20 flex items-center justify-center mx-auto mb-4 overflow-hidden">
            <img src="/assets/images/veenai.jpeg" class="w-full h-full object-contain" alt="Veena"/>
          </div>
          <h3 class="text-xl font-serif font-semibold text-ocean-900 mb-3">{{'home.courses.veena.title' | translate}}</h3>
          <p class="text-sm text-gray-600 mb-4">{{'home.courses.veena.description' | translate}}</p>
        </div>
        <ul class="text-left space-y-2 mb-4 flex-grow">
          <li class="flex items-start text-sm text-gray-700">
            <svg class="w-4 h-4 text-ocean-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>{{'home.courses.veena.point1' | translate}}</span>
          </li>
          <li class="flex items-start text-sm text-gray-700">
            <svg class="w-4 h-4 text-ocean-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>{{'home.courses.veena.point2' | translate}}</span>
          </li>
          <li class="flex items-start text-sm text-gray-700">
            <svg class="w-4 h-4 text-ocean-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>{{'home.courses.veena.point3' | translate}}</span>
          </li>
        </ul>
        <div class="text-center">
          <a routerLink="/courses" class="text-ocean-700 hover:text-ocean-800 font-semibold text-sm">
            {{'home.courses.veena.learnmore' | translate}}
          </a>
        </div>
      </div>

      <!-- Slokam -->
      <div class="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
        <div class="text-center mb-4">
          <div class="w-20 h-20 flex items-center justify-center mx-auto mb-4 overflow-hidden">
            <img src="/assets/images/slokam.png" class="w-full h-full object-contain" alt="Slokam"/>
          </div>
          <h3 class="text-xl font-serif font-semibold text-ocean-900 mb-3">{{'home.courses.slokam.title' | translate}}</h3>
          <p class="text-sm text-gray-600 mb-4">{{'home.courses.slokam.description' | translate}}</p>
        </div>
        <ul class="text-left space-y-2 mb-4 flex-grow">
          <li class="flex items-start text-sm text-gray-700">
            <svg class="w-4 h-4 text-ocean-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>{{'home.courses.slokam.point1' | translate}}</span>
          </li>
          <li class="flex items-start text-sm text-gray-700">
            <svg class="w-4 h-4 text-ocean-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>{{'home.courses.slokam.point2' | translate}}</span>
          </li>
          <li class="flex items-start text-sm text-gray-700">
            <svg class="w-4 h-4 text-ocean-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>{{'home.courses.slokam.point3' | translate}}</span>
          </li>
        </ul>
        <div class="text-center">
          <a routerLink="/courses" class="text-ocean-700 hover:text-ocean-800 font-semibold text-sm">
            {{'home.courses.slokam.learnmore' | translate}}
          </a>
        </div>
      </div>

      <!-- Keyboard -->
      <div class="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
        <div class="text-center mb-4">
          <div class="w-20 h-20 flex items-center justify-center mx-auto mb-4 text-5xl">
             🎹
          </div>
          <h3 class="text-xl font-serif font-semibold text-ocean-900 mb-3">{{'home.courses.keyboard.title' | translate}}</h3>
          <p class="text-sm text-gray-600 mb-4">{{'home.courses.keyboard.description' | translate}}</p>
        </div>
        <ul class="text-left space-y-2 mb-4 flex-grow">
          <li class="flex items-start text-sm text-gray-700">
            <svg class="w-4 h-4 text-ocean-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>{{'home.courses.keyboard.point1' | translate}}</span>
          </li>
          <li class="flex items-start text-sm text-gray-700">
            <svg class="w-4 h-4 text-ocean-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>{{'home.courses.keyboard.point2' | translate}}</span>
          </li>
          <li class="flex items-start text-sm text-gray-700">
            <svg class="w-4 h-4 text-ocean-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>{{'home.courses.keyboard.point3' | translate}}</span>
          </li>
        </ul>
        <div class="text-center">
          <a routerLink="/courses" class="text-ocean-700 hover:text-ocean-800 font-semibold text-sm">
            {{'home.courses.keyboard.learnmore' | translate}}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Statistics Section -->
<section class="py-16 md:py-20 bg-ocean-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      @for (stat of stats; track stat.label) {
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
            {{ stat.value }}
          </div>
          <div class="text-cream-100 text-sm md:text-base">
            {{ stat.label }}
          </div>
        </div>
      }
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="py-16 md:py-24 bg-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <p class="text-sm uppercase tracking-wider text-ocean-600 mb-2">{{'home.testimonials.subtitle' | translate}}</p>
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-4">
        {{'home.testimonials.title' | translate}}
      </h2>
      <p class="text-lg text-gray-600">
        {{'home.testimonials.description' | translate}}
      </p>
    </div>

    <div class="relative">
      <!-- Testimonial Card -->
      <div class="bg-cream-50 rounded-2xl p-8 md:p-12 shadow-lg">
        <div class="flex items-start gap-4 mb-6">
          <div class="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg class="w-8 h-8 text-ocean-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold text-ocean-900 mb-1">
              {{ testimonials[currentTestimonialIndex()].name }}
            </h3>
            <p class="text-sm text-gray-600">
              {{ testimonials[currentTestimonialIndex()].role }}
            </p>
          </div>
        </div>
        
        <p class="text-lg text-gray-700 leading-relaxed italic mb-6">
          "{{ testimonials[currentTestimonialIndex()].text }}"
        </p>
        
        <div class="flex items-center gap-1">
          @for (star of [1,2,3,4,5]; track star) {
            <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          }
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button 
        (click)="previousTestimonial()"
        class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-ocean-700 hover:bg-ocean-50 transition-colors"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        (click)="nextTestimonial()"
        class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-ocean-700 hover:bg-ocean-50 transition-colors"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Indicators -->
      <div class="flex justify-center gap-2 mt-8">
        @for (testimonial of testimonials; track testimonial.name; let i = $index) {
          <button 
            (click)="currentTestimonialIndex.set(i)"
            [class.bg-ocean-700]="currentTestimonialIndex() === i"
            [class.bg-gray-300]="currentTestimonialIndex() !== i"
            class="w-2 h-2 rounded-full transition-colors"
            [attr.aria-label]="'Go to testimonial ' + (i + 1)"
          ></button>
        }
      </div>
    </div>
  </div>
</section>

<!-- Gallery Section -->
<section class="py-16 md:py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-4">
        {{'home.gallery.title' | translate}}
      </h2>
      <p class="text-lg text-gray-600">
        {{'home.gallery.description' | translate}}
      </p>
    </div>

    <!-- Image Grid -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <!-- Image 1 -->
      <div class="aspect-square bg-gradient-to-br from-ocean-100 to-cream-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <img src="/assets/images/arangetramgroupie.jpg" alt="Gallery Image 1" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      </div>
      
      <!-- Image 2 -->
      <div class="aspect-square bg-gradient-to-br from-cream-100 to-yellow-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <img src="/assets/images/group1.jpg" alt="Gallery Image 2" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      </div>
      
      <!-- Image 3 -->
      <div class="aspect-square bg-gradient-to-br from-ocean-100 to-cream-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <img src="/assets/images/groupie1.jpg" alt="Gallery Image 3" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      </div>
      
      <!-- Image 4 -->
      <div class="aspect-square bg-gradient-to-br from-cream-100 to-yellow-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <img src="/assets/images/stagegroupie.jpg" alt="Gallery Image 4" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      </div>
      
      <!-- Image 5 -->
      <div class="aspect-square bg-gradient-to-br from-yellow-100 to-ocean-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <img src="/assets/images/withmangaiamma.jpg" alt="Gallery Image 5" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      </div>
      
      <!-- Image 6 -->
      <div class="aspect-square bg-gradient-to-br from-ocean-100 to-cream-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <img src="/assets/images/withforeigners.jpg" alt="Gallery Image 6" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      </div>
      
      <!-- Image 7 -->
      <div class="aspect-square bg-gradient-to-br from-cream-100 to-yellow-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <img src="/assets/images/studentsgroupie.jpg" alt="Gallery Image 7" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      </div>
      
      <!-- Image 8 -->
      <div class="aspect-square bg-gradient-to-br from-yellow-100 to-ocean-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <img src="/assets/images/groupiewithparents.jpg" alt="Gallery Image 8" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="py-16 md:py-24 bg-cream-50">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-4">
        {{'home.faq.title' | translate}}
      </h2>
      <p class="text-lg text-gray-600">
        {{'home.faq.description' | translate}}
      </p>
    </div>

    <div class="space-y-4">
      @for (faq of faqs; track faq.question; let i = $index) {
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <button 
            (click)="toggleFAQ(i)"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-cream-50 transition-colors"
          >
            <span class="font-semibold text-ocean-900 pr-4">{{ faq.question }}</span>
            <svg 
              [class.rotate-180]="faq.isOpen"
              class="w-5 h-5 text-ocean-700 transition-transform flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          @if (faq.isOpen) {
            <div class="px-6 pb-4 text-gray-700 leading-relaxed">
              {{ faq.answer }}
            </div>
          }
        </div>
      }
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="py-16 md:py-24 bg-ocean-900 text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl md:text-4xl font-serif font-bold mb-6">
      {{'home.cta.title' | translate}}
    </h2>
    <p class="text-lg text-cream-100 mb-10 leading-relaxed">
      {{'home.cta.description' | translate}}
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        routerLink="/contact" 
        class="inline-block px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        {{'home.cta.enrollButton' | translate}}
      </a>
      <a 
        routerLink="/courses" 
        class="inline-block px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-ocean-900 text-white font-semibold rounded-lg transition-all duration-300"
      >
        {{'home.cta.coursesButton' | translate}}
      </a>
    </div>
  </div>
</section>
`
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = signal(0);
  currentTestimonialIndex = signal(0);
  showHeroText = signal(true);
  private carouselInterval: any;
  private heroTextTimeout: any;
  
  stats = [
    { label: 'Active Students', value: '30+', icon: 'users' },
    { label: 'Years of Excellence', value: '10+', icon: 'calendar' },
    { label: 'Courses Offered', value: '4', icon: 'book' },
    { label: 'Performances', value: '50+', icon: 'book' }
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Priya Sharma',
      role: 'Parent of Bharatanatyam Student',
      text: 'My daughter has been learning Bharatanatyam here for 3 months. The dedication and authentic teaching methods have truly transformed her understanding of this beautiful art form. The guru\'s patience and expertise are exceptional.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Parent of Veena Student',
      text: 'The traditional guru-shishya approach to teaching Veena has given my son not just musical skills, but also discipline and cultural values. We are grateful for the personalized attention and deep knowledge shared.'
    },
    {
      name: 'Meera Iyer',
      role: 'Parent of Slokam Student',
      text: 'Learning slokas here has connected my children to their roots. The pronunciation, meaning, and spiritual significance are all taught with such care. It\'s more than just recitation - it\'s a complete cultural education.'
    }
  ];

  faqs: FAQ[] = [];

  constructor(
    private title: Title,
    private meta: Meta,
    private translationService: TranslationService
  ) {}

  // Hero carousel background images
  heroImages = [
    '/assets/images/founder.png',
    '/assets/images/mnr.jpg',
    '/assets/images/stagegroupie1.jpg',
    '/assets/images/ranganathar1.jpg',
    '/assets/images/perumal.jpg',
    '/assets/images/arangetramgroupie.jpg',
    '/assets/images/founder3.jpg'
    
  ];

  ngOnInit(): void {
    this.title.setTitle('Shreem Natyalaya - Classical Dance & Music Academy');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Premier classical Indian arts academy offering Bharatanatyam, Veena, Slokam, and Keyboard. Authentic guru-shishya tradition with expert instruction.' 
    });
    
    // Load FAQ data from translations
    this.loadFAQData();
    
    // Subscribe to translation changes
    this.translationService.translationsLoaded$.subscribe((loaded) => {
      if (loaded) {
        this.loadFAQData();
      }
    });
    
    // Auto-play carousel - change every 3 seconds
    this.carouselInterval = setInterval(() => {
      this.currentSlide.update(slide => (slide + 1) % this.heroImages.length);
    }, 3000);
    
    // Hide hero text after 5 seconds with blink effect
    this.heroTextTimeout = setTimeout(() => {
      this.showHeroText.set(false);
    }, 5000);
  }

  private loadFAQData(): void {
    const faqData = this.translationService.get('home.faq.questions');
    if (faqData && Array.isArray(faqData)) {
      this.faqs = faqData.map((faq: any) => ({
        question: faq.question,
        answer: faq.answer,
        isOpen: false
      }));
    }
  }

  ngOnDestroy(): void {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
    if (this.heroTextTimeout) {
      clearTimeout(this.heroTextTimeout);
    }
  }

  nextTestimonial(): void {
    this.currentTestimonialIndex.update(index => 
      (index + 1) % this.testimonials.length
    );
  }

  previousTestimonial(): void {
    this.currentTestimonialIndex.update(index => 
      index === 0 ? this.testimonials.length - 1 : index - 1
    );
  }

  toggleFAQ(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
