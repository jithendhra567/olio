(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0: function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/jithendhrakayithi/Desktop/olio/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2MiI": function MiI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "GS7A");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "wD+u");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(route, db) {
          _classCallCheck(this, HeaderComponent);

          this.route = route;
          this.db = db;
          this.title = "POS";
          var hotel = window.location.pathname.split("/")[1];
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 22,
        vars: 2,
        consts: [["id", "header"], [1, "header_olio"], [1, "power"], [1, "header_2"], [1, "item"], ["src", "https://img.icons8.com/fluent/2x/security-configuration.png", "alt", ""], ["src", "https://img.icons8.com/fluent/2x/filled-like.png", "alt", ""], ["src", "https://img.icons8.com/fluent/48/000000/discount.png", "alt", ""]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Powered by");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Olio");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Safe Dining");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Stories");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Offers");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@openClose", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
          }
        },
        styles: ["*[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.header_olio[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 20px;\n  margin-top: -10px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n\n.header_olio[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: Georgia, serif;\n  margin: 0px;\n  align-self: flex-end;\n}\n\n.header_olio[_ngcontent-%COMP%]   .power[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n\n.header_olio[_ngcontent-%COMP%]   .power[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-right: 5px;\n  margin-bottom: 0px;\n}\n\n.header_olio[_ngcontent-%COMP%]   .power[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 400;\n  margin: 5px 0px 0px 0px;\n  color: #344649;\n}\n\n.header_2[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 5px;\n  margin-left: -5px;\n  display: flex;\n  justify-self: auto;\n  margin-top: -20px;\n}\n\n.header_2[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin: 10px;\n  display: flex;\n}\n\n.header_2[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  margin-left: 8px;\n}\n\n.header_2[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtBQURKOztBQUtBO0VBQ0kseUJBUkc7RUFTSCxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQUZKOztBQUdJO0VBQ0ksMkJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFEUjs7QUFHSTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQURSOztBQUVRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBWjs7QUFFUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUFaOztBQVFBO0VBQ0kseUJBeENHO0VBeUNILFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBTEo7O0FBTUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUpSOztBQUtRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUhaOztBQUtRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBSFoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWFpbjogI2ZmZmZmZjtcblxuKntcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xufVxuXG5cbi5oZWFkZXJfb2xpb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRtYWluO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGgxe1xuICAgICAgICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICB9XG4gICAgLnBvd2Vye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIHB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBtYXJnaW46IDVweCAwcHggMHB4IDBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzQ0NjQ5O1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuXG4uaGVhZGVyXzJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW47XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1zZWxmOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIC5pdGVte1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19 */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: '1'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: '0'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1500))])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
              opacity: '1'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
              opacity: '0'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1500))])]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR": function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebase: {
          apiKey: "AIzaSyALAGLlmiIPG6gxzsk6J7InKxdr8dgSwmc",
          authDomain: "olio-ordering.firebaseapp.com",
          projectId: "olio-ordering",
          storageBucket: "olio-ordering.appspot.com",
          messagingSenderId: "721433473155",
          appId: "1:721433473155:web:e5c60978954a3cc814ebb6",
          measurementId: "G-0CFLYNKNPG"
        }
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
    "IhOl": function IhOl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function () {
        return CategoriesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _order_order_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../order/order.component */
      "uBHN");
      /* harmony import */


      var _Items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Items */
      "RJPO");
      /* harmony import */


      var _info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../info/info.component */
      "XSv0");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "Km1n");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "wD+u");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      var _c0 = ["notify"];

      function CategoriesComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesComponent_div_21_Template_div_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var item_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.addtocart(item_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r1.itemId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.itemName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.rate, " \u20B9");
        }
      }

      var _c1 = function _c1() {
        return ["../../"];
      };

      var CategoriesComponent = /*#__PURE__*/function () {
        function CategoriesComponent(_bottomSheet, firestore, route, router) {
          var _this = this;

          _classCallCheck(this, CategoriesComponent);

          this._bottomSheet = _bottomSheet;
          this.firestore = firestore;
          this.route = route;
          this.router = router;
          this.items = [];
          this.cartItems = _Items__WEBPACK_IMPORTED_MODULE_2__["Items"].cartItems.length;
          this.hotel_name = '';
          this.hotel_name = route.snapshot.params.hotel;
          var menu = route.snapshot.params.menu;
          firestore.collection(this.hotel_name, function (ref) {
            return ref.where("categoryName", "==", menu);
          }).get().toPromise().then(function (data) {
            var docs = data.docs;
            docs.forEach(function (doc) {
              var temp = doc.data();

              _this.items.push(temp);
            });
          });
        }

        _createClass(CategoriesComponent, [{
          key: "cartupdate",
          value: function cartupdate() {
            var _this2 = this;

            this.items.forEach(function (item) {
              var _this2$getId = _this2.getId(item[_Items__WEBPACK_IMPORTED_MODULE_2__["Name"].id]),
                  _this2$getId2 = _slicedToArray(_this2$getId, 2),
                  index = _this2$getId2[0],
                  __id = _this2$getId2[1];

              setTimeout(function () {
                // Items.allItems[__id][index][Name.isAdded]=!Items.allItems[__id][index][Name.isAdded];
                _this2.addtocart(item[_Items__WEBPACK_IMPORTED_MODULE_2__["Name"].id]);
              }, 1000);
            });
          }
        }, {
          key: "getId",
          value: function getId(id) {
            var __id = id.split("I")[0];
            var items = _Items__WEBPACK_IMPORTED_MODULE_2__["Items"].allItems[__id];
            var index = "";

            for (var i in items) {
              if (items[i][_Items__WEBPACK_IMPORTED_MODULE_2__["Name"].id] == id) {
                index = i;
              }
            }

            return [index, __id];
          }
        }, {
          key: "addtocart",
          value: function addtocart(item) {
            var cart = document.getElementById(item.itemId).getElementsByClassName("cart")[0];

            var isAdded = _Items__WEBPACK_IMPORTED_MODULE_2__["Items"].isAddedToCart(item);

            cart.style.backgroundColor = isAdded ? "#296fca" : "#f44336";
            cart.innerText = isAdded ? "add" : "added";
            if (isAdded) _Items__WEBPACK_IMPORTED_MODULE_2__["Items"].removeFromCart(item);else _Items__WEBPACK_IMPORTED_MODULE_2__["Items"].cartItems.push(item);
            this.cartItems = _Items__WEBPACK_IMPORTED_MODULE_2__["Items"].cartItems.length;
          }
        }, {
          key: "cart",
          value: function cart() {
            var _this3 = this;

            var bottomSheetRef = this._bottomSheet.open(_order_order_component__WEBPACK_IMPORTED_MODULE_1__["OrderComponent"]);

            bottomSheetRef.afterDismissed().subscribe(function () {
              if (bottomSheetRef.instance.isPlaceOrder) _this3.router.navigate([_this3.hotel_name + '/placeorder']);
            });
          }
        }, {
          key: "itemInfo",
          value: function itemInfo(id) {
            var _this4 = this;

            var ref = this._bottomSheet.open(_info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"], {
              data: {
                id: id
              }
            });

            ref.afterDismissed().subscribe(function () {
              _this4.items.forEach(function (item) {
                var _this4$getId = _this4.getId(item[_Items__WEBPACK_IMPORTED_MODULE_2__["Name"].id]),
                    _this4$getId2 = _slicedToArray(_this4$getId, 2),
                    index = _this4$getId2[0],
                    __id = _this4$getId2[1]; // Items.allItems[__id][index][Name.isAdded]=!Items.allItems[__id][index][Name.isAdded];


                _this4.addtocart(item[_Items__WEBPACK_IMPORTED_MODULE_2__["Name"].id]);
              });
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "search",
          value: function search() {}
        }]);

        return CategoriesComponent;
      }();

      CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) {
        return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      CategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CategoriesComponent,
        selectors: [["app-categories"]],
        viewQuery: function CategoriesComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cart_notification = _t.first);
          }
        },
        decls: 22,
        vars: 4,
        consts: [[1, "search"], ["aria-hidden", "false", "aria-label", "Search", 3, "routerLink"], ["type", "text", "placeholder", "Search ... ", 1, "search_text"], ["matRipple", "", 1, "card"], [1, "search_item", 3, "click"], ["id", "content", 1, "menu"], [1, "special"], [1, "toolbar"], [1, "title"], [1, "spacer"], ["matRipple", "", 1, "floatingcart", 3, "click"], [1, "notification"], [1, "card", 2, "margin-top", "-10px", "background-color", "#3b3a3a7e"], ["id", "menu", 1, "menu_list"], ["class", "item2", 3, "id", 4, "ngFor", "ngForOf"], [1, "item2", 3, "id"], ["alt", "", "srcset", "", 1, "shine", 3, "src"], [1, "content"], [1, "name"], [1, "rate"], [1, "cart", 3, "click"]],
        template: function CategoriesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesComponent_Template_p_click_5_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Go");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Menu Items");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesComponent_Template_div_click_13_listener() {
              return ctx.cart();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "add_shopping_cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CategoriesComponent_div_21_Template, 9, 4, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cartItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]],
        styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@300&display=swap\");\nh1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  font-family: \"Zilla Slab\", serif;\n}\n.menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%] {\n  padding: 15px;\n  margin-top: 10px;\n  font-size: 28px;\n  position: relative;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  justify-self: flex-start;\n  font-size: 0.7em;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .floatingcart[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  padding: 7px;\n  margin-top: -10px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .floatingcart[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  font-size: 0.4em;\n  right: 40px;\n  top: 1px;\n  background-color: #4caf50;\n  z-index: 110;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  z-index: 20;\n  margin-top: 10px;\n  display: grid;\n  grid-template-columns: auto auto;\n  place-content: center;\n  align-items: stretch;\n  row-gap: 20px;\n  -moz-column-gap: 15%;\n       column-gap: 15%;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-radius: 5px;\n  background-color: white;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 5px;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 75%;\n  margin-left: 5px;\n  margin-top: -5px;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 45vw;\n  margin: 0px;\n  font-size: 0.4em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  display: flex;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  padding: 1px 5px 1px 5px;\n  border-radius: 3px;\n  background-color: #c8ecf1;\n  font-size: 0.25em;\n  color: #00c2df;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]    ~ .tag[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 6px;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%]   .veg[_ngcontent-%COMP%] {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  justify-self: center;\n  padding: 1px 6px 1px 6px;\n  display: inline-block;\n  border-radius: 3px;\n  background-color: #f0d8f5;\n  font-size: 0.25em;\n  color: #9c27c0;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%]   .half[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  margin-top: -5px;\n  margin-left: 10px;\n  display: flex;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%]   .half[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #5c77ff;\n  margin: 5px 0px 0px 0px;\n  font-weight: 600;\n  font-size: 1em;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%]   .half[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-bottom: -8px;\n  margin-top: 5px;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  margin-top: -5px;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #5c77ff;\n  font-weight: 600;\n  padding-left: 4px;\n  margin: 10px 0px 0px 0px;\n  font-size: 0.7em;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .addtocart[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 7px;\n  padding-right: 10px;\n  height: 25px;\n  margin-top: 20px;\n  border-radius: 5px;\n  background-color: #296fca;\n  transition: all 1 ease-in;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .addtocart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 2px;\n  margin-left: -5px;\n  font-size: 0.4em;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .addtocart[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 5px;\n  font-size: 13px;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item2[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 140px;\n  height: 220px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 80px;\n  border-radius: 50%;\n  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.247);\n  height: 80px;\n  z-index: 100;\n  top: 0;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  z-index: 10;\n  height: 150px;\n  width: 120px;\n  position: absolute;\n  background-color: white;\n  align-items: center;\n  border-radius: 20px 20px 6px 6px;\n  flex-direction: column;\n  top: 40px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.247);\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin: 40px 10px 5px 10px;\n  font-size: 14px;\n  height: 55px;\n  text-align: center;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000;\n}\n.menu[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item2[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  border-radius: 0px 0px 25px 25px;\n  width: 100%;\n  height: 100px;\n  padding: 3px;\n  z-index: 0;\n  background-color: #0086df;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  font-weight: bold;\n  color: white;\n  font-size: 14px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.247);\n}\n.search[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 10px;\n  position: sticky;\n  top: 10px;\n  border-radius: 7px;\n  margin-right: 10px;\n  align-items: center;\n  height: 50px;\n  padding: 10px;\n  background-color: #05445E;\n  z-index: 30;\n}\n.search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: white;\n  background-color: rgba(38, 84, 136, 0);\n  border-radius: 10px;\n  border-color: #0091ff00;\n  flex: 1 1 auto;\n  margin: auto;\n  margin-left: 5px;\n  outline: none;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: white;\n  background-color: rgba(38, 84, 136, 0);\n  border-radius: 10px;\n  border-color: #0091ff00;\n  flex: 1 1 auto;\n  margin: auto;\n  margin-left: 5px;\n  outline: none;\n}\n.search[_ngcontent-%COMP%]   .search_text[_ngcontent-%COMP%], .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  color: white;\n  background-color: rgba(38, 84, 136, 0);\n  border-radius: 10px;\n  border-color: #0091ff00;\n  flex: 1 1 auto;\n  margin: auto;\n  margin-left: 5px;\n  outline: none;\n}\n.search[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 5px;\n  width: 20%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.search[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .search_item[_ngcontent-%COMP%] {\n  margin: auto;\n  font-weight: 600;\n  color: #05445E;\n}\n.shine[_ngcontent-%COMP%] {\n  background: #f6f7f8;\n  background-image: linear-gradient(to right, #f6f7f8 0%, #a1a3a7 20%, #f6f7f8 40%, #f6f7f8 100%);\n  background-repeat: no-repeat;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: placeholderShimmer;\n          animation-name: placeholderShimmer;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n}\n@-webkit-keyframes placeholderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@keyframes placeholderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRLHdGQUFBO0FBQ1I7Ozs7RUFJRSxnQ0FBQTtBQURGO0FBSUE7RUFDRSxrQkFBQTtBQURGO0FBRUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUVJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQU47QUFFTTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUdNO0VBQ0UsY0FBQTtBQURSO0FBSU07RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQUlRO0VBQ0UsWUFBQTtBQUZWO0FBTU07RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFKUjtBQU1RO0VBQ0UsWUFBQTtBQUpWO0FBU0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0FBUE47QUFRTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTlI7QUFRVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFOWjtBQVNRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVBWO0FBUVU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQU5aO0FBUWM7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTmhCO0FBU2M7RUFDRSxhQUFBO0FBUGhCO0FBUWdCO0VBQ0Usc0hBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFObEI7QUFTZ0I7RUFDRSxnQkFBQTtBQVBsQjtBQVdjO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQVRoQjtBQVVnQjtFQUNFLHNIQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVJsQjtBQVdnQjtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFUbEI7QUFXa0I7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFUcEI7QUFXa0I7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBVHBCO0FBZ0JZO0VBQ0UsZ0JBQUE7QUFkZDtBQWVjO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBYmhCO0FBZ0JjO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFkaEI7QUFnQmdCO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBZGxCO0FBaUJnQjtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWZsQjtBQXVCTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBckJSO0FBc0JRO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtBQXBCVjtBQXNCUTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSx5Q0FBQTtBQXBCVjtBQXFCVTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQW5CWjtBQXFCVTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBbkJaO0FBc0JRO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtBQXBCVjtBQTRCQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBblJNO0VBb1JOLFdBQUE7QUF6QkY7QUEyQkU7RUFDRSxZQUFBO0FBekJKO0FBNEJFO0VBR0UsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBMUJKO0FBZ0JFO0VBR0UsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBMUJKO0FBZ0JFOzs7RUFHRSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUExQko7QUE2QkU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUEzQko7QUE2Qkk7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQWxURTtBQXVSUjtBQWlDQTtFQUNFLG1CQUFBO0VBQ0EsK0ZBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0FBOUJGO0FBaUNBO0VBQ0U7SUFDRSw2QkFBQTtFQTlCRjtFQWlDQTtJQUNFLDRCQUFBO0VBL0JGO0FBQ0Y7QUF3QkE7RUFDRTtJQUNFLDZCQUFBO0VBOUJGO0VBaUNBO0lBQ0UsNEJBQUE7RUEvQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtZW51OiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4kc2VhcmNoOiMwNTQ0NUU7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1aaWxsYStTbGFiOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuaDEsXG5oMyxcbmg0LFxucCB7XG4gIGZvbnQtZmFtaWx5OiAnWmlsbGEgU2xhYicsIHNlcmlmO1xufVxuXG4ubWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLnNwZWNpYWwge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLnRvb2xiYXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgICAudGl0bGUge1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICAgIH1cblxuICAgICAgLnNwYWNlciB7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuZmxvYXRpbmdjYXJ0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubm90aWZpY2F0aW9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAuNGVtO1xuICAgICAgICByaWdodDogNDBweDtcbiAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG4gICAgICAgIHotaW5kZXg6IDExMDtcblxuICAgICAgICBwIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWVudV9saXN0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgei1pbmRleDogMjA7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICAgICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICByb3ctZ2FwOiAyMHB4O1xuICAgICAgY29sdW1uLWdhcDogMTUlO1xuICAgICAgLml0ZW0ge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuaXRlbV9pbWFnZSB7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaXRlbV9jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0NXZ3O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjRlbTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAudGFncyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAudGFnIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggNXB4IDFweCA1cHg7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlY2YxO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuMjVlbTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiMwMGMyZGY7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRhZ34udGFnIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnR7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICAgICAgICAgIC52ZWcge1xuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXB4IDZweCAxcHggNnB4O1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZDhmNTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjI1ZW07XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzljMjdjMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaGFsZiB7XG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNWM3N2ZmO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwcHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBtYXQtY2hlY2tib3h7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb3VudHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNWM3N2ZmO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5hZGR0b2NhcnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5NmZjYTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMSBlYXNlLWluO1xuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjRlbTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5pdGVtMntcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIGhlaWdodDogMjIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI0Nyk7XG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnR7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCA2cHggNnB4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgdG9wOiA0MHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNDcpO1xuICAgICAgICAgIC5uYW1le1xuICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDEwcHggNXB4IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yYXRle1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jYXJ0e1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyNXB4IDI1cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NmRmO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yNDcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuLnNlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWFyY2g7XG4gIHotaW5kZXg6IDMwO1xuXG4gIG1hdC1pY29uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuc2VhcmNoX3RleHQsXG4gIGlucHV0OjpwbGFjZWhvbGRlcixcbiAgaW5wdXQ6Zm9jdXMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM4LCA4NCwgMTM2LCAwKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1jb2xvcjogIzAwOTFmZjAwO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5zZWFyY2hfaXRlbSB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICRzZWFyY2g7XG4gICAgfVxuICB9XG59XG5cblxuLnNoaW5lIHtcbiAgYmFja2dyb3VuZDogI2Y2ZjdmODtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjZmN2Y4IDAlLCAjYTFhM2E3IDIwJSwgI2Y2ZjdmOCA0MCUsICNmNmY3ZjggMTAwJSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLW5hbWU6IHBsYWNlaG9sZGVyU2hpbW1lcjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuXG5Aa2V5ZnJhbWVzIHBsYWNlaG9sZGVyU2hpbW1lciB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDA7XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-categories',
            templateUrl: './categories.component.html',
            styleUrls: ['./categories.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"]
          }, {
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, {
          cart_notification: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["notify"]
          }]
        });
      })();
      /***/

    },

    /***/
    "RJPO": function RJPO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Name", function () {
        return Name;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Items", function () {
        return Items;
      });

      var Name = function Name() {
        _classCallCheck(this, Name);
      };

      Name.special = "special";
      Name.veg = "veg";
      Name.nonVeg = "Non-veg";
      Name.count = "count";
      Name.tags = "tags";
      Name.menu = "menu";
      Name.title = "title";
      Name.img = "img";
      Name.half = "half";
      Name.isFull = "isfull";
      Name.prize = "prize";
      Name.name_ = "name";
      Name.id = "id";
      Name.data = "data";
      Name.cartItems = "cart";
      Name.blue = "##296fca";
      Name.orange = "#f44336";

      var Items = /*#__PURE__*/function () {
        function Items() {
          _classCallCheck(this, Items);
        }

        _createClass(Items, null, [{
          key: "isAddedToCart",
          value: function isAddedToCart(item) {
            for (var i = 0; i < Items.cartItems.length; i++) {
              if (Items.cartItems[i].itemId === item.itemId) return true;
            }

            return false;
          }
        }, {
          key: "removeFromCart",
          value: function removeFromCart(item) {
            Items.cartItems.forEach(function (val, index) {
              if (val.itemId === item.itemId) {
                Items.cartItems.splice(index, 1);
                return;
              }
            });
          }
        }]);

        return Items;
      }();

      Items.allItems = {};
      Items.cartItems = [];
      /***/
    },

    /***/
    "Rnwq": function Rnwq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "slideInAnimation", function () {
        return slideInAnimation;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "GS7A");

      var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('items => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'fixed',
        width: '100%'
      }), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(-100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0%)'
      }))], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(100%)'
      }))], {
        optional: true
      })])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Home => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'fixed',
        width: '100%'
      }), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0%)'
      }))], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(-100%)'
      }))], {
        optional: true
      })])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('placeorder => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'fixed',
        width: '100%'
      }), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(0%)'
      }))], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(0%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(-100%)'
      }))], {
        optional: true
      })])])]);
      /***/
    },

    /***/
    "Sy1n": function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./route-animation */
      "Rnwq");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "Km1n");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "wD+u");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(_bottomSheet, firestore) {
          _classCallCheck(this, AppComponent);

          this._bottomSheet = _bottomSheet;
          this.firestore = firestore;
          this.title = 'Olio';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
            //Add 'implements OnInit' to the class.
            console.log("loaded");
            setTimeout(function () {
              document.getElementById("vex-splash-screen").style.display = "none";
            }, 1000);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 1,
        consts: [["o", "outlet"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", null, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", _r0 && _r0.activatedRouteData && _r0.activatedRouteData["animation"]);
          }
        },
        directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
        styles: ["*[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4iXX0= */"],
        data: {
          animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            animations: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
          }]
        }], function () {
          return [{
            type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"]
          }, {
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "TGkX": function TGkX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
        return MenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _Items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Items */
      "RJPO");
      /* harmony import */


      var _info_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../info/info.component */
      "XSv0");
      /* harmony import */


      var _order_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../order/order.component */
      "uBHN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "wD+u");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "Km1n");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      var _c0 = ["notify"];

      function MenuComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MenuComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a1) {
        return ["./items", a1];
      };

      function MenuComponent_div_18_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.toUpperCase());
        }
      }

      function MenuComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_div_18_p_1_Template, 2, 4, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var items_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r3);
        }
      }

      var MenuComponent = /*#__PURE__*/function () {
        function MenuComponent(router, route, db, _bottomSheet) {
          var _this5 = this;

          _classCallCheck(this, MenuComponent);

          this.router = router;
          this.route = route;
          this._bottomSheet = _bottomSheet;
          this.data = [];
          this.specials = [];
          this.menuItems = {};
          this.categories = [];
          this.color = 'primary';
          this.checked = false;
          this.disabled = false;
          this.hotel_name = '';
          this.db = db;
          this.hotel_name = route.snapshot.params.hotel; // db.collection(this.hotel_name).valueChanges().subscribe((val) => {
          //   console.log(val);
          //   // val.forEach((doc)=>this.data.push(doc));
          //   // Items.setData(this.data);
          //   // this.specials = Items.specialItems;
          // });

          db.collection('hotels').doc(this.hotel_name).valueChanges().subscribe(function (val) {
            var temp = val.categories;
            var cats = [];

            for (var i = 0; i < temp.length; i++) {
              if (i % 4 == 0) {
                console.log(i, cats);

                _this5.categories.push(cats.map(function (m) {
                  return m;
                }));

                cats.splice(0, cats.length - 1);
              } else cats.push(temp[i]);
            }
          });
        }

        _createClass(MenuComponent, [{
          key: "cartupdate",
          value: function cartupdate() {
            var _this6 = this;

            this.specials.forEach(function (item) {
              var _this6$getId = _this6.getId(item[_Items__WEBPACK_IMPORTED_MODULE_1__["Name"].id]),
                  _this6$getId2 = _slicedToArray(_this6$getId, 2),
                  index = _this6$getId2[0],
                  __id = _this6$getId2[1];
            });
          }
        }, {
          key: "half",
          value: function half(id) {
            var _this$getId = this.getId(id),
                _this$getId2 = _slicedToArray(_this$getId, 2),
                index = _this$getId2[0],
                __id = _this$getId2[1];

            _Items__WEBPACK_IMPORTED_MODULE_1__["Items"].allItems[__id][index][_Items__WEBPACK_IMPORTED_MODULE_1__["Name"].isFull] = !_Items__WEBPACK_IMPORTED_MODULE_1__["Items"].allItems[__id][index][_Items__WEBPACK_IMPORTED_MODULE_1__["Name"].isFull];
          }
        }, {
          key: "getId",
          value: function getId(id) {
            var __id = id.split("I")[0];
            var items = _Items__WEBPACK_IMPORTED_MODULE_1__["Items"].allItems[__id];
            var index = "";

            for (var i in items) {
              if (items[i][_Items__WEBPACK_IMPORTED_MODULE_1__["Name"].id] == id) {
                index = i;
              }
            }

            return [index, __id];
          }
        }, {
          key: "addtocart",
          value: function addtocart(id) {
            var _this$getId3 = this.getId(id),
                _this$getId4 = _slicedToArray(_this$getId3, 2),
                index = _this$getId4[0],
                __id = _this$getId4[1];

            var cart = document.getElementById(id).getElementsByClassName("addtocart")[0];
            this.cart_notification.nativeElement.innerText = _Items__WEBPACK_IMPORTED_MODULE_1__["Items"].cartItems.length;
          }
        }, {
          key: "cart",
          value: function cart() {
            var _this7 = this;

            var bottomSheetRef = this._bottomSheet.open(_order_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"]);

            bottomSheetRef.afterDismissed().subscribe(function () {
              _this7.specials.forEach(function (item) {
                var _this7$getId = _this7.getId(item[_Items__WEBPACK_IMPORTED_MODULE_1__["Name"].id]),
                    _this7$getId2 = _slicedToArray(_this7$getId, 2),
                    index = _this7$getId2[0],
                    __id = _this7$getId2[1];

                _this7.addtocart(item[_Items__WEBPACK_IMPORTED_MODULE_1__["Name"].id]);
              });

              if (bottomSheetRef.instance.isPlaceOrder) _this7.router.navigate([_this7.hotel_name + '/placeorder']);
            });
          }
        }, {
          key: "itemInfo",
          value: function itemInfo(id) {
            var _this8 = this;

            var ref = this._bottomSheet.open(_info_info_component__WEBPACK_IMPORTED_MODULE_2__["InfoComponent"], {
              data: {
                id: id
              }
            });

            ref.afterDismissed().subscribe(function () {
              _this8.specials.forEach(function (item) {
                _this8.addtocart(item[_Items__WEBPACK_IMPORTED_MODULE_1__["Name"].id]);
              });
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MenuComponent;
      }();

      MenuComponent.ɵfac = function MenuComponent_Factory(t) {
        return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheet"]));
      };

      MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MenuComponent,
        selectors: [["app-menu"]],
        viewQuery: function MenuComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cart_notification = _t.first);
          }
        },
        decls: 19,
        vars: 2,
        consts: [["id", "search", 1, "search"], ["aria-hidden", "false", "aria-label", "Search"], ["type", "text", "placeholder", "Search ... ", 1, "search_text"], ["matRipple", "", 1, "card"], [1, "search_item"], ["id", "content"], [1, "body_olio"], ["interval", "2000", 3, "showNavigationArrows"], ["ngbSlide", ""], [1, "horizantal_scrollmenu"], [1, "toolbar"], [1, "title"], [1, "card", 2, "margin-top", "-10px", "background-color", "#3b3a3aa9"], [1, "scroll"], ["class", "cats", 4, "ngFor", "ngForOf"], [1, "picsum-img-wrapper"], ["src", "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "alt", "Angular Carousel 1", 1, "carosuel_img"], ["src", "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", "alt", "Angular Carousel 2", 1, "carosuel_img"], [1, "cats"], ["class", "cat", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "cat", 3, "routerLink"]],
        template: function MenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_shopping_cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Go");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngb-carousel", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MenuComponent_ng_template_10_Template, 2, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MenuComponent_ng_template_11_Template, 2, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MenuComponent_div_18_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRipple"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
        styles: ["h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  font-family: Palatino, URW Palladio L, serif;\n}\n\n.horizantal_scrollmenu[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.horizantal_scrollmenu[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.horizantal_scrollmenu[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  justify-self: flex-start;\n}\n\n.horizantal_scrollmenu[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.horizantal_scrollmenu[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .veg[_ngcontent-%COMP%] {\n  justify-self: flex-end;\n  margin: 5px;\n}\n\n.horizantal_scrollmenu[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  overflow-x: scroll;\n  width: 100%;\n  overflow-y: hidden;\n  align-items: center;\n}\n\n.horizantal_scrollmenu[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .cats[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: auto;\n  padding: 10px 0px;\n  white-space: nowrap;\n}\n\n.horizantal_scrollmenu[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .cats[_ngcontent-%COMP%]   .cat[_ngcontent-%COMP%] {\n  margin: 10px 10px 10px 4px;\n  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n  padding: 5px 10px;\n  text-align: center;\n  font-size: 14px;\n  height: 25px;\n  border-left: 3px #0086df solid;\n  transition: all 0.3s ease-in-out;\n}\n\n.horizantal_scrollmenu[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .cats[_ngcontent-%COMP%]   .cat[_ngcontent-%COMP%]:active {\n  background-color: #5c77ff;\n  color: white;\n}\n\n.special[_ngcontent-%COMP%] {\n  padding: 15px;\n  margin-top: 10px;\n  font-size: 28px;\n  position: relative;\n}\n\n.special[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n\n.special[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  justify-self: flex-start;\n  font-size: 0.7em;\n}\n\n.special[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.special[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .floatingcart[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  padding: 7px;\n  margin-top: -10px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.special[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .floatingcart[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.special[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  font-size: 0.4em;\n  right: 40px;\n  top: 1px;\n  background-color: #4caf50;\n  z-index: 110;\n}\n\n.special[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  z-index: 20;\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-radius: 5px;\n  background-color: white;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n}\n\n.special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 5px;\n}\n\n.special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 75%;\n  margin-left: 5px;\n  margin-top: -5px;\n}\n\n.special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 45vw;\n  margin: 0px;\n  font-size: 0.4em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  padding: 1px 5px 1px 5px;\n  border-radius: 3px;\n  background-color: #c8ecf1;\n  font-size: 0.25em;\n  color: #00c2df;\n}\n\n.special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]    ~ .tag[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 6px;\n}\n\n.special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%]   .veg[_ngcontent-%COMP%] {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  justify-self: center;\n  padding: 1px 6px 1px 6px;\n  display: inline-block;\n  border-radius: 3px;\n  background-color: #f0d8f5;\n  font-size: 0.25em;\n  color: #9c27c0;\n}\n\n.special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%]   .half[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  margin-top: -5px;\n  margin-left: 10px;\n  display: flex;\n}\n\n.special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%]   .half[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #5c77ff;\n  margin: 5px 0px 0px 0px;\n  font-weight: 600;\n  font-size: 1em;\n}\n\n.special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%]   .half[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-bottom: -8px;\n  margin-top: 5px;\n}\n\n.special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  margin-top: -5px;\n}\n\n.special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #5c77ff;\n  font-weight: 600;\n  padding-left: 4px;\n  margin: 10px 0px 0px 0px;\n  font-size: 0.7em;\n}\n\n.special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .addtocart[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 7px;\n  padding-right: 10px;\n  height: 25px;\n  margin-top: 20px;\n  border-radius: 5px;\n  background-color: #296fca;\n  transition: all 1 ease-in;\n}\n\n.special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .addtocart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 2px;\n  margin-left: -5px;\n  font-size: 0.4em;\n}\n\n.special[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .addtocart[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 5px;\n  font-size: 13px;\n}\n\n.search[_ngcontent-%COMP%] {\n  display: flex;\n  position: sticky;\n  top: 10px;\n  margin: 0px 12px 0px 12px;\n  border-radius: 5px;\n  align-items: center;\n  height: 50px;\n  padding: 10px;\n  background-color: #05445E;\n  z-index: 30;\n  transition: all 1s ease-in-out;\n}\n\n.search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  background-color: rgba(38, 84, 136, 0);\n  border-radius: 10px;\n  border-color: #0091ff00;\n  color: white;\n  flex: 1 1 auto;\n  margin: auto;\n  margin-left: 5px;\n  outline: none;\n}\n\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  background-color: rgba(38, 84, 136, 0);\n  border-radius: 10px;\n  border-color: #0091ff00;\n  color: white;\n  flex: 1 1 auto;\n  margin: auto;\n  margin-left: 5px;\n  outline: none;\n}\n\n.search[_ngcontent-%COMP%]   .search_text[_ngcontent-%COMP%], .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background-color: rgba(38, 84, 136, 0);\n  border-radius: 10px;\n  border-color: #0091ff00;\n  color: white;\n  flex: 1 1 auto;\n  margin: auto;\n  margin-left: 5px;\n  outline: none;\n}\n\n.search[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 5px;\n  width: 20%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.search[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .search_item[_ngcontent-%COMP%] {\n  margin: auto;\n  font-weight: 600;\n  color: #35567c;\n}\n\n.search-fixed[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  margin: 0px;\n  padding: 15px;\n}\n\n.body_olio[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.body_olio[_ngcontent-%COMP%]   .carosuel_img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n  box-shadow: 1px 1px #4643436c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOzs7O0VBSUUsNENBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7QUFGRjs7QUFHRTtFQUNFLGFBQUE7QUFESjs7QUFFSTtFQUNFLHdCQUFBO0FBQU47O0FBRUk7RUFDRSxjQUFBO0FBQU47O0FBRUk7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUFBTjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUROOztBQUVNO0VBQ0UsMEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQUFSOztBQUVNO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQVI7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFNRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUpKOztBQU1JO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtBQUpOOztBQU9JO0VBQ0UsY0FBQTtBQUxOOztBQVFJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTk47O0FBUU07RUFDRSxZQUFBO0FBTlI7O0FBVUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFSTjs7QUFVTTtFQUNFLFlBQUE7QUFSUjs7QUFhRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFYSjs7QUFhSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBWE47O0FBY1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBWlY7O0FBZ0JNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWRSOztBQWdCUTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FBZFY7O0FBaUJZO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWZkOztBQWtCWTtFQUNFLGFBQUE7QUFoQmQ7O0FBaUJjO0VBQ0Usc0hBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFmaEI7O0FBa0JjO0VBQ0UsZ0JBQUE7QUFoQmhCOztBQW9CWTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFsQmQ7O0FBbUJjO0VBQ0Usc0hBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBakJoQjs7QUFvQmM7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBbEJoQjs7QUFvQmdCO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBbEJsQjs7QUFvQmdCO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWxCbEI7O0FBeUJVO0VBQ0UsZ0JBQUE7QUF2Qlo7O0FBd0JZO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBdEJkOztBQXlCWTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBdkJkOztBQXlCYztFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXZCaEI7O0FBMEJjO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBeEJoQjs7QUFxQ0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFwUU07RUFxUU4sV0FBQTtFQUNBLDhCQUFBO0FBbENGOztBQW9DRTtFQUNFLFlBQUE7QUFsQ0o7O0FBcUNFO0VBR0Usc0NBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBbkNKOztBQXlCRTtFQUdFLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQW5DSjs7QUF5QkU7OztFQUdFLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQW5DSjs7QUFzQ0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFwQ0o7O0FBc0NJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXBDTjs7QUF5Q0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBdENGOztBQTJDQTtFQUNFLGFBQUE7QUF4Q0Y7O0FBMENFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUF4Q0oiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWVudTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuJHNlYXJjaDojMDU0NDVFO1xuXG5oMSxcbmgzLFxuaDQsXG5wIHtcbiAgZm9udC1mYW1pbHk6IFBhbGF0aW5vLCBVUlcgUGFsbGFkaW8gTCwgc2VyaWY7XG59XG5cbi5ob3JpemFudGFsX3Njcm9sbG1lbnUge1xuICBwYWRkaW5nOiAyMHB4O1xuICAudG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAudGl0bGUge1xuICAgICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgICAuc3BhY2VyIHtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIH1cbiAgICAudmVnIHtcbiAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5zY3JvbGwge1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAuY2F0c3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIC5jYXR7XG4gICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggNHB4O1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDJweCByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBib3JkZXItbGVmdDogM3B4ICMwMDg2ZGYgc29saWQ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICB9XG4gICAgICAuY2F0OmFjdGl2ZXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVjNzdmZjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi5zcGVjaWFsIHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLnRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICAudGl0bGUge1xuICAgICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgZm9udC1zaXplOiAuN2VtO1xuICAgIH1cblxuICAgIC5zcGFjZXIge1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgfVxuXG4gICAgLmZsb2F0aW5nY2FydCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgbWF0LWljb24ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogLjRlbTtcbiAgICAgIHJpZ2h0OiA0MHB4O1xuICAgICAgdG9wOiAxcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuICAgICAgei1pbmRleDogMTEwO1xuXG4gICAgICBwIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tZW51X2xpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAyMDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgIC5pdGVtIHtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC5pdGVtX2ltYWdlIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pdGVtX2NvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG5cbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICB3aWR0aDogNDV2dztcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjRlbTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50YWdzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgLnRhZyB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggNXB4IDFweCA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGVjZjE7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuMjVlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjojMDBjMmRmO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnRhZ34udGFnIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgICAgICAgLnZlZyB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggNnB4IDFweCA2cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBkOGY1O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjI1ZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5YzI3YzA7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaGFsZiB7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNWM3N2ZmO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hdC1jaGVja2JveHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY291bnR7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICBjb2xvcjogIzVjNzdmZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAuN2VtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWRkdG9jYXJ0IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk2ZmNhO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMSBlYXNlLWluO1xuXG4gICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuNGVtO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIH1cbiAgfVxufVxuXG5cbi5zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDEwcHg7XG4gIG1hcmdpbjogMHB4IDEycHggMHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VhcmNoO1xuICB6LWluZGV4OiAzMDtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xuXG4gIG1hdC1pY29uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuc2VhcmNoX3RleHQsXG4gIGlucHV0OjpwbGFjZWhvbGRlcixcbiAgaW5wdXQ6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzgsIDg0LCAxMzYsIDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA5MWZmMDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5zZWFyY2hfaXRlbSB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHJnYig1MywgODYsIDEyNCk7XG4gICAgfVxuICB9XG59XG5cbi5zZWFyY2gtZml4ZWQge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG5cblxuLmJvZHlfb2xpbyB7XG4gIHBhZGRpbmc6IDE1cHg7XG5cbiAgLmNhcm9zdWVsX2ltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggIzQ2NDM0MzZjO1xuICB9XG5cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
          }, {
            type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheet"]
          }];
        }, {
          cart_notification: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["notify"]
          }]
        });
      })();
      /***/

    },

    /***/
    "VuJU": function VuJU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlaceorderComponent", function () {
        return PlaceorderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _Items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Items */
      "RJPO");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "wD+u");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");

      function PlaceorderComponent_ng_container_0_div_5_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Booked");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function PlaceorderComponent_ng_container_0_div_5_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PlaceorderComponent_ng_container_0_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaceorderComponent_ng_container_0_div_5_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var table_r4 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.active(table_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlaceorderComponent_ng_container_0_div_5_ng_container_2_Template, 3, 0, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlaceorderComponent_ng_container_0_div_5_ng_template_3_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var table_r4 = ctx.$implicit;

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", table_r4.status !== 0 ? "rgb(39, 165, 228)" : "rgb(241, 245, 247)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-color", table_r4.status !== 0 ? "#e65b40" : "rgb(29, 228, 128)")("border-left", "solid 13px transparent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", table_r4.status !== 0)("ngIfElse", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Table No. ", table_r4.tableNumber, "");
        }
      }

      function PlaceorderComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please Select Active Table to serve your Order!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlaceorderComponent_ng_container_0_div_5_Template, 9, 9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaceorderComponent_ng_container_0_Template_div_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.order();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Confirm Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tables);
        }
      }

      var _c0 = function _c0() {
        return ["../"];
      };

      function PlaceorderComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2714");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Waiting for confirmation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      }

      var PlaceorderComponent = /*#__PURE__*/function () {
        function PlaceorderComponent(route, db, snackBar) {
          var _this9 = this;

          _classCallCheck(this, PlaceorderComponent);

          this.route = route;
          this.db = db;
          this.snackBar = snackBar;
          this.hotelname = '';
          this.tables = [];
          this.select = [];
          this.isordered = false;
          this.prevSelected = -1;
          this.hotelname = route.snapshot.params.hotel;
          db.collection('hotels').doc(this.hotelname).get().toPromise().then(function (data) {
            console.log(data.data());
            _this9.tables = data.data()['tables'];
          });
        }

        _createClass(PlaceorderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "order",
          value: function order() {
            this.isordered = true;
            this.tables[this.prevSelected].order = _Items__WEBPACK_IMPORTED_MODULE_1__["Items"].cartItems;
            this.db.collection('hotels').doc(this.hotelname).set({
              tables: this.tables
            }, {
              merge: true
            }).then(function () {
              setTimeout(function () {
                var ele = document.getElementById("s");
                console.log(ele);
                ele.style.transform = "scale(1)";
                document.getElementById('m').innerText = "Order Done, Go Back and Sit";
              }, 500);
            });
          }
        }, {
          key: "getIndex",
          value: function getIndex(id) {
            var index = -1;
            this.tables.forEach(function (val, i) {
              if (val.tableNumber === id) index = i;
            });
            return index;
          }
        }, {
          key: "active",
          value: function active(table) {
            var index = this.getIndex(table.tableNumber);

            if (this.prevSelected !== -1) {
              this.tables[this.prevSelected].status = 0;
            }

            if (this.tables[index].status === 0) {
              this.tables[index].status = 1;
              this.prevSelected = index;
            } else this.snackBar.open('please select Active Table', 'Try again', {
              duration: 1000
            });
          }
        }]);

        return PlaceorderComponent;
      }();

      PlaceorderComponent.ɵfac = function PlaceorderComponent_Factory(t) {
        return new (t || PlaceorderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
      };

      PlaceorderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PlaceorderComponent,
        selectors: [["app-placeorder"]],
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [2, "margin-left", "10px", "font-weight", "600"], [1, "tables"], ["class", "table", 3, "background-color", "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "confirm", 3, "click"], [1, "table", 3, "click"], [1, "ribbon"], ["src", "https://img.icons8.com/ios/344/restaurant-table.png", "alt", ""], [1, "id"], [1, "center"], [1, "shine"], ["id", "s", 1, "success"], ["matRipple", "", 1, "confirm", 2, "margin-top", "30px", 3, "routerLink"], ["id", "m"]],
        template: function PlaceorderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlaceorderComponent_ng_container_0_Template, 9, 1, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlaceorderComponent_ng_template_1_Template, 9, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isordered)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: [".tables[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: grid;\n  grid-template-columns: auto auto;\n}\n.tables[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  margin-top: -10px;\n  position: relative;\n  justify-self: center;\n  width: 80%;\n  padding: 10px;\n  text-align: center;\n  border-radius: 5px;\n  background-color: #f1f5f7;\n  box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.3);\n  transition: all 1s;\n}\n.tables[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .ribbon[_ngcontent-%COMP%] {\n  height: 0px;\n  background-color: transparent;\n  position: absolute;\n  right: -5px;\n  border: solid 13px #e65b40;\n  border-left: solid 13px transparent;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.tables[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .ribbon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  margin: -8px 0px 0px 8px;\n}\n.tables[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 80%;\n}\n.tables[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 5px;\n}\n.tables[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  margin: 0px;\n}\n.confirm[_ngcontent-%COMP%] {\n  margin: 10px 30px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.3);\n  text-align: center;\n  padding: 10px 20px;\n  background-color: #1d84e4;\n}\n.confirm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: white;\n  font-size: 20px;\n  font-weight: 600px;\n}\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.center[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  margin: 40px 0px;\n  border-radius: 50%;\n  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.3);\n  text-align: center;\n  padding: 10px 20px;\n  background-color: #1de480;\n  transition: all 1s cubic-bezier(0.71, 0.21, 0.62, 1.66);\n  transform: scale(0);\n}\n.center[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 75px 0px 0px 0px;\n  color: white;\n  font-size: 100px;\n  font-weight: 600px;\n}\n\n.shine[_ngcontent-%COMP%]:after {\n  content: \"\";\n  margin-top: -100px;\n  transform: translateX(100%);\n  width: 100%;\n  height: 250px;\n  position: absolute;\n  z-index: 1;\n  -webkit-animation: slide 1.5s infinite ease-in;\n          animation: slide 1.5s infinite ease-in;\n  \n  \n  \n  \n  \n  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(128, 186, 232, 0) 99%, rgba(125, 185, 232, 0) 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00ffffff\", endColorstr=\"#007db9e8\",GradientType=1 );\n  \n}\n\n@-webkit-keyframes slide {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n@keyframes slide {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VvcmRlci9wbGFjZW9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQUNGO0FBQ0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFFTjtBQURNO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0FBR1I7QUFBSTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQUVOO0FBQUk7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0FBRU47QUFETTtFQUNFLHdFQUFBO0VBQ0EsV0FBQTtBQUdSO0FBR0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx1REFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFTjtBQUtBLFVBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNELDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQytJLFdBQUE7RUFDa0Usb0JBQUE7RUFDbkUseUJBQUE7RUFDTCxpQkFBQTtFQUNDLFVBQUE7RUFDMUksdUpBQUE7RUFBMEksUUFBQTtFQUMxSSx1SEFBQTtFQUF5SCxVQUFBO0FBSzFIO0FBRkEsY0FBQTtBQUVBO0VBQ0M7SUFBSSw0QkFBQTtFQUtIO0VBSkQ7SUFBTSwyQkFBQTtFQU9MO0FBQ0Y7QUFWQTtFQUNDO0lBQUksNEJBQUE7RUFLSDtFQUpEO0lBQU0sMkJBQUE7RUFPTDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGxhY2VvcmRlci9wbGFjZW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlc3tcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG5cbiAgLnRhYmxle1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDUsIDI0Nyk7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgLnJpYmJvbiB7XG4gICAgICBoZWlnaHQ6IDBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICBib3JkZXI6IHNvbGlkIDEzcHggI2U2NWI0MDtcbiAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxM3B4IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW46IC04cHggMHB4IDBweCA4cHg7XG4gICAgICB9XG4gICAgfVxuICAgIGltZ3tcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB3aWR0aDo4MCU7XG4gICAgfVxuICAgIC5pZHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOjVweDtcbiAgICAgIGgze1xuICAgICAgICBmb250LWZhbWlseTonRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jb25maXJte1xuICBtYXJnaW46IDEwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAycHggcmdiYSgwLDAsMCwwLjMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMzIsIDIyOCk7XG4gIHB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDo2MDBweFxuICB9XG59XG5cbi5jZW50ZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuc3VjY2VzcyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luOiA0MHB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggMnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMjI4LCAxMjgpO1xuICAgIHRyYW5zaXRpb246IGFsbCAxcyBjdWJpYy1iZXppZXIoLjcxLC4yMSwuNjIsMS42Nik7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBwe1xuICAgICAgbWFyZ2luOiA3NXB4IDBweCAwcHggMHB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAxMDBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OjYwMHB4XG4gICAgfVxuICB9XG59XG5cblxuXG4vKiBTaGluZSAqL1xuLnNoaW5lOmFmdGVyIHtcbiAgY29udGVudDonJztcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xuXHR0cmFuc2Zvcm06dHJhbnNsYXRlWCgxMDAlKTtcblx0d2lkdGg6MTAwJTtcblx0aGVpZ2h0OjI1MHB4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6MTtcblx0YW5pbWF0aW9uOiBzbGlkZSAxLjVzIGluZmluaXRlIGVhc2UtaW47XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC44KSA1MCUsIHJnYmEoMTI4LDE4NiwyMzIsMCkgOTklLCByZ2JhKDEyNSwxODUsMjMyLDApIDEwMCUpOyAvKiBGRjMuNisgKi9cblx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUscmdiYSgyNTUsMjU1LDI1NSwwKSksIGNvbG9yLXN0b3AoNTAlLHJnYmEoMjU1LDI1NSwyNTUsMC44KSksIGNvbG9yLXN0b3AoOTklLHJnYmEoMTI4LDE4NiwyMzIsMCkpLCBjb2xvci1zdG9wKDEwMCUscmdiYSgxMjUsMTg1LDIzMiwwKSkpOyAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOCkgNTAlLHJnYmEoMTI4LDE4NiwyMzIsMCkgOTklLHJnYmEoMTI1LDE4NSwyMzIsMCkgMTAwJSk7IC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwyNTUsMjU1LDApIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC44KSA1MCUscmdiYSgxMjgsMTg2LDIzMiwwKSA5OSUscmdiYSgxMjUsMTg1LDIzMiwwKSAxMDAlKTsgLyogT3BlcmEgMTEuMTArICovXG5cdGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOCkgNTAlLHJnYmEoMTI4LDE4NiwyMzIsMCkgOTklLHJnYmEoMTI1LDE4NSwyMzIsMCkgMTAwJSk7IC8qIElFMTArICovXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOCkgNTAlLHJnYmEoMTI4LDE4NiwyMzIsMCkgOTklLHJnYmEoMTI1LDE4NSwyMzIsMCkgMTAwJSk7IC8qIFczQyAqL1xuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzAwZmZmZmZmJywgZW5kQ29sb3JzdHI9JyMwMDdkYjllOCcsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgKi9cbn1cblxuLyogYW5pbWF0aW9uICovXG5cbkBrZXlmcmFtZXMgc2xpZGUge1xuXHQwJSB7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwMCUpO31cblx0MTAwJSB7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwJSk7fVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaceorderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-placeorder',
            templateUrl: './placeorder.component.html',
            styleUrls: ['./placeorder.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XSv0": function XSv0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoComponent", function () {
        return InfoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "Km1n");
      /* harmony import */


      var _Items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Items */
      "RJPO");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");

      function InfoComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r4.name);
        }
      }

      function InfoComponent_ng_container_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_ng_container_15_Template_mat_checkbox_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.half(ctx_r5.item["id"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Half");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", !ctx_r1.item["isfull"]);
        }
      }

      function InfoComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "full");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var InfoComponent = /*#__PURE__*/function () {
        function InfoComponent(data, ref) {
          _classCallCheck(this, InfoComponent);

          this.data = data;
          this.ref = ref;
          this.item = {};

          var _this$getId5 = this.getId(data.id),
              _this$getId6 = _slicedToArray(_this$getId5, 2),
              index = _this$getId6[0],
              __id = _this$getId6[1];

          this.item = _Items__WEBPACK_IMPORTED_MODULE_2__["Items"].allItems[__id][index];
        }

        _createClass(InfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            this.ref.dismiss();
          }
        }, {
          key: "getId",
          value: function getId(id) {
            var __id = id.split("I")[0];
            var items = _Items__WEBPACK_IMPORTED_MODULE_2__["Items"].allItems[__id];
            var index = "";

            for (var i in items) {
              if (items[i][_Items__WEBPACK_IMPORTED_MODULE_2__["Name"].id] == id) {
                index = i;
              }
            }

            return [index, __id];
          }
        }, {
          key: "half",
          value: function half(id) {
            var _this$getId7 = this.getId(id),
                _this$getId8 = _slicedToArray(_this$getId7, 2),
                index = _this$getId8[0],
                __id = _this$getId8[1];

            _Items__WEBPACK_IMPORTED_MODULE_2__["Items"].allItems[__id][index][_Items__WEBPACK_IMPORTED_MODULE_2__["Name"].isFull] = !_Items__WEBPACK_IMPORTED_MODULE_2__["Items"].allItems[__id][index][_Items__WEBPACK_IMPORTED_MODULE_2__["Name"].isFull];
          }
        }, {
          key: "addtocart",
          value: function addtocart(id) {
            var _this$getId9 = this.getId(id),
                _this$getId10 = _slicedToArray(_this$getId9, 2),
                index = _this$getId10[0],
                __id = _this$getId10[1];

            var cart = document.getElementById("c");
          }
        }]);

        return InfoComponent;
      }();

      InfoComponent.ɵfac = function InfoComponent_Factory(t) {
        return new (t || InfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]));
      };

      InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InfoComponent,
        selectors: [["app-info"]],
        decls: 27,
        vars: 7,
        consts: [[1, "info"], ["alt", "", 3, "src"], [1, "item_content"], [1, "main"], [1, "content"], [1, "tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "veg"], [1, "type"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "bottom"], ["matRipple", "", 1, "cancel", 3, "click"], ["matRipple", "", "id", "c", 1, "placeorder", 3, "click"], [1, "tag"], [2, "font-size", "14px", "margin-bottom", "-8px", 3, "checked", "click"]],
        template: function InfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InfoComponent_div_8_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InfoComponent_ng_container_15_Template, 3, 1, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, InfoComponent_ng_template_16_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_Template_div_click_19_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_Template_div_click_22_listener() {
              return ctx.addtocart(ctx.item["id"]);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "add_shopping_cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.item["img"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item["title"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.item["tags"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item["veg"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.item["prize"], "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item["half"])("ngIfElse", _r2);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"]],
        styles: ["h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  font-family: serif;\n}\n\n.info[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 30px;\n}\n\n.info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.info[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.info[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.info[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0px 5px 0px 0px;\n  font-size: 0.6em;\n}\n\n.info[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 0.45em;\n}\n\n.info[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.info[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  padding: 1px 5px 1px 5px;\n  border-radius: 3px;\n  background-color: #c8ecf1;\n  font-size: 0.3em;\n  color: #00c2df;\n}\n\n.info[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]    ~ .tag[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.info[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .veg[_ngcontent-%COMP%] {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  justify-self: center;\n  margin-top: 4px;\n  padding: 1px 6px 1px 6px;\n  display: inline-block;\n  border-radius: 3px;\n  background-color: #f0d8f5;\n  font-size: 0.3em;\n  z-index: 100;\n  color: #9c27c0;\n}\n\n.info[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  display: flex;\n  align-items: center;\n}\n\n.info[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 5px;\n  background-color: #e9e0e0;\n  height: 24px;\n  width: 24px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.info[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 0.65em;\n}\n\n.info[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  margin-top: -5px;\n  justify-content: space-between;\n  display: flex;\n}\n\n.info[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 10px;\n  font-weight: 600;\n  font-size: 0.6em;\n}\n\n.info[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #0b6ceb;\n  font-weight: 600;\n  font-size: 0.6em;\n}\n\n.info[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 70px;\n  background-color: white;\n  position: sticky;\n  margin-left: -16px;\n  bottom: -10px;\n  border-top: 0.8px solid rgba(0, 0, 0, 0.308);\n  display: flex;\n  padding: 10px;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.info[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  height: 30px;\n  display: flex;\n  margin-left: 10px;\n  border-radius: 5px;\n  background-color: white;\n  box-shadow: 1px 2px 5px rgba(97, 97, 97, 0.308);\n  align-items: center;\n  justify-content: center;\n}\n\n.info[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ec0f0f;\n  margin: 0px 10px 0px 10px;\n}\n\n.info[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.info[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .placeorder[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  border-radius: 5px;\n  justify-content: center;\n  background-color: #296fca;\n  box-shadow: 1px 2px rgba(97, 97, 97, 0.308);\n  align-items: center;\n}\n\n.info[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .placeorder[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  margin: 5px 5px 5px 15px;\n}\n\n.info[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .placeorder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUFJO0VBQ0ksV0FBQTtBQUVSOztBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ1I7O0FBQVE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQUVaOztBQUFnQjtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7QUFFcEI7O0FBQWdCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBRXBCOztBQUFnQjtFQUNFLGFBQUE7QUFFbEI7O0FBQWtCO0VBQ0Usc0hBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFcEI7O0FBQ2tCO0VBQ0UsZ0JBQUE7QUFDcEI7O0FBR2dCO0VBQ0Usc0hBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFEbEI7O0FBSVk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUZoQjs7QUFHZ0I7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFEcEI7O0FBRW9CO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBQXhCOztBQUdnQjtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFEcEI7O0FBR2dCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRHBCOztBQUlZO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFGaEI7O0FBU0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw0Q0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVBSOztBQVFRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFOWjs7QUFPWTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQUxoQjs7QUFPWTtFQUNJLFlBQUE7QUFMaEI7O0FBUVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUFOWjs7QUFPWTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtBQUxoQjs7QUFPWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUxoQiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaDEsaDMsaDQscHtcbiAgICBmb250LWZhbWlseTogc2VyaWY7XG59XG4uaW5mb3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLml0ZW1fY29udGVudHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAuY29udGVudHtcbiAgICAgICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjZlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC40NWVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGFncyB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgICAgICAgICAudGFnIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXB4IDVweCAxcHggNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGVjZjE7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjNlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IzAwYzJkZjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLnRhZ34udGFnIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudmVnIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweCA2cHggMXB4IDZweDtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGQ4ZjU7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IC4zZW07XG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzljMjdjMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY291bnRlcntcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjI0LCAyMjQpO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXQtaWNvbntcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjY1ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByaWNle1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjZlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIHJnYigxMSwgMTA4LCAyMzUpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuNmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIC5ib3R0b217XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICAgICAgYm90dG9tOiAtMTBweDtcbiAgICAgICAgYm9yZGVyLXRvcDogLjhweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzA4KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuY2FuY2Vse1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggcmdiYSg5NywgOTcsIDk3LCAwLjMwOCk7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDIzNiwgMTUsIDE1KTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAxMHB4IDBweCAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0LWljb257XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wbGFjZW9yZGVye1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5NmZjYTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggcmdiYSg5NywgOTcsIDk3LCAwLjMwOCk7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDVweCA1cHggMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdC1pY29ue1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-info',
            templateUrl: './info.component.html',
            styleUrls: ['./info.component.scss']
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]]
            }]
          }, {
            type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4": function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/slider */
      "mPVK");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "Km1n");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire */
      "jmUF");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "wD+u");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./menu/menu.component */
      "TGkX");
      /* harmony import */


      var _categories_categories_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./categories/categories.component */
      "IhOl");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var ngx_wow__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-wow */
      "DyK5");
      /* harmony import */


      var _order_order_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./order/order.component */
      "uBHN");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/stepper */
      "hzfI");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "Ynp+");
      /* harmony import */


      var _info_info_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./info/info.component */
      "XSv0");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _placeorder_placeorder_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./placeorder/placeorder.component */
      "VuJU");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MAT_CHECKBOX_CLICK_ACTION"],
          useValue: 'noop'
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MatCheckboxModule"], ngx_wow__WEBPACK_IMPORTED_MODULE_20__["NgwWowModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__["MatDividerModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__["MatButtonToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_17__["MenuComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_18__["CategoriesComponent"], _order_order_component__WEBPACK_IMPORTED_MODULE_21__["OrderComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_26__["InfoComponent"], _placeorder_placeorder_component__WEBPACK_IMPORTED_MODULE_28__["PlaceorderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MatCheckboxModule"], ngx_wow__WEBPACK_IMPORTED_MODULE_20__["NgwWowModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__["MatDividerModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__["MatButtonToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_17__["MenuComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_18__["CategoriesComponent"], _order_order_component__WEBPACK_IMPORTED_MODULE_21__["OrderComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_26__["InfoComponent"], _placeorder_placeorder_component__WEBPACK_IMPORTED_MODULE_28__["PlaceorderComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MatCheckboxModule"], ngx_wow__WEBPACK_IMPORTED_MODULE_20__["NgwWowModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__["MatDividerModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__["MatButtonToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]],
            providers: [{
              provide: _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MAT_CHECKBOX_CLICK_ACTION"],
              useValue: 'noop'
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "lFR4": function lFR4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WindowRefService", function () {
        return WindowRefService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      function getWindow() {
        return window;
      }

      var WindowRefService = /*#__PURE__*/function () {
        function WindowRefService() {
          _classCallCheck(this, WindowRefService);
        }

        _createClass(WindowRefService, [{
          key: "nativeWindow",
          get: function get() {
            return getWindow();
          }
        }]);

        return WindowRefService;
      }();

      WindowRefService.ɵfac = function WindowRefService_Factory(t) {
        return new (t || WindowRefService)();
      };

      WindowRefService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: WindowRefService,
        factory: WindowRefService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowRefService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "uBHN": function uBHN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderComponent", function () {
        return OrderComponent;
      });
      /* harmony import */


      var _Items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../Items */
      "RJPO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _window_ref_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../window-ref.service */
      "lFR4");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "Km1n");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");

      function OrderComponent_ng_container_5_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderComponent_ng_container_5_div_2_Template_div_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var cart_r4 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r5.add(cart_r4.itemId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderComponent_ng_container_5_div_2_Template_div_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var cart_r4 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r7.remove(cart_r4.itemId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "minimize");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderComponent_ng_container_5_div_2_Template_div_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var cart_r4 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r8.removefromcart(cart_r4.itemId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "add_shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cart_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", cart_r4.itemId);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", cart_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cart_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cart_r4.count);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9 ", cart_r4.count * cart_r4.rate, "");
        }
      }

      function OrderComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrderComponent_ng_container_5_div_2_Template, 26, 5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.cartItems);
        }
      }

      function OrderComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Items");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var OrderComponent = /*#__PURE__*/function () {
        function OrderComponent(zone, winRef, buttonsheetref) {
          var _this10 = this;

          _classCallCheck(this, OrderComponent);

          this.zone = zone;
          this.winRef = winRef;
          this.buttonsheetref = buttonsheetref;
          this.isEditable = false;
          this.check = false;
          this.cartItems = _Items__WEBPACK_IMPORTED_MODULE_0__["Items"].cartItems;
          this.total = 0;
          this.isPlaceOrder = false;
          this.options = {
            key: 'rzp_test_p3yS9vCKJBJ4FJ',
            name: 'The Swag Coder',
            description: 'Shopping',
            amount: 100,
            prefill: {
              name: 'The Swag Coder',
              email: 'jithendhra567@gmail.com'
            },
            notes: {},
            theme: {
              color: '#3880FF'
            },
            handler: this.paymentHandler.bind(this),
            modal: {
              ondismiss: function ondismiss() {
                _this10.zone.run(function () {
                  // add current page routing if payment fails
                  console.log("Check");
                });
              }
            }
          };
          this._window = this.winRef.nativeWindow;

          for (var i in this.cartItems) {
            this.cartItems[i][_Items__WEBPACK_IMPORTED_MODULE_0__["Name"].count] = 1;
            this.total += +this.cartItems[i].rate;
          }
        }

        _createClass(OrderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getCartId",
          value: function getCartId(id) {
            for (var i = 0; i < this.cartItems.length; i++) {
              if (this.cartItems[i].itemId === id) return i;
            }

            return -1;
          }
        }, {
          key: "getId",
          value: function getId(id) {
            var __id = id.split("I")[0];
            var items = _Items__WEBPACK_IMPORTED_MODULE_0__["Items"].allItems[__id];
            var index = "";

            for (var i in items) {
              if (items[i][_Items__WEBPACK_IMPORTED_MODULE_0__["Name"].id] == id) {
                index = i;
              }
            }

            return [index, __id];
          }
        }, {
          key: "add",
          value: function add(id) {
            var _this11 = this;

            var index = this.getCartId(id);
            this.cartItems[index][_Items__WEBPACK_IMPORTED_MODULE_0__["Name"].count]++;
            this.total = 0;
            this.cartItems.forEach(function (val) {
              return _this11.total += +val.rate * +val.count;
            });
          }
        }, {
          key: "remove",
          value: function remove(id) {
            var _this12 = this;

            var index = this.getCartId(id);
            if (this.cartItems[index][_Items__WEBPACK_IMPORTED_MODULE_0__["Name"].count] > 1) this.cartItems[index][_Items__WEBPACK_IMPORTED_MODULE_0__["Name"].count]--;
            this.total = 0;
            this.cartItems.forEach(function (val) {
              return _this12.total += +val.rate * +val.count;
            });
          }
        }, {
          key: "removefromcart",
          value: function removefromcart(id) {
            var _this13 = this;

            var index = this.getCartId(id);
            this.cartItems.splice(+index, 1);

            _Items__WEBPACK_IMPORTED_MODULE_0__["Items"].cartItems.splice(+index, 1);

            this.total = 0;
            this.cartItems.forEach(function (val) {
              return _this13.total += +val.rate * +val.count;
            });
          }
        }, {
          key: "initPay",
          value: function initPay() {
            // this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
            // this.rzp.open();
            this.isPlaceOrder = true;
            this.buttonsheetref.dismiss();
          }
        }, {
          key: "paymentHandler",
          value: function paymentHandler(res) {
            this.zone.run(function () {
              // add API call here
              console.log("Done");
            });
          }
        }]);

        return OrderComponent;
      }();

      OrderComponent.ɵfac = function OrderComponent_Factory(t) {
        return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_window_ref_service__WEBPACK_IMPORTED_MODULE_2__["WindowRefService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetRef"]));
      };

      OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: OrderComponent,
        selectors: [["app-order"]],
        decls: 19,
        vars: 3,
        consts: [[1, "order"], [1, "title"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "bottom"], [1, "total-price"], ["matRipple", "", 1, "placeorder", 3, "click"], [1, "items"], ["class", "item", 3, "id", 4, "ngFor", "ngForOf"], [1, "item", 3, "id"], [1, "item_image"], [1, "shine", 3, "src"], [1, "item_content"], [1, "main"], [1, "content"], [1, "cont"], [1, "count"], [1, "counter"], ["matRipple", "", 3, "click"], [2, "margin-top", "-1px"], ["matRipple", "", "id", "cart", 1, "addtocart", 3, "click"], [1, "icon"], ["name", "addtocart"], [2, "font-size", "30px", "margin-top", "20px", "margin-bottom", "20px", "color", "rgba(151, 151, 151, 0.801)"]],
        template: function OrderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Items");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, OrderComponent_ng_container_5_Template, 3, 1, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, OrderComponent_ng_template_6_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderComponent_Template_div_click_14_listener() {
              return ctx.initPay();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Place Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "contactless");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cartItems.length > 0)("ngIfElse", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.total, "");
          }
        },
        directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        styles: ["h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  font-family: serif;\n}\n\n.order[_ngcontent-%COMP%] {\n  position: relative;\n  max-height: 600px;\n}\n\n.order[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: -5px;\n  font-size: 20px;\n}\n\n.order[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 70px;\n  background-color: white;\n  position: sticky;\n  margin-left: -16px;\n  bottom: -10px;\n  box-shadow: 0px -3px 2px rgba(0, 0, 0, 0.308);\n  display: flex;\n  padding: 10px 10px 0px 10px;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.order[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 20px;\n  height: 70px;\n  margin-top: 8px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.order[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  height: 10px;\n  font-size: 17px;\n}\n\n.order[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #002f64;\n  font-size: 20px;\n}\n\n.order[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .placeorder[_ngcontent-%COMP%] {\n  height: 50px;\n  display: flex;\n  border-radius: 5px;\n  justify-content: center;\n  background-color: #1473f0;\n  box-shadow: 1px 2px rgba(97, 97, 97, 0.308);\n  align-items: center;\n}\n\n.order[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .placeorder[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  margin: 5px 5px 5px 15px;\n}\n\n.order[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .placeorder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  margin-right: 10px;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  font-size: 28px;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-radius: 5px;\n  background-color: white;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 5px;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 75%;\n  margin-left: 5px;\n  margin-top: -5px;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 45vw;\n  margin: 0px;\n  font-size: 0.45em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 6px;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%]   .veg[_ngcontent-%COMP%] {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  justify-self: center;\n  padding: 1px 6px 1px 6px;\n  display: inline-block;\n  border-radius: 3px;\n  background-color: #f0d8f5;\n  font-size: 0.25em;\n  color: #9c27c0;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%]   .half[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  margin-top: -5px;\n  margin-left: 10px;\n  display: flex;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%]   .half[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #5c77ff;\n  margin: 5px 0px 0px 0px;\n  font-weight: 600;\n  font-size: 1em;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%]   .half[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-bottom: -8px;\n  margin-top: 5px;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  margin-top: -5px;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 5px;\n  background-color: #e9e0e0;\n  height: 20px;\n  width: 20px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 0.5em;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 10px;\n  font-weight: 600;\n  font-size: 0.55em;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #5c77ff;\n  font-weight: 600;\n  padding-left: 4px;\n  margin: -5px 0px 0px 0px;\n  font-size: 0.4em;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .addtocart[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 7px;\n  padding-right: 10px;\n  height: 25px;\n  margin-top: 2px;\n  border-radius: 5px;\n  background-color: #f44336;\n  transition: all 1 ease-in;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .addtocart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 2px;\n  margin-left: -5px;\n  font-size: 0.4em;\n}\n\n.order[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .addtocart[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 5px;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FBRVo7O0FBRUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFBUjs7QUFDUTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQ1o7O0FBQVk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUVoQjs7QUFBWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBRWhCOztBQUNRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FBQ1o7O0FBQVk7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7QUFFaEI7O0FBQVk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFFaEI7O0FBSUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUZOOztBQUdNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFJVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGWjs7QUFNUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFKVjs7QUFNVTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FBSlo7O0FBT2M7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTGhCOztBQVFjO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQU5oQjs7QUFPZ0I7RUFDRSxzSEFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFMbEI7O0FBUWdCO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQU5sQjs7QUFRa0I7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFOcEI7O0FBUWtCO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQU5wQjs7QUFhWTtFQUNFLGdCQUFBO0FBWGQ7O0FBWWM7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFWaEI7O0FBWWdCO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVmxCOztBQVlrQjtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFWcEI7O0FBY2dCO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBWmxCOztBQWdCYztFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQWRoQjs7QUFpQmM7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBZmhCOztBQWlCZ0I7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFmbEI7O0FBa0JnQjtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWhCbEIiLCJmaWxlIjoic3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLGgzLGg0LHB7XG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xufVxuLm9yZGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICAudGl0bGV7XG4gICAgICAgIGgze1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib3R0b217XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICAgICAgYm90dG9tOiAtMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IC0zcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zMDgpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4IDEwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLnRvdGFsLXByaWNle1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMCwgNDcsIDEwMCk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wbGFjZW9yZGVye1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAxMTUsIDI0MCk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IHJnYmEoOTcsIDk3LCA5NywgMC4zMDgpO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCA1cHggNXB4IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXQtaWNvbntcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAuaXRlbXN7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAuaXRlbSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLml0ZW1faW1hZ2Uge1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbV9jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuXG4gICAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDV2dztcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC40NWVtO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgICAgICAgICAudmVnIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweCA2cHggMXB4IDZweDtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGQ4ZjU7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IC4yNWVtO1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICM5YzI3YzA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmhhbGYge1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzVjNzdmZjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbWF0LWNoZWNrYm94e1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY291bnR7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgICAgICAgIC5jb3VudGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjI0LCAyMjQpO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjVlbTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IC41NWVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzVjNzdmZjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogLTVweCAwcHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC40ZW07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuYWRkdG9jYXJ0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMSBlYXNlLWluO1xuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjRlbTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfVxuXG59XG5cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-order',
            templateUrl: './order.component.html',
            styleUrls: ['./order.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _window_ref_service__WEBPACK_IMPORTED_MODULE_2__["WindowRefService"]
          }, {
            type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A": function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _placeorder_placeorder_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./placeorder/placeorder.component */
      "VuJU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./categories/categories.component */
      "IhOl");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./menu/menu.component */
      "TGkX");

      var routes = [{
        path: ':hotel',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
        data: {
          animation: 'Home'
        }
      }, {
        path: ':hotel/items/:menu',
        component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"],
        data: {
          animation: 'items'
        }
      }, {
        path: ':hotel/placeorder',
        component: _placeorder_placeorder_component__WEBPACK_IMPORTED_MODULE_0__["PlaceorderComponent"],
        data: {
          animation: 'placeorder'
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb": function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P": function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map