import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  @Input() componentPlacement: string;
  searchArea: string;
  searchBox: string;

  ngOnInit(): void {
    this.searchBox = `searchBox--${this.componentPlacement}`;
    this.searchArea = `searchBoxArea--${this.componentPlacement}`;
  }
}
