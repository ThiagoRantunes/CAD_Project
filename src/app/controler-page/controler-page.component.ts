import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';
import CalculadoraPageComponent from '../calculadora-page/calculadora-page.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-controler-page',
  standalone: true,
  imports: [RouterOutlet ,NavBarComponent, ModalComponent, CommonModule, CalculadoraPageComponent],
  templateUrl: './controler-page.component.html',
  styleUrl: './controler-page.component.scss'
})


export class ControlerPageComponent {

  isModal: boolean = false;

  showModal(){
    this.isModal = !this.isModal;
  }

  isCalculadora: boolean = false;

  showCalculadora(){
    this.isCalculadora = !this.isCalculadora;
  }

}
