import { Routes, RouterModule } from '@angular/router';
import { ControlerPageComponent } from './controler-page/controler-page.component';
import { CadastroPageComponent } from './cadastro-page/cadastro-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ListPageComponent } from './list-page/list-page.component';

export const routes: Routes = [
    {path: "", component: ControlerPageComponent},
    {path: "list", component: ListPageComponent},
    {path: "login", component: LoginPageComponent},
    {path: "cadastro", component: CadastroPageComponent}
];