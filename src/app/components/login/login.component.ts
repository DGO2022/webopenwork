import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLogin: boolean = true; // Controla la vista: true para Login, false para Sign Up

  // Variables para almacenar datos de los formularios
  email: string = '';
  password: string = '';
  dob: string = '';
  location: string = '';
  firstName: string = '';
  lastName: string = '';

  // Inyecta el servicio Router en el constructor
  constructor(private router: Router) {}

  toggleView(isLogin: boolean) {
    this.isLogin = isLogin;
  }

  onLoginSubmit() {
    // Lógica para manejar el inicio de sesión
    console.log('Iniciar sesión con:', this.email, this.password);

    // Redirige a la ruta /home
    this.router.navigate(['/home']);
  }

  onSignUpSubmit() {
    // Lógica para manejar el registro
    console.log('Registro con:', {
      dob: this.dob,
      location: this.location,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    });

    // Simula un registro exitoso y redirige a la vista de Login
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    this.toggleView(true); // Cambia a la vista de Login
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    console.log('Archivo seleccionado:', file);
    // Lógica adicional para manejar el archivo (por ejemplo, CV o foto de perfil)
  }
}
