import { Component, Input } from '@angular/core';
import { Producto } from 'src/interfaces/Producto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  @Input() listaProductos: Producto[] = [];
}
