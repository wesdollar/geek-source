import { Component, Input } from "@angular/core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-cart-plus-icon",
  template: "<fa-icon [size]='iconSize' [icon]='faCartPlus'></fa-icon>",
  styleUrls: ["./cart-plus-icon.component.scss"],
})
export class CartPlusIconComponent {
  @Input() iconSize: SizeProp;
  faCartPlus = faCartPlus;
}
