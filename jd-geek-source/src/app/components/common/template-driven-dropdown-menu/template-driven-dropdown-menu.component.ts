import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-template-driven-dropdown-menu",
  templateUrl: "./template-driven-dropdown-menu.component.html",
  styleUrls: ["./template-driven-dropdown-menu.component.scss"],
})
export class TemplateDrivenDropdownMenuComponent {
  @Input() menuTitle: string;
  @Output() dataChoice = new EventEmitter<string>();
  @Output() exitMenu = new EventEmitter<boolean>();

  getDataSelection(selection: string): void {
    this.dataChoice.emit(selection);
    this.exitMenu.emit(false);
  }

  exitMenuButton(): void {
    this.exitMenu.emit(true);
  }
}
