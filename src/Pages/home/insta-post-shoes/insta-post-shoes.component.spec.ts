import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaPostShoesComponent } from './insta-post-shoes.component';

describe('InstaPostShoesComponent', () => {
  let component: InstaPostShoesComponent;
  let fixture: ComponentFixture<InstaPostShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstaPostShoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstaPostShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
