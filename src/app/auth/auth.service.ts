import { inject, Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apollo = inject(Apollo)

  register() {
    const REGISTER_USER = gql`
      mutation UserRegister {
	      registerUser(username: "ArtemTest", email: "a@a.com", password: "AAAAAAAaaaaaaa22222@") {
          id,
          userName
        }
      }
    `

    return this.apollo
      .mutate<{ registerUser: { id: string, username: string }}>({
        mutation: REGISTER_USER,
      })
  }
}
