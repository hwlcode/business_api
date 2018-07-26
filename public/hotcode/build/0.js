webpackJsonp([0],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationPageModule = (function () {
    function NotificationPageModule() {
    }
    return NotificationPageModule;
}());
NotificationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */]),
        ],
    })
], NotificationPageModule);

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_notification_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationPage = (function () {
    function NotificationPage(navCtrl, notificationService, storage, navParams) {
        this.navCtrl = navCtrl;
        this.notificationService = notificationService;
        this.storage = storage;
        this.navParams = navParams;
        this.showNotification = false;
        this.noLogin = true;
        this.logined = false;
    }
    NotificationPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            if (val != null) {
                _this.userId = val;
                _this.noLogin = false;
                _this.logined = true;
                _this.getNotification();
            }
        });
    };
    NotificationPage.prototype.getNotification = function () {
        var _this = this;
        this.notificationService.getUserNotificationList(this.userId).subscribe(function (res) {
            if (res.code === 0) {
                _this.items = res.data;
                if (res.data.length > 0) {
                    _this.showNotification = true;
                }
            }
        });
    };
    NotificationPage.prototype.removeItem = function (item) {
        var _this = this;
        this.notificationService.delUserNotification(item._id)
            .subscribe(function (res) {
            if (res.code === 0) {
                for (var i = 0; i < _this.items.length; i++) {
                    if (_this.items[i] == item) {
                        _this.items.splice(i, 1);
                    }
                }
            }
        });
    };
    NotificationPage.prototype.readItem = function (item) {
        this.notificationService.readUserNotification(item._id)
            .subscribe(function (res) {
            if (res.code === 0) {
                item.read = 1;
            }
        });
    };
    NotificationPage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
    };
    NotificationPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.notificationService.getUserNotificationList(this.userId).subscribe(function (res) {
            if (res.code === 0) {
                _this.items = res.data;
                refresher.complete();
            }
        });
    };
    return NotificationPage;
}());
NotificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notification',template:/*ion-inline-start:"/Users/hwl/work/cordova/business_app/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header xmlns:tel="http://www.w3.org/1999/xhtml">\n\n  <ion-navbar color="primary">\n    <ion-title>通知</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-down"\n            pullingText="下拉刷新页面"\n            refreshingSpinner="circles"\n            refreshingText="数据加载中..."\n        ></ion-refresher-content>\n    </ion-refresher>\n    <div *ngIf="noLogin">\n        <p text-center class="nologin-tips">您还没有登录，请登录后再购买商品</p>\n        <div text-center>\n            <button ion-button small (click)="goToLogin()">立即登录</button>\n        </div>\n    </div>\n    <div *ngIf="logined">\n        <ion-list class="notification">\n            <ion-item-sliding *ngFor="let item of items">\n                <ion-item>\n                    <h2 [class.font-bold]="item.read == 0">{{item.content}}</h2>\n                    <p>{{item.createdAt | date: \'yyyy-MM-dd HH:mm:ss\'}}</p>\n                </ion-item>\n                <ion-item-options>\n                    <button class="remove read" (click)="readItem(item)">&nbsp;&nbsp;{{item.read == 0 ? \'未读\' : \'己读\'}}&nbsp;&nbsp;</button>\n                    <button class="remove" (click)="removeItem(item)">&nbsp;&nbsp;删除&nbsp;&nbsp;</button>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n        <div [hidden]="showNotification">\n            <p class="is-none">暂未收到任何通知</p>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/hwl/work/cordova/business_app/src/pages/notification/notification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__service_notification_service__["a" /* NotificationService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], NotificationPage);

//# sourceMappingURL=notification.js.map

/***/ })

});
//# sourceMappingURL=0.js.map