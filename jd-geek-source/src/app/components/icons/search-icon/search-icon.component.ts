import { Component, OnInit } from "@angular/core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-search-icon",
  templateUrl: "./search-icon.component.html",
  styleUrls: ["./search-icon.component.scss"],
})
export class SearchIconComponent implements OnInit {
  faSearch = faSearch;

  constructor() {}

  ngOnInit(): void {
  }

}
