webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VersionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VersionPage = (function () {
    function VersionPage(navCtrl, appVersion, navParams) {
        this.navCtrl = navCtrl;
        this.appVersion = appVersion;
        this.navParams = navParams;
    }
    VersionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.appVersion.getAppName().then(function (v) {
            _this.appName = v;
        });
        this.appVersion.getPackageName().then(function (v) {
            _this.packageName = v;
        });
        this.appVersion.getVersionCode().then(function (v) {
            _this.versionCode = v;
        });
        this.appVersion.getVersionNumber().then(function (v) {
            _this.versionNumber = v;
        });
    };
    return VersionPage;
}());
VersionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-version',template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/pages/version/version.html"*/'<!--\n  Generated template for the VersionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>版本信息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <!--<ion-item>-->\n            <!--{{appName}}-->\n        <!--</ion-item>-->\n        <!--<ion-item>-->\n            <!--{{packageName}}-->\n        <!--</ion-item>-->\n        <!--<ion-item>-->\n            <!--{{versionCode}}-->\n        <!--</ion-item>-->\n        <ion-item>\n            {{versionNumber}}\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/pages/version/version.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], VersionPage);

//# sourceMappingURL=version.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "现代农业智慧农村",
                description: "广西盈垦现代",
                img: "assets/welcome.jpeg"
            }
        ];
    }
    WelcomePage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/pages/welcome/welcome.html"*/'<ion-slides pager>\n    <ion-slide *ngFor="let slide of slides" color="primary">\n        <ion-toolbar>\n            <ion-buttons end>\n                <button ion-button (click)="goToHome()" class="skip-btn" color="primary">跳过</button>\n            </ion-buttons>\n        </ion-toolbar>\n        <img [src]="slide.img" class="slide-image"/>\n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n        <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide color="primary">\n        <ion-toolbar>\n        </ion-toolbar>\n        <!--<img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>-->\n        <!--<h2 class="slide-title">Ready to Play?</h2>-->\n        <button ion-button large clear icon-end (click)="goToHome()" class="welcome-btn">\n            开启体验\n            <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n    </ion-slide>\n</ion-slides>\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/pages/welcome/welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__check_orders_check_orders__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_core_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_product_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__confirm_order_confirm_order__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_order_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import {NotificationService} from "../../service/notification.service";
var ProductsPage = (function () {
    function ProductsPage(modalCtrl, coreService, navCtrl, viewCtrl, storage, orderService, 
        // private notificationService: NotificationService,
        productService) {
        this.modalCtrl = modalCtrl;
        this.coreService = coreService;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.orderService = orderService;
        this.productService = productService;
        this.show = false;
        this.orders = [];
        this.num = 0;
        this.sum = 0;
        this.noLogin = true;
        this.logined = false;
        this.getProduct();
    }
    ProductsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            if (val != null) {
                _this.noLogin = false;
                _this.logined = true;
                _this.userId = val;
            }
        });
    };
    ProductsPage.prototype.getProduct = function () {
        var _this = this;
        this.productService.httpGetProductAll().subscribe(function (data) {
            if (data.code == 0) {
                _this.products = data.data;
                _this.products.map(function (item) {
                    item.image = _this.coreService.domain + item.banner.path;
                    item.orderNum = 0;
                });
            }
        });
    };
    ProductsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProductsPage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */]);
    };
    ProductsPage.prototype.presentModal = function () {
        var _this = this;
        if (!this.show) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__check_orders_check_orders__["a" /* CheckOrdersPage */], {
                productList: this.orders,
                num: this.num,
                sum: this.sum
            }, {
                showBackdrop: true
            });
            modal.onDidDismiss(function (data) {
                _this.show = data.show;
                _this.orders = data.orders;
                _this.num = data.num;
                _this.sum = data.sum;
            });
            modal.present();
            this.show = true;
        }
    };
    ProductsPage.prototype.chooseProduct = function (product) {
        var order = new Order(product, 1);
        var isExist = JSON.stringify(this.orders).indexOf(order.product._id) != -1;
        if (!isExist) {
            this.orders.push(product);
        }
        var n = 0, p = 0;
        for (var i = 0; i < this.orders.length; i++) {
            n += this.orders[i].orderNum;
            p += this.orders[i].orderNum * this.orders[i].price;
        }
        this.num = n;
        this.sum = p;
    };
    ProductsPage.prototype.selectPayWay = function () {
        this.postOrder();
    };
    ProductsPage.prototype.postOrder = function () {
        var _this = this;
        if (this.orders.length > 0) {
            this.orderService.httpPostOrder({
                products: JSON.stringify(this.orders),
                sumPrice: this.sum,
                customer: this.userId
            }).subscribe(function (res) {
                if (res.code == 0) {
                    _this.sn = res.data.sn;
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__confirm_order_confirm_order__["a" /* ConfirmOrderPage */], {
                        products: JSON.stringify(_this.orders),
                        sn: res.data.no,
                        orderNo: res.data.sn
                    });
                }
            });
            // 测试
            // let businessOpts = {
            //     content: '您的订单：' + 'YK1524737681983' + ' 己经生成，我们会尽快为您发货！非常感谢您的订购，祝生活愉快！电话咨询：18078660058',
            //     from: this.userId, // 管理员ID
            //     to: this.userId
            // }
            // this.userOrderNotification(businessOpts);
        }
    };
    /**
     * 搜索
     */
    ProductsPage.prototype.getItems = function () {
        var _this = this;
        this.productService.httpProductFilter({
            keywords: this.keywords,
            page: 1
        }).subscribe(function (data) {
            if (data.code == 0) {
                _this.products = data.data;
                _this.products.map(function (item) {
                    item.image = _this.coreService.domain + item.banner.path;
                });
            }
        });
    };
    return ProductsPage;
}());
ProductsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-products',template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/pages/products/products.html"*/'<ion-header>\n\n    <ion-navbar no-border-bottom color="primary">\n        <ion-title>选购</ion-title>\n        <button ion-button clear (click)="dismiss()">\n            <span ion-text showWhen="ios" class="white">取消</span>\n            <ion-icon name="md-close" showWhen="android" class="white"></ion-icon>\n        </button>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content fullscreen>\n    <div *ngIf="noLogin">\n        <p text-center class="nologin-tips">您还没有登录，请登录后再购买商品</p>\n        <div text-center>\n            <button ion-button small (click)="goToLogin()">立即登录</button>\n        </div>\n    </div>\n    <div *ngIf="logined">\n        <ion-item color="primary">\n            <ion-searchbar (input)="getItems($event)" placeholder="输入要搜索的关键字" [(ngModel)]="keywords"></ion-searchbar>\n        </ion-item>\n        <!--<ion-slides pager>-->\n            <!--<ion-slide *ngFor="let banner of banners">-->\n                <!--<img src="{{banner.image}}" class="slide-image" height="100"/>-->\n            <!--</ion-slide>-->\n        <!--</ion-slides>-->\n        <div class="product-list">\n            <ion-list no-padding>\n                <ion-item no-padding *ngFor="let product of products">\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col col-3><img src="{{product.image}}" width="80" height="80"></ion-col>\n                            <ion-col col-9>\n                                <h2 text-left class="product-name">{{product.name}}</h2>\n                                <p text-right class="price"><i>￥{{product.price}}</i>/<b>{{product.unit}}</b></p>\n                                <p text-right>\n                                    <num-count [(ngModel)]="product.orderNum" (click)="chooseProduct(product)"></num-count>\n                                </p>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer *ngIf="logined">\n    <ion-item color="light" [style.opacity]="num > 0 ? 1 : 0.75" class="selected-bar">\n        <ion-badge item-start>{{num}}</ion-badge>\n        <div *ngIf="num == 0">还未选购商品</div>\n        <div (tap)="presentModal()" *ngIf="num > 0">\n            ￥<i class="price">{{sum}}</i>元\n            <p class="tips" *ngIf="num > 0">点击查看订单查情</p>\n        </div>\n        <button ion-button item-end [disabled]="num == 0" (click)="selectPayWay()" class="go-pay">去结算</button>\n    </ion-item>\n</ion-footer>\n\n\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/pages/products/products.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__service_core_service__["a" /* CoreService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_8__service_order_service__["a" /* OrderService */],
        __WEBPACK_IMPORTED_MODULE_4__service_product_service__["a" /* ProductService */]])
], ProductsPage);

var Order = (function () {
    function Order(product, num) {
        this.product = product;
        this.num = num;
    }
    return Order;
}());
//# sourceMappingURL=products.js.map

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 131;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		174
	],
	"../pages/check-orders/check-orders.module": [
		175
	],
	"../pages/code-detail/code-detail.module": [
		176
	],
	"../pages/confirm-order/confirm-order.module": [
		178
	],
	"../pages/home/home.module": [
		321,
		1
	],
	"../pages/login/login.module": [
		187
	],
	"../pages/notification/notification.module": [
		322,
		0
	],
	"../pages/orders/orders.module": [
		188
	],
	"../pages/products/products.module": [
		190
	],
	"../pages/profile/profile.module": [
		189
	],
	"../pages/search/search.module": [
		193
	],
	"../pages/shopping/shopping.module": [
		191
	],
	"../pages/tabs/tabs.module": [
		195
	],
	"../pages/user-address/user-address.module": [
		197
	],
	"../pages/user-name/user-name.module": [
		198
	],
	"../pages/version/version.module": [
		196
	],
	"../pages/welcome/welcome.module": [
		199
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 173;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    return AboutPageModule;
}());
AboutPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
        ],
    })
], AboutPageModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOrdersPageModule", function() { return CheckOrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__check_orders__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckOrdersPageModule = (function () {
    function CheckOrdersPageModule() {
    }
    return CheckOrdersPageModule;
}());
CheckOrdersPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__check_orders__["a" /* CheckOrdersPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__check_orders__["a" /* CheckOrdersPage */]),
        ],
    })
], CheckOrdersPageModule);

//# sourceMappingURL=check-orders.module.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeDetailPageModule", function() { return CodeDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_detail__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CodeDetailPageModule = (function () {
    function CodeDetailPageModule() {
    }
    return CodeDetailPageModule;
}());
CodeDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__code_detail__["a" /* CodeDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__code_detail__["a" /* CodeDetailPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
    })
], CodeDetailPageModule);

//# sourceMappingURL=code-detail.module.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__num_count_num_count__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__code_detail_code_detail__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__num_count_num_count__["a" /* NumCountComponent */],
            __WEBPACK_IMPORTED_MODULE_3__code_detail_code_detail__["a" /* CodeDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__num_count_num_count__["a" /* NumCountComponent */],
            __WEBPACK_IMPORTED_MODULE_3__code_detail_code_detail__["a" /* CodeDetailComponent */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmOrderPageModule", function() { return ConfirmOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_order__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmOrderPageModule = (function () {
    function ConfirmOrderPageModule() {
    }
    return ConfirmOrderPageModule;
}());
ConfirmOrderPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__confirm_order__["a" /* ConfirmOrderPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirm_order__["a" /* ConfirmOrderPage */]),
        ],
    })
], ConfirmOrderPageModule);

//# sourceMappingURL=confirm-order.module.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_core_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PayProvider = (function () {
    function PayProvider(http, coreService) {
        this.http = http;
        this.coreService = coreService;
    }
    PayProvider.prototype.postPayInfo = function (request) {
        return this.http.get(this.coreService.domain + '/api/pay_info?subject=' + request.subject + '&body=' + request.body + '&amount=' + request.amount + '&outTradeId=' + request.outTradeId)
            .map(function (res) { return res.json(); });
    };
    PayProvider.prototype.queryOrder = function (sn, tradeId) {
        return this.http.get(this.coreService.domain + '/api/query_order?sn=' + sn + '&trade_id=' + tradeId)
            .map(function (res) { return res.json(); });
    };
    PayProvider.prototype.postWxPay = function (request) {
        return this.http.post(this.coreService.domain + '/api/wx_pay/order', request)
            .map(function (res) { return res.json(); });
    };
    return PayProvider;
}());
PayProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__service_core_service__["a" /* CoreService */]])
], PayProvider);

//# sourceMappingURL=pay.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoreService = (function () {
    function CoreService() {
        //接口基地址
        // 线上
        this.domain = 'http://admin.gxyingken.com';
        //线下 （用nginx模拟本地api服务，就可以真机调试，详见business_api.conf，这样就可以用本地IP访问了）
        // public domain = 'http://192.168.1.102';
        //接口地址
        this.API = {
            getBanner: '/api/web/banners',
            getProducts: '/api/productList',
            verifyCode: '/api/verifyCode',
            profile: '/api/profile',
            login: '/api/user/login',
            upload: '/api/upload',
            uploadAvatar: '/api/upload/avatar',
            products: '/api/web/productList',
            saveProfile: '/api/saveProfile',
            search: '/api/products/list',
            orderAdd: '/api/order/add',
            orderList: '/api/order/list',
            updateOrder: '/api/order/confirm_order',
            userNotificationList: '/api/notification',
            delUserNotification: '/api/notification/delete',
            readUserNotification: '/api/notification/read',
            unReadUserNotification: '/api/notification/unread'
        };
    }
    return CoreService;
}());
CoreService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CoreService);

//# sourceMappingURL=core.service.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ImageService = (function () {
    function ImageService(actionSheetCtrl, camera, imagePicker, utilService, transfer) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.utilService = utilService;
        this.transfer = transfer;
        // 调用相机时传入的参数
        this.cameraOpt = {
            quality: 50,
            destinationType: 1,
            sourceType: 1,
            encodingType: 0,
            mediaType: 0,
            allowEdit: true,
            correctOrientation: true
        };
        // 调用相册时传入的参数
        this.imagePickerOpt = {
            maximumImagesCount: 1,
            width: 800,
            height: 800,
            quality: 80
        };
        this.upload = {
            url: '',
            fileKey: 'file',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' //不加入 发生错误！！
            },
            params: {},
            success: function (data) {
            },
            error: function (err) { },
            listen: function () { } //监听上传过程
        };
        this.fileTransfer = this.transfer.create();
    }
    ImageService.prototype.showPicActionSheet = function () {
        this.useASComponent();
    };
    // 使用ionic中的ActionSheet组件
    ImageService.prototype.useASComponent = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '选择头像',
            buttons: [
                {
                    text: '拍照',
                    handler: function () {
                        _this.startCamera();
                    }
                },
                {
                    text: '从手机相册选择',
                    handler: function () {
                        _this.openImgPicker();
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    // 启动拍照功能
    ImageService.prototype.startCamera = function () {
        var _this = this;
        this.camera.getPicture(this.cameraOpt).then(function (imageData) {
            _this.uploadImg(imageData);
        }, function (err) {
            _this.utilService.toast('提示: 未选择图片'); //错误：无法使用拍照功能！
        });
    };
    // 打开手机相册
    ImageService.prototype.openImgPicker = function () {
        var _this = this;
        var temp = '';
        this.imagePicker.getPictures(this.imagePickerOpt)
            .then(function (results) {
            for (var i = 0; i < results.length; i++) {
                temp = results[i];
            }
            _this.uploadImg(temp);
        }, function (err) {
            _this.utilService.toast('提示: 未选择图片'); //错误：无法从手机相册中选择图片！
        });
        /*let str = '{"status":1,"msg":"提示：图片上传成功！","data":"http:\/\/192.168.1.20\/image\/580af6bcc4d40580af6bcc4d45.jpg"}';
        let res = JSON.parse(str);
        this.upload.success(res);*/
    };
    // 上传图片
    ImageService.prototype.uploadImg = function (path) {
        var _this = this;
        if (!path) {
            return;
        }
        var options = {
            fileKey: this.upload.fileKey,
            headers: this.upload.headers,
            params: this.upload.params
        };
        this.fileTransfer.upload(path, this.upload.url, options)
            .then(function (data) {
            if (_this.upload.success) {
                _this.upload.success(JSON.parse(data.response));
            }
        }, function (err) {
            if (_this.upload.error) {
                _this.upload.error(err);
            }
            else {
                _this.utilService.toast('错误：上传失败！');
            }
        });
    };
    // 停止上传
    ImageService.prototype.stopUpload = function () {
        if (this.fileTransfer) {
            this.fileTransfer.abort();
        }
    };
    return ImageService;
}());
ImageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
        __WEBPACK_IMPORTED_MODULE_5__util_service__["a" /* UtilService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */]])
], ImageService);

//# sourceMappingURL=image.service.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrdersPageModule = (function () {
    function OrdersPageModule() {
    }
    return OrdersPageModule;
}());
OrdersPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]),
        ],
    })
], OrdersPageModule);

//# sourceMappingURL=orders.module.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    return ProfilePageModule;
}());
ProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
        ],
    })
], ProfilePageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductsPageModule = (function () {
    function ProductsPageModule() {
    }
    return ProductsPageModule;
}());
ProductsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
    })
], ProductsPageModule);

//# sourceMappingURL=products.module.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingPageModule", function() { return ShoppingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShoppingPageModule = (function () {
    function ShoppingPageModule() {
    }
    return ShoppingPageModule;
}());
ShoppingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__shopping__["a" /* ShoppingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shopping__["a" /* ShoppingPage */]),
        ],
    })
], ShoppingPageModule);

//# sourceMappingURL=shopping.module.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_product_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_core_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__code_detail_code_detail__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShoppingPage = (function () {
    function ShoppingPage(navCtrl, productService, coreService, storage, navParams) {
        this.navCtrl = navCtrl;
        this.productService = productService;
        this.coreService = coreService;
        this.storage = storage;
        this.navParams = navParams;
        this.last = false;
        this.logined = false;
    }
    ShoppingPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            if (val !== null) {
                _this.logined = true;
            }
        });
        this.getProduct('', 1);
    };
    ShoppingPage.prototype.getProduct = function (keywords, page) {
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
    ShoppingPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.productService.httpProductFilter({
            keywords: '',
            page: 1
        }).subscribe(function (data) {
            if (data.code == 0) {
                _this.products = data.data;
                _this.products.map(function (item) {
                    item.image = _this.coreService.domain + item.banner.path;
                });
            }
            refresher.complete();
        });
    };
    ShoppingPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        var page = 1;
        page++;
        this.infiniteScroll = infiniteScroll;
        this.productService.httpProductFilter({
            keywords: '',
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
    ShoppingPage.prototype.shoppingByCode = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__code_detail_code_detail__["a" /* CodeDetailPage */], { product: product });
    };
    return ShoppingPage;
}());
ShoppingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-shopping',template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/pages/shopping/shopping.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>积分商城111</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-down"\n            pullingText="下拉刷新页面"\n            refreshingSpinner="circles"\n            refreshingText="数据加载中..."\n        ></ion-refresher-content>\n    </ion-refresher>\n    <ion-grid class="mp-width">\n        <ion-row>\n            <ion-col col-6 *ngFor="let product of products" class="mp-width">\n                <ion-card class="mp-width">\n                    <ion-card-header>\n                        <img src="{{product.image}}" width="155" height="155">\n                    </ion-card-header>\n                    <ion-card-content>\n                        <h2 class="name">{{product.name}}</h2>\n                        <p>积分：<b class="code">{{product.code}}</b>\n                        <button ion-button float-right class="check-it" *ngIf="logined" (click)="shoppingByCode(product)">兑换</button>\n                        </p>\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content\n            loadingSpinner="bubbles"\n            loadingText="加载更多中..."\n        ></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/pages/shopping/shopping.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__service_product_service__["a" /* ProductService */],
        __WEBPACK_IMPORTED_MODULE_3__service_core_service__["a" /* CoreService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ShoppingPage);

//# sourceMappingURL=shopping.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    return SearchPageModule;
}());
SearchPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
        ],
    })
], SearchPageModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad SearchPage');
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    return TabsPageModule;
}());
TabsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
        ],
    })
], TabsPageModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionPageModule", function() { return VersionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__version__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VersionPageModule = (function () {
    function VersionPageModule() {
    }
    return VersionPageModule;
}());
VersionPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__version__["a" /* VersionPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__version__["a" /* VersionPage */]),
        ],
    })
], VersionPageModule);

//# sourceMappingURL=version.module.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddressPageModule", function() { return UserAddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_address__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserAddressPageModule = (function () {
    function UserAddressPageModule() {
    }
    return UserAddressPageModule;
}());
UserAddressPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user_address__["a" /* UserAddressPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_address__["a" /* UserAddressPage */]),
        ],
    })
], UserAddressPageModule);

//# sourceMappingURL=user-address.module.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNamePageModule", function() { return UserNamePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_name__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserNamePageModule = (function () {
    function UserNamePageModule() {
    }
    return UserNamePageModule;
}());
UserNamePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user_name__["a" /* UserNamePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_name__["a" /* UserNamePage */]),
        ],
    })
], UserNamePageModule);

//# sourceMappingURL=user-name.module.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomePageModule = (function () {
    function WelcomePageModule() {
    }
    return WelcomePageModule;
}());
WelcomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]),
        ],
    })
], WelcomePageModule);

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(260);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome_module__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs_module__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_products_products__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_products_products_module__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_orders_orders__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_orders_orders_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile_module__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__service_image_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_image_picker__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_transfer__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_date_picker__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_user_name_user_name__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_user_name_user_name_module__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_shopping_shopping__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_shopping_shopping_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_check_orders_check_orders_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_check_orders_check_orders__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__service_util_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__service_core_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__service_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__service_banner_service__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__service_product_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_user_address_user_address_module__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_user_address_user_address__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_search_search_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_search_search__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pipes_pipes_module__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__service_order_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__service_notification_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_app_version__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_version_version_module__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_version_version__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_confirm_order_confirm_order__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_confirm_order_confirm_order_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_pay_pay__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_alipay__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_code_detail_code_detail__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_code_detail_code_detail_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_about_about__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_about_about_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_wechat_chenyu__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome_module__["WelcomePageModule"],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs_module__["TabsPageModule"],
            __WEBPACK_IMPORTED_MODULE_13__pages_products_products_module__["ProductsPageModule"],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__["LoginPageModule"],
            __WEBPACK_IMPORTED_MODULE_17__pages_orders_orders_module__["OrdersPageModule"],
            __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile_module__["ProfilePageModule"],
            __WEBPACK_IMPORTED_MODULE_26__pages_user_name_user_name_module__["UserNamePageModule"],
            __WEBPACK_IMPORTED_MODULE_28__pages_shopping_shopping_module__["ShoppingPageModule"],
            __WEBPACK_IMPORTED_MODULE_29__pages_check_orders_check_orders_module__["CheckOrdersPageModule"],
            __WEBPACK_IMPORTED_MODULE_36__pages_user_address_user_address_module__["UserAddressPageModule"],
            __WEBPACK_IMPORTED_MODULE_38__pages_search_search_module__["SearchPageModule"],
            __WEBPACK_IMPORTED_MODULE_44__pages_version_version_module__["VersionPageModule"],
            __WEBPACK_IMPORTED_MODULE_53__pages_about_about_module__["AboutPageModule"],
            __WEBPACK_IMPORTED_MODULE_40__pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_51__pages_code_detail_code_detail_module__["CodeDetailPageModule"],
            __WEBPACK_IMPORTED_MODULE_47__pages_confirm_order_confirm_order_module__["ConfirmOrderPageModule"],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                backButtonText: '返回',
                tabsHideOnSubPages: 'true',
                mode: 'ios' //把所有平台设置为iOS风格
            }, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/check-orders/check-orders.module#CheckOrdersPageModule', name: 'CheckOrdersPage', segment: 'check-orders', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/code-detail/code-detail.module#CodeDetailPageModule', name: 'CodeDetailPage', segment: 'code-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/confirm-order/confirm-order.module#ConfirmOrderPageModule', name: 'ConfirmOrderPage', segment: 'confirm-order', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/shopping/shopping.module#ShoppingPageModule', name: 'ShoppingPage', segment: 'shopping', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/version/version.module#VersionPageModule', name: 'VersionPage', segment: 'version', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user-address/user-address.module#UserAddressPageModule', name: 'UserAddressPage', segment: 'user-address', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user-name/user-name.module#UserNamePageModule', name: 'UserNamePage', segment: 'user-name', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_products_products__["a" /* ProductsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_orders_orders__["a" /* OrdersPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_user_name_user_name__["a" /* UserNamePage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_version_version__["a" /* VersionPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_shopping_shopping__["a" /* ShoppingPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_user_address_user_address__["a" /* UserAddressPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_check_orders_check_orders__["a" /* CheckOrdersPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_confirm_order_confirm_order__["a" /* ConfirmOrderPage */],
            __WEBPACK_IMPORTED_MODULE_50__pages_code_detail_code_detail__["a" /* CodeDetailPage */],
            __WEBPACK_IMPORTED_MODULE_52__pages_about_about__["a" /* AboutPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_20__service_image_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_43__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_31__service_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_32__service_core_service__["a" /* CoreService */],
            __WEBPACK_IMPORTED_MODULE_33__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_34__service_banner_service__["a" /* BannerService */],
            __WEBPACK_IMPORTED_MODULE_35__service_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_41__service_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_42__service_notification_service__["a" /* NotificationService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_48__providers_pay_pay__["a" /* PayProvider */],
            __WEBPACK_IMPORTED_MODULE_54_wechat_chenyu__["a" /* WechatChenyu */],
            __WEBPACK_IMPORTED_MODULE_49__ionic_native_alipay__["a" /* Alipay */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NUM_COUNT_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumCountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NUM_COUNT_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* forwardRef */])(function () { return NumCountComponent; }),
    multi: true
};
var NumCountComponent = (function () {
    function NumCountComponent() {
        this.count = 0;
        this.onChanged = function (_) { }; // 这里要给一个值
        // console.log(this);
    }
    NumCountComponent.prototype.writeValue = function (obj) {
        if (obj) {
            this.count = obj;
        }
    };
    NumCountComponent.prototype.registerOnChange = function (fn) {
        this.onChanged = fn;
    };
    NumCountComponent.prototype.registerOnTouched = function (fn) {
    };
    NumCountComponent.prototype.increment = function () {
        this.count++;
        this.onChanged(this.count);
    };
    NumCountComponent.prototype.decrement = function () {
        if (this.count > 0) {
            this.count--;
        }
        this.onChanged(this.count);
    };
    return NumCountComponent;
}());
NumCountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'num-count',template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/components/num-count/num-count.html"*/'<div class="num-control">\n    <button (click)="decrement()" icon-end *ngIf="count > 0"><i class="iconfont icon-delicon"></i></button>\n    <span class="text-num">{{count}}</span>\n    <button (click)="increment()" icon-start><i class="iconfont icon-add1"></i></button>\n</div>\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/components/num-count/num-count.html"*/,
        providers: [NUM_COUNT_ACCESSOR]
    }),
    __metadata("design:paramtypes", [])
], NumCountComponent);

//# sourceMappingURL=num-count.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the CodeDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CodeDetailComponent = (function () {
    function CodeDetailComponent() {
        // console.log('Hello CodeDetailComponent Component');
        this.text = 'Hello World';
    }
    return CodeDetailComponent;
}());
CodeDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'code-detail',template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/components/code-detail/code-detail.html"*/'<!-- Generated template for the CodeDetailComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/components/code-detail/code-detail.html"*/
    }),
    __metadata("design:paramtypes", [])
], CodeDetailComponent);

//# sourceMappingURL=code-detail.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = phoneValidator;
/* harmony export (immutable) */ __webpack_exports__["a"] = numberValidator;
function phoneValidator(control) {
    var val = (control.value || '') + '';
    var reg = /^0{0,1}(1[3|4|5|8][0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/;
    var valid = reg.test(val);
    return valid ? null : { phoneValidator: true };
}
function numberValidator(control) {
    var val = (control.value || '') + '';
    var reg = /^\d{5,6}$/;
    var valid = reg.test(val);
    return valid ? null : { numberValidator: true };
}
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UtilService = (function () {
    function UtilService(storage, toastCtrl, alertCtrl) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
    }
    UtilService.prototype.getTabs = function () {
        return [
            {
                key: 'home',
                value: '首页',
                icon: 'home',
                page: 'HomePage'
            },
            {
                key: 'shopping',
                value: '积分商城',
                icon: 'basket',
                page: 'ShoppingPage'
            },
            {
                key: 'notifications',
                value: '通知',
                icon: 'notifications',
                page: 'NotificationPage'
            },
            {
                key: 'contact',
                value: '我的',
                icon: 'contact',
                page: 'ProfilePage'
            }
        ];
    };
    UtilService.prototype.getLoginStatus = function () {
        return this.storage.get('user').then(function (val) {
            return val;
        });
    };
    UtilService.prototype.getFirstIn = function () {
        return this.storage.get('firstIn').then(function (val) {
            return val;
        });
    };
    UtilService.prototype.toast = function (message, callback) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            dismissOnPageChange: true,
        });
        toast.present();
        if (callback) {
            callback();
        }
    };
    UtilService.prototype.alert = function (message, callback) {
        if (callback) {
            var alert_1 = this.alertCtrl.create({
                title: '提示',
                message: message,
                buttons: [
                    {
                        text: '取消',
                        handler: function (data) {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: "确定",
                        handler: function (data) {
                            callback();
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: '提示',
                message: message,
                buttons: ["确定"]
            });
            alert_2.present();
        }
    };
    return UtilService;
}());
UtilService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
], UtilService);

//# sourceMappingURL=util.service.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_util_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, utilService, storage) {
        var _this = this;
        this.utilService = utilService;
        this.storage = storage;
        this.rootPage = 'TabsPage';
        this.utilService.getFirstIn().then(function (data) {
            if (data) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.storage.set('firstIn', true);
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_7__service_util_service__["a" /* UtilService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BannerService = (function () {
    function BannerService(http, coreService) {
        this.http = http;
        this.coreService = coreService;
    }
    BannerService.prototype.httpGetBanner = function () {
        return this.http.get(this.coreService.domain + this.coreService.API.getBanner)
            .map(function (res) { return res.json(); });
    };
    return BannerService;
}());
BannerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__core_service__["a" /* CoreService */]])
], BannerService);

//# sourceMappingURL=banner.service.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe_multiple_pipe_multiple__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipe_multiple2_pipe_multiple2__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__pipe_multiple_pipe_multiple__["a" /* PipeMultiplePipe */],
            __WEBPACK_IMPORTED_MODULE_2__pipe_multiple2_pipe_multiple2__["a" /* PipeMultiple2Pipe */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__pipe_multiple_pipe_multiple__["a" /* PipeMultiplePipe */],
            __WEBPACK_IMPORTED_MODULE_2__pipe_multiple2_pipe_multiple2__["a" /* PipeMultiple2Pipe */]]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeMultiplePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the PipeMultiplePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var PipeMultiplePipe = (function () {
    function PipeMultiplePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    PipeMultiplePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.toLowerCase();
    };
    return PipeMultiplePipe;
}());
PipeMultiplePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'multiple',
    })
], PipeMultiplePipe);

//# sourceMappingURL=pipe-multiple.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeMultiple2Pipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the PipeMultiple2Pipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var PipeMultiple2Pipe = (function () {
    function PipeMultiple2Pipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    PipeMultiple2Pipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.toLowerCase();
    };
    return PipeMultiple2Pipe;
}());
PipeMultiple2Pipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'pipeMultiple2',
    })
], PipeMultiple2Pipe);

//# sourceMappingURL=pipe-multiple2.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http, coreService) {
        this.http = http;
        this.coreService = coreService;
    }
    UserService.prototype.httpPost = function (request) {
        return this.http.post(this.coreService.domain + this.coreService.API.login, request)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.httpGetUser = function (id) {
        return this.http.get(this.coreService.domain + this.coreService.API.profile + '?id=' + id)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.httpPostAvatar = function (request) {
        return this.http.post(this.coreService.domain + this.coreService.API.saveProfile, request)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.httpPostName = function (request) {
        return this.http.post(this.coreService.domain + this.coreService.API.saveProfile, request)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.httpPostSex = function (request) {
        return this.http.post(this.coreService.domain + this.coreService.API.saveProfile, request)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.httpPostBirth = function (request) {
        return this.http.post(this.coreService.domain + this.coreService.API.saveProfile, request)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.httpPostAddress = function (request) {
        return this.http.post(this.coreService.domain + this.coreService.API.saveProfile, request)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.httpGetVerifyCode = function (phone) {
        return this.http.get(this.coreService.domain + this.coreService.API.verifyCode + '?phone=' + phone)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.httpGetAdminId = function () {
        return this.http.get(this.coreService.domain + '/api/get_admin_id')
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__core_service__["a" /* CoreService */]])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = (function () {
    function OrderService(http, coreService) {
        this.http = http;
        this.coreService = coreService;
    }
    OrderService.prototype.httpPostOrder = function (request) {
        return this.http.get(this.coreService.domain + this.coreService.API.orderAdd + '?products=' + request.products + '&sumPrice=' + request.sumPrice + '&customer=' + request.customer)
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.httpGetOrderById = function (id) {
        return this.http.get(this.coreService.domain + this.coreService.API.orderList + '?id=' + id)
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.httpUpdateOrderById = function (id, payWay) {
        return this.http.get(this.coreService.domain + this.coreService.API.updateOrder + '/' + id + '/' + payWay)
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.httpPostCode = function (request) {
        return this.http.post(this.coreService.domain + '/api/update_code', request)
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.httpDelOrder = function (id) {
        return this.http.get(this.coreService.domain + '/api/order/del/' + id)
            .map(function (res) { return res.json(); });
    };
    return OrderService;
}());
OrderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__core_service__["a" /* CoreService */]])
], OrderService);

//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationService = (function () {
    function NotificationService(http, coreService) {
        this.http = http;
        this.coreService = coreService;
    }
    NotificationService.prototype.getUserNotificationList = function (userId) {
        return this.http.get(this.coreService.domain + this.coreService.API.userNotificationList + '?id=' + userId)
            .map(function (res) { return res.json(); });
    };
    NotificationService.prototype.delUserNotification = function (id) {
        return this.http.get(this.coreService.domain + this.coreService.API.delUserNotification + '?id=' + id)
            .map(function (res) { return res.json(); });
    };
    NotificationService.prototype.readUserNotification = function (id) {
        return this.http.get(this.coreService.domain + this.coreService.API.readUserNotification + '?id=' + id)
            .map(function (res) { return res.json(); });
    };
    NotificationService.prototype.unReadUserNotification = function (id) {
        return this.http.get(this.coreService.domain + this.coreService.API.unReadUserNotification + '?id=' + id)
            .map(function (res) { return res.json(); });
    };
    NotificationService.prototype.createNotification = function (request) {
        return this.http.get(this.coreService.domain + '/api/notification/create/' + request.content + '/' + request.from + '/' + request.to)
            .map(function (res) { return res.json(); });
    };
    NotificationService.prototype.msgToBusiness = function (phone, no) {
        return this.http.get(this.coreService.domain + '/api/msg_to_business?phone=' + phone + '&no=' + no).map(function (res) { return res.json(); });
    };
    return NotificationService;
}());
NotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__core_service__["a" /* CoreService */]])
], NotificationService);

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pay_pay__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_util_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_order_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__orders_orders__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_notification_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_wechat_chenyu__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Alipay, AlipayOrder } from '@ionic-native/alipay';






var ConfirmOrderPage = (function () {
    function ConfirmOrderPage(navCtrl, navParams, storage, userService, payProvider, http, 
        // private alipay: Alipay,
        userSerive, orderService, notificationService, wechatChenyu, utilService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.userService = userService;
        this.payProvider = payProvider;
        this.http = http;
        this.userSerive = userSerive;
        this.orderService = orderService;
        this.notificationService = notificationService;
        this.wechatChenyu = wechatChenyu;
        this.utilService = utilService;
        this.userInfo = {};
        this.orders = [];
        this.sum = 0;
        this.payway = 0;
        this.subject = '';
        this.body = '';
        this.hasPay = false;
        this.orders = JSON.parse(this.navParams.get('products'));
        this.sn = this.navParams.get('sn');
        this.no = this.navParams.get('orderNo');
        var p = 0;
        for (var i = 0; i < this.orders.length; i++) {
            p += this.orders[i].orderNum * this.orders[i].price;
            this.subject += this.orders[i].name + ' ';
            this.body += this.orders[i].name + 'x' + this.orders[i].orderNum + ' ';
        }
        this.sum = p;
    }
    ConfirmOrderPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            if (val != null) {
                _this.userId = val;
                _this.userService.httpGetUser(val).subscribe(function (userInfo) {
                    _this.userInfo = userInfo['data'];
                    _this.address = userInfo['data']['address'];
                    _this.name = userInfo['data']['name'];
                    _this.phone = userInfo['data']['phone'];
                }, function (error) { return _this.errorMessage = error; });
            }
        });
        this.userSerive.httpGetAdminId().subscribe(function (res) {
            if (res.code == 0) {
                _this.adminId = res.data._id;
                _this.adminPhone = res.data.phone;
            }
        });
        // 获取支付宝签名字符串
        this.payProvider.postPayInfo({
            subject: this.subject,
            body: this.body,
            outTradeId: this.sn,
            amount: this.sum + ''
        }).subscribe(function (res) {
            if (res) {
                _this.payInfo = res.data.msg;
            }
        });
    };
    ConfirmOrderPage.prototype.confirmPay = function () {
        var _this = this;
        var self = this;
        if (this.payway == 0) {
            // 支付宝
            cordova.plugins.alipay.payment(this.payInfo, function success(e) {
                //e.resultStatus  状态代码  e.result  本次操作返回的结果数据 e.memo 提示信息
                //e.resultStatus  9000  订单支付成功 ;8000 正在处理中  调用function success
                //e.resultStatus  4000  订单支付失败 ;6001  用户中途取消 ;6002 网络连接出错  调用function error
                //当e.resultStatus为9000时，请去服务端验证支付结果
                /**
                 * 同步返回的结果必须放置到服务端进行验证（验证的规则请看https://doc.open.alipay.com/doc2/
                 * detail.htm?spm=0.0.0.0.xdvAU6&treeId=59&articleId=103665&
                 * docType=1) 建议商户依赖异步通知
                 */
                if (e.resultStatus == 9000) {
                    // let res = JSON.parse(e.result);
                    // self.tradeId = res.alipay_trade_app_pay_response.trade_no;
                    // //验证订单
                    // self.payProvider.queryOrder(self.sn, self.tradeId).subscribe(res => {
                    //     self.utilService.alert(res.data.ok);
                    //     if (res.data.ok) {
                    //
                    //     }
                    // });
                    // 通知商家发货
                    var opts = {
                        content: '您收到新的订单：' + self.sn + ' 请尽快处理！',
                        from: self.userId,
                        to: self.adminId // 管理员ID
                    };
                    self.userOrderNotification(opts);
                    self.msgToBusiness(self.adminPhone, self.sn);
                    // 用户收到下单通知
                    var businessOpts = {
                        content: '您的订单：' + self.sn + ' 己经生成，我们会尽快为您发货！非常感谢您的订购，祝生活愉快！电话咨询：18078660058',
                        from: self.adminId,
                        to: self.userId
                    };
                    self.userOrderNotification(businessOpts);
                    // 改变订单状态 status=1
                    self.changeOrderStatus(self.payway);
                    // 禁用按钮
                    self.hasPay = true;
                }
            }, function error(e) {
                self.utilService.toast(e.memo);
                self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__orders_orders__["a" /* OrdersPage */]);
                self.hasPay = true;
            });
        }
        else if (this.payway == 1) {
            // 微信
            var params = {
                attach: self.subject,
                body: self.body,
                out_trade_no: self.sn,
                total_fee: self.sum,
            };
            this.payProvider.postWxPay(params).subscribe(function (res) {
                if (res.code == 0) {
                    _this.wechatChenyu.sendPaymentRequest(res.data).then(function (data) {
                        // 成功之后的跳转
                        self.utilService.alert('支付成功', function () {
                            // 通知商家发货
                            var opts = {
                                content: '您收到新的订单：' + self.sn + ' 请尽快处理！',
                                from: self.userId,
                                to: self.adminId // 管理员ID
                            };
                            self.userOrderNotification(opts);
                            self.msgToBusiness(self.adminPhone, self.sn);
                            // 用户收到下单通知
                            var businessOpts = {
                                content: '您的订单：' + self.sn + ' 己经生成，我们会尽快为您发货！非常感谢您的订购，祝生活愉快！电话咨询：18078660058',
                                from: self.adminId,
                                to: self.userId
                            };
                            self.userOrderNotification(businessOpts);
                            // 改变订单状态 status=1
                            self.changeOrderStatus(self.payway);
                            // 禁用按钮
                            self.hasPay = true;
                        });
                    }, function (err) {
                        self.utilService.alert(err);
                        console.log(err);
                    });
                }
            });
        }
    };
    ConfirmOrderPage.prototype.changeOrderStatus = function (payWay) {
        var _this = this;
        this.orderService.httpUpdateOrderById(this.no, payWay).subscribe(function (res) {
            if (res.code == 0) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__orders_orders__["a" /* OrdersPage */]);
            }
        });
    };
    ConfirmOrderPage.prototype.userOrderNotification = function (opts) {
        this.notificationService.createNotification(opts).subscribe(function (res) {
            if (res.code == 0) {
            }
        });
    };
    // 短信通知商家发货
    ConfirmOrderPage.prototype.msgToBusiness = function (phone, sn) {
        this.notificationService.msgToBusiness(phone, sn).subscribe(function (data) {
        });
    };
    return ConfirmOrderPage;
}());
ConfirmOrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-confirm-order',template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/pages/confirm-order/confirm-order.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>确认订单</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-item color="primary">\n        <p>订单配送至：</p>\n        <p class="address">{{address}}</p>\n        <p>{{name}}&nbsp;&nbsp;&nbsp;&nbsp;{{phone}}</p>\n    </ion-item>\n    <div class="product-list">\n        <ion-list no-padding>\n            <ion-item no-padding *ngFor="let product of orders">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col col-2><img src="{{product.image}}" width="50" height="50"></ion-col>\n                        <ion-col col-10>\n                            <h2 text-left class="product-name">{{product.name}}</h2>\n                            <ion-row>\n                                <ion-col class="9">\n                                    <p text-right class="num"><span>x {{product.orderNum}}</span></p>\n                                </ion-col>\n                                <ion-col col-3>\n                                    <p text-right><i class="price">￥{{product.orderNum * product.price}}</i>元</p>\n                                </ion-col>\n                            </ion-row>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-item>\n        </ion-list>\n        <ion-item>\n            <p text-right>小计：<span class="price">￥{{sum}}</span>元</p>\n        </ion-item>\n        <div class="pay">\n            <ion-item class="pay-way">\n                <ion-label icon-start color="primary">支付方式</ion-label>\n                <ion-select [(ngModel)]="payway" item-end cancelText="取消" okText="确定">\n                    <ion-option value="0">支付宝</ion-option>\n                    <ion-option value="1">微信支付</ion-option>\n                </ion-select>\n            </ion-item>\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <ion-item color="light" [style.opacity]="0.75" class="selected-bar">\n        <div class="sum-price">\n            <i class="price">￥{{sum}}</i>元\n        </div>\n        <button ion-button item-end class="go-pay" (click)="confirmPay()" class="go-pay" [disabled]="hasPay">确认支付</button>\n    </ion-item>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/pages/confirm-order/confirm-order.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_pay_pay__["a" /* PayProvider */],
        __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_6__service_order_service__["a" /* OrderService */],
        __WEBPACK_IMPORTED_MODULE_8__service_notification_service__["a" /* NotificationService */],
        __WEBPACK_IMPORTED_MODULE_10_wechat_chenyu__["a" /* WechatChenyu */],
        __WEBPACK_IMPORTED_MODULE_5__service_util_service__["a" /* UtilService */]])
], ConfirmOrderPage);

//# sourceMappingURL=confirm-order.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_util_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_order_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_order_confirm_order__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrdersPage = (function () {
    function OrdersPage(utilService, storage, orderService, cd, navCtrl) {
        var _this = this;
        this.utilService = utilService;
        this.storage = storage;
        this.orderService = orderService;
        this.cd = cd;
        this.navCtrl = navCtrl;
        this.isLogin = false;
        this.utilService.getLoginStatus().then(function (data) {
            if (data) {
                _this.isLogin = true;
            }
        });
    }
    OrdersPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            if (val != null) {
                _this.userId = val;
                _this.getOrderList();
            }
        });
    };
    OrdersPage.prototype.getOrderList = function () {
        var _this = this;
        this.orderService.httpGetOrderById(this.userId).subscribe(function (res) {
            if (res.code == 0) {
                _this.orders = res.orders;
                _this.orders.map(function (order) {
                    order.products = JSON.parse(order.products);
                    if (order.status == 0) {
                        if (order.type == 1) {
                            order.orderStatusText = '己付款，待发货';
                        }
                        else {
                            order.orderStatusText = '待支付';
                        }
                    }
                    else if (order.status == 1) {
                        order.orderStatusText = '己付款，待发货';
                    }
                    else if (order.status == 2) {
                        order.orderStatusText = '己发货';
                    }
                });
            }
        });
    };
    OrdersPage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    OrdersPage.prototype.delOrder = function (id) {
        var _this = this;
        this.utilService.alert('确认删除该订单？', function (data) {
            _this.orderService.httpDelOrder(id).subscribe(function (res) {
                if (res.code == 0) {
                    _this.getOrderList();
                    // this.cd.detectChanges(); // 数据更新后，刷新页面
                }
            });
        });
    };
    OrdersPage.prototype.goToPay = function (order) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__confirm_order_confirm_order__["a" /* ConfirmOrderPage */], {
            products: JSON.stringify(order.products),
            sn: order.sn,
            orderNo: order._id
        });
    };
    return OrdersPage;
}());
OrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-orders',template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/pages/orders/orders.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>我的订单</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div text-center class="no-login display-box" (click)="goToLogin()" [class.show]="!isLogin">\n        <div class="no-login-tips">登录后查看订单</div>\n        <button ion-button>立即登录</button>\n    </div>\n    <div class="display-box" [class.show]="isLogin">\n        <ion-card *ngFor="let order of orders">\n            <ion-card-header>\n                <ion-item class="header-item">\n                    <div item-start>{{order.sn}}</div>\n                    <div item-end class="date">{{order.createdAt | date:\'yyyy-MM-dd HH:mm:ss\'}}</div>\n                </ion-item>\n\n            </ion-card-header>\n\n            <ion-card-content>\n                <ion-list>\n                    <ion-item class="list-item" *ngFor="let product of order.products">\n                        <div class="name" icon-start>{{product.name}}</div>\n                        <div class="num" item-end>x{{product.orderNum}}</div>\n                        <div class="price price-w" item-end>￥{{product.price * product.orderNum}}</div>\n                    </ion-item>\n                </ion-list>\n            </ion-card-content>\n            <ion-item class="order-footer">\n                <div class="status">{{order.orderStatusText}}</div>\n                <div class="sum" item-end>总价 <b class="price">￥{{order.sumPrice}}</b></div>\n            </ion-item>\n            <ion-item>\n                <div class="align-right">\n                    <button ion-button class="check-it" *ngIf="order.status == 0" (click)="goToPay(order)">继续支付</button>\n                    <button ion-button float-right class="check-it" (click)="delOrder(order._id)">删除</button>\n                </div>\n            </ion-item>\n        </ion-card>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/pages/orders/orders.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_util_service__["a" /* UtilService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__service_order_service__["a" /* OrderService */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], OrdersPage);

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_validator__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_util_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_baseui__ = __webpack_require__(58);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import md5 from 'blueimp-md5';
var LoginPage = (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(storage, utilService, viewCtrl, userService, loadingCtrl, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.storage = storage;
        _this.utilService = utilService;
        _this.viewCtrl = viewCtrl;
        _this.userService = userService;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        // 验证码倒计时
        _this.verifyCode = {
            verifyCodeTips: "获取验证码",
            countdown: 30,
            disable: true
        };
        var fb = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]();
        _this.loginForm = fb.group({
            phone: ['', [__WEBPACK_IMPORTED_MODULE_3__app_validator__["b" /* phoneValidator */]]],
            phoneCode: ['', [__WEBPACK_IMPORTED_MODULE_3__app_validator__["a" /* numberValidator */]]]
        });
        return _this;
        // console.log(this.loginForm.value); // 手机号码正则没有匹配上
    }
    /**
     * 关闭当前页面
     */
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, '登录中...');
        if (this.loginForm.valid) {
            // this.loginForm.value.phoneCode = md5(this.loginForm.value.phoneCode);
            this.userService.httpPost(this.loginForm.value)
                .subscribe(function (data) {
                if (data.code == 0) {
                    _this.storage.set('user', data.data._id);
                    loading.dismiss();
                    _this.dismiss();
                    _super.prototype.showToast.call(_this, _this.toastCtrl, '登录成功');
                }
                else {
                    loading.dismiss();
                    _super.prototype.showToast.call(_this, _this.toastCtrl, data.msg);
                }
            }, function (error) { return _this.showMessage = error; });
        }
    };
    // 倒计时
    LoginPage.prototype.settime = function () {
        var _this = this;
        if (this.verifyCode.countdown == 1) {
            this.verifyCode.countdown = 60;
            this.verifyCode.verifyCodeTips = "获取验证码";
            this.verifyCode.disable = true;
            return;
        }
        else {
            this.verifyCode.countdown--;
        }
        this.verifyCode.verifyCodeTips = "重新获取(" + this.verifyCode.countdown + ")";
        setTimeout(function () {
            _this.verifyCode.verifyCodeTips = "重新获取(" + _this.verifyCode.countdown + ")";
            _this.settime();
        }, 1000);
    };
    LoginPage.prototype.getCode = function () {
        var _this = this;
        if (this.loginForm.value.phone == '') {
            this.utilService.toast('请输入手机号码');
            return;
        }
        //发送验证码成功后开始倒计时
        if (this.verifyCode.disable) {
            this.userService.httpGetVerifyCode(this.loginForm.value.phone).subscribe(function (data) {
                if (data.code == 'OK') {
                    console.log(data);
                }
                else {
                    _this.utilService.toast(data.msg);
                }
            });
        }
        this.verifyCode.disable = false;
        this.settime();
    };
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_7__common_baseui__["a" /* BaseUI */]));
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/pages/login/login.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>用户登录</ion-title>\n        <button ion-button clear (click)="dismiss()">\n            <span ion-text showWhen="ios">取消</span>\n            <ion-icon name="md-close" showWhen="android" class="white"></ion-icon>\n        </button>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <form [formGroup]="loginForm">\n        <ion-list>\n            <ion-item>\n                <ion-label>手机号</ion-label>\n                <ion-input type="text" formControlName="phone" placeholder="请输入手机号码"></ion-input>\n                <button class="verify-code" ion-button small item-end [disabled]="!verifyCode.disable" (click)="getCode()">{{verifyCode.verifyCodeTips}}</button>\n            </ion-item>\n            <ion-item>\n                <ion-label>验证码</ion-label>\n                <ion-input type="text" formControlName="phoneCode" placeholder="请输入验证码" maxlength="6"></ion-input>\n            </ion-item>\n            <ion-item>\n                <button ion-button block large [disabled]="!loginForm.valid" (click)="login()" class="login">登 录</button>\n            </ion-item>\n        </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__service_util_service__["a" /* UtilService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_6__service_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUI; });
/**
 * UI 层的所有公用代码的抽象类
 *
 * @export
 * @abstract
 * @class BaseUI
 */
var BaseUI = (function () {
    function BaseUI() {
    }
    /**
     * 通用的展示loading组件
     *
     * @protected
     * @param {LoadingController} loadingCtrl
     * @param {string} message
     * @returns {Loading}
     * @memberof BaseUI
     */
    BaseUI.prototype.showLoading = function (loadingCtrl, message) {
        var loader = loadingCtrl.create({
            content: message,
            dismissOnPageChange: true
        });
        loader.present();
        return loader;
    };
    /**
     * 通用的展示toast组件
     *
     * @protected
     * @param {ToastController} toastCtrl
     * @param {string} message
     * @returns {Toast}
     * @memberof BaseUI
     */
    BaseUI.prototype.showToast = function (toastCtrl, message) {
        var toast = toastCtrl.create({
            message: message,
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
        return toast;
    };
    return BaseUI;
}());

//# sourceMappingURL=baseui.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_notification_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage(navCtrl, storage, notificationService) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.notificationService = notificationService;
        this.tab1Root = 'HomePage';
        this.tab2Root = 'ShoppingPage';
        this.tab3Root = 'NotificationPage';
        this.tab4Root = 'ProfilePage';
    }
    TabsPage.prototype.ionViewWillLoad = function () {
    };
    TabsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            if (val != null) {
                _this.userId = val;
                _this.getNotification();
            }
        });
    };
    TabsPage.prototype.getNotification = function () {
        var _this = this;
        this.notificationService.unReadUserNotification(this.userId)
            .subscribe(function (res) {
            if (res.code === 0) {
                if (res.data.length > 0) {
                    _this.notificationNum = res.data.length;
                }
                else if (res.data.length == 0) {
                    _this.notificationNum = '';
                }
            }
        });
    };
    TabsPage.prototype.tabChange = function () {
        if (this.userId != null) {
            this.getNotification();
        }
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="0" (ionChange)="tabChange()">\n    <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="积分商城" tabIcon="basket"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="通知" tabIcon="notifications" tabBadge="{{notificationNum}}"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="我的" tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__service_notification_service__["a" /* NotificationService */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_image_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_name_user_name__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_util_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_core_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_address_user_address__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_baseui__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__orders_orders__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__version_version__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_about__ = __webpack_require__(94);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ProfilePage = (function (_super) {
    __extends(ProfilePage, _super);
    function ProfilePage(navCtrl, storage, userService, imageService, coreService, modalCtrl, loadCtrl, toastCtrl, utilService) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.storage = storage;
        _this.userService = userService;
        _this.imageService = imageService;
        _this.coreService = coreService;
        _this.modalCtrl = modalCtrl;
        _this.loadCtrl = loadCtrl;
        _this.toastCtrl = toastCtrl;
        _this.utilService = utilService;
        _this.title = '登录';
        _this.headFace = 'assets/user.png';
        _this.notLogin = true;
        _this.logined = false;
        _this.event = {
            timeStarts: '1970-80-01'
        };
        _this.gender = "先生";
        _this.name = '';
        _this.code = 0;
        _this.phone = '';
        return _this;
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.initImgSer();
        this.selectOptions = {
            title: '选择性别'
        };
    };
    ProfilePage.prototype.showLoginModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        modal.onDidDismiss(function () {
            _this.loadUserPage();
        });
        modal.present();
    };
    ProfilePage.prototype.ionViewDidEnter = function () {
        this.loadUserPage();
    };
    ProfilePage.prototype.loadUserPage = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            // let loading = super.showLoading(this.loadCtrl, '加载中...');
            if (val != null) {
                _this.userService.httpGetUser(val).subscribe(function (userInfo) {
                    _this.userInfo = userInfo['data'];
                    //去除图片头像的缓存
                    if (userInfo['data'] == null) {
                        _this.headFace = 'assets/user.png';
                    }
                    else {
                        if (userInfo['data']['avatar'] == null) {
                            _this.headFace = 'assets/user.png';
                        }
                        else {
                            _this.headFace = _this.coreService.domain + userInfo['data']['avatar']['path'] + "?v=" + new Date().valueOf();
                        }
                        _this.gender = userInfo['data'].sex;
                        _this.event.timeStarts = userInfo['data'].birth;
                        _this.name = userInfo['data'].name;
                        _this.code = userInfo['data'].code;
                        _this.phone = userInfo['data'].phone;
                    }
                    _this.notLogin = false;
                    _this.logined = true;
                    _this.title = '个人中心';
                    // loading.dismiss();
                }, function (error) { return _this.errorMessage = error; });
            }
            else {
                _this.notLogin = true;
                _this.logined = false;
                _this.title = '登录';
                _this.headFace = 'assets/user.png';
                // loading.dismiss();
            }
        });
    };
    //选择上传方式
    ProfilePage.prototype.choosePic = function () {
        this.imageService.showPicActionSheet();
    };
    // 初始化上传图片的服务
    ProfilePage.prototype.initImgSer = function () {
        var _this = this;
        this.imageService.upload.fileKey = 'file';
        this.imageService.upload.url = this.coreService.domain + this.coreService.API.upload; // 上传图片的url，如果同默认配置的url一致，那无须再设置
        this.imageService.upload.success = function (data) {
            _this.storage.get('user').then(function (id) {
                if (id != null) {
                    _this.userService.httpPostAvatar({
                        id: id,
                        avatar: data.id
                    }).subscribe(function (data) {
                        if (data.code == 0) {
                            // this.cd.detectChanges();
                            console.log('头像更新成功');
                            //上传成功后的回调处理
                            _this.loadUserPage();
                            // this.navCtrl.setRoot(ProfilePage);
                        }
                    });
                }
            });
        };
        this.imageService.upload.error = function (err) {
            _this.utilService.toast('错误：头像上传失败！');
        };
    };
    // 更改姓名
    ProfilePage.prototype.changeUserName = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__user_name_user_name__["a" /* UserNamePage */], { user: this.userInfo });
    };
    // 更改性别
    ProfilePage.prototype.saveSex = function (val) {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loadCtrl, '保存中...');
        this.storage.get('user').then(function (id) {
            if (id != null) {
                _this.userService.httpPostSex({
                    id: id,
                    sex: val
                }).subscribe(function (data) {
                    if (data.code == 0) {
                        _this.gender = data.data.sex;
                        loading.dismiss();
                        _super.prototype.showToast.call(_this, _this.toastCtrl, '更新成功。');
                        // console.log('done');
                    }
                });
            }
        });
    };
    // 更改生日
    ProfilePage.prototype.saveBirty = function (val) {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loadCtrl, '保存中...');
        this.storage.get('user').then(function (id) {
            if (id != null) {
                _this.userService.httpPostBirth({
                    id: id,
                    birth: val
                }).subscribe(function (data) {
                    if (data.code == 0) {
                        loading.dismiss();
                        _super.prototype.showToast.call(_this, _this.toastCtrl, '更新成功。');
                        // console.log('done');
                    }
                });
            }
        });
    };
    ProfilePage.prototype.goToAddress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__user_address_user_address__["a" /* UserAddressPage */], { user: this.userInfo });
    };
    ProfilePage.prototype.goToOrders = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__orders_orders__["a" /* OrdersPage */]);
    };
    ProfilePage.prototype.loginOut = function () {
        this.storage.remove('user');
        this.loadUserPage();
    };
    ProfilePage.prototype.goToVersion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__version_version__["a" /* VersionPage */]);
    };
    ProfilePage.prototype.goToAbout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__about_about__["a" /* AboutPage */]);
    };
    return ProfilePage;
}(__WEBPACK_IMPORTED_MODULE_10__common_baseui__["a" /* BaseUI */]));
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/pages/profile/profile.html"*/'<ion-header>\n\n    <ion-navbar color="primary" no-border-bottom>\n        <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <div *ngIf="notLogin">\n        <ion-list id="not-login">\n            <button ion-item class="marginTop" (click)="showLoginModal()">\n                <ion-avatar item-start>\n                    <img src="{{headFace}}" alt="" class="user-avatar" width="40" height="40">\n                </ion-avatar>\n                <h2>立即登录</h2>\n                <p>登录后体验更多功能</p>\n            </button>\n        </ion-list>\n    </div>\n\n    <div *ngIf="logined">\n        <button ion-item class="marginTop" color="primary" (click)="choosePic()">\n            <ion-avatar item-start>\n                <img src="{{headFace}}" alt="" class="user-avatar">\n            </ion-avatar>\n            <h2 class="white name">{{name}}</h2>\n            <p class="name-tips">点击修改头像</p>\n        </button>\n        <ion-list>\n            <ion-list-header>订单与积分</ion-list-header>\n            <ion-item>\n                <!--<i class="iconfont icon-jifen3"></i>-->\n                我的积分\n                <div item-end [innerHtml]="code"></div>\n            </ion-item>\n            <ion-item (click)="goToOrders()">\n                <!--<i class="iconfont icon-jifen3"></i>-->\n                我的订单\n                <ion-icon name="arrow-forward" item-end class="item-icon-left"></ion-icon>\n            </ion-item>\n        </ion-list>\n\n        <ion-list>\n            <ion-list-header>帐户与安全</ion-list-header>\n            <ion-item (click)="changeUserName()">\n                姓名\n                <div item-end>{{name}}</div>\n                <ion-icon name="arrow-forward" item-end></ion-icon>\n            </ion-item>\n            <ion-item>\n                <ion-label icon-start>性别</ion-label>\n                <ion-select [(ngModel)]="gender" item-end [selectOptions]="selectOptions" cancelText="取消" okText="确定"\n                            (ngModelChange)="saveSex($event)">\n                    <ion-option value="先生">先生</ion-option>\n                    <ion-option value="女士">女士</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>生日</ion-label>\n                <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD" [(ngModel)]="event.timeStarts"\n                              (ngModelChange)="saveBirty($event)" cancelText="取消" doneText="确定"></ion-datetime>\n            </ion-item>\n            <ion-item>\n                手机\n                <div item-end>{{phone}}</div>\n            </ion-item>\n        </ion-list>\n\n        <ion-list>\n            <ion-list-header>地址</ion-list-header>\n            <ion-item (click)="goToAddress()">\n                <i class="iconfont icon-dizhi1"></i>\n                收货地址\n                <ion-icon name="arrow-forward" item-end></ion-icon>\n            </ion-item>\n        </ion-list>\n\n        <ion-list>\n            <ion-list-header>关于</ion-list-header>\n            <ion-item (click)="goToVersion()">\n                版本信息\n                <ion-icon name="arrow-forward" item-end></ion-icon>\n            </ion-item>\n            <ion-item (click)="goToAbout()">\n                关于我们\n                <ion-icon name="arrow-forward" item-end></ion-icon>\n            </ion-item>\n        </ion-list>\n\n        <ion-row margin-horizontal>\n            <button block ion-button color="danger" class="save" (click)="loginOut()">退 出</button>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__service_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_3__service_image_service__["a" /* ImageService */],
        __WEBPACK_IMPORTED_MODULE_8__service_core_service__["a" /* CoreService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_7__service_util_service__["a" /* UtilService */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = (function () {
    function ProductService(http, coreService) {
        this.http = http;
        this.coreService = coreService;
    }
    ProductService.prototype.httpGetProduct = function () {
        return this.http.get(this.coreService.domain + this.coreService.API.getProducts)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.httpGetProductAll = function () {
        return this.http.get(this.coreService.domain + this.coreService.API.products)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.httpProductFilter = function (request) {
        return this.http.get(this.coreService.domain + this.coreService.API.search + '?keywords=' + request.keywords + '&page=' + request.page)
            .map(function (res) { return res.json(); });
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__core_service__["a" /* CoreService */]])
], ProductService);

//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/pages/about/about.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>关于我们</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h2 class="title">盈垦</h2>\n    <div class="about">\n        <p>广西盈垦现代农业有限责任公司成立于2013年10月16日，注册资金200万元。目前拥有两处生产基地，一处加工厂，三个销售办事处，产品销售覆盖广西各大城市，辐射珠三角，是一家集木耳种植，加工，销售于一体的现代化农业企业。</p>\n        <p>公司秉承自然，健康，优质，高效的种植加工理念和细致入微的销售服务理念，经过多年努力，盈垦牌精品木耳丝在广西区内市场得到广泛的认可。2017年在市领导的大力支持下进入百色市科技企业孵化基地，生产加工环境获得的巨大改善，销售业绩也获得了很大的提升，进一步巩固了市场地位。</p>\n        <p>未来，我们将引入互联网销售模式，建立以销售APP为主要交易平台的互联网销售配送体系，提高效率，降低成本，提高用户体验。形成农业生产加工和互联网销售的相互融合的产业链优势，开拓更加广阔的市场。</p>\n        <p>科技改变未来！</p>\n    </div>\n    <div class="copy-right">\n        Copyright ©2013-2018<br/>\n        广西盈垦现代农业有限责任公司\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckOrdersPage = (function () {
    function CheckOrdersPage(navCtrl, navParams, events, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.viewCtrl = viewCtrl;
        this.num = 0;
        this.sum = 0;
        this.orders = navParams.get('productList');
        this.num = navParams.get('num');
        this.sum = navParams.get('sum');
    }
    CheckOrdersPage.prototype.dismiss = function () {
        var data = {
            show: false,
            orders: this.orders,
            num: this.num,
            sum: this.sum
        };
        this.viewCtrl.dismiss(data);
    };
    CheckOrdersPage.prototype.removeProduct = function (product) {
        if (product.orderNum > 0) {
            product.orderNum--;
        }
        var n = 0, p = 0;
        for (var i = 0; i < this.orders.length; i++) {
            n += this.orders[i].orderNum;
            p += this.orders[i].orderNum * this.orders[i].price;
        }
        this.num = n;
        this.sum = p;
    };
    CheckOrdersPage.prototype.addProduct = function (product) {
        product.orderNum++;
        var n = 0, p = 0;
        for (var i = 0; i < this.orders.length; i++) {
            n += this.orders[i].orderNum;
            p += this.orders[i].orderNum * this.orders[i].price;
        }
        this.num = n;
        this.sum = p;
    };
    return CheckOrdersPage;
}());
CheckOrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-check-orders',template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/pages/check-orders/check-orders.html"*/'<ion-header>\n    <ion-navbar class="header">\n        <ion-item no-border>\n            <div icon-start class="title">己选购商品</div>\n            <a href="javascript:;" (click)="dismiss()" item-end class="hide-order">确认</a>\n        </ion-item>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor="let product of orders">\n            <div item-start class="pro-title">{{product.name}}</div>\n            <div item-end class="price">￥{{product.price * product.orderNum}}</div>\n            <div item-end>\n                <button (click)="removeProduct(product)"><i class="iconfont icon-delicon"></i></button>\n                <span class="number">{{product.orderNum}}</span>\n                <button class="add-btn" (click)="addProduct(product)"><i class="iconfont icon-add1"></i></button>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n\n<ion-footer>\n    <div text-right class="sum-price">￥<b class="price">{{sum}}</b> 元</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/pages/check-orders/check-orders.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], CheckOrdersPage);

//# sourceMappingURL=check-orders.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_util_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_order_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_notification_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CodeDetailPage = (function () {
    function CodeDetailPage(navCtrl, storage, userService, http, utilService, orderService, userSerive, notificationService, navParams) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.userService = userService;
        this.http = http;
        this.utilService = utilService;
        this.orderService = orderService;
        this.userSerive = userSerive;
        this.notificationService = notificationService;
        this.navParams = navParams;
        this.userInfo = {};
        this.orderNum = 1;
        this.sumCode = 0;
        this.userCode = 0;
        this.isHidden = true;
        this.product = navParams.get('product');
        this.sumCode = this.orderNum * this.product.code;
    }
    CodeDetailPage.prototype.ngOnInit = function () {
    };
    CodeDetailPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            if (val != null) {
                _this.userId = val;
                _this.userService.httpGetUser(val).subscribe(function (userInfo) {
                    _this.userInfo = userInfo['data'];
                    _this.userCode = userInfo['data']['code'];
                    if (_this.userCode < _this.sumCode) {
                        _this.isHidden = false;
                    }
                    else {
                        _this.isHidden = true;
                    }
                }, function (error) { return _this.errorMessage = error; });
            }
        });
        this.userSerive.httpGetAdminId().subscribe(function (res) {
            if (res.code == 0) {
                _this.adminId = res.data._id;
                _this.adminPhone = res.data.phone;
            }
        });
    };
    CodeDetailPage.prototype.chooseProduct = function (product) {
        if (this.orderNum < 1) {
            this.orderNum = 1;
        }
        this.sumCode = this.orderNum * product.code;
        if (this.userCode < this.sumCode) {
            this.isHidden = false;
        }
        else {
            this.isHidden = true;
        }
    };
    CodeDetailPage.prototype.commitOrder = function () {
        var _this = this;
        this.product.orderNum = this.orderNum;
        this.orderService.httpPostCode({
            id: this.userId,
            product: this.product
        }).subscribe(function (json) {
            if (json.code == 0) {
                // 通知商家发货
                var opts = {
                    content: '您收到新的订单：' + json.data.sn + ' 请尽快处理！',
                    from: _this.userId,
                    to: _this.adminId // 管理员ID
                };
                _this.userOrderNotification(opts);
                _this.msgToBusiness(_this.adminPhone, json.data.sn);
                _this.utilService.alert('兑换商品成功，我们将尽快为您发货！', function () {
                    _this.navCtrl.pop();
                });
            }
        });
    };
    CodeDetailPage.prototype.userOrderNotification = function (opts) {
        this.notificationService.createNotification(opts).subscribe(function (res) {
            if (res.code == 0) {
            }
        });
    };
    // 短信通知商家发货
    CodeDetailPage.prototype.msgToBusiness = function (phone, sn) {
        this.notificationService.msgToBusiness(phone, sn).subscribe(function (data) {
        });
    };
    return CodeDetailPage;
}());
CodeDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-code-detail',template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/pages/code-detail/code-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>积分兑换</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-item color="primary" class="no-bottom-border">\n        <p>订单配送至：</p>\n        <p class="address">{{userInfo.address}}</p>\n        <p>{{userInfo.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{userInfo.phone}}</p>\n    </ion-item>\n\n    <div class="product-box">\n        <ion-item no-padding>\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-2><img src="{{product.image}}" width="50" height="50"></ion-col>\n                    <ion-col col-6>\n                        <h2 text-left class="product-name">{{product.name}}</h2>\n                    </ion-col>\n                    <ion-col col-4>\n                        <p text-right class="num"><span>{{product.code * orderNum}} 分</span></p>\n                        <num-count text-right [(ngModel)]="orderNum" (click)="chooseProduct(product)"></num-count>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n    </div>\n\n    <ion-item [(hidden)]="isHidden" class="no-bottom-border">\n        <p class="error">您的积分不足无法兑换该商品</p>\n    </ion-item>\n</ion-content>\n\n<ion-footer>\n    <ion-item color="light" [style.opacity]="0.75" class="selected-bar">\n        <div class="sum-price">\n            <i class="price">此次消费 {{sumCode}} 分</i>\n        </div>\n        <button ion-button item-end class="go-pay"  [disabled]="!isHidden" (click)="commitOrder()">确认兑换</button>\n    </ion-item>\n</ion-footer>\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/pages/code-detail/code-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__service_util_service__["a" /* UtilService */],
        __WEBPACK_IMPORTED_MODULE_6__service_order_service__["a" /* OrderService */],
        __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_7__service_notification_service__["a" /* NotificationService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], CodeDetailPage);

//# sourceMappingURL=code-detail.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserNamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_baseui__ = __webpack_require__(58);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserNamePage = (function (_super) {
    __extends(UserNamePage, _super);
    function UserNamePage(navPramas, storage, viewCtrl, loadingCtrl, toastCtrl, userService) {
        var _this = _super.call(this) || this;
        _this.navPramas = navPramas;
        _this.storage = storage;
        _this.viewCtrl = viewCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.userService = userService;
        _this.name = '';
        var fb = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]();
        _this.fromGroup = fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        _this.name = _this.navPramas.get('user').name;
        return _this;
    }
    UserNamePage.prototype.update = function () {
        var _this = this;
        if (this.fromGroup.valid) {
            this.storage.get('user').then(function (id) {
                if (id != null) {
                    _this.fromGroup.value.id = id;
                    var loading_1 = _super.prototype.showLoading.call(_this, _this.loadingCtrl, '保存中...');
                    _this.userService.httpPostName(_this.fromGroup.value).subscribe(function (data) {
                        if (data.code === 0) {
                            loading_1.dismiss();
                            _super.prototype.showToast.call(_this, _this.toastCtrl, '更改成功。');
                            _this.viewCtrl.dismiss();
                        }
                    });
                }
            });
        }
    };
    return UserNamePage;
}(__WEBPACK_IMPORTED_MODULE_5__common_baseui__["a" /* BaseUI */]));
UserNamePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-name',template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/pages/user-name/user-name.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>姓名</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <form [formGroup]="fromGroup">\n        <ion-list>\n            <ion-item>\n                <ion-input type="text" formControlName="name" placeholder="输入姓名" [(ngModel)]="name"></ion-input>\n            </ion-item>\n            <ion-item>\n                <button ion-button block large [disabled]="!fromGroup.valid" (click)="update()" class="save">保存</button>\n            </ion-item>\n        </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/pages/user-name/user-name.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]])
], UserNamePage);

//# sourceMappingURL=user-name.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_baseui__ = __webpack_require__(58);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserAddressPage = (function (_super) {
    __extends(UserAddressPage, _super);
    function UserAddressPage(navCtrl, userService, events, storage, loadingCtrl, toastCtrl, viewCtrl, navParams) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.userService = userService;
        _this.events = events;
        _this.storage = storage;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.viewCtrl = viewCtrl;
        _this.navParams = navParams;
        var fb = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]();
        _this.fromGroup = fb.group({
            address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        _this.address = _this.navParams.get('user').address;
        return _this;
    }
    UserAddressPage.prototype.ngOnInit = function () {
    };
    UserAddressPage.prototype.update = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, '保存中...');
        if (this.fromGroup.valid) {
            this.storage.get('user').then(function (id) {
                if (id != null) {
                    _this.fromGroup.value.id = id;
                    _this.userService.httpPostAddress(_this.fromGroup.value).subscribe(function (data) {
                        if (data.code === 0) {
                            _this.viewCtrl.dismiss();
                            loading.dismiss();
                            _super.prototype.showToast.call(_this, _this.toastCtrl, '更新成功。');
                        }
                    });
                }
            });
        }
    };
    return UserAddressPage;
}(__WEBPACK_IMPORTED_MODULE_5__common_baseui__["a" /* BaseUI */]));
UserAddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-address',template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/pages/user-address/user-address.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>收货地址</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <form [formGroup]="fromGroup">\n        <ion-list>\n            <ion-item>\n                <ion-textarea type="text" formControlName="address" placeholder="完善收货地址" [(ngModel)]="address"></ion-textarea>\n            </ion-item>\n            <ion-item>\n                <button ion-button block large [disabled]="!fromGroup.valid" (click)="update()" class="save">保存</button>\n            </ion-item>\n        </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/pages/user-address/user-address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], UserAddressPage);

//# sourceMappingURL=user-address.js.map

/***/ })

},[241]);
//# sourceMappingURL=main.js.map