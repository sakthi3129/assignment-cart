import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.sass']
})
export class SortComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sortLowToHeigh(){return null;}
  SortHighToLow(){return null;}
  sortDiscount(){return null;}
}
