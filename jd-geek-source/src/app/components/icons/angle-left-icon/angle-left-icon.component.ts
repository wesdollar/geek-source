import { Component, Input } from "@angular/core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-angle-left-icon",
  template: "<fa-icon [size]='iconSize' [icon]='faAngleLeft'></fa-icon>",
  styleUrls: ["./angle-left-icon.component.scss"],
})
export class AngleLeftIconComponent {
  @Input() iconSize: SizeProp;
  faAngleLeft = faAngleLeft;
}
