import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MeyasubakoV';
  componentList = [
    '1',
    '2',
    '3'
  ];
  constructor() {
  }
}
