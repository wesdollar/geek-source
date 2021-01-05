import { Component, Output } from "@angular/core";
import { faStar } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "app-empty-star-icon",
  template: "<fa-icon [icon]='faStar'></fa-icon>",
  styleUrls: ["./empty-star-icon.component.scss"],
})
export class EmptyStarIconComponent {
  faStar = faStar;
  @Output() outStar = faStar;
}
