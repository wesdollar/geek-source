/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CategoriesEntity } from "src/app/models/Categories.interface";

@Component({
  selector: "app-foldout",
  templateUrl: "./foldout.component.html",
  styleUrls: ["./foldout.component.scss"],
})
export class FoldoutComponent {
  @Input() menuCategory: CategoriesEntity;
  @Input() opened = false;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  categoryItemClicked = false;

  dropClick(): void {
    this.categoryItemClicked = !this.categoryItemClicked;
  }
}
