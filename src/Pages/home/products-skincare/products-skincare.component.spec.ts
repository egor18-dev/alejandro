import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSkincareComponent } from './products-skincare.component';

describe('ProductsSkincareComponent', () => {
  let component: ProductsSkincareComponent;
  let fixture: ComponentFixture<ProductsSkincareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsSkincareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsSkincareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
