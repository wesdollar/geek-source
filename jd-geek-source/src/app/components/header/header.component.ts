import { Component, OnInit } from "@angular/core";
import { DropDownLink } from "src/app/models/drop-down-link.interface";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  menuItems: DropDownLink[] = [
    { name: "TVs", url: "/" },
    { name: "Cameras", url: "/" },
    { name: "Appliances", url: "/" },
  ];
  constructor() {}

  ngOnInit(): void {}
}
