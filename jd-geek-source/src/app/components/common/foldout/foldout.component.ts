/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input } from "@angular/core";
import { AccordianSub } from "src/app/models/accordion.interface";

@Component({
  selector: "foldout",
  templateUrl: "./foldout.component.html",
  styleUrls: ["./foldout.component.scss"],
})
export class FoldoutComponent {
  @Input() subMenu: AccordianSub[];
}
