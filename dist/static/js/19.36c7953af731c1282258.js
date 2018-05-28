webpackJsonp([19],{

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(813)

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(729),
  /* template */
  __webpack_require__(930),
  /* scopeId */
  "data-v-59bcb5b8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_good_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_good_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_good_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_api__ = __webpack_require__(197);
//
//
//
//
//



function getUrlParms(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
let code = getUrlParms('code');
__WEBPACK_IMPORTED_MODULE_0_good_storage___default.a.session.set('AUTH_CODE', code);
/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            AUTH_CODE: ''
        };
    },
    created() {
        this.AUTH_CODE = __WEBPACK_IMPORTED_MODULE_0_good_storage___default.a.session.get('AUTH_CODE');
        if (!getUrlParms('code')) {
            this.login();
        } else {
            this.AUTH_CODE = getUrlParms("code");
            let data = {
                code: this.AUTH_CODE
            };
            this.wxLogin(data);
            __WEBPACK_IMPORTED_MODULE_0_good_storage___default.a.session.set('AUTH_CODE', this.AUTH_CODE);
        }
    },
    methods: {
        isWeiXin() {
            let ua = window.navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                return true;
            } else {
                return false;
            }
        },
        login() {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_api__["a" /* authorizeLogin */])().then(res => {
                if (res.code === 0) {
                    window.location = res.url;
                }
            });
        },
        wxLogin(data) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_api__["b" /* wxLogin */])(data).then(res => {
                if (res.code === 0) {
                    this.$store.commit('SET_TOKEN', res.result.data.token);
                    this.$store.commit('SET_IDENTITYCODE', res.result.data.type);
                    let para = {
                        token: res.result.data.token
                    };
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_api__["c" /* getUserInfo */])(para).then(res => {
                        if (res.code === 0) {
                            this.$store.commit('SET_USER', res.result.data);
                        }
                        console.log(res.result.data);
                    });
                    if (res.result.data.status === -1) {
                        this.wxLogin(data);
                    }
                }
            });
        }
    },
    mounted() {}
});

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(512)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"author.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(770);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(513)("20026daa", content, true);

/***/ }),

/***/ 930:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-content"
  })
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=19.36c7953af731c1282258.js.map