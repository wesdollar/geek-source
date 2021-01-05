import { Component } from "@angular/core";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-cart-plus-icon",
  template: "<fa-icon [icon]='faCartPlus'></fa-icon>",
  styleUrls: ["./cart-plus-icon.component.scss"],
})
export class CartPlusIconComponent {
  faCartPlus = faCartPlus;
}
