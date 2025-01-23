

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; //hace falta para que funcione el icono

@Component({
  selector: 'app-products-women',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './products-women.component.html',
  styleUrls: ['./products-women.component.css']
})
export class ProductsWomenComponent {

}
