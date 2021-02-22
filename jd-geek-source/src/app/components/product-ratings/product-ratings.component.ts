/* eslint-disable no-magic-numbers */
import { Component, Input, OnInit } from "@angular/core";

const EMPTY_RATE = 0;
const RATING_MAX = 5;

@Component({
  selector: "app-product-ratings",
  templateUrl: "./product-ratings.component.html",
  styleUrls: ["./product-ratings.component.scss"],
})
export class ProductRatingsComponent implements OnInit {
  @Input() productRating: number;
  filledRate: number;
  emptyRate = RATING_MAX;
  hasHalfStar: boolean;

  ngOnInit(): void {
    this.filledRate = Math.floor(this.productRating);
    this.hasHalfStar = this.productRating % this.filledRate > EMPTY_RATE;
    this.emptyRate = RATING_MAX - Math.ceil(this.productRating);
  }

  get filledStars(): number[] {
    return Array(this.filledRate);
  }

  get emptyStars(): number[] {
    return Array(this.emptyRate);
  }
}
