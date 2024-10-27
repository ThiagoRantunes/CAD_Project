import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ControlerPageComponent } from './controler-page/controler-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { ModalComponent } from './modal/modal.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CadastroPageComponent } from './cadastro-page/cadastro-page.component';
import  CalculadoraPageComponent  from './calculadora-page/calculadora-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, ControlerPageComponent, ListPageComponent, ModalComponent, LoginPageComponent, CadastroPageComponent, CalculadoraPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cad_front';


}
