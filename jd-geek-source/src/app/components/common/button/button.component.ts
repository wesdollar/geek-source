import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Input() buttonType;
  @Input() buttonClass;
  @Input() buttonText;
  @Input() buttonLink;
  constructor() {}

  ngOnInit(): void {}
}
