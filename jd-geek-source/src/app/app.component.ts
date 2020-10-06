import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { colors } from '../constants/color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: []
})
export class AppComponent {
  title = 'jd-geek-source';
  message = ''


}
