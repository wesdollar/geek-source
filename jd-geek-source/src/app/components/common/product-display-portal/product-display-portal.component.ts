import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from "@angular/core";
import { element } from "protractor";
import { CommonPortalData } from "src/app/models/commonPortalData.interface";
import { CommonProductsAPIData } from "src/app/models/commonProductsAPIData.interface";
import { BestBuyService } from "src/app/services/best-buy.service";

const RIGHT_SCROLL_STOP = 0;
const LEFT_SCROLL_STOP = 1390;

@Component({
  selector: "app-product-display-portal",
  templateUrl: "./product-display-portal.component.html",
  styleUrls: ["./product-display-portal.component.scss"],
})
export class ProductDisplayPortalComponent implements OnInit {
  @Input() offerTypes: string;
  portalProducts: CommonPortalData[] = null;
  leftScrollDisabled: boolean;
  rightScrollDisabled = true;
  maxScroll: number;
  scrollTracker = RIGHT_SCROLL_STOP;

  constructor(
    private bestBuyService: BestBuyService,
    private eleRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.bestBuyService
      .getPortalProducts(this.offerTypes)
      .subscribe((results: CommonProductsAPIData) => {
        if (results != null) {
          this.portalProducts = results.products;
          console.log("product details", this.portalProducts);
        }
      });
  }

  leftScroll(scrollAmount: number, elementId: string): void {
    const maxScroll =
      document.getElementById(elementId).scrollWidth -
      document.getElementById(elementId).clientWidth;

    if (this.scrollTracker < maxScroll) {
      this.scrollTracker += scrollAmount;
      document.getElementById(elementId).scrollLeft += scrollAmount;
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
    } else {
      this.leftScrollDisabled = false;
    }
  }
}
