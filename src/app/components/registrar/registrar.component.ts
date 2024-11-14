import { UsuarioDto} from './../../entities/usuario.entity';
import { Component } from '@angular/core';
import { RegistroService } from '../../services/registro.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css',
})
export class RegistrarComponent {
  // Objeto para almacenar los datos del formulario
  usuario: UsuarioDto = {
    nombre: '',
    apellido: '',
    fechanaci: new Date(),
    dni: '',
    direccion: '',
    telefono: '',
    correo: '',
    contrasena: '',
    CV: new Blob(),
  };

  constructor(private registroService: RegistroService) {}

  // Método que maneja el envío del formulario
  crear() {
    // Enviamos los datos del usuario al backend
    this.registroService.registerUser(this.usuario).subscribe(
      (response) => {
        console.log('Usuario registrado con éxito', response);
        // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
      },
      (error) => {
        console.error('Error al registrar usuario', error);
      }
    );
  }

  // Método para manejar la selección del archivo de perfil
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.usuario.CV = file;
    }
  }
}
