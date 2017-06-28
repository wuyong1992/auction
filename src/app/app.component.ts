//引入装饰器
import { Component } from '@angular/core';

//装饰器定义了一个组件以及元数据
@Component({
  //CSS选择器，可以通过html中的标签调用
  selector: 'app-root',
  //模板，将要调用的模板在app-root标签位置展示
  templateUrl: './app.component.html',
  //模板文件中要用到的css样式
  styleUrls: ['./app.component.css']
})
//ts类
/**
 *定义了该组件的控制器
 *（被装饰器装饰的ts类，包含所有跟模板有关的属性和方法，与页面大部分相关的逻辑都写在控制器中）
 */
export class AppComponent {
  title = 'app';

  test(){

  }
}
