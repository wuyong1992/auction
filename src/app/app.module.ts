import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {SearchComponent} from './search/search.component';
import {CarouselComponent} from './carousel/carousel.component';
import {ProductComponent} from './product/product.component';
import {StarsComponent} from './stars/stars.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {HomeComponent} from './home/home.component';
import {Router, RouterModule, Routes} from "@angular/router";
import {ProductService} from "./shared/product.service";

const routeConfig: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "product/:productId",
    component: ProductDetailComponent
  }
];


//声明模块
@NgModule({
  //声明模块中有什么东西，这个元数据中只能声明组件和管道
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent
  ],
  //声明组件正常运转还需要什么模块
  imports: [
    //比选，浏览器模块
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  //声明模块中提供什么服务
  providers: [ProductService],
  //声明模块的主组件
  bootstrap: [AppComponent]
})
export class AppModule {
}
