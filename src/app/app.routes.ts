import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: "pinto",
        loadComponent: ()=> import("./calculadora-page/calculadora-page.component")
    }
];
