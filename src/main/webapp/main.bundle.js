webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_app_component__ = __webpack_require__("./src/app/component/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_drawer_drawer_component__ = __webpack_require__("./src/app/component/drawer/drawer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_viewer_viewer_component__ = __webpack_require__("./src/app/component/viewer/viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_indexer_service__ = __webpack_require__("./src/app/service/indexer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__component_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__component_drawer_drawer_component__["a" /* DrawerComponent */],
                __WEBPACK_IMPORTED_MODULE_6__component_viewer_viewer_component__["a" /* ViewerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__service_indexer_service__["a" /* IndexerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__component_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <drawer class=\"first col-4\" title=\"Tags\" [items]=\"tags\" (onClicked)=\"tagSelect($event)\"></drawer>\n        <drawer *ngIf=\"connected\" class=\"second col-4\" title=\"Reachable\" [items]=\"connected\" (onClicked)=\"complete($event)\"></drawer>\n        <drawer *ngIf=\"path\" class=\"third col-4\" title=\"Path\" [items]=\"path\" (onClicked)=\"selectAPI($event)\"></drawer>\n        <viewer *ngIf=\"selectedAPI != null\" [api]=\"selectedAPI\" (onExit)=\"deselectAPI($event)\"></viewer>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/component/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_indexer_service__ = __webpack_require__("./src/app/service/indexer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        var _this = this;
        this.service = service;
        service.getTags().subscribe(function (res) { return _this.tags = res; });
    }
    AppComponent.prototype.tagSelect = function (item) {
        var _this = this;
        this.start = item.name;
        this.service.getReachable(item.name).subscribe(function (res) { return _this.connected = res; });
    };
    AppComponent.prototype.complete = function (item) {
        var _this = this;
        this.service.getPath(this.start, item.name).subscribe(function (res) { return _this.path = res; });
    };
    AppComponent.prototype.deselectAPI = function (item) {
        console.log("abort");
        this.selectedAPI = null;
    };
    AppComponent.prototype.selectAPI = function (item) {
        console.log("Selected: " + item);
        this.selectedAPI = item;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/component/app.component.html"),
            styles: [__webpack_require__("./src/app/component/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_indexer_service__["a" /* IndexerService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/component/drawer/drawer.component.css":
/***/ (function(module, exports) {

module.exports = ".drawer {\n    height: 100%;\n    opacity: 1;\n    -webkit-animation: fadein 1s;\n}\n\n.title {\n    color: #AAA;\n    font-weight: 900;\n    font-size: 32px;\n    letter-spacing: 5px;\n    font-family: 'Dejavu Sans';\n    margin: 10px;\n}\n\n.item {\n    color: #AAA;\n    font-weight: 600;\n    font-size: 18px;\n    letter-spacing: 3px;\n    font-family: 'Dejavu Sans';\n    width: 100%;\n    padding: 10px;\n    border-bottom: 2px solid white;\n    border-top: 2px solid white;\n    cursor: pointer;\n}\n\n.item:hover {\n    background-color: #1c2d49;\n}\n\n.selected:hover {\n    background-color: #04ebb9;\n}\n\n.selected {\n    background-color: #00ffc8;\n    color: #444;\n}"

/***/ }),

/***/ "./src/app/component/drawer/drawer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"drawer\">\n    <div class=\"title\">\n        {{title}}\n    </div>\n    \n    <div class=\"item\" [ngClass]=\"{'item': true, 'selected': item.name === selected}\" *ngFor=\"let item of items\" (click)=\"clicked(item)\">\n        {{item.name}}\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/component/drawer/drawer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DrawerComponent = /** @class */ (function () {
    function DrawerComponent() {
        this.title = "NaN";
        this.onClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    DrawerComponent.prototype.clicked = function (item) {
        this.selected = item.name;
        this.onClicked.emit(item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], DrawerComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], DrawerComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], DrawerComponent.prototype, "onClicked", void 0);
    DrawerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'drawer',
            template: __webpack_require__("./src/app/component/drawer/drawer.component.html"),
            styles: [__webpack_require__("./src/app/component/drawer/drawer.component.css")]
        })
    ], DrawerComponent);
    return DrawerComponent;
}());



/***/ }),

/***/ "./src/app/component/viewer/viewer.component.css":
/***/ (function(module, exports) {

module.exports = ".overlay {\n    position: fixed;\n    left: 0px;\n    right: 0px;\n    width: 100%;\n    height: 100%;\n    background-color: #000;\n    opacity: 0.5;\n    cursor: pointer;\n    -webkit-animation: fadeOverlay 0.25s;\n}\n\n@-webkit-keyframes fadeOverlay {\n    from { opacity: 0; }\n    to   { opacity: 0.5; }\n}\n\n@keyframes fadeOverlay {\n    from { opacity: 0; }\n    to   { opacity: 0.5; }\n}\n\n.window {\n    position: fixed;\n    width: 20%;\n    left: 40%;\n    top: 150px;\n    background-color: #182946;\n    color: #DDD;\n    padding: 20px;\n    -webkit-animation: dropIn 0.5s;\n}\n\n.hideOverlay {\n    -webkit-animation: fadeoutOverlay 0.5s;\n    opacity: 0;\n}\n\n@-webkit-keyframes fadeout {\n    from { opacity: 0.5; }\n    to { opacity: 0; }\n}\n\n@keyframes fadeout {\n    from { opacity: 0.5; }\n    to { opacity: 0; }\n}\n\n.hide {\n    -webkit-animation: fadeout 0.5s;\n    opacity: 0;\n}\n\n@keyframes fadeout {\n    from { opacity: 1; }\n    to { opacity: 0; }\n}\n\n@-webkit-keyframes dropIn {\n    from { top: -150px; }\n    to { top: 150px; }\n}\n\n@keyframes dropIn {\n    from { top: -150px; }\n    to { top: 150px; }\n}\n\n.title {\n    font-weight: 900;\n    font-size: 24px;\n    text-align: center;\n}\n\n.url {\n    text-align: right;\n}"

/***/ }),

/***/ "./src/app/component/viewer/viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" [ngClass]=\"{'hideOverlay': hide}\" (click)=\"exit()\"></div>\n\n<div class=\"window\" [ngClass]=\"{'hide': hide}\">\n    <div class=\"title\">\n        {{api.name}}\n    </div>\n    <hr />\n    {{api.desc}}\n    <hr />\n    <div class=\"url\">\n        <a href=\"{{api.url}}\">{{api.url}}</a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/component/viewer/viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewerComponent = /** @class */ (function () {
    function ViewerComponent() {
        this.hide = false;
        this.onExit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    ViewerComponent.prototype.exit = function (item) {
        var _this = this;
        this.hide = true;
        setTimeout(function () { _this.onExit.emit(item); }, 500);
        //this.onExit.emit(item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ViewerComponent.prototype, "api", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], ViewerComponent.prototype, "onExit", void 0);
    ViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'viewer',
            template: __webpack_require__("./src/app/component/viewer/viewer.component.html"),
            styles: [__webpack_require__("./src/app/component/viewer/viewer.component.css")]
        })
    ], ViewerComponent);
    return ViewerComponent;
}());



/***/ }),

/***/ "./src/app/service/indexer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndexerService = /** @class */ (function () {
    function IndexerService(http) {
        this.http = http;
        this.baseURL = "/apiindex-1.0/api/index";
        console.log("constructing services");
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Access-Control-Allow-Headers', '*');
        this.headers.append('Access-Control-Allow-Origin', '*');
    }
    IndexerService.prototype.getTags = function () {
        return this.http.get(this.baseURL + "/tag", { headers: this.headers }).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    IndexerService.prototype.getAPI = function (tag) {
        return this.http.get(this.baseURL + "/api/" + tag, { headers: this.headers }).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    IndexerService.prototype.getReachable = function (tag) {
        return this.http.get(this.baseURL + "/tag/" + tag, { headers: this.headers }).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    IndexerService.prototype.getPath = function (start, end) {
        return this.http.get(this.baseURL + "/path/" + start + "/" + end, { headers: this.headers }).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    IndexerService.prototype.handleError = function (error) {
        var errMsg;
        errMsg = error.status + " - " + (error.statusText || '');
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(errMsg);
    };
    IndexerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], IndexerService);
    return IndexerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map