import { Component } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-mostrar-todos',
  templateUrl: './cliente-mostrar-todos.component.html',
  styleUrls: ['./cliente-mostrar-todos.component.css']
})
export class ClienteMostrarTodosComponent {
  listaClientes: Cliente[] = []
}
