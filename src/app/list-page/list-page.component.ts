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

  valueSelect = 0;

  openSelect(){
    if(this.valueSelect == 0){
      this.valueSelect = this.valueSelect + 1;
    }else{
      this.valueSelect = this.valueSelect - 1;
    }
  }

}
