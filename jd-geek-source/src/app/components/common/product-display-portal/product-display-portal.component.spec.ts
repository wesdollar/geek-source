import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplayPortalComponent } from './product-display-portal.component';

describe('ProductDisplayPortalComponent', () => {
  let component: ProductDisplayPortalComponent;
  let fixture: ComponentFixture<ProductDisplayPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDisplayPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDisplayPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
