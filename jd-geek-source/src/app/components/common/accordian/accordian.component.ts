/* eslint-disable quotes */
import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from "@angular/core";
import { FoldoutComponent } from "../foldout/foldout.component";

const index = 0;

@Component({
  selector: "app-accordian",
  template: `<ng-content></ng-content>`,
  styleUrls: ["./accordian.component.scss"],
})
export class AccordianComponent implements AfterContentInit {
  @ContentChildren(FoldoutComponent) groups: QueryList<FoldoutComponent>;
  ngAfterContentInit(): void {
    this.groups.toArray()[index].opened = true;
    this.groups.toArray().forEach((t) => {
      t.toggle.subscribe(() => {
        this.openGroup(t);
      });
    });
  }

  openGroup(group: FoldoutComponent): void {
    this.groups.toArray().forEach((t) => (t.opened = false));
    group.opened = true;
  }
}
