import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem} from '@angular/cdk/drag-drop';
import { InputformComponent } from '../inputform/inputform.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { SelectlistComponent } from '../selectlist/selectlist.component';

type FormComponent = InputformComponent|CheckboxComponent|SelectlistComponent

  /**
 * Component
 */
class ComponentItem {
  index : number;
  ctype : number;
  isCheck : boolean;
  constructor(index:number, ctype:number, isCheck:boolean) {
    this.index = index;
    this.ctype = ctype;
    this.isCheck = isCheck;
  }
}

@Component({
  selector: 'app-copycomponent',
  templateUrl: './copycomponent.component.html',
  styleUrls: ['./copycomponent.component.css']
})

export class CopycomponentComponent implements OnInit {
  // コンポーネントリスト
  cs : FormComponent[];
  icomps : ComponentItem[];
  @Input() componentlist;

  components = [
    '1',
    '2',
    '3'
  ];

  constructor() {
    console.log("CopycomponentComponent", this.componentlist);
    const c1 = new ComponentItem(1, 1, false);
    const c2 = new ComponentItem(2, 2, false);
    const c3 = new ComponentItem(3, 3, false);
    this.icomps = [c1, c2, c3];
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
      // type conversion
      console.log(event.container.data, event.currentIndex);
      const item = new ComponentItem(1, parseInt(event.previousContainer.data[event.previousIndex]), false);
      console.log(item);
      this.icomps.push(item);
      // copyArrayItem(
      //   event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex
      // );
    }
  }
}