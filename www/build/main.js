
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FavoritesComponent = (function () {
    function FavoritesComponent() {
        this.title = "Favorites";
    }
    FavoritesComponent.prototype.ngOnInit = function () { };
    FavoritesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
            selector: 'favorites',template:/*ion-inline-start:"/Users/logansaso/Development/winexionic2/src/components/Favorites/favorites.component.html"*/'<!--<ion-view title="Favorites" id="page9" class=" ">\n    <ion-content padding="true" class="has-header">\n        <ion-list id="favorites-list7" class=" ">\n            <ion-item id="favorites-list-item20" class="  ">Item 1</ion-item>\n            <ion-item id="favorites-list-item21" class="  ">Item 2</ion-item>\n            <ion-item id="favorites-list-item22" class="  ">Item 3</ion-item>\n        </ion-list>\n    </ion-content>\n</ion-view>-->\n\n<header-bar [title]="title"></header-bar>'/*ion-inline-end:"/Users/logansaso/Development/winexionic2/src/components/Favorites/favorites.component.html"*/
        }), 
        __metadata('design:paramtypes', [])
    ], FavoritesComponent);
    return FavoritesComponent;
}());
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = (function () {
    function ListComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = "List";
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListComponent.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListComponent, {
            item: item
        });
    };
    ListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
            selector: 'list-component',template:/*ion-inline-start:"/Users/logansaso/Development/winexionic2/src/components/List/list.component.html"*/'<header-bar [title]="title"></header-bar>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/logansaso/Development/winexionic2/src/components/List/list.component.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], ListComponent);
    return ListComponent;
}());
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapViewComponent = (function () {
    function MapViewComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.title = "Map";
    }
    MapViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
            selector: 'map-view',template:/*ion-inline-start:"/Users/logansaso/Development/winexionic2/src/components/MapView/map-view.component.html"*/'<header-bar [title]="title"></header-bar>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/logansaso/Development/winexionic2/src/components/MapView/map-view.component.html"*/
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === 'function' && _a) || Object])
    ], MapViewComponent);
    return MapViewComponent;
    var _a;
}());
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToursComponent = (function () {
    function ToursComponent() {
    }
    ToursComponent.prototype.ngOnInit = function () { };
    ToursComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
            selector: 'tours',template:/*ion-inline-start:"/Users/logansaso/Development/winexionic2/src/components/Tours/tours.component.html"*/'<!--<ion-view title="Tours" id="page11" class=" ">\n    <ion-content padding="true" class="has-header">\n        <ion-list id="tours-list9" class=" ">\n            <ion-item id="tours-list-item26" class="  ">Item 1</ion-item>\n            <ion-item id="tours-list-item27" class="  ">Item 2</ion-item>\n            <ion-item id="tours-list-item28" class="  ">Item 3</ion-item>\n        </ion-list>\n    </ion-content>\n</ion-view>-->'/*ion-inline-end:"/Users/logansaso/Development/winexionic2/src/components/Tours/tours.component.html"*/
        }), 
        __metadata('design:paramtypes', [])
    ], ToursComponent);
    return ToursComponent;
}());
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
    function MyApp(platform) {
        this.platform = platform;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__components_MapView_map_view_component__["a" /* MapViewComponent */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            {
                title: 'Map',
                icon: '../assets/img/k3.png',
                component: __WEBPACK_IMPORTED_MODULE_3__components_MapView_map_view_component__["a" /* MapViewComponent */]
            },
            {
                title: 'List',
                icon: '../assets/img/k3.png',
                component: __WEBPACK_IMPORTED_MODULE_4__components_List_list_component__["a" /* ListComponent */]
            },
            {
                title: "Favorites",
                icon: '../assets/img/k3.png',
                component: __WEBPACK_IMPORTED_MODULE_6__components_Favorites_favorites_component__["a" /* FavoritesComponent */]
            },
            {
                title: "Tours",
                icon: '../assets/img/k3.png',
                component: __WEBPACK_IMPORTED_MODULE_5__components_Tours_tours_component__["a" /* ToursComponent */]
            }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* Splashscreen */].hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]), 
        __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({template:/*ion-inline-start:"/Users/logansaso/Development/winexionic2/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="menu">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ul class="side-list">\n      <li menuClose class="list-item" *ngFor="let p of pages" (click)="openPage(p)">\n        <div class="list-item-contents">\n          <h2 class="list-item-title">{{p.title}}</h2>\n          <img [src]="p.icon" class="list-item-image">\n        </div>\n        <hr class="hr-darkness">\n      </li>\n    </ul>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/logansaso/Development/winexionic2/src/app/app.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], MyApp);
    return MyApp;
}());
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailViewComponent = (function () {
    function DetailViewComponent() {
    }
    DetailViewComponent.prototype.ngOnInit = function () { };
    DetailViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
            selector: 'detail-view',template:/*ion-inline-start:"/Users/logansaso/Development/winexionic2/src/components/DetailView/detail-view.component.html"*/'<!--<ion-view title="Details" id="page3">\n\n    <ion-content padding="true" class="has-header">\n        <div class="button-bar">\n            <a class="button"><i class="icon ion-map"></i></a>\n            <a class="button"><i class="icon ion-android-car"></i></a>\n            <a class="button"><i class="icon ion-android-call"></i></a>\n            <a class="button"><i class="icon ion-android-cloud-circle"></i></a>\n        </div>\n        <div class="list card">\n            <ion-item>\n                <h2>{{ venue.name }}</h2></ion-item>\n            <div class="venue-img-holder">\n                <img class="venue-imgs" src="img/vineyard-oil.jpg"/>\n                <img class="venue-logo" [src]="http://192.241.228.100:1338/media/download/{{ venue.logoId }}"/>\n            </div>\n\n             At a Glance \n            <ion-item class="item item-body">\n                <h3>At a Glance</h3>\n                <p>Hours Today: {{ hoursToday }}</p>\n                <p>Wine Types: <span class="pill {{ wt }}" ng-repeat="wt in venue.wineTypes.broadTypes">{{ wt }}</span>\n                <span ng-if="!venue.wineTypes.broadTypes.length">Unknown, please call venue.</span></p>\n                <p>Tasting Fee: {{  fees }}</p>\n            </ion-item>\n\n             description \n            <div class="item item-body" id="details-list-item-container1">\n                <h3>Description</h3>\n                <div ng-class="showDesc ? \'item-expand active\' : \'item-expand inactive\'">\n                    <p>{{ venue.description }}</p>\n                </div>\n                <div ng-click="showDesc = !showDesc" class="item-expand-footer">\n                    <i ng-class="showDesc ? \'ion-ios-minus-outline\' : \'ion-ios-plus-outline\'"></i>\n                    {{ showDesc ? \'Less\' : \'More\' }}\n                </div>\n\n            </div>\n\n             Venue Info \n            <ion-item class="item item-body">\n                <h3>Venue</h3>\n                <p style="text-transform: capitalize;">\n                    Type: {{ venue.facilityType }}\n                </p>\n                <p style="text-transform: capitalize;">Atmosphere: {{ venue.atmosphere }}</p>\n                <p>Features: <span class="pill" ng-repeat="f in venue.features" ng-if="venue.features.length>0">{{ f }}</span>\n                <span ng-if="venue.features.length==0">No info in database :(</span></p>\n            </ion-item>\n\n\n            <ion-item class="item item-body">\n                <h3>Wine Varietals and Styles</h3>\n                <p><span class="pill {{ wt }}" ng-repeat="wt in venue.wineTypes.varietals">{{ wt }}</span>\n                    <span class="pill {{ wt }}" ng-repeat="wt in venue.wineTypes.broadTypes">{{ wt }}</span>\n                    <span ng-if="!venue.wineTypes.broadTypes.length">Unknown, please call venue.</span>\n                </p>\n            </ion-item>\n\n            <ion-item class="item item-body">\n                <h3>Contact Info</h3>\n                <p><span>{{ venue.address.street }}<br>{{ venue.address.city }}, {{ venue.address.state }}</span></p>\n                <p>Phone: {{ venue.phone.main }}</p>\n                <p>Website: <a href="{{ venue.eContact.website }}">{{ venue.eContact.website }}</a></p>\n                <p>Email: <a href="mailto:{{ venue.eContact.email }}">{{ venue.eContact.email }}</a></p>\n\n            </ion-item>\n\n        </div>\n    </ion-content>\n</ion-view>\n\n<script id="templates/details.popover.html" type="text/ng-template">\n    <ion-popover-view style="height: 430px;">\n        <ion-content>\n            <a class="item" href="http://ionicframework.com/docs/" target="_blank">\n                <span class="icon ion-heart" style="float: right;"></span> Mark Favorite\n            </a>\n            <a class="item" href="http://ionicframework.com/docs/" target="_blank">\n                <span class="icon ion-edit" style="float: right;"></span>Reviews\n            </a>\n            <a class="item" href="http://showcase.ionicframework.com/" target="_blank">\n                <span class="icon ion-cash" style="float: right;"></span>Deals\n            </a>\n            <a class="item" href="http://ionicframework.com/submit-issue/" target="_blank">\n                <span class="icon ion-alertionic serv" style="float: right;"></span>Submit an Issue\n            </a>\n            <a class="item" href="">\n                <span class="icon ion-map" style="float: right;"></span>Show on Map\n            </a>\n            <a class="item" href="">\n                <span class="icon ion-ios-navigate" style="float: right;"></span>Turn by Turn Nav\n            </a>\n            <a class="item" href="">\n                <span class="icon ion-android-phone-landscape" style="float: right;"></span>Call\n            </a>\n            <a class="item" href="">\n                <span class="icon ion-android-cloud-circle" style="float: right;"></span>Website\n            </a>\n        </ion-content>\n    </ion-popover-view>\n</script>-->'/*ion-inline-end:"/Users/logansaso/Development/winexionic2/src/components/DetailView/detail-view.component.html"*/
        }), 
        __metadata('design:paramtypes', [])
    ], DetailViewComponent);
    return DetailViewComponent;
}());