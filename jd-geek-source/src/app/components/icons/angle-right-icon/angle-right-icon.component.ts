import { Component, OnInit } from "@angular/core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-angle-right-icon",
  templateUrl: "./angle-right-icon.component.html",
  styleUrls: ["./angle-right-icon.component.scss"],
})
export class AngleRightIconComponent implements OnInit {
  faAngleRight = faAngleRight;

  constructor() {}

  ngOnInit(): void {}
}
