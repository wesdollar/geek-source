import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeShippingIconComponent } from './free-shipping-icon.component';

describe('FreeShippingIconComponent', () => {
  let component: FreeShippingIconComponent;
  let fixture: ComponentFixture<FreeShippingIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeShippingIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeShippingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
