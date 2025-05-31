import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { CdkAccordionModule } from '@angular/cdk/accordion';

export interface PagoMes {
  pago1: number;
  pago2: number;
  pago3: number;
  pago4: number;
}

export interface Datos {
  actividad: string;
  enero: PagoMes;
  febrero: PagoMes;
  marzo: PagoMes;
  abril: PagoMes;
  mayo: PagoMes;
  junio: PagoMes;
  julio: PagoMes;
  agosto: PagoMes;
  septiembre: PagoMes;
  octubre: PagoMes;
  noviembre: PagoMes;
  diciembre: PagoMes;
}

const datos: Datos[] = [
  {actividad: "Pago 1", 
    enero: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 }, 
    febrero: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    marzo: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    abril: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    mayo: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    junio: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    julio: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    agosto: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    septiembre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    octubre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    noviembre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    diciembre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 }
  },
  {actividad: "Pago 2", 
    enero: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 }, 
    febrero: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    marzo: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    abril: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    mayo: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    junio: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    julio: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    agosto: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    septiembre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    octubre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    noviembre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    diciembre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 }
  },
  {actividad: "Pago 3", 
    enero: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 }, 
    febrero: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    marzo: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    abril: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    mayo: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    junio: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    julio: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    agosto: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    septiembre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    octubre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    noviembre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    diciembre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 }
  },
  {actividad: "Pago 4", 
    enero: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 }, 
    febrero: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    marzo: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    abril: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    mayo: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    junio: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    julio: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    agosto: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    septiembre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    octubre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    noviembre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    diciembre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 }
  },
  {actividad: "Pago 5", 
    enero: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 }, 
    febrero: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    marzo: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    abril: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    mayo: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    junio: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    julio: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    agosto: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    septiembre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    octubre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    noviembre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    diciembre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 }
  },
  {actividad: "Pago 6", 
    enero: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 }, 
    febrero: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    marzo: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    abril: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    mayo: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    junio: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    julio: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    agosto: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    septiembre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    octubre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    noviembre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 },
    diciembre: { pago1: 0, pago2: 0, pago3: 0, pago4: 0 }
  }
]

@Component({
  selector: 'app-table',
  imports: [MatTableModule, FormsModule, CdkAccordionModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {
  columnas: string[] = ['actividad', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'noviembre', 'diciembre']
  dataSource = datos;
  
  cambio(){
    console.log(datos)
  }
  
}
