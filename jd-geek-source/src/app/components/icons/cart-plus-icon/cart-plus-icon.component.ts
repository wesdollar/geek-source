import { Component, OnInit } from "@angular/core";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-cart-plus-icon",
  templateUrl: "./cart-plus-icon.component.html",
  styleUrls: ["./cart-plus-icon.component.scss"],
})
export class CartPlusIconComponent implements OnInit {
  faCartPlus = faCartPlus;
  constructor() {}

  ngOnInit(): void {}
}
