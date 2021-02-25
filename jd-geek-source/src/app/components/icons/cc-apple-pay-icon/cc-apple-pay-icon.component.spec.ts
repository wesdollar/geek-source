import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CcApplePayIconComponent } from "./cc-apple-pay-icon.component";

describe("CcApplePayIconComponent", () => {
  let component: CcApplePayIconComponent;
  let fixture: ComponentFixture<CcApplePayIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CcApplePayIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcApplePayIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
