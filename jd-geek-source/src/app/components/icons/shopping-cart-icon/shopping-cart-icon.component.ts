import { Component, Input } from "@angular/core";

@Component({
  selector: "app-shopping-cart-icon",
  templateUrl: "./shopping-cart-icon.component.html",
  styleUrls: ["./shopping-cart-icon.component.scss"],
})
export class ShoppingCartIconComponent {
  @Input("iconPlacingClassName") iconPlacingClassName: string;
  @Input("iconSizeClassName") iconSizeClassName: string;
}
