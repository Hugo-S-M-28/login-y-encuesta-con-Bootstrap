import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
  
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';
  showSuccessMessage: boolean = false; // Asumiendo que mostrarás un mensaje de éxito

  constructor(private router: Router) {}

  login() {
    if (this.usuario === 'estudiante' && this.contrasena === 'estudiante') {
      // Simulando éxito al ingresar
      this.showSuccessMessage = true;
      // Redirige al componente 'main'
      this.router.navigate(['main']);
    } else {
      alert('Usuario y/o contraseña incorrectos');
    }
  }
}
 