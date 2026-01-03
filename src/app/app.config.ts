import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'nathan-reis',
        appId: '1:956821033530:web:1db413f60063cf2305db03',
        storageBucket: 'nathan-reis.firebasestorage.app',
        apiKey: 'AIzaSyC-wEqrr3vz7DraQCuQB6g_8-FjXF4P-XY',
        authDomain: 'nathan-reis.firebaseapp.com',
        messagingSenderId: '956821033530',
        measurementId: 'G-ED2834Y40V',
      })
    ),

    provideAuth(() => getAuth()),

    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,

    provideFirestore(() => getFirestore()),
  ]
};
