import { Component, OnInit, Output } from "@angular/core";
import { faStar } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "app-empty-star-icon",
  templateUrl: "./empty-star-icon.component.html",
  styleUrls: ["./empty-star-icon.component.scss"],
})
export class EmptyStarIconComponent implements OnInit {
  faStar = faStar;
  @Output() outStar = faStar;
  constructor() {}

  ngOnInit(): void {}
}
