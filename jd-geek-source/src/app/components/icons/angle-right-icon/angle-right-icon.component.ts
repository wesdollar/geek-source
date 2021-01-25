import { Component, Input } from "@angular/core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-angle-right-icon",
  template: "<fa-icon [size]='iconSize' [icon]='faAngleRight'></fa-icon>",
  styleUrls: ["./angle-right-icon.component.scss"],
})
export class AngleRightIconComponent {
  @Input() iconSize: SizeProp;
  faAngleRight = faAngleRight;
}
