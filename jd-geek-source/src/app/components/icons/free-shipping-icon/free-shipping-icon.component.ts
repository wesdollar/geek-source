import { Component, Input } from "@angular/core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-free-shipping-icon",
  template: "<fa-icon [size]='iconSize' [icon]='faShippingFast'></fa-icon>",
  styleUrls: ["./free-shipping-icon.component.scss"],
})
export class FreeShippingIconComponent {
  @Input() iconSize: SizeProp;
  faShippingFast = faShippingFast;
}
