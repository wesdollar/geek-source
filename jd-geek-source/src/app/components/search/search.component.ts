import { Component, OnInit } from '@angular/core';
import { colors } from '../../../constants/color';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById("searchproducts").setAttribute("style", "placeholder:" + colors.secondary);
  }

}
