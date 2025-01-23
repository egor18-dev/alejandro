import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesWomenComponent } from './categories-women.component';

describe('CategoriesWomenComponent', () => {
  let component: CategoriesWomenComponent;
  let fixture: ComponentFixture<CategoriesWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesWomenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
