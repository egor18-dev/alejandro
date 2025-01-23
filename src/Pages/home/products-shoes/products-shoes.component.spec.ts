import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsShoesComponent } from './products-shoes.component';

describe('ProductsShoesComponent', () => {
  let component: ProductsShoesComponent;
  let fixture: ComponentFixture<ProductsShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsShoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
