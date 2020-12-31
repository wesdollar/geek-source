import { Component, OnInit } from "@angular/core";
import { Categories } from "src/app/models/Categories.interface";
import { CommonPortalData } from "src/app/models/commonPortalData.interface";
import { CommonProductsAPIData } from "src/app/models/commonProductsAPIData.interface";
import { BestBuyService } from "src/app/services/best-buy.service";
import * as testing from "../../../assets/testingProductIds.json";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  productData = [];
  recentlyViewedProducts = [];
  savedItemsProducts = [];
  menuItems = [];
  displayProductsCarousel = false;
  productSelectionTypes = {
    recent: "RECENTLY VIEWED",
    saved: "SAVED ITEMS",
  };
  constructor(private bestBuyService: BestBuyService) {}
  ngOnInit(): void {
    this.bestBuyService
      .getTopLevelCategories()
      .subscribe((results: Categories) => {
        if (results != null) {
          for (const category of results.categories) {
            this.menuItems.push({ name: category.name, url: "home" });
          }
        }
      });
  }

  getProductSelection(productSelection: string): void {
    /*
     * This is most likely just to test this out.  I don't think I want to
     * reach out to the BB API for every time the user hovers over a different
     * button.
     */
    if (productSelection === this.productSelectionTypes.recent) {
      this.productData = [];
      for (const product of testing.recently_viewed_ids) {
        this.bestBuyService
          .getSingleProduct(product)
          .subscribe((results: CommonPortalData) => {
            if (results != null) {
              this.productData.push(results);
            }
          });
      }
      this.displayProductsCarousel = true;
    } else if (productSelection === this.productSelectionTypes.saved) {
      this.productData = [];
      for (const product of testing.saved_items_ids) {
        this.bestBuyService
          .getSingleProduct(product)
          .subscribe((results: CommonPortalData) => {
            if (results != null) {
              this.productData.push(results);
            }
          });
      }
      this.displayProductsCarousel = true;
    } else {
      this.displayProductsCarousel = false;
    }
  }
}
