import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { PortraitWomenComponent } from './portrait-women/portrait-women.component';
import { CategoriesWomenComponent } from "./categories-women/categories-women.component";
import { ProductsWomenComponent } from './products-women/products-women.component';
import { PortraitShoesComponent } from "./portrait-shoes/portrait-shoes.component";
import { InstaPostShoesComponent } from "./insta-post-shoes/insta-post-shoes.component";
import { ProductsShoesComponent } from "./products-shoes/products-shoes.component";
import { CategoriesMiddleComponent } from "./categories-middle/categories-middle.component";
import { CategoriesSkincareComponent } from "./categories-skincare/categories-skincare.component";
import { ProductsSkincareComponent } from "./products-skincare/products-skincare.component";
import { OfferSkincareComponent } from "./offer-skincare/offer-skincare.component";
import { CategoriesEndComponent } from "./categories-end/categories-end.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, PortraitWomenComponent, CategoriesWomenComponent, ProductsWomenComponent, PortraitShoesComponent, InstaPostShoesComponent, ProductsShoesComponent, CategoriesMiddleComponent, CategoriesSkincareComponent, ProductsSkincareComponent, OfferSkincareComponent, CategoriesEndComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
