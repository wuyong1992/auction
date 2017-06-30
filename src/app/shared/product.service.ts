import {Injectable} from '@angular/core';
/**
 * 封装与商品有关的信息服务
 */
@Injectable()
export class ProductService {

  //声明一个数组，来存储将要展现的商品的数据
  public products: Product[] = [
    new Product(1, "第一个商品", 1.99, 3.5, "这是第一个商品，是我angular的第一个产品", ["电子产品", "硬件"]),
    new Product(2, "第二个商品", 1.99, 1.5, "这是第二个商品，是我angular的第一个产品", ["电子产品", "硬件"]),
    new Product(3, "第三个商品", 1.99, 2.5, "这是第三个商品，是我angular的第一个产品", ["电子产品", "软件"]),
    new Product(4, "第四个商品", 1.99, 4.5, "这是第四个商品，是我angular的第一个产品", ["服装", "硬件"]),
    new Product(5, "第五个商品", 1.99, 2.5, "这是第五个商品，是我angular的第一个产品", ["零食", "硬件"]),
    new Product(6, "第六个商品", 1.99, 4.5, "这是第六个商品，是我angular的第一个产品", ["数码", "硬件"])
  ];

  public comments: Comment[] = [
    new Comment(1, 1, "2017-06-28", "zhang", 3, "还不错哟"),
    new Comment(2, 1, "2017-01-28", "li", 4, "还不错哟"),
    new Comment(3, 1, "2017-02-28", "han", 2, "还不错哟"),
    new Comment(4, 2, "2017-03-28", "mei", 5, "还不错哟"),
    new Comment(5, 3, "2017-04-28", "lei", 2, "还不错哟"),
    new Comment(6, 4, "2017-05-28", "liu", 3, "还不错哟"),
  ];

  constructor() {
  }

  //获取所有商品
  getProducts(): Product[] {
    return this.products;
  }

  /**
   * 根据id返回该商品的信息
   * @param id
   * @returns {undefined|Product}
   */
  getProductById(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsByProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }

}

//定义对象
export class Product {
  //构造函数
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public category: Array<string>) {
  }
}

//声明一个类封装评论信息
export class Comment {

  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string) {
  }
}
