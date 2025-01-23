import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitWomenComponent } from './portrait-women.component';

describe('PortraitWomenComponent', () => {
  let component: PortraitWomenComponent;
  let fixture: ComponentFixture<PortraitWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortraitWomenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortraitWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
