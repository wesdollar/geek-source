import { Component, OnInit } from "@angular/core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-filled-star-icon",
  templateUrl: "./filled-star-icon.component.html",
  styleUrls: ["./filled-star-icon.component.scss"],
})
export class FilledStarIconComponent implements OnInit {
  faStar = faStar;
  constructor() {}

  ngOnInit(): void {}
}
