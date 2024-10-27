import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-controler-page',
  standalone: true,
  imports: [NavBarComponent, ModalComponent, CommonModule],
  templateUrl: './controler-page.component.html',
  styleUrl: './controler-page.component.scss'
})
export class ControlerPageComponent {

  isModal: boolean = false;

  pullModal(){
    this.isModal = !this.isModal;
  }

}
