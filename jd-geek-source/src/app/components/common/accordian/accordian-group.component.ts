import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "group",
  template: `
    <div class="mypanel">
      <div class="title" (click)="toggle.emit()">
        {{ title }}
      </div>
      <div class="body" [ngClass]="{ hidden: !opened }">
        <ng-content></ng-content>
      </div>
      <div></div>
    </div>
  `,
  styleUrls: ["../accordian/accordian.component.scss"],
})
export class AccordianGroupComponent {
  @Input() opened = false;
  @Input() title: string;
  @Output() toggle: EventEmitter<unknown> = new EventEmitter<unknown>();

  printTitle(): void {
    console.log(this.title);
  }
}
