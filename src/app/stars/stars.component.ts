import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {


  //数值由父组件传递
  @Input()
  public rating: number = 0;
  //xxxChange,这样写输出属性，才能使用[(xxxChange)]做双向绑定
  @Output()
  public ratingChange: EventEmitter<number> = new EventEmitter();

  public stars: boolean[];
  //是否可以点
  @Input()
  public readonly: boolean = true;

  constructor() {
  }

  ngOnInit() {
    // this.stars = [true, true, false, true, true];

  }

  //变化检测钩子
  ngOnChanges(changes: SimpleChanges) {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  clickStar(i: number) {
    if (!this.readonly){
      this.rating = i + 1;
      this.ratingChange.emit(this.rating);
    }
  }
}
