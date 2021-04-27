/* eslint-disable dot-notation */
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
  productData: CommonPortalData;
  productSKU: number;

  constructor(
    private bestBuyService: BestBuyService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productSKU = this.activatedRoute.snapshot.params["product"];

    this.bestBuyService.getSingleProduct(this.productSKU).subscribe(
      (result: CommonPortalData) => {
        if (result !== null) {
          this.productData = result;
        }
      },
      (err) => {
        console.error(err);
        this.noResultsMessage = "No image avaliable yet.";
      }
    );

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
