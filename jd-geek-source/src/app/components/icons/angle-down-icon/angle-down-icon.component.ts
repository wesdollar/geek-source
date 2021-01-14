import { Component, Input } from "@angular/core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-angle-down-icon",
  template: "<fa-icon [size]='iconSize' [icon]='faAngleDown'></fa-icon>",
  styleUrls: ["./angle-down-icon.component.scss"],
})
export class AngleDownIconComponent {
  @Input() iconSize: SizeProp;
  faAngleDown = faAngleDown;
}
