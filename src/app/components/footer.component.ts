import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  //templateUrl: './footer.component.html',
  template: `
  <footer class="bg-ocean-900 text-cream-50 mt-auto">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- About Section -->
      <div>
        <h3 class="text-xl font-serif font-semibold mb-4 text-yellow-400">Shreem Natyalaya</h3>
        <p class="text-cream-100 text-sm leading-relaxed">
          Where tradition meets disciplined artistry. Nurturing classical arts with authenticity and dedication.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-xl font-serif font-semibold mb-4 text-yellow-400">Quick Links</h3>
        <ul class="space-y-2">
          <li>
            <a routerLink="/" class="text-cream-100 hover:text-yellow-400 transition-colors duration-200 text-sm">
              Home
            </a>
          </li>
          <li>
            <a routerLink="/about-guru" class="text-cream-100 hover:text-yellow-400 transition-colors duration-200 text-sm">
              About Guru
            </a>
          </li>
          <li>
            <a routerLink="/guru-parampara" class="text-cream-100 hover:text-yellow-400 transition-colors duration-200 text-sm">
              Guru Parampara
            </a>
          </li>
          <li>
            <a routerLink="/courses" class="text-cream-100 hover:text-yellow-400 transition-colors duration-200 text-sm">
              Courses
            </a>
          </li>
          <li>
            <a routerLink="/upcoming-events" class="text-cream-100 hover:text-yellow-400 transition-colors duration-200 text-sm">
              Upcoming Events
            </a>
          </li>
          <li>
            <a routerLink="/branches" class="text-cream-100 hover:text-yellow-400 transition-colors duration-200 text-sm">
              Our Branches
            </a>
          </li>
          <li>
            <a routerLink="/collaborate" class="text-cream-100 hover:text-yellow-400 transition-colors duration-200 text-sm">
              Collaborate with us
            </a>
          </li>
          <li>
            <a routerLink="/contact" class="text-cream-100 hover:text-yellow-400 transition-colors duration-200 text-sm">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h3 class="text-xl font-serif font-semibold mb-4 text-yellow-400">Get in Touch</h3>
        <p class="text-cream-100 text-sm leading-relaxed mb-2">
          For admissions and inquiries, please visit our contact page.
        </p>
        <a 
          routerLink="/contact" 
          class="inline-block mt-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded transition-colors duration-200 text-sm font-medium"
        >
          Contact Us
        </a>
      </div>
    </div>

    <!-- Copyright -->
    <div class="mt-8 pt-8 border-t border-ocean-800 text-center">
      <p class="text-cream-200 text-sm">
        &copy; {{ currentYear }} Shreem Natyalaya. All rights reserved.
      </p>
      <p class="text-cream-200 text-sm">
        (Design and developed by Deeptha Sanjusree M)
      </p>
    </div>
  </div>
</footer>
`
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();
}
