import { Component, Input } from "@angular/core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faCcApplePay } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-cc-apple-pay-icon",
  template: "<fa-icon [size]='iconSize' [icon]='faCcApplePay'></fa-icon>",
  styleUrls: ["./cc-apple-pay-icon.component.scss"],
})
export class CcApplePayIconComponent {
  @Input() iconSize: SizeProp;
  faCcApplePay = faCcApplePay;
}
