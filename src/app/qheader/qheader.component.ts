import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-qheader',
  templateUrl: './qheader.component.html',
  styleUrls: ['./qheader.component.css']
})
export class QheaderComponent implements OnInit {
  @Input() title;
  @Output() changeTitle = new EventEmitter<string>();
  onChangeTitle(title) {
    console.log('onChangeTitle: ', title);
    this.title = title;
    this.changeTitle.emit(this.title);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
