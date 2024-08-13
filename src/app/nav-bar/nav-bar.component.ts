import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {


  sideClass = ["side-bar","side-bar-class"]

  sizeClass = 1

  abriEfecharSideBar(value: boolean){
    if(value){
      this.sizeClass = this.sizeClass + 1
    }else{
      this.sizeClass = this.sizeClass - 1
    }
  }


}
