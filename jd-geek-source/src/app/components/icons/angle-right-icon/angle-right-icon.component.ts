import { Component } from "@angular/core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-angle-right-icon",
  template: "<fa-icon [icon]='faAngleRight'></fa-icon>",
  styleUrls: ["./angle-right-icon.component.scss"],
})
export class AngleRightIconComponent {
  faAngleRight = faAngleRight;
}
