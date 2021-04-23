import { Component, OnInit } from "@angular/core";
import {
  Categories,
  CategoriesEntity,
} from "src/app/models/Categories.interface";
import { BestBuyService } from "../../../services/best-buy.service";
import * as configs from "../../../../assets/config.json";
import {
  AccordianMain,
  AccordianSub,
} from "src/app/models/accordion.interface";

@Component({
  selector: "app-shop-by-category",
  templateUrl: "./shop-by-category.component.html",
  styleUrls: ["./shop-by-category.component.scss"],
})
export class ShopByCategoryComponent implements OnInit {
  menuItems: CategoriesEntity[] = [];
  accodianItems: AccordianMain[] = [];
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
          this.menuItems.forEach((category) => {
            const subcats: AccordianSub[] = [];

            category.subCategories.forEach((subCategory, index) => {
              // eslint-disable-next-line no-magic-numbers
              if (index < 10) {
                subcats.push(<AccordianSub>subCategory);
              }
            });
            const cats: AccordianMain = {
              id: category.id,
              name: category.name,
              link: "/",
              subMenuItems: subcats,
            };

            this.accodianItems.push(cats);
          });
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
