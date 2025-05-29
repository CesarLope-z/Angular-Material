import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

export interface datos {
  actividad: string;
  enero: number;
  febrero: number;
  marzo: number;
  abril: number;
  mayo: number;
  junio: number;
  julio: number;
  agosto: number;
  septiembre: number;
  octubre: number;
  noviembre: number;
  diciembre: number;
}

const Datos: datos[] = [
  {actividad: "Pago 1", 
    enero: 0, 
    febrero:0, 
    marzo:0, 
    abril:0,
    mayo: 0,
    junio: 0,
    julio: 0,
    agosto: 0,
    septiembre: 0,
    octubre: 0,
    noviembre: 0,
    diciembre: 0
  },
  {actividad: "Pago 2", 
    enero: 0, 
    febrero:0, 
    marzo:0, 
    abril:0,
    mayo: 0,
    junio: 0,
    julio: 0,
    agosto: 0,
    septiembre: 0,
    octubre: 0,
    noviembre: 0,
    diciembre: 0
  },
  {actividad: "Pago 3", 
    enero: 0, 
    febrero:0, 
    marzo:0, 
    abril:0,
    mayo: 0,
    junio: 0,
    julio: 0,
    agosto: 0,
    septiembre: 0,
    octubre: 0,
    noviembre: 0,
    diciembre: 0
  },
  {actividad: "Pago 4", 
    enero: 0, 
    febrero:0, 
    marzo:0, 
    abril:0,
    mayo: 0,
    junio: 0,
    julio: 0,
    agosto: 0,
    septiembre: 0,
    octubre: 0,
    noviembre: 0,
    diciembre: 0
  },
  {actividad: "Pago 5", 
    enero: 0, 
    febrero:0, 
    marzo:0, 
    abril:0,
    mayo: 0,
    junio: 0,
    julio: 0,
    agosto: 0,
    septiembre: 0,
    octubre: 0,
    noviembre: 0,
    diciembre: 0
  },
  {actividad: "Pago 6", 
    enero: 0, 
    febrero:0, 
    marzo:0, 
    abril:0,
    mayo: 0,
    junio: 0,
    julio: 0,
    agosto: 0,
    septiembre: 0,
    octubre: 0,
    noviembre: 0,
    diciembre: 0
  }
]

@Component({
  selector: 'app-table',
  imports: [MatTableModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {
  columnas: string[] = ['actividad', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'noviembre', 'diciembre']
  dataSource = Datos;
  
  cambio(){
    console.log(Datos)
  }
  
}
