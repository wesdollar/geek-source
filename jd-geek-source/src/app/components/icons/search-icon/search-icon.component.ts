import { Component, Input } from "@angular/core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-search-icon",
  template: "<fa-icon [size]='iconSize' [icon]='faSearch'></fa-icon>",
  styleUrls: ["./search-icon.component.scss"],
})
export class SearchIconComponent {
  @Input() iconSize: SizeProp;
  faSearch = faSearch;
}
