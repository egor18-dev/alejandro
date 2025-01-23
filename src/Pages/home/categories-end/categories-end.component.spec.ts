import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesEndComponent } from './categories-end.component';

describe('CategoriesEndComponent', () => {
  let component: CategoriesEndComponent;
  let fixture: ComponentFixture<CategoriesEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesEndComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
