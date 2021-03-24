import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"],
})
export class ShoppingCartComponent implements OnInit {
  itemCount = 0;
  message = "items in your cart";
  @Input() iconPlacement: string;
  @Input() iconSize: string;

  ngOnInit(): void {}
}
