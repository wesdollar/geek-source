import { TestBed } from "@angular/core/testing";
import { BestBuyService } from "./best-buy.service";

describe("BestBuyService", () => {
  let service: BestBuyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestBuyService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
