import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { colors } from '../../../constants/color';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById("headerbar").setAttribute("style", "background-color:" + colors.white);
    document.getElementById("bottomheader").setAttribute("style", "background-color:" + colors.secondary);
  }

}
