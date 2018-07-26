webpackJsonp([1],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_products__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_product_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_core_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {BannerService} from "../../service/banner.service";



var HomePage = (function () {
    function HomePage(navCtrl, 
        // private bannerService: BannerService,
        coreService, modalCtrl, productService) {
        this.navCtrl = navCtrl;
        this.coreService = coreService;
        this.modalCtrl = modalCtrl;
        this.productService = productService;
        this.last = false;
    }
    HomePage.prototype.ngOnInit = function () {
        // this.getBanners();
        this.getProduct('', 1);
    };
    HomePage.prototype.user = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
    };
    HomePage.prototype.getItems = function (event) {
        this.getProduct(this.keywords || '', 1);
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.productService.httpProductFilter({
            keywords: '',
            page: 1
        }).subscribe(function (data) {
            if (data.code == 0) {
                _this.products = data.data;
                if (_this.infiniteScroll) {
                    _this.infiniteScroll.enable(true);
                }
                _this.products.map(function (item) {
                    item.image = _this.coreService.domain + item.banner.path;
                });
                refresher.complete();
            }
        });
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        var page = 1;
        page++;
        this.infiniteScroll = infiniteScroll;
        this.productService.httpProductFilter({
            keywords: this.keywords || '',
            page: page
        }).subscribe(function (data) {
            if (data.code == 0) {
                _this.last = data.isLast;
                _this.products = _this.products.concat(data.data);
                _this.products.concat(data.data);
                _this.products.map(function (item) {
                    item.image = _this.coreService.domain + item.banner.path;
                });
                infiniteScroll.complete();
                if (_this.last) {
                    infiniteScroll.enable(false);
                }
            }
        });
    };
    // getBanners() {
    //     this.bannerService.httpGetBanner().subscribe(data => {
    //         if (data.code == 0) {
    //             this.banners = data.data;
    //             this.banners.map(item => {
    //                 item.image = this.coreService.domain + item.banner.path;
    //             })
    //         }
    //     });
    // }
    HomePage.prototype.getProduct = function (keywords, page) {
        var _this = this;
        this.productService.httpProductFilter({
            keywords: keywords,
            page: page
        }).subscribe(function (data) {
            if (data.code == 0) {
                _this.products = data.data;
                _this.products.map(function (item) {
                    item.image = _this.coreService.domain + item.banner.path;
                });
            }
        });
    };
    HomePage.prototype.goProduct = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__products_products__["a" /* ProductsPage */]);
        modal.present();
    };
    HomePage.prototype.goToShopping = function () {
        this.navCtrl.parent.select(1);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar style="opacity: 0.85" no-border-bottom color="primary">\n            <ion-item color="primary">\n                <div item-start>盈垦</div>\n                <ion-searchbar [(ngModel)]="keywords" (ionInput)="getItems($event)" placeholder="输入要搜索的关键字"></ion-searchbar>\n                <i class="iconfont icon-name user" item-end (click)="user()"></i>\n            </ion-item>\n    </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-down"\n            pullingText="下拉刷新页面"\n            refreshingSpinner="circles"\n            refreshingText="数据加载中..."\n        ></ion-refresher-content>\n    </ion-refresher>\n    <!--<ion-slides pager>-->\n        <!--<ion-slide *ngFor="let banner of banners">-->\n            <!--<img src="{{banner.image}}" class="slide-image"/>-->\n        <!--</ion-slide>-->\n    <!--</ion-slides>-->\n\n    <ion-grid class="home-list">\n\n        asdasdasdas\n        <ion-row padding-vertical>\n            <!--<ion-col col-4>-->\n                <!--<button color="primary" (click)="user()">-->\n                    <!--<i class="iconfont icon-menuordericon"></i>-->\n                    <!--<div>我的订单</div>-->\n                <!--</button>-->\n            <!--</ion-col>-->\n            <ion-col col-6>\n                <button (click)="goProduct()">\n                    <i class="iconfont icon-mall_fill"></i>\n                    <div>开始订购</div>\n                </button>\n            </ion-col>\n            <ion-col col-6>\n                <button (click)="goToShopping()">\n                    <i class="iconfont icon-points"></i>\n                    <div>积分商城</div>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <!--<ion-row class="order-btn" padding>-->\n        <!--<button ion-button block color="primary" (click)="goProduct()">-->\n            <!--开始订购-->\n            <!--<ion-icon name="arrow-dropright"></ion-icon>-->\n        <!--</button>-->\n    <!--</ion-row>-->\n\n    <div class="product-list">\n        <ion-list no-padding>\n            <ion-item no-padding *ngFor="let product of products" (click)="goProduct()">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col col-3><img src="{{product.image}}" width="80" height="80"></ion-col>\n                        <ion-col col-9>\n                            <h2 class="product-title">{{product.name}}</h2>\n                            <p text-right class="price"><i>￥{{product.price}}</i>/<span class="f12">{{product.unit}}</span></p>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-item>\n        </ion-list>\n    </div>\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content\n            loadingSpinner="bubbles"\n            loadingText="加载更多中..."\n        ></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__service_core_service__["a" /* CoreService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__service_product_service__["a" /* ProductService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=1.js.map