import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-shopping-cart-icon",
  templateUrl: "./shopping-cart-icon.component.html",
  styleUrls: ["./shopping-cart-icon.component.scss"],
})
export class ShoppingCartIconComponent implements OnInit {
  @Input("iconPlacingClassName") iconPlacingClassName: string;
  @Input("iconSizeClassName") iconSizeClassName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
