import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductShowcaseComponent } from "./product-showcase.component";

describe("ProductShowcaseComponent", () => {
  let component: ProductShowcaseComponent;
  let fixture: ComponentFixture<ProductShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductShowcaseComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
