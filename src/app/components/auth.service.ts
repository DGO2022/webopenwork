import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    // Aquí puedes implementar la lógica de autenticación real.
    // Ejemplo de autenticación básica
    if (email === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      this.router.navigate(['/home']); // Redirige a la página de inicio después de login
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }
}
