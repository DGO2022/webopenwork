import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario, UsuarioDto } from '../entities/usuario.entity';

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  private apiUrl = 'http://localhost:8081/usuario';

  constructor(private http: HttpClient) {}

  registerUser(userData: UsuarioDto): Observable<UsuarioDto> {
    return this.http.post<UsuarioDto>(this.apiUrl + '/crear', userData);
  }
}
