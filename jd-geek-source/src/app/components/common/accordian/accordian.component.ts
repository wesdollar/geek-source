/* eslint-disable no-magic-numbers */
/* eslint-disable quotes */
import { Component, Input } from "@angular/core";
import { AccordianMain } from "src/app/models/accordion.interface";

@Component({
  selector: "accordian",
  templateUrl: "./accordian.component.html",
  styleUrls: ["./accordian.component.scss"],
})
export class AccordianComponent {
  @Input() menuMain: AccordianMain[];
  iconRotation = 0;
  menuItemClicked = false;
  showFold: number;

  toggleButton(toggle: string): void {
    const thisButton = document.getElementById(toggle);
    const acc = document.getElementsByClassName("accordion");
    const panel = document.getElementsByClassName("panel");
    const tagsalot = document.querySelectorAll("foldout");

    console.log("here");
    console.log("thisButton", thisButton);
    console.log("acc", acc);
    console.log("panel", panel);
    console.log("tagsalot", tagsalot);

    tagsalot.forEach((fold) => {
      const setClasses = !thisButton.classList.contains("active");

      this.setClass(acc, "active", "remove");
      this.setClass(panel, "show", "remove");

      console.log(setClasses);

      if (setClasses) {
        fold.classList.toggle("active");
        fold.classList.toggle("show");
      }
    });

    // if (this.menuItemClicked) {
    //   document.getElementById(toggle).setAttribute("style", "display: block");
    // } else {
    //   document.getElementById(toggle).setAttribute("style", "display: none");
    // }
  }

  setClass(elements, className, functionName) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList[functionName](className);
    }
  }
}
