import { Component, Input } from "@angular/core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-free-tech-support-icon",
  template: "<fa-icon [size]='iconSize' [icon]='faHeadset'></fa-icon>",
  styleUrls: ["./free-tech-support-icon.component.scss"],
})
export class FreeTechSupportIconComponent {
  @Input() iconSize: SizeProp;
  faHeadset = faHeadset;
}
