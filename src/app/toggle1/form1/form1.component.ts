import { CdkAccordionModule } from '@angular/cdk/accordion';
import { Component } from '@angular/core';


@Component({
  selector: 'app-form1',
  imports: [CdkAccordionModule],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component {
  items = ['Item 1', 'Item 2', 'Item 3'];
  itemVisible=true;
  seCerro(dato: string){
    alert(`se cerro el ${dato}`)
  }
  seDestruyo(){
    this.itemVisible=false;
    // alert('destroy')
  }
}
