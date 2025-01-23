import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitShoesComponent } from './portrait-shoes.component';

describe('PortraitShoesComponent', () => {
  let component: PortraitShoesComponent;
  let fixture: ComponentFixture<PortraitShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortraitShoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortraitShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
