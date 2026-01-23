import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-about-guru',
  standalone: true,
  imports: [TranslatePipe],
  template:`<!-- Page Header -->
<section class="bg-gradient-to-br from-ocean-500 via-cream-200 to-yellow-200 py-16 md:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-serif font-bold text-ocean-900 mb-4">
        {{ 'home.aboutGuru.pageTitle' | translate }}
      </h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
       {{ 'home.aboutGuru.pageSubtitle' | translate }}
      </p>
    </div>
  </div>
</section>

<!-- Personal Introduction Section -->
<section class="py-16 md:py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      <!-- Left: Photo -->
      <div class="order-2 lg:order-1">
        <div class="relative max-w-md mx-auto">
          <!-- Decorative frame -->
          <div class="absolute -inset-4 bg-gradient-to-br from-ocean-200 to-yellow-200 rounded-2xl blur-2xl opacity-30"></div>
          
          <!-- Photo placeholder -->
          <div class="relative bg-gradient-to-br from-ocean-100 to-cream-100 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
            <img 
              src="/assets/images/founder.png"
              alt="Deeptha Sanjusree M - Founder of Shreem Natyalaya" 
              class="w-full h-full object-cover"
            />
          </div>
          
          <!-- Name badge -->
          <div class="absolute -bottom-6 -right-6 bg-ocean-700 text-white p-6 rounded-xl shadow-2xl">
            <p class="text-sm font-semibold mb-1">{{'home.aboutGuru.founderTitle | translate'}}</p>
            <p class="text-xl font-bold">{{'home.aboutGuru.founderName | translate}}</p>
          </div>
        </div>
      </div>

      <!-- Right: Introduction -->
      <div class="order-1 lg:order-2">
        <div class="space-y-6">
          <div>
            <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-4">
              {{'home.aboutGuru.greeting' | translate}}
            </h2>
            <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-4">
              {{'home.aboutGuru.introduction' | translate}}
            </h2>
            <div class="w-20 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mb-6"></div>
          </div>

          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p class="text-lg">
              {{'home.aboutGuru.intro1' | translate}} <span class="font-semibold text-ocean-900">{{'home.aboutGuru.intro1Bold' | translate}}</span>, 
              {{'home.aboutGuru.intro1Rest' | translate }}
            </p>

            <p class="text-lg">
             {{'home.aboutGuru.intro2' | translate }}
            </p>

            <p class="text-lg">
            {{'home.aboutGuru.intro3' | translate}}<span class="font-semibold text-ocean-900">{{'home.aboutGuru.intro3Bold' | translate }}</span>{{'home.aboutGuru.intro3Rest' | translate}}
            </p>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-2 gap-4 pt-6">
            <div class="bg-cream-50 p-4 rounded-lg border-l-4 border-yellow-600">
              <p class="text-2xl font-bold text-ocean-900">10+</p>
              <p class="text-sm text-gray-600">{{'home.aboutGuru.yearsTeaching' | translate }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- My Learning Journey -->
<section class="py-16 md:py-24 bg-cream-50">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-4">
        {{'home.aboutGuru.learningJourneyTitle' | translate}}
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
       {{'home.aboutGuru.learningJourneySubtitle' | translate }}
      </p>
      <div class="w-20 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mx-auto mt-6"></div>
    </div>

    <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
      
      <!-- Training Background -->
      <div class="mb-10">
        <h3 class="text-xl font-semibold text-ocean-900 mb-6 pb-3 border-b-2 border-ocean-200">
          {{'home.aboutGuru.trainingTitle' | translate}}
        </h3>
        <ul class="space-y-4">
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-ocean-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
            {{'home.aboutGuru.training1' | translate}}<span class="font-semibold text-ocean-900">{{'home.aboutGuru.training1Bold' | translate }}</span>{{'home.aboutGuru.training1From' | translate }}<span class="font-semibold text-ocean-900">{{'home.aboutGuru.training1FromBold' | translate}}</span>{{'home.aboutGuru.training1Rest' | translate}}
            </span>
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-ocean-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
              {{'home.aboutGuru.training2' | translate}} <span class="font-semibold text-ocean-900">{{'home.aboutGuru.training2Bold' | translate}}</span>{{'home.aboutGuru.training2From' | translate}}<span class="font-semibold text-ocean-900">{{'home.aboutGuru.training2FromBold' | translate }}</span>{{'home.aboutGuru.training2Rest' | translate }}
            </span>
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-ocean-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
             {{'home.aboutGuru.training3' | translate }}
            </span>
          </li>
        </ul>
      </div>

      <!-- My Approach as Founder -->
      <div class="mb-10">
        <h3 class="text-xl font-semibold text-ocean-900 mb-6 pb-3 border-b-2 border-yellow-200">
          {{'home.aboutGuru.approachTitle' | translate}}
        </h3>
        <ul class="space-y-4">
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
             {{'home.aboutGuru.approach1' | translate}}
            </span>
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
              {{'home.aboutGuru.approach2' | translate}}
            </span>
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
             {{'home.aboutGuru.approach3' | translate}}
            </span>
          </li>
        </ul>
      </div>

      <!-- My Teaching Philosophy -->
      <div>
        <h3 class="text-xl font-semibold text-ocean-900 mb-6 pb-3 border-b-2 border-ocean-200">
          {{'home.aboutGuru.philosophyTitle' | translate }}
        </h3>
        <ul class="space-y-4">
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-ocean-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
            {{'home.aboutGuru.philosophy1' | translate}}<span class="font-semibold text-ocean-900">{{'home.aboutGuru.philosophy1Bold' | translate}}</span>{{'home.aboutGuru.philosophy1Rest' | translate }}
            </span>
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-ocean-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
              {{'home.aboutGuru.philosophy2' | translate }}
            </span>
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-ocean-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
              {{'home.aboutGuru.philosophy3' | translate }}
            </span>
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-ocean-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
              {{'home.aboutGuru.philosophy4' | translate }}
            </span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>

<!-- Milestones & Credentials Section -->
<section class="py-16 md:py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-4">
        {{'home.aboutGuru.milestonesTitle' | translate }}
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
       {{'home.aboutGuru.milestonesSubtitle' | translate}}
      </p>
      <div class="w-20 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mx-auto mt-6"></div>
    </div>

    <!-- Classical Dance Milestones -->
    <div class="mb-16">
      <h3 class="text-2xl font-serif font-semibold text-ocean-900 mb-8 text-center">
        {{'home.aboutGuru.danceMilestonesTitle' | translate }}
      </h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        <!-- Salangai Pooja -->
        <div class="bg-cream-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div class="aspect-[4/3] bg-gradient-to-br from-ocean-100 to-yellow-100 overflow-hidden">
            <img 
              src="/assets/images/salangaipooja.jpg" 
              alt="Salangai Pooja Ceremony" 
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-xl font-semibold text-ocean-900">{{'home.aboutGuru.salangaiTitle' | translate }}</h4>
              <span class="text-sm font-semibold text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full">2006</span>
            </div>
            <p class="text-gray-600 leading-relaxed">
              {{'home.aboutGuru.salangaiDesc' | translate }}
            </p>
          </div>
        </div>

        <!-- Arangetram -->
        <div class="bg-gradient-to-br from-ocean-600 to-ocean-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div class="aspect-[4/3] bg-ocean-800 overflow-hidden">
            <img 
              src="/assets/images/arangetram.jpg" 
              alt="Arangetram Performance" 
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500 opacity-90"
            />
          </div>
          <div class="p-6 text-white">
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-xl font-semibold flex items-center">
                <svg class="w-6 h-6 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {{'home.aboutGuru.arangetramTitle' | translate }}
              </h4>
              <span class="text-sm font-semibold text-yellow-300 bg-yellow-900/30 px-3 py-1 rounded-full">2011</span>
            </div>
            <p class="text-white/90 leading-relaxed">
              {{'home.aboutGuru.arangetramDesc' | translate }}
            </p>
          </div>
        </div>

      </div>
    </div>

    <!-- Awards & Recognition -->
    <div class="mb-16">
      <h3 class="text-2xl font-serif font-semibold text-ocean-900 mb-8 text-center">
        {{'home.aboutGuru.awardsTitle' | translate}}
      </h3>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <!-- Award 1 -->
        <div class="bg-white border-2 border-ocean-200 rounded-lg p-6 transition-all duration-300">
          <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h2 class="text-center font-semibold text-ocean-900 mb-2">{{'home.aboutGuru.award1Title' | translate }}</h2>
          <p class="text-center text-sm text-gray-600 mb-2">2011</p>
          <p class="text-center text-xs text-gray-500">{{'home.aboutGuru.award1Desc' | translate }}</p>
        </div>

        <!-- Award 2 -->
        <div class="bg-white border-2 border-ocean-200 rounded-lg p-6 transition-all duration-300">
          <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h2 class="text-center font-semibold text-ocean-900 mb-2">{{'home.aboutGuru.award2Title' | translate }}</h2>
          <p class="text-center font-semibold text-ocean-900 mb-2">{{'home.aboutGuru.award2Subtitle' | translate }}</p>
          <p class="text-center text-sm text-gray-600 mb-2">2012</p>
          <p class="text-center text-xs text-gray-500">{{'home.aboutGuru.award2Desc' | translate }}</p>
        </div>

        <!-- Award 3 -->
        <div class="bg-white border-2 border-ocean-200 rounded-lg p-6 transition-all duration-300">
          <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h4 class="text-center font-semibold text-ocean-900 mb-2">{{'home.aboutGuru.award3Title' | translate }}</h4>
          <p class="text-center text-sm text-gray-600 mb-2">2014</p>
          <p class="text-center text-xs text-gray-500">{{'home.aboutGuru.award3Desc' | translate}}</p>
        </div>

        <!-- Award 4 -->
        <div class="bg-white border-2 border-ocean-200 rounded-lg p-6 transition-all duration-300">
          <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h4 class="text-center font-semibold text-ocean-900 mb-2">{{'home.aboutGuru.award4Title' | translate }}</h4>
          <p class="text-center text-sm text-gray-600 mb-2">2023</p>
          <p class="text-center text-xs text-gray-500">{{'home.aboutGuru.award4Desc' | translate }}</p>
        </div>

      </div>
    </div>

    <!-- District levels -->
    <div class="mb-16">
      <h3 class="text-2xl font-serif font-semibold text-ocean-900 mb-8 text-center">
        {{'home.aboutGuru.districtTitle' | translate }}
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">


      <div class="bg-white border-2 border-ocean-200 rounded-lg p-6 transition-all duration-300">
        <div class="w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
          <img src="/assets/images/srmlogo.webp"/>
        </div>
        <h4 class="text-center font-semibold text-ocean-900 mb-2">{{'home.aboutGuru.district1Title' | translate}}</h4>
        <p class="text-center text-sm text-gray-600 mb-2">2010</p>
        <p class="text-center text-xs text-gray-500">{{'home.aboutGuru.district1Desc' | translate }}</p>
      </div>

      <div class="bg-white border-2 border-ocean-200 rounded-lg p-6 transition-all duration-300">
        <div class="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
           <img src="/assets/images/tamilnadulogo.webp"/>
        </div>
        <h4 class="text-center font-semibold text-ocean-900 mb-2">{{'home.aboutGuru.district2Title' | translate}}</h4>
        <ul class="text-center text-xs text-gray-600 space-y-1">
          <li>{{'home.aboutGuru.district2Item1' | translate }}</li>
          <li>{{'home.aboutGuru.district2Item1' | translate }}</li>
          <li>{{'home.aboutGuru.district2Item3' | translate }}</li>
        </ul>
      </div>
      
      <div class="bg-white border-2 border-ocean-200 rounded-lg p-6 transition-all duration-300">
        <div class="aspect-[4/3] bg-gradient-to-br from-ocean-50 to-yellow-50 rounded-md overflow-hidden mb-4">
          <img src="/assets/images/veena-award.jpg" alt="School-Level District Veena Competition" class="w-full h-full object-cover" />
        </div>
        <h4 class="text-center font-semibold text-ocean-900 mb-2">{{'home.aboutGuru.district3Title' | translate }}</h4>
        <p class="text-center text-sm text-gray-600 mb-1">{{'home.aboutGuru.district3Prize' | translate }}</p>
        <p class="text-center text-xs text-gray-500">{{'home.aboutGuru.district3Desc' | translate }}</p>
      </div>
    </div>

      
    </div>


    
    <!-- Academic Credentials -->
    <div>
      <h3 class="text-2xl font-serif font-semibold text-ocean-900 mb-8 text-center">
        {{'home.abputGuru.academicTitle' | translate }}
      </h3>
      
      <div class="max-w-3xl mx-auto">
        <div class="bg-gradient-to-r from-cream-50 to-ocean-50 rounded-xl p-8 shadow-md">
          <ul class="space-y-4">
            
            <li class="flex items-start">
              <div class="flex-shrink-0 w-10 h-10 bg-ocean-600 rounded-full flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-ocean-900 text-lg mb-1">Bachelor of Technology (B.E)</h4>
                <p class="text-gray-600">Computer Science Engineering</p>
              </div>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 w-10 h-10 bg-ocean-600 rounded-full flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-ocean-900 text-lg mb-1">Diploma in music</h4>
                <p class="text-gray-600">{{'home.aboutGuru.academic2Desc' | translate }}</p>
              </div>
            </li>

            <li class="flex items-start">
              <div class="flex-shrink-0 w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-ocean-900 text-lg mb-1">Bachelor in music (Distance Education)</h4>
              </div>
            </li>
            <li>
              
            </ul>
        </div>
      </div>
    </div>

  </div>
</section>


<!-- Timeline: My Journey to Shreem Natyalaya -->
<section class="py-16 md:py-24 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-4">
        {{'home.aboutGuru.journeyTitle' | translate }}
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        {{'home.aboutGuru.journeySubtitle' | translate }}
      </p>
      <div class="w-20 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mx-auto mt-6"></div>
    </div>

    <!-- Timeline -->
    <div class="relative">
      <!-- Vertical line (hidden on mobile, visible on desktop) -->
      <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-ocean-200 via-yellow-200 to-ocean-200"></div>

      <!-- Timeline Items -->
      <div class="space-y-12">
        
        <!-- Item 1: Early Learning -->
        <div class="relative">
          <div class="md:grid md:grid-cols-2 md:gap-8 items-center">
            <div class="md:text-right mb-4 md:mb-0">
              <div class="bg-cream-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 inline-block md:block">
                <h3 class="text-xl font-semibold text-ocean-900 mb-2">{{'home.aboutGuru.myEarlyLearning' | translate }}</h3>
                <p class="text-sm text-gray-600 mb-3">{{'home.aboutGuru.earlyOnwards' | translate }}</p>
                <p class="text-gray-700">
                 {{'home.aboutGuru.myEarlyDesc' | translate }}
                </p>
              </div>
            </div>
            <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-ocean-600 rounded-full border-4 border-white shadow-lg z-10"></div>
            <div class="block md:block">
              <!-- Image Space for Early Learning -->
              <div class="aspect-[4/3] bg-gradient-to-br from-ocean-50 to-cream-50 rounded-lg overflow-hidden shadow-md">
                <img src="/assets/images/withguru.jpg" alt="Early Learning Years" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div class="md:hidden absolute left-0 w-4 h-4 bg-ocean-600 rounded-full border-2 border-white shadow-lg"></div>
        </div>

        <!-- Item 2: Assistant Director Role -->
        <div class="relative">
          <div class="md:grid md:grid-cols-2 md:gap-8 items-center">
            <div class="block md:block">
              <!-- Image Space for Assistant Director -->
              <div class="aspect-[4/3] bg-gradient-to-br from-yellow-50 to-cream-50 rounded-lg overflow-hidden shadow-md">
                <img src="/assets/images/assistantdirector.jpg" alt="Assistant Director Years" class="w-full h-full object-cover" />
              </div>
            </div>
            <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-600 rounded-full border-4 border-white shadow-lg z-10"></div>
            <div class="mb-4 md:mb-0 ml-8 md:ml-0">
              <div class="bg-cream-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-xl font-semibold text-ocean-900 mb-2">{{'home.aboutGuru.assistantDirector' | translate }}</h3>
                <p class="text-sm text-gray-600 mb-3">2014-2018</p>
                <p class="text-gray-700">
                  {{'home.aboutGuru.asststantDirectorDesc' | translate }}
                </p>
              </div>
            </div>
          </div>
          <div class="md:hidden absolute left-0 w-4 h-4 bg-yellow-600 rounded-full border-2 border-white shadow-lg"></div>
        </div>

        <!-- Item 3: Director Role -->
        <div class="relative">
          <div class="md:grid md:grid-cols-2 md:gap-8 items-center">
            <div class="md:text-right mb-4 md:mb-0">
              <div class="bg-cream-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 inline-block md:block">
                <h3 class="text-xl font-semibold text-ocean-900 mb-2">{{'home.aboutGuru.director' | translate }}</h3>
                <p class="text-sm text-gray-600 mb-3">2018-2020</p>
                <p class="text-gray-700">
                  {{'home.aboutGuru.directorDescription' | translate }}
                </p>
              </div>
            </div>
            <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-ocean-600 rounded-full border-4 border-white shadow-lg z-10"></div>
            <div class="block md:block">
              <!-- Image Space for Director Role -->
              <div class="aspect-[4/3] bg-gradient-to-br from-ocean-50 to-yellow-50 rounded-lg overflow-hidden shadow-md">
                <img src="/assets/images/balaramar.jpg" alt="Director Years" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div class="md:hidden absolute left-0 w-4 h-4 bg-ocean-600 rounded-full border-2 border-white shadow-lg"></div>
        </div>

        <!-- Item 4: Advanced Training -->
        <div class="relative">
          <div class="md:grid md:grid-cols-2 md:gap-8 items-center">
            <div class="block md:block">
              <!-- Image Space for Advanced Training -->
              <div class="aspect-[4/3] bg-gradient-to-br from-cream-50 to-ocean-50 rounded-lg overflow-hidden shadow-md">
                <img src="/assets/images/valarkalai.jpg" alt="Advanced Training" class="w-full h-full object-cover" />
              </div>
            </div>
            <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-600 rounded-full border-4 border-white shadow-lg z-10"></div>
            <div class="mb-4 md:mb-0 ml-8 md:ml-0">
              <div class="bg-cream-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-xl font-semibold text-ocean-900 mb-2">{{'home.aboutGuru.advancedTraining' | translate }}</h3>
                <p class="text-sm text-gray-600 mb-3">{{'home.aboutGuru.phase' | translate }}</p>
                <p class="text-gray-700">
                  {{'home.aboutGuru.advancedTrainingDesc' | translate }}
                </p>
              </div>
            </div>
          </div>
          <div class="md:hidden absolute left-0 w-4 h-4 bg-yellow-600 rounded-full border-2 border-white shadow-lg"></div>
        </div>

        <!-- Item 5: Shreem Natyalaya -->
        <div class="relative">
          <div class="md:grid md:grid-cols-2 md:gap-8 items-center">
            <div class="md:text-right mb-4 md:mb-0">
              <div class="bg-gradient-to-br from-ocean-600 to-ocean-700 text-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 inline-block md:block">
                <h3 class="text-xl font-semibold mb-2">{{'home.aboutGuru.founded' | translate }}</h3>
                <p class="text-sm text-ocean-100 mb-3">{{'home.aboutGuru.foundedPhase' | translate }}</p>
                <p class="text-white/90">
                  {{'home.aboutGuru.foundedDesc' | translate }}
                </p>
              </div>
            </div>
            <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-ocean-600 to-yellow-600 rounded-full border-4 border-white shadow-2xl z-10">
              <svg class="w-4 h-4 text-white m-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div class="hidden md:block"></div>
          </div>
          <div class="md:hidden absolute left-0 w-5 h-5 bg-gradient-to-br from-ocean-600 to-yellow-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<!-- My Learning Journey Section -->
<section class="py-16 md:py-24 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-4">
       {{'home.aboutGuru.learningJourney' | translate}}
      </h2>
      <p class="text-lg text-gray-600">
       {{'home.aboutGuru.learningSubtitle' | translate}}
      </p>
      <div class="w-24 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mx-auto mt-4"></div>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <!-- Training Background -->
      <div class="bg-gradient-to-br from-ocean-50 to-cream-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
        <h3 class="text-xl font-serif font-bold text-ocean-900 mb-4">{{'home.aboutGuru.trainingBackground' | translate}}</h3>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start">
            <span class="text-ocean-600 mr-2">•</span>
            <span>{{'home.aboutGuru.journeyPoint1' | translate }} <strong>{{'home.aboutGuru.journeyPoint1Bold1' | translate}}</strong> {{'home.aboutGuru.journeyPoint1Rest' | translate}}<strong>{{'home.aboutGuru.journeyPoint1Bold3' | translate}}</strong>{{'home.aboutGuru.journeyPoint1Bold4' | translate }}</span>
          </li>
          <li class="flex items-start">
            <span class="text-ocean-600 mr-2">•</span>
            <span>{{'home.aboutGuru.journeyPoint2' | translate }}<strong>{{'home.aboutGuru.journeyPoint2Bold1' | translate }}</strong>{{'home.aboutGuru.journeyPoint2Bold2' | translate}}<strong>{{'home.aboutGuru.journeyPoint2Bold3' | translate }}</strong>{{'home.aboutGuru.journeyPoint1Bold4' | translate}}</span>
          </li>
          <li class="flex items-start">
            <span class="text-ocean-600 mr-2">•</span>
            <span>{{'home.aboutGuru.journeyPoint3' | translate }}</span>
          </li>
        </ul>
      </div>

      <!-- Approach as Founder -->
      <div class="bg-gradient-to-br from-yellow-50 to-cream-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
        <h3 class="text-xl font-serif font-bold text-ocean-900 mb-4">{{'home.aboutGuru.approach' | translate }}</h3>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start">
            <span class="text-yellow-600 mr-2">•</span>
            <span>{{'home.aboutGuru.approachPoint1' | translate }}</span>
          </li>
          <li class="flex items-start">
            <span class="text-yellow-600 mr-2">•</span>
            <span>{{'home.aboutGuru.approachPoint2' | translate }}</span>
          </li>
          <li class="flex items-start">
            <span class="text-yellow-600 mr-2">•</span>
            <span>{{'home.aboutGuru.approachPoint3' | translate }}</span>
          </li>
        </ul>
      </div>

      <!-- Teaching Philosophy -->
      <div class="bg-gradient-to-br from-cream-50 to-ocean-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
        <h3 class="text-xl font-serif font-bold text-ocean-900 mb-4">{{'home.aboutGuru.teaching' | translate }}</h3>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start">
            <span class="text-ocean-600 mr-2">•</span>
            <span>{{'home.aboutGuru.teachingPoint1' | translate }}<strong>{{'home.aboutGuru.teachingPoint1Bold1' | translate }}</strong>{{'home.aboutGuru.teachingPoint1Bold2' | translate }}</span>
          </li>
          <li class="flex items-start">
            <span class="text-ocean-600 mr-2">•</span>
            <span>{{'home.aboutGuru.teachingPoint2' | translate }}</span>
          </li>
          <li class="flex items-start">
            <span class="text-ocean-600 mr-2">•</span>
            <span>{{'home.aboutGuru.teachingPoint3' | translate }}</span>
          </li>
          <li class="flex items-start">
            <span class="text-ocean-600 mr-2">•</span>
            <span>{{'home.aboutGuru.teachingPoint4' | translate }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Personal Message -->
<section class="py-16 md:py-20 bg-cream-50">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-serif font-bold text-ocean-900 mb-4">
          {{'home.aboutGuru.commitment' | translate }}
        </h2>
        <div class="w-16 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mx-auto"></div>
      </div>
      
      <div class="space-y-4 text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
        <p class="text-lg">
          {{'home.aboutGuru.commitmentPoint1' | translate }}
        </p>
        <p class="text-lg">
          {{'home.aboutGuru.commitmentPoint2' | translate }}
        </p>
        <p class="text-lg font-semibold text-ocean-900">
          {{'home.aboutGuru.commitmentPoint3' | translate }}
        </p>
      </div>
    </div>
  </div>
</section>
`
})
export class AboutGuruComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('About Guru - Shreem Natyalaya');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Learn about the founder of Shreem Natyalaya, dedicated to preserving classical Indian arts through authentic teaching and disciplined training.' 
    });
  }
}
