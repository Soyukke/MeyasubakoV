import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-addselectlist',
  templateUrl: './addselectlist.component.html',
  styleUrls: ['./addselectlist.component.css']
})
export class AddselectlistComponent implements OnInit {
  value : string;
  @Input() texts : string[];
  constructor() {
    this.texts = [];
    this.value = 'hoge';
  }

  ngOnInit(): void {
  }

  /**
   * 追加でvalueを選択リストの候補に追加する
   */
  onClick() {
    console.log(this.texts);
    console.log(this.value);
    this.texts.push(this.value);
  }

}
