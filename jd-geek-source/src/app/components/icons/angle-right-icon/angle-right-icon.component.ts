/* eslint-disable no-magic-numbers */
import { Component, HostListener, Input, ViewChild } from "@angular/core";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-angle-right-icon",
  template:
    "<fa-icon class='foldIcon' [size]='iconSize' [icon]='faAngleRight' transform='rotate-{{iconRotation}}'></fa-icon>",
  styleUrls: ["./angle-right-icon.component.scss"],
})
export class AngleRightIconComponent {
  @Input() iconSize: SizeProp;
  iconClicked = false;
  iconRotation = 0;
  faAngleRight = faAngleRight;

  @HostListener("click", ["$event.target"])
  handleClicking(event: MouseEvent) {
    this.iconClicked = !this.iconClicked;

    if (this.iconClicked) {
      this.iconRotation = 90;
    } else {
      this.iconRotation = 0;
    }
  }
}
