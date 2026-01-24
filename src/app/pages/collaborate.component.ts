import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslationService } from '../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collaborate',
  standalone: true,
  imports: [RouterLink, TranslatePipe, CommonModule],
  template: `
  <!-- Exclusive Notice Banner -->
  <div class="bg-yellow-50 border-l-4 border-yellow-500 py-3">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center">
        <svg class="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
        </svg>
        <p class="text-sm font-medium text-yellow-800">
          <span class="font-bold">{{ 'collaborate.exclusiveNotice' | translate }}</span> {{ 'collaborate.exclusiveText' | translate }}
        </p>
      </div>
    </div>
    </div>

  <!-- Hero Section -->
  <section class="relative bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-900 text-white py-16 md:py-24">
    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center">
        <div class="inline-flex items-center bg-yellow-500/20 rounded-full px-4 py-2 mb-6">
          <svg class="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
          </svg>
          <span class="text-sm font-semibold text-yellow-100">{{ 'collaborate.badge' | translate }}</span>
        </div>
        <h1 class="text-3xl md:text-5xl font-serif font-bold mb-4">
          {{ 'collaborate.title' | translate }}
        </h1>
        <p class="text-xl md:text-2xl text-ocean-100 font-light mb-2">
          {{ 'collaborate.subtitle' | translate }}
        </p>
        <p class="text-base md:text-lg text-ocean-200 max-w-3xl mx-auto leading-relaxed">
          {{ 'collaborate.description' | translate }}
        </p>
      </div>
    </div>
  </section>

  <!-- Target Institutions Section -->
  <section class="py-12 md:py-16 bg-gradient-to-br from-cream-50 to-ocean-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <h2 class="text-2xl md:text-3xl font-serif font-bold text-ocean-900 mb-3">
          {{ 'collaborate.partners.title' | translate }}
        </h2>
        <p class="text-gray-600">{{ 'collaborate.partners.subtitle' | translate }}</p>
      </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      @for (partner of translationService.get('collaborate.partners.types'); track $index; let i = $index) {
        <div class="bg-white rounded-xl p-6 border-2 transition-all duration-300"
             [class.border-ocean-100]="i % 2 === 0"
             [class.border-yellow-100]="i % 2 !== 0">
          <div class="w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto"
               [class.bg-ocean-100]="i % 2 === 0"
               [class.bg-yellow-100]="i % 2 !== 0">
            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                 [class.text-ocean-700]="i % 2 === 0"
                 [class.text-yellow-700]="i % 2 !== 0">
              @if (i === 0) {
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              } @else if (i === 1) {
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              } @else if (i === 2) {
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              } @else if (i === 3) {
                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
              } @else if (i === 4) {
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              } @else {
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
              }
            </svg>
          </div>
          <h3 class="text-lg font-serif font-bold text-ocean-900 text-center mb-2">
            {{ partner.title }}
          </h3>
          <p class="text-sm text-gray-600 text-center">
            {{ partner.description }}
          </p>
        </div>
      }
    </div>
  </div>
</section>

<!-- Partnership Benefits Section -->
<section class="py-12 md:py-16 bg-white">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-2xl md:text-3xl font-serif font-bold text-ocean-900 mb-3">
        {{ 'collaborate.benefits.title' | translate }}
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        {{ 'collaborate.benefits.subtitle' | translate }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      @for (benefit of translationService.get('collaborate.benefits.list'); track $index; let i = $index) {
        <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
             [class.shadow-lg]="i === 0"
             [class.p-8]="i === 0">
          <div class="rounded-full flex items-center justify-center mx-auto mb-4"
               [class.w-16]="i === 0"
               [class.h-16]="i === 0"
               [class.w-14]="i !== 0"
               [class.h-14]="i !== 0"
               [class.mb-6]="i === 0"
               [class.bg-gradient-to-br]="true"
               [class.from-ocean-600]="i % 2 === 0"
               [class.to-ocean-700]="i % 2 === 0"
               [class.from-yellow-600]="i % 2 !== 0"
               [class.to-yellow-700]="i % 2 !== 0">
            <svg class="text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 [class.w-8]="i === 0"
                 [class.h-8]="i === 0"
                 [class.w-7]="i !== 0"
                 [class.h-7]="i !== 0">
              @if (i === 0) {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              } @else if (i === 1) {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              } @else if (i === 2) {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              } @else if (i === 3) {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              } @else {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              }
            </svg>
          </div>
          <h3 class="text-lg font-serif font-bold text-ocean-900 mb-2 text-center">
            {{ benefit.title }}
          </h3>
          <p class="text-sm text-gray-600 text-center">
            {{ benefit.description }}
          </p>
        </div>
      }
    </div>
  </div>
</section>

<!-- Mutual Benefits Section -->
<section class="py-16 md:py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-2xl md:text-3xl font-serif font-bold text-ocean-900 mb-3">
        {{ 'collaborate.mutualBenefits.title' | translate }}
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        {{ 'collaborate.mutualBenefits.subtitle' | translate }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- For Your Institution -->
      <div class="bg-gradient-to-br from-ocean-50 to-ocean-100 rounded-2xl p-8 border-2 border-ocean-200 hover:border-ocean-400 transition-all duration-300">
        <div class="text-center mb-6">
          <div class="w-16 h-16 bg-gradient-to-br from-ocean-600 to-ocean-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
          </div>
          <h3 class="text-xl font-serif font-bold text-ocean-900">
            {{ 'collaborate.mutualBenefits.institution.title' | translate }}
          </h3>
        </div>
        <ul class="space-y-3">
          @for (item of translationService.get('collaborate.mutualBenefits.institution.items'); track item) {
            <li class="flex items-start">
              <svg class="w-5 h-5 text-ocean-700 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700">{{ item }}</span>
            </li>
          }
        </ul>
      </div>

      <!-- For Shreem Natyalaya -->
      <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300">
        <div class="text-center mb-6">
          <div class="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-xl font-serif font-bold text-ocean-900">
            {{ 'collaborate.mutualBenefits.shreem.title' | translate }}
          </h3>
        </div>
        <ul class="space-y-3">
          @for (item of translationService.get('collaborate.mutualBenefits.shreem.items'); track item) {
            <li class="flex items-start">
              <svg class="w-5 h-5 text-yellow-700 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700">{{ item }}</span>
            </li>
          }
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Contact CTA Section -->
<section class="py-16 md:py-20 bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-900 text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-10">
      <div class="inline-flex items-center bg-yellow-500/20 rounded-full px-4 py-2 mb-6">
        <svg class="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
        </svg>
        <span class="text-sm font-semibold text-yellow-100">{{ 'collaborate.contactCTA.badge' | translate }}</span>
      </div>
      <h2 class="text-3xl md:text-4xl font-serif font-bold mb-4">
        {{ 'collaborate.contactCTA.title' | translate }}
      </h2>
      <p class="text-lg md:text-xl text-ocean-100 mb-8 leading-relaxed">
        {{ 'collaborate.contactCTA.subtitle' | translate }}
      </p>
    </div>

    <!-- Contact Information Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      <!-- Email Contact -->
      <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <div class="flex items-center mb-3">
          <svg class="w-6 h-6 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <h3 class="text-lg font-semibold">{{ 'collaborate.contactCTA.email.title' | translate }}</h3>
        </div>
        <p class="text-ocean-100 text-sm">
          {{ 'collaborate.contactCTA.email.description' | translate }}
          <br>
          <p class="text-yellow-300 font-semibold text-lg">{{ 'collaborate.contactCTA.email.address' | translate }}
        </p>
      </div>

      <!-- Phone Contact -->
      <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <div class="flex items-center mb-3">
          <svg class="w-6 h-6 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <h3 class="text-lg font-semibold">{{ 'collaborate.contactCTA.phone.title' | translate }}</h3>
        </div>
        <p class="text-ocean-100 text-sm mb-2">
          {{ 'collaborate.contactCTA.phone.description' | translate }}
        </p>
        <p class="text-yellow-300 font-semibold text-lg">
          {{ 'collaborate.contactCTA.phone.number' | translate }}
        </p>
      </div>
    </div>

    <!-- CTA Button -->
    <div class="text-center mt-10">
      <a 
        routerLink="/contact" 
        class="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-ocean-900 px-10 py-4 rounded-lg font-semibold text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
      >
        {{ 'collaborate.contactCTA.button' | translate }}
      </a>
      <p class="text-ocean-200 text-sm mt-4">
        {{ 'collaborate.contactCTA.note' | translate }}
      </p>
    </div>
  </div>
</section>
`
})
export class CollaborateComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    protected translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Collaborate With Us - Shreem Natyalaya | Partner for Classical Arts Education');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Partner with Shreem Natyalaya to bring authentic classical arts education to your institution. We offer structured curriculum, expert instruction, and cultural enrichment for play schools, educational institutions, and cultural organizations.' 
    });
  }
}
