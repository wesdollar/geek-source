import { Component, OnInit } from "@angular/core";
import { CommonPortalData } from "src/app/models/commonPortalData.interface";
import { CommonProductsAPIData } from "src/app/models/commonProductsAPIData.interface";
import { BestBuyService } from "../../services/best-buy.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  featuredProducts: CommonPortalData[];
  todaysDeals: CommonPortalData[];
  noResultsMessage: string;
  constructor(private bestBuyService: BestBuyService) {}

  ngOnInit(): void {
    this.bestBuyService.getPortalProducts("digital_insert").subscribe(
      (results: CommonProductsAPIData) => {
        this.featuredProducts = results.products;
      },
      (err) => {
        console.error(err);
        this.noResultsMessage =
          "No products to display. Please try again later!";
      }
    );
    this.bestBuyService.getPortalProducts("deal_of_the_day").subscribe(
      (results: CommonProductsAPIData) => {
        this.todaysDeals = results.products;
      },
      (err) => {
        console.error(err);
        this.noResultsMessage =
          "No products to display. Please try again later!";
      }
    );
  }
}
