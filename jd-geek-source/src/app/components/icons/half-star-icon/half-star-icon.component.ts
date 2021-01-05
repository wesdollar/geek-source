import { Component } from "@angular/core";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-half-star-icon",
  template: "<fa-icon [icon]='faStarHalfAlt'></fa-icon>",
  styleUrls: ["./half-star-icon.component.scss"],
})
export class HalfStarIconComponent {
  faStarHalfAlt = faStarHalfAlt;
}
