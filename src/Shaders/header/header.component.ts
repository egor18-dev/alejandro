import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuItem, CartItem, LocationInfo } from './header.types';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {
  categories: string[] = [
    'Todos los departamentos', '• Artes y manualidades', '• Automotor', '• Bebé', '• Libros', '• Electrónica'
  ];
  
  selectedCategory: string = 'Todos los departamentos';
  searchQuery: string = '';
  cartItems: CartItem[] = [];
  location: LocationInfo = {
    city: 'Actualizar',
    postalCode: 'ubicación'
  };
  
  departments: MenuItem[] = [
    { label: 'Los más vendidos' },
    { label: 'Amazont Basics' },
    { label: 'Ofertas' },
    { label: 'Ultimas novedades' },
    { label: 'Música' },
    { label: 'Hogar y Cocina' },
    { label: 'Informática' },
    { label: 'Audible' },
    { label: 'Tarjetas Regalo' },
    { label: 'Libros' },
    { label: 'Jugetes y Juegos' },
    { label: 'Electrónica y Fotografía' },
    { label: 'Moda' },
    { label: 'Videojuegos' }
  ];

  isAccountDropdownOpen = false;
  isDepartmentsOpen = false;
  isLanguageDropdownOpen = false;
  currentLanguage: 'es' | 'en' = 'es';
  isDarkMode = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Initialize with sample cart items
    this.cartItems = [
      { id: '1', quantity: 2 },
      { id: '2', quantity: 1 }
    ];
  }

  getCartItemsCount(): number {
    return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }

  toggleAccountDropdown(): void {
    this.isAccountDropdownOpen = !this.isAccountDropdownOpen;
  }

  toggleDepartments(): void {
    this.isDepartmentsOpen = !this.isDepartmentsOpen;
  }

  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'en' ? 'es' : 'en';
  }

  toggleLanguageDropdown(): void {
    this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
  }

  setLanguage(language: 'es' | 'en'): void {
    this.currentLanguage = language;
    this.isLanguageDropdownOpen = false;
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }

  clearSearch(): void {
    this.searchQuery = '';
  }

  getSearchPlaceholder(): string {
    return this.currentLanguage === 'en' ? 'Search Amazon' : 'Buscar en Amazon';
  }
}