import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  template: `<!-- Page Header -->
<section class="bg-gradient-to-br from-ocean-50 via-cream-50 to-yellow-50 py-16 md:py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-serif font-bold text-ocean-900 mb-4">
        {{ 'contact.title' | translate }}
      </h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        {{ 'contact.subtitle' | translate }}
      </p>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section class="py-16 md:py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      <!-- Contact Information -->
      <div>
        <h2 class="text-3xl font-serif font-bold text-ocean-900 mb-6">
          {{ 'contact.subtitle' | translate }}
        </h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-8">
          {{ 'contact.description' | translate }}
        </p>

        <!-- Contact Details -->
        <div class="space-y-6 mb-8">
          <div class="flex items-start">
            <div class="flex-shrink-0 w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-ocean-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-ocean-900 mb-1">Phone</h3>
              <p class="text-gray-600">Contact us for phone details: 9940489578</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="flex-shrink-0 w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-ocean-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-ocean-900 mb-1">WhatsApp</h3>
              <p class="text-gray-600">Message us for quick responses</p>
            </div>
          </div>
        </div>

        <!-- WhatsApp CTA -->
        <div class="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <div class="flex items-center mb-3">
            <svg class="w-8 h-8 text-green-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <h3 class="text-xl font-semibold text-green-800">Connect on WhatsApp</h3>
          </div>
          <p class="text-gray-700 mb-4">
            For quick inquiries and instant responses, reach out to us on WhatsApp.
          </p>
          <button
            type="button"
            (click)="openWhatsApp()"
            class="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Chat with Us
          </button>


        </div>
      </div>

      <!-- Contact Form -->
      <div class="bg-cream-50 rounded-lg p-8 md:p-10">
        <h2 class="text-3xl font-serif font-bold text-ocean-900 mb-6">
          Send us a Message
        </h2>

        @if (submitted()) {
          <div class="bg-green-100 border-2 border-green-400 text-green-800 px-6 py-4 rounded-lg mb-6">
            <p class="font-semibold">Thank you for your message!</p>
            <p class="text-sm mt-1">We'll get back to you soon.</p>
          </div>
        }

        <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
          <div class="space-y-5">
            <!-- Name -->
            <div>
              <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                [(ngModel)]="formData().name"
                required
                #nameField="ngModel"
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-ocean-500 focus:outline-none transition-colors duration-200"
                [class.border-red-500]="nameField.invalid && nameField.touched"
                placeholder="Enter your full name"
              />
              @if (nameField.invalid && nameField.touched) {
                <p class="text-red-600 text-sm mt-1">
                  <span class="font-semibold">⚠️ Name is required.</span> Please enter your full name.
                </p>
              }
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                [(ngModel)]="formData().email"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                #emailField="ngModel"
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-ocean-500 focus:outline-none transition-colors duration-200"
                [class.border-red-500]="emailField.invalid && emailField.touched"
                placeholder="your.email@example.com"
                title="Please enter a valid email address with @"
              />
              @if (emailField.invalid && emailField.touched) {
                <p class="text-red-600 text-sm mt-1">
                  @if (emailField.errors?.['required']) {
                    <span class="font-semibold">⚠️ Email is required.</span> Please enter your email address.
                  }
                  @if (emailField.errors?.['pattern']) {
                    <span class="font-semibold">⚠️ Invalid email format.</span> Please enter a valid email with @ symbol (e.g., name@example.com).
                  }
                </p>
              }
            </div>

            <!-- Phone -->
            <div>
              <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                [(ngModel)]="formData().phone"
                pattern="[0-9]{10}"
                maxlength="10"
                #phoneField="ngModel"
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-ocean-500 focus:outline-none transition-colors duration-200"
                [class.border-red-500]="phoneField.invalid && phoneField.touched"
                placeholder="9876543210"
                title="Please enter exactly 10 digits"
                (keypress)="onlyNumbers($event)"
              />
              @if (phoneField.invalid && phoneField.touched) {
                <p class="text-red-600 text-sm mt-1">
                  <span class="font-semibold">⚠️ Invalid phone number.</span> Please enter exactly 10 digits (numbers only).
                </p>
              }
            </div>

            <!-- Course Interest -->
            <div>
              <label for="course" class="block text-sm font-semibold text-gray-700 mb-2">
                Course of Interest
              </label>
              <select
  id="course"
  name="course"
  [(ngModel)]="formData().course"
  class="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg focus:border-ocean-500 focus:outline-none transition-colors duration-200"
>

                <option value="">Select a course</option>
                <option value="bharatanatyam">Bharatanatyam</option>
                <option value="veena">Veena</option>
                <option value="slokam">Slokam</option>
                <option value="keyboard">Keyboard</option>
                <option value="multiple">Multiple Courses</option>
              </select>
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
             <textarea
                id="message"
                name="message"
                [(ngModel)]="formData().message"
                required
                rows="5"
                class="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-400 border-2 border-gray-300 rounded-lg focus:border-ocean-500 focus:outline-none transition-colors duration-200 resize-none"
                placeholder="Tell us about your interest in our courses..."
            ></textarea>

            </div>

            <!-- Submit Button -->
           <button
            type="submit"
            [disabled]="!contactForm.form.valid"
            class="w-full px-6 py-4 bg-ocean-700 hover:bg-ocean-800 disabled:bg-gray-400 text-white font-semibold rounded-lg"
          >
          Send Message
          </button>


            <p class="text-sm text-gray-600 text-center">
              * Required fields
            </p>
          </div>
        </form>
      </div>

    </div>
  </div>
</section>
`,
})
export class ContactComponent implements OnInit {

  protected readonly formData = signal({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  protected readonly submitted = signal(false);

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Contact Us - Shreem Natyalaya');
    this.meta.updateTag({
      name: 'description',
      content:
        'Get in touch with Shreem Natyalaya for admissions, inquiries, and information about our classical arts courses.'
    });
  }

  /* =========================
     FORM SUBMIT (FULL MESSAGE)
     ========================= */
  onSubmit(): void {
    const data = this.formData();

    const whatsappMessage = `
      New Enquiry – Shreem Natyalaya

      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone || 'N/A'}
      Course: ${data.course || 'Not specified'}

      Message:
      ${data.message}
          `.trim();

          this.openWhatsAppWithMessage(whatsappMessage);

          this.submitted.set(true);

          setTimeout(() => {
            this.formData.set({
              name: '',
              email: '',
              phone: '',
              course: '',
              message: ''
            });
            this.submitted.set(false);
          }, 3000);
        }

  /* =========================
     CTA BUTTON (SIMPLE CHAT)
     ========================= */
  openWhatsApp(): void {
    const message = 'Hello Shreem Natyalaya, I would like to know more about your courses.';
    this.openWhatsAppWithMessage(message);
  }

  /* =========================
     PHONE NUMBER VALIDATION
     ========================= */
  onlyNumbers(event: KeyboardEvent): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    // Allow only numbers (0-9)
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  /* =========================
     CORE WHATSAPP HANDLER
     ========================= */
  openWhatsAppWithMessage(messageText: string): void {
    const phone = '919940489578';
    const message = encodeURIComponent(messageText);

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const url = isMobile
      ? `whatsapp://send?phone=${phone}&text=${message}`
      : `https://web.whatsapp.com/send?phone=${phone}&text=${message}`;

    window.open(url, '_blank');
  }
}
