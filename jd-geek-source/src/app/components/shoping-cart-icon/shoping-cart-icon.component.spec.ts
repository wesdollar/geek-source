import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCartIconComponent } from './shoping-cart-icon.component';

describe('ShopingCartIconComponent', () => {
  let component: ShopingCartIconComponent;
  let fixture: ComponentFixture<ShopingCartIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingCartIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingCartIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
