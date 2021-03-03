import { Component, Input } from "@angular/core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faCcAmex } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-cc-amex-icon",
  template: "<fa-icon [size]='iconSize' [icon]='faCcAmex'></fa-icon>",
  styleUrls: ["./cc-amex-icon.component.scss"],
})
export class CcAmexIconComponent {
  @Input() iconSize: SizeProp;
  faCcAmex = faCcAmex;
}
