import { Component, HostBinding, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-sectionheader",
  templateUrl: "./sectionheader.component.html",
  styleUrls: ["./sectionheader.component.scss"],
})
export class SectionheaderComponent implements OnInit {
  @Input() titleText: string;
  @Input() fontSize: string;
  @HostBinding("style.--font-size") private cssFontSize: string;

  @Input() featureStyle: string;
  @Input() textStyle: string;
  smallRectStyle: string;
  textStyling: string;

  ngOnInit(): void {
    this.cssFontSize = this.fontSize;
    this.smallRectStyle = `smallrect--${this.featureStyle}`;
    this.textStyling = `productTitle--${this.textStyle}`;
  }
}
