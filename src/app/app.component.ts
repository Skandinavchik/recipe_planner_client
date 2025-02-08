import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { RouterOutlet } from '@angular/router'
import { NavBarComponent } from './nav-bar/nav-bar.component'

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app works'
}
