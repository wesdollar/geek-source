import { Component } from "@angular/core";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-angle-left-icon",
  template: "<fa-icon [icon]='faAngleLeft'></fa-icon>",
  styleUrls: ["./angle-left-icon.component.scss"],
})
export class AngleLeftIconComponent {
  faAngleLeft = faAngleLeft;
}
