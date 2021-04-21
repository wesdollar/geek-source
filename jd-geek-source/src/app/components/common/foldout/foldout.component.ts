/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { AccordianSub } from "src/app/models/accordion.interface";
import { CategoriesEntity } from "src/app/models/Categories.interface";

@Component({
  selector: "foldout",
  templateUrl: "./foldout.component.html",
  styleUrls: ["./foldout.component.scss"],
})
export class FoldoutComponent {
  @Input() subMenu: AccordianSub[];
}
