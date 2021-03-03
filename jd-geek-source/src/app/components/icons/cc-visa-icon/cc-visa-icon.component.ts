import { Component, Input } from "@angular/core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-cc-visa-icon",
  template: "<fa-icon [size]='iconSize' [icon]='faCcVisa'></fa-icon>",
  styleUrls: ["./cc-visa-icon.component.scss"],
})
export class CCVisaIconComponent {
  @Input() iconSize: SizeProp;
  faCcVisa = faCcVisa;
}
