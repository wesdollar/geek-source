import { Component, Input } from "@angular/core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-filled-star-icon",
  template: "<fa-icon [size]='iconSize' [icon]='faStar'></fa-icon>",
  styleUrls: ["./filled-star-icon.component.scss"],
})
export class FilledStarIconComponent {
  @Input() iconSize: SizeProp;
  faStar = faStar;
}
