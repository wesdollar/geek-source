import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ShoppingCartIconComponent } from "./shopping-cart-icon.component";

describe("ShoppingCartIconComponent", () => {
  let component: ShoppingCartIconComponent;
  let fixture: ComponentFixture<ShoppingCartIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
