import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Auth } from '../../../core/services/auth';
import { decodeToken } from '../../../core/utils/tokenUtils';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterOutlet, RouterLink, CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';

  private authService = inject(Auth);
  private router = inject(Router);

  handleLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        console.log(decodeToken(res.token))
        this.router.navigate(['/dashboard']); // Ajusta según tu ruta privada
      },
      error: (err) => {
        console.error('Error al iniciar sesión', err);
        alert('Credenciales inválidas o error de servidor');
      }
    });
  }
}
