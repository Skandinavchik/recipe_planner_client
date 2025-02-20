import { inject, Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { REGISTER_USER } from '../../graphql/mutations'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apollo = inject(Apollo)

  register(data: Partial<{ username: string | null; email: string | null; password: string | null; }>) {
    const { username, email, password } = data
    return this.apollo.mutate({
      mutation: REGISTER_USER,
      variables: { username, email, password },
    })
  }
}
