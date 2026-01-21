import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about-guru',
    loadComponent: () => import('./pages/about-guru.component').then(m => m.AboutGuruComponent)
  },
  {
    path: 'guru-parampara',
    loadComponent: () => import('./pages/guru-parampara.component').then(m => m.GuruParamparaComponent)
  },
  {
    path: 'courses',
    loadComponent: () => import('./pages/courses.component').then(m => m.CoursesComponent)
  },
  {
    path: 'courses/:id',
    loadComponent: () => import('./pages/course-detail.component').then(m => m.CourseDetailComponent)
  },
  {
    path: 'upcoming-events',
    loadComponent: () => import('./pages/upcoming-events.component').then(m => m.UpcomingEventsComponent)
  },
  {
    path: 'branches',
    loadComponent: () => import('./pages/branches.component').then(m => m.BranchesComponent)
  },
  {
    path: 'collaborate',
    loadComponent: () => import('./pages/collaborate.component').then(m => m.CollaborateComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
