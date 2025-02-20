import { Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { catchError } from 'rxjs'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login-form',
  imports: [MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  private formBuilder = inject(FormBuilder)
  private authService = inject(AuthService)

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.register().pipe(
        catchError(error => {
          throw error
        }),
      ).subscribe({
        next: data => {
          console.log('Login successful:', data)
          this.loginForm.reset()
        },
        error: error => console.log(error),
        complete: () => console.log('complete'),
      })
    }
  }
}
