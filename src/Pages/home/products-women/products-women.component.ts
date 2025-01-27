

import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { IonicModule } from '@ionic/angular'; //hace falta para que funcione el icono
import { Category } from '../../../app/models/category';

@Component({
  selector: 'app-products-women',
  standalone: true,
  imports: [CommonModule, IonicModule, NgFor],
  templateUrl: './products-women.component.html',
  styleUrls: ['./products-women.component.css']
})
export class ProductsWomenComponent {
  menuCategories: Category[] = [
    { title: 'Footwear', icon: '/assets/images/ProductsWomen/icons/shoes.svg', alt: 'footwear' },
    { title: 'Jewelry', icon: '/assets/images/ProductsWomen/icons/jewelry.svg', alt: 'jewelry' },
    { title: 'Perfume', icon: '/assets/images/ProductsWomen/icons/perfume.svg', alt: 'perfume' },
    { title: 'Cosmetics', icon: '/assets/images/ProductsWomen/icons/cosmetics.svg', alt: 'cosmetics' },
    { title: 'Glasses', icon: '/assets/images/ProductsWomen/icons/glasses.svg', alt: 'glasses' },
    { title: 'Bags', icon: '/assets/images/ProductsWomen/icons/bag.svg', alt: 'bags' },
  ];
}
