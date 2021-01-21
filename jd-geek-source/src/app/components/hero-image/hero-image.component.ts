/* eslint-disable no-magic-numbers */
import { Component, OnInit } from "@angular/core";
import { CommonPortalData } from "src/app/models/commonPortalData.interface";
import { BestBuyService } from "src/app/services/best-buy.service";

@Component({
  selector: "app-hero-image",
  templateUrl: "./hero-image.component.html",
  styleUrls: ["./hero-image.component.scss"],
})
export class HeroImageComponent implements OnInit {
  productInformation: CommonPortalData;

  constructor(private bestBuyService: BestBuyService) {}

  ngOnInit(): void {
    this.bestBuyService
      .getSingleProduct(5734900)
      .subscribe((results: CommonPortalData) => {
        if (results != null) {
          this.productInformation = results;
          console.log(this.productInformation);
        }
      });
  }
}
