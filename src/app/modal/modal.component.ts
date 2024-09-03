import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  isLeiScreen: boolean = true;
  isSecoesArtigos: boolean = false;
  isAvancados: boolean = false;

  whatScreen(isPage1: boolean, isPage2: boolean, isPage3: boolean){
    this.isLeiScreen = isPage1;
    this.isSecoesArtigos = isPage2;
    this.isAvancados = isPage3;
  }

}
