import { Component, Input } from "@angular/core";
import { DropDownLink } from "src/app/models/drop-down-link.interface";

@Component({
  selector: "app-vertical-dropdown-menu",
  templateUrl: "./vertical-dropdown-menu.component.html",
  styleUrls: ["./vertical-dropdown-menu.component.scss"],
})
export class VerticalDropdownMenuComponent {
  @Input() menuTitle: string;
  @Input() menuItems: DropDownLink;
}
