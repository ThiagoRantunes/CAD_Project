import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from '../list-page/list-page.component';

// const routes: Routes = [
//   { path: "listPage", component: ListPageComponent}
// ]

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  sideClass = ["side-bar","side-bar-close"]

  sideComponents = ["side-main", "side-main-close"]

  sizeClass = 1

  abriEfecharSideBar(value: boolean){
    if(value){
      this.sizeClass = this.sizeClass + 1
    }else{
      this.sizeClass = this.sizeClass - 1
    }
  }




}
