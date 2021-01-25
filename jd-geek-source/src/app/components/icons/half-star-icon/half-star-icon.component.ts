import { Component, Input } from "@angular/core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-half-star-icon",
  template: "<fa-icon [size]='iconSize' [icon]='faStarHalfAlt'></fa-icon>",
  styleUrls: ["./half-star-icon.component.scss"],
})
export class HalfStarIconComponent {
  @Input() iconSize: SizeProp;
  faStarHalfAlt = faStarHalfAlt;
}
