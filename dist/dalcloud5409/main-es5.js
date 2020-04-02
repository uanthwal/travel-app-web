function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_directives/alert.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_directives/alert.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_directivesAlertComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/booking-confirmation/booking-confirmation.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking-confirmation/booking-confirmation.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookingConfirmationBookingConfirmationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"confirmation-container\">\n    <div class=\"boooking-txt\">\n        <h2> Your booking is confirmed! </h2>\n        <h4>Booking Reference Number: {{bookingInfo._id}}</h4>\n    </div>\n    <div class=\"dne-img\">\n        <img src=\"../../assets/booking-done.png\" alt=\"\">\n    </div>\n    <div class=\"ticket-block\">\n        <div class=\"img-block\">\n            <img src=\"{{bookingInfo.mode == 'bus' ? '../../assets/bus.png' : '../../assets/flight.png'}}\" />\n            <div class=\"m-name\">\n                <label class=\"txt\"> {{bookingInfo.mode_company}}</label>\n            </div>\n            <div class=\"m-num\">\n                <label class=\"txt\"> ({{bookingInfo.mode_number}})</label>\n            </div>\n        </div>\n        <div class=\"data-block\">\n            <span>\n                Passenger Name: <label class=\"txt\">{{bookingInfo.username}}</label>\n            </span>\n            <span>\n                Source: <label class=\"txt\">\n                    {{bookingInfo.src}}\n                </label>\n            </span>\n            <span>\n                Destination: <label class=\"txt\">\n                    {{bookingInfo.dest}}\n                </label>\n            </span>\n            <span>\n                Journey Date: <label class=\"txt\">\n                    {{bookingInfo.date_of_travel}}\n                </label>\n            </span>\n            <span>\n                Mode: <label class=\"txt\">\n                    {{bookingInfo.mode}}\n                </label>\n            </span>\n            <span>\n                Fare: <label class=\"txt\">\n                    ${{bookingInfo.mode_fare}}\n                </label>\n            </span>\n        </div>\n    </div>\n    <div class=\"btn-block\">\n        <div>\n            <button (click)=\"onClickHome()\" class=\"btn-hme\">HOME</button>\n        </div>\n        <div>\n            <button (click)=\"onClickSendPdf()\" class=\"btn-pdf\">SEND PDF</button>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/booking-payment/booking-payment.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking-payment/booking-payment.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookingPaymentBookingPaymentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"payment-container\">\n    <form [formGroup]=\"paymentForm\" (ngSubmit)=\"onSubmit()\">\n        <table>\n            <tbody>\n                <tr>\n                    <td>Card Number</td>\n                    <td>\n                        <input type=\"text\" formControlName=\"cardnumber\" class=\"form-control\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.cardnumber.errors }\" />\n                        <div *ngIf=\"submitted && f.cardnumber.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.cardnumber.errors.required\">Name is required</div>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>Card Holder</td>\n                    <td>\n                        <input type=\"text\" formControlName=\"username\" class=\"form-control\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.username.errors.required\">Name is required</div>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>Expiry</td>\n                    <td>\n                        <input type=\"text\" formControlName=\"expiry\" class=\"form-control\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.expiry.errors }\" placeholder=\"MMDD\" />\n                        <div *ngIf=\"submitted && f.expiry.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.expiry.errors.required\">Name is required</div>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>CVV Number</td>\n                    <td>\n                        <input type=\"password\" formControlName=\"cvv\" class=\"form-control\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.cvv.errors }\" />\n                        <div *ngIf=\"submitted && f.cvv.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.cvv.errors.required\">Name is required</div>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </form>\n    <button (click)=\"onClickMakePayment()\">Make Payment</button>\n\n    \n</div>\n\n<div class=\"err-blck\" *ngIf=\"invalidFields?.length > 0\">\n    Check the following field(s):\n    <ul class=\"error-ul\">\n        <li *ngFor=\"let err of invalidFields\">\n            {{err}}\n        </li>\n    </ul>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/booking-plan/booking-plan.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking-plan/booking-plan.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookingPlanBookingPlanComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"plan-booking-container\">\n    <img src=\"../../assets/home_page.jpg\" alt=\"\">\n    <div class=\"layover\"></div>\n    <div class=\"path-block\">\n        <div class=\"f-block\">\n            <div class=\"h-text\">Source</div>\n            <div>\n                <select (change)=\"setTravelSource($event.target.value)\">\n                    <option *ngFor=\"let s of sourceList\" [value]=\"s.p_id\">\n                        {{s.p_name}}\n                    </option>\n                </select>\n            </div>\n        </div>\n        <div class=\"s-block\">\n            <div class=\"h-text\">Destination</div>\n            <div>WTL National Park</div>\n        </div>\n    </div>\n    <div class=\"calendar-view\">\n        <bs-datepicker-inline [bsValue]=\"bsInlineValue\" [minDate]=\"minDate\" (bsValueChange)=\"onDateChange($event) \">\n        </bs-datepicker-inline>\n    </div>\n    <div class=\"srch-btn\">\n        <button (click)=\"onClickSearch()\">Search</button>\n    </div>\n</div>\n\n<div class=\"serach-res-con\">\n    <div class=\"grid-row \">\n        <div class=\"grid-item\" *ngFor=\"let card of searchResults\">\n            <div class=\"img-blck\">\n                <img src=\"{{card.mode == 'bus' ? '../assets/bus.png' : '../assets/flight.png'}}\" />\n            </div>\n            <div class=\"mode-details\">\n                <span class=\"mode-content\">\n                    {{card.mode_company}}\n                </span>\n                <span class=\"mode\">\n                    MODE: {{card.mode}}\n                </span>\n                <span class=\"mode-number\">\n                    {{card.mode_number}}\n                </span>\n                <span class=\"place-book\">\n                    <button (click)=\"onClickBook(card)\">BOOK</button>\n                </span>\n            </div>\n            <div class=\"price-block\">\n                ${{card.mode_fare}}\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"home-container\">\n    <div *ngIf=\"userLoggedIn\" class=\"top-bar\">\n        <h2>Welcome, {{username}} <i class=\"fa fa-power-off off-icon\" (click)=\"onClickLogout()\"></i></h2> \n    </div>\n    <div *ngIf=\"!userLoggedIn\" class=\"top-bar\">\n        <span class=\"login-txt\" (click)=\"onClickLogin()\">Login</span>\n    </div>\n    <div class=\"search-block\">\n        <input [(ngModel)]=\"search_text\" placeholder=\"Search here....\" required>\n    </div>\n    <div class=\"search-btn-block\">\n        <button (click)=\"onClickSearch()\">Search</button>\n    </div>\n    <div *ngIf=\"trendingSearchRes?.length > 0\" class=\"search-results\">\n        <span class=\"trends\">Trending Places</span>\n        <div class=\"grid-row \">\n            <div class=\"grid-item\" *ngFor=\"let card of trendingSearchRes\">\n                <div class=\"img-blck\">\n                    <img src=\"https://tourismapp14.s3.amazonaws.com/{{card.place_name}}.jpg\" />\n                </div>\n                <div class=\"cntnt-blck\">\n                    <span class=\"place-name\">\n                        {{card.place_name}}\n                       </span> \n                       <span class=\"place-desc\">\n                        {{card.desc}}\n                       </span>\n                       <span class=\"place-province\">\n                        {{card.province_id}}\n                       </span> \n                       <span class=\"place-book\">\n                        <button (click)=\"onClickBook(card)\" >BOOK</button>\n                       </span> \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"grid-row \">\n        <div class=\"grid-item\" *ngFor=\"let card of searchResults\">\n            <div class=\"img-blck\">\n                <img src=\"https://tourismapp14.s3.amazonaws.com/{{card.place_name}}.jpg\" />\n            </div>\n            <div class=\"cntnt-blck\">\n                <span class=\"place-name\">\n                    {{card.place_name}}\n                   </span> \n                   <span class=\"place-desc\">\n                    {{card.desc}}\n                   </span>\n                   <span class=\"place-province\">\n                    {{card.province_id}}\n                   </span> \n                   <span class=\"place-book\">\n                    <button (click)=\"onClickBook(card)\" >BOOK</button>\n                   </span> \n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login-container\">\n    <div class=\"cred-container\">\n        <div class=\"blck\">\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-primary\">Login</button>\n                    <button (click)=\"onClickRegister()\" class=\"btn btn-primary reg-btn\">Register</button>\n                </div>\n            </form>\n        </div>\n        \n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"blcks\">\n    <div class=\"lft-blck\">\n\n    </div>\n    <div class=\"reg-form\">\n        <form  [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n       \n            <div class=\"form-group\">\n                <label for=\"username\">Name</label>\n                <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">Name is required</div>\n                </div>\n            </div>\n        \n            <div class=\"form-group\">\n                <label for=\"mobile\">Mobile Number</label>\n                <input type=\"text\" formControlName=\"mobile\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.mobile.errors }\" />\n                <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.mobile.errors.required\">Mobile Number is required</div>\n                </div>\n            </div>\n        \n            <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                </div>\n            </div>\n        \n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                    <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n            </div>\n            <div *ngIf=\"invalidFields?.length > 0\">\n                Check the following field(s):\n                <ul class=\"error-ul\">\n                    \n                    <li *ngFor=\"let err of invalidFields\">\n                        {{err}}\n                    </li>\n                </ul>\n            </div>\n\n\n        </form>\n    </div>\n    \n    \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-top/verify-top.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify-top/verify-top.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVerifyTopVerifyTopComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"verify-otp-container\">\n    <div class=\"otp-img\">\n        <img src=\"../../assets/otp.jpg\"/>\n    </div>\n    <div class=\"otp-container\">\n        <form [formGroup]=\"otpForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n                <label for=\"otp\">Enter the OTP sent your registered mail address </label>\n                <input type=\"text\" formControlName=\"otp\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.otp.errors }\" />\n                <div *ngIf=\"submitted && f.otp.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.otp.errors.required\">OTP is required</div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/_directives/alert.component.ts":
  /*!************************************************!*\
    !*** ./src/app/_directives/alert.component.ts ***!
    \************************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcApp_directivesAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services */
    "./src/app/_services/index.ts");

    var AlertComponent =
    /*#__PURE__*/
    function () {
      function AlertComponent(alertService) {
        _classCallCheck(this, AlertComponent);

        this.alertService = alertService;
      }

      _createClass(AlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return AlertComponent;
    }();

    AlertComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
      }];
    };

    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'alert',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alert.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_directives/alert.component.html")).default
    })], AlertComponent);
    /***/
  },

  /***/
  "./src/app/_directives/index.ts":
  /*!**************************************!*\
    !*** ./src/app/_directives/index.ts ***!
    \**************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcApp_directivesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./alert.component */
    "./src/app/_directives/alert.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return _alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"];
    });
    /***/

  },

  /***/
  "./src/app/_guards/auth.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/_guards/auth.guard.ts ***!
    \***************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcApp_guardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (JSON.parse(localStorage.getItem('isUserLoggedIn')) && JSON.parse(localStorage.getItem('session_id')) != null) {
            // logged in so return true
            return true;
          } // not logged in so redirect to login page with the return url


          this.router.navigate(['/home']);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./src/app/_guards/index.ts":
  /*!**********************************!*\
    !*** ./src/app/_guards/index.ts ***!
    \**********************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcApp_guardsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/_guards/auth.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"];
    });
    /***/

  },

  /***/
  "./src/app/_guards/reg.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/_guards/reg.guard.ts ***!
    \**************************************/

  /*! exports provided: LoginGuard */

  /***/
  function srcApp_guardsRegGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
      return LoginGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginGuard =
    /*#__PURE__*/
    function () {
      function LoginGuard(router) {
        _classCallCheck(this, LoginGuard);

        this.router = router;
      }

      _createClass(LoginGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (localStorage.getItem('isLoginInProcess')) {
            // logged in so return true
            return true;
          } // not logged in so redirect to login page with the return url


          this.router.navigate(['/home']);
          return false;
        }
      }]);

      return LoginGuard;
    }();

    LoginGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], LoginGuard);
    /***/
  },

  /***/
  "./src/app/_services/alert.service.ts":
  /*!********************************************!*\
    !*** ./src/app/_services/alert.service.ts ***!
    \********************************************/

  /*! exports provided: AlertService */

  /***/
  function srcApp_servicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AlertService =
    /*#__PURE__*/
    function () {
      function AlertService(router) {
        var _this2 = this;

        _classCallCheck(this, AlertService);

        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false; // clear alert message on route change

        router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            if (_this2.keepAfterNavigationChange) {
              // only keep for a single location change
              _this2.keepAfterNavigationChange = false;
            } else {
              // clear alert
              _this2.subject.next();
            }
          }
        });
      }

      _createClass(AlertService, [{
        key: "success",
        value: function success(message) {
          var keepAfterNavigationChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterNavigationChange = keepAfterNavigationChange;
          this.subject.next({
            type: 'success',
            text: message
          });
        }
      }, {
        key: "error",
        value: function error(message) {
          var keepAfterNavigationChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterNavigationChange = keepAfterNavigationChange;
          this.subject.next({
            type: 'error',
            text: message
          });
        }
      }, {
        key: "getMessage",
        value: function getMessage() {
          return this.subject.asObservable();
        }
      }]);

      return AlertService;
    }();

    AlertService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AlertService);
    /***/
  },

  /***/
  "./src/app/_services/app.service.ts":
  /*!******************************************!*\
    !*** ./src/app/_services/app.service.ts ***!
    \******************************************/

  /*! exports provided: AppService */

  /***/
  function srcApp_servicesAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppService =
    /*#__PURE__*/
    function () {
      function AppService() {
        _classCallCheck(this, AppService);
      }

      _createClass(AppService, [{
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          if (JSON.parse(localStorage.getItem("session_id")) != null && JSON.parse(localStorage.getItem('isUserLoggedIn'))) return true;
          return false;
        }
      }, {
        key: "isLoginInProcess",
        value: function isLoginInProcess() {
          var isLoginInProcess = JSON.parse(localStorage.getItem("isLoginInProcess"));
          if (null != isLoginInProcess && isLoginInProcess) return true;
          return false;
        }
      }, {
        key: "setLoginInProcess",
        value: function setLoginInProcess() {
          localStorage.setItem("isLoginInProcess", JSON.stringify(true));
        }
      }, {
        key: "removeLoginInProcess",
        value: function removeLoginInProcess() {
          localStorage.setItem("isLoginInProcess", JSON.stringify(false));
        }
      }]);

      return AppService;
    }();

    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AppService);
    /***/
  },

  /***/
  "./src/app/_services/authentication.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/_services/authentication.service.ts ***!
    \*****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcApp_servicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app.config */
    "./src/app/app.config.ts");

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(http) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(email, password) {
          return this.http.post(_app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].BASE_URL + _app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].LOGIN_URL, {
            email: email,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response.code == 200) {
              localStorage.setItem('currentUser', JSON.stringify(email));
            }

            return response;
          }));
        }
      }, {
        key: "verifyOtp",
        value: function verifyOtp(otp) {
          return this.http.post(_app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].BASE_URL + _app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].VERIFY_OTP, {
            email: JSON.parse(localStorage.getItem('currentUser')),
            otp: otp
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage to log user out
          localStorage.clear();
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/_services/index.ts":
  /*!************************************!*\
    !*** ./src/app/_services/index.ts ***!
    \************************************/

  /*! exports provided: AlertService, AuthenticationService, UserService */

  /***/
  function srcApp_servicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./alert.service */
    "./src/app/_services/alert.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"];
    });
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"];
    });
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/_services/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"];
    });
    /***/

  },

  /***/
  "./src/app/_services/user.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/user.service.ts ***!
    \*******************************************/

  /*! exports provided: UserService */

  /***/
  function srcApp_servicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.config */
    "./src/app/app.config.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "register",
        value: function register(user) {
          return this.http.post(_app_config__WEBPACK_IMPORTED_MODULE_3__["URL_CONFIG"].BASE_URL + _app_config__WEBPACK_IMPORTED_MODULE_3__["URL_CONFIG"].REGISTER_URL, user);
        }
      }, {
        key: "search",
        value: function search(data) {
          return this.http.post(_app_config__WEBPACK_IMPORTED_MODULE_3__["URL_CONFIG"].BASE_URL + _app_config__WEBPACK_IMPORTED_MODULE_3__["URL_CONFIG"].SEARCH_URL, data);
        }
      }, {
        key: "get_hotspots",
        value: function get_hotspots(data) {
          return this.http.post(_app_config__WEBPACK_IMPORTED_MODULE_3__["URL_CONFIG"].BASE_URL + _app_config__WEBPACK_IMPORTED_MODULE_3__["URL_CONFIG"].GET_HOTSPOTS, data);
        }
      }, {
        key: "getUserInfoBySession",
        value: function getUserInfoBySession(data) {
          return this.http.post(_app_config__WEBPACK_IMPORTED_MODULE_3__["URL_CONFIG"].BASE_URL + _app_config__WEBPACK_IMPORTED_MODULE_3__["URL_CONFIG"].SEARCH_URL, data);
        }
      }, {
        key: "searchTravelOptions",
        value: function searchTravelOptions(data) {
          return this.http.post(_app_config__WEBPACK_IMPORTED_MODULE_3__["URL_CONFIG"].BASE_URL + _app_config__WEBPACK_IMPORTED_MODULE_3__["URL_CONFIG"].GET_TRAVEL_MODES, data);
        }
      }, {
        key: "getAllProvinces",
        value: function getAllProvinces() {
          return this.http.post(_app_config__WEBPACK_IMPORTED_MODULE_3__["URL_CONFIG"].BASE_URL + _app_config__WEBPACK_IMPORTED_MODULE_3__["URL_CONFIG"].GET_ALL_PROVINCES, {});
        }
      }, {
        key: "bookTicket",
        value: function bookTicket(data) {
          return this.http.post(_app_config__WEBPACK_IMPORTED_MODULE_3__["URL_CONFIG"].BASE_URL + _app_config__WEBPACK_IMPORTED_MODULE_3__["URL_CONFIG"].BOOK_TICKET, data);
        }
      }, {
        key: "getBookingById",
        value: function getBookingById(data) {
          return this.http.post(_app_config__WEBPACK_IMPORTED_MODULE_3__["URL_CONFIG"].BASE_URL + _app_config__WEBPACK_IMPORTED_MODULE_3__["URL_CONFIG"].GET_BOOKING_BY_ID, data);
        }
      }, {
        key: "generateTicket",
        value: function generateTicket(data) {
          return this.http.post(_app_config__WEBPACK_IMPORTED_MODULE_3__["URL_CONFIG"].BASE_URL + _app_config__WEBPACK_IMPORTED_MODULE_3__["URL_CONFIG"].GENERATE_TICKET, data);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UserService);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Canada Toursim';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.config.ts":
  /*!*******************************!*\
    !*** ./src/app/app.config.ts ***!
    \*******************************/

  /*! exports provided: APP_CONFIG, URL_CONFIG, getConfigs */

  /***/
  function srcAppAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function () {
      return APP_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URL_CONFIG", function () {
      return URL_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getConfigs", function () {
      return getConfigs;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var protocol = location.protocol + "//" + location.host;
    var APP_CONFIG = {
      ADMIN_ICON: getConfigs()["ADMIN_ICON"]
    };
    var URL_CONFIG = {
      BASE_URL: getConfigs()["BASE_URL"],
      LOGIN_URL: ":3000/login",
      REGISTER_URL: ":3000/register",
      VERIFY_OTP: ":3000/verify-otp",
      SEARCH_URL: ":3001/api/search",
      GET_TRAVEL_MODES: ":3002/api/modes",
      GET_ALL_PROVINCES: ":3002/api/get-all-provinces",
      GET_BOOKING_BY_ID: ':3002/api/get-booking-by-id',
      GET_USER_INFO_BY_SESSION: ':3000/api/get-user-info-by-session',
      BOOK_TICKET: ':3002/api/book-ticket',
      GET_HOTSPOTS: ':3001/get-hotspots',
      GENERATE_TICKET: ':3002/api/generate-ticket'
    };

    function getConfigs() {
      if (protocol == "http://localhost:4200") {
        return {
          BASE_URL: "http://travel-canada-elb-1597027388.us-east-1.elb.amazonaws.com",
          ADMIN_ICON: "../assets/admin.png"
        };
      } else {
        return {
          BASE_URL: "http://travel-canada-elb-1597027388.us-east-1.elb.amazonaws.com",
          ADMIN_ICON: "../assets/admin.png"
        };
      }
    }
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./_directives */
    "./src/app/_directives/index.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./_guards */
    "./src/app/_guards/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.routing.module */
    "./src/app/app.routing.module.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _verify_top_verify_top_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./verify-top/verify-top.component */
    "./src/app/verify-top/verify-top.component.ts");
    /* harmony import */


    var _booking_plan_booking_plan_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./booking-plan/booking-plan.component */
    "./src/app/booking-plan/booking-plan.component.ts");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _booking_confirmation_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./booking-confirmation/booking-confirmation.component */
    "./src/app/booking-confirmation/booking-confirmation.component.ts");
    /* harmony import */


    var _booking_payment_booking_payment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./booking-payment/booking-payment.component */
    "./src/app/booking-payment/booking-payment.component.ts");
    /* harmony import */


    var _guards_reg_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./_guards/reg.guard */
    "./src/app/_guards/reg.guard.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./_services/app.service */
    "./src/app/_services/app.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _directives__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"], _verify_top_verify_top_component__WEBPACK_IMPORTED_MODULE_13__["VerifyTopComponent"], _booking_plan_booking_plan_component__WEBPACK_IMPORTED_MODULE_14__["BookingPlanComponent"], _booking_confirmation_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_17__["BookingConfirmationComponent"], _booking_payment_booking_payment_component__WEBPACK_IMPORTED_MODULE_18__["BookingPaymentComponent"]],
      providers: [_guards__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], _guards_reg_guard__WEBPACK_IMPORTED_MODULE_19__["LoginGuard"], _services__WEBPACK_IMPORTED_MODULE_8__["AlertService"], _services__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"], _services__WEBPACK_IMPORTED_MODULE_8__["UserService"], _services_app_service__WEBPACK_IMPORTED_MODULE_20__["AppService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app.routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./_guards */
    "./src/app/_guards/index.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _verify_top_verify_top_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./verify-top/verify-top.component */
    "./src/app/verify-top/verify-top.component.ts");
    /* harmony import */


    var _booking_plan_booking_plan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./booking-plan/booking-plan.component */
    "./src/app/booking-plan/booking-plan.component.ts");
    /* harmony import */


    var _booking_payment_booking_payment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./booking-payment/booking-payment.component */
    "./src/app/booking-payment/booking-payment.component.ts");
    /* harmony import */


    var _booking_confirmation_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./booking-confirmation/booking-confirmation.component */
    "./src/app/booking-confirmation/booking-confirmation.component.ts");
    /* harmony import */


    var _guards_reg_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./_guards/reg.guard */
    "./src/app/_guards/reg.guard.ts");

    var appRoutes = [{
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: "login",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: "register",
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
    }, {
      path: "verify-otp",
      component: _verify_top_verify_top_component__WEBPACK_IMPORTED_MODULE_7__["VerifyTopComponent"],
      canActivate: [_guards_reg_guard__WEBPACK_IMPORTED_MODULE_11__["LoginGuard"]]
    }, {
      path: "home",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: "plan-booking",
      component: _booking_plan_booking_plan_component__WEBPACK_IMPORTED_MODULE_8__["BookingPlanComponent"],
      canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: "booking-payment",
      component: _booking_payment_booking_payment_component__WEBPACK_IMPORTED_MODULE_9__["BookingPaymentComponent"],
      canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: "booking-confirmation",
      component: _booking_confirmation_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_10__["BookingConfirmationComponent"],
      canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, // otherwise redirect to home
    {
      path: "**",
      redirectTo: ""
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/booking-confirmation/booking-confirmation.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/booking-confirmation/booking-confirmation.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookingConfirmationBookingConfirmationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".confirmation-container {\n  width: 60%;\n  margin: 5% auto;\n}\n.confirmation-container .boooking-txt {\n  text-align: center;\n}\n.confirmation-container .dne-img {\n  text-align: center;\n}\n.confirmation-container .ticket-block {\n  padding: 5%;\n  display: -webkit-box;\n  display: flex;\n  border: 1px solid gray;\n}\n.confirmation-container .ticket-block .data-block {\n  width: 100%;\n  padding-left: 5%;\n}\n.confirmation-container .ticket-block .data-block span {\n  display: block;\n  font-size: 15px;\n  margin-top: 0.5%;\n}\n.confirmation-container .ticket-block .img-block img {\n  height: 145px;\n}\n.confirmation-container .ticket-block .img-block .m-num {\n  text-align: center;\n}\n.confirmation-container .ticket-block .img-block .m-name {\n  text-align: center;\n}\n.confirmation-container .txt {\n  font-weight: 700;\n}\n.confirmation-container .btn-block {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.confirmation-container .btn-block div {\n  margin: 5%;\n}\n.confirmation-container .btn-block button {\n  outline: none;\n  border: none;\n  background: #4caf50;\n  border-radius: 2px;\n  text-align: center;\n  font-size: 12px;\n  padding: 4px 20px;\n  color: white;\n}\n.confirmation-container .btn-block button:hover {\n  cursor: pointer;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cGVuZHJhL0Rvd25sb2Fkcy90cmF2ZWwtYXBwLXdlYi9zcmMvYXBwL2Jvb2tpbmctY29uZmlybWF0aW9uL2Jvb2tpbmctY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ib29raW5nLWNvbmZpcm1hdGlvbi9ib29raW5nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0FDRUo7QURBRTtFQUNFLGtCQUFBO0FDRUo7QURBRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtBQ0VKO0FEREk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNHTjtBREZNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0lSO0FEQU07RUFDRSxhQUFBO0FDRVI7QURBTTtFQUNFLGtCQUFBO0FDRVI7QURBTTtFQUNFLGtCQUFBO0FDRVI7QURFRTtFQUNFLGdCQUFBO0FDQUo7QURFRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNBSjtBRENJO0VBQ0UsVUFBQTtBQ0NOO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDTjtBREFNO0VBQ0UsZUFBQTtFQUNBLDJDQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9ib29raW5nLWNvbmZpcm1hdGlvbi9ib29raW5nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maXJtYXRpb24tY29udGFpbmVyIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiA1JSBhdXRvO1xuICAuYm9vb2tpbmctdHh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmRuZS1pbWcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAudGlja2V0LWJsb2NrIHtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgLmRhdGEtYmxvY2sge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNSU7XG4gICAgICB9XG4gICAgfVxuICAgIC5pbWctYmxvY2sge1xuICAgICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxNDVweDtcbiAgICAgIH1cbiAgICAgIC5tLW51bSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5tLW5hbWUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC50eHQge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgLmJ0bi1ibG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXYge1xuICAgICAgbWFyZ2luOiA1JTtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgcGFkZGluZzogNHB4IDIwcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmNvbmZpcm1hdGlvbi1jb250YWluZXIge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDUlIGF1dG87XG59XG4uY29uZmlybWF0aW9uLWNvbnRhaW5lciAuYm9vb2tpbmctdHh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbmZpcm1hdGlvbi1jb250YWluZXIgLmRuZS1pbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29uZmlybWF0aW9uLWNvbnRhaW5lciAudGlja2V0LWJsb2NrIHtcbiAgcGFkZGluZzogNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG4uY29uZmlybWF0aW9uLWNvbnRhaW5lciAudGlja2V0LWJsb2NrIC5kYXRhLWJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG4uY29uZmlybWF0aW9uLWNvbnRhaW5lciAudGlja2V0LWJsb2NrIC5kYXRhLWJsb2NrIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAwLjUlO1xufVxuLmNvbmZpcm1hdGlvbi1jb250YWluZXIgLnRpY2tldC1ibG9jayAuaW1nLWJsb2NrIGltZyB7XG4gIGhlaWdodDogMTQ1cHg7XG59XG4uY29uZmlybWF0aW9uLWNvbnRhaW5lciAudGlja2V0LWJsb2NrIC5pbWctYmxvY2sgLm0tbnVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbmZpcm1hdGlvbi1jb250YWluZXIgLnRpY2tldC1ibG9jayAuaW1nLWJsb2NrIC5tLW5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29uZmlybWF0aW9uLWNvbnRhaW5lciAudHh0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5jb25maXJtYXRpb24tY29udGFpbmVyIC5idG4tYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb25maXJtYXRpb24tY29udGFpbmVyIC5idG4tYmxvY2sgZGl2IHtcbiAgbWFyZ2luOiA1JTtcbn1cbi5jb25maXJtYXRpb24tY29udGFpbmVyIC5idG4tYmxvY2sgYnV0dG9uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA0cHggMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbmZpcm1hdGlvbi1jb250YWluZXIgLmJ0bi1ibG9jayBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/booking-confirmation/booking-confirmation.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/booking-confirmation/booking-confirmation.component.ts ***!
    \************************************************************************/

  /*! exports provided: BookingConfirmationComponent */

  /***/
  function srcAppBookingConfirmationBookingConfirmationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingConfirmationComponent", function () {
      return BookingConfirmationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var BookingConfirmationComponent =
    /*#__PURE__*/
    function () {
      function BookingConfirmationComponent(route, router, userService) {
        var _this3 = this;

        _classCallCheck(this, BookingConfirmationComponent);

        this.route = route;
        this.router = router;
        this.userService = userService;
        this.bookingInfo = {
          "_id": ""
        };
        this.route.queryParams.subscribe(function (params) {
          _this3.bookingId = params["b_id"];

          if (!_this3.bookingId) {
            _this3.router.navigate(["/home"]);

            return;
          }
        });
      }

      _createClass(BookingConfirmationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.userService.getBookingById({
            booking_id: this.bookingId
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            if (data["code"] == 200) {
              _this4.bookingInfo = data["data"][0];
            }
          }, function (error) {});
        }
      }, {
        key: "onClickHome",
        value: function onClickHome() {
          this.router.navigate(["/home"]);
        }
      }, {
        key: "onClickSendPdf",
        value: function onClickSendPdf() {
          debugger; // make an api call here to send the pdf file to user's mailbox

          this.userService.generateTicket({
            booking_id: this.bookingId
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            if (data["code"] == 200) {
              alert(data['message']);
            }
          }, function (error) {});
        }
      }]);

      return BookingConfirmationComponent;
    }();

    BookingConfirmationComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    BookingConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-booking-confirmation",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./booking-confirmation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/booking-confirmation/booking-confirmation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./booking-confirmation.component.scss */
      "./src/app/booking-confirmation/booking-confirmation.component.scss")).default]
    })], BookingConfirmationComponent);
    /***/
  },

  /***/
  "./src/app/booking-payment/booking-payment.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/booking-payment/booking-payment.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookingPaymentBookingPaymentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".payment-container {\n  border: 1px solid gray;\n  margin: 5% auto;\n  display: block;\n  padding: 5%;\n  border-radius: 5px;\n  width: 40%;\n  text-align: center;\n}\n.payment-container table {\n  width: 100%;\n  margin-bottom: 14%;\n}\n.payment-container table tr {\n  text-align: left;\n}\n.payment-container button {\n  outline: none;\n  border: none;\n  background: #4caf50;\n  border-radius: 2px;\n  text-align: center;\n  font-size: 12px;\n  padding: 4px 20px;\n  color: white;\n}\n.payment-container button:hover {\n  cursor: pointer;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.err-blck {\n  text-align: left;\n  color: red;\n  font-weight: 600;\n  margin: 0 auto;\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cGVuZHJhL0Rvd25sb2Fkcy90cmF2ZWwtYXBwLXdlYi9zcmMvYXBwL2Jvb2tpbmctcGF5bWVudC9ib29raW5nLXBheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jvb2tpbmctcGF5bWVudC9ib29raW5nLXBheW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEREk7RUFDRSxnQkFBQTtBQ0dOO0FEQUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNFSjtBRERJO0VBQ0UsZUFBQTtFQUNBLDJDQUFBO0FDR047QURFQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmctcGF5bWVudC9ib29raW5nLXBheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF5bWVudC1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBtYXJnaW46IDUlIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA1JTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNCU7XG4gICAgdHIge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDRweCAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuICB9XG59XG5cbi5lcnItYmxjayB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogNDAlO1xufVxuIiwiLnBheW1lbnQtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgbWFyZ2luOiA1JSBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNSU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDQwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBheW1lbnQtY29udGFpbmVyIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE0JTtcbn1cbi5wYXltZW50LWNvbnRhaW5lciB0YWJsZSB0ciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucGF5bWVudC1jb250YWluZXIgYnV0dG9uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA0cHggMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnBheW1lbnQtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmVyci1ibGNrIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA0MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/booking-payment/booking-payment.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/booking-payment/booking-payment.component.ts ***!
    \**************************************************************/

  /*! exports provided: BookingPaymentComponent */

  /***/
  function srcAppBookingPaymentBookingPaymentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingPaymentComponent", function () {
      return BookingPaymentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var BookingPaymentComponent =
    /*#__PURE__*/
    function () {
      function BookingPaymentComponent(route, router, formBuilder) {
        var _this5 = this;

        _classCallCheck(this, BookingPaymentComponent);

        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.invalidFields = [];
        this.route.queryParams.subscribe(function (params) {
          _this5.bookingId = params["b_id"];

          if (!_this5.bookingId) {
            _this5.router.navigate(["/home"]);

            return;
          }
        });
      }

      _createClass(BookingPaymentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.paymentForm = this.formBuilder.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cardnumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(4000000000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(4999999999999999)]],
            expiry: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(4)]],
            cvv: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(3)]]
          });
        } // convenience getter for easy access to form fields

      }, {
        key: "findInvalidControls",
        value: function findInvalidControls() {
          this.invalidFields = [];
          var controls = this.paymentForm.controls;

          for (var name in controls) {
            if (controls[name].invalid) {
              if (name == "username") this.invalidFields.push("User name");
              if (name == "cardnumber") this.invalidFields.push("Card Number should be 16 digits only");
              if (name == "expiry") this.invalidFields.push("Expiry Date should be 4 digits in MMDD format");
              if (name == "cvv") this.invalidFields.push("CVV should be 3 digits");
            }
          }

          debugger;
        }
      }, {
        key: "onClickMakePayment",
        value: function onClickMakePayment() {
          this.findInvalidControls();
          if (this.paymentForm.invalid) return;
          this.router.navigate(["/booking-confirmation"], {
            queryParams: {
              b_id: this.bookingId
            }
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.paymentForm.controls;
        }
      }]);

      return BookingPaymentComponent;
    }();

    BookingPaymentComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    BookingPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-booking-payment",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./booking-payment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/booking-payment/booking-payment.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./booking-payment.component.scss */
      "./src/app/booking-payment/booking-payment.component.scss")).default]
    })], BookingPaymentComponent);
    /***/
  },

  /***/
  "./src/app/booking-plan/booking-plan.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/booking-plan/booking-plan.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookingPlanBookingPlanComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".plan-booking-container {\n  position: relative;\n}\n.plan-booking-container img {\n  width: 100%;\n}\n.plan-booking-container .layover {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  background: black;\n  height: 100%;\n  opacity: 0.7;\n}\n.plan-booking-container .path-block {\n  color: white;\n  position: absolute;\n  top: 50px;\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  margin: 0 auto;\n}\n.plan-booking-container .path-block .f-block {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: right;\n  padding-right: 15px;\n}\n.plan-booking-container .path-block .s-block {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: left;\n  padding-left: 15px;\n}\n.plan-booking-container .path-block .h-text {\n  font-size: 30px;\n  font-weight: 600;\n}\n.plan-booking-container .calendar-view {\n  position: absolute;\n  top: 190px;\n  text-align: center;\n  width: 100%;\n}\n.plan-booking-container .srch-btn {\n  position: absolute;\n  top: 550px;\n  text-align: center;\n  width: 100%;\n}\n.plan-booking-container .srch-btn button {\n  padding: 5px 30px;\n  border-radius: 2px;\n  outline: none;\n  cursor: pointer;\n  border: none;\n}\n.plan-booking-container .srch-btn button:hover {\n  cursor: pointer;\n  background-color: #4caf50;\n  color: white;\n  border: none;\n}\n.grid-item {\n  display: -webkit-box;\n  display: flex;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  border-radius: 5px;\n  position: relative;\n  margin: 2% auto;\n  width: 50%;\n  -webkit-box-align: center;\n          align-items: center;\n  box-sizing: border-box;\n}\n.grid-item:hover {\n  cursor: pointer;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.grid-item .img-blck {\n  flex-basis: 10%;\n  text-align: center;\n}\n.grid-item .img-blck img {\n  border-radius: 5px 5px 0 0;\n  vertical-align: middle;\n  border-style: none;\n  height: 50px;\n  width: 50px;\n}\n.grid-item .mode-details {\n  padding: 10px;\n  flex-basis: 70%;\n}\n.grid-item .mode-details .mode-content {\n  font-weight: 700;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.grid-item .mode-details .mode {\n  font-size: 11px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.grid-item .mode-details .mode-number {\n  display: block;\n  font-weight: 500;\n  font-size: 11px;\n}\n.grid-item .mode-details .place-book {\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n}\n.grid-item .mode-details .place-book button {\n  outline: none;\n  border: none;\n  background: #4caf50;\n  border-radius: 2px;\n  text-align: center;\n  font-size: 12px;\n  padding: 4px 20px;\n  color: white;\n}\n.grid-item .mode-details .place-book button:hover {\n  cursor: pointer;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.grid-item .price-block {\n  flex-basis: 20%;\n  text-align: center;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cGVuZHJhL0Rvd25sb2Fkcy90cmF2ZWwtYXBwLXdlYi9zcmMvYXBwL2Jvb2tpbmctcGxhbi9ib29raW5nLXBsYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jvb2tpbmctcGxhbi9ib29raW5nLXBsYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0FDRUo7QURBRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRUo7QURBRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEREk7RUFDRSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDR047QURESTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNHTjtBRERJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDR047QURBRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0VKO0FEQUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNFSjtBRERJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0dOO0FERk07RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0lSO0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDRjtBREFFO0VBQ0UsZUFBQTtFQUNBLDJDQUFBO0FDRUo7QURBRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEREk7RUFDRSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0dOO0FEQUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0VKO0FEREk7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNHTjtBRERJO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNHTjtBRERJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0dOO0FEREk7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDR047QURGTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0lSO0FESFE7RUFDRSxlQUFBO0VBQ0EsMkNBQUE7QUNLVjtBREFFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmctcGxhbi9ib29raW5nLXBsYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxhbi1ib29raW5nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubGF5b3ZlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG4gIC5wYXRoLWJsb2NrIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC5mLWJsb2NrIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIC5zLWJsb2NrIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIH1cbiAgICAuaC10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICB9XG4gIC5jYWxlbmRhci12aWV3IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxOTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNyY2gtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1NTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDVweCAzMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZ3JpZC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAyJSBhdXRvO1xuICB3aWR0aDogNTAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuICAuaW1nLWJsY2sge1xuICAgIGZsZXgtYmFzaXM6IDEwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW1nIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgIH1cbiAgfVxuICAubW9kZS1kZXRhaWxzIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZsZXgtYmFzaXM6IDcwJTtcbiAgICAubW9kZS1jb250ZW50IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuICAgIC5tb2RlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG4gICAgLm1vZGUtbnVtYmVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG4gICAgLnBsYWNlLWJvb2sge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiA0cHggMjBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAucHJpY2UtYmxvY2sge1xuICAgIGZsZXgtYmFzaXM6IDIwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxufVxuIiwiLnBsYW4tYm9va2luZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGxhbi1ib29raW5nLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wbGFuLWJvb2tpbmctY29udGFpbmVyIC5sYXlvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwLjc7XG59XG4ucGxhbi1ib29raW5nLWNvbnRhaW5lciAucGF0aC1ibG9jayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5wbGFuLWJvb2tpbmctY29udGFpbmVyIC5wYXRoLWJsb2NrIC5mLWJsb2NrIHtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG4ucGxhbi1ib29raW5nLWNvbnRhaW5lciAucGF0aC1ibG9jayAucy1ibG9jayB7XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5wbGFuLWJvb2tpbmctY29udGFpbmVyIC5wYXRoLWJsb2NrIC5oLXRleHQge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucGxhbi1ib29raW5nLWNvbnRhaW5lciAuY2FsZW5kYXItdmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5wbGFuLWJvb2tpbmctY29udGFpbmVyIC5zcmNoLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5wbGFuLWJvb2tpbmctY29udGFpbmVyIC5zcmNoLWJ0biBidXR0b24ge1xuICBwYWRkaW5nOiA1cHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5wbGFuLWJvb2tpbmctY29udGFpbmVyIC5zcmNoLWJ0biBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZ3JpZC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAyJSBhdXRvO1xuICB3aWR0aDogNTAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmdyaWQtaXRlbTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5ncmlkLWl0ZW0gLmltZy1ibGNrIHtcbiAgZmxleC1iYXNpczogMTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ3JpZC1pdGVtIC5pbWctYmxjayBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmdyaWQtaXRlbSAubW9kZS1kZXRhaWxzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZmxleC1iYXNpczogNzAlO1xufVxuLmdyaWQtaXRlbSAubW9kZS1kZXRhaWxzIC5tb2RlLWNvbnRlbnQge1xuICBmb250LXdlaWdodDogNzAwO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5ncmlkLWl0ZW0gLm1vZGUtZGV0YWlscyAubW9kZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uZ3JpZC1pdGVtIC5tb2RlLWRldGFpbHMgLm1vZGUtbnVtYmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5ncmlkLWl0ZW0gLm1vZGUtZGV0YWlscyAucGxhY2UtYm9vayB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmdyaWQtaXRlbSAubW9kZS1kZXRhaWxzIC5wbGFjZS1ib29rIGJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogIzRjYWY1MDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNHB4IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5ncmlkLWl0ZW0gLm1vZGUtZGV0YWlscyAucGxhY2UtYm9vayBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4uZ3JpZC1pdGVtIC5wcmljZS1ibG9jayB7XG4gIGZsZXgtYmFzaXM6IDIwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/booking-plan/booking-plan.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/booking-plan/booking-plan.component.ts ***!
    \********************************************************/

  /*! exports provided: BookingPlanComponent */

  /***/
  function srcAppBookingPlanBookingPlanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingPlanComponent", function () {
      return BookingPlanComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var BookingPlanComponent =
    /*#__PURE__*/
    function () {
      function BookingPlanComponent(route, router, userService) {
        var _this6 = this;

        _classCallCheck(this, BookingPlanComponent);

        this.route = route;
        this.router = router;
        this.userService = userService;
        this.sourceList = [];
        this.bsInlineValue = new Date();
        this.dateSelected = new Date();
        this.minDate = new Date();
        this.searchResults = [];
        this.route.queryParams.subscribe(function (params) {
          _this6.destination = params["dest"];

          if (!_this6.destination) {
            _this6.router.navigate(["/home"]);

            return;
          }
        });
      }

      _createClass(BookingPlanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProvinceList();
        }
      }, {
        key: "setTravelSource",
        value: function setTravelSource(selectedSrc) {
          this.source = selectedSrc;
        }
      }, {
        key: "getProvinceList",
        value: function getProvinceList() {
          var _this7 = this;

          this.userService.getAllProvinces().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            if (data["code"] == 200) {
              _this7.sourceList = data["data"];
              _this7.source = data["data"][0]["p_id"];
            }
          }, function (error) {});
        }
      }, {
        key: "onClickSearch",
        value: function onClickSearch() {
          var _this8 = this;

          var payload = {
            date: "" + this.dateSelected,
            src: this.source,
            dest: this.destination
          };
          this.userService.searchTravelOptions(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            if (data["code"] == 200) {
              _this8.searchResults = data["data"];
            }
          }, function (error) {});
        }
      }, {
        key: "onDateChange",
        value: function onDateChange(event) {
          this.dateSelected = event;
        }
      }, {
        key: "onClickBook",
        value: function onClickBook(option) {
          var _this9 = this;

          var payload = {
            username: JSON.parse(localStorage.getItem("username")),
            src: this.source,
            dest: this.destination,
            mode: option.mode,
            mode_company: option.mode_company,
            mode_fare: option.mode_fare,
            mode_number: option.mode_number,
            mode_id: option.mode_id,
            date_of_travel: this.dateSelected,
            email_id: JSON.parse(localStorage.getItem("currentUser"))
          };
          debugger;
          this.userService.bookTicket(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            if (data["code"] == 200) {
              _this9.router.navigate(["/booking-payment"], {
                queryParams: {
                  b_id: data["booking_id"]
                }
              });
            }
          }, function (error) {});
        }
      }]);

      return BookingPlanComponent;
    }();

    BookingPlanComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    BookingPlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-booking-plan",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./booking-plan.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/booking-plan/booking-plan.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./booking-plan.component.scss */
      "./src/app/booking-plan/booking-plan.component.scss")).default]
    })], BookingPlanComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top-bar {\n  text-align: right;\n  padding: 1% 2%;\n}\n.top-bar .off-icon {\n  color: gray;\n}\n.top-bar .off-icon:hover {\n  color: red;\n  cursor: pointer;\n}\n.search-block {\n  text-align: center;\n  margin-top: 10%;\n}\n.search-block input {\n  padding: 10px 15px;\n  height: 58px;\n  font-size: 35px;\n  border: 2px solid gray;\n  border-radius: 4px;\n  width: 40%;\n}\n.search-btn-block {\n  text-align: center;\n  margin-top: 10px;\n}\n.search-btn-block button {\n  padding: 5px 20px;\n}\n.search-btn-block button:hover {\n  cursor: pointer;\n  background-color: #4caf50;\n  color: white;\n  border: none;\n}\n.grid-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  margin: 0px 5%;\n}\n.grid-item {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  border-radius: 5px;\n  height: 245px;\n  flex-basis: 20%;\n  -ms-flex: auto;\n  width: 259px;\n  position: relative;\n  margin: 2%;\n  box-sizing: border-box;\n}\n.grid-item:hover {\n  cursor: pointer;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.grid-item .img-blck img {\n  border-radius: 5px 5px 0 0;\n  vertical-align: middle;\n  border-style: none;\n  height: 150px;\n  width: 100%;\n}\n.grid-item .cntnt-blck {\n  padding: 10px;\n}\n.grid-item .cntnt-blck .place-name {\n  font-weight: 700;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.grid-item .cntnt-blck .place-desc {\n  font-size: 11px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.grid-item .cntnt-blck .place-province {\n  display: block;\n  font-weight: 500;\n  font-size: 11px;\n}\n.grid-item .cntnt-blck .place-book {\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n}\n.grid-item .cntnt-blck .place-book button {\n  outline: none;\n  border: none;\n  background: #4caf50;\n  border-radius: 2px;\n  text-align: center;\n  font-size: 12px;\n  padding: 4px 20px;\n  color: white;\n}\n.grid-item .cntnt-blck .place-book button:hover {\n  cursor: pointer;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.trends {\n  display: block;\n  margin: 0 7% !important;\n  font-size: 1.75rem;\n  margin: 0 5%;\n}\n.login-txt {\n  font-size: 18px;\n  border: 1px solid;\n  padding: 5px 15px;\n}\n.login-txt:hover {\n  cursor: pointer;\n  color: #4caf50;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cGVuZHJhL0Rvd25sb2Fkcy90cmF2ZWwtYXBwLXdlYi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDRSxjQUFBO0FDQ0o7QURBSTtFQUNFLFdBQUE7QUNFTjtBRERNO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNHUjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDRUY7QURERTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0dKO0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDRUY7QURERTtFQUNFLGlCQUFBO0FDR0o7QURGSTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSU47QURDQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7RUFDQSxjQUFBO0FDRUY7QURDQTtFQUNFLDBDQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsVUFBQTtFQUNBLHNCQUFBO0FDQ0Y7QURBRTtFQUNFLGVBQUE7RUFDQSwyQ0FBQTtBQ0VKO0FEQ0k7RUFDRSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NOO0FERUU7RUFDRSxhQUFBO0FDQUo7QURDSTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0NOO0FEQ0k7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0NOO0FEQ0k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ047QURDSTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNDTjtBREFNO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRVI7QUREUTtFQUNFLGVBQUE7RUFDQSwyQ0FBQTtBQ0dWO0FESUE7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNERjtBRElBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNERjtBREVFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtYmFyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZzogMSUgMiU7XG4gICAgLm9mZi1pY29uIHtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG59XG4uc2VhcmNoLWJsb2NrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGlucHV0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgaGVpZ2h0OiA1OHB4O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogNDAlO1xuICB9XG59XG5cbi5zZWFyY2gtYnRuLWJsb2NrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBidXR0b24ge1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLmdyaWQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDBweCA1JTtcbn1cblxuLmdyaWQtaXRlbSB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDI0NXB4O1xuICBmbGV4LWJhc2lzOiAyMCU7XG4gIC1tcy1mbGV4OiBhdXRvO1xuICB3aWR0aDogMjU5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBtYXJnaW46IDIlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuICAuaW1nLWJsY2sge1xuICAgIGltZyB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gIC5jbnRudC1ibGNrIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC5wbGFjZS1uYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuICAgIC5wbGFjZS1kZXNjIHtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG4gICAgLnBsYWNlLXByb3ZpbmNlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG4gICAgLnBsYWNlLWJvb2sge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiA0cHggMjBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbn1cbi50cmVuZHMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIDclICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgbWFyZ2luOiAwIDUlXG59XG5cbi5sb2dpbi10eHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjNGNhZjUwO1xuICAgIFxuICB9XG59IiwiLnRvcC1iYXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMSUgMiU7XG59XG4udG9wLWJhciAub2ZmLWljb24ge1xuICBjb2xvcjogZ3JheTtcbn1cbi50b3AtYmFyIC5vZmYtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlYXJjaC1ibG9jayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuLnNlYXJjaC1ibG9jayBpbnB1dCB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgaGVpZ2h0OiA1OHB4O1xuICBmb250LXNpemU6IDM1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLnNlYXJjaC1idG4tYmxvY2sge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uc2VhcmNoLWJ0bi1ibG9jayBidXR0b24ge1xuICBwYWRkaW5nOiA1cHggMjBweDtcbn1cbi5zZWFyY2gtYnRuLWJsb2NrIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5ncmlkLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAwcHggNSU7XG59XG5cbi5ncmlkLWl0ZW0ge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiAyNDVweDtcbiAgZmxleC1iYXNpczogMjAlO1xuICAtbXMtZmxleDogYXV0bztcbiAgd2lkdGg6IDI1OXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMiU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uZ3JpZC1pdGVtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmdyaWQtaXRlbSAuaW1nLWJsY2sgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZ3JpZC1pdGVtIC5jbnRudC1ibGNrIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5ncmlkLWl0ZW0gLmNudG50LWJsY2sgLnBsYWNlLW5hbWUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5ncmlkLWl0ZW0gLmNudG50LWJsY2sgLnBsYWNlLWRlc2Mge1xuICBmb250LXNpemU6IDExcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmdyaWQtaXRlbSAuY250bnQtYmxjayAucGxhY2UtcHJvdmluY2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLmdyaWQtaXRlbSAuY250bnQtYmxjayAucGxhY2UtYm9vayB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmdyaWQtaXRlbSAuY250bnQtYmxjayAucGxhY2UtYm9vayBidXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICM0Y2FmNTA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDRweCAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uZ3JpZC1pdGVtIC5jbnRudC1ibGNrIC5wbGFjZS1ib29rIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnRyZW5kcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgNyUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICBtYXJnaW46IDAgNSU7XG59XG5cbi5sb2dpbi10eHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cbi5sb2dpbi10eHQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNGNhZjUwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_services/app.service */
    "./src/app/_services/app.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router, userService, appService, authenticationService) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.userService = userService;
        this.appService = appService;
        this.authenticationService = authenticationService;
        this.search_text = "";
        this.searchResults = [];
        this.trendingSearchRes = [];
        this.userLoggedIn = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.userLoggedIn = this.appService.isUserLoggedIn();
          this.username = JSON.parse(localStorage.getItem("username"));
          this.appService.removeLoginInProcess();
          this.userService.get_hotspots({}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (responseData) {
            _this10.trendingSearchRes = responseData["data"];
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onClickSearch",
        value: function onClickSearch() {
          var _this11 = this;

          if (this.search_text == "") return;
          this.searchResults = [];
          this.userService.search({
            search_text: this.search_text,
            session_id: JSON.parse(localStorage.getItem("session_id"))
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (responseData) {
            _this11.trendingSearchRes = [];
            _this11.searchResults = responseData["data"];
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onClickBook",
        value: function onClickBook(card) {
          console.log(card);

          if (this.appService.isUserLoggedIn()) {
            this.router.navigate(["/plan-booking"], {
              queryParams: {
                dest: card.place_id
              }
            });
          } else {
            this.router.navigate(["/login"], {
              queryParams: {
                dest: card.place_id
              }
            });
          }
        }
      }, {
        key: "onClickLogout",
        value: function onClickLogout() {
          this.authenticationService.logout();
          this.userLoggedIn = this.appService.isUserLoggedIn();
          this.router.navigate(["/home"]);
        }
      }, {
        key: "onClickLogin",
        value: function onClickLogin() {
          this.router.navigate(["/login"]);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-home",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-container {\n  background-image: url('login.jpg');\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.login-container .cred-container {\n  width: 25%;\n  margin-left: 3%;\n  padding: 2%;\n  border-radius: 10px;\n}\n.login-container .cred-container .blck {\n  margin-top: 230px;\n  border: 1px solid gray;\n  border-radius: 5px;\n}\n.login-container .cred-container .blck form {\n  padding: 5%;\n}\n.login-container .reg-btn {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cGVuZHJhL0Rvd25sb2Fkcy90cmF2ZWwtYXBwLXdlYi9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0NGO0FEQ0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDTjtBREFNO0VBQ0UsV0FBQTtBQ0VSO0FERUU7RUFDRSxpQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9sb2dpbi5qcGcpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAuY3JlZC1jb250YWluZXIge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAuYmxjayB7XG4gICAgICBtYXJnaW4tdG9wOiAyMzBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBmb3JtIHtcbiAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5yZWctYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufVxuIiwiLmxvZ2luLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvbG9naW4uanBnKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubG9naW4tY29udGFpbmVyIC5jcmVkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgcGFkZGluZzogMiU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ubG9naW4tY29udGFpbmVyIC5jcmVkLWNvbnRhaW5lciAuYmxjayB7XG4gIG1hcmdpbi10b3A6IDIzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubG9naW4tY29udGFpbmVyIC5jcmVkLWNvbnRhaW5lciAuYmxjayBmb3JtIHtcbiAgcGFkZGluZzogNSU7XG59XG4ubG9naW4tY29udGFpbmVyIC5yZWctYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../_services/app.service */
    "./src/app/_services/app.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(formBuilder, route, router, authenticationService, alertService, appService) {
        var _this12 = this;

        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.appService = appService;
        this.loading = false;
        this.route.queryParams.subscribe(function (params) {
          _this12.destination = params["dest"];
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          this.authenticationService.logout();
          this.appService.setLoginInProcess();
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this13 = this;

          // stop here if form is invalid
          if (this.loginForm.invalid) {
            return;
          }

          this.authenticationService.login(this.f.email.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            if (data.code == 200) {
              if (null != _this13.destination) {
                _this13.router.navigate(["/verify-otp"], {
                  queryParams: {
                    dest: _this13.destination
                  }
                });
              } else _this13.router.navigate(["/verify-otp"]);
            } else {
              alert(data["message"]);
            }
          }, function (error) {});
        }
      }, {
        key: "onClickRegister",
        value: function onClickRegister() {
          if (null != this.destination) {
            this.router.navigate(["/register"], {
              queryParams: {
                dest: this.destination
              }
            });
          } else this.router.navigate(["/register"]);
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }, {
        type: _services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/register/register.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/register/register.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".blcks {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n.blcks .reg-form {\n  width: 20%;\n  float: right;\n  margin-right: 5%;\n  margin-left: 5%;\n  margin-top: 10%;\n}\n.blcks .lft-blck {\n  -webkit-box-flex: 1;\n          flex: 1;\n  background-image: url('register_form.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.blcks .error-ul {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cGVuZHJhL0Rvd25sb2Fkcy90cmF2ZWwtYXBwLXdlYi9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7QUNDRjtBREFFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDRUo7QURBRTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDRUo7QURBRTtFQUNFLFVBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsY2tzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICAucmVnLWZvcm0ge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgfVxuICAubGZ0LWJsY2sge1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9yZWdpc3Rlcl9mb3JtLmpwZyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICAuZXJyb3ItdWwge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbn1cbiIsIi5ibGNrcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5ibGNrcyAucmVnLWZvcm0ge1xuICB3aWR0aDogMjAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuLmJsY2tzIC5sZnQtYmxjayB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvcmVnaXN0ZXJfZm9ybS5qcGcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uYmxja3MgLmVycm9yLXVsIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../_services/app.service */
    "./src/app/_services/app.service.ts");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(route, formBuilder, router, userService, appService, authenticationService) {
        var _this14 = this;

        _classCallCheck(this, RegisterComponent);

        this.route = route;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.appService = appService;
        this.authenticationService = authenticationService;
        this.invalidFields = [];
        this.route.queryParams.subscribe(function (params) {
          _this14.destination = params["dest"];
        });
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.formBuilder.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/)]],
            mobile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(10)]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
          });
        } // convenience getter for easy access to form fields

      }, {
        key: "findInvalidControls",
        value: function findInvalidControls() {
          this.invalidFields = [];
          var controls = this.registerForm.controls;

          for (var name in controls) {
            if (controls[name].invalid) {
              if (name == "username") this.invalidFields.push("User name");
              if (name == "email") this.invalidFields.push("Email Address");
              if (name == "mobile") this.invalidFields.push("Mobile Number");
              if (name == "password") this.invalidFields.push("Password should be minimum 6 characters");
            }
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this15 = this;

          this.findInvalidControls(); // stop here if form is invalid

          if (this.registerForm.invalid) {
            return;
          }

          this.userService.register(this.registerForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            var msg = "";

            if (data.code == 200) {
              msg = data["message"];

              _this15.appService.setLoginInProcess();

              setTimeout(function () {
                _this15.authenticationService.login(_this15.f.email.value, _this15.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
                  if (data.code == 200) {
                    msg = msg + " " + data["message"];
                    alert(msg);

                    if (null != _this15.destination) {
                      _this15.router.navigate(["/verify-otp"], {
                        queryParams: {
                          dest: _this15.destination
                        }
                      });
                    } else _this15.router.navigate(["/verify-otp"]);
                  } else {
                    alert(data["message"]);
                  }
                }, function (error) {});
              }, 3000);
            }
          }, function (error) {});
        }
      }, {
        key: "f",
        get: function get() {
          return this.registerForm.controls;
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/register/register.component.scss")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/verify-top/verify-top.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/verify-top/verify-top.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVerifyTopVerifyTopComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".otp-container {\n  width: 30%;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.otp-img {\n  text-align: center;\n}\n\n.otp-img img {\n  height: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cGVuZHJhL0Rvd25sb2Fkcy90cmF2ZWwtYXBwLXdlYi9zcmMvYXBwL3ZlcmlmeS10b3AvdmVyaWZ5LXRvcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmVyaWZ5LXRvcC92ZXJpZnktdG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURESTtFQUNJLGFBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS10b3AvdmVyaWZ5LXRvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdHAtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5vdHAtaW1nIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICB9XG59IiwiLm90cC1jb250YWluZXIge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3RwLWltZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5vdHAtaW1nIGltZyB7XG4gIGhlaWdodDogMzUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/verify-top/verify-top.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/verify-top/verify-top.component.ts ***!
    \****************************************************/

  /*! exports provided: VerifyTopComponent */

  /***/
  function srcAppVerifyTopVerifyTopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyTopComponent", function () {
      return VerifyTopComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var VerifyTopComponent =
    /*#__PURE__*/
    function () {
      function VerifyTopComponent(formBuilder, route, router, authenticationService, alertService) {
        var _this16 = this;

        _classCallCheck(this, VerifyTopComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.route.queryParams.subscribe(function (params) {
          _this16.destination = params["dest"];
        });
      }

      _createClass(VerifyTopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.otpForm = this.formBuilder.group({
            otp: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this17 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.otpForm.invalid) {
            return;
          }

          this.loading = true;
          this.authenticationService.verifyOtp(this.f.otp.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
            debugger;

            if (data.code == 200) {
              localStorage.setItem("isUserLoggedIn", JSON.stringify(true));
              localStorage.setItem("session_id", JSON.stringify(data.session_id));
              localStorage.setItem("username", JSON.stringify(data['data']['username']));

              if (null != _this17.destination) {
                _this17.router.navigate(["/plan-booking"], {
                  queryParams: {
                    dest: _this17.destination
                  }
                });
              } else {
                _this17.router.navigate(["/home"]);
              }
            } else {
              localStorage.setItem("isUserLoggedIn", JSON.stringify(false));
              localStorage.setItem("session_id", JSON.stringify(null));
            }
          }, function (error) {
            _this17.alertService.error(error);

            _this17.loading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.otpForm.controls;
        }
      }]);

      return VerifyTopComponent;
    }();

    VerifyTopComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }];
    };

    VerifyTopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-verify-top",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verify-top.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-top/verify-top.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verify-top.component.scss */
      "./src/app/verify-top/verify-top.component.scss")).default]
    })], VerifyTopComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/upendra/Downloads/travel-app-web/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map