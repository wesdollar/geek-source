import { ComponentFixture, TestBed } from "@angular/core/testing";
import { VerticalDropdownMenuComponent } from "./vertical-dropdown-menu.component";

describe("VerticalDropdownMenuComponent", () => {
  let component: VerticalDropdownMenuComponent;
  let fixture: ComponentFixture<VerticalDropdownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerticalDropdownMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
