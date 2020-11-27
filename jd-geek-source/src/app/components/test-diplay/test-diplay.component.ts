import { animate, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { CommonPortalData } from "src/app/models/commonPortalData.interface";
import { CommonProductsAPIData } from "src/app/models/commonProductsAPIData.interface";
import { ProductLimited } from "src/app/models/productLimited.interface";
// import { SearchData } from "src/app/models/searchData.interface";
import { TestData } from "src/app/models/testdata.interface";
import { BestBuyService } from "src/app/services/best-buy.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-test-diplay",
  templateUrl: "./test-diplay.component.html",
  styleUrls: ["./test-diplay.component.scss"],
  animations: [
    trigger("slideInOut", [
      transition(":enter", [
        style({ transform: "translateX(-100%)" }),
        animate("500ms ease-in", style({ transform: "translateX(0%)" })),
      ]),
    ]),
  ],
})
export class TestDiplayComponent implements OnInit {
  testResults: CommonPortalData[] = null;

  constructor(private bestBuyService: BestBuyService) {}

  ngOnInit(): void {
    this.bestBuyService
      .getPortalProducts("digital_insert")
      .subscribe((results: CommonProductsAPIData) => {
        if (results != null) {
          this.testResults = results.products;
        }
      });
  }
}
