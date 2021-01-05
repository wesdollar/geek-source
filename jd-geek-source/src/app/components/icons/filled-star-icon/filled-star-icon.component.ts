import { Component } from "@angular/core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-filled-star-icon",
  template: "<fa-icon [icon]='faStar'></fa-icon>",
  styleUrls: ["./filled-star-icon.component.scss"],
})
export class FilledStarIconComponent {
  faStar = faStar;
}
