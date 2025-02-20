import { Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
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
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  onSubmit() {
    if (this.loginForm.invalid) return

    this.authService.register(this.loginForm.value).subscribe({
      next: data => {
        console.log('Login successful:', data)
        this.loginForm.reset()
      },
      error: error => console.log(error),
      complete: () => console.log('complete'),
    })
  }
}
