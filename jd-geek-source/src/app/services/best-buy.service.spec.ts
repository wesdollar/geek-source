import { TestBed } from "@angular/core/testing";
import { BestBuyService } from "./best-buy.service";
import { HttpClientModule } from "@angular/common/http";

describe("BestBuyService", () => {
  let service: BestBuyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(BestBuyService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
