import { Usuario } from './usuario.entity';

export interface Trabajo {
  id_trabajo: 'Number';
  detalle: 'String';
  usuario: Usuario;
}
