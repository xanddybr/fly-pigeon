import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



export const appConfig: ApplicationConfig = {
  
  providers: [
    provideRouter(routes), importProvidersFrom(HttpClientModule), provideHttpClient(), RouterModule, provideAnimationsAsync()
  ]
};
