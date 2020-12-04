import { Component, OnInit } from "@angular/core";
import { CommonPortalData } from "src/app/models/commonPortalData.interface";
import { CommonProductsAPIData } from "src/app/models/commonProductsAPIData.interface";
import { BestBuyService } from "src/app/services/best-buy.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  productsData: CommonPortalData[] = null;
  offerTypes = "digital_insert";
  constructor(private bestBuyService: BestBuyService) {}

  ngOnInit(): void {
    this.bestBuyService
      .getPortalProducts(this.offerTypes)
      .subscribe((results: CommonProductsAPIData) => {
        if (results != null) {
          this.productsData = results.products;
        }
      });
  }
}
