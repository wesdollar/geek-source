/* eslint-disable no-magic-numbers */
import { Component, OnInit } from "@angular/core";
import { CommonPortalData } from "src/app/models/commonPortalData.interface";
import { BestBuyService } from "src/app/services/best-buy.service";

@Component({
  selector: "app-hero-display",
  templateUrl: "./hero-display.component.html",
  styleUrls: ["./hero-display.component.scss"],
})
export class HeroDisplayComponent implements OnInit {
  displayTVImage: string;

  constructor(private bestBuyService: BestBuyService) {}

  ngOnInit(): void {
    this.bestBuyService
      .getSingleProduct(6325563)
      .subscribe((results: CommonPortalData) => {
        if (results != null) {
          this.displayTVImage = results.image;
        }
      });
  }
}
