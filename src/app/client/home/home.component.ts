import { Component } from '@angular/core';
import { Form1Component } from '../../toggle1/form1/form1.component';
import { HeaderComponent } from '../../share/header/header.component';
import { FooterComponent } from '../../share/footer/footer.component';
import { MatButtonToggleModule, MatButtonToggle } from '@angular/material/button-toggle'


@Component({
  selector: 'app-home',
  imports: [ HeaderComponent, Form1Component, FooterComponent, MatButtonToggleModule, MatButtonToggle ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
