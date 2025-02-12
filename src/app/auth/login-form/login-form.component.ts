import { Component, inject, OnDestroy } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { Subject, takeUntil } from 'rxjs'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login-form',
  imports: [MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent implements OnDestroy {
  private formBuilder = inject(FormBuilder)
  private authService = inject(AuthService)
  private destroy$ = new Subject<void>()

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).pipe(
        takeUntil(this.destroy$),
      ).subscribe({
        next: response => {
          console.log('Login successful:', response)
          this.loginForm.reset()
        },
        error: error => {
          console.error('Login failed:', error)
        },
      })
    }
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
