import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

interface Event {
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  category: 'performance' | 'workshop' | 'competition' | 'festival';
  image: string;
  registrationOpen: boolean;
}

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [CommonModule],
  template: `<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-900 text-white py-16 md:py-20">
  <div class="absolute inset-0 bg-black/20"></div>
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
      Upcoming Events
    </h1>
    <p class="text-lg md:text-xl text-cream-100">
      Stay updated with our latest events and activities
    </p>
  </div>
</section>

<!-- Event Posters Gallery -->
<section class="py-16 md:py-24 bg-cream-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Posters Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <!-- Poster 1 -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300">
        <div class="aspect-[3/4] bg-gradient-to-br from-ocean-50 to-cream-50 p-4 flex items-center justify-center">
          <img 
            src="/assets/images/upcomingprogram.png" 
            alt="Upcoming Program - 1"
            class="w-full h-full object-contain"
          />
        </div>
      </div>

      <!-- Poster 2 -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300">
        <div class="aspect-[3/4] bg-gradient-to-br from-ocean-50 to-cream-50 p-4 flex items-center justify-center">
          <img 
            src="/assets/images/" 
            alt="Upcoming Program - 2"
            class="w-full h-full object-contain"
          />
        </div>
      </div>

      <!-- Poster 3 -->
      <!-- <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div class="aspect-[3/4] bg-gradient-to-br from-ocean-50 to-yellow-50">
          <img 
            src="/assets/images/event-poster3.jpg" 
            alt="Event Poster 3"
            class="w-full h-full object-cover"
          />
        </div>
      </div> -->

      <!-- Poster 4 -->
      <!-- <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div class="aspect-[3/4] bg-gradient-to-br from-cream-50 to-ocean-50">
          <img 
            src="/assets/images/event-poster4.jpg" 
            alt="Event Poster 4"
            class="w-full h-full object-cover"
          />
        </div>
      </div> -->

      <!-- Poster 5 -->
      <!-- <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div class="aspect-[3/4] bg-gradient-to-br from-yellow-50 to-ocean-50">
          <img 
            src="/assets/images/event-poster5.jpg" 
            alt="Event Poster 5"
            class="w-full h-full object-cover"
          />
        </div>
      </div> -->

      <!-- Poster 6 -->
      <!-- <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div class="aspect-[3/4] bg-gradient-to-br from-ocean-50 to-cream-50">
          <img 
            src="/assets/images/event-poster6.jpg" 
            alt="Event Poster 6"
            class="w-full h-full object-cover"
          />
        </div>
      </div> -->

    </div>
  </div>
</section>

<!-- Contact CTA -->
<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-2xl md:text-3xl font-serif font-bold text-ocean-900 mb-4">
      Want to Know More?
    </h2>
    <p class="text-lg text-gray-600 mb-8">
      Contact us for event details, registration, and participation information
    </p>
    <a 
      href="/contact"
      class="inline-block px-8 py-4 bg-ocean-700 hover:bg-ocean-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      Contact Us
    </a>
  </div>
</section>
`
})
export class UpcomingEventsComponent implements OnInit {
  
  upcomingEvents: Event[] = [
    {
      title: 'Annual Arangetram Ceremony',
      date: 'March 15, 2026',
      time: '6:00 PM - 9:00 PM',
      venue: 'Narada Gana Sabha, Chennai',
      description: 'Witness the debut performance of our senior students as they complete their journey in Bharatanatyam with a traditional Arangetram ceremony.',
      category: 'performance',
      image: 'images/arangetram-event.jpg',
      registrationOpen: true
    },
    {
      title: 'Nattuvangam Workshop',
      date: 'March 22, 2026',
      time: '10:00 AM - 4:00 PM',
      venue: 'Shreem Natyalaya Studio',
      description: 'Learn the art of Nattuvangam (dance conducting) from experienced practitioners. Open to intermediate and advanced students.',
      category: 'workshop',
      image: 'images/nattuvangam-workshop.jpg',
      registrationOpen: true
    },
    {
      title: 'Inter-Academy Dance Competition',
      date: 'April 5, 2026',
      time: '9:00 AM - 6:00 PM',
      venue: 'Music Academy, Chennai',
      description: 'Our students will participate in the prestigious inter-academy classical dance competition showcasing various dance forms.',
      category: 'competition',
      image: 'images/competition-event.jpg',
      registrationOpen: false
    },
    {
      title: 'Navarathri Festival Celebrations',
      date: 'October 2026',
      time: 'TBA',
      venue: 'Local Temple & Shreem Natyalaya',
      description: 'Nine days of classical music and dance performances celebrating the divine feminine. Daily performances by our students.',
      category: 'festival',
      image: 'images/navarathri-event.jpg',
      registrationOpen: false
    },
    {
      title: 'Veena Recital Evening',
      date: 'April 18, 2026',
      time: '5:30 PM - 8:00 PM',
      venue: 'Shreem Natyalaya Studio',
      description: 'An evening dedicated to the melodious sounds of Veena. Our students will perform classical compositions.',
      category: 'performance',
      image: 'images/veena-recital.jpg',
      registrationOpen: true
    },
    {
      title: 'Slokam Recitation Workshop',
      date: 'May 10, 2026',
      time: '3:00 PM - 6:00 PM',
      venue: 'Shreem Natyalaya Studio',
      description: 'Learn proper pronunciation and meaning of sacred slokas. Suitable for beginners and intermediate students.',
      category: 'workshop',
      image: 'images/slokam-workshop.jpg',
      registrationOpen: true
    }
  ];

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Upcoming Events - Shreem Natyalaya');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Stay updated with upcoming performances, workshops, competitions, and festivals at Shreem Natyalaya. Join us in celebrating classical Indian arts.' 
    });
  }

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'performance': 'bg-ocean-100 text-ocean-800',
      'workshop': 'bg-yellow-100 text-yellow-800',
      'competition': 'bg-red-100 text-red-800',
      'festival': 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  }

  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'performance': 'M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z',
      'workshop': 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
      'competition': 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      'festival': 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
    };
    return icons[category] || '';
  }
}
