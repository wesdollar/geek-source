import { Component, Input, OnChanges } from "@angular/core";
import { CommonPortalData } from "src/app/models/commonPortalData.interface";

@Component({
  selector: "app-hottest-deals",
  templateUrl: "./hottest-deals.component.html",
  styleUrls: ["./hottest-deals.component.scss"],
})
export class HottestDealsComponent implements OnChanges {
  @Input() hottestDeal: CommonPortalData;
  savings: number;
  ngOnChanges(): void {
    if (this.hottestDeal != null) {
      this.savings = this.hottestDeal.regularPrice - this.hottestDeal.salePrice;
    }
  }
}
