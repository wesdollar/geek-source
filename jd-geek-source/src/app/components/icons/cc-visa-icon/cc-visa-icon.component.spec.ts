import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CCVisaIconComponent } from "./cc-visa-icon.component";

describe("CCVisaComponent", () => {
  let component: CCVisaIconComponent;
  let fixture: ComponentFixture<CCVisaIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CCVisaIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CCVisaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
