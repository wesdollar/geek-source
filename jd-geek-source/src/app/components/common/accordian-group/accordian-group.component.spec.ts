import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AccordianGroupComponent } from "../accordian/accordian-group.component";

describe("AccordianGroupComponent", () => {
  let component: AccordianGroupComponent;
  let fixture: ComponentFixture<AccordianGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordianGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordianGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
