import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectlist',
  templateUrl: './selectlist.component.html',
  styleUrls: ['./selectlist.component.css']
})
export class SelectlistComponent implements OnInit {
  @Input() candidates;

  constructor() { }

  ngOnInit(): void {
  }

}
