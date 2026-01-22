import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

interface SyllabusLevel {
  level: string;
  title: string;
  duration: string;
  color: string;
  theory: string[];
  practical: string[];
}

interface CourseDetail {
  id: string;
  name: string;
  tagline: string;
  description: string;
  whatYouLearn: string[];
  duration: string;
  ageGroup: string;
  classFormat: string;
  benefits: string[];
  color: string;
  syllabus?: SyllabusLevel[];
  studentBenefits?: string[];
}

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `@if (course) {
  <!-- Hero Section -->
  <section 
    [class]="'py-16 md:py-24 ' + (course.color === 'ocean' ? 'bg-gradient-to-br from-ocean-700 to-ocean-900' : 'bg-gradient-to-br from-yellow-600 to-yellow-800')"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center text-white">
        <h1 class="text-4xl md:text-6xl font-serif font-bold mb-4">
          {{ course.name }}
        </h1>
        <p class="text-xl md:text-2xl text-white text-opacity-90">
          {{ course.tagline }}
        </p>
      </div>
    </div>
  </section>

  <!-- Course Description -->
  <section class="py-16 md:py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <p class="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
        {{ course.description }}
      </p>
    </div>
  </section>
 <!-- Keyboard Specific Note -->
 @if (course.id === 'keyboard') {
   <section class="pt-0 pb-6 bg-white">
     <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
       <div class="flex items-start gap-3 bg-yellow-50 border border-yellow-200 text-yellow-900 rounded-xl p-4">
         <svg class="w-5 h-5 mt-0.5 text-yellow-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
           <path fill-rule="evenodd" d="M18 10A8 8 0 11.001 9.999 8 8 0 0118 10zm-8-4a1 1 0 00-.894.553l-3 6A1 1 0 007 14h6a1 1 0 00.894-1.447l-3-6A1 1 0 0010 6zm0 8a1.25 1.25 0 110-2.5A1.25 1.25 0 0110 14z" clip-rule="evenodd" />
         </svg>
         <p class="text-sm md:text-base leading-relaxed">
           <span class="font-semibold">Note:</span> If the student is interested to learn Western we will hire a mentor for that.
         </p>
       </div>
     </div>
   </section>
 }
 <!-- Course Details -->
  <section class="py-16 md:py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-12 text-center">
        Eligibility & Class details
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center p-6 bg-cream-50 rounded-xl">
          <div 
            [class]="'w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ' + 
            (course.color === 'ocean' ? 'bg-ocean-100' : 'bg-yellow-100')"
          >
            <svg 
              [class]="'w-8 h-8 ' + (course.color === 'ocean' ? 'text-ocean-700' : 'text-yellow-700')" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-ocean-900 mb-2">Duration</h3>
          <p class="text-gray-700">{{ course.duration }}</p>
        </div>

        <div class="text-center p-6 bg-cream-50 rounded-xl">
          <div 
            [class]="'w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ' + 
            (course.color === 'ocean' ? 'bg-ocean-100' : 'bg-yellow-100')"
          >
            <svg 
              [class]="'w-8 h-8 ' + (course.color === 'ocean' ? 'text-ocean-700' : 'text-yellow-700')" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-ocean-900 mb-2">Age Group</h3>
          <p class="text-gray-700">{{ course.ageGroup }}</p>
        </div>

        <div class="text-center p-6 bg-cream-50 rounded-xl">
          <div 
            [class]="'w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ' + 
            (course.color === 'ocean' ? 'bg-ocean-100' : 'bg-yellow-100')"
          >
            <svg 
              [class]="'w-8 h-8 ' + (course.color === 'ocean' ? 'text-ocean-700' : 'text-yellow-700')" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-ocean-900 mb-2">Class Schedule</h3>
          <p class="text-gray-700">{{ course.classFormat }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Syllabus Section -->
  @if (course.syllabus) {
    <section class="py-16 md:py-24 bg-gradient-to-br from-cream-50 to-ocean-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-serif font-bold text-ocean-900 mb-4">
            @if (course.id === 'bharatanatyam') {
              Shreem Natyalaya's Bharathanatyam Syllabus
            } @else if (course.id === 'veena') {
              Shreem Natyalaya's Veena Syllabus
            } @else if (course.id === 'slokam') {
              🕉️ Slokam Classes Syllabus
            } @else if (course.id === 'keyboard') {
              🎹 Keyboard Classes Syllabus
            } @else {
              {{ course.name }} Syllabus
            }
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            @if (course.id === 'bharatanatyam') {
              A comprehensive, structured learning path from foundation to Arangetram
            } @else if (course.id === 'veena') {
              Classical • Devotional • Indian Film Music — A complete musical journey
            } @else if (course.id === 'slokam') {
              Gayathri Mantras • Sanskrit & Tamil Sacred Works — Taught with pronunciation, rhythm, and complete meaning
            } @else if (course.id === 'keyboard') {
              Right-Hand Melody • Devotional • Indian Film Music — A practical, ear-based approach
            } @else {
              A comprehensive, structured learning path
            }
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mx-auto mt-6"></div>
        </div>

        <!-- Syllabus Levels Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (level of course.syllabus; track level.level) {
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
              
              <!-- Level Header -->
              <div 
                [class]="'p-6 text-white ' + 
                (level.color === 'green' ? 'bg-gradient-to-br from-green-600 to-green-700' : 
                 level.color === 'yellow' ? 'bg-gradient-to-br from-yellow-600 to-yellow-700' : 
                 level.color === 'orange' ? 'bg-gradient-to-br from-orange-600 to-orange-700' : 
                 level.color === 'blue' ? 'bg-gradient-to-br from-blue-600 to-blue-700' : 
                 'bg-gradient-to-br from-red-600 to-red-700')"
              >
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider opacity-90">{{ level.level }}</span>
                  @if (level.color === 'green') {
                    <span class="text-xl">🟢</span>
                  } @else if (level.color === 'yellow') {
                    <span class="text-xl">🟡</span>
                  } @else if (level.color === 'orange') {
                    <span class="text-xl">🟠</span>
                  } @else if (level.color === 'blue') {
                    <span class="text-xl">🔵</span>
                  } @else {
                    <span class="text-xl">🔴</span>
                  }
                </div>
                <h3 class="text-xl font-serif font-bold mb-3">{{ level.title }}</h3>
                <div class="inline-flex items-center bg-white bg-opacity-20 rounded-full px-3 py-1.5 text-sm">
                  <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-semibold">{{ level.duration }}</span>
                </div>
              </div>

              <!-- Level Content -->
              <div class="p-6 flex-grow">
                <!-- Theory -->
                <div class="mb-6">
                  <h4 class="text-base font-bold text-ocean-900 mb-3 flex items-center">
                    <svg class="w-5 h-5 mr-2 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Theory
                  </h4>
                  <ul class="space-y-2">
                    @for (item of level.theory; track item) {
                      <li class="flex items-start text-sm">
                        <span class="flex-shrink-0 w-1.5 h-1.5 bg-ocean-600 rounded-full mt-1.5 mr-2"></span>
                        <span class="text-gray-700 leading-relaxed">{{ item }}</span>
                      </li>
                    }
                  </ul>
                </div>

                <!-- Practical -->
                <div>
                  <h4 class="text-base font-bold text-ocean-900 mb-3 flex items-center">
                    <svg class="w-5 h-5 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Practical
                  </h4>
                  <ul class="space-y-2">
                    @for (item of level.practical; track item) {
                      <li class="flex items-start text-sm">
                        <span class="flex-shrink-0 w-1.5 h-1.5 bg-yellow-600 rounded-full mt-1.5 mr-2"></span>
                        <span class="text-gray-700 leading-relaxed">{{ item }}</span>
                      </li>
                    }
                  </ul>
                </div>
              </div>

            </div>
          }
        </div>

        <!-- Evaluation Note -->
        <div 
          [class]="'mt-12 rounded-xl p-8 text-white text-center ' + 
          (course.color === 'ocean' ? 'bg-gradient-to-r from-ocean-600 to-ocean-700' : 'bg-gradient-to-r from-yellow-600 to-yellow-700')"
        >
          <h3 class="text-2xl font-serif font-bold mb-4">
            @if (course.id === 'bharatanatyam') {
              🩰 Evaluation & Certification
            } @else if (course.id === 'veena') {
              🎼 Evaluation & Certification
            } @else if (course.id === 'slokam') {
              🎓 Evaluation & Certification
            } @else if (course.id === 'keyboard') {
              🎹 Evaluation & Certification
            } @else {
              📜 Evaluation & Certification
            }
          </h3>
          @if (course.id === 'veena') {
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
              <div class="bg-white bg-opacity-10 rounded-lg p-4">
                <p class="font-semibold">Classical Performance</p>
                <p class="text-sm text-white/80 mt-1">Carnatic repertoire</p>
              </div>
              <div class="bg-white bg-opacity-10 rounded-lg p-4">
                <p class="font-semibold">Devotional/Film Song</p>
                <p class="text-sm text-white/80 mt-1">Light music assessment</p>
              </div>
              <div class="bg-white bg-opacity-10 rounded-lg p-4">
                <p class="font-semibold">Theory Exam</p>
                <p class="text-sm text-white/80 mt-1">Written/oral test</p>
              </div>
              <div class="bg-white bg-opacity-10 rounded-lg p-4">
                <p class="font-semibold">Certification</p>
                <p class="text-sm text-white/80 mt-1">From Shreem Natyalaya</p>
              </div>
            </div>
          } @else if (course.id === 'slokam') {
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
              <div class="bg-white bg-opacity-10 rounded-lg p-4">
                <p class="font-semibold">Pronunciation Accuracy</p>
                <p class="text-sm text-white/80 mt-1">Sanskrit & Tamil clarity</p>
              </div>
              <div class="bg-white bg-opacity-10 rounded-lg p-4">
                <p class="font-semibold">Rhythm & Meaning</p>
                <p class="text-sm text-white/80 mt-1">Complete explanation</p>
              </div>
              <div class="bg-white bg-opacity-10 rounded-lg p-4">
                <p class="font-semibold">Stage/Temple Performance</p>
                <p class="text-sm text-white/80 mt-1">Public recitation</p>
              </div>
              <div class="bg-white bg-opacity-10 rounded-lg p-4">
                <p class="font-semibold">Certification</p>
                <p class="text-sm text-white/80 mt-1">From Shreem Natyalaya</p>
              </div>
            </div>
          } @else if (course.id === 'keyboard') {
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
              <div class="bg-white bg-opacity-10 rounded-lg p-4">
                <p class="font-semibold">Melody Clarity</p>
                <p class="text-sm text-white/80 mt-1">Right-hand accuracy</p>
              </div>
              <div class="bg-white bg-opacity-10 rounded-lg p-4">
                <p class="font-semibold">Rhythm Accuracy</p>
                <p class="text-sm text-white/80 mt-1">Tempo & timing</p>
              </div>
              <div class="bg-white bg-opacity-10 rounded-lg p-4">
                <p class="font-semibold">Song Continuity</p>
                <p class="text-sm text-white/80 mt-1">Stage performance</p>
              </div>
              <div class="bg-white bg-opacity-10 rounded-lg p-4">
                <p class="font-semibold">Certification</p>
                <p class="text-sm text-white/80 mt-1">From Shreem Natyalaya</p>
              </div>
            </div>
          } @else {
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
              <div class="bg-white bg-opacity-10 rounded-lg p-4">
                <p class="font-semibold">Practical Assessment</p>
                <p class="text-sm text-white/80 mt-1">Performance evaluation</p>
              </div>
              <div class="bg-white bg-opacity-10 rounded-lg p-4">
                <p class="font-semibold">Theory Test</p>
                <p class="text-sm text-white/80 mt-1">Oral/written examination</p>
              </div>
              <div class="bg-white bg-opacity-10 rounded-lg p-4">
                <p class="font-semibold">Annual Presentation</p>
                <p class="text-sm text-white/80 mt-1">Stage performance</p>
              </div>
              <div class="bg-white bg-opacity-10 rounded-lg p-4">
                <p class="font-semibold">Certification</p>
                <p class="text-sm text-white/80 mt-1">From Shreem Natyalaya</p>
              </div>
            </div>
          }
        </div>

        <!-- Guru Lineage Section (Only for Slokam) -->
        @if (course.id === 'slokam') {
          <div class="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 md:p-12 border-2 border-yellow-200 shadow-xl">
            <div class="text-center">
              <h3 class="text-2xl md:text-3xl font-serif font-bold text-ocean-900 mb-6">
                🎓 Guru Lineage
              </h3>
              <div class="max-w-3xl mx-auto">
                <div class="bg-white rounded-xl p-6 shadow-lg">
                  <p class="text-lg text-gray-700 mb-4 font-medium">
                    Tamil Sacred Works Training under:
                  </p>
                  <div class="flex items-center justify-center space-x-3 mb-2">
                    <span class="text-3xl">🌸</span>
                    <h4 class="text-xl md:text-2xl font-serif font-bold text-ocean-900">
                      Kalaimamani Smt. Desa. Mangayarkarasi
                    </h4>
                    <span class="text-3xl">🌸</span>
                  </div>
                  <p class="text-sm text-gray-600 italic mt-4">
                    Renowned expert in Tamil devotional literature and traditional chanting
                  </p>
                </div>
              </div>
            </div>
          </div>
        }

      </div>
    </section>
  }

  <!-- Student Benefits Section -->
  @if (course.studentBenefits) {
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-serif font-bold text-ocean-900 mb-4">
            Student Benefits & Opportunities
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Beyond learning, we offer real-world opportunities and career pathways
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mx-auto mt-6"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          @for (benefit of course.studentBenefits; track benefit; let i = $index) {
            <div class="bg-gradient-to-br from-cream-50 to-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-ocean-100 hover:border-ocean-300">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-ocean-600 to-ocean-700 rounded-full flex items-center justify-center mr-4">
                  @if (i === 0) {
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  } @else if (i === 1) {
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  } @else if (i === 2 || i === 3) {
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  } @else if (i === 4 || i === 5) {
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  } @else {
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  }
                </div>
                <div class="flex-1">
                  <p class="text-gray-800 leading-relaxed font-medium">{{ benefit }}</p>
                  @if (i === 4 || i === 5) {
                    <div class="mt-3 inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                      <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                      </svg>
                      Career Opportunity
                    </div>
                  }
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Special Highlight for Job Opportunities -->
        <div class="mt-12 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
              <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-2xl md:text-3xl font-serif font-bold mb-4">
              🌟 Become a Mentor at Shreem Natyalaya
            </h3>
            <p class="text-lg text-white/90 max-w-3xl mx-auto mb-6">
              Students with <span class="font-bold">5+ years of continuous training</span> are eligible for 
              <span class="font-bold">full-time or part-time teaching positions</span> at our new branches. 
              Turn your passion into a profession!
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div class="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                <p class="text-sm font-semibold">Full-Time Positions</p>
              </div>
              <div class="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                <p class="text-sm font-semibold">Part-Time Positions</p>
              </div>
              <div class="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                <p class="text-sm font-semibold">Mentorship Training</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  }

  <!-- Benefits -->
  <section class="py-16 md:py-20 bg-cream-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-12 text-center">
        Personal Development Benefits
      </h2>
      <div class="space-y-4">
        @for (benefit of course.benefits; track benefit) {
          <div class="flex items-start bg-white rounded-lg p-6 shadow-md">
            <svg 
              [class]="'w-6 h-6 mr-4 mt-1 flex-shrink-0 ' + (course.color === 'ocean' ? 'text-ocean-700' : 'text-yellow-700')" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-lg text-gray-700">{{ benefit }}</span>
          </div>
        }
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section 
    [class]="'py-16 md:py-20 text-white ' + (course.color === 'ocean' ? 'bg-ocean-900' : 'bg-yellow-800')"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-serif font-bold mb-6">
        Ready to Begin Your {{ course.name }} Journey?
      </h2>
      <p class="text-lg text-white text-opacity-90 mb-8">
        Join us and experience authentic classical arts training rooted in tradition
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          routerLink="/contact" 
          [class]="'inline-block px-8 py-4 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ' + 
          (course.color === 'ocean' ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-ocean-700 hover:bg-ocean-800') + ' text-white'"
        >
          Enroll Now
        </a>
        <a 
          routerLink="/courses" 
          class="inline-block px-8 py-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold rounded-lg transition-all duration-300"
        >
          View All Courses
        </a>
      </div>
    </div>
  </section>
} @else {
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-3xl font-serif font-bold text-ocean-900 mb-4">Course Not Found</h1>
      <a routerLink="/courses" class="text-ocean-700 hover:text-ocean-800 font-semibold">
        ← Back to Courses
      </a>
    </div>
  </div>
}
`
})
export class CourseDetailComponent implements OnInit {
  courseId: string = '';
  course: CourseDetail | null = null;

  private coursesData: { [key: string]: CourseDetail } = {
    'bharatanatyam': {
      id: 'bharatanatyam',
      name: 'Bharatanatyam',
      tagline: 'Classical Dance Excellence',
      description: 'Bharatanatyam is one of India\'s oldest and most revered classical dance forms. Our comprehensive training program covers fundamental adavus, intricate footwork, expressive abhinaya, and the spiritual depth that makes this art form timeless.',
      whatYouLearn: [
        'Fundamental adavus and aramandi positions',
        'Rhythmic patterns and tala systems',
        'Expressive abhinaya and storytelling through movement',
        'Traditional repertoire including alarippu, jatiswaram, and varnam',
        'Stage presence and performance techniques',
        'Understanding of Carnatic music and its relationship to dance'
      ],
      duration: '5-7 years for complete training',
      ageGroup: 'Ages 6 and above',
      classFormat: 'Weekly classes (2 sessions per week) at the time of events sessions will be increased',
      benefits: [
        'Develops discipline, focus, and dedication',
        'Improves physical fitness, flexibility, and coordination',
        'Enhances cultural understanding and appreciation',
        'Builds confidence through performance opportunities',
        'Connects with ancient traditions and spiritual practices'
      ],
      color: 'ocean',
      syllabus: [
        {
          level: 'Level 1',
          title: 'Beginner (Foundation)',
          duration: '6 months - 1 year',
          color: 'green',
          theory: [
            'Introduction to Bharatanatyam',
            'Importance of Adavus',
            'Basic posture (Araimandi, Muzhumandi)',
            'Names of Hasta Mudras (Asamyuta & Samyuta – intro)'
          ],
          practical: [
            'Basic stretching & body conditioning',
            'Adavus: Tatta Adavu, Natta Adavu, Visharu Adavu',
            'Eye, neck & head movements',
            'Simple Alarippu (practice version)',
            'Basic Thala concepts (Adi, Rupakam)'
          ]
        },
        {
          level: 'Level 2',
          title: 'Elementary',
          duration: '1 - 2 year',
          color: 'yellow',
          theory: [
            'Detailed study of Hasta Mudras',
            'Navarasa – introduction',
            'Costume & ornament awareness',
            'Temple traditions in Bharatanatyam'
          ],
          practical: [
            'Adavus: Teermanam Adavu, Kudittu Mettu, Sarikal Adavu',
            'Alarippu (complete)',
            'Shabdam (simple)',
            'Simple Abhinaya exercises',
            'Basic Kuthita & Mettu movements'
          ]
        },
        {
          level: 'Level 3',
          title: 'Intermediate',
          duration: '2 - 3 years',
          color: 'orange',
          theory: [
            'Detailed Navarasa with examples',
            'Introduction to Abhinaya',
            'Storytelling through dance',
            'Role of Guru in classical arts'
          ],
          practical: [
            'Advanced Adavu combinations',
            'Jatiswaram',
            'Varnam (short version)',
            'Abhinaya-based Padams (intro)',
            'Expression practices with slokas'
          ]
        },
        {
          level: 'Level 4',
          title: 'Advanced',
          duration: '3 - 4 years',
          color: 'blue',
          theory: [
            'Natya Shastra basics',
            'Types of Abhinaya (Angika, Vachika, Aharya, Satvika)',
            'Musical structure in Bharatanatyam',
            'Stage discipline & performance ethics'
          ],
          practical: [
            'Varnam (full)',
            'Padam',
            'Javali',
            'Tillana',
            'Advanced Abhinaya & improvisation',
            'Solo performance practice'
          ]
        },
        {
          level: 'Level 5',
          title: 'Arangetram Preparation',
          duration: '5+ years',
          color: 'red',
          theory: [
            'Complete Margam structure',
            'Meaning & interpretation of items',
            'Guru–Shishya Parampara',
            'Cultural responsibility of a classical dancer'
          ],
          practical: [
            'Full Margam: Pushpanjali, Alarippu, Jatiswaram, Shabdam, Varnam, Padam, Javali, Tillana, Mangalam',
            'Salangai Pooja',
            'Stage rehearsals',
            'Confidence & expression mastery'
          ]
        }
      ],
      studentBenefits: [
        'Participate in prestigious temple events and cultural programs',
        'Grade examinations with certification at each level',
        'Traditional Salangai Pooja ceremony to mark formal training',
        'Arangetram (debut solo performance) upon completion',
        'Job opportunities as mentor at our new branches for students with 5+ years of continuous training',
        'Full-time and part-time teaching positions available for dedicated students',
        'Annual stage performances and recitals',
        'Evaluation & certification from Shreem Natyalaya'
      ]
    },
    'veena': {
      id: 'veena',
      name: 'Veena',
      tagline: 'The Divine String Instrument',
      description: 'The Veena is revered as one of the most ancient and sophisticated string instruments in Indian classical music. Our comprehensive program covers Classical Carnatic music, Devotional compositions, and Indian Film Music, offering a complete musical journey.',
      whatYouLearn: [
        'Proper sitting posture and hand positioning',
        'Basic swaras and finger techniques',
        'Raga alapana and improvisation',
        'Traditional compositions (kritis and varnams)',
        'Gamakas and ornamentation techniques',
        'Understanding of Carnatic music theory'
      ],
      duration: '5-7 years for complete training',
      ageGroup: 'Ages 8 and above',
      classFormat: 'Weekly classes (2 sessions per week) are conducted completely online. There are no offline sessions. You will also have workshops with certificates. These workshops are conducted by our institute along with a famous celebrity artist. Once you join our institute, you will be notified about all the details.',
      benefits: [
        'Develops fine carnatic music skills and finger dexterity',
        'Enhances concentration and mindfulness',
        'Provides therapeutic and meditative benefits',
        'Deepens understanding of Indian classical music',
        'Cultivates patience and perseverance'
      ],
      color: 'yellow',
      syllabus: [
        {
          level: 'Level 1',
          title: 'Beginner (Foundation)',
          duration: '1 - 2 years',
          color: 'green',
          theory: [
            'Introduction to Carnatic music & Veena',
            'Parts of the Veena',
            'Correct posture & hand position',
            'Sruti, Swara & Tala basics',
            'Sapta Swaras'
          ],
          practical: [
            'Basic plucking & fingering techniques',
            'Sarali Varisai (3 speeds)',
            'Janta Varisai',
            'Alankaram (Adi Tala)',
            'Light Music: Simple devotional songs, Basic Indian film melodies (swaras only)'
          ]
        },
        {
          level: 'Level 2',
          title: 'Elementary',
          duration: '2 - 3 years',
          color: 'yellow',
          theory: [
            'Tala system (Adi, Rupaka)',
            'Introduction to Ragas',
            'Gamaka basics',
            'Importance of Shruti alignment'
          ],
          practical: [
            'Dattu Varisai',
            'Melsthayi Varisai',
            'Alankarams (multiple talas)',
            'Simple Geethams',
            'Light Music: Devotional songs with gamakas, Film songs in classical ragas, Playing with correct rhythm & expression'
          ]
        },
        {
          level: 'Level 3',
          title: 'Intermediate',
          duration: '4 - 5 years',
          color: 'orange',
          theory: [
            'Raga Lakshana',
            'Composer introduction',
            'Nadai & tempo variations',
            'Introduction to Manodharma'
          ],
          practical: [
            'Sanchari Geethams',
            'Swarajatis',
            'Tanam exercises (basic)',
            'Gamaka refinement',
            'Light Music: Devotional kriti-based songs, Film songs with sangatis, Expression & phrasing through Veena'
          ]
        },
        {
          level: 'Level 4',
          title: 'Advanced',
          duration: '5 - 6 years',
          color: 'blue',
          theory: [
            'Melakarta system',
            'Janya ragas',
            'Concert format',
            'Manodharma development'
          ],
          practical: [
            'Varnams',
            'Kritis with sahitya bhava',
            'Raga Alapana (basic)',
            'Kalpana Swaras (intro)',
            'Tanam elaboration',
            'Light Music: Advanced devotional compositions, Film songs adapted to classical style, Performance-ready pieces'
          ]
        },
        {
          level: 'Level 5',
          title: 'Performance & Certification',
          duration: '6 - 7 years',
          color: 'red',
          theory: [
            'Manodharma mastery',
            'Composer styles',
            'Stage ethics',
            'Guru–Shishya Parampara'
          ],
          practical: [
            'Advanced Kritis',
            'Raga Alapana, Tanam & Swaras',
            'Ragam–Tanam–Pallavi (intro)',
            'Solo Veena concert repertoire',
            'Light Music: Devotional concert set, Indian film music recital (Veena), Fusion-style presentation (optional)'
          ]
        }
      ],
      studentBenefits: [
        'Participate in prestigious temple events and devotional music programs',
        'Performance opportunities in classical and light music concerts',
        'Exposure to both traditional and contemporary Veena repertoire',
        'Job opportunities as mentor at our new branches for students with 5+ years of continuous training',
        'Full-time and part-time teaching positions available for dedicated students',
        'Annual stage performances and recitals',
        'Evaluation & certification from Shreem Natyalaya'
      ]
    },
    'slokam': {
      id: 'slokam',
      name: 'Slokam',
      tagline: 'Sacred Verses and Spiritual Wisdom',
      description: 'Comprehensive Slokam training in Gayathri Mantras, Sanskrit Sacred Works, and Tamil devotional literature. All slokas are taught with correct pronunciation, rhythm, and complete meaning under the guidance of Kalaimamani Smt. Desa. Mangayarkarasi for Tamil works.',
      whatYouLearn: [
        'Correct Sanskrit pronunciation and diction',
        'Understanding of verse meanings and context',
        'Rhythmic recitation techniques',
        'Popular slokas from various scriptures',
        'Cultural and spiritual significance',
        'Memory techniques for retention'
      ],
      duration: '2 years for complete mastery',
      ageGroup: 'Ages 5 and above',
      classFormat: 'Weekly group classes (2 sessions per week), Home practice with audio support',
      benefits: [
        'Improves memory and concentration',
        'Develops clear speech and pronunciation',
        'Connects with spiritual and cultural heritage',
        'Enhances understanding of Sanskrit language',
        'Provides mental peace and focus'
      ],
      color: 'ocean',
      syllabus: [
        {
          level: 'Level 1',
          title: 'Beginner (Foundation)',
          duration: '6–9 months',
          color: 'green',
          theory: [
            'Pronunciation & clarity',
            'Breath control',
            'Introduction to meaning'
          ],
          practical: [
            'Sanskrit: Ganapathi Gayathri, Guru Gayathri, Bala Gayathri, Simple daily prayer slokas',
            'Tamil Sacred Works (with meaning): Thiruppavai (selected pasurams), Thiruvempavai (selected verses), Thirupalli Ezhuchi (intro verses)'
          ]
        },
        {
          level: 'Level 2',
          title: 'Elementary',
          duration: '9–12 months',
          color: 'yellow',
          theory: [
            'Tala-based chanting',
            'Memorization techniques',
            'Meaning explanation in detail'
          ],
          practical: [
            'Sanskrit: Shiva Gayathri, Vishnu Gayathri, Lakshmi Gayathri, Saraswati Gayathri, Subramanya Gayathri',
            'Tamil Sacred Works (with meaning): Thiruppavai (more pasurams), Thiruvempavai, Thirupalli Ezhuchi, Thiruppugazh (simple verses)'
          ]
        },
        {
          level: 'Level 3',
          title: 'Intermediate',
          duration: '12–18 months',
          color: 'orange',
          theory: [
            'Bhava & devotion',
            'Group chanting',
            'Confidence building'
          ],
          practical: [
            'Sanskrit: All major Deity Gayathri Mantras, Selected chapters from Bhagavad Gita',
            'Tamil Sacred Works (with meaning): Thiruppavai (full set – gradual), Thiruvempavai, Thiruppugazh, Kandhar Alankaram (selected verses)'
          ]
        },
        {
          level: 'Level 4',
          title: 'Advanced',
          duration: '18–24 months',
          color: 'blue',
          theory: [
            'Scriptural depth',
            'Temple-style chanting',
            'Interpretation & explanation'
          ],
          practical: [
            'Sanskrit: Vishnu Sahasranamam, Lalitha Sahasranamam, Ashtakams & Stotras',
            'Tamil Sacred Works (with full meaning): Kandhar Alankaram, Kandhar Anuboothi, Thiruppugazh (advanced verses), Thirupalli Ezhuchi (complete)'
          ]
        },
        {
          level: 'Level 5',
          title: 'Mastery & Performance Certification',
          duration: '1–2 years',
          color: 'red',
          theory: [
            'Complete mastery',
            'Teaching & leadership skills'
          ],
          practical: [
            'Sanskrit: Complete Bhagavad Gita, Complete Sahasranamas, Advanced stotras',
            'Tamil Sacred Works (complete mastery with meaning): Thiruppavai, Thiruvempavai, Thiruppugazh, Kandhar Alankaram, Kandhar Anuboothi'
          ]
        }
      ],
      studentBenefits: [
        'Deep understanding of meaning, not just memorization',
        'Clear pronunciation in both Sanskrit & Tamil',
        'Spiritual discipline & confidence building',
        'Temple festivals & special poojas participation',
        'Group chanting programs at cultural events',
        'Cultural stage performances',
        'Job opportunities as mentor at our new branches for students with 5+ years of continuous training',
        'Full-time and part-time teaching positions available',
        'Temple & event-based chanting roles',
        'Evaluation & certification from Shreem Natyalaya'
      ]
    },
    'keyboard': {
      id: 'keyboard',
      name: 'Keyboard',
      tagline: 'Musical Foundation and Harmony',
      description: 'A practical, ear-based keyboard program focusing on right-hand melody playing. Our honest teaching approach emphasizes melody clarity, rhythm, and cultural relevance through Devotional and Indian Film Music—no pressure of Western theory or two-hand playing.',
      whatYouLearn: [
        'Music notation and theory basics',
        'Scales, chords, and progressions',
        'Melody and harmony concepts',
        'Both Western and Carnatic music styles',
        'Accompaniment techniques',
        'Sight-reading and improvisation'
      ],
      duration: '3 years for complete mastery',
      ageGroup: 'Ages 6 and above',
      classFormat: 'Weekly classes (2 sessions per week), at the time of events sessions will be increased',
      benefits: [
        'Builds strong musical foundation',
        'Enhances coordination and multitasking',
        'Develops understanding of music theory',
        'Provides accompaniment skills for other arts',
        'Boosts creativity and self-expression'
      ],
      color: 'yellow',
      syllabus: [
        {
          level: 'Level 1',
          title: 'Beginner (Foundation)',
          duration: '6–9 months',
          color: 'green',
          theory: [
            'Finger discipline (right hand only)',
            'Rhythm sense',
            'Melody clarity'
          ],
          practical: [
            'Learning: Introduction to Keyboard, Correct sitting posture & hand position, Finger numbering (right hand), Basic swaras (Sa–Ri–Ga–Ma–Pa–Da–Ni), Tempo awareness',
            'Practical: Finger exercises (right hand), Simple swara patterns, Basic rhythm practice',
            'Songs: Simple devotional songs, Easy Indian film melodies (right hand only)'
          ]
        },
        {
          level: 'Level 2',
          title: 'Elementary',
          duration: '9–12 months',
          color: 'yellow',
          theory: [
            'Smooth fingering',
            'Song flow & continuity',
            'Confidence in melody playing'
          ],
          practical: [
            'Learning: Scale understanding (Indian swara-based), Pitch identification by ear, Rhythm patterns (slow & medium tempo)',
            'Practical: Scale practice (right hand), Melody transitions, Playing with tempo control',
            'Songs: Devotional songs with sangatis, Popular Indian film songs, Playing full songs without breaks'
          ]
        },
        {
          level: 'Level 3',
          title: 'Intermediate',
          duration: '12–18 months',
          color: 'orange',
          theory: [
            'Expression & phrasing',
            'Memorization skills',
            'Performance readiness'
          ],
          practical: [
            'Learning: Advanced fingering techniques, Song structure understanding, Ornamentation in melodies',
            'Practical: Continuous melody playing, Song variations, Speed & clarity practice',
            'Songs: Devotional compositions, Film songs with sangatis, Theme-based song sets'
          ]
        },
        {
          level: 'Level 4',
          title: 'Advanced',
          duration: '18–24 months',
          color: 'blue',
          theory: [
            'Stage confidence',
            'Temple & event performance'
          ],
          practical: [
            'Learning: Tempo variations, Playing for audience & functions, Group coordination',
            'Practical: Long song medleys, Playing without notation, Performance-style practice',
            'Songs: Advanced devotional songs, Film songs adapted for stage, Temple event repertoire'
          ]
        },
        {
          level: 'Level 5',
          title: 'Performance, Mentorship & Certification',
          duration: '1–2 years',
          color: 'red',
          theory: [
            'Mastery of melody playing',
            'Teaching & leadership skills'
          ],
          practical: [
            'Practical: Solo keyboard recital (right hand), Temple & cultural event performance, Teaching junior students (guided)',
            'Songs: Devotional concert set, Indian film song recital, Family function performance sets'
          ]
        }
      ],
      studentBenefits: [
        'Strong melody sense & rhythm development',
        'Improved finger coordination (right hand)',
        'Confidence to play in temple events',
        'Performance opportunities at family functions',
        'Cultural programs participation',
        'No pressure of Western theory or two-hand playing',
        'Temple bhajans & festivals participation',
        'Family & community functions performance',
        'Devotional song performances',
        'Job opportunities as mentor at our new branches for students with 5+ years of continuous training',
        'Full-time and part-time teaching positions available',
        'Event-based performance roles',
        'Evaluation & certification from Shreem Natyalaya'
      ]
    }
  };

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      this.course = this.coursesData[this.courseId] || null;
      
      if (this.course) {
        this.title.setTitle(`${this.course.name} - Shreem Natyalaya`);
        this.meta.updateTag({ 
          name: 'description', 
          content: this.course.description 
        });
      }
    });
  }
//   getCourseBg(courseId: string): string {
//   switch (courseId) {
//     case 'bharatanatyam':
//       return 'images/classImage1.png';
//     case 'veena':
//       return 'images/founder3.jpg';
//     case 'slokam':
//       return 'images/mnr.jpg';
//     case 'keyboard':
//       return 'images/ranganathar.jpg';
//     default:
//       return 'images/self4.jpg';
//   }
// }

}
