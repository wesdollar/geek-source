import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRatingsComponent } from './product-ratings.component';

describe('ProductRatingsComponent', () => {
  let component: ProductRatingsComponent;
  let fixture: ComponentFixture<ProductRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRatingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
