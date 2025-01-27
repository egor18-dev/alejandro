import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Product } from '../../../app/models/product';

@Component({
  selector: 'app-categories-skincare',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './categories-skincare.component.html',
  styleUrl: './categories-skincare.component.css'
})
export class CategoriesSkincareComponent {

  collectionCards: Product[] = [
    {
      backgroundImage: '/assets/images/CategoriesSkincare/collection-1.jpg',
      title: 'Summer Collection',
      description: 'Starting at $17.99',
      buttonText: 'Shop Now',
      link: '#'
    },
    {
      backgroundImage: '/assets/images/CategoriesSkincare/collection-2.jpg',
      title: 'Whats New?',
      description: 'Get the glow',
      buttonText: 'Discover Now',
      link: '#'
    },
    {
      backgroundImage: '/assets/images/CategoriesSkincare/collection-3.jpg',
      title: 'Buy 1 Get 1',
      description: 'Starting at $7.99',
      buttonText: 'Discover Now',
      link: '#'
    }
  ];

}
