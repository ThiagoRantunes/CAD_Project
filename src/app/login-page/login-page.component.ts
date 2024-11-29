import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';

  // Array de usuários válidos
  validUsers = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'admin@example.com', password: 'admin123' }
  ];

  constructor(private router: Router) {}

  // Atualiza o email conforme o usuário digita
  updateEmail(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.email = inputElement.value;
  }

  // Atualiza a senha conforme o usuário digita
  updatePassword(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.password = inputElement.value;
  }

  // Lógica de login
  login(): void {
    const user = this.validUsers.find(
      u => u.email === this.email && u.password === this.password
    );

    if (user) {
      // Redireciona para a página de controle
      this.router.navigate(['/']);
    } else {
      alert('E-mail ou senha inválidos.');
    }
  }
}
