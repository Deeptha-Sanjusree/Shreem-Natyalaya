import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-guru-parampara',
  standalone: true,
  imports: [TranslatePipe],
  template: `<!-- Page Header -->
  <section class="bg-gradient-to-br from-ocean-500 via-cream-200 to-yellow-200 py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-serif font-bold text-ocean-900 mb-4">
          {{'home.guruParampara.pageTitle' | translate }}
        </h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          {{'home.guruParampara.pageSubTitle' | translate }}
        </p>
      </div>
    </div>
  </section>

  <!-- Main Content -->
  <section class="py-16 md:py-24 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
    
      <!-- Bharatanatyam Training -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-3">
            {{'home.guruParampara.bharathanatyamTrainingTitle' | translate }}
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mx-auto"></div>
        </div>

        <div class="max-w-4xl mx-auto mb-12">
          <div class="bg-ocean-50 rounded-lg p-6 mb-6">
            <h3 class="text-xl font-semibold text-ocean-900 mb-4">{{'home.guruParampara.trainingJourneyTitle' | translate }}</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span>{{'home.guruParampara.trainingJourneyBPoint1' | translate }}<strong>{{'home.guruParampara.trainingJourneyBPoint1Bold1' | translate }}</strong>{{'home.guruParampara.trainingJourneyBPoint1.1' | translate }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span>{{'home.guruParampara.traningJourneyBPoint2' | translate }}</span>
              </li>
              <li class="flex items-start">
              <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span>{{'home.guruParampara.traningJourneyBPoint3' | translate }}</span>
              </li>
              <li class="flex items-start">
              <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span>{{'home.guruParampara.traningJourneyBPoint4' | translate }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span>{{'home.guruParampara.traningJourneyBPoint5' | translate }}</span>
              </li>
            </ul>
          </div>

        </div>

        <!-- Bharatanatyam Gurus -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <!-- My Guru -->
          <div class="bg-gradient-to-br from-ocean-600 to-ocean-700 text-white rounded-xl p-6 border-2 border-ocean-800">
            <div class="aspect-square bg-ocean-800/30 rounded-lg mb-4 overflow-hidden">
              <img src="/assets/images/kanchana.png" alt="Late B. Kanchana M.music" class="w-full h-full object-cover object-top"/>
            </div>
            <div class="text-center mb-2">
              <span class="inline-block px-3 py-1 bg-yellow-500 text-ocean-900 text-xs font-bold rounded-full mb-3">{{'home.guruParampara.myGuru' | translate }}</span>
            </div>
            <h3 class="text-xl font-serif font-bold mb-2 text-center">
              {{'home.guruParampara.guruName' | translate}}
            </h3>
            <p class="text-sm text-ocean-100 text-center">
              {{'home.guruParampara.guruDesc1' | translate}}<br/>{{'home.guruParampara.place' | translate}}
            </p>
          </div>

          <!-- Guru's Guru -->
          <div class="bg-gradient-to-br from-cream-50 to-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
            <div class="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <img src="/assets/images/muralidharan.jpeg" alt="Kalaimamani Madurai R. Muralidharan" class="w-full h-full object-cover">
            </div>
            <div class="text-center mb-2">
              <span class="inline-block px-3 py-1 bg-ocean-600 text-white text-xs font-bold rounded-full mb-3">{{'home.guruParampara.guruGuru' | translate}}</span>
            </div>
            <h3 class="text-xl font-serif font-bold text-ocean-900 mb-2 text-center">
              {{'home.guruParampara.guruGuruName' | translate}}
            </h3>
            <p class="text-sm text-gray-600 text-center">
              {{'home.guruParampara.guruGuruDesc' | translate}}
            </p>
          </div>
        </div>
      </div>

       <div class="bg-yellow-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-ocean-900 mb-3">{{'home.guruParampara.guruLineage' | translate }}</h3>
            <p class="text-gray-700">{{'home.guruParampara.guruLineageDesc' | translate }}<strong>{{'home.guruParampara.guruLineageDescBold' | translate }}</strong>{{'home.guruParampara.guruLineageDesc1' | translate }}</p>
          </div>

      <!-- Veena Training -->
      <div class="p-12">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-3">
            {{'home.guruParampara.veenaTrainingTitle' | translate }}
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mx-auto"></div>
        </div>

        <div class="max-w-4xl mx-auto mb-12">
          <div class="bg-ocean-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-ocean-900 mb-4">{{'home.guruParampara.trainingJourneyTitle' | translate }}</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>{{'home.guruParampara.foundationTraining' | translate }}</strong>{{'home.guruParampara.foundationalTrainingDesc' | translate }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>{{'home.guruParampara.advancedTraining' | translate }}</strong>{{'home.guruParampara.advancedTrainingDesc' | translate }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>{{'home.guruParampara.techniquesMastered' | translate }}</strong>{{'home.guruParampara.techniquesMasteredDesc' | translate }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>{{'home.guruParampara.refinedArtistry' | translate }}</strong>{{'home.guruParampara.refinedArtistryDesc' | translate }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>{{'home.guruParampara.additionalLearning' | translate }}</strong>{{'home.guruParampara.additionalLearningDesc' | translate }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Veena Gurus -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Guru 1 -->
          <div class="bg-gradient-to-br from-cream-50 to-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
            <div class="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
             <div class="aspect-square bg-ocean-800/30 rounded-lg mb-4 overflow-hidden">
              <img src="/assets/images/kanchana.png" alt="Late B. Kanchana M.music" class="w-full h-full object-cover object-top"/>
            </div>
              <!-- Photo placeholder - Add image here -->
            </div>
            <h3 class="text-xl font-serif font-bold text-ocean-900 mb-2 text-center">
              {{'home.guruParampara.guruName' | translate}}
            </h3>
            <p class="text-sm text-gray-600 text-center">
              {{'home.guruParampara.veenaGuru' | translate }}
            </p>
          </div>

          <!-- Guru 2 -->
          <div class="bg-gradient-to-br from-cream-50 to-ocean-50 rounded-xl p-6 border-2 border-ocean-200">
            <div class="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <img src="/assets/images/veenai.jpeg" alt="Late Smt. Ethiraja Valli" class="w-full h-full object-cover object-top"/>
              <!-- Photo placeholder - Add image here -->
            </div>
            <h3 class="text-xl font-serif font-bold text-ocean-900 mb-2 text-center">
              {{'home.guruParampara.veenaGuru2' | translate }}
            </h3>
            <p class="text-sm text-gray-600 text-center">
              {{'home.guruParampara.veenaGru2Prof' | translate }}
            </p>
          </div>

          <!-- Guru 3 -->
          <div class="bg-gradient-to-br from-cream-50 to-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
            <div class="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <div class="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <img src="/assets/images/sivasubramanyan.jpeg" alt="Kalaimamani Madurai R. Muralidharan" class="w-full h-full object-cover">
            </div>
              <!-- Photo placeholder - Add image here -->
            </div>
            <h3 class="text-xl font-serif font-bold text-ocean-900 mb-2 text-center">
              {{'home.guruParampara.veenaGuru3' | translate }}
            </h3>
            <p class="text-sm text-gray-600 text-center">
               {{'home.guruParampara.veenaGuru3Prof' | translate }}
            </p>
          </div>
        </div>
      </div>

      <!-- Sanskrit & Tamil Slokas -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-3">
            {{'home.guruParampara.slokamTrainingTitle' | translate }}
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mx-auto"></div>
        </div>

        <div class="max-w-4xl mx-auto mb-12">
          <div class="bg-ocean-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-ocean-900 mb-4">{{'home.guruParampara.trainingJourneyTitle' | translate }}</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>{{'home.guruParampara.guru' | translate }}</strong>{{'home.guruParampara.mangai' | translate }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>{{'home.guruParampara.mastered' | translate }}</strong>{{'home.guruParampara.masteredDesc' | translate }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>{{'home.guruParampara.learningApproach' | translate }}</strong>{{'home.guruParampara.learningApproachDesc' | translate }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>{{'home.guruParampara.focus' | translate }}</strong>{{'home.guruParampara.focusDesc' | translate }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Sloka Guru -->
        <div class="max-w-md mx-auto">
          <div class="bg-gradient-to-br from-cream-50 to-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
            <div class="">
              <div class="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <img src="/assets/images/mangaiyarkarasi.jpeg" alt="Kalaimamani Desa Mangayarkarasi" class="w-full h-full object-cover">
            </div>
              <!-- Photo placeholder - Add image here -->
            </div>
            <h3 class="text-xl font-serif font-bold text-ocean-900 mb-2 text-center">
              {{'home.guruParampara.mangai' | translate }}
            </h3>
          </div>
        </div>
      </div>

      <!-- Keyboard Training -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-3">
            {{'home.guruParampara.keyboardTrainingTitle' | translate }}
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mx-auto"></div>
        </div>

        <div class="max-w-4xl mx-auto mb-12">
          <div class="bg-ocean-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-ocean-900 mb-4">{{'home.guruParampara.trainingJourneyTitle' | translate }}</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>{{'home.guruParampara.guru' | translate }}</strong>{{'home.guruParampara.keyboardGuru' | translate }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>{{'home.guruParampara.techniquesMastered' | translate }}</strong>{{'home.guruParampara.rightHandPlay' | translate }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>{{'home.guruParampara.repertoire' | translate }}</strong>{{'home.guruParampara.repertoireDesc' | translate }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Keyboard Guru -->
        <div class="max-w-md mx-auto">
          <div class="bg-gradient-to-br from-cream-50 to-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
            <div class="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <svg class="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
              <!-- Photo placeholder - Add image here -->
            </div>
            <h3 class="text-xl font-serif font-bold text-ocean-900 mb-2 text-center">
              {{'home.guruParampara.keyboardGuru1' | translate }}
            </h3>
          </div>
        </div>
      </div>

      <!-- Legacy Section -->
      <div class="bg-gradient-to-br from-ocean-900 to-ocean-800 rounded-2xl p-8 md:p-12 text-white">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-serif font-bold mb-4">
            {{'home.guruParampara.legacy' | translate }}
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
        </div>
        <ul class="space-y-4 text-cream-100 max-w-3xl mx-auto">
          <li class="flex items-center">
            <span class="text-yellow-400 mr-3 text-xl">✦</span>
            <span>{{'home.guruParampara.legacyPoint1' | translate }}</span>
          </li>
          <li class="flex items-center">
            <span class="text-yellow-400 mr-3 text-xl">✦</span>
            <span>{{'home.guruParampara.legacyPoint2' | translate }}</span>
          </li>
          <li class="flex items-center">
            <span class="text-yellow-400 mr-3 text-xl">✦</span>
            <span>{{'home.guruParampara.legacyPoint3' | translate }}</span>
          </li>
          <li class="flex items-center">
            <span class="text-yellow-400 mr-3 text-xl">✦</span>
            <span>{{'home.guruParampara.legacyPoint4' | translate }}</span>
          </li>
        </ul>
      </div>

    </div>
  </section>
  `
})
export class GuruParamparaComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Guru Parampara - Shreem Natyalaya');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Discover the sacred lineage and tradition of guru-shishya parampara at Shreem Natyalaya, honoring the unbroken chain of classical arts knowledge.' 
    });
  }
}
