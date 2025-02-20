import { inject } from '@angular/core'
import { InMemoryCache } from '@apollo/client/core'
import { HttpLink } from 'apollo-angular/http'
import { environment } from '../environments/environment'

export const apolloConfig = () => {
  const httpLink = inject(HttpLink)
  const { baseUrl } = environment

  return {
    link: httpLink.create({
      uri: baseUrl,
    }),
    cache: new InMemoryCache(),
  }
}
