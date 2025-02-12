import { provideHttpClient } from '@angular/common/http'
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideRouter } from '@angular/router'
import { provideApollo } from 'apollo-angular'
import { disableRipples } from '../configs/global-ripples.config'
import { apolloConfig } from '../configs/graphql.config'
import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideAnimationsAsync(),
    disableRipples(),
    provideHttpClient(),
    provideApollo(apolloConfig),
  ],
}
