import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-calculadora-page',
  standalone: true,
  imports: [NavBarComponent, FormsModule, CommonModule],
  templateUrl: './calculadora-page.component.html',
  styleUrls: ['./calculadora-page.component.scss']
})
export default class CalculadoraPageComponent {
  crimes = [
    { lei: 'Lei Art. 123', agravantes: 'Detalhes do agravante 1' },
    { lei: 'Lei Art. 456', agravantes: 'Detalhes do agravante 2' },
    { lei: 'Lei Art. 789', agravantes: 'Detalhes do agravante 3' }
  ];

  openCloseSelect: boolean[] = this.crimes.map(() => false);

  toggleSelect(index: number): void {
    this.openCloseSelect[index] = !this.openCloseSelect[index];
  }
}
