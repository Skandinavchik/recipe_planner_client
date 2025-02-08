import { Routes } from '@angular/router'
import { LoginFormComponent } from './login-form/login-form.component'
import { HomePageComponent } from './pages/home-page/home-page.component'

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginFormComponent },
]
