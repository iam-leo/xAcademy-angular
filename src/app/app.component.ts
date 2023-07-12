import { Component } from '@angular/core';
import { Producto } from 'src/interfaces/Producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isListHidden = false;

  listaProductos: Producto[] = [
    {nombre: 'Celular', costo: '$189000'},
    {nombre: 'Televisor 42"', costo: '$152000'},
    {nombre: 'Equipo de Audio', costo: '$95000'},
    {nombre: 'Notebook', costo: '$208000'},
    {nombre: 'Heladera', costo: '$263000'},
    {nombre: 'Lavarropas', costo: '$225000'},
    {nombre: 'Microondas', costo: '$55000'},
    {nombre: 'Cafetera', costo: '$24300'},
    {nombre: 'Horno electrico', costo: '$43800'},
    {nombre: 'Freezer', costo: '$222600'},
  ];

  hideList(): void{
    this.isListHidden = !this.isListHidden;
  }
}
