import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CcMastercardIconComponent } from "./cc-mastercard-icon.component";

describe("CcMastercardIconComponent", () => {
  let component: CcMastercardIconComponent;
  let fixture: ComponentFixture<CcMastercardIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CcMastercardIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcMastercardIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
