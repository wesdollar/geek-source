import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPlusIconComponent } from './cart-plus-icon.component';

describe('CartPlusIconComponent', () => {
  let component: CartPlusIconComponent;
  let fixture: ComponentFixture<CartPlusIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPlusIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPlusIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
