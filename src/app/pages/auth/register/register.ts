import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../core/services/auth';
import { decodeToken } from '../../../core/utils/tokenUtils';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  username = ''
  email = ''
  password = ''
  confirmPassword = ''
  terms = false

  private authService = inject(Auth)
  private router = inject(Router)

  handleRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }
    // if (!this.terms) {
    //   alert('Debes aceptar los términos y condiciones')
    //   return
    // }
    this.authService.register(this.username, this.email, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token)
        console.log(decodeToken(res.token))
        this.router.navigate(['/dashboard'])
      },
      error: (err) => {
        console.error('Error al registrar', err)
        alert('Error al crear la cuenta')
      }
    })
  }
}
