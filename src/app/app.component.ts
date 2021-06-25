import { Component } from '@angular/core';
// ComponentItemをImportする
import { ComponentItem } from '../app/copycomponent/copycomponent.component'

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
  icomps;
  constructor() {
    const c1 = new ComponentItem(1, 1, false);
    const c2 = new ComponentItem(2, 2, false);
    const c3 = new ComponentItem(3, 3, false);
    this.icomps = [c1, c2, c3];
  }

  /**
   * 保存ボタン押下時の処理
   */
  saveForm() {
    console.log('保存押下');
    console.log(this.icomps);
  }
}
