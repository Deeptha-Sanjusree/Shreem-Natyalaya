import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  //templateUrl: './footer.component.html',
  template: `
  <footer class="bg-ocean-900 text-cream-50 mt-auto">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- About Section -->
      <div>
        <h3 class="text-xl font-serif font-semibold mb-4 text-yellow-400">{{'nav.instituteName' | translate }}</h3>
        <p class="text-cream-100 text-sm leading-relaxed">
          {{ 'footer.tagline' | translate }}
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-xl font-serif font-semibold mb-4 text-yellow-400">{{'footer.quickLinks' | translate }}</h3>
        <ul class="space-y-2">
          <li>
            <a routerLink="/" class="text-cream-100 hover:text-yellow-400 transition-colors duration-200 text-sm" (click)="scrollToTop()">
              {{'nav.home' | translate }}
            </a>
          </li>
          <li>
            <a routerLink="/about-guru" class="text-cream-100 hover:text-yellow-400 transition-colors duration-200 text-sm" (click)="scrollToTop()">
              {{'nav.aboutGuru' | translate }}
            </a>
          </li>
          <li>
            <a routerLink="/guru-parampara" class="text-cream-100 hover:text-yellow-400 transition-colors duration-200 text-sm" (click)="scrollToTop()">
              {{'nav.guruParampara' | translate }}
            </a>
          </li>
          <li>
            <a routerLink="/courses" class="text-cream-100 hover:text-yellow-400 transition-colors duration-200 text-sm" (click)="scrollToTop()">
              {{'nav.courses' | translate }}
            </a>
          </li>
          <li>
            <a routerLink="/upcoming-events" class="text-cream-100 hover:text-yellow-400 transition-colors duration-200 text-sm" (click)="scrollToTop()">
              {{'nav.upcomingEvents' | translate }}
            </a>
          </li>
          <li>
            <a routerLink="/branches" class="text-cream-100 hover:text-yellow-400 transition-colors duration-200 text-sm" (click)="scrollToTop()">
              {{'nav.branches' | translate }}
            </a>
          </li>
          <li>
            <a routerLink="/collaborate" class="text-cream-100 hover:text-yellow-400 transition-colors duration-200 text-sm" (click)="scrollToTop()">
              {{'nav.collaborate' | translate }}
            </a>
          </li>
          <li>
            <a routerLink="/contact" class="text-cream-100 hover:text-yellow-400 transition-colors duration-200 text-sm" (click)="scrollToTop()">
              {{'nav.contact' | translate }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h3 class="text-xl font-serif font-semibold mb-4 text-yellow-400">{{'footer.getInTouch' | translate }}</h3>
        <p class="text-cream-100 text-sm leading-relaxed mb-2">
          {{'footer.admissionsText' | translate }}
        </p>
        <a 
          routerLink="/contact" 
          class="inline-block mt-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded transition-colors duration-200 text-sm font-medium"
          (click)="scrollToTop()"
        >
          {{'footer.contactUs' | translate }}
        </a>
      </div>
    </div>

    <!-- Copyright -->
    <div class="mt-8 pt-8 border-t border-ocean-800 text-center">
      <p class="text-cream-200 text-sm">
        &copy; {{ currentYear }} {{'footer.title' | translate }} {{'footer.rights' | translate }}
      </p>
      <p class="text-cream-200 text-sm">
        {{'footer.designedBy' | translate }}
      </p>
    </div>
  </div>
</footer>
`
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
