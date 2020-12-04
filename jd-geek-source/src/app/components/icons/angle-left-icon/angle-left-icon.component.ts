import { Component, OnInit } from "@angular/core";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-angle-left-icon",
  templateUrl: "./angle-left-icon.component.html",
  styleUrls: ["./angle-left-icon.component.scss"],
})
export class AngleLeftIconComponent implements OnInit {
  faAngleLeft = faAngleLeft;
  constructor() {}

  ngOnInit(): void {}
}
