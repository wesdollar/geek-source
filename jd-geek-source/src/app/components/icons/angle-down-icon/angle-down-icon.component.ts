import { Component } from "@angular/core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-angle-down-icon",
  templateUrl: "./angle-down-icon.component.html",
  styleUrls: ["./angle-down-icon.component.scss"],
})
export class AngleDownIconComponent {
  faAngleDown = faAngleDown;
}
