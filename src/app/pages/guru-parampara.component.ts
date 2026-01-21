import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-guru-parampara',
  standalone: true,
  imports: [],
  template: `<!-- Page Header -->
  <section class="bg-gradient-to-br from-ocean-500 via-cream-200 to-yellow-200 py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-serif font-bold text-ocean-900 mb-4">
          Guru Parampara
        </h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Deeptha Sanjusree carries forward a rich lineage of traditional Indian arts, trained under renowned gurus in Bharatanatyam, Veena, Keyboard, and Sanskrit/Tamil Slokas
        </p>
      </div>
    </div>
  </section>

  <!-- Main Content -->
  <section class="py-16 md:py-24 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Introduction -->
      <div class="mb-16">
        <div class="max-w-4xl mx-auto bg-gradient-to-br from-cream-50 to-ocean-50 rounded-xl p-8 border-2 border-ocean-200">
          <h3 class="text-2xl font-serif font-bold text-ocean-900 mb-6 text-center">Training & Expertise</h3>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-ocean-600 mr-3 mt-1">•</span>
              <div>
                <div><strong>Bharatanatyam:</strong> Trained under "Natya Visharadha" and "Nattuvanga Visharadha" Late B. Kanchana, M.music</div>
                <div class="ml-4 mt-1 text-sm text-gray-600">→ Advanced Nattuvangam training under "Acharya" H.N. Nandhi Suresh (Founder & Director of Sri Sai Nruthyalaya) - West Mambalam</div>
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-ocean-600 mr-3 mt-1">•</span>
              <div>
                <div><strong>Veena:</strong> Basics training under Late B. Kanchana</div>
                <div class="ml-4 mt-1 text-sm text-gray-600">→ Advanced training from "Veena Vani" Late Ethiraajavalli (Professor, Music College)</div>
                <div class="ml-4 mt-1 text-sm text-gray-600">→ "Kalaimamani" Karaikudi Sivasubramanyam - Founder of Brihaddhwani Music School, Chennai RA Puram</div>
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-ocean-600 mr-3 mt-1">•</span>
              <span><strong>Keyboard:</strong> Melody playing in devotional and Indian film music</span>
            </li>
            <li class="flex items-start">
              <span class="text-ocean-600 mr-3 mt-1">•</span>
              <div>
                <div><strong>Sanskrit & Tamil Slokas:</strong> Mastered sacred compositions with correct pronunciation and rhythm</div>
                <div class="ml-4 mt-1 text-sm text-gray-600">→ Sanskrit slokas from Brihaddhwani Institute</div>
                <div class="ml-4 mt-1 text-sm text-gray-600">→ Tamil slokas from "Kalaimamani" Desa Mangayarkarasi - Founder of Aathma Gnana Maiyam</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bharatanatyam Training -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-3">
            Bharatanatyam Training
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mx-auto"></div>
        </div>

        <div class="max-w-4xl mx-auto mb-12">
          <div class="bg-cream-50 rounded-lg p-6 mb-6">
            <h3 class="text-xl font-semibold text-ocean-900 mb-4">Training Journey</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span>Began learning Bharatanatyam in childhood under <strong>"Natya Visharadha" and "Nattuvanga Visharadha" Late B. Kanchana M.music</strong> (Government Music School) and Founder & Director of Sri Raghavendra Natyalaya</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span>Completed Arangetram under her guidance</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span>Her aunt mentored her in Bharatanatyam basics and artistic development</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span>Started teaching at Sri Raghavendra Natyalaya (2014)</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span>Progressed to Director-level role (2018-2020)</span>
              </li>
            </ul>
          </div>
          <div class="bg-ocean-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-ocean-900 mb-3">Guru Lineage</h3>
            <p class="text-gray-700">Late B. Kanchana's guru was <strong>"Kalaimamani" Madurai R. Muralidharan</strong>, a celebrated Bharatanatyam artist from Madurai.</p>
          </div>
        </div>

        <!-- Bharatanatyam Gurus -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <!-- My Guru -->
          <div class="bg-gradient-to-br from-ocean-600 to-ocean-700 text-white rounded-xl p-6 border-2 border-ocean-800">
            <div class="aspect-square bg-ocean-800/30 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <svg class="w-20 h-20 text-ocean-200" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="text-center mb-2">
              <span class="inline-block px-3 py-1 bg-yellow-500 text-ocean-900 text-xs font-bold rounded-full mb-3">MY GURU</span>
            </div>
            <h3 class="text-xl font-serif font-bold mb-2 text-center">
              Late B. Kanchana M.
            </h3>
            <p class="text-sm text-ocean-100 text-center">
              Bharatanatyam Teacher<br/>Government Music School
            </p>
          </div>

          <!-- Guru's Guru -->
          <div class="bg-gradient-to-br from-cream-50 to-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
            <div class="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <img src="/assets/images/muralidharan.jpeg" alt="Kalaimamani Madurai R. Muralidharan" class="w-full h-full object-cover">
            </div>
            <div class="text-center mb-2">
              <span class="inline-block px-3 py-1 bg-ocean-600 text-white text-xs font-bold rounded-full mb-3">GURU'S GURU</span>
            </div>
            <h3 class="text-xl font-serif font-bold text-ocean-900 mb-2 text-center">
              "Kalaimamani" Madurai R. Muralidharan
            </h3>
            <p class="text-sm text-gray-600 text-center">
              Celebrated Bharatanatyam Artist
            </p>
          </div>
        </div>
      </div>

      <!-- Veena Training -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-3">
            Veena Training
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mx-auto"></div>
        </div>

        <div class="max-w-4xl mx-auto mb-12">
          <div class="bg-cream-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-ocean-900 mb-4">Training Journey</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>Foundational Training:</strong> Learned basics under Smt. Late Kanchana (her aunt)</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>Advanced Training:</strong> "Veena Vani" under Late Ethiraja Valli (Professor, Music College)</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>Techniques Mastered:</strong> Kamakas, Alapana, and advanced Veena lessons</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>Refined Artistry:</strong> Under "Kalaimamani" Karaikudi Siva Subramanyam (Veena Maestro, Brihaddwani Institute)</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>Additional Learning:</strong> Sanskrit slokas alongside advanced Veena techniques</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Veena Gurus -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Guru 1 -->
          <div class="bg-gradient-to-br from-cream-50 to-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
            <div class="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <svg class="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
              <!-- Photo placeholder - Add image here -->
            </div>
            <h3 class="text-xl font-serif font-bold text-ocean-900 mb-2 text-center">
              Smt. Late Kanchana
            </h3>
            <p class="text-sm text-gray-600 text-center">
              Foundational Veena Training (Her Aunt)
            </p>
          </div>

          <!-- Guru 2 -->
          <div class="bg-gradient-to-br from-cream-50 to-ocean-50 rounded-xl p-6 border-2 border-ocean-200">
            <div class="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <svg class="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
              <!-- Photo placeholder - Add image here -->
            </div>
            <h3 class="text-xl font-serif font-bold text-ocean-900 mb-2 text-center">
              Ethiraja Valli
            </h3>
            <p class="text-sm text-gray-600 text-center">
              Professor, Music College - "Veena Vani", Kamakas & Alapana
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
              "Kalaimamani" Karaikudi Siva Subramanyam
            </h3>
            <p class="text-sm text-gray-600 text-center">
              Veena Maestro, Founder of Brihaddwani Institute
            </p>
          </div>
        </div>
      </div>

      <!-- Sanskrit & Tamil Slokas -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-3">
            Sanskrit & Tamil Slokas
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mx-auto"></div>
        </div>

        <div class="max-w-4xl mx-auto mb-12">
          <div class="bg-cream-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-ocean-900 mb-4">Training Details</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>Guru:</strong> "Kalaimamani" Desa Mangayarkarasi</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>Compositions Mastered:</strong> Thiruppavai, Thiruvempavai, Thirupalli Ezhuchi, Thiruppugazh, Kandhar Alankaram, Kandhar Anuboothi</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>Learning Approach:</strong> Correct pronunciation, rhythm, and meaning</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>Focus:</strong> Musicality and devotion in sacred works</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Sloka Guru -->
        <div class="max-w-md mx-auto">
          <div class="bg-gradient-to-br from-cream-50 to-ocean-50 rounded-xl p-6 border-2 border-ocean-200">
            <div class="">
              <div class="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <img src="/assets/images/mangaiyarkarasi.jpeg" alt="Kalaimamani Madurai R. Muralidharan" class="w-full h-full object-cover">
            </div>
              <!-- Photo placeholder - Add image here -->
            </div>
            <h3 class="text-xl font-serif font-bold text-ocean-900 mb-2 text-center">
              "Kalaimamani" Desa Mangayarkarasi
            </h3>
            <p class="text-sm text-gray-600 text-center mb-3">
              Tamil Slokas Master
            </p>
            <div class="text-xs text-gray-600 text-center">
              <p>Thiruppugazh • Kandhar Alankaram • Kandhar Anuboothi</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Keyboard Training -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-3">
            Keyboard Training
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mx-auto"></div>
        </div>

        <div class="max-w-4xl mx-auto mb-12">
          <div class="bg-cream-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-ocean-900 mb-4">Training Details</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>Guru:</strong> "Isai Selvam" B. Mahendran (her father)</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>Technique:</strong> Right-hand melody playing</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">→</span>
                <span><strong>Repertoire:</strong> Devotional and Indian film music</span>
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
              "Isai Selvam" B. Mahendran
            </h3>
            <p class="text-sm text-gray-600 text-center">
              Keyboard - Devotional & Indian Film Music (Her Father)
            </p>
          </div>
        </div>
      </div>

      <!-- Legacy Section -->
      <div class="bg-gradient-to-br from-ocean-900 to-ocean-800 rounded-2xl p-8 md:p-12 text-white">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-serif font-bold mb-4">
            Legacy and Continuation
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
        </div>
        <ul class="space-y-4 text-cream-100 max-w-3xl mx-auto">
          <li class="flex items-start">
            <span class="text-yellow-400 mr-3 mt-1 text-xl">✦</span>
            <span>Embodies the Guru Parampara tradition</span>
          </li>
          <li class="flex items-start">
            <span class="text-yellow-400 mr-3 mt-1 text-xl">✦</span>
            <span>Blends traditional teachings with modern pedagogy</span>
          </li>
          <li class="flex items-start">
            <span class="text-yellow-400 mr-3 mt-1 text-xl">✦</span>
            <span>Teaches, mentors, and inspires through Shreem Natyalaya</span>
          </li>
          <li class="flex items-start">
            <span class="text-yellow-400 mr-3 mt-1 text-xl">✦</span>
            <span>Preserves classical arts and devotional music for future generations</span>
          </li>
        </ul>
      </div>

    </div>
  </section>

  <!-- Call to Action -->
  <section class="py-16 md:py-20 bg-ocean-900 text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-serif font-bold mb-6">
        Become Part of This Sacred Tradition
      </h2>
      <p class="text-lg text-cream-100 mb-8">
        Join us in preserving and celebrating the rich heritage of classical Indian arts
      </p>
      <a 
        routerLink="/contact" 
        class="inline-block px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        Start Your Journey
      </a>
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
