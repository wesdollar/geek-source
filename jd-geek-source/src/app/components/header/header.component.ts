/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
import { Component, OnInit } from "@angular/core";
import { Categories } from "src/app/models/Categories.interface";
import { CommonPortalData } from "src/app/models/commonPortalData.interface";
import { BestBuyService } from "src/app/services/best-buy.service";
import * as testing from "../../../assets/testingProductIds.json";
import { DropDownLink } from "src/app/models/drop-down-link.interface";
import { CommonProductsAPIData } from "src/app/models/commonProductsAPIData.interface";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  productData: CommonPortalData[];
  recentlyViewedProducts = [];
  savedItemsProducts = [];
  menuItems: DropDownLink[] = [];
  displayProductsCarousel = false;
  displayCategoryMenu = true;
  noResultsMessage: string;
  productSelectionTypes = {
    recent: "RECENTLY VIEWED",
    saved: "SAVED ITEMS",
  };
  exitingMenuButton = true;

  constructor(private bestBuyService: BestBuyService) {}

  ngOnInit(): void {
    this.bestBuyService.getTopLevelCategories().subscribe(
      (results: Categories) => {
        if (results != null) {
          for (const category of results.categories) {
            this.menuItems.push({ name: category.name, url: "home" });
          }
        } else {
          this.noResultsMessage = "No categories to select! Try again later!";
          this.displayCategoryMenu = false;
        }
      },
      (err) => {
        this.noResultsMessage = "No categories to select! Try again later!";
        this.displayCategoryMenu = false;
        console.error(err);
      }
    );
  }

  exitCaroselMenu(exitingMenu: boolean): void {
    this.exitingMenuButton = exitingMenu;
  }

  exitCarosel(exitingMenu: boolean, exitingCarosel: boolean): void {
    if (exitingMenu && exitingCarosel) {
      this.displayProductsCarousel = false;
    }
  }

  getProductSelection(productSelection: string): void {
    /*
     * Testing is fake data to test the functionality.
     * Tracking code will be added later to track the recently viewed and saved itmes.
     */
    if (productSelection === this.productSelectionTypes.recent) {
      this.productData = [];

      if (testing.recently_viewed_ids.length > 0) {
        this.bestBuyService
          .getProductsByIds(testing.recently_viewed_ids)
          .subscribe(
            (results: CommonProductsAPIData) => {
              if (results != null) {
                this.productData = results.products;
              }
            },
            (err) => {
              console.error(err);
              this.noResultsMessage =
                "No products to display. Please try again later!";
            }
          );
      } else {
        this.noResultsMessage = "You have not viewed any products lately!";
      }
      this.displayProductsCarousel = true;
    } else if (productSelection === this.productSelectionTypes.saved) {
      this.productData = [];

      if (testing.saved_items_ids.length > 0) {
        this.bestBuyService.getProductsByIds(testing.saved_items_ids).subscribe(
          (results: CommonProductsAPIData) => {
            if (results) {
              this.productData = results.products;
            }
          },
          (err) => {
            console.error(err);
            this.noResultsMessage =
              "No proeducts to display. Please try again later!";
          }
        );
      } else {
        this.noResultsMessage = "You do not have any saved products!";
      }
      this.displayProductsCarousel = true;
    } else {
      this.displayProductsCarousel = false;
    }
  }
}
