import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesSkincareComponent } from './categories-skincare.component';

describe('CategoriesSkincareComponent', () => {
  let component: CategoriesSkincareComponent;
  let fixture: ComponentFixture<CategoriesSkincareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesSkincareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesSkincareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
