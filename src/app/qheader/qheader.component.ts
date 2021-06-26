import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-qheader',
  templateUrl: './qheader.component.html',
  styleUrls: ['./qheader.component.css']
})
export class QheaderComponent implements OnInit {
  @Input() title;
  constructor() { }

  ngOnInit(): void {
  }

}
