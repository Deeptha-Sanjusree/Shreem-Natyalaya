# Shreem Natyalaya - Design Documentation

## 🎨 Design Overview

A professional, elegant website for a classical Indian dance & music academy featuring:
- Full-viewport hero section with automatic background carousel
- Clean, modern design with ocean blue and yellow color scheme
- Fully responsive and mobile-first approach
- Smooth animations and transitions
- SEO-optimized structure

---

## 🎯 Key Features Implemented

### 1. **Full-Viewport Hero Section**
- **Height**: 100vh (full screen height)
- **Content**: Centered title, tagline, description, and prominent "Enroll Now" button
- **Background**: Automatic carousel with 4 classical arts images
- **Transition**: 2-second smooth fade between images every 5 seconds
- **Overlay**: Dark gradient (40% opacity) for text readability
- **Animation**: Fade-in-up effect on content load
- **Scroll Indicator**: Animated down arrow at bottom

### 2. **Automatic Background Carousel**
- **Images**: 4 high-quality Unsplash images (classical dance, instruments, performances)
- **Interval**: Changes every 5 seconds
- **Transition**: 2000ms smooth opacity fade
- **Overlay**: `rgba(0, 0, 0, 0.4)` for consistent text contrast
- **No Controls**: Auto-play only, non-distracting
- **Performance**: Preloaded images, smooth GPU-accelerated transitions

### 3. **Color Scheme**
```css
Primary (Ocean Blue):
- ocean-50 to ocean-950 (light to dark)
- Main: ocean-600 (#0284c7), ocean-700 (#0369a1)

Secondary (Yellow/Gold):
- yellow-50 to yellow-950
- Accent: yellow-400 (#facc15), yellow-600 (#ca8a04)

Neutral (Cream):
- cream-50 to cream-950
- Background: cream-50 (#fdfcfa)
```

### 4. **Typography**
- **Headings**: Lora (serif) - elegant, classical
- **Body**: Inter (sans-serif) - clean, readable
- **Sizes**: Responsive scaling (mobile → desktop)

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Hero Section Responsiveness
```html
<!-- Title -->
text-5xl md:text-6xl lg:text-7xl

<!-- Tagline -->
text-2xl md:text-3xl

<!-- Description -->
text-lg md:text-xl

<!-- Button -->
px-10 py-4 (consistent across devices)
```

---

## 🎬 Animations & Transitions

### 1. **Hero Content Animation**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```
- Duration: 1 second
- Easing: ease-out
- Applied to entire hero content div

### 2. **Carousel Transitions**
```css
.transition-opacity {
  transition-property: opacity;
}
.duration-2000 {
  transition-duration: 2000ms;
}
```
- Smooth 2-second fade between images
- GPU-accelerated for performance

### 3. **Scroll Indicator**
```css
@keyframes bounce {
  0%, 100% { transform: translateY(0) translateX(-50%); }
  50% { transform: translateY(-10px) translateX(-50%); }
}
```
- 3-second infinite bounce
- Subtle movement to indicate scrollability

---

## 🔧 Technical Implementation

### Component Structure
```
src/app/pages/home/
├── home.component.ts       # Logic & carousel control
├── home.component.html     # Template
└── home.component.css      # Component-specific styles
```

### Carousel Logic (TypeScript)
```typescript
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = signal(0);
  private carouselInterval: any;
  
  heroImages = [
    'https://images.unsplash.com/photo-1604780497038-150a4c3ca870...',
    'https://images.unsplash.com/photo-1583224964980-2b9e6c0e8b8c...',
    'https://images.unsplash.com/photo-1511192336575-5a79af67a629...',
    'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e...'
  ];

  ngOnInit(): void {
    // Auto-play carousel - change every 5 seconds
    this.carouselInterval = setInterval(() => {
      this.currentSlide.update(slide => 
        (slide + 1) % this.heroImages.length
      );
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }
}
```

### Carousel Template (HTML)
```html
<div class="absolute inset-0 z-0">
  @for (image of heroImages; track image; let i = $index) {
    <div 
      class="absolute inset-0 bg-cover bg-center 
             transition-opacity duration-2000 ease-in-out"
      [class.opacity-100]="currentSlide() === i"
      [class.opacity-0]="currentSlide() !== i"
      [style.background-image]="
        'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
         url(' + image + ')'"
    ></div>
  }
</div>
```

---

## 📊 Page Sections

### 1. **Hero Section** (Full Viewport)
- Background carousel
- School name & tagline
- Description
- "Enroll Now" CTA button
- Scroll indicator

### 2. **Introduction Section**
- Mission statement
- Guru-shishya parampara explanation
- White background for contrast

### 3. **Programs Section**
- 4 course cards (Bharatanatyam, Veena, Slokam, Keyboard)
- Icons, descriptions, "Learn More" links
- Cream background

### 4. **Statistics Section**
- 4 key metrics (Students, Years, Courses, Performances)
- Dark ocean background with yellow text
- High contrast

### 5. **Testimonials Section**
- Parent reviews carousel
- Manual navigation arrows
- Star ratings
- White background

### 6. **FAQ Section**
- Collapsible questions
- Smooth expand/collapse
- Cream background

### 7. **Call to Action**
- Final enrollment push
- Two buttons: "Enroll Now" & "View Courses"
- Dark ocean background

---

## 🎨 Design Principles

### 1. **Elegance**
- Serif fonts for headings (classical feel)
- Ample white space
- Subtle animations
- Professional color palette

### 2. **Clarity**
- High contrast text
- Clear hierarchy
- Readable font sizes
- Obvious CTAs

### 3. **Performance**
- Optimized images (Unsplash CDN)
- CSS animations (GPU-accelerated)
- Lazy loading for sections
- Minimal JavaScript

### 4. **Accessibility**
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader friendly

---

## 🔄 How to Update Content

### Change Carousel Images
Edit `home.component.ts`:
```typescript
heroImages = [
  'YOUR_IMAGE_URL_1',
  'YOUR_IMAGE_URL_2',
  'YOUR_IMAGE_URL_3',
  'YOUR_IMAGE_URL_4'
];
```

### Adjust Carousel Speed
Edit `home.component.ts`:
```typescript
// Change 5000 to desired milliseconds
this.carouselInterval = setInterval(() => {
  this.currentSlide.update(slide => 
    (slide + 1) % this.heroImages.length
  );
}, 5000); // ← Change this value
```

### Modify Overlay Opacity
Edit `home.component.html`:
```html
<!-- Change 0.4 to desired opacity (0.0 - 1.0) -->
linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))
```

### Update Hero Text
Edit `home.component.html`:
```html
<h1>Your School Name</h1>
<p>Your tagline</p>
<p>Your description</p>
```

### Change Button Link
Edit `home.component.html`:
```html
<a routerLink="/your-page">Button Text</a>
```

---

## 🚀 Performance Optimizations

### 1. **Image Loading**
- Use Unsplash CDN with size parameters (`w=1920&h=1080`)
- Add `&q=80` for quality optimization
- Images load in background (no blocking)

### 2. **CSS Animations**
- Use `transform` and `opacity` (GPU-accelerated)
- Avoid layout-triggering properties
- `will-change` for smooth transitions

### 3. **Angular Signals**
- Reactive state management
- Efficient change detection
- Minimal re-renders

### 4. **Cleanup**
- `ngOnDestroy` clears interval
- Prevents memory leaks
- Proper lifecycle management

---

## 📱 Mobile Optimization

### Hero Section
- Maintains full viewport height on mobile
- Text scales down appropriately
- Button remains prominent
- Touch-friendly spacing

### Images
- Responsive background-size: cover
- Proper aspect ratios
- Fast loading on mobile networks

### Navigation
- Sticky header
- Mobile hamburger menu
- Touch-optimized tap targets

---

## 🎯 SEO Optimization

### Meta Tags
```typescript
this.title.setTitle('Shreem Natyalaya - Classical Dance & Music Academy');
this.meta.updateTag({ 
  name: 'description', 
  content: 'Premier classical Indian arts academy offering Bharatanatyam, Veena, Slokam, and Keyboard. Authentic guru-shishya tradition with expert instruction.' 
});
```

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Section tags for content organization
- Alt text for images (when applicable)
- Descriptive link text

### Performance
- Fast loading times
- Smooth animations
- Responsive design
- Clean code structure

---

## 🎨 Color Usage Guide

### Primary Actions
- `bg-ocean-600` for main buttons
- `hover:bg-ocean-700` for hover states

### Secondary Actions
- `bg-yellow-600` for accent buttons
- `border-white` for outline buttons

### Backgrounds
- `bg-white` for content sections
- `bg-cream-50` for alternating sections
- `bg-ocean-900` for dark sections

### Text
- `text-ocean-900` for headings
- `text-gray-700` for body text
- `text-white` on dark backgrounds

---

## 🔮 Future Enhancements

### Potential Additions
1. **Video Background**: Replace images with subtle video
2. **Parallax Effect**: Add depth to scrolling
3. **Loading Animation**: Skeleton screens or spinners
4. **Image Preloading**: Faster initial carousel
5. **Lazy Loading**: Defer below-fold content
6. **Analytics**: Track user interactions
7. **A/B Testing**: Test different CTAs
8. **Accessibility**: WCAG 2.1 AA compliance

---

## 📞 Support & Maintenance

### Regular Updates
- Update carousel images seasonally
- Refresh testimonials monthly
- Update statistics quarterly
- Review FAQ section regularly

### Testing Checklist
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on iOS and Android devices
- [ ] Verify carousel auto-play
- [ ] Check button functionality
- [ ] Validate responsive breakpoints
- [ ] Test with slow network (3G)
- [ ] Verify accessibility with screen reader

---

## 📄 License & Credits

### Images
- Unsplash (Free to use)
- Replace with your own professional photos

### Fonts
- Google Fonts (Open source)
- Lora & Inter

### Framework
- Angular 21 (Standalone components)
- Tailwind CSS 3
- TypeScript

---

**Last Updated**: December 22, 2025
**Version**: 1.0.0
**Author**: Shreem Natyalaya Development Team
