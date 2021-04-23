import { Component, OnInit } from "@angular/core";
import { CommonPortalData } from "src/app/models/commonPortalData.interface";
import { CommonProductsAPIData } from "src/app/models/commonProductsAPIData.interface";
import { BestBuyService } from "src/app/services/best-buy.service";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.scss"],
})
export class ProductPageComponent implements OnInit {
  offerTypes = ["digital_insert", "deal_of_the_day"];
  featuredProducts: CommonPortalData[];
  noResultsMessage: string;
  todaysDeals: CommonPortalData[];
  constructor(private bestBuyService: BestBuyService) {}

  ngOnInit(): void {
    this.bestBuyService.getPortalProducts(this.offerTypes.shift()).subscribe(
      (results: CommonProductsAPIData) => {
        if (results != null) {
          this.featuredProducts = results.products;
        }
      },
      (err) => {
        console.error(err);
        this.noResultsMessage =
          "No products to display. Please try again later!";
      }
    );
  }
}
