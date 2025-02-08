import { Component } from '@angular/core'
import { LoginFormComponent } from '../../login-form/login-form.component'

@Component({
  selector: 'app-auth',
  imports: [LoginFormComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {

}
