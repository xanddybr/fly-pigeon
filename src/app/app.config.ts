import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';



export const appConfig: ApplicationConfig = {
  
  providers: [
    provideRouter(routes), importProvidersFrom(HttpClientModule), provideHttpClient(), RouterModule
  ]
};
