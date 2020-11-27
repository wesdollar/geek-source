import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { TestDiplayComponent } from "./test-diplay.component";
import { BestBuyService } from "src/app/services/best-buy.service";
import { HttpClientModule } from "@angular/common/http";

describe("TestDiplayComponent", () => {
  let component: TestDiplayComponent;
  let fixture: ComponentFixture<TestDiplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestDiplayComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDiplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
