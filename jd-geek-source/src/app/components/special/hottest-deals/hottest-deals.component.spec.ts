import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HottestDealsComponent } from "./hottest-deals.component";

describe("HottestDealsComponent", () => {
  let component: HottestDealsComponent;
  let fixture: ComponentFixture<HottestDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HottestDealsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HottestDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
