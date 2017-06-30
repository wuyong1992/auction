import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from "../shared/product.service";
import {FormControl} from "@angular/forms";
import "rxjs/Rx";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: Product[];
  public keyword: string;

  public titleFilter: FormControl = new FormControl();

  constructor(private productService: ProductService) {
    //停止输入500ms后触发
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
        value => this.keyword =value,
    );
  }

  //组件被实例化时被调用一次初始化数据
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}



