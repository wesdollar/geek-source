import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.services';

@Component({
  selector: 'app-test-diplay',
  templateUrl: './test-diplay.component.html',
  styleUrls: ['./test-diplay.component.css'],
  animations: [
    trigger("slideInOut", [
      transition(":enter", [
        style({ transform: "translateX(-100%)" }),
        animate("500ms ease-in", style({ transform: "translateX(0%)" }))
      ])
    ])
  ]
})
export class TestDiplayComponent implements OnInit {

  testResults = null;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.apiService.getTestData().subscribe(
      Response =>
    )
  }

}
