import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CcAmexIconComponent } from "./cc-amex-icon.component";

describe("CcAmexIconComponent", () => {
  let component: CcAmexIconComponent;
  let fixture: ComponentFixture<CcAmexIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CcAmexIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcAmexIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
