import { Component, Input } from "@angular/core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-cc-mastercard-icon",
  template: "<fa-icon [size]='iconSize' [icon]='faCcMastercard'></fa-icon>",
  styleUrls: ["./cc-mastercard-icon.component.scss"],
})
export class CcMastercardIconComponent {
  @Input() iconSize: SizeProp;
  faCcMastercard = faCcMastercard;
}
