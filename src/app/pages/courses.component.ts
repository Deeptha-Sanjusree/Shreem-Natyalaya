import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslationService } from '../services/translation.service';

interface Course {
  id: string;
  icon: string;
  color: string;
  route: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  template: `
<!-- Hero Section -->
<section class="relative bg-ocean-900 text-white py-16 md:py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-serif font-bold mb-6">
        {{ 'home.ourCourses.pageTitle' | translate }}
      </h1>

      <p class="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
        {{ 'home.ourCourses.pageDescription' | translate }}
      </p>

      <!-- Learning Modes -->
      <div class="max-w-4xl mx-auto mt-8 bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

          <!-- Online Classes -->
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-gradient-to-br from-ocean-600 to-ocean-700 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div class="text-left">
              <h3 class="text-lg font-serif font-bold text-ocean-900 mb-2">
                {{ 'home.ourCourses.online.title' | translate }}
              </h3>
              <p class="text-gray-700 text-sm">
                {{ 'home.ourCourses.online.desc' | translate }}
              </p>
            </div>
          </div>

          <!-- Offline Classes -->
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"/>
              </svg>
            </div>
            <div class="text-left">
              <h3 class="text-lg font-serif font-bold text-ocean-900 mb-2">
                {{ 'home.ourCourses.offline.title' | translate }}
              </h3>
              <p class="text-gray-700 text-sm">
                {{ 'home.ourCourses.offline.desc' | translate }}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

<!-- Courses Grid -->
<section class="py-16 md:py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

      @for (course of courses; track course.id) {
        <a
          [routerLink]="course.route"
          class="group bg-cream-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          <div class="p-8 md:p-10">
            <div class="flex gap-6">

              <!-- Icon -->
              <div class="w-16 h-16 rounded-xl flex items-center justify-center">
                @if (course.icon === 'dance') {
                  <img src="/assets/images/natrajar.jpeg" class="w-full h-full object-contain">
                }
                @if (course.icon === 'music') {
                  <img src="/assets/images/veenai.jpeg" class="w-full h-full object-contain">
                }
                @if (course.icon === 'book') {
                  <img src="/assets/images/slokam.png" class="w-full h-full object-contain">
                }
                @if (course.icon === 'piano') {
                  <span class="text-4xl">🎹</span>
                }
              </div>

              <!-- Content -->
              <div class="flex-1">
                <h2 class="text-2xl md:text-3xl font-serif font-bold text-ocean-900 mb-3">
                  {{ 'home.ourCourses.list.' + course.id + '.title' | translate }}
                </h2>

                <p class="text-gray-700 mb-4">
                  {{ 'home.ourCourses.list.' + course.id + '.description' | translate }}
                </p>

                <div class="flex items-center text-ocean-700 font-semibold">
                  <span>{{ 'home.ourCourses.learnMore' | translate }}</span>
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </a>
      }

    </div>
  </div>
</section>
`
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { id: 'bharatanatyam', icon: 'dance', color: 'ocean', route: '/courses/bharatanatyam' },
    { id: 'veena', icon: 'music', color: 'yellow', route: '/courses/veena' },
    { id: 'slokam', icon: 'book', color: 'ocean', route: '/courses/slokam' },
    { id: 'keyboard', icon: 'piano', color: 'yellow', route: '/courses/keyboard' }
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    protected translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Courses - Shreem Natyalaya');
    this.meta.updateTag({
      name: 'description',
      content: 'Classical arts courses at Shreem Natyalaya'
    });
  }
}
