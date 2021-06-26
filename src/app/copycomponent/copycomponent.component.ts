import { Component, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';
import { InputformComponent } from '../inputform/inputform.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { SelectlistComponent } from '../selectlist/selectlist.component';

type FormComponent = InputformComponent | CheckboxComponent | SelectlistComponent

/**
 * コンポーネントアイテムのメタ情報
 * index: コンポーネントのindex
 * ctype: コンポーネントのタイプ
 * 各コンポーネントの持つ変数を保持しているが，別の方法が良い．
 * 
 */
export class ComponentItem {
  index: number;
  ctype: number;
  isCheck: boolean;
  candidates: string[];
  title: string;
  constructor(index: number, ctype: number, isCheck: boolean) {
    this.index = index;
    this.ctype = ctype;
    this.isCheck = isCheck;
    this.candidates = ['りんご', 'バナナ', 'スイカ', 'ぶどう'];
    this.title = '';
  }
}

@Component({
  selector: 'app-copycomponent',
  templateUrl: './copycomponent.component.html',
  styleUrls: ['./copycomponent.component.css']
})

export class CopycomponentComponent implements OnInit {
  // コンポーネントリスト
  cs: FormComponent[];
  // コンポーネントリスト
  @Input() icomps: ComponentItem[];
  @Input() componentlist;

  components = [
    '1',
    '2',
    '3'
  ];

  constructor() {
    console.log("CopycomponentComponent", this.componentlist);
  }

  ngOnInit(): void {
  }

  drop(event: any) {
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
      // コンポーネントを追加する．
      this.icomps.push(item);
    }
  }

  myTrackBy(index, icomp) {
    return icomp.index;
  }
}
