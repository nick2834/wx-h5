webpackJsonp([14],{

/***/ 1204:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(903);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(484)("210e532a", content, true);

/***/ }),

/***/ 1217:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(916);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(484)("dd1b87e0", content, true);

/***/ }),

/***/ 1291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_create__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_router_link__ = __webpack_require__(182);





/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_create__["a" /* default */])({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('van-button', { class: _vm.b(), attrs: { "tag": "a", "href": _vm.url, "type": _vm.primary ? 'primary' : 'default', "bottom-action": "" }, on: { "click": _vm.onClick } }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2);
  },

  name: 'goods-action-big-btn',

  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_router_link__["a" /* default */]],

  components: {
    VanButton: __WEBPACK_IMPORTED_MODULE_1__button__["a" /* default */]
  },

  props: {
    url: String,
    text: String,
    primary: Boolean
  },

  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      this.routerLink();
    }
  }
}));

/***/ }),

/***/ 1292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vant_css_base_css__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vant_css_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vant_css_base_css__);


/***/ }),

/***/ 1293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_create__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_router_link__ = __webpack_require__(182);




/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_create__["a" /* default */])({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('a', { staticClass: "van-hairline", class: _vm.b(), attrs: { "href": _vm.url }, on: { "click": _vm.onClick } }, [_c('icon', { class: [_vm.b('icon'), _vm.iconClass], attrs: { "info": _vm.info, "name": _vm.icon } }), _vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2);
  },

  name: 'goods-action-mini-btn',

  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_router_link__["a" /* default */]],

  props: {
    url: String,
    text: String,
    info: [String, Number],
    icon: String,
    iconClass: String
  },

  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      this.routerLink();
    }
  }
}));

/***/ }),

/***/ 1294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vant_css_base_css__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vant_css_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vant_css_base_css__);


/***/ }),

/***/ 1295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_create__ = __webpack_require__(172);



/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_create__["a" /* default */])({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_vm._t("default")], 2);
  },

  name: 'goods-action'
}));

/***/ }),

/***/ 1296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vant_css_base_css__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vant_css_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vant_css_base_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vant_css_goods_action_css__ = __webpack_require__(1204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vant_css_goods_action_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vant_css_goods_action_css__);



/***/ }),

/***/ 1320:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.isLoading) ? _c('div', [_c('loading', {
    attrs: {
      "show": !_vm.isLoading,
      "text": "请稍后..."
    }
  })], 1) : _c('div', [_c('div', {
    staticClass: "goods_container"
  }, [_c('div', {
    staticClass: "headers"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": _vm.goodsDetail.item_pic,
      "alt": ""
    },
    on: {
      "click": _vm.getPreview
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "goods_content"
  }, [_c('div', {
    staticClass: "infomations"
  }, [_c('div', {
    staticClass: "price"
  }, [_c('span', {
    staticClass: "price_icon"
  }, [_vm._v("券后价")]), _vm._v(" "), (_vm.hasDone) ? _c('span', {
    staticClass: "price_num"
  }, [_vm._v("￥" + _vm._s(_vm.goodsTbkDetail.after_price))]) : _c('span', {
    staticClass: "price_num"
  }, [_vm._v("正在努力计算中...")])]), _vm._v(" "), _c('div', {
    staticClass: "old_price"
  }, [_c('div', {
    staticClass: "old"
  }, [_vm._v("现价 "), _c('span', {
    staticStyle: {
      "text-decoration": "line-through"
    }
  }, [_vm._v("￥" + _vm._s(_vm.goodsDetail.item_price))])]), _vm._v(" "), _c('div', {
    staticClass: "old"
  }, [_vm._v("月销 "), _c('span', [_vm._v(_vm._s(_vm.goodsDetail.item_volume) + "件")])])]), _vm._v(" "), (_vm.identityCode < 2 || _vm.identityCode == undefined) ? _c('div', {
    staticClass: "price_desc"
  }, [_vm._v("\n            该商品存在高佣金,加油升级才能查看~,请尽快升级SVIP\n          ")]) : _vm._e(), _vm._v(" "), (_vm.goodsDetail.item_type === 0) ? _c('div', {
    staticClass: "goods_title"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(669),
      "alt": ""
    }
  }), _vm._v(_vm._s(_vm.goodsDetail.item_title) + "\n          ")]) : _vm._e(), _vm._v(" "), (_vm.goodsDetail.item_type === 1) ? _c('div', {
    staticClass: "goods_title"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(670),
      "alt": ""
    }
  }), _vm._v(_vm._s(_vm.goodsDetail.item_title) + "\n          ")]) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "iconfont icon-fenxiang"
  })]), _vm._v(" "), (_vm.hasDone) ? _c('div', {
    staticClass: "preferential"
  }, [_c('div', {
    staticClass: "pre",
    style: ({
      'background': (!_vm.hasDone ? '#f3f3f3' : '')
    })
  }, [_c('i', {
    staticClass: "iconfont icon-weibiaoti2fuzhi02"
  }), _vm._v(" "), (_vm.hasDone) ? _c('span', {
    staticClass: "amount_info"
  }, [_vm._v("优惠券\n              "), (_vm.hasDone) ? _c('span', {
    staticClass: "gold_col"
  }, [_vm._v(_vm._s(_vm.goodsTbkDetail.coupon_amount) + "元")]) : _vm._e(), _vm._v(" "), (_vm.hasAmount) ? _c('span', [_vm._v("(" + _vm._s(_vm.amountInfo) + ")")]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "pre",
    style: ({
      'background': (!_vm.hasDone ? '#f3f3f3' : '')
    })
  }, [_c('i', {
    staticClass: "iconfont iconfont icon-jinbi"
  }), _vm._v(" "), _c('span', {
    staticClass: "amount_info"
  }, [(_vm.identityCode <= 0 || _vm.identityCode == undefined) ? _c('span', [_vm._v("佣金预计￥0.00( "), _c('span', {
    staticClass: "gold_col"
  }, [_vm._v("升级VIP预计佣金￥" + _vm._s(_vm.goodsTbkDetail.upgrade_subsidy))]), _vm._v(" )")]) : (_vm.identityCode === 1) ? _c('span', [_vm._v("佣金预计￥" + _vm._s(_vm.goodsTbkDetail.subsidy) + " "), _c('span', {
    staticClass: "gold_col"
  }, [_vm._v("( 升级SVIP预计佣金￥" + _vm._s(_vm.goodsTbkDetail.commissions) + " )")])]) : _c('span', [_vm._v("佣金预计￥" + _vm._s(_vm.goodsTbkDetail.commissions))])])])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "goods_image"
  }, _vm._l((_vm.goodsImages), function(item, index) {
    return _c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (item),
        expression: "item"
      }],
      key: index,
      staticClass: "img-responsive",
      attrs: {
        "alt": ""
      }
    })
  }))]), _vm._v(" "), (_vm.hasAmount) ? _c('van-goods-action', [_c('van-goods-action-mini-btn', {
    attrs: {
      "icon": "wap-home",
      "text": "首页"
    },
    on: {
      "click": _vm.gobackhome
    }
  }), _vm._v(" "), (_vm.hasDone) ? _c('div', {
    staticClass: "footer"
  }, [(_vm.identityCode <= 0 || _vm.identityCode == undefined) ? _c('div', {
    staticClass: "footer-box"
  }, [_c('van-goods-action-big-btn', {
    attrs: {
      "to": "/register"
    },
    on: {
      "click": _vm.onClickBigBtn
    }
  }, [_c('p', {
    staticClass: "btn-text h6"
  }, [_vm._v("升级SVIP 多赚￥" + _vm._s(_vm.goodsTbkDetail.upgrade_subsidy))]), _vm._v(" "), _c('p', {
    staticClass: "btn-text h3"
  }, [_vm._v("立即升级")])]), _vm._v(" "), _c('van-goods-action-big-btn', {
    directives: [{
      name: "clipboard",
      rawName: "v-clipboard:copy",
      value: (_vm.goodsDetail.item_title + _vm.goodsTbkDetail.taotoken),
      expression: "goodsDetail.item_title + goodsTbkDetail.taotoken",
      arg: "copy"
    }, {
      name: "clipboard",
      rawName: "v-clipboard:success",
      value: (_vm.onCopy),
      expression: "onCopy",
      arg: "success"
    }, {
      name: "clipboard",
      rawName: "v-clipboard:error",
      value: (_vm.onError),
      expression: "onError",
      arg: "error"
    }],
    attrs: {
      "primary": ""
    }
  }, [_c('p', {
    staticClass: "btn-text h6"
  }, [_vm._v("优惠券￥" + _vm._s(_vm.goodsTbkDetail.coupon_amount))]), _vm._v(" "), _c('p', {
    staticClass: "btn-text h3"
  }, [_vm._v("立即领券")])])], 1) : (_vm.identityCode === 1) ? _c('div', {
    staticClass: "footer-box"
  }, [_c('van-goods-action-big-btn', {
    attrs: {
      "text": "加入购物车",
      "to": "/buysvip"
    },
    on: {
      "click": _vm.onClickBigBtn
    }
  }, [_c('p', {
    staticClass: "btn-text h6"
  }, [_vm._v("升级SVIP 多赚￥" + _vm._s(_vm.goodsTbkDetail.upgrade_subsidy))]), _vm._v(" "), _c('p', {
    staticClass: "btn-text h3"
  }, [_vm._v("立即升级")])]), _vm._v(" "), _c('van-goods-action-big-btn', {
    directives: [{
      name: "clipboard",
      rawName: "v-clipboard:copy",
      value: (_vm.goodsDetail.item_title + _vm.goodsTbkDetail.taotoken),
      expression: "goodsDetail.item_title + goodsTbkDetail.taotoken",
      arg: "copy"
    }, {
      name: "clipboard",
      rawName: "v-clipboard:success",
      value: (_vm.onCopy),
      expression: "onCopy",
      arg: "success"
    }, {
      name: "clipboard",
      rawName: "v-clipboard:error",
      value: (_vm.onError),
      expression: "onError",
      arg: "error"
    }],
    attrs: {
      "primary": ""
    }
  }, [_c('p', {
    staticClass: "btn-text h6"
  }, [_vm._v("优惠券￥" + _vm._s(_vm.goodsTbkDetail.coupon_amount))]), _vm._v(" "), _c('p', {
    staticClass: "btn-text h3"
  }, [_vm._v("下单再返￥" + _vm._s(_vm.goodsTbkDetail.subsidy))])])], 1) : _c('div', {
    staticClass: "footer-box"
  }, [_c('van-goods-action-big-btn', {
    directives: [{
      name: "clipboard",
      rawName: "v-clipboard:copy",
      value: (_vm.goodsDetail.item_title + _vm.goodsTbkDetail.taotoken),
      expression: "goodsDetail.item_title + goodsTbkDetail.taotoken",
      arg: "copy"
    }, {
      name: "clipboard",
      rawName: "v-clipboard:success",
      value: (_vm.onCopy),
      expression: "onCopy",
      arg: "success"
    }, {
      name: "clipboard",
      rawName: "v-clipboard:error",
      value: (_vm.onError),
      expression: "onError",
      arg: "error"
    }],
    attrs: {
      "primary": ""
    }
  }, [_c('p', {
    staticClass: "btn-text h6"
  }, [_vm._v("优惠券￥" + _vm._s(_vm.goodsTbkDetail.coupon_amount))]), _vm._v(" "), _c('p', {
    staticClass: "btn-text h3"
  }, [_vm._v("下单再返￥" + _vm._s(_vm.goodsTbkDetail.commissions))])])], 1)]) : _c('div', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "footer-box"
  }, [_c('van-goods-action-big-btn', {
    attrs: {
      "text": '正在努力搜券中'
    }
  })], 1)])], 1) : _c('van-goods-action', [_c('van-goods-action-mini-btn', {
    attrs: {
      "icon": "wap-home",
      "text": "首页"
    },
    on: {
      "click": _vm.gobackhome
    }
  }), _vm._v(" "), (_vm.hasDone) ? _c('div', {
    staticClass: "footer"
  }, [(_vm.identityCode <= 0 || _vm.identityCode == undefined) ? _c('div', {
    staticClass: "footer-box"
  }, [_c('van-goods-action-big-btn', {
    attrs: {
      "to": "/register"
    },
    on: {
      "click": _vm.onClickBigBtn
    }
  }, [_c('p', {
    staticClass: "btn-text h6"
  }, [_vm._v("升级VIP 多赚" + _vm._s(_vm.goodsTbkDetail.upgrade_subsidy) + "元")]), _vm._v(" "), _c('p', {
    staticClass: "btn-text h3"
  }, [_vm._v("免费升级")])])], 1) : (_vm.identityCode === 1) ? _c('div', {
    staticClass: "footer-box"
  }, [_c('van-goods-action-big-btn', {
    attrs: {
      "to": "/buysvip"
    },
    on: {
      "click": _vm.onClickBigBtn
    }
  }, [_c('p', {
    staticClass: "btn-text h6"
  }, [_vm._v("升级SVIP 多赚" + _vm._s(_vm.goodsTbkDetail.upgrade_subsidy) + "元")]), _vm._v(" "), _c('p', {
    staticClass: "btn-text h3"
  }, [_vm._v("立即升级")])]), _vm._v(" "), _c('van-goods-action-big-btn', {
    attrs: {
      "text": '下单返￥' + _vm.goodsTbkDetail.subsidy,
      "primary": ""
    },
    on: {
      "click": _vm.onClickBigBtn
    }
  })], 1) : _c('div', {
    staticClass: "footer-box"
  }, [_c('van-goods-action-big-btn', {
    attrs: {
      "text": '下单返￥' + _vm.goodsTbkDetail.commissions
    },
    on: {
      "click": _vm.onClickBigBtn
    }
  })], 1)]) : _c('div', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "footer-box"
  }, [_c('van-goods-action-big-btn', {
    attrs: {
      "text": '正在努力搜券中...'
    }
  }, [_c('p', [_vm._v("正在努力搜券中...")])])], 1)])], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "transfer-dom",
      rawName: "v-transfer-dom"
    }]
  }, [_c('x-dialog', {
    staticClass: "dialog-box",
    attrs: {
      "hide-on-blur": ""
    },
    model: {
      value: (_vm.showHideOnBlur),
      callback: function($$v) {
        _vm.showHideOnBlur = $$v
      },
      expression: "showHideOnBlur"
    }
  }, [_c('div', {
    staticClass: "img-box"
  }, [_c('img', {
    staticClass: "img-responsive",
    staticStyle: {
      "max-width": "100%"
    },
    attrs: {
      "src": _vm.goodsDetail.item_pic
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "click-text"
  }, [_c('p', [_vm._v("淘口令复制成功，打开[手机淘宝]即可[领取优惠券]并购买，收货后到智淘提现，通过该口令购买的都是您的订单，佣金都归您")])]), _vm._v(" "), _c('div', {
    on: {
      "click": function($event) {
        _vm.showHideOnBlur = false
      }
    }
  }, [_c('span', {
    staticClass: "vux-close"
  })])])], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1217)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(875),
  /* template */
  __webpack_require__(1320),
  /* scopeId */
  "data-v-30ebf830",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_prevent_body_scroll__ = __webpack_require__(616);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_prevent_body_scroll__["a" /* default */]],
  name: 'x-dialog',
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maskTransition: {
      type: String,
      default: 'vux-mask'
    },
    maskZIndex: [String, Number],
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    },
    dialogClass: {
      type: String,
      default: 'weui-dialog'
    },
    hideOnBlur: Boolean,
    dialogStyle: Object,
    scroll: {
      type: Boolean,
      default: true,
      validator(val) {
        /* istanbul ignore if */
        if (false) {
          console.warn('[VUX warn] x-dialog:scroll 已经废弃。如果你是 100% 布局，请参照文档配置 $layout 以实现阻止滚动');
        }
        return true;
      }
    }
  },
  computed: {
    maskStyle() {
      if (typeof this.maskZIndex !== 'undefined') {
        return {
          zIndex: this.maskZIndex
        };
      }
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      if (window.VUX_CONFIG && window.VUX_CONFIG.$layout === 'VIEW_BOX') {
        this.layout = 'VIEW_BOX';
      }
    }
  },
  watch: {
    show(val) {
      this.$emit('update:show', val);
      this.$emit(val ? 'on-show' : 'on-hide');
      if (val) {
        this.addModalClassName();
      } else {
        this.removeModalClassName();
      }
    }
  },
  methods: {
    shouldPreventScroll() {
      // hard to get focus on iOS device with fixed position, so just ignore it
      const iOS = /iPad|iPhone|iPod/i.test(window.navigator.userAgent);
      const hasInput = this.$el.querySelector('input') || this.$el.querySelector('textarea');
      if (iOS && hasInput) {
        return true;
      }
    },
    hide() {
      if (this.hideOnBlur) {
        this.$emit('update:show', false);
        this.$emit('change', false);
        this.$emit('on-click-mask');
      }
    }
  },
  data() {
    return {
      layout: ''
    };
  }
});

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  hasClass(el, token) {
    return new RegExp('(\\s|^)' + token + '(\\s|$)').test(el.className);
  },
  addClass(el, token) {
    if (!el) {
      return;
    }
    if (el.classList) {
      el.classList.add(token);
    } else if (!this.hasClass(el, token)) {
      el.className += '' + token;
    }
  },
  removeClass(el, token) {
    if (!el) {
      return;
    }
    if (el.classList) {
      el.classList.remove(token);
    } else if (this.hasClass(el, token)) {
      el.className = el.className.replace(new RegExp('(\\s|^)' + token + '(\\s|$)'), ' ').replace(/^\s+|\s+$/g, '');
    }
  }
});

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_dom__ = __webpack_require__(615);


const BODY_CLASS_NAME = 'vux-modal-open';
const CONTAINER_CLASS_NAME = 'vux-modal-open-for-container';
const VUX_VIEW_BOX_ELEMENT = '#vux_view_box_body';

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    // some plugin may be imported before configPlugin, so we cannot get gloal config when component is created
    getLayout() {
      if (typeof window !== 'undefined') {
        if (window.VUX_CONFIG && window.VUX_CONFIG.$layout === 'VIEW_BOX') {
          return 'VIEW_BOX';
        }
      }
      return '';
    },
    addModalClassName() {
      if (typeof this.shouldPreventScroll === 'function' && this.shouldPreventScroll()) {
        return;
      }
      if (this.getLayout() === 'VIEW_BOX') {
        __WEBPACK_IMPORTED_MODULE_0__libs_dom__["a" /* default */].addClass(document.body, BODY_CLASS_NAME);
        __WEBPACK_IMPORTED_MODULE_0__libs_dom__["a" /* default */].addClass(document.querySelector(VUX_VIEW_BOX_ELEMENT), CONTAINER_CLASS_NAME);
      }
    },
    removeModalClassName() {
      if (this.getLayout() === 'VIEW_BOX') {
        __WEBPACK_IMPORTED_MODULE_0__libs_dom__["a" /* default */].removeClass(document.body, BODY_CLASS_NAME);
        __WEBPACK_IMPORTED_MODULE_0__libs_dom__["a" /* default */].removeClass(document.querySelector(VUX_VIEW_BOX_ELEMENT), CONTAINER_CLASS_NAME);
      }
    }
  },
  beforeDestroy() {
    this.removeModalClassName();
  },
  deactivated() {
    this.removeModalClassName();
  }
});

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(483)();
// imports
exports.i(__webpack_require__(620), "");

// module
exports.push([module.i, ".vux-fade-enter-active,.vux-fade-leave-active{opacity:1;transition:opacity .2s linear}.vux-fade-enter,.vux-fade-leave-to{opacity:0}.vux-dialog-enter-active{animation:vux-dialog-in .5s}.vux-dialog-leave-active{animation:vux-dialog-out .3s}@keyframes vux-dialog-in{0%{transform:scale(1.185);opacity:0}to{transform:scale(1);opacity:1}}@keyframes vux-dialog-out{0%{transform:scale(1);opacity:1}to{transform:scale(.85);opacity:0}}.vux-mask-enter,.vux-mask-leave-active{opacity:0}.vux-mask-enter-active,.vux-mask-leave-active{transition:opacity .3s}.weui-mask{background:rgba(0,0,0,.6)}.weui-mask,.weui-mask_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}.weui-dialog{position:fixed;display:table;z-index:5000;width:80%;max-width:300px;top:0;right:0;bottom:0;left:0;margin:auto;background-color:#fff;text-align:center;border-radius:3px;overflow:hidden}.weui-dialog__hd{padding:1.3em 1.6em .5em}.weui-dialog__hd.with-no-content{padding:1.7em 1.6em}.weui-dialog__title{font-weight:400;font-size:18px}.weui-dialog__bd{padding:0 1.6em .8em;min-height:40px;font-size:15px;line-height:1.3;word-wrap:break-word;word-break:break-all;color:#999}.weui-dialog__bd:first-child{padding:2.7em 20px 1.7em;color:#353535}.weui-dialog__ft{position:relative;line-height:48px;font-size:18px;display:-ms-flexbox;display:flex}.weui-dialog__ft:after{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d5d5d6;color:#d5d5d6;transform-origin:0 0;transform:scaleY(.5)}.weui-dialog__btn{display:block;-ms-flex:1;flex:1;color:#3cc51f;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.weui-dialog__btn:active{background-color:#eee}.weui-dialog__btn:after{content:\" \";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #d5d5d6;color:#d5d5d6;transform-origin:0 0;transform:scaleX(.5)}.weui-dialog__btn:first-child:after{display:none}.weui-dialog__btn_default{color:#353535}.weui-dialog__btn_primary{color:#0bb20c}.weui-dialog__btn_warn{color:#e64340}.weui-skin_android .weui-dialog{text-align:left;box-shadow:0 6px 30px 0 rgba(0,0,0,.1)}.weui-skin_android .weui-dialog__title{font-size:21px}.weui-skin_android .weui-dialog__hd{text-align:left}.weui-skin_android .weui-dialog__bd{color:#999;padding:.25em 1.6em 2em;font-size:17px;text-align:left}.weui-skin_android .weui-dialog__bd:first-child{padding:1.6em 1.6em 2em;color:#353535}.weui-skin_android .weui-dialog__ft{display:block;text-align:right;line-height:42px;font-size:16px;padding:0 1.6em .7em}.weui-skin_android .weui-dialog__ft:after{display:none}.weui-skin_android .weui-dialog__btn{display:inline-block;vertical-align:top;padding:0 .8em}.weui-skin_android .weui-dialog__btn:after{display:none}.weui-skin_android .weui-dialog__btn:active,.weui-skin_android .weui-dialog__btn:visited{background-color:rgba(0,0,0,.06)}.weui-skin_android .weui-dialog__btn:last-child{margin-right:-.8em}.weui-skin_android .weui-dialog__btn_default{color:gray}@media screen and (min-width:1024px){.weui-dialog{width:35%}}.vux-x-dialog-absolute .weui-dialog{position:absolute}", "", {"version":3,"sources":["D:/wx-h5/node_modules/_vux@2.9.1@vux/src/components/x-dialog/index.vue"],"names":[],"mappings":"AAEA,8CAEE,UAAW,AACX,6BAAgC,CACjC,AACD,mCAEE,SAAW,CACZ,AACD,yBACE,2BAA8B,CAC/B,AACD,yBACE,4BAA+B,CAChC,AACD,yBACA,GACI,uBAAwB,AACxB,SAAW,CACd,AACD,GACI,mBAAoB,AACpB,SAAW,CACd,CACA,AACD,0BACA,GACI,mBAAoB,AACpB,SAAW,CACd,AACD,GACI,qBAAuB,AACvB,SAAW,CACd,CACA,AACD,uCAEE,SAAW,CACZ,AACD,8CAEE,sBAA0B,CAC3B,AAiSD,WAOE,yBAA+B,CAChC,AACD,kCARE,eAAgB,AAChB,aAAc,AACd,MAAO,AACP,QAAS,AACT,OAAQ,AACR,QAAU,CAUX,AACD,aACE,eAAgB,AAChB,cAAe,AACf,aAAc,AACd,UAAW,AACX,gBAAiB,AACjB,MAAO,AACP,QAAS,AACT,SAAU,AACV,OAAQ,AACR,YAAa,AACb,sBAA0B,AAC1B,kBAAmB,AACnB,kBAAmB,AACnB,eAAiB,CAClB,AACD,iBACE,wBAA2B,CAC5B,AACD,iCACE,mBAAqB,CACtB,AACD,oBACE,gBAAiB,AACjB,cAAgB,CACjB,AACD,iBACE,qBAAuB,AACvB,gBAAiB,AACjB,eAAgB,AAChB,gBAAiB,AACjB,qBAAsB,AACtB,qBAAsB,AACtB,UAAe,CAChB,AACD,6BACE,yBAA0B,AAC1B,aAAe,CAChB,AACD,iBACE,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,oBAAqB,AACrB,YAAc,CACf,AACD,uBACE,YAAa,AACb,kBAAmB,AACnB,OAAQ,AACR,MAAO,AACP,QAAS,AACT,WAAY,AACZ,6BAA8B,AAC9B,cAAe,AACf,qBAAsB,AACtB,oBAAuB,CACxB,AACD,kBACE,cAAe,AACf,WAAY,AACR,OAAQ,AACZ,cAAe,AACf,qBAAsB,AACtB,0CAA8C,AAC9C,iBAAmB,CACpB,AACD,yBACE,qBAA0B,CAC3B,AACD,wBACE,YAAa,AACb,kBAAmB,AACnB,OAAQ,AACR,MAAO,AACP,UAAW,AACX,SAAU,AACV,8BAA+B,AAC/B,cAAe,AACf,qBAAsB,AACtB,oBAAuB,CACxB,AACD,oCACE,YAAc,CACf,AACD,0BACE,aAAe,CAChB,AACD,0BACE,aAAe,CAChB,AACD,uBACE,aAAe,CAChB,AACD,gCACE,gBAAiB,AACjB,sCAA4C,CAC7C,AACD,uCACE,cAAgB,CACjB,AACD,oCACE,eAAiB,CAClB,AACD,oCACE,WAAe,AACf,wBAA0B,AAC1B,eAAgB,AAChB,eAAiB,CAClB,AACD,gDACE,wBAAyB,AACzB,aAAe,CAChB,AACD,oCACE,cAAe,AACf,iBAAkB,AAClB,iBAAkB,AAClB,eAAgB,AAChB,oBAAuB,CACxB,AACD,0CACE,YAAc,CACf,AACD,qCACE,qBAAsB,AACtB,mBAAoB,AACpB,cAAgB,CACjB,AACD,2CACE,YAAc,CACf,AAID,yFACE,gCAAsC,CACvC,AACD,gDACE,kBAAqB,CACtB,AACD,6CACE,UAAe,CAChB,AACD,qCACA,aACI,SAAW,CACd,CACA,AACD,oCACE,iBAAmB,CACpB","file":"index.vue","sourcesContent":["\n@import '../../styles/vux-modal.css';\n.vux-fade-enter-active,\n.vux-fade-leave-active {\n  opacity: 1;\n  transition: opacity linear 0.2s;\n}\n.vux-fade-enter,\n.vux-fade-leave-to {\n  opacity: 0;\n}\n.vux-dialog-enter-active {\n  animation: vux-dialog-in 0.5s;\n}\n.vux-dialog-leave-active {\n  animation: vux-dialog-out 0.3s;\n}\n@keyframes vux-dialog-in {\n0% {\n    transform: scale(1.185);\n    opacity: 0;\n}\n100% {\n    transform: scale(1);\n    opacity: 1;\n}\n}\n@keyframes vux-dialog-out {\n0% {\n    transform: scale(1);\n    opacity: 1;\n}\n100% {\n    transform: scale(0.85);\n    opacity: 0;\n}\n}\n.vux-mask-enter,\n.vux-mask-leave-active {\n  opacity: 0;\n}\n.vux-mask-leave-active,\n.vux-mask-enter-active {\n  transition: opacity 300ms;\n}\n/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.weui-mask {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.weui-mask_transparent {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n}\n.weui-dialog {\n  position: fixed;\n  display: table;\n  z-index: 5000;\n  width: 80%;\n  max-width: 300px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  background-color: #FFFFFF;\n  text-align: center;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.weui-dialog__hd {\n  padding: 1.3em 1.6em 0.5em;\n}\n.weui-dialog__hd.with-no-content {\n  padding: 1.7em 1.6em;\n}\n.weui-dialog__title {\n  font-weight: 400;\n  font-size: 18px;\n}\n.weui-dialog__bd {\n  padding: 0 1.6em 0.8em;\n  min-height: 40px;\n  font-size: 15px;\n  line-height: 1.3;\n  word-wrap: break-word;\n  word-break: break-all;\n  color: #999999;\n}\n.weui-dialog__bd:first-child {\n  padding: 2.7em 20px 1.7em;\n  color: #353535;\n}\n.weui-dialog__ft {\n  position: relative;\n  line-height: 48px;\n  font-size: 18px;\n  display: -ms-flexbox;\n  display: flex;\n}\n.weui-dialog__ft:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D5D5D6;\n  color: #D5D5D6;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.weui-dialog__btn {\n  display: block;\n  -ms-flex: 1;\n      flex: 1;\n  color: #3CC51F;\n  text-decoration: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  position: relative;\n}\n.weui-dialog__btn:active {\n  background-color: #EEEEEE;\n}\n.weui-dialog__btn:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #D5D5D6;\n  color: #D5D5D6;\n  transform-origin: 0 0;\n  transform: scaleX(0.5);\n}\n.weui-dialog__btn:first-child:after {\n  display: none;\n}\n.weui-dialog__btn_default {\n  color: #353535;\n}\n.weui-dialog__btn_primary {\n  color: #0BB20C;\n}\n.weui-dialog__btn_warn {\n  color: #E64340;\n}\n.weui-skin_android .weui-dialog {\n  text-align: left;\n  box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.1);\n}\n.weui-skin_android .weui-dialog__title {\n  font-size: 21px;\n}\n.weui-skin_android .weui-dialog__hd {\n  text-align: left;\n}\n.weui-skin_android .weui-dialog__bd {\n  color: #999999;\n  padding: 0.25em 1.6em 2em;\n  font-size: 17px;\n  text-align: left;\n}\n.weui-skin_android .weui-dialog__bd:first-child {\n  padding: 1.6em 1.6em 2em;\n  color: #353535;\n}\n.weui-skin_android .weui-dialog__ft {\n  display: block;\n  text-align: right;\n  line-height: 42px;\n  font-size: 16px;\n  padding: 0 1.6em 0.7em;\n}\n.weui-skin_android .weui-dialog__ft:after {\n  display: none;\n}\n.weui-skin_android .weui-dialog__btn {\n  display: inline-block;\n  vertical-align: top;\n  padding: 0 .8em;\n}\n.weui-skin_android .weui-dialog__btn:after {\n  display: none;\n}\n.weui-skin_android .weui-dialog__btn:active {\n  background-color: rgba(0, 0, 0, 0.06);\n}\n.weui-skin_android .weui-dialog__btn:visited {\n  background-color: rgba(0, 0, 0, 0.06);\n}\n.weui-skin_android .weui-dialog__btn:last-child {\n  margin-right: -0.8em;\n}\n.weui-skin_android .weui-dialog__btn_default {\n  color: #808080;\n}\n@media screen and (min-width: 1024px) {\n.weui-dialog {\n    width: 35%;\n}\n}\n.vux-x-dialog-absolute .weui-dialog {\n  position: absolute;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(483)();
// imports


// module
exports.push([module.i, ".vux-modal-open{overflow:hidden;position:fixed;width:100%}.vux-modal-open-for-container{overflow:hidden!important}", "", {"version":3,"sources":["D:/wx-h5/node_modules/_vux@2.9.1@vux/src/styles/vux-modal.css"],"names":[],"mappings":"AAAA,gBACE,gBAAiB,AACjB,eAAgB,AAChB,UAAY,CACb,AACD,8BACE,yBAA2B,CAC5B","file":"vux-modal.css","sourcesContent":[".vux-modal-open {\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n}\n.vux-modal-open-for-container {\n  overflow: hidden!important;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(619);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(484)("8cd70082", content, true);

/***/ }),

/***/ 636:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-x-dialog",
    class: {
      'vux-x-dialog-absolute': _vm.layout === 'VIEW_BOX'
    }
  }, [_c('transition', {
    attrs: {
      "name": _vm.maskTransition
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "weui-mask",
    style: (_vm.maskStyle),
    on: {
      "click": _vm.hide
    }
  })]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": _vm.dialogTransition
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    class: _vm.dialogClass,
    style: (_vm.dialogStyle)
  }, [_vm._t("default")], 2)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(632)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(613),
  /* template */
  __webpack_require__(636),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Thanks to: https://github.com/calebroseland/vue-dom-portal

const objectAssign = __webpack_require__(174);
/**
 * Get target DOM Node
 * @param {(Node|string|Boolean)} [node=document.body] DOM Node, CSS selector, or Boolean
 * @return {Node} The target that the el will be appended to
 */
function getTarget(node) {
  if (node === void 0) {
    return document.body;
  }

  if (typeof node === 'string' && node.indexOf('?') === 0) {
    return document.body;
  } else if (typeof node === 'string' && node.indexOf('?') > 0) {
    node = node.split('?')[0];
  }

  if (node === 'body' || node === true) {
    return document.body;
  }

  return node instanceof window.Node ? node : document.querySelector(node);
}

function getShouldUpdate(node) {
  // do not updated by default
  if (!node) {
    return false;
  }
  if (typeof node === 'string' && node.indexOf('?') > 0) {
    try {
      const config = JSON.parse(node.split('?')[1]);
      return config.autoUpdate || false;
    } catch (e) {
      return false;
    }
  }
  return false;
}

const directive = {
  inserted(el, { value }, vnode) {
    el.className = el.className ? el.className + ' v-transfer-dom' : 'v-transfer-dom';
    const parentNode = el.parentNode;
    var home = document.createComment('');
    var hasMovedOut = false;

    if (value !== false) {
      parentNode.replaceChild(home, el); // moving out, el is no longer in the document
      getTarget(value).appendChild(el); // moving into new place
      hasMovedOut = true;
    }
    if (!el.__transferDomData) {
      el.__transferDomData = {
        parentNode: parentNode,
        home: home,
        target: getTarget(value),
        hasMovedOut: hasMovedOut
      };
    }
  },
  componentUpdated(el, { value }) {
    const shouldUpdate = getShouldUpdate(value);
    if (!shouldUpdate) {
      return;
    }
    // need to make sure children are done updating (vs. `update`)
    var ref$1 = el.__transferDomData;
    // homes.get(el)
    var parentNode = ref$1.parentNode;
    var home = ref$1.home;
    var hasMovedOut = ref$1.hasMovedOut; // recall where home is

    if (!hasMovedOut && value) {
      // remove from document and leave placeholder
      parentNode.replaceChild(home, el);
      // append to target
      getTarget(value).appendChild(el);
      el.__transferDomData = objectAssign({}, el.__transferDomData, { hasMovedOut: true, target: getTarget(value) });
    } else if (hasMovedOut && value === false) {
      // previously moved, coming back home
      parentNode.replaceChild(el, home);
      el.__transferDomData = objectAssign({}, el.__transferDomData, { hasMovedOut: false, target: getTarget(value) });
    } else if (value) {
      // already moved, going somewhere else
      getTarget(value).appendChild(el);
    }
  },
  unbind: function unbind(el, binding) {
    el.className = el.className.replace('v-transfer-dom', '');
    if (el.__transferDomData && el.__transferDomData.hasMovedOut === true) {
      el.__transferDomData.parentNode && el.__transferDomData.parentNode.appendChild(el);
    }
    el.__transferDomData = null;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (directive);

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABTVBMVEX6TCP1SiMAAAD1SiP6TCPsSCHnRx/pRyL4TCP4TCP2TSP1SyP0SCLxRyHySCLrRSX8TSX0SSLxRirgRRzwRCvnRiPmRSXqSCT/TST/////TiT/TyX+TiX+OQz+j3b+USn+MAD+Qhf+MgP+LQD+UCf+Tib+Sh/+Rhv+PhL+Ngj+KwH/9/X+LgD/+Pf/29L/v7H/rpz+dFb+ZUP+SyH+KAD+IQD/7uv/1cv/t6f+hWr+gmf+a0n+Xzv+PxP/+vn/9PL/8O7/6eT/yLz+iW/+fV/+eVr+cE/+bkz+aEb+WTL+SB7+RBn+OAr+NAb//fz/5uD/4tz/0cf+zcL/ycD/vKz+rJj+nYj/mob+l4D+k3r+jHL+Yj3+Vi7+UCj7TiP+PRD+HAD+FAD+DQD/7Oj/xLb+s6L+pI/+Wjf+WTT9Th/+JgD+AwD9Z0T9US/+Mw+WTTofAAAAGHRSTlPy8gD19YRxI+rb0seklYwu965rYVw5GhcONkWeAAACU0lEQVQ4y32TZ3PaQBBAZRLbcU/PrdCpd8l0DBiDTTXVvVfA3U7y/z9mJWCSeMBvRprR7NPt3t0uEwgEvk/OTYxgbnEagyh8+ciywRGwwaspT/j6FCRjYMlUgPlxxZKxsNw0s4jxN4x5ZpYgHDFNwgnU0rlXwgfmHVagxeV6XSZSLUtzAmnkKKWmrvnCe18g9NRxjtvtAqRiXcW8iNVij9RuCr4wgUIrBohax1dmNbwCHrun11QgLOMLdA2QZhrAyQMsF4/4k22AlJTjBoIqV3YKsXPwSEUtMaEklT2AAzc+EDidKtTEpSM3ELK7rujKvSjAimH0Bc0t3Wy+HACs/czDXrR0xvN8LYa56mZfkJoAULIjvLwMQ0JeWdlWX2joZxsAqz27AIcP6wDhi80qV0Wh0h6kiCckTPDwe3cvaaN63xPlZBTwH3FYpNBK3kJZc/6mCJ//IyBC5x6qViRSDG1h9fvp3ZPaf4LQ1te39DLPSwlMcdw92vfPriIPhMtrJQXhpAOwaWORJy8OlOKAX1ZfuMw9hwGiyR2AcgePK32M28xirnPqC6qUSAPsWAm08kW/zn2AyAasC5IvGLmUd40J82IbPAqHlnsbTechZOl9oXEHsE0NoUUyPJ/JUiOT/VXGlSoi3iY2jNp4Xgsd2Sq5lETXFa3OIXg4vEiILxBOlQ0tToZI1dO7YuTsUdE1r6Nmva5Wm4ZKhgimrciKcq1xftMujGh7jsTx8WA/MdNvDg5ZYgKfn9jx8UlveKe4IDuSIDfpT3dgaWGGGcHM/DcM/gGfQYmWIa3qAgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAMAAAAmopZHAAAC7lBMVEUAAAD5EwvXCQUbGBX0CgPcCwbjCwXwCwPlAwD///8oHhsjGRYbEQ/ALS/kVlnxEwskGxgxFhSGDgvrEArcDgciGBXnEgveCgauCQbgBwTgBwPPBgPWAADJAADqEAn////1EAgnGBXeEAnzEwv0Ewr6EwyQi4o7MzALAwEAAACno6I0Kyn5EQqzm5wHAQDiGBP2Ew0uAABCIyHnHBhdJCLhHhvwGBTBiYnfIR//1NXcLC1/JSXfISL///8AAQD0Egv2Egr94uOeDA/qAwHmAgDsAADYAADMCRL3EwzxEgviBwjEBQTfAAHUAQDyAADiAAD2ur32q7HweXnjESfgDiEBGxgQGxcLGRXYCxQdFBLICA2aCwrrEQnXBwfdCQXuBgTkAAHeAAD93N3HxcT3srT5qan7k5Dtg4Djb3HrRUXkECDaDBvkDRrbDBcmGBXqAxPkABMCExDoEQwYDgvlEQjmDAUQBgPeBQLaAgAKAQD66On62tz61dX90tH30NH6x8r5xcT8t738trj8r6/2paz7paj1oKX4lqL2nJ/4lpnzkpP3iJPwkY/pjo3ui4uPionxgIj1g4D0c396dXTxb3PwZHL1dHDkOTo4NTPrFTPwDi3nESjvFSTdDh/oBx8lHhzeHhvfDBr0FBbSCxYsFxQaFxTwBhP0BxLuABANEg/WCQ7RCQ7bDQylDAoACgf6DwbvDAXIBgXkBwT4AgP3CgDwCACKAwD/AgDuAADdAAC+AADZ7+796u3Y5uXz3uDR0ND8vsGqsK+VsK71qqqrqKf5mabuo6Twmpv1jYvphYvpgIbpe4D0aHuCe3n8dHhRa2lRY2D5XmD1U2DrWF5eVlRdUVDZUk/bTErrMUdNSEb0QUVMQ0HrMz0rPjvuODTqLTTzGzPgMy/nIy0WLivoHCs0KygyKijyLCchKCXvBh3vBxHyBw/wFQzoFAz0Cgz3EgvYEgvwBQvfEAgkDAjgAAenCQbNAACyAABGAAA2AAAxJVqMAAAAPXRSTlMAyfLx/PLy8vK9vb29Egn19PPz8/Py8vLy8vLy8vLt6ODf3cnJvr29vb27tLSqpaCenJWVlI+Lc2ZQRTYvY8+GjAAAAkJJREFUKM8dy2NgGwEYBuCvWLtytm0bd5csaGw2rm2ltm1rta3Ztm3b279d+/x8AQDWOzcuM8AtNVhiMGrt9t2A27uwX0kjYBiBTqcTMAKNQOvs2wBgZRyIBShHA7ofhtG+BARgdGX/FtjW94lLoXA4lCFOLae3NpDa9p3T9bETFvcYC5ycCnNSU659vnxfp3YNYbuSuibAfLXGKc4ROewYm69JDS3KR9LTkbNDpjDlK4nC5Sa46ljkciqfd4OYmUnMIJnCVPWbHGdBRJzgXG5DdmgyQ1Bd7cLSTAfD4McODqcRO8eYhKflBXyHM2HhJ5JJJmCiJGt1VOQomdL07jqRF0+9UEi28xsP4xiBXFZESngaqbQ0NymRzwuzi41i4Ll6WBdNHH6CpDWVaJNi+G7Zzm3RfnNhBrWIyGMxtA8PRnmfQp7HJ0ZGZhBV88Aw5NltNsvDTVtZUHLx7s+X511cnO8w54Chhj3S3SrzKKv0KfP2EfpQmb/ZI8GzYLaCGcK0tdnvLhIKhSKRh6eNKpj8ayZMFtd1c/HCxt1NVFHhLmtpUQ0qxEYwSSquY5Nt8YdnTY2nTNaqGmwXS4zAyMvL98cfUg/Du7Gx4f2Hb72UAV+p1zRYVK8PetT8V6HYN6Z94N+Lt3r5RNiKvra/dewKKpFI0Q6J1LfjeN6lk0HNYKU/hKD2SFWQvOpecb0czUNePUCubgLYs+AAmoXcRP39j2ShcnziX4ysA5z1jvWrzVastLA0N7e0WLXcbM3mXQD/AWET4xCvem/AAAAAAElFTkSuQmCC"

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(483)();
// imports


// module
exports.push([module.i, ".van-image-preview{top:0;left:0;width:100%;height:100%;position:fixed}.van-image-preview__image{top:0;left:0;right:0;bottom:0;margin:auto;max-width:100%;max-height:100%;position:absolute}.van-image-preview .van-swipe{height:100%}", "", {"version":3,"sources":["D:/wx-h5/node_modules/_vant@1.1.5@vant/es/vant-css/image-preview.css"],"names":[],"mappings":"AAAA,mBAAmB,MAAM,OAAO,WAAW,YAAY,cAAc,CAAC,0BAA0B,MAAM,OAAO,QAAQ,SAAS,YAAY,eAAe,gBAAgB,iBAAiB,CAAC,8BAA8B,WAAW,CAAC","file":"image-preview.css","sourcesContent":[".van-image-preview{top:0;left:0;width:100%;height:100%;position:fixed}.van-image-preview__image{top:0;left:0;right:0;bottom:0;margin:auto;max-width:100%;max-height:100%;position:absolute}.van-image-preview .van-swipe{height:100%}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(483)();
// imports


// module
exports.push([module.i, ".van-swipe{overflow:hidden;position:relative;-webkit-user-select:none;user-select:none}.van-swipe-item{float:left;height:100%}.van-swipe__track{height:100%}.van-swipe__indicators{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;left:50%;bottom:10px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.van-swipe__indicators--vertical{left:10px;top:50%;bottom:auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-swipe__indicators--vertical .van-swipe__indicator:not(:last-child){margin-bottom:6px}.van-swipe__indicator{border-radius:100%;background-color:#999;width:6px;height:6px}.van-swipe__indicator:not(:last-child){margin-right:6px}.van-swipe__indicator--active{background-color:#f60}", "", {"version":3,"sources":["D:/wx-h5/node_modules/_vant@1.1.5@vant/es/vant-css/swipe.css"],"names":[],"mappings":"AAAA,WAAW,gBAAgB,kBAAkB,yBAAyB,gBAAgB,CAAC,gBAAgB,WAAW,WAAW,CAAC,kBAAkB,WAAW,CAAC,uBAAuB,oBAAoB,qBAAqB,aAAa,kBAAkB,SAAS,YAAY,mCAAmC,0BAA0B,CAAC,iCAAiC,UAAU,QAAQ,YAAY,4BAA4B,6BAA6B,8BAA8B,sBAAsB,mCAAmC,0BAA0B,CAAC,wEAAwE,iBAAiB,CAAC,sBAAsB,mBAAmB,sBAAsB,UAAU,UAAU,CAAC,uCAAuC,gBAAgB,CAAC,8BAA8B,qBAAqB,CAAC","file":"swipe.css","sourcesContent":[".van-swipe{overflow:hidden;position:relative;-webkit-user-select:none;user-select:none}.van-swipe-item{float:left;height:100%}.van-swipe__track{height:100%}.van-swipe__indicators{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;left:50%;bottom:10px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.van-swipe__indicators--vertical{left:10px;top:50%;bottom:auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-swipe__indicators--vertical .van-swipe__indicator:not(:last-child){margin-bottom:6px}.van-swipe__indicator{border-radius:100%;background-color:#999;width:6px;height:6px}.van-swipe__indicator:not(:last-child){margin-right:6px}.van-swipe__indicator--active{background-color:#f60}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(706);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(484)("51b66b68", content, true);

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(707);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(484)("2a6803e8", content, true);

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_create__ = __webpack_require__(172);



/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_create__["a" /* default */])({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.tag, { tag: "component", class: _vm.b([_vm.type, _vm.size, {
        block: _vm.block,
        loading: _vm.loading,
        disabled: _vm.disabled,
        unclickable: _vm.disabled || _vm.loading,
        'bottom-action': _vm.bottomAction
      }]), attrs: { "type": _vm.nativeType, "disabled": _vm.disabled }, on: { "click": _vm.onClick } }, [_vm.loading ? _c('loading', { attrs: { "size": "20px", "color": _vm.type === 'default' ? 'black' : 'white' } }) : _vm._e(), _c('span', { class: _vm.b('text') }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2)], 1);
  },

  name: 'button',

  props: {
    text: String,
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    bottomAction: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },

  methods: {
    onClick: function onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event);
      }
    }
  }
}));

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_create__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_popup__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swipe__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swipe_item__ = __webpack_require__(757);






/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_create__["a" /* default */])({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.value, expression: "value" }], class: _vm.b(), on: { "touchstart": _vm.onTouchStart, "touchend": _vm.onTouchEnd, "touchcancel": _vm.onTouchEnd } }, [_c('swipe', { ref: "swipe", attrs: { "initial-swipe": _vm.startPosition } }, _vm._l(_vm.images, function (item, index) {
      return _c('swipe-item', { key: index }, [_c('img', { class: _vm.b('image'), attrs: { "src": item } })]);
    }))], 1);
  },

  name: 'image-preview',

  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_popup__["a" /* default */]],

  components: {
    Swipe: __WEBPACK_IMPORTED_MODULE_2__swipe__["a" /* default */],
    SwipeItem: __WEBPACK_IMPORTED_MODULE_3__swipe_item__["a" /* default */]
  },

  props: {
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      images: [],
      startPosition: 0
    };
  },


  methods: {
    onTouchStart: function onTouchStart() {
      this.touchStartTime = new Date();
    },
    onTouchEnd: function onTouchEnd(event) {
      event.preventDefault();

      var deltaTime = new Date() - this.touchStartTime;
      var _$refs$swipe = this.$refs.swipe,
          offsetX = _$refs$swipe.offsetX,
          offsetY = _$refs$swipe.offsetY;

      // prevent long tap to close component

      if (deltaTime < 500 && offsetX < 10 && offsetY < 10) {
        this.$emit('input', false);
      }
    }
  }
}));

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_preview__ = __webpack_require__(753);



var instance = void 0;

var initInstance = function initInstance() {
  instance = new (__WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_1__image_preview__["a" /* default */]))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
};

var ImagePreview = function ImagePreview(images) {
  var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!instance) {
    initInstance();
  }

  instance.images = images;
  instance.startPosition = startPosition;
  instance.value = true;
  instance.$on('input', function (show) {
    instance.value = show;
  });

  return instance;
};

ImagePreview.install = function () {
  __WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1__image_preview__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["a"] = (ImagePreview);

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vant_css_base_css__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vant_css_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vant_css_base_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vant_css_popup_css__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vant_css_popup_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vant_css_popup_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vant_css_swipe_css__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vant_css_swipe_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vant_css_swipe_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vant_css_image_preview_css__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vant_css_image_preview_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__vant_css_image_preview_css__);





/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_create__ = __webpack_require__(172);



/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_create__["a" /* default */])({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b(), style: _vm.style }, [_vm._t("default")], 2);
  },

  name: 'swipe-item',

  data: function data() {
    return {
      offset: 0
    };
  },


  computed: {
    style: function style() {
      var _$parent = this.$parent,
          vertical = _$parent.vertical,
          width = _$parent.width,
          height = _$parent.height;

      return {
        width: width + 'px',
        height: vertical ? height + 'px' : '100%',
        transform: 'translate' + (vertical ? 'Y' : 'X') + '(' + this.offset + 'px)'
      };
    }
  },

  beforeCreate: function beforeCreate() {
    this.$parent.swipes.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  }
}));

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_create__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_touch__ = __webpack_require__(183);




/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_create__["a" /* default */])({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('div', { class: _vm.b('track'), style: _vm.trackStyle, on: { "touchstart": _vm.onTouchStart, "touchmove": _vm.onTouchMove, "touchend": _vm.onTouchEnd, "touchcancel": _vm.onTouchEnd, "transitionend": function transitionend($event) {
          _vm.$emit('change', _vm.activeIndicator);
        } } }, [_vm._t("default")], 2), _vm.showIndicators && _vm.count > 1 ? _c('div', { class: _vm.b('indicators', { vertical: _vm.vertical }) }, _vm._l(_vm.count, function (index) {
      return _c('i', { class: _vm.b('indicator', { active: index - 1 === _vm.activeIndicator }) });
    })) : _vm._e()]);
  },

  name: 'swipe',

  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_touch__["a" /* default */]],

  props: {
    autoplay: Number,
    vertical: Boolean,
    loop: {
      type: Boolean,
      default: true
    },
    touchable: {
      type: Boolean,
      default: true
    },
    initialSwipe: {
      type: Number,
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 500
    }
  },

  data: function data() {
    return {
      width: 0,
      height: 0,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swipes: [],
      swiping: false
    };
  },
  mounted: function mounted() {
    this.initialize();
  },
  destroyed: function destroyed() {
    this.clear();
  },


  watch: {
    swipes: function swipes() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (!_autoplay) {
        this.clear();
      }
    }
  },

  computed: {
    count: function count() {
      return this.swipes.length;
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'height' : 'width'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    trackStyle: function trackStyle() {
      var _ref;

      return _ref = {}, _ref[this.vertical ? 'height' : 'width'] = this.trackSize + 'px', _ref.transitionDuration = (this.swiping ? 0 : this.duration) + 'ms', _ref.transform = 'translate' + (this.vertical ? 'Y' : 'X') + '(' + this.offset + 'px)', _ref;
    }
  },

  methods: {
    // initialize swipe position
    initialize: function initialize() {
      clearTimeout(this.timer);
      if (this.$el) {
        var rect = this.$el.getBoundingClientRect();
        this.width = rect.width;
        this.height = rect.height;
      }
      this.swiping = true;
      this.active = this.initialSwipe;
      this.offset = this.count > 1 ? -this.size * this.active : 0;
      this.swipes.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;

      this.clear();
      this.swiping = true;
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable) return;

      this.touchMove(event);

      if (this.vertical && this.direction === 'vertical' || this.direction === 'horizontal') {
        event.preventDefault();
        event.stopPropagation();
      }

      this.move(0, Math.min(Math.max(this.delta, -this.size), this.size));
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable) return;

      if (this.delta) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        this.move(offset > 50 ? this.delta > 0 ? -1 : 1 : 0);
        this.swiping = false;
      }

      this.autoPlay();
    },
    move: function move() {
      var move = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var delta = this.delta,
          active = this.active,
          count = this.count,
          swipes = this.swipes,
          trackSize = this.trackSize;

      var atFirst = active === 0;
      var atLast = active === count - 1;
      var outOfBounds = !this.loop && (atFirst && (offset > 0 || move < 0) || atLast && (offset < 0 || move > 0));

      if (outOfBounds || count <= 1) {
        return;
      }

      if (move) {
        if (active === -1) {
          swipes[count - 1].offset = 0;
        }
        swipes[0].offset = atLast && move > 0 ? trackSize : 0;

        this.active += move;
      } else {
        if (atFirst) {
          swipes[count - 1].offset = delta > 0 ? -trackSize : 0;
        } else if (atLast) {
          swipes[0].offset = delta < 0 ? trackSize : 0;
        }
      }
      this.offset = offset - this.active * this.size;
    },
    correctPosition: function correctPosition() {
      if (this.active <= -1) {
        this.move(this.count);
      }
      if (this.active >= this.count) {
        this.move(-this.count);
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this = this;

      var autoplay = this.autoplay;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this.swiping = true;
          _this.correctPosition();

          setTimeout(function () {
            _this.swiping = false;
            _this.move(1);
            _this.autoPlay();
          }, 30);
        }, autoplay);
      }
    }
  }
}));

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vant_es_image_preview_style__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vant_es_image_preview__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vant_es_goods_action_mini_btn_style__ = __webpack_require__(1294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vant_es_goods_action_mini_btn__ = __webpack_require__(1293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vant_es_goods_action_big_btn_style__ = __webpack_require__(1292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vant_es_goods_action_big_btn__ = __webpack_require__(1291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vant_es_goods_action_style__ = __webpack_require__(1296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vant_es_goods_action__ = __webpack_require__(1295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_clipboard2__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_clipboard2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vue_clipboard2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vuex__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vux_src_components_loading_index_vue__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vux_src_components_loading_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_vux_src_components_loading_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vux_src_components_x_dialog_index_vue__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vux_src_components_x_dialog_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_vux_src_components_x_dialog_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_vux_src_directives_transfer_dom_index_js__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_api__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_timers__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_timers__);









var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };










/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    TransferDom: __WEBPACK_IMPORTED_MODULE_12_vux_src_directives_transfer_dom_index_js__["a" /* default */]
  },
  data() {
    return {
      isLoading: false,
      detailData: {},
      amountInfo: '',
      noms: 1,
      thumbPic: '',
      goodsDetail: {},
      goodsTbkDetail: {},
      goodsImages: [],
      hasAmount: false,
      showHideOnBlur: false,
      hasDone: false
    };
  },
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_vuex__["b" /* mapGetters */])(['comInfomation', 'identityCode'])),
  created() {
    console.log(this.comInfomation, this.identityCode);
  },
  components: {
    XDialog: __WEBPACK_IMPORTED_MODULE_11_vux_src_components_x_dialog_index_vue___default.a,
    'van-goods-action': __WEBPACK_IMPORTED_MODULE_7_vant_es_goods_action__["a" /* default */],
    'van-goods-action-big-btn': __WEBPACK_IMPORTED_MODULE_5_vant_es_goods_action_big_btn__["a" /* default */],
    'van-goods-action-mini-btn': __WEBPACK_IMPORTED_MODULE_3_vant_es_goods_action_mini_btn__["a" /* default */],
    Loading: __WEBPACK_IMPORTED_MODULE_10_vux_src_components_loading_index_vue___default.a,
    ImagePreview: __WEBPACK_IMPORTED_MODULE_1_vant_es_image_preview__["a" /* default */]
  },
  methods: {
    getDetails(data) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_api__["D" /* getDetails */])(data).then(res => {
        if (res.code === 0) {
          this.goodsDetail = res.result.data;
          document.title = res.result.data.item_title;
        }
        this.isLoading = true;
      }).catch(err => {
        console.log(err);
      });
    },
    getConvert(data) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_api__["E" /* tbkConvert */])(data).then(res => {
        if (res.code === 0) {
          this.goodsTbkDetail = res.result;
          this.goodsTbkDetail['commissions'] = (this.goodsTbkDetail.upgrade_subsidy + this.goodsTbkDetail.subsidy).toFixed(2);
          this.goodsTbkDetail['after_price'] = (this.goodsTbkDetail.item_price - this.goodsTbkDetail.coupon_amount).toFixed(2);
        }
        this.hasDone = true;
      }).catch(err => {
        console.log(err);
      });
    },
    getImageList(param) {
      let that = this;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_api__["F" /* goodsImgDetails */])(param).then(res => {
        if (res.code === 0) {
          that.goodsImages = res.result.data;
        }
      });
    },
    gobackhome() {

      this.$router.push('/');
    },
    onCopy(e) {
      this.showHideOnBlur = true;
      console.log(e);
    },
    onError(e) {
      console.log(e);
    },
    onClickCopy(item) {
      console.log(item);
    },
    onClickBigBtn(e) {
      console.log(e);
    },
    getPreview() {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vant_es_image_preview__["a" /* default */])([this.goodsDetail.item_pic]);
    }
  },
  mounted() {
    let that = this;
    let comInfomation = that.$store.state.comInfomation;
    that.$nextTick(() => {
      let id = this.$route.params.id;
      this.amountInfo = this.$route.params.info;
      let data = {
        item_id: id
      };
      let data1 = {
        gid: id
      };
      that.getDetails(data);
      that.getImageList(data1);
      that.getConvert(data);
      if (comInfomation.item_coupon) {
        this.hasAmount = true;
      }
    });
  },
  activated() {}
});

/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(483)();
// imports


// module
exports.push([module.i, ".van-goods-action{left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;position:fixed}.van-goods-action-big-btn{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:0}@media (max-width:321px){.van-goods-action-big-btn{font-size:15px}}.van-goods-action-mini-btn{color:#666;display:-webkit-box;display:-webkit-flex;display:flex;height:50px;font-size:10px;min-width:15%;line-height:1;text-align:center;background-color:#fff;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.van-goods-action-mini-btn:after{border-width:1px 0 0 1px}.van-goods-action-mini-btn:first-child:after{border-left-width:0}.van-goods-action-mini-btn:active{background-color:#e8e8e8}.van-goods-action-mini-btn__icon{width:1em;font-size:20px;margin:0 auto 5px}", "", {"version":3,"sources":["D:/wx-h5/node_modules/_vant@1.1.5@vant/es/vant-css/goods-action.css"],"names":[],"mappings":"AAAA,kBAAkB,OAAO,QAAQ,SAAS,oBAAoB,qBAAqB,aAAa,cAAc,CAAC,0BAA0B,mBAAmB,eAAe,OAAO,SAAS,CAAC,yBAAyB,0BAA0B,cAAc,CAAC,CAAC,2BAA2B,WAAW,oBAAoB,qBAAqB,aAAa,YAAY,eAAe,cAAc,cAAc,kBAAkB,sBAAsB,4BAA4B,6BAA6B,8BAA8B,sBAAsB,wBAAwB,+BAA+B,sBAAsB,CAAC,iCAAkC,wBAAwB,CAAC,6CAA8C,mBAAmB,CAAC,kCAAkC,wBAAwB,CAAC,iCAAiC,UAAU,eAAe,iBAAiB,CAAC","file":"goods-action.css","sourcesContent":[".van-goods-action{left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;position:fixed}.van-goods-action-big-btn{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:0}@media (max-width:321px){.van-goods-action-big-btn{font-size:15px}}.van-goods-action-mini-btn{color:#666;display:-webkit-box;display:-webkit-flex;display:flex;height:50px;font-size:10px;min-width:15%;line-height:1;text-align:center;background-color:#fff;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.van-goods-action-mini-btn::after{border-width:1px 0 0 1px}.van-goods-action-mini-btn:first-child::after{border-left-width:0}.van-goods-action-mini-btn:active{background-color:#e8e8e8}.van-goods-action-mini-btn__icon{width:1em;font-size:20px;margin:0 auto 5px}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(483)();
// imports


// module
exports.push([module.i, ".vux-close[data-v-30ebf830]{position:relative;display:inline-block;vertical-align:middle;color:#999;width:24px;height:24px}.vux-close[data-v-30ebf830]:after,.vux-close[data-v-30ebf830]:before{content:\"\";position:absolute;left:0;top:11px;width:24px;height:1px;background-color:currentColor;transform:rotate(-45deg)}.vux-close[data-v-30ebf830]:after{transform:rotate(45deg)}.goods_container[data-v-30ebf830]{padding-bottom:50px;background:#fff}.goods_container .goods_content .infomations[data-v-30ebf830]{position:relative;border-bottom:1rem solid #e9e9e9;padding:1rem 1rem 0}.goods_container .goods_content .infomations .price[data-v-30ebf830]{color:#e4bc76;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.goods_container .goods_content .infomations .price_icon[data-v-30ebf830]{text-align:center;font-size:.8rem;border:1px solid #e4bc76;border-radius:2px;width:2.5rem;padding:0 .8rem;height:1.5rem;line-height:1.5rem}.goods_container .goods_content .infomations .price_num[data-v-30ebf830]{font-size:1.2rem;font-weight:600;margin-left:5px}.goods_container .goods_content .infomations .old_price[data-v-30ebf830]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;text-align:left;color:#7f7f7f;font-size:.9rem}.goods_container .goods_content .infomations .old_price div[data-v-30ebf830]{-ms-flex:1;flex:1;line-height:2rem}.goods_container .goods_content .infomations .price_desc[data-v-30ebf830]{color:#e4bc76;font-size:.9rem;line-height:2rem}.goods_container .goods_content .infomations .goods_title[data-v-30ebf830]{color:#333;font-size:.9rem;line-height:2rem}.goods_container .goods_content .infomations .goods_title img[data-v-30ebf830]{display:inline-block;width:1rem;height:1rem;vertical-align:middle;margin-right:10px}.goods_container .goods_content .infomations button[data-v-30ebf830]{background:transparent;border:none;line-height:1.5rem;position:absolute;top:1rem;right:1rem;color:#e4bc76;font-size:1.3rem}.goods_container .goods_content .preferential[data-v-30ebf830]{padding:.5rem 1rem;position:relative;border-bottom:1rem solid #e9e9e9;font-size:.9rem}.goods_container .goods_content .preferential .pre[data-v-30ebf830]{line-height:3rem}.goods_container .goods_content .preferential .pre .amount_info[data-v-30ebf830]{line-height:2rem}.footer-box[data-v-30ebf830],.footer[data-v-30ebf830]{display:-ms-flexbox;display:flex;width:100%}.footer-box .van-button__text[data-v-30ebf830]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.footer-box .van-button__text .btn-text[data-v-30ebf830]{-ms-flex:.5;flex:.5;line-height:25px}.footer-box .van-button__text .h6[data-v-30ebf830]{line-height:20px;font-size:.8rem}.footer-box .van-button__text .h3[data-v-30ebf830]{line-height:30px;font-size:1rem}.dialog-box .weui-dialog[data-v-30ebf830]{border-radius:8px;padding-bottom:8px}.dialog-box .dialog-title[data-v-30ebf830]{line-height:30px;color:#666}.dialog-box .img-box[data-v-30ebf830]{overflow:hidden}.dialog-box .click-text[data-v-30ebf830]{padding:.5rem;font-size:.8rem;line-height:1.6rem}.dialog-box .vux-close[data-v-30ebf830]{margin-top:8px;margin-bottom:8px}", "", {"version":3,"sources":["D:/wx-h5/src/pages/Index/detail.vue"],"names":[],"mappings":"AACA,4BACE,kBAAmB,AACnB,qBAAsB,AACtB,sBAAuB,AACvB,WAAY,AACZ,WAAY,AACZ,WAAa,CACd,AACD,qEAEE,WAAY,AACZ,kBAAmB,AACnB,OAAQ,AACR,SAAU,AACV,WAAY,AACZ,WAAY,AACZ,8BAA+B,AAC/B,wBAA0B,CAC3B,AACD,kCACE,uBAAyB,CAC1B,AACD,kCACE,oBAAqB,AACrB,eAAoB,CACrB,AACD,8DACE,kBAAmB,AACnB,iCAAkC,AAClC,mBAAqB,CACtB,AACD,qEACE,cAAe,AACf,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,kBAAoB,CACzB,AACD,0EACE,kBAAmB,AACnB,gBAAiB,AACjB,yBAA0B,AAC1B,kBAAmB,AACnB,aAAc,AACd,gBAAiB,AACjB,cAAe,AACf,kBAAoB,CACrB,AACD,yEACE,iBAAkB,AAClB,gBAAiB,AACjB,eAAiB,CAClB,AACD,yEACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,8BAA+B,AACnC,gBAAiB,AACjB,cAAe,AACf,eAAiB,CAClB,AACD,6EACE,WAAY,AACR,OAAQ,AACZ,gBAAkB,CACnB,AACD,0EACE,cAAe,AACf,gBAAiB,AACjB,gBAAkB,CACnB,AACD,2EACE,WAAY,AACZ,gBAAiB,AACjB,gBAAkB,CACnB,AACD,+EACE,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,iBAAmB,CACpB,AACD,qEACE,uBAAwB,AACxB,YAAa,AACb,mBAAoB,AACpB,kBAAmB,AACnB,SAAU,AACV,WAAY,AACZ,cAAe,AACf,gBAAkB,CACnB,AACD,+DACE,mBAAoB,AACpB,kBAAmB,AACnB,iCAAkC,AAClC,eAAiB,CAClB,AACD,oEACE,gBAAkB,CACnB,AACD,iFACE,gBAAkB,CACnB,AAMD,sDACE,oBAAqB,AACrB,aAAc,AACd,UAAY,CACb,AACD,+CACE,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,qBAAuB,CAC5B,AACD,yDACE,YAAa,AACT,QAAS,AACb,gBAAkB,CACnB,AACD,mDACE,iBAAkB,AAClB,eAAiB,CAClB,AACD,mDACE,iBAAkB,AAClB,cAAgB,CACjB,AACD,0CACE,kBAAmB,AACnB,kBAAoB,CACrB,AACD,2CACE,iBAAkB,AAClB,UAAY,CACb,AACD,sCACE,eAAiB,CAClB,AACD,yCACE,cAAe,AACf,gBAAiB,AACjB,kBAAoB,CACrB,AACD,wCACE,eAAgB,AAChB,iBAAmB,CACpB","file":"detail.vue","sourcesContent":["\n.vux-close[data-v-30ebf830] {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  color: #999;\n  width: 24px;\n  height: 24px;\n}\n.vux-close[data-v-30ebf830]:before,\n.vux-close[data-v-30ebf830]:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 11px;\n  width: 24px;\n  height: 1px;\n  background-color: currentColor;\n  transform: rotate(-45deg);\n}\n.vux-close[data-v-30ebf830]:after {\n  transform: rotate(45deg);\n}\n.goods_container[data-v-30ebf830] {\n  padding-bottom: 50px;\n  background: #ffffff;\n}\n.goods_container .goods_content .infomations[data-v-30ebf830] {\n  position: relative;\n  border-bottom: 1rem solid #e9e9e9;\n  padding: 1rem 1rem 0;\n}\n.goods_container .goods_content .infomations .price[data-v-30ebf830] {\n  color: #e4bc76;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.goods_container .goods_content .infomations .price_icon[data-v-30ebf830] {\n  text-align: center;\n  font-size: .8rem;\n  border: 1px solid #e4bc76;\n  border-radius: 2px;\n  width: 2.5rem;\n  padding: 0 .8rem;\n  height: 1.5rem;\n  line-height: 1.5rem;\n}\n.goods_container .goods_content .infomations .price_num[data-v-30ebf830] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin-left: 5px;\n}\n.goods_container .goods_content .infomations .old_price[data-v-30ebf830] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  text-align: left;\n  color: #7f7f7f;\n  font-size: .9rem;\n}\n.goods_container .goods_content .infomations .old_price div[data-v-30ebf830] {\n  -ms-flex: 1;\n      flex: 1;\n  line-height: 2rem;\n}\n.goods_container .goods_content .infomations .price_desc[data-v-30ebf830] {\n  color: #e4bc76;\n  font-size: .9rem;\n  line-height: 2rem;\n}\n.goods_container .goods_content .infomations .goods_title[data-v-30ebf830] {\n  color: #333;\n  font-size: .9rem;\n  line-height: 2rem;\n}\n.goods_container .goods_content .infomations .goods_title img[data-v-30ebf830] {\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.goods_container .goods_content .infomations button[data-v-30ebf830] {\n  background: transparent;\n  border: none;\n  line-height: 1.5rem;\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  color: #e4bc76;\n  font-size: 1.3rem;\n}\n.goods_container .goods_content .preferential[data-v-30ebf830] {\n  padding: .5rem 1rem;\n  position: relative;\n  border-bottom: 1rem solid #e9e9e9;\n  font-size: .9rem;\n}\n.goods_container .goods_content .preferential .pre[data-v-30ebf830] {\n  line-height: 3rem;\n}\n.goods_container .goods_content .preferential .pre .amount_info[data-v-30ebf830] {\n  line-height: 2rem;\n}\n.footer[data-v-30ebf830] {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n.footer-box[data-v-30ebf830] {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n.footer-box .van-button__text[data-v-30ebf830] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n.footer-box .van-button__text .btn-text[data-v-30ebf830] {\n  -ms-flex: .5;\n      flex: .5;\n  line-height: 25px;\n}\n.footer-box .van-button__text .h6[data-v-30ebf830] {\n  line-height: 20px;\n  font-size: .8rem;\n}\n.footer-box .van-button__text .h3[data-v-30ebf830] {\n  line-height: 30px;\n  font-size: 1rem;\n}\n.dialog-box .weui-dialog[data-v-30ebf830] {\n  border-radius: 8px;\n  padding-bottom: 8px;\n}\n.dialog-box .dialog-title[data-v-30ebf830] {\n  line-height: 30px;\n  color: #666;\n}\n.dialog-box .img-box[data-v-30ebf830] {\n  overflow: hidden;\n}\n.dialog-box .click-text[data-v-30ebf830] {\n  padding: .5rem;\n  font-size: .8rem;\n  line-height: 1.6rem;\n}\n.dialog-box .vux-close[data-v-30ebf830] {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=14.899cf4af00189d69c2dd.js.map