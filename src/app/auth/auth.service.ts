import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient)

  private baseUrl = ''
  private url = `${this.baseUrl}/api/Auth/login`

  login(credentials: Partial<{ username: string | null, password: string | null }>) {
    return this.http.post(this.url, credentials)
  }
}
