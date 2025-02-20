import { gql } from 'apollo-angular'

export const REGISTER_USER = gql`
  mutation RegisterUser ($username: String!, $email: String!, $password: String!) {
    registerUser(username: $username, email: $email, password: $password) {
      id
      email
    }
  }
`
