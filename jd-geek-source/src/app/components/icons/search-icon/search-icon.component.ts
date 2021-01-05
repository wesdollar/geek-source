import { Component } from "@angular/core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-search-icon",
  template: "<fa-icon class='iconSize' [icon]='faSearch'></fa-icon>",
  styleUrls: ["./search-icon.component.scss"],
})
export class SearchIconComponent {
  faSearch = faSearch;
}
