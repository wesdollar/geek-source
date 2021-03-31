import { Component, OnInit } from "@angular/core";
import {
  Categories,
  CategoriesEntity,
} from "src/app/models/Categories.interface";
import { BestBuyService } from "../../../services/best-buy.service";
import * as configs from "../../../../assets/config.json";

@Component({
  selector: "app-shop-by-category",
  templateUrl: "./shop-by-category.component.html",
  styleUrls: ["./shop-by-category.component.scss"],
})
export class ShopByCategoryComponent implements OnInit {
  menuItems: CategoriesEntity[] = [];
  noResultsMessage: string;
  displayCategoryMenu: boolean;

  constructor(private bestBuyService: BestBuyService) {}

  ngOnInit(): void {
    this.bestBuyService.getTopLevelCategories(configs.categories).subscribe(
      (results: Categories) => {
        if (results != null) {
          for (const category of results.categories) {
            this.menuItems.push(category);
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
}
