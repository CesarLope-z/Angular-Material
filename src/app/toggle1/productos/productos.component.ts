import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { CdkAccordionModule } from '@angular/cdk/accordion';

export interface Productos {
  producto: string;
  cantidad: number;
  precioUnitario: number;
  precioTotal: number;
}
const productos: Productos[] = [
  {
    producto: "Producto 1",
    cantidad: 0,
    precioUnitario: 1,
    precioTotal: 0
  },
  {
    producto: "Producto 2",
    cantidad: 10,
    precioUnitario: 1,
    precioTotal: 0
  },
  {
    producto: "Producto 3",
    cantidad: 1,
    precioUnitario: 1,
    precioTotal: 0
  }
]

@Component({
  selector: 'app-productos',
  imports: [MatTableModule, FormsModule, CdkAccordionModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  columnas: string[] = ['producto', 'cantidad', 'precioUnitario', 'precioTotal']
  dataSource = productos;
  
  sumarTotal(){
    let total = 0;
    productos.forEach(element => {
      console.log(element)
      total = total + element.precioTotal
    });
    

  }


}
