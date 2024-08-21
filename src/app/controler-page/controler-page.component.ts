import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-controler-page',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './controler-page.component.html',
  styleUrl: './controler-page.component.scss'
})
export class ControlerPageComponent {

}
