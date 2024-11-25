import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss'
})
export class ListPageComponent {

  openCloseSelect = ["descricao-select-close", "descricao-select"];
  arrowAnimation = ["arrow-icon", "arrow-icon-close"];
  valueSelect = [0, 0, 0, 0, 0]; // Adicionado para múltiplos selects

  openSelect(index: number) {
    this.valueSelect[index] = this.valueSelect[index] === 0 ? 1 : 0;
  }
}
