import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesMiddleComponent } from './categories-middle.component';

describe('CategoriesMiddleComponent', () => {
  let component: CategoriesMiddleComponent;
  let fixture: ComponentFixture<CategoriesMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesMiddleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
