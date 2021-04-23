/* eslint-disable no-magic-numbers */
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-angle-right-icon",
  template:
    "<fa-icon class='foldIcon' [size]='iconSize' [icon]='faAngleRight' ></fa-icon>",
  styleUrls: ["./angle-right-icon.component.scss"],
})
export class AngleRightIconComponent {
  @Input() iconSize: SizeProp;
  @Input() menuId: number;
  @Input() iconRotation = 0;
  faAngleRight = faAngleRight;
  @ViewChild(FaIconComponent, { static: true }) iconComponent: FaIconComponent;

  transformIcon(iconRotation) {
    this.iconRotation = iconRotation;
    this.iconComponent.transform = `rotate-${this.iconRotation}`;
    this.iconComponent.render();
  }
}
