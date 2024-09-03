import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-page',
  standalone: true,
  imports: [],
  templateUrl: './calculadora-page.component.html',
  styleUrl: './calculadora-page.component.scss'
})
export class CalculadoraPageComponent {

  openCloseSelect = ["descricao-select-close", "descricao-select"];

  arrowAnimation = ["arrow-icon", "arrow-icon-close"];

  valueSelect = 0;

  openSelect(){
    if(this.valueSelect == 0){
      this.valueSelect = this.valueSelect + 1;
    }else{
      this.valueSelect = this.valueSelect - 1;
    }
  }

}
