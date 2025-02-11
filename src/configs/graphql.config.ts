import { inject } from '@angular/core'
import { InMemoryCache } from '@apollo/client/core'
import { HttpLink } from 'apollo-angular/http'
import { environment } from '../environments/environment'

export const apolloConfig = () => {
  const httpLink = inject(HttpLink)
  const { apiUrl } = environment

  return {
    link: httpLink.create({
      uri: apiUrl,
    }),
    cache: new InMemoryCache(),
  }
}
