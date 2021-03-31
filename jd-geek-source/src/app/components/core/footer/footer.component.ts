import { Component, OnInit } from "@angular/core";
import { Categories } from "src/app/models/Categories.interface";
import { DropDownLink } from "src/app/models/drop-down-link.interface";
import { BestBuyService } from "src/app/services/best-buy.service";
import * as configs from "../../../../assets/config.json";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  menuItems: DropDownLink[] = [];
  noResultsMessage: string;
  displayCategoryMenu: boolean;
  constructor(private bestBuyService: BestBuyService) {}

  ngOnInit(): void {
    this.bestBuyService.getTopLevelCategories(configs.categories).subscribe(
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
}
