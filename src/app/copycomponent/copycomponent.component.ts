import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-copycomponent',
  templateUrl: './copycomponent.component.html',
  styleUrls: ['./copycomponent.component.css']
})
export class CopycomponentComponent implements OnInit {
  @Input() componentlist;

  components = [
    "<app-checkbox></app-checkbox>",
  "<app-inputform></app-inputform>",
  "<app-selectlist></app-selectlist>"
  ];

  constructor() {
    console.log("CopycomponentComponent", this.componentlist);
  }

  ngOnInit(): void {
  }

  drop(event : any) {
    if (event.previousContainer === event.container) {
      console.log('drop item to same list ', event.container.data);
      console.log('drop item to same list ', event.previousIndex);
      console.log('drop item to same list ', event.currentIndex);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
