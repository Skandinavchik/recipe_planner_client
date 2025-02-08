import { Routes } from '@angular/router'
import { LoginFormComponent } from './login-form/login-form.component'
import { HomeComponent } from './pages/home/home.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginFormComponent },
]
