import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-guru',
  standalone: true,
  imports: [],
  template:`<!-- Page Header -->
<section class="bg-gradient-to-br from-ocean-500 via-cream-200 to-yellow-200 py-16 md:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-serif font-bold text-ocean-900 mb-4">
        About the Guru
      </h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        A personal journey of passion, dedication, and commitment to classical arts
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
            <p class="text-sm font-semibold mb-1">Founder & Director</p>
            <p class="text-xl font-bold">Ms. Deeptha Sanjusree M</p>
          </div>
        </div>
      </div>

      <!-- Right: Introduction -->
      <div class="order-1 lg:order-2">
        <div class="space-y-6">
          <div>
            <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-4">
              Namaskar,
            </h2>
            <h2 class="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-4">
              I'm Deeptha Sanjusree M
            </h2>
            <div class="w-20 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mb-6"></div>
          </div>

          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p class="text-lg">
              I am the <span class="font-semibold text-ocean-900">Founder of Shreem Natyalaya</span>, 
              a classical dance and music academy dedicated to preserving and sharing the beauty of 
              traditional Indian arts.
            </p>

            <p class="text-lg">
              My journey in classical arts has been deeply rooted in tradition, discipline, and devotion. 
              Through years of dedicated practice and teaching, I have developed a strong foundation in music and movement, guided by the Guru–Shishya Parampara. 
              This journey has shaped my understanding of rhythm, expression, and spiritual connection, which I passionately pass on to every student I teach.
            </p>

            <p class="text-lg">
              As a <span class="font-semibold text-ocean-900">young founder</span>, I run this institution 
              with energy, commitment, and a deep sense of responsibility. Every student who walks through 
              our doors becomes part of my artistic family.
            </p>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-2 gap-4 pt-6">
            <div class="bg-cream-50 p-4 rounded-lg border-l-4 border-yellow-600">
              <p class="text-2xl font-bold text-ocean-900">10+</p>
              <p class="text-sm text-gray-600">Years Teaching Arts</p>
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
        My Learning Journey
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
        How family tradition shaped my artistic foundation
      </p>
      <div class="w-20 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mx-auto mt-6"></div>
    </div>

    <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
      
      <!-- Training Background -->
      <div class="mb-10">
        <h3 class="text-xl font-semibold text-ocean-900 mb-6 pb-3 border-b-2 border-ocean-200">
          My Training Background
        </h3>
        <ul class="space-y-4">
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-ocean-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
              I learned <span class="font-semibold text-ocean-900">Bharatanatyam and Veena</span> from my <span class="font-semibold text-ocean-900">Athai (Aunt)</span>, who instilled in me not just technique, but a deep reverence for these art forms
            </span>
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-ocean-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
              I learned <span class="font-semibold text-ocean-900">Keyboard</span> from my <span class="font-semibold text-ocean-900">father</span>, whose musical wisdom shaped my understanding of melody and rhythm
            </span>
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-ocean-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
              My artistic foundation was built within my family—where tradition was lived, not just taught
            </span>
          </li>
        </ul>
      </div>

      <!-- My Approach as Founder -->
      <div class="mb-10">
        <h3 class="text-xl font-semibold text-ocean-900 mb-6 pb-3 border-b-2 border-yellow-200">
          My Approach as Founder
        </h3>
        <ul class="space-y-4">
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
              I am actively involved in every aspect—from teaching daily classes to planning the curriculum
            </span>
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
              I run Shreem Natyalaya with strong enthusiasm, continuous effort, and unwavering dedication
            </span>
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
              I bring the same discipline and systematic thinking from my IT career into my teaching methodology
            </span>
          </li>
        </ul>
      </div>

      <!-- My Teaching Philosophy -->
      <div>
        <h3 class="text-xl font-semibold text-ocean-900 mb-6 pb-3 border-b-2 border-ocean-200">
          My Teaching Philosophy
        </h3>
        <ul class="space-y-4">
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-ocean-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
              I focus on <span class="font-semibold text-ocean-900">each and every student individually</span>, understanding their unique learning pace and style
            </span>
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-ocean-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
              I believe that every student's growth, discipline, and confidence matters equally
            </span>
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-ocean-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
              I am personally invested in my students' artistic journey—celebrating their progress and guiding them through challenges
            </span>
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 bg-ocean-600 rounded-full mt-2 mr-4"></span>
            <span class="text-gray-700 leading-relaxed">
              I create a nurturing environment where tradition meets personalized care and encouragement
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
        My Milestones & Credentials
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        A journey marked by dedication, discipline, and artistic excellence
      </p>
      <div class="w-20 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mx-auto mt-6"></div>
    </div>

    <!-- Classical Dance Milestones -->
    <div class="mb-16">
      <h3 class="text-2xl font-serif font-semibold text-ocean-900 mb-8 text-center">
        Classical Dance Milestones
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
              <h4 class="text-xl font-semibold text-ocean-900">Salangai Pooja</h4>
              <span class="text-sm font-semibold text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full">2006</span>
            </div>
            <p class="text-gray-600 leading-relaxed">
              A sacred ceremony marking the beginning of my formal Bharatanatyam training, 
              where I received my first ghungroos (ankle bells) with blessings from my Athai.
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
                Arangetram
              </h4>
              <span class="text-sm font-semibold text-yellow-300 bg-yellow-900/30 px-3 py-1 rounded-full">2011</span>
            </div>
            <p class="text-white/90 leading-relaxed">
              My debut solo performance—a defining moment in my Bharatanatyam journey. 
              This prestigious milestone represents years of dedicated training and marks 
              my transition from student to performing artist.
            </p>
          </div>
        </div>

      </div>
    </div>

    <!-- Awards & Recognition -->
    <div class="mb-16">
      <h3 class="text-2xl font-serif font-semibold text-ocean-900 mb-8 text-center">
        Awards & Recognition
      </h3>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <!-- Award 1 -->
        <div class="bg-white border-2 border-ocean-200 rounded-lg p-6 transition-all duration-300">
          <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h2 class="text-center font-semibold text-ocean-900 mb-2">"Arut Kala Aadal Arasi"</h2>
          <p class="text-center text-sm text-gray-600 mb-2">2011</p>
          <p class="text-center text-xs text-gray-500">Honored for Graceful Stage Performance and Young Choreographic Excellence</p>
        </div>

        <!-- Award 2 -->
        <div class="bg-white border-2 border-ocean-200 rounded-lg p-6 transition-all duration-300">
          <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h2 class="text-center font-semibold text-ocean-900 mb-2">"Bharatha Kala Sree"</h2>
          <p class="text-center font-semibold text-ocean-900 mb-2">Young achiever award for performing continously for 2 hours</p>
          <p class="text-center text-sm text-gray-600 mb-2">2012</p>
          <p class="text-center text-xs text-gray-500">Title & Awards received in the hands of "Kalaimamani" Valaiyapatti</p>
        </div>

        <!-- Award 3 -->
        <div class="bg-white border-2 border-ocean-200 rounded-lg p-6 transition-all duration-300">
          <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h4 class="text-center font-semibold text-ocean-900 mb-2">"Isai Selvi"</h4>
          <p class="text-center text-sm text-gray-600 mb-2">2014</p>
          <p class="text-center text-xs text-gray-500">Regional Arts Council</p>
        </div>

        <!-- Award 4 -->
        <div class="bg-white border-2 border-ocean-200 rounded-lg p-6 transition-all duration-300">
          <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h4 class="text-center font-semibold text-ocean-900 mb-2">"Valar Kalai Bharatha Sree"</h4>
          <p class="text-center text-sm text-gray-600 mb-2">2023</p>
          <p class="text-center text-xs text-gray-500">District Cultural Forum</p>
        </div>

      </div>
    </div>

    <!-- District levels -->
    <div class="mb-16">
      <h3 class="text-2xl font-serif font-semibold text-ocean-900 mb-8 text-center">
        District & State level Achievements
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">


      <div class="bg-white border-2 border-ocean-200 rounded-lg p-6 transition-all duration-300">
        <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
          <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <h4 class="text-center font-semibold text-ocean-900 mb-2">Butterfly Event, SRM University</h4>
        <p class="text-center text-sm text-gray-600 mb-2">2010</p>
        <p class="text-center text-xs text-gray-500">Secured Second Place at the District Level</p>
      </div>

      <div class="bg-white border-2 border-ocean-200 rounded-lg p-6 transition-all duration-300">
        <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
          <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <h4 class="text-center font-semibold text-ocean-900 mb-2">District-Level Bharatanatyam Competition</h4>
        <ul class="text-center text-xs text-gray-600 space-y-1">
          <li>2011–2012: Secured First Place</li>
          <li>2012–2013: Secured Third Place</li>
          <li>2013–2014: Secured Second Place</li>
        </ul>
      </div>
      
      <div class="bg-white border-2 border-ocean-200 rounded-lg p-6 transition-all duration-300">
        <div class="aspect-[4/3] bg-gradient-to-br from-ocean-50 to-yellow-50 rounded-md overflow-hidden mb-4">
          <img src="/assets/images/veena-award.jpg" alt="School-Level District Veena Competition" class="w-full h-full object-cover" />
        </div>
        <h4 class="text-center font-semibold text-ocean-900 mb-2">Tamil Nadu State level Veena Competition (School-level)</h4>
        <p class="text-center text-sm text-gray-600 mb-1">Secured First Prize</p>
        <p class="text-center text-xs text-gray-500">Received first prize from "Veena" E. Gayathri ma'am</p>
      </div>
    </div>

      
    </div>


    
    <!-- Academic Credentials -->
    <div>
      <h3 class="text-2xl font-serif font-semibold text-ocean-900 mb-8 text-center">
        Academic Credentials
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
                <p class="text-gray-600">Classical Music Training</p>
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
        My Journey to Shreem Natyalaya
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        The milestones that led me to establish this academy
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
                <h3 class="text-xl font-semibold text-ocean-900 mb-2">My Early Learning Years</h3>
                <p class="text-sm text-gray-600 mb-3">2002 onwards</p>
                <p class="text-gray-700">
                  I began learning classical dance and music from my family. My Athai taught me Bharatanatyam 
                  and Veena, while my father guided me in Keyboard. I started learning at Sri Raghavendra Natyalaya - Perungalathur from 2002 onwards. These early years built my artistic foundation.
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
                <h3 class="text-xl font-semibold text-ocean-900 mb-2">I Worked as Assistant Director</h3>
                <p class="text-sm text-gray-600 mb-3">2014-2018</p>
                <p class="text-gray-700">
                  I worked as a part-time Assistant Director of Sri Raghavendra Natyalaya, where I performed numerous temple cultural events with my students. This experience strengthened my passion for sharing classical arts and teaching.
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
                <h3 class="text-xl font-semibold text-ocean-900 mb-2">I Became Director of Sri Raghavendra Natyalaya</h3>
                <p class="text-sm text-gray-600 mb-3">2018-2020</p>
                <p class="text-gray-700">
                  I became the Director of Sri Raghavendra Natyalaya, leading the academy and organizing cultural events. This role deepened my commitment to preserving and teaching classical arts.During this time, I learned choreography and arranged temple events with orchestra, deepening my understanding of classical arts.
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
                <h3 class="text-xl font-semibold text-ocean-900 mb-2">I Pursued Advanced Training</h3>
                <p class="text-sm text-gray-600 mb-3">Mid-Career Phase</p>
                <p class="text-gray-700">
                  I pursued advanced training from "Acharya" H.N.Nandhini Suresh for Nattuvangam. 
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
                <h3 class="text-xl font-semibold mb-2">I Founded Shreem Natyalaya</h3>
                <p class="text-sm text-ocean-100 mb-3">2025 - Present</p>
                <p class="text-white/90">
                  I founded Shreem Natyalaya in 2025 with the vision of providing authentic classical arts education. Today, I personally teach and mentor every student with dedication, discipline, and care, ensuring strong foundations in tradition and artistry.
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
        My Learning Journey
      </h2>
      <p class="text-lg text-gray-600">
        How family tradition shaped my artistic foundation
      </p>
      <div class="w-24 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mx-auto mt-4"></div>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <!-- Training Background -->
      <div class="bg-gradient-to-br from-ocean-50 to-cream-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
        <h3 class="text-xl font-serif font-bold text-ocean-900 mb-4">My Training Background</h3>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start">
            <span class="text-ocean-600 mr-2">•</span>
            <span>I learned <strong>Bharatanatyam and Veena</strong> from my <strong>Athai (Aunt)</strong>, who instilled in me not just technique, but a deep reverence for these art forms</span>
          </li>
          <li class="flex items-start">
            <span class="text-ocean-600 mr-2">•</span>
            <span>I learned <strong>Keyboard</strong> from my <strong>father</strong>, whose musical wisdom shaped my understanding of melody and rhythm</span>
          </li>
          <li class="flex items-start">
            <span class="text-ocean-600 mr-2">•</span>
            <span>My artistic foundation was built within my family where tradition was lived, not just taught</span>
          </li>
        </ul>
      </div>

      <!-- Approach as Founder -->
      <div class="bg-gradient-to-br from-yellow-50 to-cream-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
        <h3 class="text-xl font-serif font-bold text-ocean-900 mb-4">My Approach as Founder</h3>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start">
            <span class="text-yellow-600 mr-2">•</span>
            <span>I am actively involved in every aspect from teaching daily classes to planning the curriculum</span>
          </li>
          <li class="flex items-start">
            <span class="text-yellow-600 mr-2">•</span>
            <span>I run Shreem Natyalaya with strong enthusiasm, continuous effort, and unwavering dedication</span>
          </li>
          <li class="flex items-start">
            <span class="text-yellow-600 mr-2">•</span>
            <span>I bring the same discipline and systematic thinking simple teaching methodology</span>
          </li>
        </ul>
      </div>

      <!-- Teaching Philosophy -->
      <div class="bg-gradient-to-br from-cream-50 to-ocean-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
        <h3 class="text-xl font-serif font-bold text-ocean-900 mb-4">My Teaching Philosophy</h3>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start">
            <span class="text-ocean-600 mr-2">•</span>
            <span>I focus on <strong>each and every student individually</strong>, understanding their unique learning pace and style</span>
          </li>
          <li class="flex items-start">
            <span class="text-ocean-600 mr-2">•</span>
            <span>I believe that every student's growth, discipline, and confidence matters equally</span>
          </li>
          <li class="flex items-start">
            <span class="text-ocean-600 mr-2">•</span>
            <span>I am personally invested in my students' artistic journey—celebrating their progress and guiding them through challenges</span>
          </li>
          <li class="flex items-start">
            <span class="text-ocean-600 mr-2">•</span>
            <span>I create a nurturing environment where tradition meets personalized care and encouragement</span>
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
          My Commitment to You
        </h2>
        <div class="w-16 h-1 bg-gradient-to-r from-ocean-600 to-yellow-500 mx-auto"></div>
      </div>
      
      <div class="space-y-4 text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
        <p class="text-lg">
          When you entrust your child to Shreem Natyalaya, you're not just enrolling them in classes—
          you're welcoming them into a space where I personally ensure their growth, confidence, and 
          love for classical arts.
        </p>
        <p class="text-lg">
          I am here not just as a teacher, but as a mentor who genuinely cares about each student's 
          journey. I bring the same passion my family instilled in me, and I promise to nurture that 
          same passion in your children.
        </p>
        <p class="text-lg font-semibold text-ocean-900">
          Let's preserve this beautiful tradition together.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="py-16 md:py-20 bg-ocean-900 text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl md:text-4xl font-serif font-bold mb-6">
      Join Me at Shreem Natyalaya
    </h2>
    <p class="text-lg text-cream-100 mb-8 leading-relaxed">
      I invite you to experience authentic classical arts education in a nurturing, 
      dedicated environment where every student truly matters.
    </p>
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
