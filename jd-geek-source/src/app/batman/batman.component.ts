import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batman',
  templateUrl: './batman.component.html',
  styleUrls: ['./batman.component.css']
})
export class BatmanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  portraitWidth: number = 200;
  portraitMargin: number = 5;
  pageObjects: any =
    {
      "justSaying" : "I'm Batman",
      "personName" : "Jim Davis",
      "selfPortrait" : "../../assets/images/batman_me.png"
    }

}
