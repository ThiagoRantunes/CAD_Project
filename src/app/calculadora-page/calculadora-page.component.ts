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
    { lei: 'Lei Art. 123 (CiberBullyng)', agravantes: 'Detalhes do agravante 1' },
    { lei: 'Lei Art. 123 (Invasão de Sistema)', agravantes: 'Detalhes do agravante 2' },
    { lei: 'Lei Art. 123 (Roubo de Identidade)', agravantes: 'Detalhes do agravante 3' },
    { lei: 'Lei Art. 123 (Disseminação de Virus)', agravantes: 'Detalhes do agravante 4'},
    { lei: 'Lei Art. 123 (Phishing)', agravantes: 'Detalher do agravante 5' }
  ];

  openCloseSelect: boolean[] = this.crimes.map(() => false);

  toggleSelect(index: number): void {
    this.openCloseSelect[index] = !this.openCloseSelect[index];
  }

  selectCrime: number = 0;

  calcularCrime: number[] = [];

  historicoCalculadora: number[] = [];

  calcular(){
    this.calcularCrime.push(this.selectCrime);
    if(this.calcularCrime[1] != null){
      this.historicoCalculadora.push(this.calcularCrime[0] + this.calcularCrime[1])
      this.calcularCrime.pop
      this.calcularCrime.pop
    }
    if(this.historicoCalculadora[0] != null){
      this.historicoCalculadora.push(this.historicoCalculadora[0] + this.calcularCrime[0])
      alert(this.historicoCalculadora[0])
    }

  }
}
