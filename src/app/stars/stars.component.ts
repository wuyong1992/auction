import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  //数值由父组件传递
  @Input()
  public rating: number = 0;

  public stars: boolean[];

  constructor() {
  }

  ngOnInit() {
    // this.stars = [true, true, false, true, true];
    this.stars=[];
    for (let i = 1;i<=5;i++) {
      this.stars.push(i > this.rating);
    }
  }
}
