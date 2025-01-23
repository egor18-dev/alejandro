import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferSkincareComponent } from './offer-skincare.component';

describe('OfferSkincareComponent', () => {
  let component: OfferSkincareComponent;
  let fixture: ComponentFixture<OfferSkincareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferSkincareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferSkincareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
