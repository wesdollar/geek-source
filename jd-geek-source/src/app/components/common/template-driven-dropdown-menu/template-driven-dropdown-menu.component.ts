import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { CommonPortalData } from "src/app/models/commonPortalData.interface";

@Component({
  selector: "app-template-driven-dropdown-menu",
  templateUrl: "./template-driven-dropdown-menu.component.html",
  styleUrls: ["./template-driven-dropdown-menu.component.scss"],
})
export class TemplateDrivenDropdownMenuComponent implements OnInit, OnChanges {
  @Input() menuTitle: string;
  @Input() productData: CommonPortalData[];
  products: CommonPortalData[];
  constructor() {}

  ngOnInit(): void {
    this.products = this.productData;
  }

  ngOnChanges(): void {
    this.products = this.productData;
  }
}
