import { Component, Input, Output } from "@angular/core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "app-empty-star-icon",
  template: "<fa-icon [size]='iconSize' [icon]='faStar'></fa-icon>",
  styleUrls: ["./empty-star-icon.component.scss"],
})
export class EmptyStarIconComponent {
  @Input() iconSize: SizeProp;
  faStar = faStar;
  @Output() outStar = faStar;
}
