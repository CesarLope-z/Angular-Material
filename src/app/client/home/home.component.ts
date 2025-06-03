import { Component } from '@angular/core';
import { Form1Component } from '../../toggle1/form1/form1.component';
import { HeaderComponent } from '../../share/header/header.component';
import { FooterComponent } from '../../share/footer/footer.component';
import { TableComponent } from "../../toggle1/table/table.component";
import {MatTabsModule} from '@angular/material/tabs';
import { ProductosComponent } from "../../toggle1/productos/productos.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, Form1Component, FooterComponent, TableComponent, MatTabsModule, ProductosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
