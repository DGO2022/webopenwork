
export interface Usuario {
  id_usuario: number;
  nombre?: string;
  apellido?: string;
  fechanaci?: Date;
  dni?: string;
  direccion?: string;
  telefono?: string;
  correo: string;
  contrasena: string;
  CV?: Blob;
}

export interface UsuarioDto {
  nombre: string;
  apellido: string;
  fechanaci?: Date;
  dni?: string;
  direccion?: string;
  telefono?: string;
  correo: string;
  contrasena: string;
  CV?: Blob;
}


