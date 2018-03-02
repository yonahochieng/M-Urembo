webpackJsonp([4],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ui_service_ui_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_services_rest_services__ = __webpack_require__(71);
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
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductListPage = (function () {
    function ProductListPage(navCtrl, navParams, restServicesProvider, uiService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restServicesProvider = restServicesProvider;
        this.uiService = uiService;
        this.productList = [];
        this.c_service_id = this.navParams.get('c_service_id');
        this.service_category_id = this.navParams.get('service_category_id');
        this.service_descr = this.navParams.get('service_descr');
    }
    ProductListPage.prototype.ionViewDidLoad = function () {
        this.getProductList();
        console.log('ionViewDidLoad ProductListPage' + this.c_service_id);
    };
    ProductListPage.prototype.getProductList = function () {
        var _this = this;
        var requestParams = {
            action: 'productList',
            c_service_id: this.c_service_id,
            service_category_id: this.service_category_id
        };
        this.uiService.loaderDialog();
        this.restServicesProvider.getRequestHandler(requestParams)
            .then(function (data) {
            console.log(data);
            _this.productList = data['products'];
            _this.uiService.loading.dismiss();
        }).catch(function (error) {
            console.log(error);
            _this.uiService.loading.dismiss();
        });
    };
    ProductListPage.prototype.onModelRateChange = function (event, product_id) {
        console.log("Rating " + event + " Prod Id " + product_id);
    };
    ProductListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-product-list',template:/*ion-inline-start:"D:\JV Projects\NB\M-Urembo\src\pages\product-list\product-list.html"*/'<!--\n  Generated template for the ProductListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-item class="page_title">\n      <!--ion-avatar item-start> <img src="{{ serviceIcon }}"></ion-avatar-->\n    <ion-title>{{ service_descr }}</ion-title>\n  </ion-item>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-list *ngFor="let prodCategory of productList;let i = index">\n      <div >\n          <ion-list-header class="ion-list-header">\n            {{ prodCategory.category_descr }}\n          </ion-list-header>\n\n          <ion-item-group reorder="false">\n\n            <div *ngFor="let productItems of prodCategory.product_list; let i = index">\n                \n              <ion-item detail-push no-lines class="page_title">\n                  {{ productItems.prodcut_name }}\n                </ion-item>\n\n                <ion-item text-wrap no-lines class="item_description">\n                    {{ productItems.prodcut_descr }}\n                </ion-item>\n\n                <ion-item no-lines>\n                    <ion-label class="item_description"><i>Request</i></ion-label>\n                    <ion-checkbox color="dark" checked="false" item-end></ion-checkbox>\n\n                </ion-item>\n                <ion-item-divider>\n                   \n                  <rating [(ngModel)]="productItems.rating" \n                    readOnly="false" \n                    max="5"\n                    emptyStarIconName="star-outline"\n                    halfStarIconName="star-half" \n                    starIconName="star" \n                    nullable="true"\n                    (ngModelChange)="onModelRateChange($event,productItems.product_id)">\n                  </rating>\n\n                    <button ion-button outline item-end class="btn_grey" (click)="loadProductDetails(productItems.product_id);">More Details</button>\n                    \n                  </ion-item-divider>\n            </div>\n\n          </ion-item-group>\n          \n      </div>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\JV Projects\NB\M-Urembo\src\pages\product-list\product-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_services_rest_services__["a" /* RestServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ui_service_ui_service__["a" /* UiServiceProvider */]])
    ], ProductListPage);
    return ProductListPage;
}());

//# sourceMappingURL=product-list.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_services_rest_services__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ui_service_ui_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_list_product_list__ = __webpack_require__(152);
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
 * Generated class for the ServiceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceListPage = (function () {
    function ServiceListPage(navCtrl, navParams, restServicesProvider, uiService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restServicesProvider = restServicesProvider;
        this.uiService = uiService;
        this.serviceList = [];
        this.serviceListTemp = [];
        this.itemCounter = 0;
        this.items = [];
        this.servivceId = this.navParams.get('id');
        this.serviceName = this.navParams.get('serviceName');
        this.serviceIcon = this.navParams.get('serviceIcon');
    }
    ServiceListPage.prototype.ionViewDidLoad = function () {
        this.getServiceList();
    };
    ServiceListPage.prototype.getServiceList = function () {
        var _this = this;
        var requestParams = {
            action: 'servicelist',
            service_id: this.servivceId
        };
        this.uiService.loaderDialog();
        this.restServicesProvider.getRequestHandler(requestParams)
            .then(function (data) {
            console.log(data);
            _this.serviceList = data['service_list'];
            /**
             * Assign first n Items to lits
             */
            for (var i = 0; i < 10; i++) {
                if (i == _this.serviceList.length) {
                    break;
                }
                _this.serviceListTemp.push(_this.serviceList[i]);
                _this.itemCounter = i;
            }
            _this.uiService.loading.dismiss();
        }).catch(function (error) {
            console.log(error);
            _this.uiService.loading.dismiss();
        });
    };
    ServiceListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = _this.itemCounter + 1; i < _this.itemCounter + 5; i++) {
                if (_this.serviceListTemp.length == _this.serviceList.length) {
                    break;
                }
                _this.serviceListTemp.push(_this.serviceList[i]);
                _this.itemCounter = i;
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    ServiceListPage.prototype.serviceFilter = function (event) {
        var query = event.srcElement.value;
        if (query == undefined || query.length < 1) {
            this.serviceListTemp = this.serviceList;
            return false;
        }
        console.log(event);
        this.serviceListTemp = this.serviceList.filter(function (v) {
            if (v.service_descr && query) {
                if (v.service_descr.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    ServiceListPage.prototype.onCancel = function (event) {
        console.log("Search Cancelled");
        //this.serviceListTemp = this.serviceList;
    };
    ServiceListPage.prototype.onClear = function (event) {
        console.log("Search Cleared");
        // this.serviceListTemp = this.serviceList;
    };
    /**
     * lauch prodcut specific list screen
     */
    ServiceListPage.prototype.productlist = function (c_service_id, service_category_id, service_descr) {
        var params = {
            c_service_id: c_service_id,
            service_category_id: service_category_id,
            service_descr: service_descr
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__product_list_product_list__["a" /* ProductListPage */], params);
    };
    ServiceListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-service-list',template:/*ion-inline-start:"D:\JV Projects\NB\M-Urembo\src\pages\service-list\service-list.html"*/'<!--\n  Generated template for the ServiceListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-item class="page_title">\n          <ion-avatar item-start> <img src="{{ serviceIcon }}"></ion-avatar>\n          <ion-title > {{ serviceName }} </ion-title>\n      </ion-item>\n\n  </ion-navbar>\n  <ion-toolbar color=\'light\'>\n      <ion-searchbar\n        [(ngModel)]="searchInput"\n        [showCancelButton]="true"\n        (ionInput)="serviceFilter($event)"\n        (ionClear)="onClear($event)"\n        (ionCancel)="onCancel($event)">\n      </ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n\n      <ion-list>\n          <div *ngFor="let serviceList of serviceListTemp;let i = index">\n          <ion-item (click)="productlist(serviceList.c_service_id,serviceList.service_category_id,serviceList.service_descr)">\n            <div class="item_list" text-start>\n                    <img src="{{ serviceIcon }}" item-start>\n                    <span> {{ serviceList.service_descr }} </span>\n            </div>\n              \n            <!--div>\n            <ion-item>\n              <ion-note item-end>\n                  <ion-checkbox color="light" checked="!{{ serviceList.next_level }}"></ion-checkbox>\n              </ion-note>\n            </ion-item>\n\n            </div-->\n            \n\n          </ion-item>\n\n          </div>\n      </ion-list>\n     \n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)" ng-if="hasMoreData">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more items..."></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"D:\JV Projects\NB\M-Urembo\src\pages\service-list\service-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_services_rest_services__["a" /* RestServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ui_service_ui_service__["a" /* UiServiceProvider */]])
    ], ServiceListPage);
    return ServiceListPage;
}());

//# sourceMappingURL=service-list.js.map

/***/ }),

/***/ 166:
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
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/menu/menu.module": [
		682,
		1
	],
	"../pages/product-details/product-details.module": [
		683,
		0
	],
	"../pages/product-list/product-list.module": [
		684,
		3
	],
	"../pages/service-list/service-list.module": [
		685,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 210;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataServiceProvider = (function () {
    function DataServiceProvider() {
        this.httpTimeout = 20000;
    }
    DataServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataServiceProvider);
    return DataServiceProvider;
}());

//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_services_rest_services__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ui_service_ui_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_service_list_service_list__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, restServicesProvider, uiService) {
        this.navCtrl = navCtrl;
        this.restServicesProvider = restServicesProvider;
        this.uiService = uiService;
        this.title = 'M-Uremb0';
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.getDashboardItesm();
    };
    HomePage.prototype.getDashboardItesm = function () {
        var _this = this;
        var requestParams = { action: 'dashboard' };
        this.uiService.loaderDialog();
        //this.showLoader();
        this.restServicesProvider.getRequestHandler(requestParams)
            .then(function (data) {
            console.log(data);
            _this.dashboardItems = data['dashboard'];
            _this.services = data['services'];
            _this.uiService.loading.dismiss();
        });
    };
    HomePage.prototype.dialogueInfo = function (index) {
        this.dialogMsg = this.services[index]["service_description"];
        this.dialigTitle = this.services[index]["service_name"];
        console.log(index + " " + JSON.stringify(this.dialogMsg) + " " + this.dialigTitle);
        this.uiService.dialogAlert(this.dialogMsg, this.dialigTitle, "Got It");
    };
    HomePage.prototype.servicesList = function (index) {
        var serviceId = this.services[index]["service_id"];
        var serviceName = this.services[index]["service_name"];
        var serviceIcon = this.services[index]["service_image"];
        var params = { id: serviceId, serviceName: serviceName, serviceIcon: serviceIcon };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_service_list_service_list__["a" /* ServiceListPage */], params);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\JV Projects\NB\M-Urembo\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="page_title">\n      {{title}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n \n  <ion-slides class="dash_slides">\n    <ion-slide *ngFor="let dashboarditem of dashboardItems;let i = index">\n      <ion-grid>\n          <ion-row text-center>\n            <ion-col>\n                <ion-icon name="{{dashboarditem.dash_icon_name}}"></ion-icon> {{dashboarditem.dash_title}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <img class="dash_image" src="{{dashboarditem.dash_image}}"/>\n          </ion-row>\n          <ion-row class="dash_descr" text-center>\n              <p>{{dashboarditem.dash_descr}}</p>\n          </ion-row>\n          <!--ion-row text-center>\n              {{dashboarditem.dash_ext_link}}\n          </ion-row-->\n      </ion-grid>      \n    </ion-slide>\n  </ion-slides>\n\n    <ion-grid nowrap>\n      <ion-row *ngFor="let service of services;let i = index">\n        \n          <ion-card>\n            \n            <ion-item style="width:100%;">\n              <div class="item-header">\n                  <ion-avatar item-start> <img src="{{service.service_image}}"> {{service.service_name}}\n                    <ion-icon style="float:right;" name="information-circle" (click)=\'dialogueInfo(i);\'></ion-icon>\n                  </ion-avatar>\n              </div>\n              <div (click)=\'servicesList(i);\'  style="width:100%;">\n                <div class="service_image" text-center >\n                    <img src="{{service.service_image}}">\n                </div>\n              </div>\n              \n              <!--p>{{service.service_description}}</p-->\n            </ion-item>\n              \n          </ion-card>\n        \n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\JV Projects\NB\M-Urembo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_services_rest_services__["a" /* RestServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ui_service_ui_service__["a" /* UiServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_dialogs__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic2_rating__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_service_list_service_list__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_rest_services_rest_services__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_data_service_data_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_ui_service_ui_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_product_list_product_list__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_service_list_service_list__["a" /* ServiceListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_product_list_product_list__["a" /* ProductListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-details/product-details.module#ProductDetailsPageModule', name: 'ProductDetailsPage', segment: 'product-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-list/product-list.module#ProductListPageModule', name: 'ProductListPage', segment: 'product-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/service-list/service-list.module#ServiceListPageModule', name: 'ServiceListPage', segment: 'service-list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic2_rating__["a" /* Ionic2RatingModule */]
                //Dialogs
                //Http
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_service_list_service_list__["a" /* ServiceListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_product_list_product_list__["a" /* ProductListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_dialogs__["a" /* Dialogs */],
                __WEBPACK_IMPORTED_MODULE_12__providers_rest_services_rest_services__["a" /* RestServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_data_service_data_service__["a" /* DataServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_ui_service_ui_service__["a" /* UiServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_dialogs__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UiServiceProvider = (function () {
    function UiServiceProvider(loadingCtrl, dialogs) {
        this.loadingCtrl = loadingCtrl;
        this.dialogs = dialogs;
        this.httpTimeout = 3000;
    }
    UiServiceProvider.prototype.loaderDialog = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
    };
    UiServiceProvider.prototype.dialogAlert = function (message, title, buttonName) {
        return this.dialogs.alert(message, title, buttonName);
    };
    UiServiceProvider.prototype.dialogConfirm = function (message, title, buttonLabels) {
        return this.dialogs.confirm(message, title, buttonLabels);
    };
    UiServiceProvider.prototype.dialogPrompt = function (message, title, buttonLabels, defaultText) {
        return this.dialogs.prompt(message, title, buttonLabels, defaultText);
    };
    UiServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_dialogs__["a" /* Dialogs */]])
    ], UiServiceProvider);
    return UiServiceProvider;
}());

//# sourceMappingURL=ui-service.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(351);
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
    //@ViewChild(Nav) nav:Nav;
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\JV Projects\NB\M-Urembo\src\app\app.html"*/'\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\JV Projects\NB\M-Urembo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_service_data_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_ui_service_ui_service__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { RequestOptions } from '@angular/http/src/base_request_options';
/*
  Generated class for the RestServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestServicesProvider = (function () {
    function RestServicesProvider(http, dataService, uiService) {
        this.http = http;
        this.dataService = dataService;
        this.uiService = uiService;
        this.apiUrl = 'http://murembo.ysoft.co.ke';
        this.results = [];
        //console.log('Hello RestServicesProvider Provider');
    }
    RestServicesProvider.prototype.getRequestHandler = function (requestParams) {
        var _this = this;
        console.log(requestParams);
        /**
         * Request Haeder
         */
        var requestHeader = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        requestHeader.append('Content-Type', 'application/json');
        /**
         * Request Options
         */
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* RequestOptions */]({
            headers: requestHeader,
            params: requestParams,
            method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Post
        });
        /**
         * Set Request
         */
        var getRequest = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Request */](requestOptions.merge({
            url: this.apiUrl + '/'
        }));
        var promise = new Promise(function (resolve, reject) {
            //this.http.get(this.apiUrl+'/?action='+action)
            _this.http.request(getRequest)
                .timeoutWith(_this.dataService.httpTimeout, __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(new Error("Connecton Timeout")))
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                data = data;
                resolve(data);
            }, function (err) {
                console.log(err);
                _this.uiService.loading.dismiss();
            });
        });
        return promise;
    };
    RestServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_ui_service_ui_service__["a" /* UiServiceProvider */]])
    ], RestServicesProvider);
    return RestServicesProvider;
}());

//# sourceMappingURL=rest-services.js.map

/***/ })

},[352]);
//# sourceMappingURL=main.js.map