/* eslint-disable no-magic-numbers */
import { Component, Input, OnChanges } from "@angular/core";
import { CommonPortalData } from "src/app/models/commonPortalData.interface";

const RIGHT_SCROLL_STOP = 0;

@Component({
  selector: "app-product-display-portal",
  templateUrl: "./product-display-portal.component.html",
  styleUrls: ["./product-display-portal.component.scss"],
})
export class ProductDisplayPortalComponent implements OnChanges {
  ngOnChanges(): void {
    this.displayProducts = this.productData.length > 0;
  }
  @Input() productData: CommonPortalData[];
  @Input() carouselID: string;
  @Input() errorMessage: string;
  carouselElementID: string;
  leftScrollDisabled: boolean;
  rightScrollDisabled = true;
  maxScroll: number;
  scrollTracker = RIGHT_SCROLL_STOP;
  displayProducts = true;

  leftScroll(scrollAmount: number, elementId: string): void {
    const carouselElement = document.getElementById(elementId);
    const maxScroll = carouselElement.scrollWidth - carouselElement.clientWidth;

    if (this.scrollTracker < maxScroll) {
      this.scrollTracker += scrollAmount;
      carouselElement.scrollLeft += scrollAmount;
    }

    if (this.scrollTracker >= maxScroll) {
      this.rightScrollDisabled = false;
      this.leftScrollDisabled = true;
    } else {
      this.rightScrollDisabled = false;
    }
  }

  rightScroll(direction: number, elementId: string): void {
    if (this.scrollTracker > RIGHT_SCROLL_STOP) {
      this.scrollTracker -= direction;
      document.getElementById(elementId).scrollLeft -= direction;
    }

    if (this.scrollTracker <= RIGHT_SCROLL_STOP) {
      this.rightScrollDisabled = true;
      this.leftScrollDisabled = false;
    }
  }
}
