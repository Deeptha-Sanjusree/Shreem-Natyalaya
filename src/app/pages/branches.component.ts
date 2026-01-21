import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-branches',
  standalone: true,
  imports: [CommonModule],
  template:`
  <!-- Hero Section -->
  <section class="relative bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-900 text-white py-16 md:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center">
          Our Branches
        </h1>
        <p class="text-base md:text-lg text-ocean-100 max-w-xl mx-auto">
          Find the nearest branch and join our classes today
        </p>
      </div>
    </div>
  </section>

  <!-- Branches Section -->
  <section class="py-12 md:py-16 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Branches Grid -->
    <div class="space-y-8">
      <!-- First Row - Aathur Branch (Centered) -->
      <div class="flex justify-center">
        <div class="w-full lg:w-2/3">
          @if (branches[0]; as branch) {
            <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
          
          <!-- Branch Header -->
          <div class="bg-ocean-700 p-6">
            <div class="flex items-center gap-2 mb-2">
              <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              <span class="text-ocean-100 text-sm">{{ branch.location }}</span>
            </div>
            <h3 class="text-2xl font-bold text-white">
              {{ branch.name }}
            </h3>
          </div>

          <!-- Branch Content -->
          <div class="p-8 -mt-6">
            
            <!-- Address Card -->
            <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 mb-6 border border-gray-100 shadow-sm">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 bg-ocean-100 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-ocean-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="text-xs font-bold text-ocean-700 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span class="w-2 h-2 bg-ocean-500 rounded-full"></span>
                    Address
                  </h4>
                  <p class="text-gray-700 text-sm leading-relaxed font-medium">{{ branch.address }}</p>
                </div>
              </div>
            </div>

            <!-- Class Schedule -->
            <div class="mb-6">
              <h4 class="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-ocean-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                Class Timings
              </h4>
              <div class="overflow-x-auto rounded-lg border border-gray-200">
                <table class="min-w-full bg-white">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Course</th>
                      <th class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Sessions (Day — Time)</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100">
                    @for (group of groupByCourseOrdered(branch.timings); track group.course) {
                      <tr class="hover:bg-gray-50 align-top">
                        <td class="px-4 py-3">
                          <span class="inline-block bg-ocean-600 text-white px-3 py-1 rounded-full text-xs font-semibold">{{ group.course }}</span>
                        </td>
                        <td class="px-4 py-3">
                          <div class="flex flex-wrap gap-2">
                            @for (slot of group.slots; track slot.day + '|' + slot.time) {
                              <span class="inline-flex items-center gap-2 text-gray-800 px-3 py-1.5 rounded-full text-xs font-medium">
                                <svg class="w-3.5 h-3.5 text-ocean-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                </svg>
                                {{ slot.day }} — {{ slot.time }}
                              </span>
                            }
                          </div>
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Contact Button -->
            <a 
              href="tel:{{ branch.contact }}"
              class="flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 gap-3 shadow-lg hover:shadow-xl group"
            >
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>{{ branch.contact }}</span>
            </a>
          </div>
        </div>
          }
        </div>
      </div>

      <!-- Second Row - Remaining Branches (2 columns) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        @for (branch of branches.slice(1); track branch.name) {
          <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
          
          <!-- Branch Header -->
          <div class="bg-ocean-700 p-6">
            <div class="flex items-center gap-2 mb-2">
              <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              <span class="text-ocean-100 text-sm">{{ branch.location }}</span>
            </div>
            <h3 class="text-2xl font-bold text-white">
              {{ branch.name }}
            </h3>
          </div>

          <!-- Branch Content -->
          <div class="p-6">
            
            <!-- Address -->
            <div class="mb-6 pb-6 border-b border-gray-200">
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-ocean-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
                </svg>
                <div>
                  <h4 class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Address</h4>
                  <p class="text-gray-700 text-sm">{{ branch.address }}</p>
                </div>
              </div>
            </div>

            <!-- Class Schedule -->
            <div class="mb-6">
              <h4 class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                <svg class="w-4 h-4 text-ocean-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                Class Timings
              </h4>
              <div class="overflow-x-auto rounded-lg border border-gray-200">
                <table class="min-w-full bg-white">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Course</th>
                      <th class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Sessions (Day — Time)</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100">
                    @for (group of groupByCourseOrdered(branch.timings); track group.course) {
                      <tr class="hover:bg-gray-50 align-top">
                        <td class="px-4 py-3">
                          <span class="inline-block bg-ocean-600 text-white px-3 py-1 rounded-full text-xs font-semibold">{{ group.course }}</span>
                        </td>
                        <td class="px-4 py-3">
                          <div class="flex flex-wrap gap-2">
                            @for (slot of group.slots; track slot.day + '|' + slot.time) {
                              <span class="inline-flex items-center gap-2 text-gray-800 px-3 py-1.5 rounded-full text-xs font-medium">
                                <svg class="w-3.5 h-3.5 text-ocean-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                </svg>
                                {{ slot.day }} — {{ slot.time }}
                              </span>
                            }
                          </div>
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Contact Button -->
            <a 
              href="tel:{{ branch.contact }}"
              class="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 gap-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>{{ branch.contact }}</span>
            </a>
          </div>
        </div>
        }
      </div>
    </div>

    <!-- Service Areas -->
    <div class="mt-16">
      <div class="bg-ocean-700 rounded-2xl p-8 md:p-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 bg-ocean-600 px-4 py-2 rounded-full mb-4">
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            <span class="text-white text-sm font-semibold">Coverage Area</span>
          </div>
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">
            Our Service Areas
          </h3>
          <p class="text-ocean-100 mb-8 text-base max-w-2xl mx-auto">
            Currently serving students in Chengalpet - Aathur, Urapakkam - Kattur, and Guduvancheri. Planning to expand our classes to more areas soon!
          </p>
          
          <!-- Current Locations -->
          <div class="mb-6">
            <h4 class="text-white text-xs font-bold uppercase tracking-wide mb-3">Current Locations</h4>
            <div class="flex flex-wrap justify-center gap-2">
              <span class="bg-green-500 px-4 py-2 rounded-lg text-sm font-semibold text-white flex items-center gap-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Chengalpet - Aathur
              </span>
              <span class="bg-green-500 px-4 py-2 rounded-lg text-sm font-semibold text-white flex items-center gap-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Urapakkam - Kattur
              </span>
              <span class="bg-green-500 px-4 py-2 rounded-lg text-sm font-semibold text-white flex items-center gap-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Guduvancheri
              </span>
            </div>
          </div>

          <!-- Planned Expansion -->
          <div>
            <h4 class="text-white text-xs font-bold uppercase tracking-wide mb-3">Expanding Soon To</h4>
            <div class="flex flex-wrap justify-center gap-2">
              <span class="bg-yellow-500 px-4 py-2 rounded-lg text-sm font-semibold text-white flex items-center gap-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                Vandalur
              </span>
              <span class="bg-yellow-500 px-4 py-2 rounded-lg text-sm font-semibold text-white flex items-center gap-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                Kattankulathur
              </span>
              <span class="bg-yellow-500 px-4 py-2 rounded-lg text-sm font-semibold text-white flex items-center gap-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                Maraimalai Nagar
              </span>
              <span class="bg-yellow-500 px-4 py-2 rounded-lg text-sm font-semibold text-white flex items-center gap-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                SP Koil
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Important Note -->
    <div class="mt-12 max-w-4xl mx-auto">
      <div class="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-yellow-300 rounded-2xl p-8 shadow-lg">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-md">
            <svg class="w-6 h-6 text-yellow-900" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="flex-1">
            <h4 class="text-lg font-bold text-yellow-900 mb-2 flex items-center gap-2">
              Important Information
            </h4>
              <ul class="text-yellow-800 leading-relaxed">
                <li>* Each class session is <strong>1 hour long</strong>, conducted <strong>twice per week.</strong></li> 
                <li>* Timings are strictly followed and cannot be adjusted based on student availability.</li>
                <li>* Bharathanatyam students should wear their uniforms</li>
              </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
  </section>
`
})
export class BranchesComponent implements OnInit {

  branches = [
    {
      name: 'Shreem Natyalaya - Aathur',
      location: 'Aathur, Chengalpet',
      address: '2/199, Bhuvaneswari nagar, Aathur, Chengalpet - 603101',
      timings: [
        { day: 'Saturday', time: '5:30 PM - 6:30 PM', course: 'Bharatanatyam' },
        { day: 'Saturday', time: '6:30 PM - 7:30 PM', course: 'Slokam' },
        { day: 'Saturday', time: '7:30 PM - 8:30 PM', course: 'Keyboard' },
        { day: 'Sunday', time: '9:00 AM - 10:00 AM', course: 'Bharathanatyam'},
        { day: 'Sunday', time: '10:00 AM - 11:00 AM', course: 'Slokam'},
        { day: 'Sunday', time: '11:00 AM - 12:00 PM', course: 'Keyboard'}
      ],
      contact: '+91 9940489578'
    },
    {
      name: 'Shreem Natyalaya - Kattur',
      location: 'Kattur, Karanai Puthucheri',
      address: 'Kids park International pre school, Kattur',
      timings: [
        { day: 'Wednesday & Thursday', time: '6:30 PM - 7:30 PM', course: 'Bharatanatyam' },
      ],
      contact: '+91 9940489578'
    },
    {
      name: 'Shreem Natyalaya - Guduvancheri',
      location: 'Guduvancheri, Chennai',
      address: 'First cry intelloits play school, Guduvancheri, 603202',
      timings: [
        { day: 'Wednesday & Thursday', time: '5:00 PM - 6:00 PM', course: 'Bharathanatyam' },
      ],
      contact: '+91 9940489578'
    },
    // {
    //   name: 'Shreem Natyalaya - Chrompet',
    //   location: 'Chrompet, Chennai',
    //   address: 'SV music school, Chrompet',
    //   timings: [
    //     { day: 'Monday & Tuesday', time: '6:00 PM - 7:00 PM', course: 'Bharatanatyam' },
    //   ],
    //   contact: '+91 9940489578'
    // }
  ];

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Our Branches - Shreem Natyalaya');
    this.meta.updateTag({
      name: 'description',
      content: 'Find Shreem Natyalaya branches across Urapakkam, Guduvancheri, and nearby areas. View class timings and venue details.'
    });
  }

  // Normalize course names to consistent labels
  private normalizeCourse(name: string): string {
    const n = (name || '').trim().toLowerCase();
    if (n.includes('bhar')) return 'Bharathanatyam';
    if (n.includes('veena') || n.includes('veenai')) return 'Veena';
    if (n.includes('slok')) return 'Slokam';
    if (n.includes('key')) return 'Keyboard';
    return (name || '').trim();
  }

  // Group timings by course and order as Bharathanatyam, Veena, Slokam, Keyboard
  groupByCourseOrdered(timings: { day: string; time: string; course: string }[]) {
    const map = new Map<string, { course: string; slots: { day: string; time: string }[] }>();
    for (const t of timings || []) {
      const course = this.normalizeCourse(t.course);
      if (!map.has(course)) {
        map.set(course, { course, slots: [] });
      }
      map.get(course)!.slots.push({ day: t.day, time: t.time });
    }
    const order = ['Bharathanatyam', 'Veena', 'Slokam', 'Keyboard'];
    const groups = Array.from(map.values());
    groups.sort((a, b) => {
      const ai = order.indexOf(a.course);
      const bi = order.indexOf(b.course);
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi) || a.course.localeCompare(b.course);
    });
    return groups;
  }
}
