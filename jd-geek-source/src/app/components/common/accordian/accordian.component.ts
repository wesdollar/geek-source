/* eslint-disable no-magic-numbers */
import {
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from "@angular/core";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { AccordianMain } from "src/app/models/accordion.interface";
import { AngleRightIconComponent } from "../../icons/angle-right-icon/angle-right-icon.component";
import { FoldoutComponent } from "../foldout/foldout.component";

@Component({
  selector: "accordian",
  templateUrl: "./accordian.component.html",
  styleUrls: ["./accordian.component.scss"],
})
export class AccordianComponent {
  @Input() menuMain: AccordianMain[];
  iconRotation = 0;
  menuItemClicked = false;
  showFold: boolean;
  @ViewChildren(AngleRightIconComponent)
  iconComponents!: QueryList<AngleRightIconComponent>;
  @ViewChildren(FoldoutComponent, { read: ElementRef })
  foldouts!: QueryList<ElementRef>;
  fold: ElementRef;

  toggleButton(toggle: number): void {
    this.iconComponents.toArray().forEach((icons) => {
      if (icons.menuId === toggle && icons.iconRotation !== 90) {
        icons.transformIcon(90);
      } else {
        icons.transformIcon(0);
      }
    });
    this.foldouts.toArray().forEach((folds) => {
      if (toggle === Math.abs(folds.nativeElement.id)) {
        folds.nativeElement.classList.toggle("foldouts.active");
        folds.nativeElement.classList.toggle("foldouts");
        this.fold = folds;
      } else {
        folds.nativeElement.classList.remove("foldouts.active");

        if (!folds.nativeElement.classList.contains("foldouts")) {
          folds.nativeElement.classList.toggle("foldouts");
        }
      }
    });
    this.fold.nativeElement.classList.toggle("foldouts.active");
  }
}
