import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Comment, Product, ProductService} from "../shared/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product: Product;
  public comments: Comment[];

  public isCommentHidden: boolean = true;
  //最新评论
  newRating: number = 5;
  newComment: string = "";

  constructor(private routerInfo: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit() {
    let productId: number = this.routerInfo.snapshot.params['productId'];
    this.product = this.productService.getProductById(productId);
    this.comments = this.productService.getCommentsByProductId(productId);
  }

  addComment() {
    let comment = new Comment(0, this.product.id, new Date().toISOString(), "someone", this.newRating, this.newComment);
    this.comments.unshift(comment);

    //求和，0是sum的初始值，comments是循环的对象,comment是每次循环索要执行的对象
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    //求平均值
    this.product.rating = sum / this.comments.length;
    //充值表单
    this.newComment = "";
    this.newRating = 5;
    this.isCommentHidden = true;
  }

}
