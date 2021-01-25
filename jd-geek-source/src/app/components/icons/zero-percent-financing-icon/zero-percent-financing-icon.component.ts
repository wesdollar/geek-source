import { Component, Input } from "@angular/core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-zero-percent-financing-icon",
  template: "<fa-icon [size]='iconSize' [icon]='faCreditCard'></fa-icon>",
  styleUrls: ["./zero-percent-financing-icon.component.scss"],
})
export class ZeroPercentFinancingIconComponent {
  @Input() iconSize: SizeProp;
  faCreditCard = faCreditCard;
}
