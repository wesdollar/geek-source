import { Component, HostBinding, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  @Input() bottomBorderColor: string;
  @HostBinding("style.--box-bottom-line") private boxBottomLineColor: string;
  @Input() backgroundColor: string;
  @HostBinding("style.--box-background") private boxBackgroundColor: string;
  @Input() textColor: string;
  @HostBinding("style.--box-text") private boxTextColor: string;

  constructor() {}

  ngOnInit(): void {
    this.boxBottomLineColor = this.bottomBorderColor;
    this.boxBackgroundColor = this.backgroundColor;
    this.boxTextColor = this.textColor;
  }
}
