import { Component, OnInit } from "@angular/core";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-half-star-icon",
  templateUrl: "./half-star-icon.component.html",
  styleUrls: ["./half-star-icon.component.scss"],
})
export class HalfStarIconComponent implements OnInit {
  faStarHalfAlt = faStarHalfAlt;
  constructor() {}

  ngOnInit(): void {}
}
