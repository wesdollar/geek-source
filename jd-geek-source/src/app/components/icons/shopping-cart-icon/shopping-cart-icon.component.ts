import { Component, HostBinding, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-shopping-cart-icon",
  templateUrl: "./shopping-cart-icon.component.html",
  styleUrls: ["./shopping-cart-icon.component.scss"],
})
export class ShoppingCartIconComponent implements OnInit {
  @Input() iconPlacement: string;
  placementClass: string;
  @Input() iconSize: string;
  @HostBinding("style.--icon-size") private cssIconSize: string;

  ngOnInit(): void {
    this.placementClass = `iconColor--${this.iconPlacement}`;
    this.cssIconSize = this.iconSize;
  }
}
