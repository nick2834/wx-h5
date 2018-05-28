webpackJsonp([0],{

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(816)

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(734),
  /* template */
  __webpack_require__(933),
  /* scopeId */
  "data-v-718ce766",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((styles = {}) => {
  for (let i in styles) {
    if (typeof styles[i] === 'undefined') {
      delete styles[i];
    }
  }
  return styles;
});

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(579)

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(574),
  /* template */
  __webpack_require__(583),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'inline-desc'
});

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(512)();
// imports


// module
exports.push([module.i, ".vux-label-desc{font-size:14px;color:#666}", "", {"version":3,"sources":["D:/zhitaoAPP/node_modules/_vux@2.9.1@vux/src/components/inline-desc/index.vue"],"names":[],"mappings":"AACA,gBACE,eAAe,AACf,UAAW,CACZ","file":"index.vue","sourcesContent":["\n.vux-label-desc {\n  font-size:14px;\n  color:#666;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(577);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(513)("b940ae7c", content, true);

/***/ }),

/***/ 583:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "vux-label-desc"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(588),
  /* template */
  __webpack_require__(595),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(591)

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(589),
  /* template */
  __webpack_require__(594),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__ = __webpack_require__(131);
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
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'tab-item',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__["a" /* childMixin */]],
  props: {
    activeClass: String,
    disabled: Boolean,
    badgeBackground: {
      type: String,
      default: '#f74c31'
    },
    badgeColor: {
      type: String,
      default: '#fff'
    },
    badgeLabel: String
  },
  computed: {
    style() {
      return {
        borderWidth: this.$parent.lineWidth + 'px',
        borderColor: this.$parent.activeColor,
        color: this.currentSelected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
        border: this.$parent.animate ? 'none' : 'auto'
      };
    }
  }
});

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__ = __webpack_require__(131);
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
  name: 'tab',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__["b" /* parentMixin */]],
  mounted() {
    // stop bar anmination on first loading
    this.$nextTick(() => {
      setTimeout(() => {
        this.hasReady = true;
      }, 0);
    });
  },
  props: {
    lineWidth: {
      type: Number,
      default: 3
    },
    activeColor: String,
    barActiveColor: String,
    defaultColor: String,
    disabledColor: String,
    animate: {
      type: Boolean,
      default: true
    },
    customBarWidth: [Function, String],
    preventDefault: Boolean,
    scrollThreshold: {
      type: Number,
      default: 4
    },
    barPosition: {
      type: String,
      default: 'bottom',
      validator(val) {
        return ['bottom', 'top'].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    barLeft() {
      if (this.hasReady) {
        const count = this.scrollable ? window.innerWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width : this.number;
        return `${this.currentIndex * (100 / count)}%`;
      }
    },
    barRight() {
      if (this.hasReady) {
        const count = this.scrollable ? window.innerWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width : this.number;
        return `${(count - this.currentIndex - 1) * (100 / count)}%`;
      }
    },
    // when prop:custom-bar-width
    innerBarStyle() {
      return {
        width: typeof this.customBarWidth === 'function' ? this.customBarWidth(this.currentIndex) : this.customBarWidth,
        backgroundColor: this.barActiveColor || this.activeColor
      };
    },
    // end
    barStyle() {
      const commonStyle = {
        left: this.barLeft,
        right: this.barRight,
        display: 'block',
        height: this.lineWidth + 'px',
        transition: !this.hasReady ? 'none' : null
      };
      if (!this.customBarWidth) {
        commonStyle.backgroundColor = this.barActiveColor || this.activeColor;
      } else {
        commonStyle.backgroundColor = 'transparent'; // when=prop:custom-bar-width
      }
      return commonStyle;
    },
    barClass() {
      return {
        'vux-tab-ink-bar-transition-forward': this.direction === 'forward',
        'vux-tab-ink-bar-transition-backward': this.direction === 'backward'
      };
    },
    scrollable() {
      return this.number > this.scrollThreshold;
    }
  },
  watch: {
    currentIndex(newIndex, oldIndex) {
      this.direction = newIndex > oldIndex ? 'forward' : 'backward';
      this.$emit('on-index-change', newIndex, oldIndex);
      this.hasReady && this.scrollToActiveTab();
    }
  },
  data() {
    return {
      direction: 'forward',
      right: '100%',
      hasReady: false
    };
  },
  methods: {
    scrollToActiveTab() {
      if (!this.scrollable || !this.$children || !this.$children.length) {
        return;
      }
      const currentIndexTab = this.$children[this.currentIndex].$el;
      let count = 0;
      // scroll animation
      const step = () => {
        const scrollDuration = 15;
        const nav = this.$refs.nav;
        nav.scrollLeft += (currentIndexTab.offsetLeft - (nav.offsetWidth - currentIndexTab.offsetWidth) / 2 - nav.scrollLeft) / scrollDuration;
        if (++count < scrollDuration) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }
});

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(512)();
// imports


// module
exports.push([module.i, ".vux-tab-ink-bar{position:absolute;height:2px;bottom:0;left:0;background-color:#04be02;text-align:center}.vux-tab-ink-bar-transition-forward{transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s}.vux-tab-ink-bar-transition-backward{transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1)}.vux-tab-bar-top .vux-tab-ink-bar{top:0}.vux-tab{display:-ms-flexbox;display:flex;background-color:#fff;height:44px;position:relative}.vux-tab button{padding:0;border:0;outline:0;background:0 0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.vux-tab .vux-tab-item{display:block;-ms-flex:1;flex:1;width:100%;height:100%;box-sizing:border-box;background:linear-gradient(180deg,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background-size:100% 1px;font-size:14px;text-align:center;line-height:44px;color:#666}.vux-tab .vux-tab-item.vux-tab-selected{color:#04be02;border-bottom:3px solid #04be02}.vux-tab-bar-top .vux-tab .vux-tab-item{background:linear-gradient(180deg,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 0 no-repeat;background-size:100% 1px}.vux-tab-bar-top .vux-tab .vux-tab-item.vux-tab-selected{border-bottom:none;border-top:3px solid #04be02}.vux-tab .vux-tab-item.vux-tab-disabled{color:#ddd}.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected{background:0 0}.vux-tab-bar-inner{display:block;background-color:#04be02;margin:auto;height:100%;transition:width .3s cubic-bezier(.35,0,.25,1)}.vux-tab-item-badge{position:absolute;top:0;bottom:0;box-sizing:border-box;display:inline-block;height:18px;min-width:18px;padding:0 4px;border-radius:30px;margin:auto 0 auto 4px;line-height:18px;font-size:11px;background-clip:padding-box;vertical-align:middle}.vux-tab-wrap{position:relative;padding-top:44px}.vux-tab-container{height:44px;top:0;left:0;right:0;overflow:hidden;position:absolute}.scrollable{overflow-y:hidden;overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:17px;box-sizing:content-box}.scrollable::-webkit-scrollbar{display:none}.scrollable .vux-tab-ink-bar{bottom:17px;position:absolute}.scrollable .vux-tab-item{-ms-flex:0 0 22%;flex:0 0 22%}", "", {"version":3,"sources":["D:/zhitaoAPP/node_modules/_vux@2.9.1@vux/src/components/tab/tab.vue"],"names":[],"mappings":"AAgSA,iBACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,OAAQ,AACR,yBAA0B,AAC1B,iBAAmB,CACpB,AACD,oCACE,sFAAsG,CACvG,AACD,qCACE,sFAAsG,CACvG,AACD,kCACE,KAAO,CACR,AACD,SACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACvB,YAAa,AACb,iBAAmB,CACpB,AACD,gBACE,UAAW,AACX,SAAU,AACV,UAAW,AACX,eAAgB,AAChB,wBAAyB,AACtB,qBAAsB,AACjB,eAAiB,CAC1B,AACD,uBACE,cAAe,AACf,WAAY,AACR,OAAQ,AACZ,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,qFAAoG,AACpG,yBAA0B,AAC1B,eAAgB,AAChB,kBAAmB,AACnB,iBAAkB,AAClB,UAAY,CACb,AACD,wCACE,cAAe,AACf,+BAAiC,CAClC,AACD,wCACE,kFAAiG,AACjG,wBAA0B,CAC3B,AACD,yDACE,mBAAoB,AACpB,4BAA8B,CAC/B,AACD,wCACE,UAAY,CACb,AACD,2DACE,cAAgB,CACjB,AAED,mBACE,cAAe,AACf,yBAA0B,AAC1B,YAAa,AACb,YAAa,AACb,8CAAsD,CACvD,AACD,oBACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,sBAAuB,AACvB,qBAAsB,AACtB,YAAa,AACb,eAAgB,AAChB,cAAe,AACf,mBAAoB,AACpB,uBAAwB,AACxB,iBAAkB,AAClB,eAAgB,AAChB,4BAA6B,AAC7B,qBAAuB,CACxB,AACD,cACE,kBAAmB,AACnB,gBAAkB,CACnB,AACD,mBACE,YAAa,AACb,MAAO,AACP,OAAQ,AACR,QAAS,AACT,gBAAiB,AACjB,iBAAmB,CACpB,AACD,YACE,kBAAmB,AACnB,gBAAiB,AACjB,iCAAkC,AAClC,oBAAqB,AACrB,sBAAwB,CACzB,AACD,+BACE,YAAc,CACf,AACD,6BACE,YAAa,AACb,iBAAmB,CACpB,AACD,0BACE,iBAAkB,AACd,YAAc,CACnB","file":"tab.vue","sourcesContent":["/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.vux-tab-ink-bar {\n  position: absolute;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: #04BE02;\n  text-align: center;\n}\n.vux-tab-ink-bar-transition-forward {\n  transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;\n}\n.vux-tab-ink-bar-transition-backward {\n  transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s, left 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.vux-tab-bar-top .vux-tab-ink-bar {\n  top: 0;\n}\n.vux-tab {\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #fff;\n  height: 44px;\n  position: relative;\n}\n.vux-tab button {\n  padding: 0;\n  border: 0;\n  outline: 0;\n  background: 0 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.vux-tab .vux-tab-item {\n  display: block;\n  -ms-flex: 1;\n      flex: 1;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;\n  background-size: 100% 1px;\n  font-size: 14px;\n  text-align: center;\n  line-height: 44px;\n  color: #666;\n}\n.vux-tab .vux-tab-item.vux-tab-selected {\n  color: #04BE02;\n  border-bottom: 3px solid #04BE02;\n}\n.vux-tab-bar-top .vux-tab .vux-tab-item {\n  background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) top left no-repeat;\n  background-size: 100% 1px;\n}\n.vux-tab-bar-top .vux-tab .vux-tab-item.vux-tab-selected {\n  border-bottom: none;\n  border-top: 3px solid #04BE02;\n}\n.vux-tab .vux-tab-item.vux-tab-disabled {\n  color: #ddd;\n}\n.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected {\n  background: 0 0;\n}\n/** when=prop:custom-bar-width **/\n.vux-tab-bar-inner {\n  display: block;\n  background-color: #04BE02;\n  margin: auto;\n  height: 100%;\n  transition: width 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.vux-tab-item-badge {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  box-sizing: border-box;\n  display: inline-block;\n  height: 18px;\n  min-width: 18px;\n  padding: 0 4px;\n  border-radius: 30px;\n  margin: auto 0 auto 4px;\n  line-height: 18px;\n  font-size: 11px;\n  background-clip: padding-box;\n  vertical-align: middle;\n}\n.vux-tab-wrap {\n  position: relative;\n  padding-top: 44px;\n}\n.vux-tab-container {\n  height: 44px;\n  top: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  position: absolute;\n}\n.scrollable {\n  overflow-y: hidden;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  padding-bottom: 17px;\n  box-sizing: content-box;\n}\n.scrollable::-webkit-scrollbar {\n  display: none;\n}\n.scrollable .vux-tab-ink-bar {\n  bottom: 17px;\n  position: absolute;\n}\n.scrollable .vux-tab-item {\n  -ms-flex: 0 0 22%;\n      flex: 0 0 22%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(590);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(513)("f8266eae", content, true);

/***/ }),

/***/ 592:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABLFBMVEUAAABJi+9FivLy9/57f4VQjeuuzPro8f7U5P2Itfjk7v3h7P10f4+30vupyfqlx/qCsfhooPZOieN2f4xWlfXV5f3A2Pu40vtkf6egxPmOuPh7rffL3/zL3/yKtvhuf5hvf5dsf5xnf6LA2Pu20fthf6xgf61df7Fcf7ScwflUfr9TfsBSfsKKtvhNfslGftSDi5jM3fVff69ff69QfsVQfsV8rfd7rff///9/f3/9/v/1+f739/fW1taGhob19fWcnJyLi4vj4+PT09O8vLyvr6/8/Pzf39/a2trFxcWsrKylpaWOjo75+//Nzc3Kysq1tbWDg4PCwsK+vr6zs7OgoKCWlpaRkZGJiYn7+/vu7u7n5+d9f4Lw8PC4uLiZmZn5+fns7OyYmJinp6deOkguAAAAOHRSTlMABAL+/gq4/fNM/Pv7zq2gQhMP+wf13tHLlmAx6+pQ8+/q3tvJtrKilohpYVtWORr46KmnTUszLwIpMQMAAARfSURBVGjerZl5UxpBEMV7d7m9gonGxNz3fR/d7MolgiACRoMajeb4/t8hVUmsUWD6DQu/sso/oPbxpme6p3vJFT//cmE5kwtC5jDIZZYXXuZ9miZedi7NI0jPZb0pKTydYYWZpxPr+NkMQzJZfxITqW12YjvlxZV4UGBnCg/iyPjzRsJNZn7sRbsUjHjMhb9hgkvjrdRN1rAq3fTImdVw8JHm36hPDOEqOZIaflABeDKk3CKeGX6CAZvJ+AS5kh5+BNS58LX0FQIkA81FqdHttVq9bvWH5ihIkspiqLioNr8W5S8Hv9e0hQsXVR+hVSFaL8t5TjeV2IRJJR6BTeJbbV8GaWorZo2Ll7ZFu1mUEdSO6ladtO1YWrN6Syzs71kjk9HPYGHQyYbY6Q5K6KdylS2si0IxsgZmdURAQktADiui0bGGJRwOizXvdkSlZT8wN4bqhzWPbInKfp2tDNQXP7ClqlJRVHa+2Y9+4NN55tlGQwCbbGf+QtTtZakrAC2LFTwyzLGVWgwRIzMHjICTCESMFUu9xSI4JoXBc+9vm3wyvsiRWpa3zzbYdVbYAxo7P/XKf53+MaPV810gcvCDVWb+l0P1ytAVfOJVL//K1zXW2AQiZQZcw6vFR0DkVLkomfXyWKVUEZUtRnhElAXXuDIUAUHJEtFV1sCpnhFXiSitO6m3UVpBVtJEPlitjgC+MsKnPOuUBbDzHQUlT7dw3OF6AbK0wDpfBbGOnCzQfeCk5SACWKYl0Ov0BIC31xLlgJMvgmgwIEcB66wLoPgdOQkoVI3gBCn9OgNCYkBUASIt3BgT7HI34OaCUMiAKsgqdegkpAD26+vlHbGyETEkoBwrwFvkrsuwIkdLihO4jSsFdmCJ7jNmDZRF4GSZFpTtBWN/wgYtQd5izE9b5Gvswi3KOziJbN3WFycnefIZc9gGCRiVX0pjJ/wLVF5wkVCuRDjf14CEuRJlLc0JLsK/3AaHWXNN1SkdgB4LXFMtiQX3QhUnH5wzrYO+XNFJe0RJbO1GjLlmmiAL4DbRc3CSNO2cZROD0UexxIgZ05jGvbF8gUaumxbbApx4VQ5ZxbTYlFKMgAZ4Fwy9UwNjj3hFvsqOYw+as1qJGr0DvY8/aURggAMmONW9tmDae1WXURTNj9pgjS1xZauBh2rkB4MS9bWyjEN5rTB8CfZHDDoNhc6pjEu5U9AHnUQ3zv2IqNuXOPQ7kTqyNcNnLjXbEpd2s8RsHz7T57OXGBWZhErtbIb7yfZCYHOjKJNS3NhUXtO9bfZlOvSbpQxZuCxT441PFryETImER1aSiSlpJElhMTEVjUUiqDK5BiA5cfQvJwni35GJuOOTCw9lAh6SI68SscPxipzx7kos7no0Dh8SMWx8pHF5fyxjcfyOYuCtyBiseBQP79Gxo4tHHk3As1mBzD6jSUk+mVUVniRpKngvVi6PTCArLzyaJv7r54/v3Z5NJEQSidnb9x4/f+2TI38Ah8LDf1hXQYcAAAAASUVORK5CYII="

/***/ }),

/***/ 594:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-tab-wrap",
    class: _vm.barPosition === 'top' ? 'vux-tab-bar-top' : ''
  }, [_c('div', {
    staticClass: "vux-tab-container"
  }, [_c('div', {
    ref: "nav",
    staticClass: "vux-tab",
    class: [{
      'vux-tab-no-animate': !_vm.animate
    }, {
      scrollable: _vm.scrollable
    }]
  }, [_vm._t("default"), _vm._v(" "), (_vm.animate) ? _c('div', {
    staticClass: "vux-tab-ink-bar",
    class: _vm.barClass,
    style: (_vm.barStyle)
  }, [(_vm.customBarWidth) ? _c('span', {
    staticClass: "vux-tab-bar-inner",
    style: (_vm.innerBarStyle)
  }) : _vm._e()]) : _vm._e()], 2)])])
},staticRenderFns: []}

/***/ }),

/***/ 595:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-tab-item",
    class: [_vm.currentSelected ? _vm.activeClass : '', {
      'vux-tab-selected': _vm.currentSelected,
      'vux-tab-disabled': _vm.disabled
    }],
    style: (_vm.style),
    on: {
      "click": _vm.onItemClick
    }
  }, [_vm._t("default"), _vm._v(" "), (typeof _vm.badgeLabel !== 'undefined' && _vm.badgeLabel !== '') ? _c('span', {
    staticClass: "vux-tab-item-badge",
    style: ({
      background: _vm.badgeBackground,
      color: _vm.badgeColor
    })
  }, [_vm._v("\n  " + _vm._s(_vm.badgeLabel))]) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(620)

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(601),
  /* template */
  __webpack_require__(625),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(616)

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(602),
  /* template */
  __webpack_require__(621),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inline_desc__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inline_desc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__inline_desc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_router__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__props__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libs_clean_style__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_get_parent_prop__ = __webpack_require__(608);
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
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'cell',
  components: {
    InlineDesc: __WEBPACK_IMPORTED_MODULE_0__inline_desc___default.a
  },
  props: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__props__["a" /* default */])(),
  created() {
    /* istanbul ignore if */
    if (false) {
      console.warn('[VUX] 抱歉，当前组件[cell]要求更新依赖 vux-loader@latest');
    }
  },
  beforeMount() {
    this.hasTitleSlot = !!this.$slots.title;
    /* istanbul ignore if */
    if (this.$slots.value && "production" === 'development') {
      console.warn('[VUX] [cell] slot=value 已经废弃，请使用默认 slot 替代');
    }
  },
  computed: {
    labelStyles() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__libs_clean_style__["a" /* default */])({
        width: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__libs_get_parent_prop__["a" /* default */])(this, 'labelWidth'),
        textAlign: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__libs_get_parent_prop__["a" /* default */])(this, 'labelAlign'),
        marginRight: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__libs_get_parent_prop__["a" /* default */])(this, 'labelMarginRight')
      });
    },
    valueClass() {
      return {
        'vux-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
        'vux-cell-align-left': this.valueAlign === 'left',
        'vux-cell-arrow-transition': !!this.arrowDirection,
        'vux-cell-arrow-up': this.arrowDirection === 'up',
        'vux-cell-arrow-down': this.arrowDirection === 'down'
      };
    },
    labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    },
    style() {
      if (this.alignItems) {
        return {
          alignItems: this.alignItems
        };
      }
    }
  },
  methods: {
    onClick() {
      /* istanbul ignore next */
      !this.disabled && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__libs_router__["a" /* go */])(this.link, this.$router);
    }
  },
  data() {
    return {
      hasTitleSlot: true,
      hasMounted: false
    };
  }
});

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_clean_style__ = __webpack_require__(572);
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
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'group',
  methods: {
    cleanStyle: __WEBPACK_IMPORTED_MODULE_0__libs_clean_style__["a" /* default */]
  },
  props: {
    title: String,
    titleColor: String,
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String,
    gutter: [String, Number],
    footerTitle: String,
    footerTitleColor: String
  }
});

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_prevent_body_scroll__ = __webpack_require__(609);
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

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return {
    title: [String, Number],
    value: [String, Number, Array],
    isLink: Boolean,
    isLoading: Boolean,
    inlineDesc: [String, Number],
    primary: {
      type: String,
      default: 'title'
    },
    link: [String, Object],
    valueAlign: [String, Boolean, Number],
    borderIntent: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    arrowDirection: String, // down or up
    alignItems: String
  };
});

/***/ }),

/***/ 607:
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

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (self, name) {
  if (self.$parent && typeof self.$parent[name] !== 'undefined') {
    return self.$parent[name];
  }
  if (self.$parent && self.$parent.$parent && typeof self.$parent.$parent[name] !== 'undefined') {
    return self.$parent.$parent[name];
  }
});

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_dom__ = __webpack_require__(607);


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

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(512)();
// imports


// module
exports.push([module.i, ".weui-cell_access{-webkit-tap-highlight-color:rgba(0,0,0,0);color:inherit}.weui-cell_access:active{background-color:#ececec}.weui-cell_access .weui-cell__ft{padding-right:13px;position:relative}.weui-cell_access .weui-cell__ft:after{content:\" \";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:2px}.weui-cell_link{color:#586c94;font-size:14px}.weui-cell_link.weui-cell:first-child:before{display:block}.weui-cell_access.vux-cell-box{padding-right:13px;position:relative}.weui-cell_access.vux-cell-box:after{content:\" \";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:17px}.weui-cells{margin-top:1.17647059em;background-color:#fff;line-height:1.41176471;font-size:17px;overflow:hidden;position:relative}.weui-cells:before{top:0;border-top:1px solid #d9d9d9;transform-origin:0 0;transform:scaleY(.5)}.weui-cells:after,.weui-cells:before{content:\" \";position:absolute;left:0;right:0;height:1px;color:#d9d9d9}.weui-cells:after{bottom:0;border-bottom:1px solid #d9d9d9;transform-origin:0 100%;transform:scaleY(.5)}.weui-cells__title{margin-top:.77em;margin-bottom:.3em;padding-left:15px;padding-right:15px;color:#999;font-size:14px}.weui-cells__title+.weui-cells{margin-top:0}.weui-cells__tips{margin-top:.3em;color:#999;padding-left:15px;padding-right:15px;font-size:14px}.weui-cell{padding:10px 15px;position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.weui-cell:before{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;transform-origin:0 0;transform:scaleY(.5);left:15px}.weui-cell:first-child:before{display:none}.weui-cell_primary{-ms-flex-align:start;align-items:flex-start}.weui-cell__bd{-ms-flex:1;flex:1}.weui-cell__ft{text-align:right;color:#999}.vux-cell-justify{height:1.41176471em}.vux-cell-justify.vux-cell-justify:after{content:\".\";display:inline-block;width:100%;overflow:hidden;height:0}.vux-blank-half:before{content:\"\\2002\";speak:none}.vux-blank-full:before{content:\"\\2003\";speak:none}.vux-no-group-title{margin-top:.77em}.vux-footer-title.weui-cells__title{margin-top:.3em;margin-bottom:.77em;padding-top:0;font-size:12px}.vux-cell-placeholder,.vux-cell-value{color:#999}", "", {"version":3,"sources":["D:/zhitaoAPP/node_modules/_vux@2.9.1@vux/src/components/group/index.vue"],"names":[],"mappings":"AAgSA,kBACE,0CAA8C,AAC9C,aAAe,CAChB,AACD,yBACE,wBAA0B,CAC3B,AACD,iCACE,mBAAoB,AACpB,iBAAmB,CACpB,AACD,uCACE,YAAa,AACb,qBAAsB,AACtB,WAAY,AACZ,UAAW,AACX,yBAA0B,AAC1B,qBAAsB,AACtB,mBAAoB,AACpB,uCAAiD,AACjD,kBAAmB,AACnB,SAAU,AACV,kBAAmB,AACnB,QAAS,AACT,gBAAiB,AACjB,SAAW,CACZ,AACD,gBACE,cAAe,AACf,cAAgB,CACjB,AACD,6CACE,aAAe,CAChB,AACD,+BACE,mBAAoB,AACpB,iBAAmB,CACpB,AACD,qCACE,YAAa,AACb,qBAAsB,AACtB,WAAY,AACZ,UAAW,AACX,yBAA0B,AAC1B,qBAAsB,AACtB,mBAAoB,AACpB,uCAAiD,AACjD,kBAAmB,AACnB,SAAU,AACV,kBAAmB,AACnB,QAAS,AACT,gBAAiB,AACjB,UAAY,CACb,AACD,YACE,wBAAyB,AACzB,sBAA0B,AAC1B,uBAAwB,AACxB,eAAgB,AAChB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,mBAIE,MAAO,AAGP,6BAA8B,AAE9B,qBAAsB,AACtB,oBAAuB,CACxB,AACD,qCAXE,YAAa,AACb,kBAAmB,AACnB,OAAQ,AAER,QAAS,AACT,WAAY,AAEZ,aAAe,CAehB,AAXD,kBAIE,SAAU,AAGV,gCAAiC,AAEjC,wBAAyB,AACzB,oBAAuB,CACxB,AACD,mBACE,iBAAmB,AACnB,mBAAqB,AACrB,kBAAmB,AACnB,mBAAoB,AACpB,WAAe,AACf,cAAgB,CACjB,AACD,+BACE,YAAc,CACf,AACD,kBACE,gBAAiB,AACjB,WAAe,AACf,kBAAmB,AACnB,mBAAoB,AACpB,cAAgB,CACjB,AACD,WACE,kBAAmB,AACnB,kBAAmB,AACnB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,kBAAoB,CACzB,AACD,kBACE,YAAa,AACb,kBAAmB,AACnB,OAAQ,AACR,MAAO,AACP,QAAS,AACT,WAAY,AACZ,6BAA8B,AAC9B,cAAe,AACf,qBAAsB,AACtB,qBAAuB,AACvB,SAAW,CACZ,AACD,8BACE,YAAc,CACf,AACD,mBACE,qBAAsB,AAClB,sBAAwB,CAC7B,AACD,eACE,WAAY,AACR,MAAQ,CACb,AACD,eACE,iBAAkB,AAClB,UAAe,CAChB,AACD,kBACE,mBAAqB,CACtB,AACD,yCACE,YAAa,AACb,qBAAsB,AACtB,WAAY,AACZ,gBAAiB,AACjB,QAAU,CACX,AAID,uBACE,gBAAiB,AACjB,UAAY,CACb,AACD,uBACE,gBAAiB,AACjB,UAAY,CACb,AACD,oBACE,gBAAmB,CACpB,AACD,oCACE,gBAAkB,AAClB,oBAAsB,AACtB,cAAe,AACf,cAAgB,CACjB,AAKD,sCACE,UAAY,CACb","file":"index.vue","sourcesContent":["/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.weui-cell_access {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  color: inherit;\n}\n.weui-cell_access:active {\n  background-color: #ECECEC;\n}\n.weui-cell_access .weui-cell__ft {\n  padding-right: 13px;\n  position: relative;\n}\n.weui-cell_access .weui-cell__ft:after {\n  content: \" \";\n  display: inline-block;\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  margin-top: -4px;\n  right: 2px;\n}\n.weui-cell_link {\n  color: #586C94;\n  font-size: 14px;\n}\n.weui-cell_link.weui-cell:first-child:before {\n  display: block;\n}\n.weui-cell_access.vux-cell-box {\n  padding-right: 13px;\n  position: relative;\n}\n.weui-cell_access.vux-cell-box:after {\n  content: \" \";\n  display: inline-block;\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  margin-top: -4px;\n  right: 17px;\n}\n.weui-cells {\n  margin-top: 1.17647059em;\n  background-color: #FFFFFF;\n  line-height: 1.41176471;\n  font-size: 17px;\n  overflow: hidden;\n  position: relative;\n}\n.weui-cells:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.weui-cells:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n}\n.weui-cells__title {\n  margin-top: 0.77em;\n  margin-bottom: 0.3em;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #999999;\n  font-size: 14px;\n}\n.weui-cells__title + .weui-cells {\n  margin-top: 0;\n}\n.weui-cells__tips {\n  margin-top: .3em;\n  color: #999999;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 14px;\n}\n.weui-cell {\n  padding: 10px 15px;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.weui-cell:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n  left: 15px;\n}\n.weui-cell:first-child:before {\n  display: none;\n}\n.weui-cell_primary {\n  -ms-flex-align: start;\n      align-items: flex-start;\n}\n.weui-cell__bd {\n  -ms-flex: 1;\n      flex: 1;\n}\n.weui-cell__ft {\n  text-align: right;\n  color: #999999;\n}\n.vux-cell-justify {\n  height: 1.41176471em;\n}\n.vux-cell-justify.vux-cell-justify:after {\n  content: \".\";\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  height: 0;\n}\n/**\n* http://www.zhangxinxu.com/wordpress/2015/01/tips-blank-character-chinese-align/\n*/\n.vux-blank-half:before {\n  content: '\\2002';\n  speak: none;\n}\n.vux-blank-full:before {\n  content: '\\2003';\n  speak: none;\n}\n.vux-no-group-title {\n  margin-top: 0.77em;\n}\n.vux-footer-title.weui-cells__title {\n  margin-top: 0.3em;\n  margin-bottom: 0.77em;\n  padding-top: 0;\n  font-size: 12px;\n}\n/* global config for group items */\n.vux-cell-value {\n  color: #999;\n}\n.vux-cell-placeholder {\n  color: #999;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(512)();
// imports
exports.i(__webpack_require__(615), "");

// module
exports.push([module.i, ".vux-fade-enter-active,.vux-fade-leave-active{opacity:1;transition:opacity .2s linear}.vux-fade-enter,.vux-fade-leave-to{opacity:0}.vux-dialog-enter-active{animation:vux-dialog-in .5s}.vux-dialog-leave-active{animation:vux-dialog-out .3s}@keyframes vux-dialog-in{0%{transform:scale(1.185);opacity:0}to{transform:scale(1);opacity:1}}@keyframes vux-dialog-out{0%{transform:scale(1);opacity:1}to{transform:scale(.85);opacity:0}}.vux-mask-enter,.vux-mask-leave-active{opacity:0}.vux-mask-enter-active,.vux-mask-leave-active{transition:opacity .3s}.weui-mask{background:rgba(0,0,0,.6)}.weui-mask,.weui-mask_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}.weui-dialog{position:fixed;display:table;z-index:5000;width:80%;max-width:300px;top:0;right:0;bottom:0;left:0;margin:auto;background-color:#fff;text-align:center;border-radius:3px;overflow:hidden}.weui-dialog__hd{padding:1.3em 1.6em .5em}.weui-dialog__hd.with-no-content{padding:1.7em 1.6em}.weui-dialog__title{font-weight:400;font-size:18px}.weui-dialog__bd{padding:0 1.6em .8em;min-height:40px;font-size:15px;line-height:1.3;word-wrap:break-word;word-break:break-all;color:#999}.weui-dialog__bd:first-child{padding:2.7em 20px 1.7em;color:#353535}.weui-dialog__ft{position:relative;line-height:48px;font-size:18px;display:-ms-flexbox;display:flex}.weui-dialog__ft:after{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d5d5d6;color:#d5d5d6;transform-origin:0 0;transform:scaleY(.5)}.weui-dialog__btn{display:block;-ms-flex:1;flex:1;color:#3cc51f;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.weui-dialog__btn:active{background-color:#eee}.weui-dialog__btn:after{content:\" \";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #d5d5d6;color:#d5d5d6;transform-origin:0 0;transform:scaleX(.5)}.weui-dialog__btn:first-child:after{display:none}.weui-dialog__btn_default{color:#353535}.weui-dialog__btn_primary{color:#0bb20c}.weui-dialog__btn_warn{color:#e64340}.weui-skin_android .weui-dialog{text-align:left;box-shadow:0 6px 30px 0 rgba(0,0,0,.1)}.weui-skin_android .weui-dialog__title{font-size:21px}.weui-skin_android .weui-dialog__hd{text-align:left}.weui-skin_android .weui-dialog__bd{color:#999;padding:.25em 1.6em 2em;font-size:17px;text-align:left}.weui-skin_android .weui-dialog__bd:first-child{padding:1.6em 1.6em 2em;color:#353535}.weui-skin_android .weui-dialog__ft{display:block;text-align:right;line-height:42px;font-size:16px;padding:0 1.6em .7em}.weui-skin_android .weui-dialog__ft:after{display:none}.weui-skin_android .weui-dialog__btn{display:inline-block;vertical-align:top;padding:0 .8em}.weui-skin_android .weui-dialog__btn:after{display:none}.weui-skin_android .weui-dialog__btn:active,.weui-skin_android .weui-dialog__btn:visited{background-color:rgba(0,0,0,.06)}.weui-skin_android .weui-dialog__btn:last-child{margin-right:-.8em}.weui-skin_android .weui-dialog__btn_default{color:gray}@media screen and (min-width:1024px){.weui-dialog{width:35%}}.vux-x-dialog-absolute .weui-dialog{position:absolute}", "", {"version":3,"sources":["D:/zhitaoAPP/node_modules/_vux@2.9.1@vux/src/components/x-dialog/index.vue"],"names":[],"mappings":"AAEA,8CAEE,UAAW,AACX,6BAAgC,CACjC,AACD,mCAEE,SAAW,CACZ,AACD,yBACE,2BAA8B,CAC/B,AACD,yBACE,4BAA+B,CAChC,AACD,yBACA,GACI,uBAAwB,AACxB,SAAW,CACd,AACD,GACI,mBAAoB,AACpB,SAAW,CACd,CACA,AACD,0BACA,GACI,mBAAoB,AACpB,SAAW,CACd,AACD,GACI,qBAAuB,AACvB,SAAW,CACd,CACA,AACD,uCAEE,SAAW,CACZ,AACD,8CAEE,sBAA0B,CAC3B,AAiSD,WAOE,yBAA+B,CAChC,AACD,kCARE,eAAgB,AAChB,aAAc,AACd,MAAO,AACP,QAAS,AACT,OAAQ,AACR,QAAU,CAUX,AACD,aACE,eAAgB,AAChB,cAAe,AACf,aAAc,AACd,UAAW,AACX,gBAAiB,AACjB,MAAO,AACP,QAAS,AACT,SAAU,AACV,OAAQ,AACR,YAAa,AACb,sBAA0B,AAC1B,kBAAmB,AACnB,kBAAmB,AACnB,eAAiB,CAClB,AACD,iBACE,wBAA2B,CAC5B,AACD,iCACE,mBAAqB,CACtB,AACD,oBACE,gBAAiB,AACjB,cAAgB,CACjB,AACD,iBACE,qBAAuB,AACvB,gBAAiB,AACjB,eAAgB,AAChB,gBAAiB,AACjB,qBAAsB,AACtB,qBAAsB,AACtB,UAAe,CAChB,AACD,6BACE,yBAA0B,AAC1B,aAAe,CAChB,AACD,iBACE,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,oBAAqB,AACrB,YAAc,CACf,AACD,uBACE,YAAa,AACb,kBAAmB,AACnB,OAAQ,AACR,MAAO,AACP,QAAS,AACT,WAAY,AACZ,6BAA8B,AAC9B,cAAe,AACf,qBAAsB,AACtB,oBAAuB,CACxB,AACD,kBACE,cAAe,AACf,WAAY,AACR,OAAQ,AACZ,cAAe,AACf,qBAAsB,AACtB,0CAA8C,AAC9C,iBAAmB,CACpB,AACD,yBACE,qBAA0B,CAC3B,AACD,wBACE,YAAa,AACb,kBAAmB,AACnB,OAAQ,AACR,MAAO,AACP,UAAW,AACX,SAAU,AACV,8BAA+B,AAC/B,cAAe,AACf,qBAAsB,AACtB,oBAAuB,CACxB,AACD,oCACE,YAAc,CACf,AACD,0BACE,aAAe,CAChB,AACD,0BACE,aAAe,CAChB,AACD,uBACE,aAAe,CAChB,AACD,gCACE,gBAAiB,AACjB,sCAA4C,CAC7C,AACD,uCACE,cAAgB,CACjB,AACD,oCACE,eAAiB,CAClB,AACD,oCACE,WAAe,AACf,wBAA0B,AAC1B,eAAgB,AAChB,eAAiB,CAClB,AACD,gDACE,wBAAyB,AACzB,aAAe,CAChB,AACD,oCACE,cAAe,AACf,iBAAkB,AAClB,iBAAkB,AAClB,eAAgB,AAChB,oBAAuB,CACxB,AACD,0CACE,YAAc,CACf,AACD,qCACE,qBAAsB,AACtB,mBAAoB,AACpB,cAAgB,CACjB,AACD,2CACE,YAAc,CACf,AAID,yFACE,gCAAsC,CACvC,AACD,gDACE,kBAAqB,CACtB,AACD,6CACE,UAAe,CAChB,AACD,qCACA,aACI,SAAW,CACd,CACA,AACD,oCACE,iBAAmB,CACpB","file":"index.vue","sourcesContent":["\n@import '../../styles/vux-modal.css';\n.vux-fade-enter-active,\n.vux-fade-leave-active {\n  opacity: 1;\n  transition: opacity linear 0.2s;\n}\n.vux-fade-enter,\n.vux-fade-leave-to {\n  opacity: 0;\n}\n.vux-dialog-enter-active {\n  animation: vux-dialog-in 0.5s;\n}\n.vux-dialog-leave-active {\n  animation: vux-dialog-out 0.3s;\n}\n@keyframes vux-dialog-in {\n0% {\n    transform: scale(1.185);\n    opacity: 0;\n}\n100% {\n    transform: scale(1);\n    opacity: 1;\n}\n}\n@keyframes vux-dialog-out {\n0% {\n    transform: scale(1);\n    opacity: 1;\n}\n100% {\n    transform: scale(0.85);\n    opacity: 0;\n}\n}\n.vux-mask-enter,\n.vux-mask-leave-active {\n  opacity: 0;\n}\n.vux-mask-leave-active,\n.vux-mask-enter-active {\n  transition: opacity 300ms;\n}\n/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.weui-mask {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.weui-mask_transparent {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n}\n.weui-dialog {\n  position: fixed;\n  display: table;\n  z-index: 5000;\n  width: 80%;\n  max-width: 300px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  background-color: #FFFFFF;\n  text-align: center;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.weui-dialog__hd {\n  padding: 1.3em 1.6em 0.5em;\n}\n.weui-dialog__hd.with-no-content {\n  padding: 1.7em 1.6em;\n}\n.weui-dialog__title {\n  font-weight: 400;\n  font-size: 18px;\n}\n.weui-dialog__bd {\n  padding: 0 1.6em 0.8em;\n  min-height: 40px;\n  font-size: 15px;\n  line-height: 1.3;\n  word-wrap: break-word;\n  word-break: break-all;\n  color: #999999;\n}\n.weui-dialog__bd:first-child {\n  padding: 2.7em 20px 1.7em;\n  color: #353535;\n}\n.weui-dialog__ft {\n  position: relative;\n  line-height: 48px;\n  font-size: 18px;\n  display: -ms-flexbox;\n  display: flex;\n}\n.weui-dialog__ft:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D5D5D6;\n  color: #D5D5D6;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.weui-dialog__btn {\n  display: block;\n  -ms-flex: 1;\n      flex: 1;\n  color: #3CC51F;\n  text-decoration: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  position: relative;\n}\n.weui-dialog__btn:active {\n  background-color: #EEEEEE;\n}\n.weui-dialog__btn:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #D5D5D6;\n  color: #D5D5D6;\n  transform-origin: 0 0;\n  transform: scaleX(0.5);\n}\n.weui-dialog__btn:first-child:after {\n  display: none;\n}\n.weui-dialog__btn_default {\n  color: #353535;\n}\n.weui-dialog__btn_primary {\n  color: #0BB20C;\n}\n.weui-dialog__btn_warn {\n  color: #E64340;\n}\n.weui-skin_android .weui-dialog {\n  text-align: left;\n  box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.1);\n}\n.weui-skin_android .weui-dialog__title {\n  font-size: 21px;\n}\n.weui-skin_android .weui-dialog__hd {\n  text-align: left;\n}\n.weui-skin_android .weui-dialog__bd {\n  color: #999999;\n  padding: 0.25em 1.6em 2em;\n  font-size: 17px;\n  text-align: left;\n}\n.weui-skin_android .weui-dialog__bd:first-child {\n  padding: 1.6em 1.6em 2em;\n  color: #353535;\n}\n.weui-skin_android .weui-dialog__ft {\n  display: block;\n  text-align: right;\n  line-height: 42px;\n  font-size: 16px;\n  padding: 0 1.6em 0.7em;\n}\n.weui-skin_android .weui-dialog__ft:after {\n  display: none;\n}\n.weui-skin_android .weui-dialog__btn {\n  display: inline-block;\n  vertical-align: top;\n  padding: 0 .8em;\n}\n.weui-skin_android .weui-dialog__btn:after {\n  display: none;\n}\n.weui-skin_android .weui-dialog__btn:active {\n  background-color: rgba(0, 0, 0, 0.06);\n}\n.weui-skin_android .weui-dialog__btn:visited {\n  background-color: rgba(0, 0, 0, 0.06);\n}\n.weui-skin_android .weui-dialog__btn:last-child {\n  margin-right: -0.8em;\n}\n.weui-skin_android .weui-dialog__btn_default {\n  color: #808080;\n}\n@media screen and (min-width: 1024px) {\n.weui-dialog {\n    width: 35%;\n}\n}\n.vux-x-dialog-absolute .weui-dialog {\n  position: absolute;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(512)();
// imports


// module
exports.push([module.i, ".vux-tap-active{tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vux-tap-active:active{background-color:#ececec}.weui-cells{margin-top:1.17647059em;background-color:#fff;line-height:1.41176471;font-size:17px;overflow:hidden;position:relative}.weui-cells:before{top:0;border-top:1px solid #d9d9d9;transform-origin:0 0;transform:scaleY(.5)}.weui-cells:after,.weui-cells:before{content:\" \";position:absolute;left:0;right:0;height:1px;color:#d9d9d9}.weui-cells:after{bottom:0;border-bottom:1px solid #d9d9d9;transform-origin:0 100%;transform:scaleY(.5)}.weui-cells__title{margin-top:.77em;margin-bottom:.3em;padding-left:15px;padding-right:15px;color:#999;font-size:14px}.weui-cells__title+.weui-cells{margin-top:0}.weui-cells__tips{margin-top:.3em;color:#999;padding-left:15px;padding-right:15px;font-size:14px}.weui-cell{padding:10px 15px;position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.weui-cell:before{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;transform-origin:0 0;transform:scaleY(.5);left:15px}.weui-cell:first-child:before{display:none}.weui-cell_primary{-ms-flex-align:start;align-items:flex-start}.weui-cell__bd{-ms-flex:1;flex:1}.weui-cell__ft{text-align:right;color:#999}.vux-cell-justify{height:1.41176471em}.vux-cell-justify.vux-cell-justify:after{content:\".\";display:inline-block;width:100%;overflow:hidden;height:0}.weui-loading{width:20px;height:20px;display:inline-block;vertical-align:middle;animation:weuiLoading 1s steps(12) infinite;background:transparent url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=\") no-repeat;background-size:100%}.weui-loading.weui-loading_transparent{background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTAwIDEwMCc+PHBhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgxMDB2MTAwSDB6Jy8+PHJlY3QgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjU2KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0zMCknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDEwNS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjQzKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA3NS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjM4KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2NSA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjMyKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTguNjYgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4yOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMTUwIDU0LjAyIDY1KScvPjxyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjIpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKC0xNTAgNDUuOTggNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTEyMCA0MS4zNCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjE0KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtOTAgMzUgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtNjAgMjQuMDIgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4wMyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTMwIC01Ljk4IDY1KScvPjwvc3ZnPgo=\")}@keyframes weuiLoading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.vux-cell-primary{-ms-flex:1;flex:1}.vux-label{display:block;word-wrap:break-word;word-break:break-all}.weui-cell__ft .weui-loading{display:inline-block}.weui-cell__ft.vux-cell-align-left{text-align:left}.weui-cell.vux-cell-no-border-intent:before{left:0}.weui-cell_access .weui-cell__ft.vux-cell-arrow-down:after{transform:matrix(.71,.71,-.71,.71,0,0) rotate(90deg)}.weui-cell_access .weui-cell__ft.vux-cell-arrow-up:after{transform:matrix(.71,.71,-.71,.71,0,0) rotate(-90deg)}.vux-cell-arrow-transition:after{transition:transform .3s}.vux-cell-disabled .vux-label{color:#b2b2b2}.vux-cell-disabled.weui-cell_access .weui-cell__ft:after{border-color:#e2e2e2}", "", {"version":3,"sources":["D:/zhitaoAPP/node_modules/_vux@2.9.1@vux/src/components/cell/index.vue"],"names":[],"mappings":"AAgSA,gBACE,gCAAsC,AACtC,yBAA0B,AACvB,sBAAuB,AACtB,qBAAsB,AAClB,gBAAkB,CAC3B,AACD,uBACE,wBAA0B,CAC3B,AACD,YACE,wBAAyB,AACzB,sBAA0B,AAC1B,uBAAwB,AACxB,eAAgB,AAChB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,mBAIE,MAAO,AAGP,6BAA8B,AAE9B,qBAAsB,AACtB,oBAAuB,CACxB,AACD,qCAXE,YAAa,AACb,kBAAmB,AACnB,OAAQ,AAER,QAAS,AACT,WAAY,AAEZ,aAAe,CAehB,AAXD,kBAIE,SAAU,AAGV,gCAAiC,AAEjC,wBAAyB,AACzB,oBAAuB,CACxB,AACD,mBACE,iBAAmB,AACnB,mBAAqB,AACrB,kBAAmB,AACnB,mBAAoB,AACpB,WAAe,AACf,cAAgB,CACjB,AACD,+BACE,YAAc,CACf,AACD,kBACE,gBAAiB,AACjB,WAAe,AACf,kBAAmB,AACnB,mBAAoB,AACpB,cAAgB,CACjB,AACD,WACE,kBAAmB,AACnB,kBAAmB,AACnB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,kBAAoB,CACzB,AACD,kBACE,YAAa,AACb,kBAAmB,AACnB,OAAQ,AACR,MAAO,AACP,QAAS,AACT,WAAY,AACZ,6BAA8B,AAC9B,cAAe,AACf,qBAAsB,AACtB,qBAAuB,AACvB,SAAW,CACZ,AACD,8BACE,YAAc,CACf,AACD,mBACE,qBAAsB,AAClB,sBAAwB,CAC7B,AACD,eACE,WAAY,AACR,MAAQ,CACb,AACD,eACE,iBAAkB,AAClB,UAAe,CAChB,AACD,kBACE,mBAAqB,CACtB,AACD,yCACE,YAAa,AACb,qBAAsB,AACtB,WAAY,AACZ,gBAAiB,AACjB,QAAU,CACX,AACD,cACE,WAAY,AACZ,YAAa,AACb,qBAAsB,AACtB,sBAAuB,AACvB,4CAAkD,AAClD,m5DAAo5D,AACp5D,oBAAsB,CACvB,AACD,uCACE,8oEAAgpE,CACjpE,AACD,uBACA,GACI,sBAAmC,CACtC,AACD,GACI,uBAAqC,CACxC,CACA,AACD,kBACE,WAAY,AACR,MAAQ,CACb,AACD,WACE,cAAe,AACf,qBAAsB,AACtB,oBAAsB,CACvB,AACD,6BACE,oBAAsB,CACvB,AACD,mCACE,eAAiB,CAClB,AACD,4CACE,MAAQ,CACT,AACD,2DACE,oDAA+D,CAChE,AACD,yDACE,qDAAgE,CACjE,AACD,iCACE,wBAA4B,CAC7B,AACD,8BACE,aAAe,CAChB,AACD,yDACE,oBAAsB,CACvB","file":"index.vue","sourcesContent":["/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.vux-tap-active {\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vux-tap-active:active {\n  background-color: #ECECEC;\n}\n.weui-cells {\n  margin-top: 1.17647059em;\n  background-color: #FFFFFF;\n  line-height: 1.41176471;\n  font-size: 17px;\n  overflow: hidden;\n  position: relative;\n}\n.weui-cells:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.weui-cells:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n}\n.weui-cells__title {\n  margin-top: 0.77em;\n  margin-bottom: 0.3em;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #999999;\n  font-size: 14px;\n}\n.weui-cells__title + .weui-cells {\n  margin-top: 0;\n}\n.weui-cells__tips {\n  margin-top: .3em;\n  color: #999999;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 14px;\n}\n.weui-cell {\n  padding: 10px 15px;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.weui-cell:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n  left: 15px;\n}\n.weui-cell:first-child:before {\n  display: none;\n}\n.weui-cell_primary {\n  -ms-flex-align: start;\n      align-items: flex-start;\n}\n.weui-cell__bd {\n  -ms-flex: 1;\n      flex: 1;\n}\n.weui-cell__ft {\n  text-align: right;\n  color: #999999;\n}\n.vux-cell-justify {\n  height: 1.41176471em;\n}\n.vux-cell-justify.vux-cell-justify:after {\n  content: \".\";\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  height: 0;\n}\n.weui-loading {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  vertical-align: middle;\n  animation: weuiLoading 1s steps(12, end) infinite;\n  background: transparent url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=\") no-repeat;\n  background-size: 100%;\n}\n.weui-loading.weui-loading_transparent {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTAwIDEwMCc+PHBhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgxMDB2MTAwSDB6Jy8+PHJlY3QgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjU2KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0zMCknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDEwNS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjQzKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA3NS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjM4KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2NSA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjMyKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTguNjYgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4yOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMTUwIDU0LjAyIDY1KScvPjxyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjIpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKC0xNTAgNDUuOTggNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTEyMCA0MS4zNCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjE0KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtOTAgMzUgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtNjAgMjQuMDIgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4wMyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTMwIC01Ljk4IDY1KScvPjwvc3ZnPgo=\");\n}\n@keyframes weuiLoading {\n0% {\n    transform: rotate3d(0, 0, 1, 0deg);\n}\n100% {\n    transform: rotate3d(0, 0, 1, 360deg);\n}\n}\n.vux-cell-primary {\n  -ms-flex: 1;\n      flex: 1;\n}\n.vux-label {\n  display: block;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.weui-cell__ft .weui-loading {\n  display: inline-block;\n}\n.weui-cell__ft.vux-cell-align-left {\n  text-align: left;\n}\n.weui-cell.vux-cell-no-border-intent:before {\n  left: 0;\n}\n.weui-cell_access .weui-cell__ft.vux-cell-arrow-down:after {\n  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(90deg);\n}\n.weui-cell_access .weui-cell__ft.vux-cell-arrow-up:after {\n  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(-90deg);\n}\n.vux-cell-arrow-transition:after {\n  transition: transform 300ms;\n}\n.vux-cell-disabled .vux-label {\n  color: #b2b2b2;\n}\n.vux-cell-disabled.weui-cell_access .weui-cell__ft:after {\n  border-color: #e2e2e2;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(512)();
// imports


// module
exports.push([module.i, ".vux-modal-open{overflow:hidden;position:fixed;width:100%}.vux-modal-open-for-container{overflow:hidden!important}", "", {"version":3,"sources":["D:/zhitaoAPP/node_modules/_vux@2.9.1@vux/src/styles/vux-modal.css"],"names":[],"mappings":"AAAA,gBACE,gBAAiB,AACjB,eAAgB,AAChB,UAAY,CACb,AACD,8BACE,yBAA2B,CAC5B","file":"vux-modal.css","sourcesContent":[".vux-modal-open {\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n}\n.vux-modal-open-for-container {\n  overflow: hidden!important;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(610);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(513)("c2c5ecb8", content, true);

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(612);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(513)("7098587e", content, true);

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(614);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(513)("0a6c8f46", content, true);

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.title) ? _c('div', {
    staticClass: "weui-cells__title",
    style: (_vm.cleanStyle({
      color: _vm.titleColor
    })),
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  }) : _vm._e(), _vm._v(" "), _vm._t("title"), _vm._v(" "), _c('div', {
    staticClass: "weui-cells",
    class: {
      'vux-no-group-title': !_vm.title
    },
    style: (_vm.cleanStyle({
      marginTop: typeof _vm.gutter === 'number' ? (_vm.gutter + 'px') : _vm.gutter
    }))
  }, [_vm._t("after-title"), _vm._v(" "), _vm._t("default")], 2), _vm._v(" "), (_vm.footerTitle) ? _c('div', {
    staticClass: "weui-cells__title vux-group-footer-title",
    style: (_vm.cleanStyle({
      color: _vm.footerTitleColor
    })),
    domProps: {
      "innerHTML": _vm._s(_vm.footerTitle)
    }
  }) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),

/***/ 623:
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

/***/ 625:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell",
    class: {
      'vux-tap-active': _vm.isLink || !!_vm.link,
        'weui-cell_access': _vm.isLink || !!_vm.link,
        'vux-cell-no-border-intent': !_vm.borderIntent,
        'vux-cell-disabled': _vm.disabled
    },
    style: (_vm.style),
    on: {
      "click": _vm.onClick
    }
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_vm._t("icon")], 2), _vm._v(" "), _c('div', {
    staticClass: "vux-cell-bd",
    class: {
      'vux-cell-primary': _vm.primary === 'title' && _vm.valueAlign !== 'left'
    }
  }, [_c('p', [(_vm.title || _vm.hasTitleSlot) ? _c('label', {
    staticClass: "vux-label",
    class: _vm.labelClass,
    style: (_vm.labelStyles)
  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2) : _vm._e(), _vm._v(" "), _vm._t("after-title")], 2), _vm._v(" "), _c('inline-desc', [_vm._t("inline-desc", [_vm._v(_vm._s(_vm.inlineDesc))])], 2)], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__ft",
    class: _vm.valueClass
  }, [_vm._t("value"), _vm._v(" "), _vm._t("default", [_vm._v(_vm._s(_vm.value))]), _vm._v(" "), (_vm.isLoading) ? _c('i', {
    staticClass: "weui-loading"
  }) : _vm._e()], 2), _vm._v(" "), _vm._t("child")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(618)

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(604),
  /* template */
  __webpack_require__(623),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const camel = function (key) {
  return key.replace(/(-[a-z])/g, function ($1) {
    return $1.toUpperCase().replace('-', '');
  });
};

const camelAttrs = function (attrs) {
  for (let i in attrs) {
    const key = camel(i);
    attrs[key] = attrs[i];
    if (key !== i) {
      delete attrs[i];
    }
  }
  return attrs;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = camelAttrs;


/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Thanks to: https://github.com/calebroseland/vue-dom-portal

const objectAssign = __webpack_require__(196);
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

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/squera.d2dbcd6.png";

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    props: {
        title: String
    }
});

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(632);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



const defaultShapeMap = {
  line: 'line',
  point: 'circle',
  area: 'area'
};

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    colors: [String, Array],
    seriesField: String,
    adjust: [String, Object]
  },
  created() {
    this.$parent.set(this.chartName, _extends({
      shape: defaultShapeMap[this.chartName] || ''
    }, this.$props, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* camelAttrs */])(this.$attrs)));
  },
  render() {}
});

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(512)();
// imports


// module
exports.push([module.i, ".weui-cell[data-v-776de44b]{padding:1.5rem 1rem;position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.weui-cell_access .weui-cell__ft[data-v-776de44b]{position:relative;text-align:right;color:#6d6c68;font-size:.6rem;padding-right:1rem}.weui-cell_access .weui-cell__ft[data-v-776de44b]:after{content:\" \";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:2px}.vux-cell-primary[data-v-776de44b]{-ms-flex:1;flex:1}.vux-label[data-v-776de44b]{color:#333;font-size:.8rem;font-weight:600}", "", {"version":3,"sources":["D:/zhitaoAPP/src/components/freedom.vue"],"names":[],"mappings":"AACA,4BACE,oBAAqB,AACrB,kBAAmB,AACnB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACvB,kBAAoB,CACrB,AACD,kDACE,kBAAmB,AACnB,iBAAkB,AAClB,cAAe,AACf,gBAAiB,AACjB,kBAAoB,CACrB,AACD,wDACE,YAAa,AACb,qBAAsB,AACtB,WAAY,AACZ,UAAW,AACX,yBAA0B,AAC1B,qBAAsB,AACtB,mBAAoB,AACpB,uCAAiD,AACjD,kBAAmB,AACnB,SAAU,AACV,kBAAmB,AACnB,QAAS,AACT,gBAAiB,AACjB,SAAW,CACZ,AACD,mCACE,WAAY,AACR,MAAQ,CACb,AACD,4BACE,WAAY,AACZ,gBAAiB,AACjB,eAAiB,CAClB","file":"freedom.vue","sourcesContent":["\n.weui-cell[data-v-776de44b] {\n  padding: 1.5rem 1rem;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.weui-cell_access .weui-cell__ft[data-v-776de44b] {\n  position: relative;\n  text-align: right;\n  color: #6D6C68;\n  font-size: .6rem;\n  padding-right: 1rem;\n}\n.weui-cell_access .weui-cell__ft[data-v-776de44b]:after {\n  content: \" \";\n  display: inline-block;\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  margin-top: -4px;\n  right: 2px;\n}\n.vux-cell-primary[data-v-776de44b] {\n  -ms-flex: 1;\n      flex: 1;\n}\n.vux-label[data-v-776de44b] {\n  color: #333;\n  font-size: .8rem;\n  font-weight: 600;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(656);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(513)("67ceb62a", content, true);

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAAkFBMVEUAAADutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVaxZvwZAAAAL3RSTlMA+EQF7GvgSZDGn1WX8dbSfBKwmomEWg/LdSwmC+ggGTAIcdm5lGQ1XzqnPrxRwEnocD8AAARWSURBVFjDnJTZeqJAEEarodkcAUVxX1B0JDHxvP/bTUbzGaABNeeKG+qrrn+RbqaW4x+idYjSbnzwHWsqv8W2/BiD2LdseZ2FvwZU0He8xXYlstouPKcfKGDtL+Q1vACI0vNOauzOaQQEnjzPnxi0n0kLma8h/iPPsfwA11lJByvHhY+lPGaXKrRjP9TJ0ah0Jw/YzOD4lBumR5htHlwtxH2TJ3lzCTsvOIBkKE8zTGAgrYxgLi8xh5Hdct0eqpAXmSh6dstuypOX8RSjxrsZ056d13S/T5jIr5jAp+G3kIH8kgHhpibDjKTNXfP3mRuGbpCkVkvyEmZVOca4w+a0u5TQvVOj/1zGlb8U5yZXxdzQea65kTfd5Iwq98+FoxicAgAuA2uzEtltz84BgNgSgyOXUlLRZup9gI9iWRFskgANRptq7um1IxypcwAiq0GZGXAxmskhsu/LuXa9QmeAL42MgTyrJ9S9rxeYy81AtRbV0gW1M9YLvk+OXhnOVOtMWtlqCOp9r7mZqN/0quFOpHvewZCuf321JpNXWUL9Qhn6vwIWeVe+Kz9Zxb1HAKmSY12XHEsrJzhWumMv30RGc4+vR4vpqLms7JeC0oglqGrMPWKRIWraWT7g33cr105SX2+lGIplSG7O68kXeyCpqpHLJC8FLsCSPX3ppLjNc4B+3eqWLgvSZy8jHOnGW8P8E1Tt9HtwFUE5GCM54HX5dZAOnJgrej9PU6uiOpCVtThIxEJasUPqnCtW5iI/LIhkzbZjXEyd008OFbApP4W1hFR9UrjvdjkVf7+Y9OBSFF9fxaZiDJJKhxIKSAVgY6oBqRgoai8DAcMW/4qx2t4EYTDYMoYib0NFBYNmIrgxl/v//25jzkB7JWMYt/tE0lifts/L3TGrrGBKp1TO9VC0wz7YgOFtPBgLOxZCO6z2FEvlttfJ7Av+BggXl++SYleeQkmUGA1e2jRnUE0qiaKm8RzIJer2ygh8aiWN1SID8ObAbv/PusAH5t+fNJCUIlNbQLVJmghXzLk4KIaPlBuUB0RCwwH9fUdtUDGkNhYd4H3gdtw+ubl7QDBmuwki4+ixgWrgdjx6LIRcA8h+v10Iyzy2a8De6mpEMHhsm0mFC8i9On/q7npyEIQp/CvledZVqATyznmzQHZzcdYyCqY8YsOL21wtp3Un1kmBNpWIkBnpotiH6NHTT2h3I7rYklkWfABq7Xe7ZQRgkwkTmVWoNmGVA0C4tK5ru6qW1FOYajcvWZqqJnHQIIiO9aw+hmggZ5lglHBVmWJuPN4RCpxkL3plCosoxvaxdos8CGwnOi+JMJCIIok3AiTxbhegGrxb5LF3X/E+3lqwJBa9xsdqlPFxd1tmvGl0X0uLDbfpMMNtSobbzXbgH5mVbKWWr713VpKVOsToLcxGb0FG7wCcfBuAdMuLDf0Q7z5t6NKVAGz/9B8mOSO20sU5zCUg8/C8SK0fkvwDvG2mfEA78cwAAAAASUVORK5CYII="

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAAjVBMVEUAAADutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVZSBvmiAAAALnRSTlMABvrsEZQL8JlURNXJ9d6Oh0hrJiAwaU4rw7A6F9jQvaagcjXo4396Wrh2PWKqTnObSwAABLFJREFUWMPFWNmWojAQhYRN9k1FQNldevT+/+cNw9gGCOlu29Mz90UPIUWlqnJrkT6GYm68i9XqINQ9XLyNqUjfhWx6FjhYnil/Q1jidQDITg2DJNckScuTIFR3BEDnrZ8UtrUB7P1fMqfyL38PwN4+IWx1AKhYhbVHgcPqi8KiAnA32kevaBsXKKKvOMAnoKH86WshBfE/fS22AfVL0aCogB1/YjUdXSZ9EVkH/UMLHoH0iUBVUuAoXjaAN+kpvAGGLLBuBXKWnsSZoJIFujmB9DQCB8bS8xMIk/aMPILTgk+Bs/QtnAHOv7HOfeMJf+jxzA02UunbuMGeusOHq3xfnObCn3AEwS/pBWQgY/7ZQeXDMAvVwnXQw3ELI8w+4hgVu7FXqTKTdU4xgNC2owQDLmchgyiUeVe2EE5XrzrglKEZ3TXSIjMsdUAPRfJCWPJDOXf62RIwFmyZGcBNxH/uQz17ptwRdiQk6qNQPVsa0IBOrQxIQhDRmkbR3L3iTVd0REKyJrpoyYMxnJpilrMs4Lq85QochPkN9I8HTOxnC64DtMdGnhl7fWoB3ZVEsGAOSvpTI5ywj1X0sI16ZWbrdWOuatUG0J0UlwjF+fAGocEk/+tAr4FyvumYwC7SsrKB9NQsi/sFq98HMvarCXi6c7e7eT2q5e1WqsdtdC4H8ToB4IaLoedA6ffb42e0N0AJYynHdX4Qa1rebAqgXSLuXb+3nt5+0F5hC/urMiFwfVLkRCrgL/FALRnYjB858IcFIA2zd5FbzKm6oQvXbdOf6jL1hA5Yq/63dgdLHYpbVZXAlqOQA89pAS69Y5PJJdpXAG6mpiUrP907GLBaMHzHfSPpXdsiHz/qo76pBiGHUjXKwtIBeIv3DWQW6Dna/nTaRJw7XJhNdXDwFxTdO+ndd8V3Z8+Pq8GZ0wdI/ljNoySJlPL9qAaCu3nvWhHM+B6Yi6uhz0zikIfjHHnw+uERGFdOnD77hA/sNvHYvhUL0/5vhAd9NUi5w85c0b+UArBS/xpk6yhZG8ytOXoqGwcInLkrWKAw7DEBY8NVr/iY8FxwgXJBwIkjQFf59ZuvGmqHx8mjjALw1ho7/TyM2SVjcGiwA2gVmrEspYhnWrPwLcBdshrqUnoxvffNzBjKOnFxSiKZyZ9TACMoLpPlZuilu5Yps63rFuVbHbMg5QiK0efosT/iWHbF7NlhI+zm9MnInSFvR+wmgzIaUTrUisbKxJojd5Z6pv0CqVZ/jWQgYys2mjFz53zqMXuhHBqDoIdbVN5tHGlxME66KZcYubTNdD9dKP7iKsg0+TSI6f00nrBKjbJgdcVikVHgxBcVfMnD4wydl1ei4EoeriBbxolLFvkFB5kryLhyUYAQqOLxdSK48OWisJjl/bIHym0+vN0cKd9ZbrCX+VJbjFoHoFuHDj3KZLnU5hsBMbbGwArtJYxFjQBrU7JX25QfaqJeb/FK2DLXgL690oD+THv8evNuEhx/cLTw+uDjR8cyrw+Nfn6k9frA7fVx4D8eVrJRqpoJbaayUeo/HvSyxE3/jqE3wxhaVuIk2Kg7BwA1mv87JGcj/NoorNYBnNYqjPqzEf5v1T+etU1ncsIAAAAASUVORK5CYII="

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAAk1BMVEUAAADutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVZIqHgWAAAAMHRSTlMABY/q1idqUfqylffBYsXx0EmomTzJvEUZEFXch1sJ4J8g5u1+FHY0LC9wDbZgo4tKtrwDAAADqElEQVRYw6yW6XaiQBCFiyXI4ghENgVEURPX+L3/001ONA7SmqDj95PTp/r2rap7kJ8ZpZa+M2sfe54HO91KR/IoWqoHKAR6qsn9rA414A1cK1xlW5Fttgotd+ABtb6W+whjwCwiTZEcFSYQh9KdcQDz2xLW+hyCsXTjJYHKmsgPTKwKkpcuDShsDEv79ZhlYBe/HpvF4HaahpEL8ewX13yqSDoSVfg/OrgAZymdWTqwkJsM4U3u4g2G2g13p9il3ElpM9VuaPNCuZvQY3hdtx3KA4T2Nf96UMpDlNBT5s1nIQ/yhj9rtSHGkYd5Jb5sR0G1lIfZ5hQXGWETyX8QYTfzp48rbSxn0J9u3qVJVh4+v7pqlLj0G5uK0d7694Ajufute7JJOHFQ8sBgfO6DidUONA+CDycAOCkPa4AqmToebJS3YGpncZWmzvT+a372Q+8YCxawW3y9PcvJlQ2tzvJiRZwkBGe/XqGWMXjlPylz1Wrik03MlSR3mvfr8OpTzRo5Zqh5P+f91BVd2uwvMrkP8NLc+kAU9KPHmsFaFPowX2TfN9vgnovtgEgU1hiaiKSYSttny5kD2MEhyj7REoiW2Se91xyoy8lMXSKTVEQOFO3I8cHIOWIDng++zRnftPGU/Cm+TAsIlT504UPdtEBkhN3u6xTP2v9pUMbkFx/2fwx0UUd/JCmxKOV8JfcTxSh1HAakssEVVd2oHWgDuSRHLeeykSHWs8pZDCUhfFa5kERMVs/yboUpNdkVdWWvSTjA7F1So5bLMMRnK8+ZO9niC1z7UeiAJQogIArZ32KsbbVhGIrl4owSmyXMbUySXVOalFGG/v/rxjaG4nReocekevOLIPaJjqTiFX0xwwn1/LiDKShXBLD4WCpa7d9m44vrAw/+x/IpfPFS/wyK4Y5fPoXCUUzHQeEYS+g4xhZ3Yjr+ZJQACR0lwGEnp6NAHSifQrpUo6W4S+go7kmGRzkdV4+DikOn4Li2xXRH5OmPNmYx6DJYWh4BHS1P0JCVvqJ8wPiKcgobsqRDn57RvaRhuhrN2dD16MJmdgvoIf/FAGB2qoCngJkNWe33CiA2laf3OgtZbQYBEUrcx40p0yJEtfIQFT/iMYCO8gBKdJJ43P21WjfuGjbH8L6sFtwVbBp2heJDUMusURrJKy154Ra3Dly5rGSVWm6Dd1aySl216CUmuwegzXcN/Zyk7dtXDW00gL2dblmSEwc32kYNGtC5auzoLgz5JzWspJ+fwR1lAAAAAElFTkSuQmCC"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAAilBMVEUAAADutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVakJ3SVAAAALXRSTlMABkf46t9sFLsQ15qO7guV5Mch8nqGZ02fXVMx0j8tzMKRNRlWsXM6f6OKJ6mWqc4RAAAEFUlEQVRYw5yV2XbiMBBE25ZtvC9sDmC8sIWEuf//ezNJBnxAMgHuq3WKVleVkPsE9rzzQ2eCStzK7+Z2IK9i2XGFRhXbljxPHeeAKjKvrLepSLqtSy8rFJDHtTxHWQDhbG1pI69nIVCU8jjLCpJuJQOsugSqpTzGyQd3nsod0rkL/ukRA2YKx7N+PeY5qNmvx8YNZA+lIcigGf+ytQT3XR7k3SXZyR2OsB/Jw4z2cJRBIjjIUxwgsga2+4ZayJMsFG/WwGwTW57GnhCJgSmqlBewFVODp7CQl1jAUstbwlReZEoyvrGhYS8vs6e5tmOGO5KXGbnMrt4IxfrO6UXU5grl+tkuFRNr1Ep6WjIZfo4m9Dix8R3JaOXCDmeo9ekHNxh/OXDYXXwI8YZC5QLk/rF836yXRz8HaDai4RFal+Hcgd59APh2/9UqW4BOb6h7Ga8YGs4H8uVtahPgj2G8Qr7ZkJj9+gSKn0/BnzerjwWGBqUJm/+udGKiBFrrnEu8PjgNoP0xdT8eWQ4r4zMPfVMiroJagApuA4VjfZlHKCYayOVMzFWl04lhfSH298lPc9BhY5DrFzHWVh2LSIUtBgpoZVBOcni7zSiVSIAy+boFlnfkDkBw460iEJtiwFZH7shZCjbahWw5mNsf95cJTHLiw1x7Bw4SmSvRnpM6/hwZ5aYQacWIxKcUHcuBWv5xYidGORtabUG+hNSiMzoHIcl/7q7VqkbLa00oDlvRSeOsC0Sshvost597XxwWl9LkWhocmRDIEEFFdS5Zz4d8cdLlAiYCMsTYubjn0VOcW9PIDXBHLvhbjNUuJQwDQftFQyO0thBAp0hbBavu+7+eSpBm2LR2ZDLsbyY0d7nbjwwovF9t1a412ntNecoytYBxWWa7IbnVAgu+7KkVjCaDUR3GDPC5Fd1D4boNaUcFILY8FKH/hCWLRrKelLmFmBJAEO1B2IfsYwYD2Zy5HEDJ7COtK2BbwIBtCiM9YrQCbAtqAxNZbWXM4Fg5WlAxr8/Jp0iK82mx7TTdVl6ffct9/rRSCYAiti4vzS+03Il6LvgAfNPD83nQmHpMYuQrZd/da94fTQndAt3iJGLsp+0Vjoq0iYBIqrqJ81KtIwCYdeczbd9Ju6jIdN2W0AgCnCDsU1lBDkiezalu05cHmBBd40jyDAgyhOW5+MtWRGEYJq9yQQNOgswqF5eXi8bz6DckF3vFbE7tIbCY7ZXaXqXGnsNSm41APPrb2AhomzLWsvfaFAcmyo3Fu96AOrXH2rz7/zTvbw6iBQfBh4NY5srQyG2kxYFbNS5wqyhwcxAHOgkrOUpND701SylKdRv0MmoZAgh2qfJ/Ymhvmm99le4CAKGsbxGSM2J/L48RPoowEXLv//HIvwBuf5feSbZTDQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAAjVBMVEUAAADutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVZSBvmiAAAALnRSTlMABRH1+lWH7HSORfHWx5RpmQzfXEk6MyIH0nwqzOUuF+muoWzDvoFNuj6ypxzaKsfXLAAABBdJREFUWMPFmOeW2jAQhW1LLrhjYFnAlKWXzff+jxeyh5JoZMpykswvjo1H0tWdO8W5bV5ctLbpLEGH1WDbKmLP+a65cWuAsEErdr/hbNIaAzrLi+5o2nac9nTULfJMA+PW5ElnmwxIg927+eJ9F6RAtnnCmT+AsDVp3ngIA/9BZ6MVVEX71l/aRQWr0QPO3gNNuLiLtrsI0YGBhbR+DflDbPByqPt3UEuoeo9C3KtIbiI4hI8niOrtYdj8uoToOUJFULoN6M7RnWfZ3tHM7f5KVNd52rqK0o6bFt4e8qdt+PnQcb5lHfAF3xKxxhP3kRj8c2v2jt3eosNyHI7rfbBpCrwD9Z/XEVB5VmYNf3C1pHyzh3BF8IdGaHo2MTgoQGfz9XCYb2cAK98aH+jfF1qS2zkKH/70DMguV8DBduSc5e+3OvPkCfagDn9uehpUUI0soMyut+umLKS0jCGb2shuZVRB6l42V7liuRDmVtwLIJYRWl22l1k2l3J9KHBHS51bkJ2IRShUdQ6tRtrGMJYqHvJ2uhXxZReD1eK8kgktyq9Th0xM4DQ/jEdi84LQE0L3a+upCOp7cjCyYZESf20yMF9kBprSPlCCqcHXEgO6JuVgfS8XQ2E+2zE44oQ2o2YNn84dS1mJu1V4TkwmzioeWXNeW34XO5G4czcROFu515M6EDklhYTugaSh8SUdS2dLVwbRMrhdCkyjuSaQ5N86KYbe+GMADqMbwClAXv+E1JkxFYJRZQnQWF3UQF2DeblTZk5C2wAu6RzpU171SZ6JenJUjpVZgrRRDhh0Tz5PEU3DcQcMTtwzhQVMd7PzCd51Q/nzeQnoCCXcGYdVfJx+jQnsefcixj5KHHbG1OrOveFucxYeJa7CIErC1d36vjtBlC3dF9wJGpcUT2PXvWAngiwit7sLG3Y3aXSXE5kC9eNMqlGTwLchOH+uhEAZ8hmc1141Rtke9ZVmvYRKyKch7u4Y5r3PTQ2LZmFXUb8/DGFjiLtMPf0EAG4ocouTRSL1yMT4OVdA2txg7FLQwGojEqM1bXux3zPg99qee01MdKZdv29P2055JzW4wzpMkmT80fv10RJUxw5BKUoeuyBdsPJrYHkNclnyyIJMlrTLqFgU6xCA5AqqKMhkuSjtB/tLSiIbiq2JctFNKRxpZrC9I0AWxawstWUQhDvvaNMW7MRbUWqLRkCKOepoWjC7qRFw3jTNebrDybaSALJNkU2U7MqCo60F20QTJVq8x022eEbkR680oH+hPTab9/g73mLNsGG0EH/Dm6L8B4OPl8cyrw+NPmD4b0Zarw/cXh8H/qNhpRyl5r1GzPLrKPXfDHqlKpUhoJenMbTr9SfdIl8qICzf/s+QXI7wo3KbzhSoWboto3sj/J/Sqo9KaX3JIQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAAhFBMVEUAAADutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVbutVYVA5STAAAAK3RSTlMABRH61pV/7+rfzMZq5kr0j0UtVZuHOx/SvieudEJvuAqyWw0XonlSZjUyy0MFSgAAA1FJREFUWMOtmOt2qjAQRgcCBQRBEAXUivfTdr//+x1PrJ5Qb1Wz/3RZ47cmmUsmI7dZvyeD1utnqCCq20Hy7sqzOPmg5ox6kDtPiBWDPqBiP0mLzXpv56ZIEz9WQH9QPCiWxoA3GjtnJo9HHhCnD4j9qSEYFNcND6Ae/lJs0kCULG4tWSQRNJPfOGCkCBPn7rIkRI3uLqt64P8qGlwfetXtNcOAaCy/ZBwR3DzBN1g+EKjuFN7kKiXM5CFmUDpXTneLWsmDrBRb54ptWSoPk2eUcoEdKpUnyBW7C5kAK3mKFfw5i7eAnTzJjqD64YYeS3maKb2uO0ZE7vNy64hRp0YoxvICY9SX8bHBl5fwaYxMJXRfk3NDhic/eCTyIgmeczIucl6Vc6KTeTFzeZmEWDSfBIvX5RYhn99eGYgFBvh61yGFDbmC8J8HcjyxgkeujRzZkRvpQ6tJ7ciNqUVc1MKOnJPhSk5sXoyxAsjaQi9YQk83BqA+9n/TjKg63FEhAJF5kcXkMjOz/4MjavIvEwHv4DVo9DlDKuIoTkzNOjCT0sjXCoh28/m8d7DKDf5bx/JwD/O+l+tDf79sFgNDIzFKaQ1PzI7flkDxQ27aldP/d8Go4imteBSGqzmU0XcvqCe35byjXGMEsid9NkbdOzUJjsjDchtCyVgfP+plxMu22eot399s1fHFmkzAzLs+37T35MK3PTWYSQBazmA+bdqlB/jfcrG24syzJ8yOAozNGsSAeziavm4cgKYrpzKlVFbPRczNdlyxioLYNV1cAtO1fEVA+sMVm6qq9GLTFZcDZQroRroF+g3ASrpy9aWK53XCuAK2+2gfKOgdb2CNbiPPA6VLSmsmmZmz2eTUvHCKRjNnw0u3T9ktATLsKS021WrHqqJ0c9WpKMavzBKgC5QlYnLL5dNucbd89Vi+GC1f2/abCvkktNnySI/ESkNmuV203czab7U18esPATPzvyw8U+w+oiw+8bb0HHsP0BlBZf953OUNlT/5eH+7MlrIrYwW7A8+7I9l9PkxtTA0sjvSsj9wsz8OtD+sNEep/vjqmfl6lGp30PsYX354GEN/pMVmIY5bFemHH2dA6H/aHZI/i5vPysbrZ5CFXlPO8jsx9Bc8l4HpE9VU8wAAAABJRU5ErkJggg=="

/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "freedom-box"
  }, [_c('div', {
    staticClass: "weui-flex weui-flex-title weui-cell vux-tap-active weui-cell_access"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "vux-cell-bd vux-cell-primary"
  }, [_c('p', [_c('label', {
    staticClass: "vux-label"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('span', {
    staticClass: "vux-label-desc"
  })]), _vm._v(" "), _c('router-link', {
    staticClass: "weui-flex__item weui-cell__ft_in-access weui-cell__ft",
    attrs: {
      "to": "/power"
    }
  }, [_vm._v("特权详情")])], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('img', {
    staticStyle: {
      "display": "block",
      "margin-right": "5px"
    },
    attrs: {
      "src": __webpack_require__(639),
      "width": "12"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-flex"
  }, [_c('div', {
    staticClass: "weui-flex__item"
  }, [_c('div', {
    staticClass: "placeholder"
  }, [_c('img', {
    staticClass: "weui-flex-img img-responsive",
    attrs: {
      "src": __webpack_require__(665)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-flex-idot"
  }, [_vm._v("新")]), _vm._v(" "), _c('div', {
    staticClass: "weui-title"
  }, [_vm._v("高额返佣")])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-flex__item"
  }, [_c('div', {
    staticClass: "placeholder"
  }, [_c('img', {
    staticClass: "weui-flex-img img-responsive",
    attrs: {
      "src": __webpack_require__(667)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-flex-idot"
  }, [_vm._v("新")]), _vm._v(" "), _c('div', {
    staticClass: "weui-title"
  }, [_vm._v("两级推荐奖励")])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-flex__item"
  }, [_c('div', {
    staticClass: "placeholder"
  }, [_c('img', {
    staticClass: "weui-flex-img img-responsive",
    attrs: {
      "src": __webpack_require__(666)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-flex-idot"
  }, [_vm._v("新")]), _vm._v(" "), _c('div', {
    staticClass: "weui-title"
  }, [_vm._v("专属客户返佣")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-flex"
  }, [_c('div', {
    staticClass: "weui-flex__item"
  }, [_c('div', {
    staticClass: "placeholder"
  }, [_c('img', {
    staticClass: "weui-flex-img img-responsive",
    attrs: {
      "src": __webpack_require__(668)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-title"
  }, [_vm._v("极速返佣")])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-flex__item"
  }, [_c('div', {
    staticClass: "placeholder"
  }, [_c('img', {
    staticClass: "weui-flex-img img-responsive",
    attrs: {
      "src": __webpack_require__(669)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-flex-idot"
  }, [_vm._v("新")]), _vm._v(" "), _c('div', {
    staticClass: "weui-title"
  }, [_vm._v("专属客服")])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-flex__item"
  }, [_c('div', {
    staticClass: "placeholder"
  }, [_c('img', {
    staticClass: "weui-flex-img img-responsive",
    attrs: {
      "src": __webpack_require__(670)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-flex-idot"
  }, [_vm._v("新")]), _vm._v(" "), _c('div', {
    staticClass: "weui-title"
  }, [_vm._v("尊贵标识")])])])])
}]}

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(660)

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(649),
  /* template */
  __webpack_require__(682),
  /* scopeId */
  "data-v-776de44b",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAhCAMAAACC5ikkAAAAjVBMVEUAAAAHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukHiukwJ+xMAAAALnRSTlMAvwf4YvOxZV1CJQ4D7bmslKWgh0hFN9vSjXBrVzsx4djNtSwfGRPHbk+akn1UqSVpnAAAAXZJREFUOMuNlOeagjAQRYWANGmCIoK9lz3v/3iraJRQ9tv7Z8JwvmQyc2GgyLvcthmsg6g8Dvo0HQu+ihedkDcGspuRLneOna+B8NCmHB9i5/u8uIKfNqkfmE3V1PIElpo6QNw+IYJCLWx47ao3gcngHxojvHb2bMvVpNCruGHb7glYbwoWsuhdExslYL2poSePDdun5hXnPCiZ2SH0U9bkLEh3kHwzGQEozNG20wzAL0vD/TYPQ8FialrJ24P/jPu5J+caD4dhKNDCR5S9SWH+jLNHqMtnr9gLqi0gaWCKJfX75bUZ+Xv+tmUYtiVIbOMhV/EZnyZpKDLrmOBkitHLc4H2FGyqeK5jwVqfobjUlFdouU+rD9Zk2Yntqb/QTaZ95lv1Yuo58d/Yx4XJB4OFXC9dlSsgkuvtRs7YgJHKzUFzG6VEMJaYVCkgr4G6tYJ7uz43ALaFc9RHultGPsy6v9FLQCUBwLoY9MmdhxsTxCrI1d/WL2gHLlI9vQM7AAAAAElFTkSuQmCC"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAfCAMAAAAshTY2AAAAilBMVEUAAAD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgBG4XVgAAAALXRSTlMAGSLd1775pmM20mw7FltU6LcxH+HIwrCEe+/MvKyZiWVNPi0KA6OTRCMN8JosUuJtAAABD0lEQVQoz+XRa3KCMBQF4IvRCDE8RR4KyLNq27P/7bVXQqEt0w30+5OcnLkMmRBrqvC9bulLa1dh5Zuwx1OQDZyGLBjznpiPwNN+XgCxJnIEkOS+9gRsbi9wiEUl0PdAGRHrcOLlBE2jK5TC1QRnbO84H8xJCYRmWwfwiOVAfGt4ZwEurzrbAjl/7aRCsDe1VRdAfS4xWHgpCExKidl8QJCWaxmuA+HOyeeWZq9QixRxO8x5g+2ivf+Y7X/PPo4b49hCcDDJA+EvdFMSgTBiSDE545wQ0Qs6MtzFX3mw6dlGZFjf2np8fGftRjYO/7FNcVx7/WaatS1DQ1iTbGw11skHMT9NdqMiTXdGsu+IPgBamy7Wm7gy5wAAAABJRU5ErkJggg=="

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAhCAMAAABtJEIaAAAAn1BMVEUAAAD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgD3SgACfR4wAAAANHRSTlMA3eUm68BkBqeYhfPPGsuiinhDM/bvxraxrZ5fUgvhu6qTclpWTkk6FdU+IA/7fm4qjy04W0wYAAAAAgJJREFUOMt9U+eaqjAUTEKRXgREEGmKi2VtO+//bNdAUMS9Oz9I+eaEycwJGWBvqoUMjm+6PB9m5FdcGADTil09LZWcs+OvT9Y8BD0HoyPsTAO0KU2COf+onXlYTrY0/KrFh/2+4UJomZbfp4VwpSlrGwHSu5JCrgA5XQV2d5W1NPdjGaXxLmcFOKT19xghlKlyK+Bu2hFNWZjdsYFqpMs4LqttdmOcTLmNgeBBIRKKloxwpHBU6aGhnaeALngPl1RA260H2hn0df91BXriExPW42gPAE2My6bJqkkQDRgfQscEq6Vr5insG8BnXj9Q+H9rcuGC2UJxaAjAIlOoUAnpdJ4aI7FyRvcF68211d7sphtyELJHMK6V991wQNk1iCNWGWllJK9uuWLTTxSeOcVVmLJ4+KsDeWmo80CS7ils4QdksoMuyhfgX6PrdnSgz96Fnj+v5HW8yrQQLY3LdvfjmMMdEwCyJk73O94yJOoeCB3NY9EQe+KC6ok9RNRr5qGudP7e5JnIOPNhbXezccfX8F/dI6I1Or3RsV9FrBtK0M1JOOAOJV9whukJhlBtAlRXD9KaOyCg1K8H1D5t0Bl6eGSK4/sLnQXb2vMK7KY8hjX5BMXhfUOZVorEKOrR8s5E5J8okGdDX6RAQ/6HlQlYqXGLI8A9kT/QJBEesHxbbPwDODk/s40/Kv0AAAAASUVORK5CYII="

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["F2"] = factory();
	else
		root["F2"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview 基础工具类
 * @author dxq613@gmail.com
 */
var DomUtil = __webpack_require__(29);
var objectPrototype = Object.prototype;
var toString = objectPrototype.toString;
var MAX_LEVEL = 5;

var Util = void 0;

function _deepMix(dst, src, level) {
  level = level || 0;
  for (var k in src) {
    if (src.hasOwnProperty(k)) {
      var value = src[k];
      if (value !== null && Util.isPlainObject(value)) {
        if (!Util.isPlainObject(dst[k])) {
          dst[k] = {};
        }
        if (level < MAX_LEVEL) {
          _deepMix(dst[k], src[k], level + 1);
        } else {
          dst[k] = src[k];
        }
      } else if (Util.isArray(value)) {
        dst[k] = [];
        dst[k] = dst[k].concat(value);
      } else if (value !== undefined) {
        dst[k] = src[k];
      }
    }
  }
}

function _mix(dist, obj) {
  for (var k in obj) {
    if (obj.hasOwnProperty(k) && k !== 'constructor' && obj[k] !== undefined) {
      dist[k] = obj[k];
    }
  }
}

/**
 * @class Util
 * @singleton
 * 绘图的工具类
 */
Util = {
  /**
   * 使第一个字母变成大写
   * @param  {String} s 字符串
   * @return {String} 首字母大写后的字符串
   */
  upperFirst: function upperFirst(s) {
    s += '';
    return s.charAt(0).toUpperCase() + s.substring(1);
  },
  lowerFirst: function lowerFirst(s) {
    s += '';
    return s.charAt(0).toLowerCase() + s.substring(1);
  },

  /**
   * 判断是否是字符串
   * @param {*} value 判定的值
   * @return {Boolean} 是否是字符串
   */
  isString: function isString(value) {
    return typeof value === 'string';
  },

  /**
   * 判断是否数字
   * @param {*} value 判定的值
   * @return {Boolean} 是否数字
   */
  isNumber: function isNumber(value) {
    return typeof value === 'number';
  },

  /**
   * 是否是布尔类型
   * @param {Object} value 测试的值
   * @return {Boolean} 是否布尔类型
   */
  isBoolean: function isBoolean(value) {
    return typeof value === 'boolean';
  },

  /**
   * 是否为函数
   * @param  {*} fn 对象
   * @return {Boolean}  是否函数
   */
  isFunction: function isFunction(fn) {
    return typeof fn === 'function';
  },

  /**
   * 是否数组
   * @method
   * @param  {*}  value 是否数组
   * @return {Boolean}  是否数组
   */
  isArray: 'isArray' in Array ? Array.isArray : function (value) {
    return toString.call(value) === '[object Array]';
  },
  /**
   * 是否日期
   * @param  {*}  value 对象
   * @return {Boolean}  是否日期
   */
  isDate: function isDate(value) {
    return toString.call(value) === '[object Date]';
  },
  isNil: function isNil(o) {
    return o === undefined || o === null;
  },

  /**
   * 是否是javascript对象
   * @param {Object} value The value to test
   * @return {Boolean} 返回判定结果
   */
  isObject: toString.call(null) === '[object Object]' ? function (value) {
    // check ownerDocument here as well to exclude DOM nodes
    return value !== null && value !== undefined && toString.call(value) === '[object Object]' && value.ownerDocument === undefined;
  } : function (value) {
    return toString.call(value) === '[object Object]';
  },
  isPlainObject: function isPlainObject(o) {
    if (!Util.isObject(o)) return false;
    if (Object.getPrototypeOf(o) === null) {
      return true;
    }
    var proto = o;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(o) === proto;
  },
  deepMix: function deepMix() {
    var args = new Array(arguments.length);
    var length = args.length;
    for (var i = 0; i < length; i++) {
      args[i] = arguments[i];
    }
    var rst = args[0];
    for (var _i = 1; _i < length; _i++) {
      var source = args[_i];
      _deepMix(rst, source);
    }
    return rst;
  },

  /**
   * 合并数据, 简单的合并，仅支持最多3个对象
   * @param {Object} dist 源对象
   * @param {Object} obj1 待复制对象1
   * @param {Object} obj2 待复制对象2
   * @param {Object} obj3 待复制对象3
   * @return {Object} 将数据合并到第一个
   */
  mix: function mix(dist, obj1, obj2, obj3) {
    if (obj1) {
      _mix(dist, obj1);
    }

    if (obj2) {
      _mix(dist, obj2);
    }

    if (obj3) {
      _mix(dist, obj3);
    }
    return dist;
  },
  indexOf: function indexOf(arr, element) {
    return arr.indexOf(element);
  },

  /**
   * 遍历数组或者对象
   * @param {Object|Array} elements 数组中的元素或者对象的值
   * @param {Function} func 遍历的函数 function(elememt,index){} 或者 function(value,key){}
   */
  each: function each(elements, func) {
    if (!elements) {
      return;
    }
    if (elements.length) {
      for (var i = 0, len = elements.length; i < len; i++) {
        var rst = func(elements[i], i);
        if (rst === false) {
          break;
        }
      }
    } else {
      for (var k in elements) {
        if (elements.hasOwnProperty(k)) {
          var _rst = func(elements[k], k);
          if (_rst === false) {
            break;
          }
        }
      }
    }
  },
  fixedBase: function fixedBase(v, base) {
    var str = base.toString();
    var index = str.indexOf('.');
    if (index === -1) {
      return Math.round(v);
    }
    var length = str.substr(index + 1).length;
    if (length > 20) {
      length = 20;
    }
    return parseFloat(v.toFixed(length));
  },

  /**
  * 封装事件，便于使用上下文this,和便于解除事件时使用
  * @protected
  * @param  {Object} obj   对象
  * @param  {String} action 事件名称
  * @return {Function}        返回事件处理函数
  */
  wrapBehavior: function wrapBehavior(obj, action) {
    if (obj['_wrap_' + action]) {
      return obj['_wrap_' + action];
    }
    var method = function method(e) {
      obj[action](e);
    };
    obj['_wrap_' + action] = method;
    return method;
  },

  /**
   * 获取封装的事件
   * @protected
   * @param  {Object} obj   对象
   * @param  {String} action 事件名称
   * @return {Function}        返回事件处理函数
   */
  getWrapBehavior: function getWrapBehavior(obj, action) {
    return obj['_wrap_' + action];
  },
  parsePadding: function parsePadding(padding) {
    var top = void 0;
    var right = void 0;
    var bottom = void 0;
    var left = void 0;

    if (Util.isNumber(padding) || Util.isString(padding)) {
      top = bottom = left = right = padding;
    } else if (Util.isArray(padding)) {
      top = padding[0];
      right = !Util.isNil(padding[1]) ? padding[1] : padding[0];
      bottom = !Util.isNil(padding[2]) ? padding[2] : padding[0];
      left = !Util.isNil(padding[3]) ? padding[3] : right;
    }

    return [top, right, bottom, left];
  }
};

Util.Array = {
  merge: function merge(dataArray) {
    var rst = [];
    for (var i = 0, len = dataArray.length; i < len; i++) {
      rst = rst.concat(dataArray[i]);
    }
    return rst;
  },
  values: function values(data, name) {
    var rst = [];
    var tmpMap = {};
    for (var i = 0, len = data.length; i < len; i++) {
      var obj = data[i];
      var value = obj[name];
      if (!Util.isNil(value)) {
        if (!Util.isArray(value)) {
          if (!tmpMap[value]) {
            rst.push(value);
            tmpMap[value] = true;
          }
        } else {
          Util.each(value, function (val) {
            if (!tmpMap[val]) {
              rst.push(val);
              tmpMap[val] = true;
            }
          });
        }
      }
    }
    return rst;
  },
  firstValue: function firstValue(data, name) {
    var rst = null;
    for (var i = 0, len = data.length; i < len; i++) {
      var obj = data[i];
      var value = obj[name];
      if (!Util.isNil(value)) {
        if (Util.isArray(value)) {
          rst = value[0];
        } else {
          rst = value;
        }
        break;
      }
    }
    return rst;
  },
  group: function group(data, condition) {
    if (!condition) {
      return [data];
    }
    var groups = Util.Array.groupToMap(data, condition);
    var array = [];
    for (var i in groups) {
      array.push(groups[i]);
    }
    return array;
  },
  groupToMap: function groupToMap(data, condition) {
    if (!condition) {
      return {
        0: data
      };
    }
    if (!Util.isFunction(condition)) {
      var paramsCondition = Util.isArray(condition) ? condition : condition.replace(/\s+/g, '').split('*');
      condition = function condition(row) {
        var unique = '_'; // 避免出现数字作为Key的情况，会进行按照数字的排序
        for (var i = 0, l = paramsCondition.length; i < l; i++) {
          unique += row[paramsCondition[i]] && row[paramsCondition[i]].toString();
        }
        return unique;
      };
    }

    var groups = {};
    for (var i = 0, len = data.length; i < len; i++) {
      var row = data[i];
      var key = condition(row);
      if (groups[key]) {
        groups[key].push(row);
      } else {
        groups[key] = [row];
      }
    }

    return groups;
  },
  remove: function remove(arr, obj) {
    if (!arr) {
      return;
    }
    var index = arr.indexOf(obj);
    if (index !== -1) {
      arr.splice(index, 1);
    }
  }
};

Util.mix(Util, DomUtil);

module.exports = Util;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Theme = __webpack_require__(28);
var Util = __webpack_require__(0);

/**
 * @class 全局配置项
 */
var Global = {
  // 预先定义的度量
  scales: {
    nice: true
  },
  // 宽度
  widthRatio: { // 宽度所占的分类的比例
    column: 1 / 2, // 一般的柱状图占比 1/2
    rose: 0.999999,
    multiplePie: 3 / 4,
    dodgeMargin: 0
  },
  // 虚线配置
  lineDash: [4, 4]
};

Global.setTheme = function (theme) {
  Util.mix(this, theme);
};

Global.setTheme(Theme);
module.exports = Global;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Util = __webpack_require__(0);
var Element = __webpack_require__(16);

var Shape = function (_Element) {
  _inherits(Shape, _Element);

  function Shape() {
    _classCallCheck(this, Shape);

    return _possibleConstructorReturn(this, _Element.apply(this, arguments));
  }

  Shape.prototype._initProperties = function _initProperties() {
    this._attrs = {
      zIndex: 0,
      visible: true,
      destroyed: false,
      isShape: true,
      attrs: {}
    };
  };

  Shape.prototype.drawInner = function drawInner(context) {
    var self = this;
    var attrs = self.get('attrs');
    self.createPath(context);
    var originOpacity = context.globalAlpha;
    if (self.hasFill()) {
      var fillOpacity = attrs.fillOpacity;
      if (!Util.isNil(fillOpacity) && fillOpacity !== 1) {
        context.globalAlpha = fillOpacity;
        context.fill();
        context.globalAlpha = originOpacity;
      } else {
        context.fill();
      }
    }
    if (self.hasStroke()) {
      var lineWidth = attrs.lineWidth;
      if (lineWidth > 0) {
        var strokeOpacity = attrs.strokeOpacity;
        if (!Util.isNil(strokeOpacity) && strokeOpacity !== 1) {
          context.globalAlpha = strokeOpacity;
        }
        context.stroke();
      }
    }
  };

  Shape.prototype.getBBox = function getBBox() {
    var bbox = this._attrs.bbox;
    // 延迟计算
    if (!bbox) {
      bbox = this.calculateBox();
      if (bbox) {
        bbox.x = bbox.minX;
        bbox.y = bbox.minY;
        bbox.width = bbox.maxX - bbox.minX;
        bbox.height = bbox.maxY - bbox.minY;
      }
      this._attrs.bbox = bbox;
    }
    return bbox;
  };

  /**
   * @protected
   * 计算包围盒
   * @return {Object} 包围盒
   */


  Shape.prototype.calculateBox = function calculateBox() {
    return null;
  };

  Shape.prototype.createPath = function createPath() {};

  return Shape;
}(Element);

module.exports = Shape;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * 2 Dimensional Vector
 * @module vector2
 */
module.exports = {
  /**
   * Creates a new, empty vector2
   *
   * @return {vector2} a new 2D vector
   */
  create: function create() {
    return [0, 0];
  },

  /**
   * Calculates the length of a vector2
   *
   * @param {vector2} v vector to calculate length of
   * @return {Number} length of v
   */
  length: function length(v) {
    var x = v[0];
    var y = v[1];
    return Math.sqrt(x * x + y * y);
  },

  /**
   * Normalize a vector2
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v vector to normalize
   * @return {vector2} out
   */
  normalize: function normalize(out, v) {
    var len = this.length(v);
    if (len === 0) {
      out[0] = 0;
      out[1] = 0;
    } else {
      out[0] = v[0] / len;
      out[1] = v[1] / len;
    }

    return out;
  },

  /**
   * Adds two vector2's
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  add: function add(out, v1, v2) {
    out[0] = v1[0] + v2[0];
    out[1] = v1[1] + v2[1];
    return out;
  },

  /**
   * Subtracts vector v2 from vector v1
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  sub: function sub(out, v1, v2) {
    out[0] = v1[0] - v2[0];
    out[1] = v1[1] - v2[1];
    return out;
  },

  /**
   * Scales a vector2 by a scalar number
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v the vector to scale
   * @param {Number} s amount to scale the vector by
   * @return {vector2} out
   */
  scale: function scale(out, v, s) {
    out[0] = v[0] * s;
    out[1] = v[1] * s;
    return out;
  },

  /**
   * Calculates the dot product of two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Number} dot product of v1 and v2
   */
  dot: function dot(v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1];
  },

  /**
   * Calculates the direction of two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Boolean} the direction of v1 and v2
   */
  direction: function direction(v1, v2) {
    return v1[0] * v2[1] - v2[0] * v1[1];
  },

  /**
   * Calculates the angle of two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Number} angle of v1 and v2
   */
  angle: function angle(v1, v2) {
    var theta = this.dot(v1, v2) / (this.length(v1) * this.length(v2));
    return Math.acos(theta);
  },

  /**
   * Calculates the angle of two vector2's with direction
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @param {Boolean} direction the direction of two vector2's
   * @return {Number} angle of v1 and v2
   */
  angleTo: function angleTo(v1, v2, direction) {
    var angle = this.angle(v1, v2);
    var angleLargeThanPI = this.direction(v1, v2) >= 0;
    if (direction) {
      if (angleLargeThanPI) {
        return Math.PI * 2 - angle;
      }

      return angle;
    }

    if (angleLargeThanPI) {
      return angle;
    }
    return Math.PI * 2 - angle;
  },

  /**
   * whether a vector2 is zero vector
   *
   * @param  {vector2} v vector to calculate
   * @return {Boolean}   is or not a zero vector
   */
  zero: function zero(v) {
    return v[0] === 0 && v[1] === 0;
  },

  /**
   * Calculates the euclidian distance between two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Number} distance between a and b
   */
  distance: function distance(v1, v2) {
    var x = v2[0] - v1[0];
    var y = v2[1] - v1[1];
    return Math.sqrt(x * x + y * y);
  },

  /**
   * Creates a new vector2 initialized with values from an existing vector
   *
   * @param {vector2} v vector to clone
   * @return {Array} a new 2D vector
   */
  clone: function clone(v) {
    return [v[0], v[1]];
  },

  /**
   * Return the minimum of two vector2's
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  min: function min(out, v1, v2) {
    out[0] = Math.min(v1[0], v2[0]);
    out[1] = Math.min(v1[1], v2[1]);
    return out;
  },

  /**
   * Return the maximum of two vector2's
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  max: function max(out, v1, v2) {
    out[0] = Math.max(v1[0], v2[0]);
    out[1] = Math.max(v1[1], v2[1]);
    return out;
  },

  /**
   * Transforms the vector2 with a mat2d
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v the vector to transform
   * @param {mat2d} m matrix to transform with
   * @return {vector2} out
   */
  transformMat2d: function transformMat2d(out, v, m) {
    var x = v[0];
    var y = v[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Util = __webpack_require__(0);
var Base = __webpack_require__(17);
var GROUP_ATTRS = ['color', 'size', 'shape'];
var FIELD_ORIGIN = '_origin';
var FIELD_ORIGIN_Y = '_originY';
var Global = __webpack_require__(1);
var Attr = __webpack_require__(33);
var Shape = __webpack_require__(5);
var Adjust = __webpack_require__(11);

function parseFields(field) {
  if (Util.isArray(field)) {
    return field;
  }
  if (Util.isString(field)) {
    return field.split('*');
  }
  return [field];
}

/**
 * 图形的基类
 * @class Geom
 */

var Geom = function (_Base) {
  _inherits(Geom, _Base);

  function Geom() {
    _classCallCheck(this, Geom);

    return _possibleConstructorReturn(this, _Base.apply(this, arguments));
  }

  Geom.prototype.getDefaultCfg = function getDefaultCfg() {
    return {
      /**
       * core的类型
       * @type {String}
       */
      type: null,
      /**
       * 图形的数据集合
       * @type {Array}
       */
      data: null,
      /**
       * 属性的键值对
       * @type {Object}
       */
      attrs: {},

      scales: {},

      /**
       * 画布
       * @type {Canvas}
       */
      container: null,
      /**
       * 图形样式
       * @type {Object}
       */
      styleOptions: null,

      chart: null,

      shapeType: '',

      /**
       * 是否生成多个点来绘制图形
       * @protected
       * @type {Boolean}
       */
      generatePoints: false,

      attrOptions: {},

      sortable: false,
      /**
       * 图形的底边是否从 0 开始，默认为 0，即从 0 开始，
       * 否则从最小值开始
       * @type {Boolean}
      */
      startOnZero: true
    };
  };

  Geom.prototype.init = function init() {
    var self = this;
    self._initAttrs();
    var dataArray = self._processData();
    if (self.get('adjust')) {
      self._adjustData(dataArray);
    }
    self.set('dataArray', dataArray);
  };

  // 获取分组的度量


  Geom.prototype._getGroupScales = function _getGroupScales() {
    var self = this;
    var scales = [];
    Util.each(GROUP_ATTRS, function (attrName) {
      var attr = self.getAttr(attrName);
      if (attr) {
        var attrScales = attr.scales;
        Util.each(attrScales, function (scale) {
          if (scale && scale.isCategory && scales.indexOf(scale) === -1) {
            scales.push(scale);
          }
        });
      }
    });
    return scales;
  };

  // 分组数据


  Geom.prototype._groupData = function _groupData(data) {
    var self = this;
    var groupScales = self._getGroupScales();
    if (groupScales.length) {
      var names = [];
      Util.each(groupScales, function (scale) {
        names.push(scale.field);
      });
      return Util.Array.group(data, names);
    }
    return [data];
  };

  // 设置属性配置信息


  Geom.prototype._setAttrOptions = function _setAttrOptions(attrName, attrCfg) {
    var options = this.get('attrOptions');
    options[attrName] = attrCfg;
  };

  Geom.prototype._createAttrOption = function _createAttrOption(attrName, field, cfg, defaultValues) {
    var attrCfg = {};
    attrCfg.field = field;
    if (cfg) {
      if (Util.isFunction(cfg)) {
        attrCfg.callback = cfg;
      } else {
        attrCfg.values = cfg;
      }
    } else {
      attrCfg.values = defaultValues;
    }
    this._setAttrOptions(attrName, attrCfg);
  };

  // step 1: init attrs


  Geom.prototype._initAttrs = function _initAttrs() {
    var self = this;
    var attrs = self.get('attrs');
    var attrOptions = self.get('attrOptions');
    var coord = self.get('coord');

    for (var type in attrOptions) {
      if (attrOptions.hasOwnProperty(type)) {
        var option = attrOptions[type];
        var className = Util.upperFirst(type);
        var fields = parseFields(option.field);
        if (type === 'position') {
          option.coord = coord;
        }
        var scales = [];
        for (var i = 0, len = fields.length; i < len; i++) {
          var field = fields[i];
          var scale = self._createScale(field);
          scales.push(scale);
        }
        if (type === 'position') {
          var yScale = scales[1];
          if (self.get('type') === 'interval') {
            // 柱状图起始点从0点开始
            if (yScale.values.length) {
              yScale.change({
                min: Math.min(0, yScale.min)
              });
            }
          }
          // 饼图需要填充满整个空间
          if (coord.type === 'polar' && coord.transposed && self.hasAdjust('stack')) {
            if (yScale.values.length) {
              yScale.change({
                nice: false,
                min: 0,
                max: Math.max.apply(null, yScale.values)
              });
            }
          }
        }

        option.scales = scales;
        var attr = new Attr[className](option);
        attrs[type] = attr;
      }
    }
  };

  Geom.prototype._createScale = function _createScale(field) {
    var sortable = this.get('sortable');
    var scales = this.get('scales');
    var scale = scales[field];
    if (!scale) {
      scale = this.get('chart').createScale(field, sortable);
      scales[field] = scale;
    }
    return scale;
  };

  // 处理数据


  Geom.prototype._processData = function _processData() {
    var self = this;
    var data = this.get('data');
    var dataArray = [];
    var groupedArray = this._groupData(data);
    for (var i = 0, len = groupedArray.length; i < len; i++) {
      var subData = groupedArray[i];
      var tempData = self._saveOrigin(subData);
      if (this.hasAdjust('dodge')) {
        self._numberic(tempData);
      }
      dataArray.push(tempData);
    }
    return dataArray;
  };

  Geom.prototype._saveOrigin = function _saveOrigin(data) {
    var rst = [];
    for (var i = 0, len = data.length; i < len; i++) {
      var origin = data[i];
      var obj = {};
      for (var k in origin) {
        obj[k] = origin[k];
      }
      obj[FIELD_ORIGIN] = origin;
      rst.push(obj);
    }
    return rst;
  };

  // step 2.3 将分类数据翻译成数据, 仅对位置相关的度量进行数字化处理


  Geom.prototype._numberic = function _numberic(data) {
    var positionAttr = this.getAttr('position');
    var scales = positionAttr.scales;
    for (var j = 0, len = data.length; j < len; j++) {
      var obj = data[j];
      var count = Math.min(2, scales.length);
      for (var i = 0; i < count; i++) {
        var scale = scales[i];
        if (scale.isCategory) {
          var field = scale.field;
          obj[field] = scale.translate(obj[field]);
        }
      }
    }
  };

  // 进行数据调整


  Geom.prototype._adjustData = function _adjustData(dataArray) {
    var self = this;
    var adjust = self.get('adjust');
    if (adjust) {
      var adjustType = Util.upperFirst(adjust.type);
      if (!Adjust[adjustType]) {
        throw new Error('not support such adjust : ' + adjust);
      }

      var xScale = self.getXScale();
      var yScale = self.getYScale();
      var cfg = Util.mix({
        xField: xScale.field,
        yField: yScale.field
      }, adjust);
      var adjustObject = new Adjust[adjustType](cfg);
      adjustObject.processAdjust(dataArray);
      if (adjustType === 'Stack') {
        self._updateStackRange(yScale.field, yScale, dataArray);
      }
    }
  };

  Geom.prototype._updateStackRange = function _updateStackRange(field, scale, dataArray) {
    var mergeArray = Util.Array.merge(dataArray);
    var min = scale.min;
    var max = scale.max;
    for (var i = 0, len = mergeArray.length; i < len; i++) {
      var obj = mergeArray[i];
      var tmpMin = Math.min.apply(null, obj[field]);
      var tmpMax = Math.max.apply(null, obj[field]);
      if (tmpMin < min) {
        min = tmpMin;
      }
      if (tmpMax > max) {
        max = tmpMax;
      }
    }
    if (min < scale.min || max > scale.max) {
      scale.change({
        min: min,
        max: max
      });
    }
  };

  Geom.prototype._sort = function _sort(mappedArray) {
    var self = this;
    var xScale = self.getXScale();
    var xField = xScale.field;
    if (xScale.type !== 'identity' && xScale.values.length > 1) {
      Util.each(mappedArray, function (itemArr) {
        itemArr.sort(function (obj1, obj2) {
          return xScale.translate(obj1[FIELD_ORIGIN][xField]) - xScale.translate(obj2[FIELD_ORIGIN][xField]);
        });
      });
    }
    self.set('hasSorted', true);
    self.set('dataArray', mappedArray);
  };

  Geom.prototype.paint = function paint() {
    var self = this;
    var dataArray = self.get('dataArray');
    var mappedArray = [];
    var shapeFactory = self.getShapeFactory();
    shapeFactory.setCoord(self.get('coord'));
    self._beforeMapping(dataArray);
    // let shapes = [];
    for (var i = 0, len = dataArray.length; i < len; i++) {
      var data = dataArray[i];
      data = self._mapping(data);
      mappedArray.push(data);
      self.draw(data, shapeFactory);
      // shapes = shapes.concat(drawedShapes);
    }
    self.set('dataArray', mappedArray);
    // self.set('shapes', shapes);
  };

  /**
   * @protected
   * 获取图形的工厂类
   * @return {Object} 工厂类对象
   */


  Geom.prototype.getShapeFactory = function getShapeFactory() {
    var shapeFactory = this.get('shapeFactory');
    if (!shapeFactory) {
      var shapeType = this.get('shapeType');
      shapeFactory = Shape.getShapeFactory(shapeType);
      this.set('shapeFactory', shapeFactory);
    }
    return shapeFactory;
  };

  // step 3.2 mapping


  Geom.prototype._mapping = function _mapping(data) {
    var self = this;
    var attrs = self.get('attrs');
    var yField = self.getYScale().field;
    var mappedData = [];
    for (var i = 0, len = data.length; i < len; i++) {
      var record = data[i];
      var newRecord = {};
      newRecord[FIELD_ORIGIN] = record[FIELD_ORIGIN];
      newRecord.points = record.points;
      // 避免
      newRecord[FIELD_ORIGIN_Y] = record[yField];
      for (var k in attrs) {
        if (attrs.hasOwnProperty(k)) {
          var attr = attrs[k];
          var names = attr.names;
          var values = self._getAttrValues(attr, record);
          if (names.length > 1) {
            // position 之类的生成多个字段的属性
            for (var j = 0, _len = values.length; j < _len; j++) {
              var val = values[j];
              var name = names[j];
              newRecord[name] = Util.isArray(val) && val.length === 1 ? val[0] : val; // 只有一个值时返回第一个属性值
            }
          } else {
            newRecord[names[0]] = values.length === 1 ? values[0] : values;
          }
        }
      }
      mappedData.push(newRecord);
    }

    return mappedData;
  };

  // 获取属性映射的值


  Geom.prototype._getAttrValues = function _getAttrValues(attr, record) {
    var scales = attr.scales;
    var params = [];
    for (var i = 0, len = scales.length; i < len; i++) {
      var scale = scales[i];
      var field = scale.field;
      if (scale.type === 'identity') {
        params.push(scale.value);
      } else {
        params.push(record[field]);
      }
    }
    var values = attr.mapping.apply(attr, params);
    return values;
  };

  Geom.prototype.getAttrValue = function getAttrValue(attrName, record) {
    var attr = this.getAttr(attrName);
    var rst = null;
    if (attr) {
      var values = this._getAttrValues(attr, record);
      rst = values[0];
    }
    return rst;
  };

  Geom.prototype._beforeMapping = function _beforeMapping(dataArray) {
    var self = this;
    if (self.get('sortable')) {
      // 需要排序
      self._sort(dataArray);
    }
    if (self.get('generatePoints')) {
      Util.each(dataArray, function (data) {
        self._generatePoints(data);
      });
    }
  };

  Geom.prototype.isInCircle = function isInCircle() {
    var coord = this.get('coord');
    return coord && coord.isPolar;
  };

  Geom.prototype.getCallbackCfg = function getCallbackCfg(fields, cfg, origin) {
    if (!fields) {
      return cfg;
    }
    var tmpCfg = {};
    var params = fields.map(function (field) {
      return origin[field];
    });
    Util.each(cfg, function (v, k) {
      if (Util.isFunction(v)) {
        tmpCfg[k] = v.apply(null, params);
      } else {
        tmpCfg[k] = v;
      }
    });
    return tmpCfg;
  };

  Geom.prototype.getDrawCfg = function getDrawCfg(obj) {
    var self = this;
    var isInCircle = self.isInCircle();
    var cfg = {
      origin: obj,
      x: obj.x,
      y: obj.y,
      color: obj.color,
      size: obj.size,
      shape: obj.shape,
      isInCircle: isInCircle,
      opacity: obj.opacity
    };
    var styleOptions = self.get('styleOptions');
    if (styleOptions && styleOptions.style) {
      cfg.style = self.getCallbackCfg(styleOptions.fields, styleOptions.style, obj[FIELD_ORIGIN]);
    }
    if (self.get('generatePoints')) {
      cfg.points = obj.points;
    }
    if (isInCircle) {
      cfg.center = self.get('coord').center;
    }
    return cfg;
  };

  Geom.prototype.draw = function draw(data, shapeFactory) {
    var self = this;
    var container = self.get('container');
    var yScale = self.getYScale();
    Util.each(data, function (obj, index) {
      if (yScale && Util.isNil(obj._origin[yScale.field])) {
        return;
      }
      obj.index = index;
      var cfg = self.getDrawCfg(obj);
      var shape = obj.shape;
      self.drawShape(shape, obj, cfg, container, shapeFactory);
    });
  };

  Geom.prototype.drawShape = function drawShape(shape, shapeData, cfg, container, shapeFactory) {
    var gShape = shapeFactory.drawShape(shape, cfg, container);

    if (gShape) {
      Util.each([].concat(gShape), function (s) {
        s.set('origin', shapeData); // todo
      });
    }
  };

  Geom.prototype._generatePoints = function _generatePoints(data) {
    var self = this;
    var shapeFactory = self.getShapeFactory();
    var shapeAttr = self.getAttr('shape');
    for (var i = 0, len = data.length; i < len; i++) {
      var obj = data[i];
      var cfg = self.createShapePointsCfg(obj);
      var shape = shapeAttr ? self._getAttrValues(shapeAttr, obj) : null;
      var points = shapeFactory.getShapePoints(shape, cfg);
      obj.points = points;
    }
  };

  /**
   * 获取图形对应点的配置项
   * @protected
   * @param  {Object} obj 数据对象
   * @return {Object} cfg 获取图形对应点的配置项
   */


  Geom.prototype.createShapePointsCfg = function createShapePointsCfg(obj) {
    var xScale = this.getXScale();
    var yScale = this.getYScale();
    var x = this._normalizeValues(obj[xScale.field], xScale);
    var y = void 0; // 存在没有 y 的情况

    if (yScale) {
      y = this._normalizeValues(obj[yScale.field], yScale);
    } else {
      y = obj.y ? obj.y : 0.1;
    }

    return {
      x: x,
      y: y,
      y0: yScale ? yScale.scale(this.getYMinValue()) : undefined
    };
  };

  /**
   * @protected
   * @return {Number} y 轴上的最小值
   */


  Geom.prototype.getYMinValue = function getYMinValue() {
    var yScale = this.getYScale();
    var min = yScale.min;
    var value = void 0;

    if (this.get('startOnZero')) {
      value = min >= 0 ? min : 0;
    } else {
      value = min;
    }

    return value;
  };

  // 将数据归一化


  Geom.prototype._normalizeValues = function _normalizeValues(values, scale) {
    var rst = [];
    if (Util.isArray(values)) {
      for (var i = 0, len = values.length; i < len; i++) {
        var v = values[i];
        rst.push(scale.scale(v));
      }
    } else {
      rst = scale.scale(values);
    }
    return rst;
  };

  /**
   * 获取属性
   * @protected
   * @param {String} name 属性名
   * @return {Scale} 度量
   */


  Geom.prototype.getAttr = function getAttr(name) {
    return this.get('attrs')[name];
  };

  /**
   * 获取 x 对应的度量
   * @return {Scale} x 对应的度量
   */


  Geom.prototype.getXScale = function getXScale() {
    return this.getAttr('position').scales[0];
  };

  /**
   * 获取 y 对应的度量
   * @return {Scale} y 对应的度量
   */


  Geom.prototype.getYScale = function getYScale() {
    return this.getAttr('position').scales[1];
  };

  Geom.prototype.hasAdjust = function hasAdjust(adjust) {
    return this.get('adjust') && this.get('adjust').type === adjust;
  };

  Geom.prototype._getSnap = function _getSnap(scale, item, arr) {
    var i = 0;
    var values = void 0;
    var yField = this.getYScale().field; // 叠加的维度
    if (this.hasAdjust('stack') && scale.field === yField) {
      values = [];
      arr.forEach(function (obj) {
        values.push(obj[FIELD_ORIGIN_Y]);
      });

      for (var len = values.length; i < len; i++) {
        if (values[0][0] > item) {
          break;
        }
        if (values[values.length - 1][1] <= item) {
          i = values.length - 1;
          break;
        }
        if (values[i][0] <= item && values[i][1] > item) {
          break;
        }
      }
    } else {
      values = scale.values;
      values.sort(function (a, b) {
        return a - b;
      });
      for (var _len2 = values.length; i < _len2; i++) {
        if ((values[0] + values[1]) / 2 > item) {
          break;
        }
        if ((values[i - 1] + values[i]) / 2 <= item && (values[i + 1] + values[i]) / 2 > item) {
          break;
        }
        if ((values[values.length - 2] + values[values.length - 1]) / 2 <= item) {
          i = values.length - 1;
          break;
        }
      }
    }
    var result = values[i];
    return result;
  };

  /**
   * 根据画布坐标获取切割线对应数据集
   * @param  {Object} point 画布坐标的x,y的值
   * @return {Array} 切割交点对应数据集
  **/


  Geom.prototype.getSnapRecords = function getSnapRecords(point) {
    var self = this;
    var coord = self.get('coord');
    var xScale = self.getXScale();
    var yScale = self.getYScale();
    var xfield = xScale.field;

    var dataArray = self.get('dataArray');
    if (!this.get('hasSorted')) {
      this._sort(dataArray);
    }

    var rst = [];
    var invertPoint = coord.invertPoint(point);
    var invertPointX = invertPoint.x;
    if (self.isInCircle() && !coord.transposed && invertPointX > (1 + xScale.rangeMax()) / 2) {
      invertPointX = xScale.rangeMin(); // 极坐标下，scale 的 range 被做过特殊处理 see chart.js#L183
    }

    var xValue = xScale.invert(invertPointX);
    if (!xScale.isCategory) {
      xValue = self._getSnap(xScale, xValue);
    }

    var tmp = [];

    dataArray.forEach(function (data) {
      data.forEach(function (obj) {
        var originValue = Util.isNil(obj[FIELD_ORIGIN]) ? obj[xfield] : obj[FIELD_ORIGIN][xfield];
        if (self._isEqual(originValue, xValue, xScale)) {
          tmp.push(obj);
        }
      });
    });

    // 特别针对饼图做处理
    if (this.hasAdjust('stack') && coord.isPolar && coord.transposed && xScale.values.length === 1) {
      if (invertPointX >= 0 && invertPointX <= 1) {
        // 精确拾取
        var yValue = yScale.invert(invertPoint.y);
        yValue = self._getSnap(yScale, yValue, tmp);
        tmp.forEach(function (obj) {
          if (Util.isArray(yValue) ? obj[FIELD_ORIGIN_Y].toString() === yValue.toString() : obj[FIELD_ORIGIN_Y] === yValue) {
            rst.push(obj);
          }
        });
      }
    } else {
      rst = tmp;
    }

    return rst;
  };

  Geom.prototype._isEqual = function _isEqual(originValue, value, scale) {
    if (scale.type === 'timeCat') {
      return scale._toTimeStamp(originValue) === value;
    }
    return value === originValue;
  };

  /**
   * 位置属性映射
   * @chainable
   * @param  {String} field 字段名
   * @return {Geom} geom 当前几何标记
   */


  Geom.prototype.position = function position(field) {
    this._setAttrOptions('position', {
      field: field
    });
    return this;
  };

  /**
   * 颜色属性映射
   * @chainable
   * @param  {String} field 字段名
   * @param  {Array|Function} values 颜色的数组或者回调函数
   * @return {Geom} geom 当前几何标记
   */


  Geom.prototype.color = function color(field, values) {
    this._createAttrOption('color', field, values, Global.colors);
    return this;
  };

  /**
   * 大小属性映射
   * @chainable
   * @param  {String} field 字段名
   * @param  {Array|Function} values 大小的数组或者回调函数
   * @return {Geom} geom 当前几何标记
   */


  Geom.prototype.size = function size(field, values) {
    this._createAttrOption('size', field, values, Global.sizes);
    return this;
  };

  /**
   * 形状属性映射
   * @chainable
   * @param  {String} field 字段名
   * @param  {Array|Function} values 大小的数组或者回调函数
   * @return {Geom} geom 当前几何标记
   */


  Geom.prototype.shape = function shape(field, values) {
    var type = this.get('type');
    var shapes = Global.shapes[type] || [];
    this._createAttrOption('shape', field, values, shapes);
    return this;
  };

  Geom.prototype.style = function style(field, cfg) {
    var styleOptions = this.get('styleOptions');
    if (!styleOptions) {
      styleOptions = {};
      this.set('styleOptions', styleOptions);
    }
    if (Util.isObject(field)) {
      cfg = field;
      field = null;
    }
    var fields = void 0;
    if (field) {
      fields = parseFields(field);
    }
    styleOptions.fields = fields;
    styleOptions.style = cfg;
    return this;
  };

  Geom.prototype.adjust = function adjust(type) {
    if (Util.isString(type)) {
      type = { type: type };
    }
    this.set('adjust', type);
    return this;
  };

  Geom.prototype.animate = function animate(cfg) {
    this.set('animateCfg', cfg);
    return this;
  };

  Geom.prototype.reset = function reset() {
    this.set('attrOptions', {});
    this.set('adjust', null);
    this.clearInner();
  };

  Geom.prototype.clearInner = function clearInner() {
    var container = this.get('container');
    if (container) {
      container.clear();
      container.setMatrix([1, 0, 0, 1, 0, 0]);
    }
    container && container.clear();
    this.set('attrs', {});
    this.set('groupScales', null);
    this.set('xDistance', null);
  };

  Geom.prototype.clear = function clear() {
    this.clearInner();
    this.set('scales', {});
  };

  Geom.prototype.destroy = function destroy() {
    this.clear();
    // const container = this.get('container');
    // container && container.remove();
    _Base.prototype.destroy.call(this);
  };

  return Geom;
}(Base);

module.exports = Geom;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(0);
var Global = __webpack_require__(1);

var Shape = {};

var ShapeBase = {
  _coord: null,
  /**
   * 绘制图形
   * @param {Object} cfg 配置项
   * @param {Object} container 容器
   */
  draw: function draw(cfg, container) {
    if (this.drawShape) {
      this.drawShape(cfg, container);
    }
  },

  /**
   * 设置坐标系
   * @param {Coord} coord 坐标系
   */
  setCoord: function setCoord(coord) {
    this._coord = coord;
  },

  /**
   * 0～1 point 转 画布 point
   * @param  {point} point 转换的点
   * @return {point} point 转换结果
   */
  parsePoint: function parsePoint(point) {
    var coord = this._coord;
    if (coord.isPolar) {
      if (point.x === 1) point.x = 0.9999999;
      if (point.y === 1) point.y = 0.9999999;
    }
    return coord.convertPoint(point);
  },

  /**
   * 0～1 points 转 画布 points
   * @param  {points} points 转换的多个点
   * @return {points} points 转换结果
   */
  parsePoints: function parsePoints(points) {
    if (!points) return false;
    var self = this;
    var rst = [];
    points.forEach(function (point) {
      rst.push(self.parsePoint(point));
    });
    return rst;
  }
};

var ShapeFactoryBase = {
  defaultShapeType: null,
  setCoord: function setCoord(coord) {
    this._coord = coord;
  },
  getShape: function getShape(type) {
    var self = this;
    if (Util.isArray(type)) {
      type = type[0];
    }
    var shape = self[type] || self[self.defaultShapeType];
    shape._coord = self._coord;
    return shape;
  },
  getShapePoints: function getShapePoints(type, cfg) {
    var shape = this.getShape(type);
    var fn = shape.getPoints || shape.getShapePoints || this.getDefaultPoints;
    var points = fn(cfg);
    return points;
  },
  getDefaultPoints: function getDefaultPoints() /* cfg */{
    return [];
  },
  drawShape: function drawShape(type, cfg, container) {
    var shape = this.getShape(type);
    if (!cfg.color) {
      cfg.color = Global.colors[0];
    }
    return shape.draw(cfg, container);
  }
};

// 注册 Geometry 获取图形的入口
Shape.registerFactory = function (factoryName, cfg) {
  var className = Util.upperFirst(factoryName);
  var geomObj = Util.mix({}, ShapeFactoryBase, cfg);
  Shape[className] = geomObj;
  geomObj.name = factoryName;
  return geomObj;
};

// 注册图形
Shape.registerShape = function (factoryName, shapeType, cfg) {
  var className = Util.upperFirst(factoryName);
  var factory = Shape[className];
  var shapeObj = Util.mix({}, ShapeBase, cfg);
  factory[shapeType] = shapeObj;
  return shapeObj;
};

Shape.registShape = Shape.registerShape;

// 获得Geom 对应的 shapeFactory
Shape.getShapeFactory = function (factoryName) {
  var self = this;
  factoryName = factoryName || 'point';
  var className = Util.upperFirst(factoryName);
  return self[className];
};

module.exports = Shape;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var G = {
  Canvas: __webpack_require__(48),
  Group: __webpack_require__(19),
  Shape: __webpack_require__(2),
  Matrix: __webpack_require__(14),
  Vector2: __webpack_require__(3)
};

__webpack_require__(49);
__webpack_require__(50);
__webpack_require__(51);
__webpack_require__(52);
__webpack_require__(53);
__webpack_require__(54);
__webpack_require__(55);
__webpack_require__(56);
__webpack_require__(57);

module.exports = G;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Vector2 = __webpack_require__(3);

var start = Vector2.create();
var end = Vector2.create();
var extremity = Vector2.create();

function getCubicBezierXYatT(startPt, controlPt1, controlPt2, endPt, T) {
  var x = CubicN(T, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
  var y = CubicN(T, startPt.y, controlPt1.y, controlPt2.y, endPt.y);
  return {
    x: x,
    y: y
  };
}
// cubic helper formula at T distance
function CubicN(T, a, b, c, d) {
  var t2 = T * T;
  var t3 = t2 * T;
  return a + (-a * 3 + T * (3 * a - a * T)) * T + (3 * b + T * (-6 * b + b * 3 * T)) * T + (c * 3 - c * 3 * T) * t2 + d * t3;
}

function cubicBezierBounds(c) {
  var minX = Infinity;
  var maxX = -Infinity;
  var minY = Infinity;
  var maxY = -Infinity;
  var s = {
    x: c[0],
    y: c[1]
  };
  var c1 = {
    x: c[2],
    y: c[3]
  };
  var c2 = {
    x: c[4],
    y: c[5]
  };
  var e = {
    x: c[6],
    y: c[7]
  };
  for (var t = 0; t < 100; t++) {
    var pt = getCubicBezierXYatT(s, c1, c2, e, t / 100);
    if (pt.x < minX) {
      minX = pt.x;
    }
    if (pt.x > maxX) {
      maxX = pt.x;
    }
    if (pt.y < minY) {
      minY = pt.y;
    }
    if (pt.y > maxY) {
      maxY = pt.y;
    }
  }
  return {
    minX: minX,
    minY: minY,
    maxX: maxX,
    maxY: maxY
  };
}

module.exports = {
  /**
   * 从顶点数组中计算最小包围盒
   * @param  {Array} points 顶点数组
   * @param  {Number} lineWidth 线宽
   * @return {Object}        最小包围盒的范围
   */
  getBBoxFromPoints: function getBBoxFromPoints(points) {
    if (points.length === 0) {
      return;
    }
    var p = points[0];
    var left = p.x;
    var right = p.x;
    var top = p.y;
    var bottom = p.y;
    var len = points.length;

    for (var i = 1; i < len; i++) {
      p = points[i];
      left = Math.min(left, p.x);
      right = Math.max(right, p.x);
      top = Math.min(top, p.y);
      bottom = Math.max(bottom, p.y);
    }

    return {
      minX: left,
      minY: top,
      maxX: right,
      maxY: bottom
    };
  },

  /**
   * 计算线的最小包围盒
   * @param  {Number} x0 线段的起点 x
   * @param  {Number} y0 线段的起点 y
   * @param  {Number} x1 线段的终点 x
   * @param  {Number} y1 线段的终点 y
   * @param  {Number} lineWidth 线宽
   * @return {Object}    线段的最小包围盒
   */
  getBBoxFromLine: function getBBoxFromLine(x0, y0, x1, y1) {
    return {
      minX: Math.min(x0, x1),
      minY: Math.min(y0, y1),
      maxX: Math.max(x0, x1),
      maxY: Math.max(y0, y1)
    };
  },
  getBBoxFromArc: function getBBoxFromArc(x, y, r, startAngle, endAngle, anticlockwise) {
    var diff = Math.abs(startAngle - endAngle);
    if (diff % Math.PI * 2 < 1e-4 && diff > 1e-4) {
      // Is a circle
      return {
        minX: x - r,
        minY: y - r,
        maxX: x + r,
        maxY: y + r
      };
    }

    start[0] = Math.cos(startAngle) * r + x;
    start[1] = Math.sin(startAngle) * r + y;

    end[0] = Math.cos(endAngle) * r + x;
    end[1] = Math.sin(endAngle) * r + y;
    var min = [0, 0];
    var max = [0, 0];

    Vector2.min(min, start, end);
    Vector2.max(max, start, end);

    // Thresh to [0, Math.PI * 2]
    startAngle = startAngle % (Math.PI * 2);
    if (startAngle < 0) {
      startAngle = startAngle + Math.PI * 2;
    }
    endAngle = endAngle % (Math.PI * 2);
    if (endAngle < 0) {
      endAngle = endAngle + Math.PI * 2;
    }

    if (startAngle > endAngle && !anticlockwise) {
      endAngle += Math.PI * 2;
    } else if (startAngle < endAngle && anticlockwise) {
      startAngle += Math.PI * 2;
    }
    if (anticlockwise) {
      var tmp = endAngle;
      endAngle = startAngle;
      startAngle = tmp;
    }

    for (var angle = 0; angle < endAngle; angle += Math.PI / 2) {
      if (angle > startAngle) {
        extremity[0] = Math.cos(angle) * r + x;
        extremity[1] = Math.sin(angle) * r + y;

        Vector2.min(min, extremity, min);
        Vector2.max(max, extremity, max);
      }
    }

    return {
      minX: min[0],
      minY: min[1],
      maxX: max[0],
      maxY: max[1]
    };
  },
  getBBoxFromBezierGroup: function getBBoxFromBezierGroup(points) {
    var minX = Infinity;
    var maxX = -Infinity;
    var minY = Infinity;
    var maxY = -Infinity;
    for (var i = 0, len = points.length; i < len; i++) {
      var bbox = cubicBezierBounds(points[i]);
      if (bbox.minX < minX) {
        minX = bbox.minX;
      }
      if (bbox.maxX > maxX) {
        maxX = bbox.maxX;
      }
      if (bbox.minY < minY) {
        minY = bbox.minY;
      }
      if (bbox.maxY > maxY) {
        maxY = bbox.maxY;
      }
    }

    return {
      minX: minX,
      minY: minY,
      maxX: maxX,
      maxY: maxY
    };
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileOverview the base class of scale
 * @author dxq613@gmail.com
 */
var Util = __webpack_require__(0);

/**
 * 度量的构造函数
 * @class Scale
 */

var Scale = function () {
  Scale.prototype._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'base';
    /**
     * 格式化函数,输出文本或者tick时的格式化函数
     * @type {Function}
     */
    this.formatter = null;
    /**
     * 输出的值域
     * @type {Array}
     */
    this.range = [0, 1];
    /**
     * 度量的标记
     * @type {Array}
     */
    this.ticks = null;
    /**
     * 参与度量计算的值，可选项
     * @type {Array}
     */
    this.values = [];
  };

  function Scale(cfg) {
    _classCallCheck(this, Scale);

    this._initDefaultCfg();
    Util.mix(this, cfg);
    this.init();
  }

  /**
   * 度量初始化
   * @protected
   */


  Scale.prototype.init = function init() {};

  /**
   * 获取该度量的ticks,返回的是多个对象，
   *   - text: tick 的文本
   *   - value: 对应的度量转换后的值
   * <code>
   *   [
   *     {text: 0,value:0}
   *     {text: 1,value:0.2}
   *     {text: 2,value:0.4}
   *     {text: 3,value:0.6}
   *     {text: 4,value:0.8}
   *     {text: 5,value:1}
   *   ]
   * </code>
   * @param {Number} count 输出tick的个数的近似值，默认是 10
   * @return {Array} 返回 ticks 数组
   */


  Scale.prototype.getTicks = function getTicks() {
    var self = this;
    var ticks = self.ticks;
    var rst = [];
    Util.each(ticks, function (tick) {
      var obj = void 0;
      if (Util.isObject(tick)) {
        obj = tick;
      } else {
        obj = {
          text: self.getText(tick),
          tickValue: tick,
          value: self.scale(tick)
        };
      }
      rst.push(obj);
    });
    return rst;
  };

  /**
   * 获取格式化后的文本
   * @param  {*} value 输入的数据
   * @return {String} 格式化的文本
   */


  Scale.prototype.getText = function getText(value) {
    var formatter = this.formatter;
    value = formatter ? formatter(value) : value;
    if (Util.isNil(value) || !value.toString) {
      value = '';
    }
    return value.toString();
  };
  /**
   * 输出的值域最小值
   * @protected
   * @return {Number} 返回最小的值
   */


  Scale.prototype.rangeMin = function rangeMin() {
    return this.range[0];
  };
  /**
   * 输出的值域最大值
   * @protected
   * @return {Number} 返回最大的值
   */


  Scale.prototype.rangeMax = function rangeMax() {
    var range = this.range;
    return range[range.length - 1];
  };

  /**
   * 度量转换后的结果，翻转回输入域
   * @param  {Number} value 需要翻转的数值
   * @return {*} 度量的输入值
   */


  Scale.prototype.invert = function invert(value) {
    return value;
  };
  /**
   * 将传入的值从非数值转换成数值格式，如分类字符串、时间字符串等
   * @param  {*} value 传入的值
   * @return {Number} 转换的值
   */


  Scale.prototype.translate = function translate(value) {
    return value;
  };
  /**
   * 进行度量转换
   * @param  {*} value 输入值
   * @return {Number} 输出值，在设定的输出值域之间，默认[0,1]
   */


  Scale.prototype.scale = function scale(value) {
    return value;
  };
  /**
   * 克隆一个新的scale,拥有跟当前scale相同的输入域、输出域等
   * @return {Scale} 克隆的度量
   */


  Scale.prototype.clone = function clone() {
    var self = this;
    var constr = self.constructor;
    var cfg = {};
    Util.each(self, function (v, k) {
      cfg[k] = self[k];
    });
    return new constr(cfg);
  };
  /**
   * 更改度量的属性信息
   * @param  {Object} info 属性信息
   * @chainable
   * @return {Scale} 返回自身的引用
   */


  Scale.prototype.change = function change(info) {
    this.ticks = null;
    Util.mix(this, info);
    this.init();
    return this;
  };

  return Scale;
}();

module.exports = Scale;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = __webpack_require__(0);

var KEYWORDS_PERCENT = {
  min: 0,
  median: 0.5,
  max: 1
};

var GuideBase = function () {
  GuideBase.prototype._initDefaultCfg = function _initDefaultCfg() {};

  function GuideBase(cfg) {
    _classCallCheck(this, GuideBase);

    this._initDefaultCfg();
    Util.deepMix(this, cfg);
  }

  GuideBase.prototype._getNormalizedValue = function _getNormalizedValue(val, scale) {
    var rst = void 0;
    if (Util.isNil(KEYWORDS_PERCENT[val])) {
      rst = scale.scale(val);
    } else {
      rst = KEYWORDS_PERCENT[val];
    }
    return rst;
  };

  GuideBase.prototype.parsePercentPoint = function parsePercentPoint(coord, position) {
    var xPercent = parseFloat(position[0]) / 100;
    var yPercent = parseFloat(position[1]) / 100;
    var start = coord.start;
    var end = coord.end;
    var width = Math.abs(start.x - end.x);
    var height = Math.abs(start.y - end.y);
    var x = width * xPercent + Math.min(start.x, end.x);
    var y = height * yPercent + Math.min(start.y, end.y);
    return {
      x: x,
      y: y
    };
  };

  GuideBase.prototype.parsePoint = function parsePoint(coord, position) {
    var self = this;
    var xScale = self.xScale;
    var yScales = self.yScales;
    if (Util.isFunction(position)) {
      position = position(xScale, yScales); // position 必须是对象
    }

    // 如果数据格式是 ['50%', '50%'] 的格式
    if (Util.isString(position[0]) && position[0].indexOf('%') !== -1) {
      return this.parsePercentPoint(coord, position);
    }

    var x = self._getNormalizedValue(position[0], xScale);
    var y = self._getNormalizedValue(position[1], yScales[0]);

    return coord.convertPoint({
      x: x,
      y: y
    });
  };

  /**
   * 绘制辅助元素
   * @param  {Coord} coord  坐标系
   * @param  {Canvas.Group} group 绘制到的容器
   */


  GuideBase.prototype.render = function render() /* coord,group */{};

  GuideBase.prototype.remove = function remove() {
    var element = this.element;

    element && element.remove(true);
  };

  return GuideBase;
}();

module.exports = GuideBase;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = __webpack_require__(0);

function toScaleString(scale, value) {
  if (Util.isString(value)) {
    return value;
  }
  return scale.invert(scale.scale(value));
}

var AttributeBase = function () {
  function AttributeBase(cfg) {
    _classCallCheck(this, AttributeBase);

    /**
     * 属性的类型
     * @type {String}
     */
    this.type = 'base';

    /**
     * 属性的名称
     * @type {String}
     */
    this.name = null;

    /**
     * 回调函数
     * @type {Function}
     */
    this.method = null;

    /**
     * 备选的值数组
     * @type {Array}
     */
    this.values = [];

    /**
     * 属性内部的度量
     * @type {Array}
     */
    this.scales = [];

    /**
     * 是否通过线性取值, 如果未指定，则根据数值的类型判定
     * @type {Boolean}
     */
    this.linear = null;

    Util.mix(this, cfg);
  }

  // 获取属性值，将值映射到视觉通道


  AttributeBase.prototype._getAttrValue = function _getAttrValue(scale, value) {
    var values = this.values;
    if (scale.isCategory && !this.linear) {
      var index = scale.translate(value);
      return values[index % values.length];
    }
    var percent = scale.scale(value);
    return this.getLinearValue(percent);
  };

  /**
   * 如果进行线性映射，返回对应的映射值
   * @protected
   * @param  {Number} percent 百分比
   * @return {*}  颜色值、形状、大小等
   */


  AttributeBase.prototype.getLinearValue = function getLinearValue(percent) {
    var values = this.values;
    var steps = values.length - 1;
    var step = Math.floor(steps * percent);
    var leftPercent = steps * percent - step;
    var start = values[step];
    var end = step === steps ? start : values[step + 1];
    var rstValue = start + (end - start) * leftPercent;
    return rstValue;
  };

  /**
   * 默认的回调函数
   * @param {*} value 回调函数的值
   * @type {Function}
   * @return {Array} 返回映射后的值
   */


  AttributeBase.prototype.callback = function callback(value) {
    var self = this;
    var scale = self.scales[0];
    var rstValue = null;
    if (scale.type === 'identity') {
      rstValue = scale.value;
    } else {
      rstValue = self._getAttrValue(scale, value);
    }
    return rstValue;
  };

  /**
   * 根据度量获取属性名
   * @return {Array} dims of this Attribute
   */


  AttributeBase.prototype.getNames = function getNames() {
    var scales = this.scales;
    var names = this.names;
    var length = Math.min(scales.length, names.length);
    var rst = [];
    for (var i = 0; i < length; i++) {
      rst.push(names[i]);
    }
    return rst;
  };

  /**
   * 根据度量获取维度名
   * @return {Array} dims of this Attribute
   */


  AttributeBase.prototype.getFields = function getFields() {
    var scales = this.scales;
    var rst = [];
    Util.each(scales, function (scale) {
      rst.push(scale.field);
    });
    return rst;
  };

  /**
   * 根据名称获取度量
   * @param  {String} name the name of scale
   * @return {Scale} scale
   */


  AttributeBase.prototype.getScale = function getScale(name) {
    var scales = this.scales;
    var names = this.names;
    var index = names.indexOf(name);
    return scales[index];
  };

  /**
   * 映射数据
   * @param {*} param1...paramn 多个数值
   * @return {Array} 映射的值组成的数组
   */


  AttributeBase.prototype.mapping = function mapping() {
    var scales = this.scales;
    var callback = this.callback;

    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    var values = params;
    if (callback) {
      for (var i = 0, len = params.length; i < len; i++) {
        params[i] = this._toOriginParam(params[i], scales[i]);
      }
      values = callback.apply(this, params);
    }
    if (!Util.isArray(values)) {
      values = [values];
    }
    return values;
  };

  // 原始的参数


  AttributeBase.prototype._toOriginParam = function _toOriginParam(param, scale) {
    var rst = param;
    if (!scale.isLinear) {
      if (Util.isArray(param)) {
        rst = [];
        for (var i = 0, len = param.length; i < len; i++) {
          rst.push(toScaleString(scale, param[i]));
        }
      } else {
        rst = toScaleString(scale, param);
      }
    }
    return rst;
  };

  return AttributeBase;
}();

module.exports = AttributeBase;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileOverview 数据调整的基类
 * @author dxq613@gmail.com
 */

var Util = __webpack_require__(0);

var Base = function () {
  Base.prototype._initDefaultCfg = function _initDefaultCfg() {};

  function Base(cfg) {
    _classCallCheck(this, Base);

    this._initDefaultCfg();
    Util.mix(this, cfg);
  }

  Base.prototype.processAdjust = function processAdjust() /* dataArray */{};

  return Base;
}();

module.exports = Base;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview shape util
 * @author dxq613@gmail.com
 */

var Util = __webpack_require__(0);

var ShapeUtil = {
  splitPoints: function splitPoints(obj) {
    var points = [];
    var x = obj.x;
    var y = obj.y;
    y = Util.isArray(y) ? y : [y];
    y.forEach(function (yItem, index) {
      var point = {
        x: Util.isArray(x) ? x[index] : x,
        y: yItem
      };
      points.push(point);
    });
    return points;
  },
  splitArray: function splitArray(data, yField) {
    if (!data.length) return [];
    var arr = [];
    var tmp = [];
    var yValue = void 0;
    Util.each(data, function (obj) {
      yValue = obj._origin ? obj._origin[yField] : obj[yField];
      if (Util.isArray(yValue) && Util.isNil(yValue[0]) || Util.isNil(yValue)) {
        if (tmp.length) {
          arr.push(tmp);
          tmp = [];
        }
      } else {
        tmp.push(obj);
      }
    });

    if (tmp.length) {
      arr.push(tmp);
    }

    return arr;
  }
};

module.exports = ShapeUtil;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = __webpack_require__(0);

var Base = function () {
  Base.prototype._initDefaultCfg = function _initDefaultCfg() {};

  function Base(cfg) {
    _classCallCheck(this, Base);

    this._initDefaultCfg();
    Util.mix(this, cfg);

    var start = void 0;
    var end = void 0;
    if (this.plot) {
      start = this.plot.bl;
      end = this.plot.tr;
      this.start = start;
      this.end = end;
    } else {
      start = this.start;
      end = this.end;
    }
    this.init(start, end);
  }

  Base.prototype.init = function init() {};

  Base.prototype.convertPoint = function convertPoint(point) {
    return point;
  };

  Base.prototype.invertPoint = function invertPoint(point) {
    return point;
  };

  Base.prototype.reset = function reset(plot) {
    this.plot = plot;
    var bl = plot.bl,
        tr = plot.tr;

    this.start = bl;
    this.end = tr;
    this.init(bl, tr);
  };

  return Base;
}();

module.exports = Base;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var Matrix = {
  /**
   * 两个矩阵相乘
   * @param  {Array} m1 左矩阵
   * @param  {Array} m2 右矩阵
   * @return {Array}    返回结果
   */
  multiply: function multiply(m1, m2) {
    var m11 = m1[0] * m2[0] + m1[2] * m2[1];
    var m12 = m1[1] * m2[0] + m1[3] * m2[1];

    var m21 = m1[0] * m2[2] + m1[2] * m2[3];
    var m22 = m1[1] * m2[2] + m1[3] * m2[3];

    var dx = m1[0] * m2[4] + m1[2] * m2[5] + m1[4];
    var dy = m1[1] * m2[4] + m1[3] * m2[5] + m1[5];

    return [m11, m12, m21, m22, dx, dy];
  },

  /**
   * 矩阵反转
   * @param  {Array} m 参数
   * @return {Array}   返回结果
   */
  // invert(m) {
  //   const d = 1 / (m[0] * m[3] - m[1] * m[2]);
  //   const m0 = m[3] * d;
  //   const m1 = -m[1] * d;
  //   const m2 = -m[2] * d;
  //   const m3 = m[0] * d;
  //   const m4 = d * (m[2] * m[5] - m[3] * m[4]);
  //   const m5 = d * (m[1] * m[4] - m[0] * m[5]);
  //   return [ m0, m1, m2, m3, m4, m5 ];
  // },
  scale: function scale(out, m, v) {
    out[0] = m[0] * v[0];
    out[1] = m[1] * v[0];
    out[2] = m[2] * v[1];
    out[3] = m[3] * v[1];
    out[4] = m[4];
    out[5] = m[5];

    return out;
  },
  rotate: function rotate(out, m, radian) {
    var c = Math.cos(radian);
    var s = Math.sin(radian);
    var m11 = m[0] * c + m[2] * s;
    var m12 = m[1] * c + m[3] * s;
    var m21 = m[0] * -s + m[2] * c;
    var m22 = m[1] * -s + m[3] * c;
    out[0] = m11;
    out[1] = m12;
    out[2] = m21;
    out[3] = m22;
    out[4] = m[4];
    out[5] = m[5];

    return out;
  },
  translate: function translate(out, m, v) {
    out[0] = m[0];
    out[1] = m[1];
    out[2] = m[2];
    out[3] = m[3];
    out[4] = m[4] + m[0] * v[0] + m[2] * v[1];
    out[5] = m[5] + m[1] * v[0] + m[3] * v[1];
    return out;
  },
  transform: function transform(m, actions) {
    var out = [].concat(m);
    for (var i = 0, len = actions.length; i < len; i++) {
      var action = actions[i];
      switch (action[0]) {
        case 't':
          Matrix.translate(out, out, [action[1], action[2]]);
          break;
        case 's':
          Matrix.scale(out, out, [action[1], action[2]]);
          break;
        case 'r':
          Matrix.rotate(out, out, action[1]);
          break;
        default:
          break;
      }
    }

    return out;
  }
};

module.exports = Matrix;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = __webpack_require__(0);
var Global = __webpack_require__(1);
var Vector2 = __webpack_require__(3);

var Abastract = function () {
  Abastract.prototype._initDefaultCfg = function _initDefaultCfg() {
    /**
     * 坐标点
     * @type {Array}
     */
    this.ticks = [];
    /**
     * tick 的配置信息
     * @type {Object}
     */
    this.tickLine = {};
    /**
     * 文本、tick跟坐标轴线的方向，默认是顺时针方向
     * @type {Number}
     */
    this.offsetFactor = 1;
    /**
     * 上层图层
     * @type {container}
     */
    this.frontContainer = null;
    /**
     * 下层图层
     * @type {[type]}
     */
    this.backContainer = null;
    /**
     * 绘制栅格的点
     * @type {Array}
     */
    this.gridPoints = [];
  };

  function Abastract(cfg) {
    _classCallCheck(this, Abastract);

    this._initDefaultCfg();
    Util.mix(this, cfg);
    this.draw();
  }

  Abastract.prototype.draw = function draw() {
    var line = this.line,
        tickLine = this.tickLine,
        label = this.label,
        grid = this.grid;


    grid && this.drawGrid(grid); // 渲染网格
    tickLine && this.drawTicks(tickLine); // 渲染刻度线
    line && this.drawLine(line); // 渲染轴线
    label && this.drawLabels(); // 渲染坐标轴文本
  };

  Abastract.prototype.drawTicks = function drawTicks(tickCfg) {
    var self = this;
    var ticks = self.ticks;
    var length = tickCfg.length; // Change: value 改为 length， 同 G2 统一
    var container = self.getContainer(tickCfg.top);
    Util.each(ticks, function (tick) {
      var start = self.getOffsetPoint(tick.value);
      var end = self.getSidePoint(start, length);
      var shape = container.addShape('line', {
        className: 'axis-tick',
        attrs: Util.mix({
          x1: start.x,
          y1: start.y,
          x2: end.x,
          y2: end.y
        }, tickCfg)
      });
      shape._id = self._id + '-ticks';
    });
  };

  Abastract.prototype.drawLabels = function drawLabels() {
    var self = this;
    var labelOffset = self.labelOffset;
    var labels = self.labels;
    Util.each(labels, function (labelShape) {
      var container = self.getContainer(labelShape.get('top'));
      var start = self.getOffsetPoint(labelShape.get('value'));

      var _self$getSidePoint = self.getSidePoint(start, labelOffset),
          x = _self$getSidePoint.x,
          y = _self$getSidePoint.y;

      labelShape.attr(Util.mix({
        x: x,
        y: y
      }, self.getTextAlignInfo(start, labelOffset), labelShape.get('textStyle')));
      labelShape._id = self._id + '-' + labelShape.attr('text');
      container.add(labelShape);
    });
  };

  Abastract.prototype.drawLine = function drawLine() {};

  Abastract.prototype.drawGrid = function drawGrid(grid) {
    var self = this;
    var gridPoints = self.gridPoints,
        ticks = self.ticks;

    var gridCfg = grid;
    var count = gridPoints.length;

    Util.each(gridPoints, function (subPoints, index) {
      if (Util.isFunction(grid)) {
        var tick = ticks[index] || {};
        gridCfg = Util.mix({}, Global._defaultAxis.grid, grid(tick.text, index, count));
      }

      if (gridCfg) {
        var type = gridCfg.type; // grid 的类型，包含 'line' 以及 'arc'
        var points = subPoints.points;
        var container = self.getContainer(gridCfg.top);
        var shape = void 0;

        if (type === 'arc') {
          var center = self.center,
              startAngle = self.startAngle,
              endAngle = self.endAngle;

          var radius = Vector2.length([points[0].x - center.x, points[0].y - center.y]);
          shape = container.addShape('Arc', {
            className: 'axis-grid',
            attrs: Util.mix({
              x: center.x,
              y: center.y,
              startAngle: startAngle,
              endAngle: endAngle,
              r: radius
            }, gridCfg)
          });
        } else {
          shape = container.addShape('Polyline', {
            className: 'axis-grid',
            attrs: Util.mix({
              points: points
            }, gridCfg)
          });
        }

        shape._id = subPoints._id;
      }
    });
  };

  // 获取坐标轴上的点


  Abastract.prototype.getOffsetPoint = function getOffsetPoint() {};

  // 获取坐标轴上点的向量，极坐标下覆盖此方法


  Abastract.prototype.getAxisVector = function getAxisVector() {};

  // 获取偏移位置的向量


  Abastract.prototype.getOffsetVector = function getOffsetVector(point, offset) {
    var self = this;
    var axisVector = self.getAxisVector(point);
    var normal = Vector2.normalize([], axisVector);
    var factor = self.offsetFactor;
    var verticalVector = [normal[1] * -1 * factor, normal[0] * factor];
    return Vector2.scale([], verticalVector, offset);
  };

  // 获取坐标轴边上的点


  Abastract.prototype.getSidePoint = function getSidePoint(point, offset) {
    var self = this;
    var offsetVector = self.getOffsetVector(point, offset);
    return {
      x: point.x + offsetVector[0],
      y: point.y + offsetVector[1]
    };
  };

  // 获取文本，水平和垂直方向的对齐方式


  Abastract.prototype.getTextAlignInfo = function getTextAlignInfo(point, offset) {
    var self = this;
    var offsetVector = self.getOffsetVector(point, offset);
    var align = void 0;
    var baseLine = void 0;
    if (offsetVector[0] > 0) {
      align = 'left';
    } else if (offsetVector[0] < 0) {
      align = 'right';
    } else {
      align = 'center';
    }
    if (offsetVector[1] > 0) {
      baseLine = 'top';
    } else if (offsetVector[1] < 0) {
      baseLine = 'bottom';
    } else {
      baseLine = 'middle';
    }
    return {
      textAlign: align,
      textBaseline: baseLine
    };
  };

  Abastract.prototype.getContainer = function getContainer(isTop) {
    var frontContainer = this.frontContainer,
        backContainer = this.backContainer;

    return isTop ? frontContainer : backContainer;
  };

  return Abastract;
}();

module.exports = Abastract;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = __webpack_require__(0);
var MatrixUtil = __webpack_require__(14);
var Vector2 = __webpack_require__(3);

// 是否未改变
function isUnchanged(m) {
  return m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1 && m[4] === 0 && m[5] === 0;
}

var ALIAS_ATTRS_MAP = {
  stroke: 'strokeStyle',
  fill: 'fillStyle',
  opacity: 'globalAlpha'
};

var SHAPE_ATTRS = ['fillStyle', 'font', 'globalAlpha', 'lineCap', 'lineWidth', 'lineJoin', 'miterLimit', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'strokeStyle', 'textAlign', 'textBaseline', 'lineDash'];

var CLIP_SHAPES = ['circle', 'sector', 'polygon', 'rect', 'polyline'];

var Element = function () {
  Element.prototype._initProperties = function _initProperties() {
    this._attrs = {
      zIndex: 0,
      visible: true,
      destroyed: false
    };
  };

  function Element(cfg) {
    _classCallCheck(this, Element);

    this._initProperties();
    Util.mix(this._attrs, cfg);

    var attrs = this._attrs.attrs;
    if (attrs) {
      // 初始化图形属性
      this.initAttrs(attrs);
    }

    this.initTransform(); // 初始化变换
  }

  Element.prototype.get = function get(name) {
    return this._attrs[name];
  };

  Element.prototype.set = function set(name, value) {
    this._attrs[name] = value;
  };

  Element.prototype.initAttrs = function initAttrs(attrs) {
    this.attr(Util.mix(this.getDefaultAttrs(), attrs));
  };

  Element.prototype.getDefaultAttrs = function getDefaultAttrs() {
    return {};
  };

  Element.prototype._setAttr = function _setAttr(name, value) {
    var attrs = this._attrs.attrs;
    if (name === 'clip') {
      value = this._setAttrClip(value);
    } else {
      var alias = ALIAS_ATTRS_MAP[name];
      if (alias) {
        attrs[alias] = value;
      }
    }
    attrs[name] = value;
  };

  Element.prototype._getAttr = function _getAttr(name) {
    return this._attrs.attrs[name];
  };

  // _afterAttrsSet() {}

  Element.prototype._setAttrClip = function _setAttrClip(clip) {
    if (clip && CLIP_SHAPES.indexOf(clip._attrs.type) > -1) {
      if (clip.get('canvas') === null) {
        clip = Object.assign({}, clip);
      }
      clip.set('parent', this.get('parent'));
      clip.set('context', this.get('context'));
      return clip;
    }
    return null;
  };

  Element.prototype.attr = function attr(name, value) {
    var self = this;
    if (self.get('destroyed')) return null;
    var argumentsLen = arguments.length;
    if (argumentsLen === 0) {
      return self._attrs.attrs;
    }

    if (Util.isObject(name)) {
      this._attrs.bbox = null; // attr 改变了有可能会导致 bbox 改变，故在此清除
      for (var k in name) {
        self._setAttr(k, name[k]);
      }
      if (self._afterAttrsSet) {
        self._afterAttrsSet();
      }
      return self;
    }
    if (argumentsLen === 2) {
      this._attrs.bbox = null;
      self._setAttr(name, value);
      if (self._afterAttrsSet) {
        self._afterAttrsSet();
      }
      return self;
    }
    return self._getAttr(name);
  };

  Element.prototype.getParent = function getParent() {
    return this.get('parent');
  };

  Element.prototype.draw = function draw(context) {
    if (this.get('destroyed')) {
      return;
    }
    if (this.get('visible')) {
      this.setContext(context);
      this.drawInner(context);
      this.restoreContext(context);
    }
  };

  Element.prototype.setContext = function setContext(context) {
    var clip = this._attrs.attrs.clip;
    context.save();
    if (clip) {
      clip.resetTransform(context);
      clip.createPath(context);
      context.clip();
    }
    this.resetContext(context);
    this.resetTransform(context);
  };

  Element.prototype.restoreContext = function restoreContext(context) {
    context.restore();
  };

  Element.prototype.resetContext = function resetContext(context) {
    var elAttrs = this._attrs.attrs;
    if (!this.get('isGroup')) {
      for (var k in elAttrs) {
        if (SHAPE_ATTRS.indexOf(k) > -1) {
          // 非canvas属性不附加
          var v = elAttrs[k];
          if (k === 'lineDash' && context.setLineDash && v) {
            context.setLineDash(v);
          } else {
            context[k] = v;
          }
        }
      }
    }
  };

  Element.prototype.hasFill = function hasFill() {
    return this.get('canFill') && this._attrs.attrs.fillStyle;
  };

  Element.prototype.hasStroke = function hasStroke() {
    return this.get('canStroke') && this._attrs.attrs.strokeStyle;
  };

  Element.prototype.drawInner = function drawInner() /* context */{};

  Element.prototype.show = function show() {
    this.set('visible', true);
    return this;
  };

  Element.prototype.hide = function hide() {
    this.set('visible', false);
    return this;
  };

  Element.prototype._removeFromParent = function _removeFromParent() {
    var parent = this.get('parent');
    if (parent) {
      var children = parent.get('children');
      Util.Array.remove(children, this);
    }

    return this;
  };

  /**
   * 移除
   * @param  {Boolean} destroy true 表示将自己移除的同时销毁自己，false 表示仅移除自己
   */


  Element.prototype.remove = function remove(destroy) {
    if (destroy) {
      this.destroy();
    } else {
      this._removeFromParent();
    }
  };

  Element.prototype.destroy = function destroy() {
    // 销毁并将自己从父元素中移除（如果有父元素的话）
    var destroyed = this.get('destroyed');

    if (destroyed) {
      return null;
    }

    this._removeFromParent();

    this._attrs = {};
    this.set('destroyed', true);
  };

  Element.prototype.getBBox = function getBBox() {
    return {
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0
    };
  };

  Element.prototype.initTransform = function initTransform() {
    var attrs = this._attrs.attrs || {};
    if (!attrs.matrix) {
      attrs.matrix = [1, 0, 0, 1, 0, 0];
    }
    this._attrs.attrs = attrs;
  };

  Element.prototype.getMatrix = function getMatrix() {
    return this._attrs.attrs.matrix;
  };

  Element.prototype.setMatrix = function setMatrix(m) {
    this._attrs.attrs.matrix = [m[0], m[1], m[2], m[3], m[4], m[5]];
  };

  /**
   * 平移、旋转、缩放
   * @param  {Array} actions 操作集合
   * @return {Element}         返回自身
   */


  Element.prototype.transform = function transform(actions) {
    var matrix = this._attrs.attrs.matrix;
    this._attrs.attrs.matrix = MatrixUtil.transform(matrix, actions);
    return this;
  };

  Element.prototype.setTransform = function setTransform(actions) {
    this._attrs.attrs.matrix = [1, 0, 0, 1, 0, 0];
    return this.transform(actions);
  };

  Element.prototype.translate = function translate(x, y) {
    var matrix = this._attrs.attrs.matrix;
    MatrixUtil.translate(matrix, matrix, [x, y]);
  };

  Element.prototype.rotate = function rotate(rad) {
    var matrix = this._attrs.attrs.matrix;
    MatrixUtil.rotate(matrix, matrix, rad);
  };

  Element.prototype.scale = function scale(sx, sy) {
    var matrix = this._attrs.attrs.matrix;
    MatrixUtil.scale(matrix, matrix, [sx, sy]);
  };

  /**
   * 移动的到位置
   * @param  {Number} x 移动到x
   * @param  {Number} y 移动到y
   */


  Element.prototype.moveTo = function moveTo(x, y) {
    var cx = this._attrs.x || 0; // 当前的x
    var cy = this._attrs.y || 0; // 当前的y
    this.translate(x - cx, y - cy);
    this.set('x', x);
    this.set('y', y);
  };

  Element.prototype.apply = function apply(v) {
    var m = this._attrs.attrs.matrix;
    Vector2.transformMat2d(v, v, m);
    return this;
  };

  Element.prototype.resetTransform = function resetTransform(context) {
    var mo = this._attrs.attrs.matrix;
    // 不改变时
    if (!isUnchanged(mo)) {
      context.transform(mo[0], mo[1], mo[2], mo[3], mo[4], mo[5]);
    }
  };

  return Element;
}();

module.exports = Element;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileOverview Base class of chart and geometry
 * @author dxq613@gmail.com
 */

var Util = __webpack_require__(0);

var Base = function () {
  Base.prototype.getDefaultCfg = function getDefaultCfg() {
    return {};
  };

  function Base(cfg) {
    _classCallCheck(this, Base);

    var attrs = {};
    var defaultCfg = this.getDefaultCfg();
    this._attrs = attrs;
    Util.mix(attrs, defaultCfg, cfg);
  }

  Base.prototype.get = function get(name) {
    return this._attrs[name];
  };

  Base.prototype.set = function set(name, value) {
    this._attrs[name] = value;
  };

  Base.prototype.destroy = function destroy() {
    this._attrs = {};
    this.destroyed = true;
  };

  return Base;
}();

module.exports = Base;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(0);
var Shape = __webpack_require__(2);
var SHAPE_MAP = {}; // 缓存图形类型
var INDEX = '_INDEX';

function getComparer(compare) {
  return function (left, right) {
    var result = compare(left, right);
    return result === 0 ? left[INDEX] - right[INDEX] : result;
  };
}

module.exports = {
  getGroupClass: function getGroupClass() {},


  /**
   * 创建并添加 Shape
   * @param {String} type 添加的 shape 类型
   * @param {Object} cfg  shape 的配置项
   * @return {Shape} 返回创建的 shape 实例
   */
  addShape: function addShape(type) {
    var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var canvas = this.get('canvas');
    var shapeType = SHAPE_MAP[type];
    if (!shapeType) {
      shapeType = Util.upperFirst(type);
      SHAPE_MAP[type] = shapeType;
    }
    cfg.canvas = canvas;
    // cfg.type = type;

    // 设置字体
    if (shapeType === 'Text' && canvas && canvas.get('fontFamily')) {
      cfg.attrs.fontFamily = cfg.attrs.fontFamily || canvas.get('fontFamily');
    }

    var shape = new Shape[shapeType](cfg);
    this.add(shape);
    return shape;
  },


  /**
   * 创建并添加 Group 组
   * @param {Object|null} cfg 配置信息
   * @return {Group} 返回创建的 Group 实例
   */
  addGroup: function addGroup(cfg) {
    var canvas = this.get('canvas');
    var groupClass = this.getGroupClass();
    cfg = Util.mix({}, cfg);
    cfg.canvas = canvas;
    cfg.parent = this;
    var rst = new groupClass(cfg);
    this.add(rst);
    return rst;
  },


  /**
   * 判断是否包含 item
   * @param  {Shape|Group} item shape 或者 group 实例
   * @return {Boolean}      true 表示包含，false 表示不包含
   */
  contain: function contain(item) {
    var children = this.get('children');
    return children.indexOf(item) > -1;
  },


  /**
   * 按照各个元素的 zIndex 进行从大到小的排序
   * @return {Canvas|Group} 返回自己
   */
  sort: function sort() {
    var children = this.get('children');
    // 必须保证稳定排序
    for (var i = 0, len = children.length; i < len; i++) {
      var child = children[i];
      child[INDEX] = i;
    }

    children.sort(getComparer(function (obj1, obj2) {
      return obj1.get('zIndex') - obj2.get('zIndex');
    }));

    return this;
  },


  /**
   * 清除所有的元素
   * @return {Canvas|Group} 返回自己
   */
  clear: function clear() {
    var children = this.get('children');

    while (children.length !== 0) {
      children[children.length - 1].remove(true);
    }
    return this;
  },


  /**
   * 添加元素
   * @param {Array|Group|Shape} items group 实例或者 shape 实例或者他们的数组集合
   * @return {Group} 返回自身
   */
  add: function add(items) {
    var self = this;
    var children = self.get('children');
    if (!Util.isArray(items)) {
      items = [items];
    }

    for (var i = 0, len = items.length; i < len; i++) {
      var item = items[i];
      var parent = item.get('parent');
      if (parent) {
        var descendants = parent.get('children');
        Util.Array.remove(descendants, item);
      }
      self._setEvn(item);
      children.push(item);
    }

    return self;
  },
  _setEvn: function _setEvn(item) {
    var self = this;
    item._attrs.parent = self;
    item._attrs.context = self._attrs.context;
    item._attrs.canvas = self._attrs.canvas;
    var clip = item._attrs.attrs.clip;
    if (clip) {
      clip.set('parent', self);
      clip.set('context', self.get('context'));
    }
    if (item._attrs.isGroup) {
      var children = item._attrs.children;
      for (var i = 0, len = children.length; i < len; i++) {
        item._setEvn(children[i]);
      }
    }
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Util = __webpack_require__(0);
var Element = __webpack_require__(16);
var Container = __webpack_require__(18);
var Vector2 = __webpack_require__(3);

var Group = function (_Element) {
  _inherits(Group, _Element);

  function Group() {
    _classCallCheck(this, Group);

    return _possibleConstructorReturn(this, _Element.apply(this, arguments));
  }

  Group.prototype._initProperties = function _initProperties() {
    this._attrs = {
      zIndex: 0,
      visible: true,
      destroyed: false,
      isGroup: true,
      children: []
    };
  };

  Group.prototype.drawInner = function drawInner(context) {
    // context = context || this.get('context');
    var children = this.get('children');
    for (var i = 0, len = children.length; i < len; i++) {
      var child = children[i];
      child.draw(context);
    }
    return this;
  };

  /**
   * 获取最小包围盒
   * @return {Object} 返回包围盒
   */


  Group.prototype.getBBox = function getBBox() {
    var self = this;
    var minX = Infinity;
    var maxX = -Infinity;
    var minY = Infinity;
    var maxY = -Infinity;
    var children = self.get('children');
    for (var i = 0, length = children.length; i < length; i++) {
      var child = children[i];
      if (child.get('visible')) {
        var box = child.getBBox();
        if (!box) {
          continue;
        }

        var leftTop = [box.minX, box.minY];
        var leftBottom = [box.minX, box.maxY];
        var rightTop = [box.maxX, box.minY];
        var rightBottom = [box.maxX, box.maxY];
        var matrix = child.attr('matrix');

        Vector2.transformMat2d(leftTop, leftTop, matrix);
        Vector2.transformMat2d(leftBottom, leftBottom, matrix);
        Vector2.transformMat2d(rightTop, rightTop, matrix);
        Vector2.transformMat2d(rightBottom, rightBottom, matrix);

        minX = Math.min(leftTop[0], leftBottom[0], rightTop[0], rightBottom[0], minX);
        maxX = Math.max(leftTop[0], leftBottom[0], rightTop[0], rightBottom[0], maxX);
        minY = Math.min(leftTop[1], leftBottom[1], rightTop[1], rightBottom[1], minY);
        maxY = Math.max(leftTop[1], leftBottom[1], rightTop[1], rightBottom[1], maxY);
      }
    }

    return {
      minX: minX,
      minY: minY,
      maxX: maxX,
      maxY: maxY,
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  };

  Group.prototype.destroy = function destroy() {
    if (this.get('destroyed')) {
      return;
    }
    this.clear();
    _Element.prototype.destroy.call(this);
  };

  return Group;
}(Element);

Util.mix(Group.prototype, Container, {
  getGroupClass: function getGroupClass() {
    return Group;
  }
});

module.exports = Group;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(0);
var Shape = __webpack_require__(5);
var ShapeUtil = __webpack_require__(12);
var Global = __webpack_require__(1);

// register line geom
var Line = Shape.registerFactory('line', {
  defaultShapeType: 'line'
});

function getStyle(cfg) {
  var style = {
    strokeStyle: cfg.color
  };
  if (cfg.size >= 0) {
    style.lineWidth = cfg.size;
  }
  Util.mix(style, cfg.style);

  return Util.mix({}, Global.shape.line, style);
}

function drawLines(cfg, container, style, smooth) {
  var points = cfg.points;
  if (points.length && Util.isArray(points[0].y)) {
    var topPoints = [];
    var bottomPoints = [];
    for (var i = 0, len = points.length; i < len; i++) {
      var point = points[i];
      var tmp = ShapeUtil.splitPoints(point);
      bottomPoints.push(tmp[0]);
      topPoints.push(tmp[1]);
    }
    if (cfg.isInCircle) {
      topPoints.push(topPoints[0]);
      bottomPoints.push(bottomPoints[0]);
    }
    if (cfg.isStack) {
      return container.addShape('Polyline', {
        className: 'line',
        attrs: Util.mix({
          points: topPoints,
          smooth: smooth
        }, style)
      });
    }
    var topShape = container.addShape('Polyline', {
      className: 'line',
      attrs: Util.mix({
        points: topPoints,
        smooth: smooth
      }, style)
    });
    var bottomShape = container.addShape('Polyline', {
      className: 'line',
      attrs: Util.mix({
        points: bottomPoints,
        smooth: smooth
      }, style)
    });

    return [topShape, bottomShape];
  }
  if (cfg.isInCircle) {
    points.push(points[0]);
  }
  return container.addShape('Polyline', {
    className: 'line',
    attrs: Util.mix({
      points: points,
      smooth: smooth
    }, style)
  });
}

var SHAPES = ['line', 'smooth', 'dash'];
Util.each(SHAPES, function (shapeType) {
  Shape.registerShape('line', shapeType, {
    draw: function draw(cfg, container) {
      var smooth = shapeType === 'smooth';
      var style = getStyle(cfg);
      if (shapeType === 'dash') {
        style.lineDash = Global.lineDash;
      }

      return drawLines(cfg, container, style, smooth);
    }
  });
});

module.exports = Line;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview the scale function to process the categories
 * @author dxq613@gmail.com
 */
var Base = __webpack_require__(8);
var Util = __webpack_require__(0);
var catAuto = __webpack_require__(22);

/**
 * 度量的构造函数
 * @class Scale.Category
 */

var Category = function (_Base) {
  _inherits(Category, _Base);

  function Category() {
    _classCallCheck(this, Category);

    return _possibleConstructorReturn(this, _Base.apply(this, arguments));
  }

  Category.prototype._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'cat';
    /**
     * 自动生成标记时的个数
     * @type {Number}
     * @default null
     */
    this.tickCount = null;
    /**
     * 是否分类度量
     * @type {Boolean}
     */
    this.isCategory = true;
    /**
     * 输出的值域
     * @type {Array}
     */
    this.range = [0, 1];
    /**
     * 度量的标记
     * @type {Array}
     */
    this.ticks = null;
    /**
     * 参与度量计算的值，可选项
     * @type {Array}
     */
    this.values = [];
  };

  /**
   * @override
   */


  Category.prototype.init = function init() {
    var self = this;
    var values = self.values;
    var tickCount = self.tickCount;

    Util.each(values, function (v, i) {
      values[i] = v.toString();
    });
    if (!self.ticks) {
      var ticks = values;
      if (tickCount) {
        var temp = catAuto({
          maxCount: tickCount,
          data: values
        });
        ticks = temp.ticks;
      }
      this.ticks = ticks;
    }
  };

  /**
   * @override
   */


  Category.prototype.getText = function getText(value) {
    if (this.values.indexOf(value) === -1 && Util.isNumber(value)) {
      value = this.values[Math.round(value)];
    }

    return _Base.prototype.getText.call(this, value);
  };

  /**
   * @override
   */


  Category.prototype.translate = function translate(value) {
    var index = this.values.indexOf(value);
    if (index === -1 && Util.isNumber(value)) {
      index = value;
    } else if (index === -1) {
      index = NaN;
    }
    return index;
  };
  /**
   * @override
   */


  Category.prototype.scale = function scale(value) {
    var rangeMin = this.rangeMin();
    var rangeMax = this.rangeMax();
    var percent = void 0;

    if (Util.isString(value) || this.values.indexOf(value) !== -1) {
      value = this.translate(value);
    }
    if (this.values.length > 1) {
      percent = value / (this.values.length - 1);
    } else {
      percent = value;
    }
    return rangeMin + percent * (rangeMax - rangeMin);
  };

  /**
   * @override
   */


  Category.prototype.invert = function invert(value) {
    if (Util.isString(value)) {
      // 如果已经是字符串
      return value;
    }
    var min = this.rangeMin();
    var max = this.rangeMax();

    // 归一到 范围内
    if (value < min) {
      value = min;
    }
    if (value > max) {
      value = max;
    }
    var percent = (value - min) / (max - min);
    var index = Math.round(percent * (this.values.length - 1)) % this.values.length;
    index = index || 0;
    return this.values[index];
  };

  return Category;
}(Base);

Base.Cat = Category;
module.exports = Category;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview 计算分类的的坐标点
 * @author dxq613@gmail.com
 */

var Util = __webpack_require__(0);
var MAX_COUNT = 8;

function getSimpleArray(data) {
  var arr = [];
  Util.each(data, function (sub) {
    if (Util.isArray(sub)) {
      arr = arr.concat(sub);
    } else {
      arr.push(sub);
    }
  });
  return arr;
}

module.exports = function (info) {
  var rst = {};
  var ticks = [];
  var tickCount = info.maxCount || MAX_COUNT;

  var categories = getSimpleArray(info.data);
  if (categories.length <= tickCount + tickCount / 2) {
    ticks = [].concat(categories);
  } else {
    var length = categories.length;
    var step = parseInt(length / (tickCount - 1), 10);

    var groups = categories.map(function (e, i) {
      return i % step === 0 ? categories.slice(i, i + step) : null;
    }).filter(function (e) {
      return e;
    });

    ticks.push(categories[0]);
    for (var i = 1, groupLen = groups.length; i < groupLen && i < tickCount - 1; i++) {
      ticks.push(groups[i][0]);
    }

    ticks.push(categories[length - 1]);
  }

  rst.categories = categories;
  rst.ticks = ticks;
  return rst;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview 将折线转换成平滑曲线
 * @author dxq613@gmail.com
 */
var Vector2 = __webpack_require__(3);

function getPoint(v) {
  return [v.x, v.y];
}

function smoothBezier(points, smooth, isLoop, constraint) {
  var cps = [];

  var prevPoint = void 0;
  var nextPoint = void 0;
  var hasConstraint = !!constraint;
  var min = void 0;
  var max = void 0;
  var point = void 0;
  var len = void 0;
  var l = void 0;
  var i = void 0;
  if (hasConstraint) {
    min = [Infinity, Infinity];
    max = [-Infinity, -Infinity];

    for (i = 0, l = points.length; i < l; i++) {
      point = getPoint(points[i]);
      Vector2.min(min, min, point);
      Vector2.max(max, max, point);
    }
    Vector2.min(min, min, constraint[0]);
    Vector2.max(max, max, constraint[1]);
  }

  for (i = 0, len = points.length; i < len; i++) {
    point = getPoint(points[i]);
    if (isLoop) {
      prevPoint = getPoint(points[i ? i - 1 : len - 1]);
      nextPoint = getPoint(points[(i + 1) % len]);
    } else {
      if (i === 0 || i === len - 1) {
        cps.push([point[0], point[1]]);
        continue;
      } else {
        prevPoint = getPoint(points[i - 1]);
        nextPoint = getPoint(points[i + 1]);
      }
    }

    var v = Vector2.sub([], nextPoint, prevPoint);
    Vector2.scale(v, v, smooth);
    var d0 = Vector2.distance(point, prevPoint);
    var d1 = Vector2.distance(point, nextPoint);

    var sum = d0 + d1;
    if (sum !== 0) {
      d0 /= sum;
      d1 /= sum;
    }

    var v1 = Vector2.scale([], v, -d0);
    var v2 = Vector2.scale([], v, d1);

    var cp0 = Vector2.add([], point, v1);
    var cp1 = Vector2.add([], point, v2);

    if (hasConstraint) {
      Vector2.max(cp0, cp0, min);
      Vector2.min(cp0, cp0, max);
      Vector2.max(cp1, cp1, min);
      Vector2.min(cp1, cp1, max);
    }

    cps.push([cp0[0], cp0[1]]);
    cps.push([cp1[0], cp1[1]]);
  }

  if (isLoop) {
    cps.push(cps.shift());
  }
  return cps;
}

function catmullRom2bezier(pointList, z, constraint) {
  var isLoop = !!z;

  var controlPointList = smoothBezier(pointList, 0.4, isLoop, constraint);
  var len = pointList.length;
  var d1 = [];

  var cp1 = void 0;
  var cp2 = void 0;
  var p = void 0;

  for (var i = 0; i < len - 1; i++) {
    cp1 = controlPointList[i * 2];
    cp2 = controlPointList[i * 2 + 1];
    p = pointList[i + 1];
    d1.push(['C', cp1[0], cp1[1], cp2[0], cp2[1], p.x, p.y]);
  }

  if (isLoop) {
    cp1 = controlPointList[len];
    cp2 = controlPointList[len + 1];
    p = pointList[0];

    d1.push(['C', cp1[0], cp1[1], cp2[0], cp2[1], p.x, p.y]);
  }
  return d1;
}

module.exports = {
  smooth: catmullRom2bezier
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base = __webpack_require__(17);
var Plot = __webpack_require__(30);
var Util = __webpack_require__(0);
var Coord = __webpack_require__(31);
var Geom = __webpack_require__(4);
var ScaleController = __webpack_require__(39);
var AxisController = __webpack_require__(45);
var Global = __webpack_require__(1);

var _require = __webpack_require__(6),
    Canvas = _require.Canvas;

function isFullCircle(coord) {
  var startAngle = coord.startAngle;
  var endAngle = coord.endAngle;
  if (!Util.isNil(startAngle) && !Util.isNil(endAngle) && endAngle - startAngle < Math.PI * 2) {
    return false;
  }
  return true;
}

var Chart = function (_Base) {
  _inherits(Chart, _Base);

  Chart.initPlugins = function initPlugins() {
    return {
      _plugins: [],
      _cacheId: 0,
      register: function register(plugins) {
        var p = this._plugins;
        [].concat(plugins).forEach(function (plugin) {
          if (p.indexOf(plugin) === -1) {
            p.push(plugin);
          }
        });

        this._cacheId++;
      },
      unregister: function unregister(plugins) {
        var p = this._plugins;
        [].concat(plugins).forEach(function (plugin) {
          var idx = p.indexOf(plugin);
          if (idx !== -1) {
            p.splice(idx, 1);
          }
        });

        this._cacheId++;
      },
      clear: function clear() {
        this._plugins = [];
        this._cacheId++;
      },
      count: function count() {
        return this._plugins.length;
      },
      getAll: function getAll() {
        return this._plugins;
      },
      notify: function notify(chart, hook, args) {
        var descriptors = this.descriptors(chart);
        var ilen = descriptors.length;
        var i = void 0;
        var descriptor = void 0;
        var plugin = void 0;
        var params = void 0;
        var method = void 0;

        for (i = 0; i < ilen; ++i) {
          descriptor = descriptors[i];
          plugin = descriptor.plugin;
          method = plugin[hook];
          if (typeof method === 'function') {
            params = [chart].concat(args || []);
            if (method.apply(plugin, params) === false) {
              return false;
            }
          }
        }

        return true;
      },
      descriptors: function descriptors(chart) {
        var cache = chart._plugins || (chart._plugins = {});
        if (cache.id === this._cacheId) {
          return cache.descriptors;
        }

        var plugins = [];
        var descriptors = [];

        this._plugins.concat(chart && chart.get('plugins') || []).forEach(function (plugin) {
          var idx = plugins.indexOf(plugin);
          if (idx !== -1) {
            return;
          }

          plugins.push(plugin);
          descriptors.push({
            plugin: plugin
          });
        });

        cache.descriptors = descriptors;
        cache.id = this._cacheId;
        return descriptors;
      }
    };
  };

  Chart.prototype.getDefaultCfg = function getDefaultCfg() {
    return {
      /**
       * 画布的Id
       * @type {String}
       */
      id: null,
      /**
       * 画布中绘制图形的边距
       * @type {Array|Number}
       */
      padding: Global.padding,

      /**
       * 数据
       * @type {Array}
       */
      data: null,
      /**
       * chart 保有的度量
       * @type {Object}
       */
      scales: {},
      /**
       * 坐标系的配置信息
       * @private
       * @type {Object}
       */
      coordCfg: {
        type: 'cartesian'
      },
      /**
       * @private
       * 图层对应的图形
       * @type {Array}
       */
      geoms: null,
      /**
       * 列定义
       * @type {Object}
       */
      colDefs: null,
      pixelRatio: Global.pixelRatio,
      /**
       * 过滤设置
       * @type {Object}
       */
      filters: null,
      appendPadding: Global.appendPadding
    };
  };

  Chart.prototype._getFieldsForLegend = function _getFieldsForLegend() {
    var fields = [];
    var geoms = this.get('geoms');
    Util.each(geoms, function (geom) {
      var attrOptions = geom.get('attrOptions');
      var attrCfg = attrOptions.color;
      if (attrCfg && attrCfg.field && Util.isString(attrCfg.field)) {
        var arr = attrCfg.field.split('*');

        Util.each(arr, function (item) {
          if (fields.indexOf(item) === -1) {
            fields.push(item);
          }
        });
      }
    });
    return fields;
  };

  Chart.prototype._createScale = function _createScale(field, data, sortable) {
    var scaleController = this.get('scaleController');
    return scaleController.createScale(field, data, sortable);
  };

  Chart.prototype._adjustScale = function _adjustScale() {
    var self = this;
    var coord = self.get('coord');
    var xScale = self.getXScale();
    var yScales = self.getYScales();
    var scales = [];

    xScale && scales.push(xScale);
    scales = scales.concat(yScales);
    var inFullCircle = coord.isPolar && isFullCircle(coord);
    var scaleController = self.get('scaleController');
    var colDefs = scaleController.defs;
    Util.each(scales, function (scale) {
      if ((scale.isCategory || scale.isIdentity) && scale.values && !(colDefs[scale.field] && colDefs[scale.field].range)) {
        var count = scale.values.length;
        var range = void 0;
        if (count === 1) {
          range = [0.5, 1]; // 只有一个分类时,防止计算出现 [0.5,0.5]的状态
        } else {
          var widthRatio = 1;
          var offset = 0;
          if (inFullCircle) {
            if (!coord.transposed) {
              range = [0, 1 - 1 / count];
            } else {
              widthRatio = Global.widthRatio.multiplePie;
              offset = 1 / count * widthRatio;
              range = [offset / 2, 1 - offset / 2];
            }
          } else {
            offset = 1 / count * 1 / 2; // 两边留下分类空间的一半
            range = [offset, 1 - offset]; // 坐标轴最前面和最后面留下空白防止绘制柱状图时
          }
        }
        scale.range = range;
      }
    });
  };

  Chart.prototype._removeGeoms = function _removeGeoms() {
    var geoms = this.get('geoms');
    while (geoms.length > 0) {
      var geom = geoms.shift();
      geom.destroy();
    }
  };

  Chart.prototype._clearGeoms = function _clearGeoms() {
    var geoms = this.get('geoms');
    for (var i = 0, length = geoms.length; i < length; i++) {
      var geom = geoms[i];
      geom.clear();
    }
  };

  Chart.prototype._clearInner = function _clearInner() {
    this.set('scales', {});
    this._clearGeoms();

    Chart.plugins.notify(this, 'clearInner'); // TODO
    this.get('axisController') && this.get('axisController').clear();
  };

  Chart.prototype._execFilter = function _execFilter(data) {
    var filters = this.get('filters');
    if (filters) {
      data = data.filter(function (obj) {
        var rst = true;
        Util.each(filters, function (fn, k) {
          if (fn) {
            rst = fn(obj[k], obj);
            if (!rst) {
              return false;
            }
          }
        });
        return rst;
      });
    }
    return data;
  };

  Chart.prototype._initGeoms = function _initGeoms(geoms) {
    var coord = this.get('coord');
    var data = this.get('filteredData');
    for (var i = 0, length = geoms.length; i < length; i++) {
      var geom = geoms[i];
      geom.set('data', data);
      geom.set('coord', coord);
      geom.init();
    }
  };

  Chart.prototype._initCoord = function _initCoord() {
    var plot = this.get('plotRange');
    var coordCfg = Util.mix({}, this.get('coordCfg'), {
      plot: plot
    });
    var type = coordCfg.type;
    var C = Coord[Util.upperFirst(type)] || Coord.Cartesian;
    var coord = new C(coordCfg);
    this.set('coord', coord);
  };

  Chart.prototype._initLayout = function _initLayout() {
    var padding = this.get('margin') || this.get('padding'); // 兼容margin 的写法
    padding = Util.parsePadding(padding);
    var top = padding[0] === 'auto' ? 0 : padding[0];
    var right = padding[1] === 'auto' ? 0 : padding[1];
    var bottom = padding[2] === 'auto' ? 0 : padding[2];
    var left = padding[3] === 'auto' ? 0 : padding[3];

    var width = this.get('width');
    var height = this.get('height');
    var plot = new Plot({
      start: {
        x: left,
        y: top
      },
      end: {
        x: width - right,
        y: height - bottom
      }
    });
    this.set('plotRange', plot);
    this.set('plot', plot);
  };

  Chart.prototype._initCanvas = function _initCanvas() {
    var self = this;
    try {
      var canvas = new Canvas({
        el: self.get('el') || self.get('id'),
        context: self.get('context'),
        pixelRatio: self.get('pixelRatio'),
        width: self.get('width'),
        height: self.get('height'),
        fontFamily: Global.fontFamily
      });
      self.set('canvas', canvas);
      self.set('width', canvas.get('width'));
      self.set('height', canvas.get('height'));
    } catch (error) {
      // canvas 创建发生异常
      throw error;
    }
    Chart.plugins.notify(self, 'afterCanvasInit');
    self._initLayout();
  };

  Chart.prototype._initLayers = function _initLayers() {
    var canvas = this.get('canvas');
    this.set('backPlot', canvas.addGroup()); // 默认 zIndex 为 0
    this.set('middlePlot', canvas.addGroup({
      zIndex: 10
    }));
    this.set('frontPlot', canvas.addGroup({
      zIndex: 20
    }));
  };

  Chart.prototype.initColDefs = function initColDefs() {
    var colDefs = this.get('colDefs');
    if (colDefs) {
      var scaleController = this.get('scaleController');
      Util.mix(scaleController.defs, colDefs);
    }
  };

  Chart.prototype._init = function _init() {
    var self = this;
    self._initCanvas();
    self._initLayers();
    self.set('geoms', []);
    self.set('scaleController', new ScaleController());
    self.set('axisController', new AxisController({
      frontPlot: self.get('frontPlot').addGroup({
        className: 'axisContainer'
      }),
      backPlot: self.get('backPlot').addGroup({
        className: 'axisContainer'
      }),
      chart: self
    }));
    Chart.plugins.notify(self, 'init'); // TODO: beforeInit afterInit
  };

  function Chart(cfg) {
    _classCallCheck(this, Chart);

    // 附加各种 geometry 对应的方法
    var _this = _possibleConstructorReturn(this, _Base.call(this, cfg));

    var self = _this;
    Util.each(Geom, function (geomConstructor, className) {
      var methodName = Util.lowerFirst(className);
      self[methodName] = function (cfg) {
        var geom = new geomConstructor(cfg);
        self.addGeom(geom);
        return geom;
      };
    });
    self._init();
    return _this;
  }

  /**
   * 设置数据源和数据字段定义
   * @chainable
   * @param  {Array} data 数据集合
   * @param  {Object} colDefs 数据字段定义
   * @return {Chart} 返回当前 chart 的引用
   */


  Chart.prototype.source = function source(data, colDefs) {
    this.set('data', data);
    if (colDefs) {
      this.scale(colDefs);
    }
    return this;
  };

  Chart.prototype.scale = function scale(field, cfg) {
    var colDefs = this.get('colDefs') || {};
    if (Util.isObject(field)) {
      Util.mix(colDefs, field);
    } else {
      colDefs[field] = cfg;
    }

    this.set('colDefs', colDefs);
    this.initColDefs();
    return this;
  };

  /**
   * 设置坐标轴配置项
   * @chainable
   * @param  {String|Boolean} field 坐标轴对应的字段
   * @param  {Object} cfg 坐标轴的配置信息
   * @return {Chart} 返回当前 chart 的引用
   */


  Chart.prototype.axis = function axis(field, cfg) {
    var axisController = this.get('axisController');
    if (!field) {
      axisController.axisCfg = null;
    } else {
      axisController.axisCfg = axisController.axisCfg || {};
      axisController.axisCfg[field] = cfg;
    }
    return this;
  };

  /**
   * 设置坐标系配置项
   * @chainable
   * @param  {String} type 坐标系类型
   * @param  {Object} cfg 配置项
   * @return {Chart} 返回当前 chart 的引用
   */


  Chart.prototype.coord = function coord(type, cfg) {
    if (!type) {
      return;
    }
    var coordCfg = void 0;
    if (Util.isObject(type)) {
      coordCfg = type;
    } else {
      coordCfg = cfg || {};
      coordCfg.type = type;
    }
    this.set('coordCfg', coordCfg);

    return this;
  };

  Chart.prototype.filter = function filter(field, condition) {
    var filters = this.get('filters') || {};
    filters[field] = condition;
    this.set('filters', filters);
  };

  /**
   * 图表绘制
   * @chainable
   * @return {Chart} 返回当前 chart 的引用
   */


  Chart.prototype.render = function render() {
    var self = this;
    var canvas = self.get('canvas');
    var geoms = self.get('geoms');
    // 处理数据
    var data = this.get('data') || [];
    var filteredData = this._execFilter(data);
    this.set('filteredData', filteredData);
    // 初始化坐标系
    self._initCoord();
    // 初始化 geoms
    self._initGeoms(geoms);
    // 调整度量
    self._adjustScale();

    // 绘制坐标轴
    Chart.plugins.notify(self, 'beforeGeomDraw');
    self._renderAxis();

    // 绘制 geom
    for (var i = 0, length = geoms.length; i < length; i++) {
      var geom = geoms[i];
      geom.paint();
    }

    Chart.plugins.notify(self, 'afterGeomDraw');
    canvas.sort();
    this.get('frontPlot').sort();
    Chart.plugins.notify(self, 'beforeCanvasDraw');
    canvas.draw();
    return self;
  };

  /**
   * 清空图表上面的图层
   * @chainable
   * @return {Chart} 返回当前 chart 的引用
   */


  Chart.prototype.clear = function clear() {
    Chart.plugins.notify(this, 'clear'); // TODO: beforeClear afterClear
    this._removeGeoms();
    this._clearInner();
    this.set('filters', null);
    this.set('isUpdate', false);
    var canvas = this.get('canvas');
    canvas.draw();
    return this;
  };

  Chart.prototype.repaint = function repaint() {
    this.set('isUpdate', true);
    Chart.plugins.notify(this, 'repaint');
    this._clearInner();
    this.render();
  };

  Chart.prototype.changeData = function changeData(data) {
    this.set('data', data);
    this.repaint();
  };

  Chart.prototype.changeSize = function changeSize(width, height) {
    if (width) {
      this.set('width', width);
    } else {
      width = this.get('width');
    }

    if (height) {
      this.set('height', height);
    } else {
      height = this.get('height');
    }

    var canvas = this.get('canvas');
    canvas.changeSize(width, height);
    this._initLayout();
    this.repaint();
    return this;
  };

  Chart.prototype.destroy = function destroy() {
    this.clear();
    var canvas = this.get('canvas');
    canvas.destroy();
    Chart.plugins.notify(this, 'afterCanvasDestroyed');
    _Base.prototype.destroy.call(this);
  };

  /**
   * 获取数据对应在画布空间的坐标
   * @param  {Object} record 原始数据
   * @return {Object} 返回对应的画布上的坐标点
   */


  Chart.prototype.getPosition = function getPosition(record) {
    var self = this;
    var coord = self.get('coord');
    var xScale = self.getXScale();
    var yScale = self.getYScales()[0]; // 暂时只取第一个y轴，忽视多轴的情况
    var xField = xScale.field;
    var x = xScale.scale(record[xField]);
    var yField = yScale.field;
    var y = yScale.scale(record[yField]);
    return coord.convertPoint({
      x: x,
      y: y
    });
  };

  /**
   * 获取画布上坐标对应的数据值
   * @param  {Object} point 画布坐标的x,y的值
   * @return {Object} 当前坐标系的数据值
   */


  Chart.prototype.getRecord = function getRecord(point) {
    var self = this;
    var coord = self.get('coord');
    var xScale = self.getXScale();
    var yScale = self.getYScales()[0];
    var invertPoint = coord.invertPoint(point);
    var record = {};
    record[xScale.field] = xScale.invert(invertPoint.x);
    record[yScale.field] = yScale.invert(invertPoint.y);
    return record;
  };
  /**
   * 根据画布坐标获取对应数据集
   * @param  {Object} point 画布坐标的x,y的值
   * @return {Array} 纵向切割交点对应数据集
  **/


  Chart.prototype.getSnapRecords = function getSnapRecords(point) {
    var geom = this.get('geoms')[0];
    var data = [];
    if (geom) {
      // need to judge
      data = geom.getSnapRecords(point);
    }
    return data;
  };

  /**
   * 创建度量
   * @param  {String} field 度量对应的名称
   * @param  {Boolean} sortable 是否需要排序
   * @return {Scale} 度量
   */


  Chart.prototype.createScale = function createScale(field, sortable) {
    var data = this.get('data');
    var filteredData = this.get('filteredData');
    // 过滤导致数据为空时，需要使用全局数据
    // 参与过滤的字段的度量也根据全局数据来生成
    if (filteredData.length) {
      var legendFields = this._getFieldsForLegend();
      if (legendFields.indexOf(field) === -1) {
        data = filteredData;
      }
    }

    var scales = this.get('scales');
    if (!scales[field]) {
      scales[field] = this._createScale(field, data, sortable);
    }
    return scales[field];
  };

  /**
   * @protected
   * 添加几何标记
   * @param {Geom} geom 几何标记
   */


  Chart.prototype.addGeom = function addGeom(geom) {
    var geoms = this.get('geoms');
    var middlePlot = this.get('middlePlot');
    geoms.push(geom);
    geom.set('chart', this);
    geom.set('container', middlePlot.addGroup());
  };

  /**
   * 获取 x 对应的度量
   * @return {Scale} x 对应的度量
   */


  Chart.prototype.getXScale = function getXScale() {
    var self = this;
    var geoms = self.get('geoms');
    var xScale = geoms[0].getXScale();
    return xScale;
  };

  /**
   * 获取 y 对应的度量
   * @return {Array} 返回所有 y 的度量
   */


  Chart.prototype.getYScales = function getYScales() {
    var geoms = this.get('geoms');
    var rst = [];

    Util.each(geoms, function (geom) {
      var yScale = geom.getYScale();
      if (Util.indexOf(rst, yScale) === -1) {
        rst.push(yScale);
      }
    });
    return rst;
  };

  // 注册插件


  Chart.prototype.registerPlugins = function registerPlugins(plugins) {
    var self = this;
    var chartPlugins = [];
    plugins = [].concat(plugins);

    plugins.concat(self.get('plugins') || []).forEach(function (plugin) {
      if (chartPlugins.indexOf(plugin) === -1) {
        plugin.init && plugin.init(self); // 进行初始化
        chartPlugins.push(plugin);
      }
    });
    Chart.plugins._cacheId++;
    self.set('plugins', chartPlugins);
  };

  Chart.prototype._renderAxis = function _renderAxis() {
    var axisController = this.get('axisController');
    var xScale = this.getXScale();
    var yScales = this.getYScales();
    var coord = this.get('coord');
    Chart.plugins.notify(this, 'beforeRenderAxis');
    axisController.createAxis(coord, xScale, yScales);
  };

  Chart.prototype._isAutoPadding = function _isAutoPadding() {
    var padding = this.get('padding');
    if (Util.isArray(padding)) {
      return padding.indexOf('auto') !== -1;
    }
    return padding === 'auto';
  };

  Chart.prototype._updateLayout = function _updateLayout(padding) {
    var width = this.get('width');
    var height = this.get('height');
    var start = {
      x: padding[3],
      y: padding[0]
    };
    var end = {
      x: width - padding[1],
      y: height - padding[2]
    };

    var plot = this.get('plot');
    var coord = this.get('coord');
    plot.reset(start, end);
    coord.reset(plot);
  };

  return Chart;
}(Base);

Chart.plugins = Chart.initPlugins();

module.exports = Chart;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Geom = __webpack_require__(4);
var ShapeUtil = __webpack_require__(12);
var Util = __webpack_require__(0);
__webpack_require__(20);

var Path = function (_Geom) {
  _inherits(Path, _Geom);

  function Path() {
    _classCallCheck(this, Path);

    return _possibleConstructorReturn(this, _Geom.apply(this, arguments));
  }

  /**
   * 获取默认的配置属性
   * @protected
   * @return {Object} 默认属性
   */
  Path.prototype.getDefaultCfg = function getDefaultCfg() {
    var cfg = _Geom.prototype.getDefaultCfg.call(this);
    cfg.type = 'path';
    cfg.shapeType = 'line';
    return cfg;
  };

  Path.prototype.getDrawCfg = function getDrawCfg(obj) {
    var cfg = _Geom.prototype.getDrawCfg.call(this, obj);
    cfg.isStack = this.hasAdjust('stack');
    return cfg;
  };

  Path.prototype.draw = function draw(data, shapeFactory) {
    var self = this;
    var container = self.get('container');
    var yScale = self.getYScale();
    var splitArray = ShapeUtil.splitArray(data, yScale.field);

    var cfg = this.getDrawCfg(data[0]);
    cfg.origin = data; // path,line 等图的origin 是整个序列

    Util.each(splitArray, function (subData, splitedIndex) {
      cfg.splitedIndex = splitedIndex; // 传入分割片段索引 用于生成id
      cfg.points = subData;
      self.drawShape(cfg.shape, data[0], cfg, container, shapeFactory);
    });
  };

  return Path;
}(Geom);

Geom.Path = Path;
module.exports = Path;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview 需要计算所占x轴上的宽度的辅助类
 * @author sima.zhang1990@gmail.com
 * @author dxq613@gmail.com
 */

var Global = __webpack_require__(1);
var Util = __webpack_require__(0);

var SizeMixin = {
  getDefalutSize: function getDefalutSize() {
    var defaultSize = this.get('defaultSize');
    if (!defaultSize) {
      var coord = this.get('coord');
      var xScale = this.getXScale();
      var dataArray = this.get('dataArray');
      var count = xScale.values.length;
      var range = xScale.range;
      var normalizeSize = 1 / count;
      var widthRatio = 1;

      if (coord && coord.isPolar) {
        if (coord.transposed && count > 1) {
          // 极坐标下多层环图
          widthRatio = Global.widthRatio.multiplePie;
        } else {
          widthRatio = Global.widthRatio.rose;
        }
      } else {
        if (xScale.isLinear) {
          normalizeSize *= range[1] - range[0];
        }
        widthRatio = Global.widthRatio.column; // 柱状图要除以2
      }
      normalizeSize *= widthRatio;
      if (this.hasAdjust('dodge')) {
        normalizeSize = normalizeSize / dataArray.length;
      }
      defaultSize = normalizeSize;
      this.set('defaultSize', defaultSize);
    }
    return defaultSize;
  },
  getDimWidth: function getDimWidth(dimName) {
    var coord = this.get('coord');
    var start = coord.convertPoint({
      x: 0,
      y: 0
    });
    var end = coord.convertPoint({
      x: dimName === 'x' ? 1 : 0,
      y: dimName === 'x' ? 0 : 1
    });
    var width = 0;
    if (start && end) {
      width = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
    }
    return width;
  },
  _getWidth: function _getWidth() {
    var width = this.get('_width');
    if (!width) {
      var coord = this.get('coord');
      if (coord && coord.isPolar && !coord.transposed) {
        // 极坐标下 width 为弧长
        width = (coord.endAngle - coord.startAngle) * coord.circleRadius;
      } else {
        width = this.getDimWidth('x'); // 不需要判断transpose
      }
      this.set('_width', width);
    }

    return width;
  },
  _toNormalizedSize: function _toNormalizedSize(size) {
    var width = this._getWidth();
    return size / width;
  },
  _toCoordSize: function _toCoordSize(normalizeSize) {
    var width = this._getWidth();
    return width * normalizeSize;
  },
  getNormalizedSize: function getNormalizedSize(obj) {
    var size = this.getAttrValue('size', obj);
    if (Util.isNil(size)) {
      size = this.getDefalutSize();
    } else {
      size = this._toNormalizedSize(size);
    }
    return size;
  },
  getSize: function getSize(obj) {
    var size = this.getAttrValue('size', obj);
    if (Util.isNil(size)) {
      var normalizeSize = this.getDefalutSize();
      size = this._toCoordSize(normalizeSize);
    }
    return size;
  }
};

module.exports = SizeMixin;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var Core = {};

Core.version = '3.1.7';
Core.Global = __webpack_require__(1);
Core.Chart = __webpack_require__(24);
Core.Shape = __webpack_require__(5);
Core.G = __webpack_require__(6);
Core.Util = __webpack_require__(0);

module.exports = Core;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview 默认皮肤
 * @author dxq613@gail.com
 */
var Util = __webpack_require__(0);
var color1 = '#E8E8E8'; // 坐标轴线、坐标轴网格线的颜色
var color2 = '#808080'; // 字体颜色

var defaultAxis = {
  label: {
    fill: color2,
    fontSize: 10
  },
  line: {
    stroke: color1,
    lineWidth: 1
  },
  grid: {
    type: 'line', // 默认使用线连接
    stroke: color1,
    lineWidth: 1,
    lineDash: [2]
  },
  tickLine: null,
  labelOffset: 7.5
};

var Theme = {
  fontFamily: '"Helvetica Neue", "San Francisco", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", sans-serif',
  defaultColor: '#1890FF',
  pixelRatio: 1,
  padding: 'auto',
  appendPadding: 15,
  colors: ['#1890FF', '#2FC25B', '#FACC14', '#223273', '#8543E0', '#13C2C2', '#3436C7', '#F04864'],
  shapes: {
    line: ['line', 'dash'],
    point: ['circle', 'hollowCircle']
  },
  sizes: [4, 10],
  axis: {
    bottom: Util.mix({}, defaultAxis, {
      grid: null
    }),
    left: Util.mix({}, defaultAxis, {
      line: null
    }),
    right: Util.mix({}, defaultAxis, {
      line: null
    }),
    circle: Util.mix({}, defaultAxis, {
      line: null
    }),
    radius: Util.mix({}, defaultAxis, {
      labelOffset: 4
    })
  },
  shape: {
    line: {
      lineWidth: 2, // 线的默认宽度
      lineJoin: 'round',
      lineCap: 'round'
    },
    point: {
      lineWidth: 0,
      size: 3 // 圆的默认半径
    },
    area: {
      fillOpacity: 0.1
    }
  },
  _defaultAxis: defaultAxis
};

module.exports = Theme;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var DomUtil = void 0;
/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */
var supportsEventListenerOptions = function () {
  var supports = false;
  try {
    var options = Object.defineProperty({}, 'passive', {
      get: function get() {
        supports = true;
      }
    });
    window.addEventListener('e', null, options);
  } catch (e) {
    // continue regardless of error
  }
  return supports;
}();

// Default passive to true as expected by Chrome for 'touchstart' and 'touchend' events.
// https://github.com/chartjs/Chart.js/issues/4287
var eventListenerOptions = supportsEventListenerOptions ? { passive: true } : false;

function createEvent(type, chart, x, y, nativeEvent) {
  return {
    type: type,
    chart: chart,
    native: nativeEvent || null,
    x: x !== undefined ? x : null,
    y: y !== undefined ? y : null
  };
}

function fromNativeEvent(event, chart) {
  // TODO: chart 改成 dom
  var type = event.type;

  var point = {};
  var touches = event.targetTouches;
  if (touches && touches.length > 0) {
    point.x = touches[0].clientX;
    point.y = touches[0].clientY;
  } else {
    point.x = event.clientX;
    point.y = event.clientY;
  }
  var canvas = chart.get('canvas');
  var pos = DomUtil.getRelativePosition(point, canvas);
  return createEvent(type, chart, pos.x, pos.y, event);
}

DomUtil = {
  /* global wx, my, module */
  isWx: (typeof wx === 'undefined' ? 'undefined' : _typeof(wx)) === 'object' && typeof wx.getSystemInfoSync === 'function', // weixin miniprogram
  isMy: (typeof my === 'undefined' ? 'undefined' : _typeof(my)) === 'object' && typeof my.getSystemInfoSync === 'function', // ant miniprogram
  isNode: typeof module !== 'undefined' && typeof module.exports !== 'undefined', // in node
  isBrowser: typeof window !== 'undefined' && typeof window.document !== 'undefined', // in browser
  getPixelRatio: function getPixelRatio() {
    return window && window.devicePixelRatio || 1;
  },
  getStyle: function getStyle(el, property) {
    return el.currentStyle ? el.currentStyle[property] : document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
  },
  getWidth: function getWidth(el) {
    var width = this.getStyle(el, 'width');
    if (width === 'auto') {
      width = el.offsetWidth;
    }
    return parseFloat(width);
  },
  getHeight: function getHeight(el) {
    var height = this.getStyle(el, 'height');
    if (height === 'auto') {
      height = el.offsetHeight;
    }
    return parseFloat(height);
  },
  getDomById: function getDomById(id) {
    if (!id) {
      return null;
    }
    return document.getElementById(id);
  },
  getRelativePosition: function getRelativePosition(point, canvas) {
    var canvasDom = canvas.get('el');

    var _canvasDom$getBoundin = canvasDom.getBoundingClientRect(),
        top = _canvasDom$getBoundin.top,
        right = _canvasDom$getBoundin.right,
        bottom = _canvasDom$getBoundin.bottom,
        left = _canvasDom$getBoundin.left;

    // Scale mouse coordinates into canvas coordinates
    // by following the pattern laid out by 'jerryj' in the comments of
    // http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/


    var paddingLeft = parseFloat(this.getStyle(canvasDom, 'padding-left'));
    var paddingTop = parseFloat(this.getStyle(canvasDom, 'padding-top'));
    var paddingRight = parseFloat(this.getStyle(canvasDom, 'padding-right'));
    var paddingBottom = parseFloat(this.getStyle(canvasDom, 'padding-bottom'));
    var width = right - left - paddingLeft - paddingRight;
    var height = bottom - top - paddingTop - paddingBottom;
    var pixelRatio = canvas.get('pixelRatio');

    // We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
    // the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
    var mouseX = Math.round((point.x - left - paddingLeft) / width * canvasDom.width / pixelRatio);
    var mouseY = Math.round((point.y - top - paddingTop) / height * canvasDom.height / pixelRatio);

    return {
      x: mouseX,
      y: mouseY
    };
  },
  addEventListener: function addEventListener(source, type, listener) {
    DomUtil.isBrowser && source.addEventListener(type, listener, eventListenerOptions);
  },
  removeEventListener: function removeEventListener(source, type, listener) {
    DomUtil.isBrowser && source.removeEventListener(type, listener, eventListenerOptions);
  },
  createEvent: function createEvent(event, chart) {
    return fromNativeEvent(event, chart);
  },
  measureText: function measureText(text, font, ctx) {
    if (!ctx) {
      ctx = document.createElement('canvas').getContext('2d');
    }

    ctx.font = font || '12px sans-serif';
    return ctx.measureText(text);
  }
};

module.exports = DomUtil;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = __webpack_require__(0);

var Plot = function () {
  function Plot(cfg) {
    _classCallCheck(this, Plot);

    Util.mix(this, cfg);
    this._init();
  }

  Plot.prototype._init = function _init() {
    var self = this;
    var start = self.start;
    var end = self.end;
    var xMin = Math.min(start.x, end.x);
    var xMax = Math.max(start.x, end.x);
    var yMin = Math.min(start.y, end.y);
    var yMax = Math.max(start.y, end.y);

    this.tl = {
      x: xMin,
      y: yMin
    };
    this.tr = {
      x: xMax,
      y: yMin
    };
    this.bl = {
      x: xMin,
      y: yMax
    };
    this.br = {
      x: xMax,
      y: yMax
    };
    this.width = xMax - xMin;
    this.height = yMax - yMin;
  };

  /**
   * 重置
   * @param  {Object} start 起始点
   * @param  {Object} end  结束点
   */


  Plot.prototype.reset = function reset(start, end) {
    this.start = start;
    this.end = end;
    this._init();
  };

  /**
   * 点是否在图表的绘制区域内
   * @param  {Nubmer}  x x坐标点
   * @param  {[type]}  y y坐标点
   * @return {Boolean} 是否在绘制区域内
   */


  Plot.prototype.isInRange = function isInRange(x, y) {
    if (Util.isObject(x)) {
      y = x.y;
      x = x.x;
    }
    var tl = this.tl;
    var br = this.br;
    return tl.x <= x && x <= br.x && tl.y <= y && y <= br.y;
  };

  return Plot;
}();

module.exports = Plot;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var Coord = __webpack_require__(13);

__webpack_require__(32);

module.exports = Coord;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base = __webpack_require__(13);

var Cartesian = function (_Base) {
  _inherits(Cartesian, _Base);

  function Cartesian() {
    _classCallCheck(this, Cartesian);

    return _possibleConstructorReturn(this, _Base.apply(this, arguments));
  }

  Cartesian.prototype._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'cartesian';
    this.transposed = false;
    this.isRect = true;
  };

  Cartesian.prototype.init = function init(start, end) {
    this.x = {
      start: start.x,
      end: end.x
    };

    this.y = {
      start: start.y,
      end: end.y
    };
  };

  Cartesian.prototype.convertPoint = function convertPoint(point) {
    var self = this;
    var transposed = self.transposed;
    var xDim = transposed ? 'y' : 'x';
    var yDim = transposed ? 'x' : 'y';
    var x = self.x;
    var y = self.y;
    return {
      x: x.start + (x.end - x.start) * point[xDim],
      y: y.start + (y.end - y.start) * point[yDim]
    };
  };

  Cartesian.prototype.invertPoint = function invertPoint(point) {
    var self = this;
    var transposed = self.transposed;
    var xDim = transposed ? 'y' : 'x';
    var yDim = transposed ? 'x' : 'y';
    var x = self.x;
    var y = self.y;
    var rst = {};
    rst[xDim] = (point.x - x.start) / (x.end - x.start);
    rst[yDim] = (point.y - y.start) / (y.end - y.start);
    return rst;
  };

  return Cartesian;
}(Base);

Base.Cartesian = Cartesian;
Base.Rect = Cartesian;
module.exports = Cartesian;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Position: __webpack_require__(34),
  Shape: __webpack_require__(35),
  Size: __webpack_require__(36),
  Color: __webpack_require__(37)
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Util = __webpack_require__(0);
var Base = __webpack_require__(10);

var Position = function (_Base) {
  _inherits(Position, _Base);

  function Position(cfg) {
    _classCallCheck(this, Position);

    var _this = _possibleConstructorReturn(this, _Base.call(this, cfg));

    _this.names = ['x', 'y'];
    _this.type = 'position';
    return _this;
  }

  Position.prototype.mapping = function mapping(x, y) {
    var scales = this.scales;
    var coord = this.coord;
    var scaleX = scales[0];
    var scaleY = scales[1];
    var rstX = void 0;
    var rstY = void 0;
    var obj = void 0;
    if (Util.isNil(x) || Util.isNil(y)) {
      return [];
    }
    if (Util.isArray(y) && Util.isArray(x)) {
      rstX = [];
      rstY = [];
      for (var i = 0, j = 0, xLen = x.length, yLen = y.length; i < xLen && j < yLen; i++, j++) {
        obj = coord.convertPoint({
          x: scaleX.scale(x[i]),
          y: scaleY.scale(y[j])
        });
        rstX.push(obj.x);
        rstY.push(obj.y);
      }
    } else if (Util.isArray(y)) {
      x = scaleX.scale(x);
      rstY = [];
      Util.each(y, function (yVal) {
        yVal = scaleY.scale(yVal);
        obj = coord.convertPoint({
          x: x,
          y: yVal
        });
        if (rstX && rstX !== obj.x) {
          if (!Util.isArray(rstX)) {
            rstX = [rstX];
          }
          rstX.push(obj.x);
        } else {
          rstX = obj.x;
        }
        rstY.push(obj.y);
      });
    } else if (Util.isArray(x)) {
      y = scaleY.scale(y);
      rstX = [];
      Util.each(x, function (xVal) {
        xVal = scaleX.scale(xVal);
        obj = coord.convertPoint({
          x: xVal,
          y: y
        });
        if (rstY && rstY !== obj.y) {
          if (!Util.isArray(rstY)) {
            rstY = [rstY];
          }
          rstY.push(obj.y);
        } else {
          rstY = obj.y;
        }
        rstX.push(obj.x);
      });
    } else {
      x = scaleX.scale(x);
      y = scaleY.scale(y);
      var point = coord.convertPoint({
        x: x,
        y: y
      });
      rstX = point.x;
      rstY = point.y;
    }
    return [rstX, rstY];
  };

  return Position;
}(Base);

module.exports = Position;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base = __webpack_require__(10);

var Shape = function (_Base) {
  _inherits(Shape, _Base);

  function Shape(cfg) {
    _classCallCheck(this, Shape);

    var _this = _possibleConstructorReturn(this, _Base.call(this, cfg));

    _this.names = ['shape'];
    _this.type = 'shape';
    _this.gradient = null;
    return _this;
  }

  /**
   * @override
   */


  Shape.prototype.getLinearValue = function getLinearValue(percent) {
    var values = this.values;
    var index = Math.round((values.length - 1) * percent);
    return values[index];
  };

  return Shape;
}(Base);

module.exports = Shape;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base = __webpack_require__(10);

var Size = function (_Base) {
  _inherits(Size, _Base);

  function Size(cfg) {
    _classCallCheck(this, Size);

    var _this = _possibleConstructorReturn(this, _Base.call(this, cfg));

    _this.names = ['size'];
    _this.type = 'size';
    _this.gradient = null;
    return _this;
  }

  return Size;
}(Base);

module.exports = Size;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorUtil = __webpack_require__(38);
var Base = __webpack_require__(10);
var Util = __webpack_require__(0);

var Color = function (_Base) {
  _inherits(Color, _Base);

  function Color(cfg) {
    _classCallCheck(this, Color);

    var _this = _possibleConstructorReturn(this, _Base.call(this, cfg));

    _this.names = ['color'];
    _this.type = 'color';
    _this.gradient = null;
    if (Util.isString(_this.values)) {
      _this.linear = true;
    }
    return _this;
  }

  /**
   * @override
   */


  Color.prototype.getLinearValue = function getLinearValue(percent) {
    var gradient = this.gradient;
    if (!gradient) {
      var values = this.values;
      gradient = ColorUtil.gradient(values);
      this.gradient = gradient;
    }
    return gradient(percent);
  };

  return Color;
}(Base);

module.exports = Color;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(0);

// 获取颜色之间的插值
function getValue(start, end, percent, index) {
  var value = start[index] + (end[index] - start[index]) * percent;
  return value;
}

// 数组转换成颜色
function arr2hex(arr) {
  return '#' + toRGBValue(arr[0]) + toRGBValue(arr[1]) + toRGBValue(arr[2]);
}

// 将数值从 0-255 转换成16进制字符串
function toRGBValue(value) {
  value = Math.round(value);
  value = value.toString(16);
  if (value.length === 1) {
    value = '0' + value;
  }
  return value;
}

function calColor(colors, percent) {
  var steps = colors.length - 1;
  var step = Math.floor(steps * percent);
  var left = steps * percent - step;
  var start = colors[step];
  var end = step === steps ? start : colors[step + 1];
  var rgb = arr2hex([getValue(start, end, left, 0), getValue(start, end, left, 1), getValue(start, end, left, 2)]);
  return rgb;
}

// rgb 颜色转换成数组
function hex2arr(str) {
  var arr = [];
  arr.push(parseInt(str.substr(1, 2), 16));
  arr.push(parseInt(str.substr(3, 2), 16));
  arr.push(parseInt(str.substr(5, 2), 16));
  return arr;
}

var colorCache = {
  black: '#000000',
  blue: '#0000ff',
  grey: '#808080',
  green: '#008000',
  orange: '#ffa500',
  pink: '#ffc0cb',
  purple: '#800080',
  red: '#ff0000',
  white: '#ffffff',
  yellow: '#ffff00'
};

var ColorUtil = {
  /**
   * 将颜色转换到 hex 的格式
   * @param  {String} color 颜色
   * @return {String} 将颜色转换到 '#ffffff' 的格式
   */
  toHex: function toHex(color) {
    if (colorCache[color]) {
      return colorCache[color];
    }

    if (color[0] === '#') {
      if (color.length === 7) {
        return color;
      }

      var hex = color.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) {
        return '#' + r + r + g + g + b + b;
      }); // hex3 to hex6
      colorCache[color] = hex;
      return hex;
    }

    // rgb/rgba to hex
    var rst = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    rst.shift();
    rst = arr2hex(rst);
    colorCache[color] = rst;
    return rst;
  },


  hex2arr: hex2arr,

  /**
   * 获取渐变函数
   * @param  {Array} colors 多个颜色
   * @return {String} 颜色值
   */
  gradient: function gradient(colors) {
    var points = [];
    if (Util.isString(colors)) {
      colors = colors.split('-');
    }
    Util.each(colors, function (color) {
      if (color.indexOf('#') === -1) {
        color = ColorUtil.toHex(color);
      }
      points.push(hex2arr(color));
    });
    return function (percent) {
      return calColor(points, percent);
    };
  }
};

module.exports = ColorUtil;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = __webpack_require__(0);
var Global = __webpack_require__(1);
var Scale = __webpack_require__(40);
var SCALE_TYPES_MAP = {
  linear: 'Linear',
  cat: 'Cat',
  timeCat: 'TimeCat',
  identity: 'Identity'
};

function getRange(values) {
  var max = Math.max.apply(null, values);
  var min = Math.min.apply(null, values);
  return {
    min: min,
    max: max
  };
}

var ScaleController = function () {
  function ScaleController(cfg) {
    _classCallCheck(this, ScaleController);

    // defs 列定义
    this.defs = {};
    Util.mix(this, cfg);
  }

  ScaleController.prototype._getDef = function _getDef(field) {
    var defs = this.defs;
    var def = null;
    if (Global.scales[field] || defs[field]) {
      def = Util.mix({}, Global.scales[field]);
      // 处理覆盖属性的问题
      Util.each(defs[field], function (v, k) {
        if (Util.isNil(v)) {
          delete def[k];
        } else {
          def[k] = v;
        }
      });
    }
    return def;
  };

  ScaleController.prototype._getDefaultType = function _getDefaultType(field, data) {
    var type = 'linear';
    var value = Util.Array.firstValue(data, field);
    if (Util.isArray(value)) {
      value = value[0];
    }
    if (Util.isString(value)) {
      type = 'cat';
    }
    return type;
  };

  ScaleController.prototype._getScaleCfg = function _getScaleCfg(type, field, data) {
    var cfg = {
      field: field
    };
    var values = Util.Array.values(data, field);
    cfg.values = values;
    if (type !== 'cat' && type !== 'timeCat') {
      var _getRange = getRange(values),
          min = _getRange.min,
          max = _getRange.max;

      cfg.min = min;
      cfg.max = max;
    }
    return cfg;
  };

  ScaleController.prototype.createScale = function createScale(field, data, sortable) {
    var self = this;
    var def = self._getDef(field);
    var scale = void 0;
    // 如果数据为空直接返回常量度量
    if (!data || !data.length) {
      if (def && def.type) {
        scale = new Scale[SCALE_TYPES_MAP[def.type]](def);
      } else {
        scale = new Scale.Identity({
          value: field,
          field: field.toString(),
          values: [field]
        });
      }
      return scale;
    }
    var firstObj = data[0];
    var firstValue = firstObj[field];
    if (firstValue === null) {
      firstValue = Util.Array.firstValue(data, field);
    }

    if (Util.isNumber(field) || Util.isNil(firstValue) && !def) {
      scale = new Scale.Identity({
        value: field,
        field: field.toString(),
        values: [field]
      });
    } else {
      // 如果已经定义过这个度量
      var type = void 0;
      if (def) {
        type = def.type;
      }
      type = type || self._getDefaultType(field, data);
      var cfg = self._getScaleCfg(type, field, data);
      if (def) {
        Util.mix(cfg, def);
      }
      cfg.sortable = sortable;
      scale = new Scale[SCALE_TYPES_MAP[type]](cfg);
    }
    return scale;
  };

  return ScaleController;
}();

module.exports = ScaleController;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview Scale entry, used to reference all the scales
 * @author dxq613@gmail.com
 */
var Scale = __webpack_require__(8);

__webpack_require__(41);
__webpack_require__(44);
__webpack_require__(21);

module.exports = Scale;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview The measurement of linear data scale function
 * @author dxq613@gmail.com
 */
var Base = __webpack_require__(8);
var Util = __webpack_require__(0);
var numberAuto = __webpack_require__(42);

/**
 * 线性度量
 * @class Scale.Linear
 */

var Linear = function (_Base) {
  _inherits(Linear, _Base);

  function Linear() {
    _classCallCheck(this, Linear);

    return _possibleConstructorReturn(this, _Base.apply(this, arguments));
  }

  Linear.prototype._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'linear';
    this.isLinear = true;
    /**
      * min value of the scale
      * @type {Number}
      * @default null
      */
    this.min = null;
    /**
      * max value of the scale
      * @type {Number}
      * @default null
      */
    this.max = null;
    /**
      * 是否为了用户习惯，优化min,max和ticks，如果进行优化，则会根据生成的ticks调整min,max，否则舍弃(min,max)范围之外的ticks
      * @type {Boolean}
      * @default false
      */
    this.nice = true;
    /**
      * 自动生成标记时的个数
      * @type {Number}
      * @default null
      */
    this.tickCount = null;
    /**
      * 坐标轴点之间的间距，指的是真实数据的差值
      * @type {Number}
      * @default null
      */
    this.tickInterval = null;
    /**
     * 格式化函数,输出文本或者tick时的格式化函数
     * @type {Function}
     */
    this.formatter = null;
    /**
     * 输出的值域
     * @type {Array}
     */
    this.range = [0, 1];
    /**
     * 度量的标记
     * @type {Array}
     */
    this.ticks = null;
    /**
     * 参与度量计算的值，可选项
     * @type {Array}
     */
    this.values = [];
  };

  /**
   * @protected
   * @override
   */


  Linear.prototype.init = function init() {
    var self = this;
    if (!self.ticks) {
      self.min = self.translate(self.min);
      self.max = self.translate(self.max);
      self.initTicks();
    } else {
      var ticks = self.ticks;
      var firstValue = self.translate(ticks[0]);
      var lastValue = self.translate(ticks[ticks.length - 1]);
      if (Util.isNil(self.min) || self.min > firstValue) {
        self.min = firstValue;
      }
      if (Util.isNil(self.max) || self.max < lastValue) {
        self.max = lastValue;
      }
    }
  };

  /**
   * 计算坐标点
   * @protected
   * @return {Array} 计算完成的坐标点
   */


  Linear.prototype.calculateTicks = function calculateTicks() {
    var self = this;
    var min = self.min;
    var max = self.max;
    var count = self.tickCount;
    if (count === 1) {
      throw new Error('linear scale\'tickCount should not be 1');
    }
    var interval = self.tickInterval;
    if (max < min) {
      throw new Error('max: ' + max + ' should not be less than min: ' + min);
    }
    var tmp = numberAuto({
      min: min,
      max: max,
      minCount: count,
      maxCount: count,
      interval: interval
    });
    return tmp.ticks;
  };

  // 初始化ticks


  Linear.prototype.initTicks = function initTicks() {
    var self = this;
    var calTicks = self.calculateTicks();
    if (self.nice) {
      // 如果需要优化显示的tick
      self.ticks = calTicks;
      self.min = calTicks[0];
      self.max = calTicks[calTicks.length - 1];
    } else {
      var ticks = [];
      Util.each(calTicks, function (tick) {
        if (tick >= self.min && tick <= self.max) {
          ticks.push(tick);
        }
      });
      self.ticks = ticks;
    }
  };

  /**
   * @override
   */


  Linear.prototype.scale = function scale(value) {
    if (value === null || value === undefined) {
      return NaN;
    }
    var max = this.max;
    var min = this.min;
    if (max === min) {
      return 0;
    }

    var percent = (value - min) / (max - min);
    var rangeMin = this.rangeMin();
    var rangeMax = this.rangeMax();
    return rangeMin + percent * (rangeMax - rangeMin);
  };

  /**
   * @override
   */


  Linear.prototype.invert = function invert(value) {
    var percent = (value - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
    return this.min + percent * (this.max - this.min);
  };

  return Linear;
}(Base);

Base.Linear = Linear;
module.exports = Linear;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview 自动计算数字坐标轴
 * @author dxq613@gmail.com
 */

var Util = __webpack_require__(0);
var AutoUtil = __webpack_require__(43);
var MIN_COUNT = 5;
var MAX_COUNT = 7;
var INTERVAL_ARRAY = [0, 1, 2, 4, 5, 10];

module.exports = function (info) {
  var min = info.min;
  var max = info.max;
  var interval = info.interval;
  var ticks = [];
  var minCount = info.minCount || MIN_COUNT;
  var maxCount = info.maxCount || MAX_COUNT;
  var avgCount = (minCount + maxCount) / 2;
  var count = void 0;

  if (Util.isNil(min)) {
    min = 0;
  }
  if (Util.isNil(max)) {
    max = 0;
  }
  if (max === min) {
    if (min === 0) {
      max = 1;
    } else {
      if (min > 0) {
        min = 0;
      } else {
        max = 0;
      }
    }
    if (max - min < 5 && !interval && max - min >= 1) {
      interval = 1;
    }
  }

  if (Util.isNil(interval)) {
    // 计算间距
    var temp = (max - min) / (avgCount - 1);
    interval = AutoUtil.snapFactorTo(temp, INTERVAL_ARRAY, 'ceil');
    if (maxCount !== minCount) {
      count = parseInt((max - min) / interval, 10);
      if (count > maxCount) {
        count = maxCount;
      }
      if (count < minCount) {
        count = minCount;
      }
      // 不确定tick的个数时，使得tick偏小
      interval = AutoUtil.snapFactorTo((max - min) / (count - 1), INTERVAL_ARRAY, 'floor');
    } else {
      count = avgCount;
    }
  }
  if (info.interval || maxCount !== minCount) {
    // 校正 max 和 min
    max = AutoUtil.snapMultiple(max, interval, 'ceil'); // 向上逼近
    min = AutoUtil.snapMultiple(min, interval, 'floor'); // 向下逼近
    count = Math.round((max - min) / interval);
    min = Util.fixedBase(min, interval);
    max = Util.fixedBase(max, interval);
  } else {
    avgCount = parseInt(avgCount, 10); // 取整
    var avg = (max + min) / 2;
    var avgTick = AutoUtil.snapMultiple(avg, interval, 'ceil');
    var sideCount = Math.floor((avgCount - 2) / 2);
    var maxTick = avgTick + sideCount * interval;
    var minTick = void 0;
    if (avgCount % 2 === 0) {
      minTick = avgTick - sideCount * interval;
    } else {
      minTick = avgTick - (sideCount + 1) * interval;
    }
    if (maxTick < max) {
      maxTick = maxTick + interval;
    }
    if (minTick > min) {
      minTick = minTick - interval;
    }
    max = Util.fixedBase(maxTick, interval);
    min = Util.fixedBase(minTick, interval);
  }

  ticks.push(min);
  for (var i = 1; i < count; i++) {
    ticks.push(Util.fixedBase(interval * i + min, interval));
  }
  if (ticks[ticks.length - 1] < max) {
    ticks.push(max);
  }
  return {
    min: min,
    max: max,
    interval: interval,
    count: count,
    ticks: ticks
  };
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * @fileOverview 计算方法
 * @author dxq613@gmail.com
 */

// 获取系数
function getFactor(v) {
  var factor = 1;
  if (v < 1) {
    var count = 0;
    while (v < 1) {
      factor = factor / 10;
      v = v * 10;
      count++;
    }
    // 浮点数计算出现问题
    if (factor.toString().length > 20) {
      factor = parseFloat(factor.toFixed(count));
    }
  } else {
    while (v > 10) {
      factor = factor * 10;
      v = v / 10;
    }
  }

  return factor;
}

// 取小于当前值的
function arrayFloor(values, value) {
  var length = values.length;
  if (length === 0) {
    return NaN;
  }

  var pre = values[0];

  if (value < values[0]) {
    return NaN;
  }

  if (value >= values[length - 1]) {
    return values[length - 1];
  }
  for (var i = 1, len = values.length; i < len; i++) {
    if (value < values[i]) {
      break;
    }
    pre = values[i];
  }

  return pre;
}

// 大于当前值的第一个
function arrayCeiling(values, value) {
  var length = values.length;
  if (length === 0) {
    return NaN;
  }
  // var pre = values[0];
  var rst = void 0;
  if (value > values[length - 1]) {
    return NaN;
  }
  if (value < values[0]) {
    return values[0];
  }

  for (var i = 1, len = values.length; i < len; i++) {
    if (value <= values[i]) {
      rst = values[i];
      break;
    }
  }

  return rst;
}

var Util = {
  // 获取逼近的数值
  snapFactorTo: function snapFactorTo(v, arr, snapType) {
    // 假设 v = -512,isFloor = true
    if (isNaN(v)) {
      return NaN;
    }
    var factor = 1; // 计算系数
    if (v !== 0) {
      if (v < 0) {
        factor = -1;
      }
      v = v * factor; // v = 512
      var tmpFactor = getFactor(v);
      factor = factor * tmpFactor; // factor = -100

      v = v / tmpFactor; // v = 5.12
    }
    if (snapType === 'floor') {
      v = Util.snapFloor(arr, v); // v = 5
    } else if (snapType === 'ceil') {
      v = Util.snapCeiling(arr, v); // v = 6
    } else {
      v = Util.snapTo(arr, v); // 四舍五入 5
    }
    var rst = v * factor;
    // 如果出现浮点数计算问题，需要处理一下
    if (Math.abs(factor) < 1 && rst.toString().length > 20) {
      var decimalVal = parseInt(1 / factor);
      var symbol = factor > 0 ? 1 : -1;
      rst = v / decimalVal * symbol;
    }
    return rst;
  },

  // 获取逼近的倍数
  snapMultiple: function snapMultiple(v, base, snapType) {
    var div = void 0;
    if (snapType === 'ceil') {
      div = Math.ceil(v / base);
    } else if (snapType === 'floor') {
      div = Math.floor(v / base);
    } else {
      div = Math.round(v / base);
    }
    return div * base;
  },

  /**
   * 获取逼近的值，用于对齐数据
   * @param  {Array} values   数据集合
   * @param  {Number} value   数值
   * @return {Number} 逼近的值
   */
  snapTo: function snapTo(values, value) {
    // 这里假定values是升序排列
    var floorVal = arrayFloor(values, value);
    var ceilingVal = arrayCeiling(values, value);
    if (isNaN(floorVal) || isNaN(ceilingVal)) {
      if (values[0] >= value) {
        return values[0];
      }
      var last = values[values.length - 1];
      if (last <= value) {
        return last;
      }
    }
    if (Math.abs(value - floorVal) < Math.abs(ceilingVal - value)) {
      return floorVal;
    }
    return ceilingVal;
  },

  /**
   * 获取逼近的最小值，用于对齐数据
   * @param  {Array} values   数据集合
   * @param  {Number} value   数值
   * @return {Number} 逼近的最小值
   */
  snapFloor: function snapFloor(values, value) {
    // 这里假定values是升序排列
    return arrayFloor(values, value);
  },

  /**
   * 获取逼近的最大值，用于对齐数据
   * @param  {Array} values   数据集合
   * @param  {Number} value   数值
   * @return {Number} 逼近的最大值
   */
  snapCeiling: function snapCeiling(values, value) {
    // 这里假定values是升序排列
    return arrayCeiling(values, value);
  }
};

module.exports = Util;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview The data is replaced with constant
 * @author dxq613@gmail.com
 */
var Base = __webpack_require__(8);
var Util = __webpack_require__(0);

var Identity = function (_Base) {
  _inherits(Identity, _Base);

  function Identity() {
    _classCallCheck(this, Identity);

    return _possibleConstructorReturn(this, _Base.apply(this, arguments));
  }

  Identity.prototype._initDefaultCfg = function _initDefaultCfg() {
    this.isIdentity = true;
    this.type = 'identity';
    /**
     * 输出的值域
     * @type {Array}
     */
    this.range = [0, 1];
    /**
     * 常量值
     * @type {*}
     */
    this.value = null;
  };

  /**
   * @override
   */


  Identity.prototype.getText = function getText() {
    return this.value.toString();
  };

  /**
   * @override
   */


  Identity.prototype.scale = function scale(value) {
    if (this.value !== value && Util.isNumber(value)) {
      return value;
    }
    return this.range[0];
  };

  /**
   * @override
   */


  Identity.prototype.invert = function invert() {
    return this.value;
  };

  return Identity;
}(Base);

Base.Identity = Identity;
module.exports = Identity;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = __webpack_require__(0);
var Axis = __webpack_require__(46);
var Global = __webpack_require__(1);

var _require = __webpack_require__(6),
    Shape = _require.Shape;

function formatTicks(ticks) {
  var tmp = ticks.slice(0);
  if (tmp.length > 0) {
    var first = tmp[0];
    var last = tmp[tmp.length - 1];
    if (first.value !== 0) {
      tmp.unshift({
        value: 0
      });
    }
    if (last.value !== 1) {
      tmp.push({
        value: 1
      });
    }
  }

  return tmp;
}

var AxisController = function () {
  function AxisController(cfg) {
    _classCallCheck(this, AxisController);

    this.axisCfg = {};
    this.frontPlot = null;
    this.backPlot = null;
    this.axes = {}; // 存储各个坐标轴的配置
    Util.mix(this, cfg);
  }

  // 对应的坐标轴是否隐藏


  AxisController.prototype._isHide = function _isHide(field) {
    var axisCfg = this.axisCfg;
    return !axisCfg || axisCfg[field] === false;
  };

  AxisController.prototype._getLinePosition = function _getLinePosition(scale, dimType, index, transposed) {
    var position = '';
    var field = scale.field;
    var axisCfg = this.axisCfg;
    if (axisCfg[field] && axisCfg[field].position) {
      position = axisCfg[field].position;
    } else if (dimType === 'x') {
      position = transposed ? 'left' : 'bottom';
    } else if (dimType === 'y') {
      position = index ? 'right' : 'left';
      if (transposed) {
        position = 'bottom';
      }
    }

    return position;
  };

  AxisController.prototype._getLineCfg = function _getLineCfg(coord, dimType, position) {
    var start = void 0;
    var end = void 0;
    var factor = 1; // 文本的对齐方式，是顺时针方向还是逆时针方向
    if (dimType === 'x') {
      // x 轴的坐标轴，底部的横坐标
      start = {
        x: 0,
        y: 0
      };
      end = {
        x: 1,
        y: 0
      };
    } else {
      // y轴坐标轴
      if (position === 'right') {
        // 多轴的情况
        start = {
          x: 1,
          y: 0
        };
        end = {
          x: 1,
          y: 1
        };
      } else {
        // 单个y轴，或者第一个y轴
        start = {
          x: 0,
          y: 0
        };
        end = {
          x: 0,
          y: 1
        };
        factor = -1;
      }
    }
    if (coord.transposed) {
      factor *= -1;
    }

    return {
      offsetFactor: factor,
      start: coord.convertPoint(start),
      end: coord.convertPoint(end)
    };
  };

  AxisController.prototype._getCircleCfg = function _getCircleCfg(coord) {
    return {
      startAngle: coord.startAngle,
      endAngle: coord.endAngle,
      center: coord.center,
      radius: coord.circleRadius
    };
  };

  AxisController.prototype._getRadiusCfg = function _getRadiusCfg(coord) {
    var transposed = coord.transposed;
    var start = void 0;
    var end = void 0;
    if (transposed) {
      start = { x: 0, y: 0 };
      end = { x: 1, y: 0 };
    } else {
      start = { x: 0, y: 0 };
      end = { x: 0, y: 1 };
    }
    return {
      offsetFactor: -1,
      start: coord.convertPoint(start),
      end: coord.convertPoint(end)
    };
  };

  AxisController.prototype._getAxisCfg = function _getAxisCfg(coord, scale, verticalScale, dimType, defaultCfg) {
    var self = this;
    var axisCfg = this.axisCfg;
    var ticks = scale.getTicks();

    var cfg = Util.deepMix({
      ticks: ticks,
      frontContainer: this.frontPlot,
      backContainer: this.backPlot
    }, defaultCfg, axisCfg[scale.field]);

    var labels = [];
    var label = cfg.label;
    var count = ticks.length;
    var maxWidth = 0;
    var maxHeight = 0;
    var labelCfg = label;

    Util.each(ticks, function (tick, index) {
      if (Util.isFunction(label)) {
        // 文本的配置项动态可配置
        var executedLabel = label(tick.text, index, count);
        if (executedLabel) {
          labelCfg = Util.mix({}, Global._defaultAxis.label, executedLabel);
        } else {
          labelCfg = null;
        }
      }
      if (labelCfg) {
        var textStyle = {};
        if (labelCfg.textAlign) {
          textStyle.textAlign = labelCfg.textAlign;
        }
        if (labelCfg.textBaseline) {
          textStyle.textBaseline = labelCfg.textBaseline;
        }
        var axisLabel = new Shape.Text({
          className: 'axis-label',
          attrs: Util.mix({
            x: 0,
            y: 0,
            text: tick.text,
            fontFamily: self.chart.get('canvas').get('fontFamily') // 保持字体一致
          }, labelCfg),
          value: tick.value,
          textStyle: textStyle,
          top: labelCfg.top,
          context: self.chart.get('canvas').get('context')
        });
        labels.push(axisLabel);

        var _axisLabel$getBBox = axisLabel.getBBox(),
            width = _axisLabel$getBBox.width,
            height = _axisLabel$getBBox.height;

        maxWidth = Math.max(maxWidth, width);
        maxHeight = Math.max(maxHeight, height);
      }
    });

    cfg.labels = labels;
    cfg.maxWidth = maxWidth;
    cfg.maxHeight = maxHeight;
    return cfg;
  };

  AxisController.prototype._createAxis = function _createAxis(coord, scale, verticalScale, dimType) {
    var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';

    var self = this;
    var coordType = coord.type;
    var transposed = coord.transposed;
    var type = void 0;
    var key = void 0;
    var defaultCfg = void 0;
    if (coordType === 'cartesian' || coordType === 'rect') {
      // 直角坐标系下
      var position = self._getLinePosition(scale, dimType, index, transposed);
      defaultCfg = Global.axis[position];
      defaultCfg.position = position;
      type = 'Line';
      key = position;
    } else {
      // 极坐标系下
      if (dimType === 'x' && !transposed || dimType === 'y' && transposed) {
        // 圆形坐标轴
        defaultCfg = Global.axis.circle;
        type = 'Circle';
        key = 'circle';
      } else {
        // 半径坐标轴
        defaultCfg = Global.axis.radius;
        type = 'Line';
        key = 'radius';
      }
    }
    var cfg = self._getAxisCfg(coord, scale, verticalScale, dimType, defaultCfg); // 坐标轴的配置项
    cfg.type = type;
    cfg.dimType = dimType;
    cfg.verticalScale = verticalScale;
    cfg.index = index;
    this.axes[key] = cfg;
  };

  AxisController.prototype.createAxis = function createAxis(coord, xScale, yScales) {
    var self = this;
    if (xScale && !self._isHide(xScale.field)) {
      self._createAxis(coord, xScale, yScales[0], 'x'); // 绘制 x 轴
    }
    Util.each(yScales, function (yScale, index) {
      if (!self._isHide(yScale.field)) {
        self._createAxis(coord, yScale, xScale, 'y', index);
      }
    });

    var axes = this.axes;
    var chart = self.chart;
    if (chart._isAutoPadding()) {
      var userPadding = Util.parsePadding(chart.get('padding'));
      var appendPadding = chart.get('appendPadding');
      var legendRange = chart.get('legendRange') || {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };

      var padding = [userPadding[0] === 'auto' ? legendRange.top + appendPadding * 2 : userPadding[0], userPadding[1] === 'auto' ? legendRange.right + appendPadding : userPadding[1], userPadding[2] === 'auto' ? legendRange.bottom + appendPadding : userPadding[2], userPadding[3] === 'auto' ? legendRange.left + appendPadding : userPadding[3]];

      if (coord.isPolar) {
        // 极坐标
        var circleAxis = axes.circle;
        if (circleAxis) {
          var maxHeight = circleAxis.maxHeight,
              maxWidth = circleAxis.maxWidth,
              labelOffset = circleAxis.labelOffset;

          padding[0] += maxHeight + labelOffset;
          padding[1] += maxWidth + labelOffset;
          padding[2] += maxHeight + labelOffset;
          padding[3] += maxWidth + labelOffset;
        }
      } else {
        // 直角坐标系
        if (axes.right && userPadding[1] === 'auto') {
          var _axes$right = axes.right,
              _maxWidth = _axes$right.maxWidth,
              _labelOffset = _axes$right.labelOffset;

          padding[1] += _maxWidth + _labelOffset;
        }

        if (axes.left && userPadding[3] === 'auto') {
          var _axes$left = axes.left,
              _maxWidth2 = _axes$left.maxWidth,
              _labelOffset2 = _axes$left.labelOffset;

          padding[3] += _maxWidth2 + _labelOffset2;
        }

        if (axes.bottom && userPadding[2] === 'auto') {
          var _axes$bottom = axes.bottom,
              _maxHeight = _axes$bottom.maxHeight,
              _labelOffset3 = _axes$bottom.labelOffset;

          padding[2] += _maxHeight + _labelOffset3;
        }
      }
      chart.set('padding', padding); // TODO, 需要判断下，changeData 时不变换
      chart._updateLayout(padding);
    }

    Util.each(axes, function (axis) {
      var type = axis.type,
          grid = axis.grid,
          verticalScale = axis.verticalScale,
          ticks = axis.ticks,
          dimType = axis.dimType,
          position = axis.position,
          index = axis.index;

      var appendCfg = void 0;
      if (coord.isPolar) {
        if (type === 'Line') {
          appendCfg = self._getRadiusCfg(coord);
        } else if (type === 'Circle') {
          appendCfg = self._getCircleCfg(coord);
        }
      } else {
        appendCfg = self._getLineCfg(coord, dimType, position);
      }

      if (grid && verticalScale) {
        var gridPoints = [];
        var verticalTicks = formatTicks(verticalScale.getTicks());

        Util.each(ticks, function (tick) {
          var subPoints = [];
          Util.each(verticalTicks, function (verticalTick) {
            var x = dimType === 'x' ? tick.value : verticalTick.value;
            var y = dimType === 'x' ? verticalTick.value : tick.value;
            var point = coord.convertPoint({
              x: x,
              y: y
            });
            subPoints.push(point);
          });

          gridPoints.push({
            points: subPoints,
            _id: 'axis-' + dimType + index + '-grid-' + tick.tickValue
          });
        });
        axis.gridPoints = gridPoints;

        if (coord.isPolar && grid.type === 'arc') {
          axis.center = coord.center;
          axis.startAngle = coord.startAngle;
          axis.endAngle = coord.endAngle;
        }
      }
      appendCfg._id = 'axis-' + dimType;
      if (!Util.isNil(index)) {
        appendCfg._id = 'axis-' + dimType + index;
      }

      new Axis[type](Util.mix(axis, appendCfg));
    });
  };

  AxisController.prototype.clear = function clear() {
    this.axes = {};
    this.frontPlot.clear();
    this.backPlot.clear();
  };

  return AxisController;
}();

module.exports = AxisController;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var Abstract = __webpack_require__(15);

// require('./circle');
__webpack_require__(47);

module.exports = Abstract;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Util = __webpack_require__(0);
var Abstract = __webpack_require__(15);

var Line = function (_Abstract) {
  _inherits(Line, _Abstract);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, _Abstract.apply(this, arguments));
  }

  Line.prototype._initDefaultCfg = function _initDefaultCfg() {
    _Abstract.prototype._initDefaultCfg.call(this);
    this.start = null;
    this.end = null;
  };
  // 获取坐标轴上的点


  Line.prototype.getOffsetPoint = function getOffsetPoint(value) {
    var start = this.start,
        end = this.end;

    return {
      x: start.x + (end.x - start.x) * value,
      y: start.y + (end.y - start.y) * value
    };
  };

  // 获取坐标轴上点的向量，极坐标下覆盖此方法


  Line.prototype.getAxisVector = function getAxisVector() {
    var start = this.start,
        end = this.end;

    return [end.x - start.x, end.y - start.y];
  };

  Line.prototype.drawLine = function drawLine(lineCfg) {
    var container = this.getContainer(lineCfg.top);
    var start = this.start,
        end = this.end;

    container.addShape('line', {
      className: 'axis-line',
      attrs: Util.mix({
        x1: start.x,
        y1: start.y,
        x2: end.x,
        y2: end.y
      }, lineCfg)
    });
  };

  return Line;
}(Abstract);

Abstract.Line = Line;
module.exports = Line;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = __webpack_require__(0);
var Container = __webpack_require__(18);
var Group = __webpack_require__(19);

var Canvas = function () {
  Canvas.prototype.get = function get(name) {
    return this._attrs[name];
  };

  Canvas.prototype.set = function set(name, value) {
    this._attrs[name] = value;
  };

  function Canvas(cfg) {
    _classCallCheck(this, Canvas);

    this._attrs = Util.mix({
      type: 'canvas',
      children: []
    }, cfg);
    this._initPixelRatio();
    this._initCanvas();
  }

  Canvas.prototype._initPixelRatio = function _initPixelRatio() {
    var pixelRatio = this.get('pixelRatio');
    if (!pixelRatio) {
      this.set('pixelRatio', Util.getPixelRatio());
    }
  };

  Canvas.prototype._beforeDraw = function _beforeDraw() {
    var context = this._attrs.context;
    var el = this._attrs.el;
    !Util.isWx && !Util.isMy && context && context.clearRect(0, 0, el.width, el.height);
  };

  Canvas.prototype._initCanvas = function _initCanvas() {
    var self = this;
    var el = self.get('el');
    var context = self.get('context');
    var canvas = void 0;

    if (context) {
      // CanvasRenderingContext2D
      canvas = context.canvas;
    } else if (Util.isString(el)) {
      // HTMLElement's id
      canvas = Util.getDomById(el);
    } else {
      // HTMLElement
      canvas = el;
    }

    if (!canvas) {
      throw new Error('Please specify the id or el of the chart!');
    }

    if (context && canvas && !canvas.getContext) {
      canvas.getContext = function () {
        return context;
      };
    }

    var width = self.get('width');
    if (!width) {
      width = Util.getWidth(canvas);
    }

    var height = self.get('height');
    if (!height) {
      height = Util.getHeight(canvas);
    }

    self.set('canvas', this);
    self.set('el', canvas);
    self.set('context', context || canvas.getContext('2d'));
    self.changeSize(width, height);
  };

  /**
   * 改变 canvas 的宽高
   * @param  {Number} width  宽度
   * @param  {Number} height 高度
   */


  Canvas.prototype.changeSize = function changeSize(width, height) {
    var pixelRatio = this.get('pixelRatio');
    var canvasDOM = this.get('el');

    if (Util.isBrowser) {
      canvasDOM.style.width = width + 'px';
      canvasDOM.style.height = height + 'px';
    }

    if (!Util.isWx && !Util.isMy) {
      canvasDOM.width = width * pixelRatio;
      canvasDOM.height = height * pixelRatio;

      if (pixelRatio !== 1) {
        var ctx = this.get('context');
        ctx.scale(pixelRatio, pixelRatio);
      }
    }

    this.set('width', width);
    this.set('height', height);
  };

  /**
   * 获取 canvas 对应 dom 元素的宽度
   * @return {Number} 返回宽度
   */


  Canvas.prototype.getWidth = function getWidth() {
    var pixelRatio = this.get('pixelRatio');
    var width = this.get('width');
    return width * pixelRatio;
  };

  /**
   * 获取 canvas 对应 dom 元素的高度
   * @return {Number} 返回高度
   */


  Canvas.prototype.getHeight = function getHeight() {
    var pixelRatio = this.get('pixelRatio');
    var height = this.get('height');
    return height * pixelRatio;
  };

  /**
   * 将窗口坐标转变成 canvas 坐标
   * @param  {Number} clientX 窗口x坐标
   * @param  {Number} clientY 窗口y坐标
   * @return {Object} canvas坐标
   */


  Canvas.prototype.getPointByClient = function getPointByClient(clientX, clientY) {
    var el = this.get('el');
    var bbox = el.getBoundingClientRect();
    var width = bbox.right - bbox.left;
    var height = bbox.bottom - bbox.top;
    return {
      x: (clientX - bbox.left) * (el.width / width),
      y: (clientY - bbox.top) * (el.height / height)
    };
  };

  Canvas.prototype.draw = function draw() {
    var self = this;
    if (self._attrs.destroyed) {
      return;
    }
    self._beforeDraw();
    try {
      var context = self._attrs.context;
      var children = self._attrs.children;
      for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        child.draw(context);
      }

      if (Util.isWx || Util.isMy) {
        context.draw();
      }
    } catch (ev) {
      // 绘制时异常，中断重绘
      console.warn('error in draw canvas, detail as:');
      console.warn(ev);
    }
  };

  Canvas.prototype.destroy = function destroy() {
    if (this.get('destroyed')) {
      return;
    }
    this.clear();
    this._attrs = {};
    this.set('destroyed', true);
  };

  return Canvas;
}();

Util.mix(Canvas.prototype, Container, {
  getGroupClass: function getGroupClass() {
    return Group;
  }
});

module.exports = Canvas;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Util = __webpack_require__(0);
var Shape = __webpack_require__(2);

var Rect = function (_Shape) {
  _inherits(Rect, _Shape);

  function Rect() {
    _classCallCheck(this, Rect);

    return _possibleConstructorReturn(this, _Shape.apply(this, arguments));
  }

  Rect.prototype._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);
    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'rect';
  };

  Rect.prototype.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      radius: 0,
      lineWidth: 0
    };
  };

  Rect.prototype.createPath = function createPath(context) {
    var self = this;
    var attrs = self.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        width = attrs.width,
        height = attrs.height;


    context.beginPath();
    var radius = attrs.radius;
    if (!radius || !(width * height)) {
      context.rect(x, y, width, height);
    } else {
      radius = Util.parsePadding(radius);
      context.moveTo(x + radius[0], y);
      context.lineTo(x + width - radius[1], y);
      context.arc(x + width - radius[1], y + radius[1], radius[1], -Math.PI / 2, 0, false);
      context.lineTo(x + width, y + height - radius[2]);
      context.arc(x + width - radius[2], y + height - radius[2], radius[2], 0, Math.PI / 2, false);
      context.lineTo(x + radius[3], y + height);
      context.arc(x + radius[3], y + height - radius[3], radius[3], Math.PI / 2, Math.PI, false);
      context.lineTo(x, y + radius[0]);
      context.arc(x + radius[0], y + radius[0], radius[0], Math.PI, Math.PI * 3 / 2, false);
      context.closePath();
    }
  };

  Rect.prototype.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        width = attrs.width,
        height = attrs.height;

    return {
      minX: x,
      minY: y,
      maxX: x + width,
      maxY: y + height
    };
  };

  return Rect;
}(Shape);

Shape.Rect = Rect;
module.exports = Rect;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shape = __webpack_require__(2);

var Circle = function (_Shape) {
  _inherits(Circle, _Shape);

  function Circle() {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, _Shape.apply(this, arguments));
  }

  Circle.prototype._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);
    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'circle';
  };

  Circle.prototype.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      r: 0,
      lineWidth: 0
    };
  };

  Circle.prototype.createPath = function createPath(context) {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        r = attrs.r;

    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, false);
    context.closePath();
  };

  Circle.prototype.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        r = attrs.r;


    return {
      minX: x - r,
      maxX: x + r,
      minY: y - r,
      maxY: y + r
    };
  };

  return Circle;
}(Shape);

Shape.Circle = Circle;
module.exports = Circle;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shape = __webpack_require__(2);
var bbox = __webpack_require__(7);

var Line = function (_Shape) {
  _inherits(Line, _Shape);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, _Shape.apply(this, arguments));
  }

  Line.prototype._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);
    this._attrs.canStroke = true;
    this._attrs.type = 'line';
  };

  Line.prototype.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      lineWidth: 1
    };
  };

  Line.prototype.createPath = function createPath(context) {
    var attrs = this.get('attrs');
    var x1 = attrs.x1,
        y1 = attrs.y1,
        x2 = attrs.x2,
        y2 = attrs.y2;


    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
  };

  Line.prototype.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x1 = attrs.x1,
        y1 = attrs.y1,
        x2 = attrs.x2,
        y2 = attrs.y2;

    return bbox.getBBoxFromLine(x1, y1, x2, y2);
  };

  return Line;
}(Shape);

Shape.Line = Line;
module.exports = Line;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shape = __webpack_require__(2);
var bbox = __webpack_require__(7);

var Polygon = function (_Shape) {
  _inherits(Polygon, _Shape);

  function Polygon() {
    _classCallCheck(this, Polygon);

    return _possibleConstructorReturn(this, _Shape.apply(this, arguments));
  }

  Polygon.prototype._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);
    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'polygon';
  };

  Polygon.prototype.getDefaultAttrs = function getDefaultAttrs() {
    return {
      points: null,
      lineWidth: 0
    };
  };

  Polygon.prototype.createPath = function createPath(context) {
    var self = this;
    var attrs = self.get('attrs');
    var points = attrs.points;

    context.beginPath();

    for (var i = 0, len = points.length; i < len; i++) {
      var point = points[i];
      if (i === 0) {
        context.moveTo(point.x, point.y);
      } else {
        context.lineTo(point.x, point.y);
      }
    }
    context.closePath();
  };

  Polygon.prototype.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var points = attrs.points;

    return bbox.getBBoxFromPoints(points);
  };

  return Polygon;
}(Shape);

Shape.Polygon = Polygon;
module.exports = Polygon;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shape = __webpack_require__(2);
var Smooth = __webpack_require__(23);
var bbox = __webpack_require__(7);

var Polyline = function (_Shape) {
  _inherits(Polyline, _Shape);

  function Polyline() {
    _classCallCheck(this, Polyline);

    return _possibleConstructorReturn(this, _Shape.apply(this, arguments));
  }

  Polyline.prototype._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);
    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'polyline';
  };

  Polyline.prototype.getDefaultAttrs = function getDefaultAttrs() {
    return {
      points: null,
      lineWidth: 1,
      smooth: false
    };
  };

  Polyline.prototype.createPath = function createPath(context) {
    var self = this;
    var attrs = self.get('attrs');
    var points = attrs.points,
        smooth = attrs.smooth;


    context.beginPath();
    context.moveTo(points[0].x, points[0].y);
    if (smooth) {
      var constaint = [[0, 0], [1, 1]];
      var sps = Smooth.smooth(points, false, constaint);
      for (var i = 0, n = sps.length; i < n; i++) {
        var sp = sps[i];
        context.bezierCurveTo(sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]);
      }
    } else {
      var _i = void 0;
      var l = void 0;
      for (_i = 1, l = points.length - 1; _i < l; _i++) {
        context.lineTo(points[_i].x, points[_i].y);
      }
      context.lineTo(points[l].x, points[l].y);
    }
  };

  Polyline.prototype.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var points = attrs.points,
        smooth = attrs.smooth;


    if (smooth) {
      var newPoints = [];
      var constaint = [[0, 0], [1, 1]];
      var sps = Smooth.smooth(points, false, constaint);
      for (var i = 0, n = sps.length; i < n; i++) {
        var sp = sps[i];
        if (i === 0) {
          newPoints.push([points[0].x, points[0].y, sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]]);
        } else {
          var lastPoint = sps[i - 1];
          newPoints.push([lastPoint[5], lastPoint[6], sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]]);
        }
      }
      return bbox.getBBoxFromBezierGroup(newPoints);
    }
    return bbox.getBBoxFromPoints(points);
  };

  return Polyline;
}(Shape);

Shape.Polyline = Polyline;
module.exports = Polyline;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shape = __webpack_require__(2);
var bbox = __webpack_require__(7);

var Arc = function (_Shape) {
  _inherits(Arc, _Shape);

  function Arc() {
    _classCallCheck(this, Arc);

    return _possibleConstructorReturn(this, _Shape.apply(this, arguments));
  }

  Arc.prototype._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);
    this._attrs.canStroke = true;
    this._attrs.type = 'arc';
  };

  Arc.prototype.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      r: 0,
      startAngle: 0,
      endAngle: Math.PI * 2,
      clockwise: false,
      lineWidth: 1
    };
  };

  Arc.prototype.createPath = function createPath(context) {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        r = attrs.r,
        startAngle = attrs.startAngle,
        endAngle = attrs.endAngle,
        clockwise = attrs.clockwise;


    context.beginPath();
    context.arc(x, y, r, startAngle, endAngle, clockwise);
  };

  Arc.prototype.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        r = attrs.r,
        startAngle = attrs.startAngle,
        endAngle = attrs.endAngle,
        clockwise = attrs.clockwise;


    return bbox.getBBoxFromArc(x, y, r, startAngle, endAngle, clockwise);
  };

  return Arc;
}(Shape);

Shape.Arc = Arc;
module.exports = Arc;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shape = __webpack_require__(2);
var bbox = __webpack_require__(7);

var Sector = function (_Shape) {
  _inherits(Sector, _Shape);

  function Sector() {
    _classCallCheck(this, Sector);

    return _possibleConstructorReturn(this, _Shape.apply(this, arguments));
  }

  Sector.prototype._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);
    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'sector';
  };

  Sector.prototype.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      lineWidth: 0,
      r: 0,
      r0: 0,
      startAngle: 0,
      endAngle: Math.PI * 2,
      clockwise: false
    };
  };

  Sector.prototype.createPath = function createPath(context) {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        startAngle = attrs.startAngle,
        endAngle = attrs.endAngle,
        r = attrs.r,
        r0 = attrs.r0,
        clockwise = attrs.clockwise;

    context.beginPath();
    var unitX = Math.cos(startAngle);
    var unitY = Math.sin(startAngle);

    context.moveTo(unitX * r0 + x, unitY * r0 + y);
    context.lineTo(unitX * r + x, unitY * r + y);
    context.arc(x, y, r, startAngle, endAngle, clockwise);
    context.lineTo(Math.cos(endAngle) * r0 + x, Math.sin(endAngle) * r0 + y);
    if (r0 !== 0) {
      context.arc(x, y, r0, endAngle, startAngle, !clockwise);
    }
    context.closePath();
  };

  Sector.prototype.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        r = attrs.r,
        r0 = attrs.r0,
        startAngle = attrs.startAngle,
        endAngle = attrs.endAngle,
        clockwise = attrs.clockwise;

    var outerBBox = bbox.getBBoxFromArc(x, y, r, startAngle, endAngle, clockwise);
    var innerBBox = bbox.getBBoxFromArc(x, y, r0, startAngle, endAngle, clockwise);
    return {
      minX: Math.min(outerBBox.minX, innerBBox.minX),
      minY: Math.min(outerBBox.minY, innerBBox.minY),
      maxX: Math.max(outerBBox.maxX, innerBBox.maxX),
      maxY: Math.max(outerBBox.maxY, innerBBox.maxY)
    };
  };

  return Sector;
}(Shape);

Shape.Sector = Sector;
module.exports = Sector;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Util = __webpack_require__(0);
var Shape = __webpack_require__(2);

var textWidthCacheCounter = 0;
var textWidthCache = {};
var TEXT_CACHE_MAX = 5000;

var Text = function (_Shape) {
  _inherits(Text, _Shape);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, _Shape.apply(this, arguments));
  }

  Text.prototype._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);
    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'text';
  };

  Text.prototype.getDefaultAttrs = function getDefaultAttrs() {
    return {
      lineWidth: 0,
      lineCount: 1,
      fontSize: 12,
      fontFamily: 'sans-serif',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontVariant: 'normal',
      textAlign: 'start',
      textBaseline: 'bottom',
      lineHeight: null,
      textArr: null
    };
  };

  Text.prototype._getFontStyle = function _getFontStyle() {
    var attrs = this._attrs.attrs;
    var fontSize = attrs.fontSize,
        fontFamily = attrs.fontFamily,
        fontWeight = attrs.fontWeight,
        fontStyle = attrs.fontStyle,
        fontVariant = attrs.fontVariant;

    return fontStyle + ' ' + fontVariant + ' ' + fontWeight + ' ' + fontSize + 'px ' + fontFamily;
  };

  Text.prototype._afterAttrsSet = function _afterAttrsSet() {
    var attrs = this._attrs.attrs;
    attrs.font = this._getFontStyle();

    if (attrs.text) {
      var text = attrs.text;
      var textArr = void 0;
      if (Util.isString(text) && text.indexOf('\n') !== -1) {
        textArr = text.split('\n');
        var lineCount = textArr.length;
        attrs.lineCount = lineCount;
        attrs.textArr = textArr;
      }
    }
    this.set('attrs', attrs);
  };

  Text.prototype._getTextHeight = function _getTextHeight() {
    var attrs = this._attrs.attrs;
    var lineCount = attrs.lineCount;
    var fontSize = attrs.fontSize * 1;
    if (lineCount > 1) {
      var spaceingY = this._getSpaceingY();
      return fontSize * lineCount + spaceingY * (lineCount - 1);
    }
    return fontSize;
  };

  Text.prototype._getSpaceingY = function _getSpaceingY() {
    var attrs = this._attrs.attrs;
    var lineHeight = attrs.lineHeight;
    var fontSize = attrs.fontSize * 1;
    return lineHeight ? lineHeight - fontSize : fontSize * 0.14;
  };

  Text.prototype.drawInner = function drawInner(context) {
    var self = this;
    var attrs = self._attrs.attrs;
    var text = attrs.text;
    if (!text) {
      return;
    }
    var textArr = attrs.textArr;
    var fontSize = attrs.fontSize * 1;
    var spaceingY = self._getSpaceingY();
    var x = attrs.x;
    var y = attrs.y;

    if (attrs.rotate) {
      // 文本旋转
      context.translate(x, y);
      context.rotate(attrs.rotate);
      x = 0;
      y = 0;
    }

    var textBaseline = attrs.textBaseline;
    var height = void 0;
    if (textArr) {
      height = self._getTextHeight();
    }
    var subY = void 0;

    // context.beginPath();
    if (self.hasFill()) {
      var fillOpacity = attrs.fillOpacity;
      if (!Util.isNil(fillOpacity) && fillOpacity !== 1) {
        context.globalAlpha = fillOpacity;
      }
      if (textArr) {
        for (var i = 0, len = textArr.length; i < len; i++) {
          var subText = textArr[i];
          subY = y + i * (spaceingY + fontSize) - height + fontSize; // bottom;
          if (textBaseline === 'middle') {
            subY += height - fontSize - (height - fontSize) / 2;
          }
          if (textBaseline === 'top') {
            subY += height - fontSize;
          }
          context.fillText(subText, x, subY);
        }
      } else {
        context.fillText(text, x, y);
      }
    }

    if (self.hasStroke()) {
      if (textArr) {
        for (var _i = 0, _len = textArr.length; _i < _len; _i++) {
          var _subText = textArr[_i];
          subY = y + _i * (spaceingY + fontSize) - height + fontSize; // bottom;
          if (textBaseline === 'middle') {
            subY += height - fontSize - (height - fontSize) / 2;
          }
          if (textBaseline === 'top') {
            subY += height - fontSize;
          }
          context.strokeText(_subText, x, subY);
        }
      } else {
        context.strokeText(text, x, y);
      }
    }
  };

  Text.prototype.calculateBox = function calculateBox() {
    var self = this;
    var attrs = self._attrs.attrs;
    var x = attrs.x,
        y = attrs.y,
        textAlign = attrs.textAlign,
        textBaseline = attrs.textBaseline;

    var width = self._getTextWidth(); // attrs.width
    if (!width) {
      // 如果width不存在，四点共其实点
      return {
        minX: x,
        minY: y,
        maxX: x,
        maxY: y
      };
    }
    var height = self._getTextHeight(); // attrs.height
    var point = {
      x: x,
      y: y - height
    }; // default textAlign: start, textBaseline: bottom

    if (textAlign) {
      if (textAlign === 'end' || textAlign === 'right') {
        point.x -= width;
      } else if (textAlign === 'center') {
        point.x -= width / 2;
      }
    }

    if (textBaseline) {
      if (textBaseline === 'top') {
        point.y += height;
      } else if (textBaseline === 'middle') {
        point.y += height / 2;
      }
    }

    return {
      minX: point.x,
      minY: point.y,
      maxX: point.x + width,
      maxY: point.y + height
    };
  };

  Text.prototype._getTextWidth = function _getTextWidth() {
    var attrs = this._attrs.attrs;
    var text = attrs.text;
    var context = this.get('context');

    if (Util.isNil(text)) return undefined;

    var font = attrs.font;
    var textArr = attrs.textArr;
    var key = text + '' + font;
    if (textWidthCache[key]) {
      return textWidthCache[key];
    }

    var width = 0;
    if (textArr) {
      for (var i = 0, length = textArr.length; i < length; i++) {
        var subText = textArr[i];
        width = Math.max(width, Util.measureText(subText, font, context).width);
      }
    } else {
      width = Util.measureText(text, font, context).width;
    }

    if (textWidthCacheCounter > TEXT_CACHE_MAX) {
      textWidthCacheCounter = 0;
      textWidthCache = {};
    }
    textWidthCacheCounter++;
    textWidthCache[key] = width;

    return width;
  };

  return Text;
}(Shape);

Shape.Text = Text;
module.exports = Text;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shape = __webpack_require__(2);

var Custom = function (_Shape) {
  _inherits(Custom, _Shape);

  function Custom() {
    _classCallCheck(this, Custom);

    return _possibleConstructorReturn(this, _Shape.apply(this, arguments));
  }

  Custom.prototype._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);
    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.createPath = null;
    this._attrs.type = 'custom';
  };

  Custom.prototype.createPath = function createPath(context) {
    var createPath = this.get('createPath');
    createPath && createPath.call(this, context);
  };

  Custom.prototype.calculateBox = function calculateBox() {
    var calculateBox = this.get('calculateBox');
    return calculateBox && calculateBox.call(this);
  };

  return Custom;
}(Shape);

Shape.Custom = Custom;
module.exports = Custom;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Path = __webpack_require__(25);
var Geom = __webpack_require__(4);

__webpack_require__(20);

var Line = function (_Path) {
  _inherits(Line, _Path);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, _Path.apply(this, arguments));
  }

  /**
   * 获取默认的配置属性
   * @protected
   * @return {Object} 默认属性
   */
  Line.prototype.getDefaultCfg = function getDefaultCfg() {
    var cfg = _Path.prototype.getDefaultCfg.call(this);
    cfg.type = 'line';
    cfg.sortable = true;
    return cfg;
  };

  return Line;
}(Path);

Geom.Line = Line;
module.exports = Line;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Geom = __webpack_require__(4);
var Util = __webpack_require__(0);
var SizeMixin = __webpack_require__(26);
__webpack_require__(60);

var Interval = function (_Geom) {
  _inherits(Interval, _Geom);

  /**
   * 获取默认的配置属性
   * @protected
   * @return {Object} 默认属性
   */
  Interval.prototype.getDefaultCfg = function getDefaultCfg() {
    var cfg = _Geom.prototype.getDefaultCfg.call(this);
    cfg.type = 'interval';
    cfg.shapeType = 'interval';
    cfg.generatePoints = true;
    return cfg;
  };

  function Interval(cfg) {
    _classCallCheck(this, Interval);

    var _this = _possibleConstructorReturn(this, _Geom.call(this, cfg));

    Util.mix(_this, SizeMixin);
    return _this;
  }

  Interval.prototype.createShapePointsCfg = function createShapePointsCfg(obj) {
    var cfg = _Geom.prototype.createShapePointsCfg.call(this, obj);
    cfg.size = this.getNormalizedSize(obj);
    return cfg;
  };

  Interval.prototype.clearInner = function clearInner() {
    _Geom.prototype.clearInner.call(this);
    this.set('defaultSize', null);
  };

  return Interval;
}(Geom);

Geom.Interval = Interval;

module.exports = Interval;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(0);
var Shape = __webpack_require__(5);
var Vector2 = __webpack_require__(3);
var Global = __webpack_require__(1);

function getRectPoints(cfg) {
  var x = cfg.x,
      y = cfg.y,
      y0 = cfg.y0,
      size = cfg.size;

  // 有3种情况，
  // 1. y，x都不是数组
  // 2. y是数组，x不是
  // 3. x是数组，y不是

  var ymin = y0;
  var ymax = y;
  if (Util.isArray(y)) {
    ymax = y[1];
    ymin = y[0];
  }

  var xmin = void 0;
  var xmax = void 0;
  if (Util.isArray(x)) {
    xmin = x[0];
    xmax = x[1];
  } else {
    xmin = x - size / 2;
    xmax = x + size / 2;
  }

  return [{ x: xmin, y: ymin }, { x: xmin, y: ymax }, { x: xmax, y: ymax }, { x: xmax, y: ymin }];
}

function getRectRange(points) {
  var xValues = [];
  var yValues = [];
  for (var i = 0, len = points.length; i < len; i++) {
    var point = points[i];
    xValues.push(point.x);
    yValues.push(point.y);
  }
  var xMin = Math.min.apply(null, xValues);
  var yMin = Math.min.apply(null, yValues);
  var xMax = Math.max.apply(null, xValues);
  var yMax = Math.max.apply(null, yValues);

  return {
    x: xMin,
    y: yMin,
    width: xMax - xMin,
    height: yMax - yMin
  };
}

var Interval = Shape.registerFactory('interval', {
  defaultShapeType: 'rect',
  getDefaultPoints: function getDefaultPoints(cfg) {
    return getRectPoints(cfg);
  }
});

Shape.registerShape('interval', 'rect', {
  draw: function draw(cfg, container) {
    var points = this.parsePoints(cfg.points);
    var style = Util.mix({
      fill: cfg.color
    }, Global.shape.interval, cfg.style);
    if (cfg.isInCircle) {
      var newPoints = points.slice(0);
      if (this._coord.transposed) {
        newPoints = [points[0], points[3], points[2], points[1]];
      }

      var _cfg$center = cfg.center,
          x = _cfg$center.x,
          y = _cfg$center.y;

      var v = [1, 0];
      var v0 = [newPoints[0].x - x, newPoints[0].y - y];
      var v1 = [newPoints[1].x - x, newPoints[1].y - y];
      var v2 = [newPoints[2].x - x, newPoints[2].y - y];

      var startAngle = Vector2.angleTo(v, v1);
      var endAngle = Vector2.angleTo(v, v2);
      var r0 = Vector2.length(v0);
      var r = Vector2.length(v1);

      if (startAngle >= 1.5 * Math.PI) {
        startAngle = startAngle - 2 * Math.PI;
      }

      if (endAngle >= 1.5 * Math.PI) {
        endAngle = endAngle - 2 * Math.PI;
      }

      return container.addShape('Sector', {
        className: 'interval',
        attrs: Util.mix({
          x: x,
          y: y,
          r: r,
          r0: r0,
          startAngle: startAngle,
          endAngle: endAngle
        }, style)
      });
    }

    var rectCfg = getRectRange(points);

    return container.addShape('rect', {
      className: 'interval',
      attrs: Util.mix(rectCfg, style)
    });
  }
});

module.exports = Interval;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var Adjust = __webpack_require__(11);

__webpack_require__(62);
__webpack_require__(63);

module.exports = Adjust;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview 数据分组
 * @author dxq613@gmail.com
 */

var Util = __webpack_require__(0);
var Adjust = __webpack_require__(11);
var Global = __webpack_require__(1);

var Dodge = function (_Adjust) {
  _inherits(Dodge, _Adjust);

  function Dodge() {
    _classCallCheck(this, Dodge);

    return _possibleConstructorReturn(this, _Adjust.apply(this, arguments));
  }

  Dodge.prototype._initDefaultCfg = function _initDefaultCfg() {
    /**
     * 调整过程中,2个数据的间距
     * @type {Number}
     */
    this.marginRatio = Global.widthRatio.dodgeMargin;
    /**
     * 调整占单位宽度的比例,例如：占2个分类间距的 1/2
     * @type {Number}
     */
    this.dodgeRatio = Global.widthRatio.column;
  };

  Dodge.prototype.getDodgeOffset = function getDodgeOffset(range, index, count) {
    var self = this;
    var pre = range.pre;
    var next = range.next;
    var tickLength = next - pre;
    var width = tickLength * self.dodgeRatio / count;
    var margin = self.marginRatio * width;
    var offset = 1 / 2 * (tickLength - count * width - (count - 1) * margin) + ((index + 1) * width + index * margin) - 1 / 2 * width - 1 / 2 * tickLength;
    return (pre + next) / 2 + offset;
  };

  Dodge.prototype.processAdjust = function processAdjust(dataArray) {
    var self = this;
    var count = dataArray.length;
    var xField = self.xField;
    Util.each(dataArray, function (data, index) {
      for (var i = 0, len = data.length; i < len; i++) {
        var obj = data[i];
        var value = obj[xField];
        var range = {
          pre: value - 0.5,
          next: value + 0.5
        };
        var dodgeValue = self.getDodgeOffset(range, index, count);
        obj[xField] = dodgeValue;
      }
    });
  };

  return Dodge;
}(Adjust);

Adjust.Dodge = Dodge;
module.exports = Dodge;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Stack data
 * @author dxq613@gmail.com
 */

var Util = __webpack_require__(0);
var Adjust = __webpack_require__(11);

var Stack = function (_Adjust) {
  _inherits(Stack, _Adjust);

  function Stack() {
    _classCallCheck(this, Stack);

    return _possibleConstructorReturn(this, _Adjust.apply(this, arguments));
  }

  Stack.prototype._initDefaultCfg = function _initDefaultCfg() {
    this.xField = null;
    this.yField = null;
  };

  Stack.prototype.processAdjust = function processAdjust(dataArray) {
    var self = this;
    var xField = self.xField;
    var yField = self.yField;
    var count = dataArray.length;
    var stackCache = {
      positive: {},
      negative: {}
    };

    for (var i = 0; i < count; i++) {
      var data = dataArray[i];
      for (var j = 0, len = data.length; j < len; j++) {
        var item = data[j];
        var x = item[xField];
        var y = item[yField];
        var xkey = x.toString();
        y = Util.isArray(y) ? y[1] : y;
        var direction = y >= 0 ? 'positive' : 'negative';
        if (!stackCache[direction][xkey]) {
          stackCache[direction][xkey] = 0;
        }
        item[yField] = [stackCache[direction][xkey], y + stackCache[direction][xkey]];
        stackCache[direction][xkey] += y;
      }
    }
  };

  return Stack;
}(Adjust);

Adjust.Stack = Stack;
module.exports = Stack;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base = __webpack_require__(13);
var Vector2 = __webpack_require__(3);
var Matrix = __webpack_require__(14);

var Polar = function (_Base) {
  _inherits(Polar, _Base);

  function Polar() {
    _classCallCheck(this, Polar);

    return _possibleConstructorReturn(this, _Base.apply(this, arguments));
  }

  Polar.prototype._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'polar';
    this.startAngle = -Math.PI / 2;
    this.endAngle = Math.PI * 3 / 2;
    this.inner = 0;
    this.innerRadius = 0; // alias
    this.isPolar = true;
    this.transposed = false;
    this.center = null;
    this.radius = null; // 相对半径
  };

  Polar.prototype.init = function init(start, end) {
    var self = this;
    var inner = self.inner || self.innerRadius;
    var width = Math.abs(end.x - start.x);
    var height = Math.abs(end.y - start.y);

    var maxRadius = void 0;
    var center = void 0;
    if (self.startAngle === -Math.PI && self.endAngle === 0) {
      maxRadius = Math.min(width / 2, height);
      center = {
        x: (start.x + end.x) / 2,
        y: start.y
      };
    } else {
      maxRadius = Math.min(width, height) / 2;
      center = {
        x: (start.x + end.x) / 2,
        y: (start.y + end.y) / 2
      };
    }

    var radius = self.radius; // 相对半径
    if (radius > 0 && radius <= 1) {
      maxRadius = maxRadius * radius;
    }

    this.x = {
      start: self.startAngle,
      end: self.endAngle
    };

    this.y = {
      start: maxRadius * inner,
      end: maxRadius
    };
    this.center = center;
    this.circleRadius = maxRadius; // 绝对半径
  };

  Polar.prototype.convertPoint = function convertPoint(point) {
    var self = this;
    var center = self.center;
    var transposed = self.transposed;
    var xDim = transposed ? 'y' : 'x';
    var yDim = transposed ? 'x' : 'y';

    var x = self.x;
    var y = self.y;

    var angle = x.start + (x.end - x.start) * point[xDim];
    var radius = y.start + (y.end - y.start) * point[yDim];

    return {
      x: center.x + Math.cos(angle) * radius,
      y: center.y + Math.sin(angle) * radius
    };
  };

  Polar.prototype.invertPoint = function invertPoint(point) {
    var self = this;
    var center = self.center,
        transposed = self.transposed,
        x = self.x,
        y = self.y;

    var xDim = transposed ? 'y' : 'x';
    var yDim = transposed ? 'x' : 'y';

    var m = [1, 0, 0, 1, 0, 0];
    Matrix.rotate(m, m, x.start);

    var startV = [1, 0];
    Vector2.transformMat2d(startV, startV, m);
    startV = [startV[0], startV[1]];

    var pointV = [point.x - center.x, point.y - center.y];
    if (Vector2.zero(pointV)) {
      return {
        x: 0,
        y: 0
      };
    }

    var theta = Vector2.angleTo(startV, pointV, x.end < x.start);
    if (Math.abs(theta - Math.PI * 2) < 0.001) {
      theta = 0;
    }
    var l = Vector2.length(pointV);
    var percentX = theta / (x.end - x.start);
    percentX = x.end - x.start > 0 ? percentX : -percentX;
    var percentY = (l - y.start) / (y.end - y.start);
    var rst = {};
    rst[xDim] = percentX;
    rst[yDim] = percentY;
    return rst;
  };

  return Polar;
}(Base);

Base.Polar = Polar;
module.exports = Polar;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 一些小的图标，用于 tooltip 和 legend 的 marker
 * @type {Object}
 */
var Util = __webpack_require__(0);

var _require = __webpack_require__(6),
    Shape = _require.Shape;

var SYMBOLS = {
  // 圆
  circle: function circle(x, y, r, ctx) {
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
  },

  // 正方形
  square: function square(x, y, r, ctx) {
    ctx.moveTo(x - r, y - r);
    ctx.lineTo(x + r, y - r);
    ctx.lineTo(x + r, y + r);
    ctx.lineTo(x - r, y + r);
    ctx.closePath();
  }
};

var Marker = function (_Shape) {
  _inherits(Marker, _Shape);

  function Marker() {
    _classCallCheck(this, Marker);

    return _possibleConstructorReturn(this, _Shape.apply(this, arguments));
  }

  Marker.prototype._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);
    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'marker';
  };

  Marker.prototype.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      lineWidth: 0
    };
  };

  Marker.prototype.createPath = function createPath(context) {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        radius = attrs.radius;

    var symbol = attrs.symbol || 'circle';
    var method = void 0;
    if (Util.isFunction(symbol)) {
      method = symbol;
    } else {
      method = SYMBOLS[symbol];
    }
    context.beginPath();
    method(x, y, radius, context, this);
  };

  Marker.prototype.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        radius = attrs.radius;

    return {
      minX: x - radius,
      minY: y - radius,
      maxX: x + radius,
      maxY: y + radius
    };
  };

  return Marker;
}(Shape);

module.exports = Marker;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = __webpack_require__(0);

var _require = __webpack_require__(6),
    Group = _require.Group;

var Marker = __webpack_require__(65);
var MARKER_RADIUS = 3;

var List = function () {
  List.prototype.getDefaultCfg = function getDefaultCfg() {
    return {
      showTitle: false,
      /**
       * 标题文本
       * @type {?String}
       */
      title: null,
      /**
       * 记录项的集合
       * @type {?Array}
       */
      items: null,
      /**
       * 标题距离记录项的间距
       * @type {Number}
       */
      titleGap: 12,
      /**
       * 各个记录项水平方向的间距
       * @type {Number}
       */
      itemGap: 10,
      /**
       * 各个记录项水平方向的间距
       * @type {Number}
       */
      itemMarginBottom: 12,
      /**
       * 记录项置灰的颜色
       * @type {String}
       */
      unCheckColor: '#bfbfbf',
      /**
       * 记录项文本格式化
       * @type {[type]}
       */
      itemFormatter: null,
      itemWidth: null,
      /**
       * marker 和文字的距离
       * @type {Number}
       */
      wordSpace: 6,
      /**
       * 在画布上的位置
       * @type {[type]}
       */
      x: 0,
      /**
       * 在画布上的位置
       * @type {[type]}
       */
      y: 0,
      /**
       * 布局方式
       * @type {String}
       */
      layout: 'horizontal'
    };
  };

  function List(cfg) {
    _classCallCheck(this, List);

    Util.deepMix(this, this.getDefaultCfg(), cfg);
    this._init();
    this._renderTitle();
    this._renderItems();
  }

  List.prototype._init = function _init() {
    var container = new Group();
    this.container = container;
    var wrapper = container.addGroup();
    this.wrapper = wrapper;
    var itemsGroup = wrapper.addGroup({
      className: 'itemsGroup'
    });
    this.itemsGroup = itemsGroup;

    if (this.parent) {
      // 如果传入了父容器
      this.parent.add(container);
    }
  };

  List.prototype._renderTitle = function _renderTitle(title) {
    title = title || this.title;

    var titleHeight = 0;
    if (this.showTitle && title) {
      var wrapper = this.wrapper,
          titleStyle = this.titleStyle;

      var titleShape = wrapper.addShape('text', {
        className: 'title',
        attrs: Util.mix({
          x: 0,
          y: 0,
          text: title
        }, titleStyle)
      });
      titleHeight = titleShape.getBBox().height + this.titleGap;
      this.titleShape = titleShape;
    }
    this._titleHeight = titleHeight;
  };

  List.prototype._renderItems = function _renderItems(items) {
    var self = this;
    items = items || self.items;

    if (!items) {
      return;
    }

    if (self.reversed) {
      items.reverse();
    }
    Util.each(items, function (item, index) {
      self._addItem(item, index);
    });
    if (items.length > 1) {
      this._adjustItems();
    }
    this._renderBackground(); // 渲染背景
  };

  List.prototype._renderBackground = function _renderBackground() {
    var background = this.background;
    if (background) {
      var container = this.container;
      var wrapper = this.wrapper;

      var _wrapper$getBBox = wrapper.getBBox(),
          minX = _wrapper$getBBox.minX,
          minY = _wrapper$getBBox.minY,
          width = _wrapper$getBBox.width,
          height = _wrapper$getBBox.height;

      var padding = background.padding || [0, 0, 0, 0];
      padding = Util.parsePadding(padding);
      var attrs = Util.mix({
        x: minX - padding[3],
        y: minY - padding[0],
        width: width + padding[1] + padding[3],
        height: height + padding[0] + padding[2]
      }, background);
      var backShape = this.backShape;
      if (backShape) {
        backShape.attr(attrs);
      } else {
        backShape = container.addShape('Rect', {
          zIndex: -1,
          attrs: attrs
        });
      }
      this.backShape = backShape;
      container.sort();
    }
  };

  List.prototype._addItem = function _addItem(item) {
    var itemsGroup = this.itemsGroup;
    var itemGroup = itemsGroup.addGroup({
      name: item.name,
      value: item.value, // 显示的内容
      dataValue: item.dataValue, // 图例项对应原始数据中的数值
      checked: item.checked
    });
    var unCheckColor = this.unCheckColor,
        nameStyle = this.nameStyle,
        valueStyle = this.valueStyle,
        wordSpace = this.wordSpace;
    var marker = item.marker,
        value = item.value;

    var startX = 0;

    if (marker) {
      // 如果有 marker 添加 marker, 格式： { radius, symbol, fill / stroke }
      var radius = marker.radius || MARKER_RADIUS;
      var markerAttrs = Util.mix({
        x: radius,
        y: this._titleHeight
      }, marker);

      if (item.checked === false) {
        if (markerAttrs.fill) {
          markerAttrs.fill = unCheckColor;
        }
        // if (markerAttrs.stroke) {
        //   markerAttrs.stroke = unCheckColor;
        // }
      }

      var markerShape = new Marker({
        className: 'item-marker',
        attrs: markerAttrs
      });
      itemGroup.add(markerShape);
      startX += markerShape.getBBox().width + wordSpace;
    }

    var nameText = void 0;
    var name = item.name;
    if (name) {
      name = value ? name + ': ' : name;
      nameText = itemGroup.addShape('text', {
        className: 'name',
        attrs: Util.mix({
          x: startX,
          y: this._titleHeight,
          text: this._formatItemValue(name)
        }, nameStyle, item.checked === false ? { fill: unCheckColor } : null)
      });
    }

    if (value) {
      var valueX = startX;
      if (nameText) {
        valueX += nameText.getBBox().width;
      }

      itemGroup.addShape('text', {
        className: 'value',
        attrs: Util.mix({
          x: valueX,
          y: this._titleHeight,
          text: value
        }, valueStyle, item.checked === false ? { fill: unCheckColor } : null)
      });
    }
    return itemGroup;
  };

  List.prototype._formatItemValue = function _formatItemValue(value) {
    var formatter = this.itemFormatter;
    if (formatter) {
      value = formatter.call(this, value);
    }
    return value;
  };

  List.prototype._getMaxItemWidth = function _getMaxItemWidth() {
    var width = void 0;
    var itemWidth = this.itemWidth;

    if (Util.isNumber(itemWidth) || Util.isNil(itemWidth)) {
      return itemWidth;
    }
    // 采用默认的栅栏布局
    if (itemWidth === 'auto') {
      var itemsGroup = this.itemsGroup;
      var children = itemsGroup.get('children');
      var count = children.length;
      var maxItemWidth = 0;
      for (var i = 0; i < count; i++) {
        var _children$i$getBBox = children[i].getBBox(),
            _width = _children$i$getBBox.width;

        maxItemWidth = Math.max(maxItemWidth, _width);
      }
      var maxLength = this.maxLength;
      var itemGap = this.itemGap;
      var twoAvgWidth = (maxLength - itemGap) / 2;
      var threeAvgWidth = (maxLength - itemGap * 2) / 3;

      if (count === 2) {
        width = Math.max(maxItemWidth, twoAvgWidth);
      } else {
        // 1. max <= 3Avg, 3Avg
        // 2. 3Avg < max && max < 2avg, 2avg
        // 3. max > 2avg, max, 一列布局
        if (maxItemWidth <= threeAvgWidth) {
          width = threeAvgWidth;
        } else if (maxItemWidth <= twoAvgWidth) {
          width = twoAvgWidth;
        } else {
          width = maxItemWidth;
        }
      }
      return width;
    }
  };

  List.prototype._adjustHorizontal = function _adjustHorizontal() {
    var maxLength = this.maxLength,
        itemsGroup = this.itemsGroup;


    var children = itemsGroup.get('children');
    var itemGap = this.itemGap,
        itemMarginBottom = this.itemMarginBottom;

    var titleHeight = this._titleHeight;

    var row = 0;
    var rowWidth = 0;
    var width = void 0;
    var height = void 0;
    var itemWidth = this._getMaxItemWidth();
    var legendHitBoxes = [];
    for (var i = 0, len = children.length; i < len; i++) {
      var child = children[i];
      var box = child.getBBox();
      var childHeight = box.height;
      var childWidth = box.width;
      width = itemWidth || childWidth;
      height = childHeight + itemMarginBottom;

      if (width - (maxLength - rowWidth) > 0.0001) {
        row++;
        rowWidth = 0;
      }

      child.moveTo(rowWidth, row * height);
      legendHitBoxes.push({
        x: rowWidth,
        y: row * height + titleHeight - childHeight / 2,
        width: childWidth * 1.375,
        height: childHeight * 1.375
      });
      rowWidth += width + itemGap;
    }
    this.legendHitBoxes = legendHitBoxes;
    return;
  };

  List.prototype._adjustVertical = function _adjustVertical() {
    var maxLength = this.maxLength,
        itemsGroup = this.itemsGroup; // 垂直布局，则 maxLength 代表容器的高度

    var itemGap = this.itemGap,
        itemMarginBottom = this.itemMarginBottom,
        itemWidth = this.itemWidth;

    var titleHeight = this._titleHeight;
    var children = itemsGroup.get('children');

    var colHeight = 0;
    var width = void 0;
    var height = void 0;
    var maxItemWidth = 0;
    var totalWidth = 0;
    var legendHitBoxes = [];

    for (var i = 0, length = children.length; i < length; i++) {
      var child = children[i];
      var bbox = child.getBBox();
      width = bbox.width;
      height = bbox.height;

      if (Util.isNumber(itemWidth)) {
        maxItemWidth = itemWidth + itemGap;
      } else if (width > maxItemWidth) {
        maxItemWidth = width + itemGap;
      }

      if (maxLength - colHeight < height) {
        colHeight = 0;
        totalWidth += maxItemWidth;
        child.moveTo(totalWidth, 0);
        legendHitBoxes.push({
          x: totalWidth,
          y: titleHeight - height / 2,
          width: width * 1.375,
          height: height * 1.375
        });
      } else {
        child.moveTo(totalWidth, colHeight);
        legendHitBoxes.push({
          x: totalWidth,
          y: colHeight - height / 2 + titleHeight,
          width: width * 1.375,
          height: height * 1.375
        });
      }

      colHeight += height + itemMarginBottom;
    }
    this.legendHitBoxes = legendHitBoxes;
    return;
  };

  List.prototype._adjustItems = function _adjustItems() {
    var layout = this.layout;
    if (layout === 'horizontal') {
      this._adjustHorizontal();
    } else {
      this._adjustVertical();
    }
  };

  List.prototype.moveTo = function moveTo(x, y) {
    this.x = x;
    this.y = y;
    var container = this.container;
    container && container.moveTo(x, y);
    return this;
  };

  List.prototype.setItems = function setItems(items) {
    this.clearItems();
    this._renderItems(items);
  };

  List.prototype.setTitle = function setTitle(title) {
    var titleShape = this.titleShape;
    if (titleShape) {
      titleShape.attr('text', title);
    } else {
      this._renderTitle(title);
    }
  };

  List.prototype.clearItems = function clearItems() {
    var itemsGroup = this.itemsGroup;
    itemsGroup.clear();
  };

  List.prototype.getWidth = function getWidth() {
    var container = this.container;
    var bbox = container.getBBox();
    return bbox.width;
  };

  List.prototype.getHeight = function getHeight() {
    var container = this.container;
    var bbox = container.getBBox();
    return bbox.height;
  };

  List.prototype.show = function show() {
    var container = this.container;
    container.show();
  };

  List.prototype.hide = function hide() {
    var container = this.container;
    container.hide();
  };

  List.prototype.clear = function clear() {
    var container = this.container;
    container.clear();
    container.remove(true);
  };

  return List;
}();

module.exports = List;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Util = __webpack_require__(0);
var Geom = __webpack_require__(4);
__webpack_require__(68);

var Point = function (_Geom) {
  _inherits(Point, _Geom);

  function Point() {
    _classCallCheck(this, Point);

    return _possibleConstructorReturn(this, _Geom.apply(this, arguments));
  }

  Point.prototype.getDefaultCfg = function getDefaultCfg() {
    var cfg = _Geom.prototype.getDefaultCfg.call(this);
    cfg.type = 'point';
    cfg.shapeType = 'point';
    cfg.generatePoints = true;
    return cfg;
  };

  Point.prototype.draw = function draw(data, shapeFactory) {
    var self = this;
    var container = self.get('container');
    Util.each(data, function (obj) {
      var shape = obj.shape;
      var cfg = self.getDrawCfg(obj);
      if (Util.isArray(obj.y)) {
        var hasStack = self.hasAdjust('stack'); // 判断是否存在 stack 层叠
        Util.each(obj.y, function (y, idx) {
          cfg.y = y;
          if (!hasStack || idx !== 0) {
            self.drawShape(shape, obj, cfg, container, shapeFactory);
          }
        });
      } else if (!Util.isNil(obj.y)) {
        self.drawShape(shape, obj, cfg, container, shapeFactory);
      }
    });
  };

  return Point;
}(Geom);

Geom.Point = Point;

module.exports = Point;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(0);
var Global = __webpack_require__(1);
var ShapeUtil = __webpack_require__(12);
var Shape = __webpack_require__(5);
var SHAPES = ['circle', 'hollowCircle', 'rect'];

var Point = Shape.registerFactory('point', {
  defaultShapeType: 'circle',
  getDefaultPoints: function getDefaultPoints(pointInfo) {
    return ShapeUtil.splitPoints(pointInfo);
  }
});

function getPointsCfg(cfg) {
  var style = {
    lineWidth: 0,
    stroke: cfg.color,
    fill: cfg.color
  };
  if (cfg.size) {
    style.size = cfg.size;
  }

  Util.mix(style, cfg.style);
  return Util.mix({}, Global.shape.point, style);
}

function drawShape(cfg, container, shape) {
  if (cfg.size === 0) return;
  var pointCfg = getPointsCfg(cfg);
  var size = pointCfg.r || pointCfg.size;
  var x = cfg.x;
  var y = !Util.isArray(cfg.y) ? [cfg.y] : cfg.y;
  if (shape === 'hollowCircle') {
    pointCfg.lineWidth = 1;
    pointCfg.fill = null;
  }
  for (var i = 0, len = y.length; i < len; i++) {
    if (shape === 'rect') {
      return container.addShape('Rect', {
        className: 'point',
        attrs: Util.mix({
          x: x - size,
          y: y[i] - size,
          width: size * 2,
          height: size * 2
        }, pointCfg)
      });
    }

    return container.addShape('Circle', {
      className: 'point',
      attrs: Util.mix({
        x: x,
        y: y[i],
        r: size
      }, pointCfg)
    });
  }
}

Util.each(SHAPES, function (shapeType) {
  Shape.registerShape('point', shapeType, {
    draw: function draw(cfg, container) {
      return drawShape(cfg, container, shapeType);
    }
  });
});

module.exports = Point;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview 面积图
 * @author dxq613 @gmail.com
 * @author sima.zhang1990@gmail.com
 */

var Geom = __webpack_require__(4);
var ShapeUtil = __webpack_require__(12);
var Util = __webpack_require__(0);
__webpack_require__(70);

var Area = function (_Geom) {
  _inherits(Area, _Geom);

  function Area() {
    _classCallCheck(this, Area);

    return _possibleConstructorReturn(this, _Geom.apply(this, arguments));
  }

  /**
   * 获取默认的配置属性
   * @protected
   * @return {Object} 默认属性
   */
  Area.prototype.getDefaultCfg = function getDefaultCfg() {
    var cfg = _Geom.prototype.getDefaultCfg.call(this);
    cfg.type = 'area';
    cfg.shapeType = 'area';
    cfg.generatePoints = true;
    cfg.sortable = true;
    return cfg;
  };

  Area.prototype.draw = function draw(data, shapeFactory) {
    var self = this;
    var container = self.get('container');
    var cfg = this.getDrawCfg(data[0]);
    var yScale = self.getYScale();
    var splitArray = ShapeUtil.splitArray(data, yScale.field);
    cfg.origin = data; // path,line,area 等图的origin 是整个序列
    Util.each(splitArray, function (subData, splitedIndex) {
      cfg.splitedIndex = splitedIndex; // 传入分割片段索引 用于生成id
      var points = subData.map(function (obj) {
        return obj.points;
      });
      cfg.points = points;
      self.drawShape(cfg.shape, data[0], cfg, container, shapeFactory);
    });
  };

  return Area;
}(Geom);

Geom.Area = Area;

module.exports = Area;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(0);
var Shape = __webpack_require__(5);
var Smooth = __webpack_require__(23);
var Global = __webpack_require__(1);

// 是否相等
function equals(v1, v2) {
  return Math.abs(v1 - v2) < 0.00001;
}

// 是否等于圆心的点
function equalsCenter(points, center) {
  var eqls = true;
  Util.each(points, function (point) {
    if (!equals(point.x, center.x) || !equals(point.y, center.y)) {
      eqls = false;
      return false;
    }
  });
  return eqls;
}

function drawCircleArea(topPoints, bottomPoints, container, style, isSmooth) {
  var shape = container.addShape('Polyline', {
    className: 'area',
    attrs: Util.mix({
      points: topPoints,
      smooth: isSmooth
    }, style)
  });
  if (bottomPoints.length) {
    var bottomShape = container.addShape('Polyline', {
      className: 'area',
      attrs: Util.mix({
        points: bottomPoints,
        smooth: isSmooth
      }, style)
    });
    return [shape, bottomShape];
  }
  return shape;
}

function drawRectShape(topPoints, bottomPoints, container, style, isSmooth) {
  var shape = void 0;
  if (isSmooth) {
    shape = container.addShape('Custom', {
      className: 'area',
      attrs: Util.mix({
        points: topPoints.concat(bottomPoints)
      }, style),
      createPath: function createPath(context) {
        var constaint = [// 范围
        [0, 0], [1, 1]];
        var points = this._attrs.attrs.points;
        var topSps = Smooth.smooth(points.slice(0, points.length / 2), false, constaint);
        var bottomSps = Smooth.smooth(points.slice(points.length / 2, points.length), false, constaint);

        context.beginPath();
        context.moveTo(topPoints[0].x, topPoints[0].y);
        for (var i = 0, n = topSps.length; i < n; i++) {
          var sp = topSps[i];
          context.bezierCurveTo(sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]);
        }
        context.lineTo(bottomPoints[0].x, bottomPoints[0].y);
        for (var _i = 0, _n = bottomSps.length; _i < _n; _i++) {
          var _sp = bottomSps[_i];
          context.bezierCurveTo(_sp[1], _sp[2], _sp[3], _sp[4], _sp[5], _sp[6]);
        }
        context.closePath();
      }
    });
  } else {
    topPoints = topPoints.concat(bottomPoints);
    shape = container.addShape('Polyline', {
      className: 'area',
      attrs: Util.mix({
        points: topPoints
      }, style)
    });
  }
  return shape;
}

function drawShape(cfg, container, isSmooth) {
  var self = this;
  var points = cfg.points;
  var topPoints = []; // 区域图上面的点
  var bottomPoints = []; // 区域图下面的点
  Util.each(points, function (point) {
    bottomPoints.push(point[0]);
    topPoints.push(point[1]);
  });
  var style = Util.mix({
    fillStyle: cfg.color
  }, Global.shape.area, cfg.style);
  bottomPoints.reverse(); // 下面
  topPoints = self.parsePoints(topPoints);
  bottomPoints = self.parsePoints(bottomPoints);
  if (cfg.isInCircle) {
    if (equalsCenter(bottomPoints, cfg.center)) {
      // 如果内部点等于圆心，不绘制
      bottomPoints = [];
    }
    return drawCircleArea(topPoints, bottomPoints, container, style, isSmooth);
  }

  return drawRectShape(topPoints, bottomPoints, container, style, isSmooth);
}

var Area = Shape.registerFactory('area', {
  defaultShapeType: 'area',
  // 如果存在多个点，分割成单个的点, 不考虑多个x对应一个y的情况
  getDefaultPoints: function getDefaultPoints(obj) {
    var x = obj.x;
    var y = obj.y;
    var y0 = obj.y0; // 最小值
    y = Util.isArray(y) ? y : [y0, y];

    var points = [];
    points.push({
      x: x,
      y: y[0]
    }, {
      x: x,
      y: y[1]
    });
    return points;
  }
});

var SHAPES = ['area', 'smooth'];
Util.each(SHAPES, function (shapeType) {
  Shape.registerShape('area', shapeType, {
    draw: function draw(cfg, container) {
      var smooth = shapeType === 'smooth';
      return drawShape.call(this, cfg, container, smooth);
    }
  });
});

module.exports = Area;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Util = __webpack_require__(0);
var Abstract = __webpack_require__(15);

var Circle = function (_Abstract) {
  _inherits(Circle, _Abstract);

  function Circle() {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, _Abstract.apply(this, arguments));
  }

  Circle.prototype._initDefaultCfg = function _initDefaultCfg() {
    _Abstract.prototype._initDefaultCfg.call(this);
    this.startAngle = -Math.PI / 2; // 起始角度，弧度
    this.endAngle = Math.PI * 3 / 2; // 结束角度，弧度
    this.radius = null; // 半径
    this.center = null; // 圆心
  };

  // 获取坐标轴上的点


  Circle.prototype.getOffsetPoint = function getOffsetPoint(value) {
    var startAngle = this.startAngle,
        endAngle = this.endAngle;

    var angle = startAngle + (endAngle - startAngle) * value;
    return this._getCirclePoint(angle);
  };

  // 获取圆上的点


  Circle.prototype._getCirclePoint = function _getCirclePoint(angle, radius) {
    var self = this;
    var center = self.center;
    radius = radius || self.radius;
    return {
      x: center.x + Math.cos(angle) * radius,
      y: center.y + Math.sin(angle) * radius
    };
  };

  Circle.prototype.getTextAlignInfo = function getTextAlignInfo(point, offset) {
    var self = this;
    var offsetVector = self.getOffsetVector(point, offset);
    var align = void 0;
    var baseLine = 'middle';
    if (offsetVector[0] > 0) {
      align = 'left';
    } else if (offsetVector[0] < 0) {
      align = 'right';
    } else {
      align = 'center';
      if (offsetVector[1] > 0) {
        baseLine = 'top';
      } else if (offsetVector[1] < 0) {
        baseLine = 'bottom';
      }
    }
    return {
      textAlign: align,
      textBaseline: baseLine
    };
  };

  // 获取坐标轴上点的向量，极坐标下覆盖此方法


  Circle.prototype.getAxisVector = function getAxisVector(point) {
    var center = this.center;
    var factor = this.offsetFactor;
    return [(point.y - center.y) * factor, (point.x - center.x) * -1 * factor];
  };

  Circle.prototype.drawLine = function drawLine(lineCfg) {
    var center = this.center,
        radius = this.radius,
        startAngle = this.startAngle,
        endAngle = this.endAngle;

    var container = this.getContainer(lineCfg.top);
    container.addShape('arc', {
      className: 'axis-line',
      attrs: Util.mix({
        x: center.x,
        y: center.y,
        r: radius,
        startAngle: startAngle,
        endAngle: endAngle
      }, lineCfg)
    });
  };

  return Circle;
}(Abstract);

Abstract.Circle = Circle;
module.exports = Circle;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview 时间数据作为分类类型
 * @author dxq613@gmail.com
 */
var Base = __webpack_require__(8);
var Category = __webpack_require__(21);
var Util = __webpack_require__(0);
var fecha = __webpack_require__(73);
var catAuto = __webpack_require__(22);

/**
 * 度量的构造函数
 * @class Scale.TimeCategory
 */

var TimeCategory = function (_Category) {
  _inherits(TimeCategory, _Category);

  function TimeCategory() {
    _classCallCheck(this, TimeCategory);

    return _possibleConstructorReturn(this, _Category.apply(this, arguments));
  }

  TimeCategory.prototype._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'timeCat';
    /**
     * 是否需要排序，默认进行排序
     * @type {Boolean}
     */
    this.sortable = true;
    this.tickCount = 5;
    /**
     * 时间格式化
     * @type {String}
     */
    this.mask = 'YYYY-MM-DD';
    /**
     * 输出的值域
     * @type {Array}
     */
    this.range = [0, 1];
    /**
     * 度量的标记
     * @type {Array}
     */
    this.ticks = null;
    /**
     * 参与度量计算的值，可选项
     * @type {Array}
     */
    this.values = [];
    /**
     * 是否分类度量
     * @type {Boolean}
     */
    this.isCategory = true;
  };

  TimeCategory.prototype.init = function init() {
    var self = this;
    var values = this.values;
    // 针对时间分类类型，会将时间统一转换为时间戳
    Util.each(values, function (v, i) {
      values[i] = self._toTimeStamp(v);
    });
    if (this.sortable) {
      values.sort(function (v1, v2) {
        return v1 - v2;
      });
    }

    if (!self.ticks) {
      self.ticks = this.calculateTicks(false);
    }
  };

  /**
   * 计算 ticks
   * @return {array} 返回 ticks 数组
   */


  TimeCategory.prototype.calculateTicks = function calculateTicks() /* formated */{
    var self = this;
    var count = self.tickCount;
    var temp = catAuto({
      maxCount: count,
      data: self.values
    });

    var ticks = temp.ticks;
    // if (formated) {
    //   Util.each(ticks, function(value, index) {
    //     ticks[index] = fecha.format(value, self.mask);
    //   });
    // }
    return ticks;
  };

  /**
   * @override
   */


  TimeCategory.prototype.translate = function translate(value) {
    value = this._toTimeStamp(value);
    var index = this.values.indexOf(value);

    if (index === -1) {
      if (Util.isNumber(value) && value < this.values.length) {
        index = value;
      } else {
        index = NaN;
      }
    }
    return index;
  };

  /**
   * @override
   */


  TimeCategory.prototype.scale = function scale(value) {
    var rangeMin = this.rangeMin();
    var rangeMax = this.rangeMax();
    var index = this.translate(value);
    var percent = void 0;

    if (this.values.length === 1) {
      percent = index;
    } else if (index > -1) {
      percent = index / (this.values.length - 1);
    } else {
      percent = 0;
    }

    return rangeMin + percent * (rangeMax - rangeMin);
  };

  /**
   * @override
   */


  TimeCategory.prototype.getText = function getText(value) {
    var result = '';
    var index = this.translate(value);
    if (index > -1) {
      result = this.values[index];
    } else {
      result = value;
    }

    var formatter = this.formatter;
    result = parseInt(result, 10);
    result = formatter ? formatter(result) : fecha.format(result, this.mask);
    return result;
  };

  /**
   * @override
   */


  TimeCategory.prototype.getTicks = function getTicks() {
    var self = this;
    var ticks = this.ticks;
    var rst = [];
    Util.each(ticks, function (tick) {
      var obj = void 0;
      if (Util.isObject(tick)) {
        obj = tick;
      } else {
        obj = {
          text: Util.isString(tick) ? tick : self.getText(tick),
          value: self.scale(tick)
        };
      }
      rst.push(obj);
    });
    return rst;
  };

  // 将时间转换为时间戳


  TimeCategory.prototype._toTimeStamp = function _toTimeStamp(value) {
    if (Util.isString(value)) {
      if (value.indexOf('T') > 0) {
        value = new Date(value).getTime();
      } else {
        value = new Date(value.replace(/-/ig, '/')).getTime();
      }
    }
    if (Util.isDate(value)) {
      value = value.getTime();
    }
    return value;
  };

  return TimeCategory;
}(Category);

Base.TimeCat = TimeCategory;
module.exports = TimeCategory;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function (main) {
  'use strict';

  /**
   * Parse or format dates
   * @class fecha
   */

  var fecha = {};
  var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
  var twoDigits = /\d\d?/;
  var threeDigits = /\d{3}/;
  var fourDigits = /\d{4}/;
  var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
  var literal = /\[([^]*?)\]/gm;
  var noop = function noop() {};

  function shorten(arr, sLen) {
    var newArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      newArr.push(arr[i].substr(0, sLen));
    }
    return newArr;
  }

  function monthUpdate(arrName) {
    return function (d, v, i18n) {
      var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
      if (~index) {
        d.month = index;
      }
    };
  }

  function pad(val, len) {
    val = String(val);
    len = len || 2;
    while (val.length < len) {
      val = '0' + val;
    }
    return val;
  }

  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var monthNamesShort = shorten(monthNames, 3);
  var dayNamesShort = shorten(dayNames, 3);
  fecha.i18n = {
    dayNamesShort: dayNamesShort,
    dayNames: dayNames,
    monthNamesShort: monthNamesShort,
    monthNames: monthNames,
    amPm: ['am', 'pm'],
    DoFn: function DoFn(D) {
      return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
    }
  };

  var formatFlags = {
    D: function D(dateObj) {
      return dateObj.getDate();
    },
    DD: function DD(dateObj) {
      return pad(dateObj.getDate());
    },
    Do: function Do(dateObj, i18n) {
      return i18n.DoFn(dateObj.getDate());
    },
    d: function d(dateObj) {
      return dateObj.getDay();
    },
    dd: function dd(dateObj) {
      return pad(dateObj.getDay());
    },
    ddd: function ddd(dateObj, i18n) {
      return i18n.dayNamesShort[dateObj.getDay()];
    },
    dddd: function dddd(dateObj, i18n) {
      return i18n.dayNames[dateObj.getDay()];
    },
    M: function M(dateObj) {
      return dateObj.getMonth() + 1;
    },
    MM: function MM(dateObj) {
      return pad(dateObj.getMonth() + 1);
    },
    MMM: function MMM(dateObj, i18n) {
      return i18n.monthNamesShort[dateObj.getMonth()];
    },
    MMMM: function MMMM(dateObj, i18n) {
      return i18n.monthNames[dateObj.getMonth()];
    },
    YY: function YY(dateObj) {
      return String(dateObj.getFullYear()).substr(2);
    },
    YYYY: function YYYY(dateObj) {
      return pad(dateObj.getFullYear(), 4);
    },
    h: function h(dateObj) {
      return dateObj.getHours() % 12 || 12;
    },
    hh: function hh(dateObj) {
      return pad(dateObj.getHours() % 12 || 12);
    },
    H: function H(dateObj) {
      return dateObj.getHours();
    },
    HH: function HH(dateObj) {
      return pad(dateObj.getHours());
    },
    m: function m(dateObj) {
      return dateObj.getMinutes();
    },
    mm: function mm(dateObj) {
      return pad(dateObj.getMinutes());
    },
    s: function s(dateObj) {
      return dateObj.getSeconds();
    },
    ss: function ss(dateObj) {
      return pad(dateObj.getSeconds());
    },
    S: function S(dateObj) {
      return Math.round(dateObj.getMilliseconds() / 100);
    },
    SS: function SS(dateObj) {
      return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
    },
    SSS: function SSS(dateObj) {
      return pad(dateObj.getMilliseconds(), 3);
    },
    a: function a(dateObj, i18n) {
      return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
    },
    A: function A(dateObj, i18n) {
      return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
    },
    ZZ: function ZZ(dateObj) {
      var o = dateObj.getTimezoneOffset();
      return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
    }
  };

  var parseFlags = {
    D: [twoDigits, function (d, v) {
      d.day = v;
    }],
    Do: [new RegExp(twoDigits.source + word.source), function (d, v) {
      d.day = parseInt(v, 10);
    }],
    M: [twoDigits, function (d, v) {
      d.month = v - 1;
    }],
    YY: [twoDigits, function (d, v) {
      var da = new Date(),
          cent = +('' + da.getFullYear()).substr(0, 2);
      d.year = '' + (v > 68 ? cent - 1 : cent) + v;
    }],
    h: [twoDigits, function (d, v) {
      d.hour = v;
    }],
    m: [twoDigits, function (d, v) {
      d.minute = v;
    }],
    s: [twoDigits, function (d, v) {
      d.second = v;
    }],
    YYYY: [fourDigits, function (d, v) {
      d.year = v;
    }],
    S: [/\d/, function (d, v) {
      d.millisecond = v * 100;
    }],
    SS: [/\d{2}/, function (d, v) {
      d.millisecond = v * 10;
    }],
    SSS: [threeDigits, function (d, v) {
      d.millisecond = v;
    }],
    d: [twoDigits, noop],
    ddd: [word, noop],
    MMM: [word, monthUpdate('monthNamesShort')],
    MMMM: [word, monthUpdate('monthNames')],
    a: [word, function (d, v, i18n) {
      var val = v.toLowerCase();
      if (val === i18n.amPm[0]) {
        d.isPm = false;
      } else if (val === i18n.amPm[1]) {
        d.isPm = true;
      }
    }],
    ZZ: [/([\+\-]\d\d:?\d\d|Z)/, function (d, v) {
      if (v === 'Z') v = '+00:00';
      var parts = (v + '').match(/([\+\-]|\d\d)/gi),
          minutes;

      if (parts) {
        minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
        d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
      }
    }]
  };
  parseFlags.dd = parseFlags.d;
  parseFlags.dddd = parseFlags.ddd;
  parseFlags.DD = parseFlags.D;
  parseFlags.mm = parseFlags.m;
  parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
  parseFlags.MM = parseFlags.M;
  parseFlags.ss = parseFlags.s;
  parseFlags.A = parseFlags.a;

  // Some common format strings
  fecha.masks = {
    default: 'ddd MMM DD YYYY HH:mm:ss',
    shortDate: 'M/D/YY',
    mediumDate: 'MMM D, YYYY',
    longDate: 'MMMM D, YYYY',
    fullDate: 'dddd, MMMM D, YYYY',
    shortTime: 'HH:mm',
    mediumTime: 'HH:mm:ss',
    longTime: 'HH:mm:ss.SSS'
  };

  /***
   * Format a date
   * @method format
   * @param {Date|number} dateObj
   * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
   */
  fecha.format = function (dateObj, mask, i18nSettings) {
    var i18n = i18nSettings || fecha.i18n;

    if (typeof dateObj === 'number') {
      dateObj = new Date(dateObj);
    }

    if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
      throw new Error('Invalid Date in fecha.format');
    }

    mask = fecha.masks[mask] || mask || fecha.masks['default'];

    var literals = [];

    // Make literals inactive by replacing them with ??
    mask = mask.replace(literal, function ($0, $1) {
      literals.push($1);
      return '??';
    });
    // Apply formatting rules
    mask = mask.replace(token, function ($0) {
      return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
    });
    // Inline literal values back into the formatted value
    return mask.replace(/\?\?/g, function () {
      return literals.shift();
    });
  };

  /**
   * Parse a date string into an object, changes - into /
   * @method parse
   * @param {string} dateStr Date string
   * @param {string} format Date parse format
   * @returns {Date|boolean}
   */
  fecha.parse = function (dateStr, format, i18nSettings) {
    var i18n = i18nSettings || fecha.i18n;

    if (typeof format !== 'string') {
      throw new Error('Invalid format in fecha.parse');
    }

    format = fecha.masks[format] || format;

    // Avoid regular expression denial of service, fail early for really long strings
    // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
    if (dateStr.length > 1000) {
      return false;
    }

    var isValid = true;
    var dateInfo = {};
    format.replace(token, function ($0) {
      if (parseFlags[$0]) {
        var info = parseFlags[$0];
        var index = dateStr.search(info[0]);
        if (!~index) {
          isValid = false;
        } else {
          dateStr.replace(info[0], function (result) {
            info[1](dateInfo, result, i18n);
            dateStr = dateStr.substr(index + result.length);
            return result;
          });
        }
      }

      return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
    });

    if (!isValid) {
      return false;
    }

    var today = new Date();
    if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
      dateInfo.hour = +dateInfo.hour + 12;
    } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
      dateInfo.hour = 0;
    }

    var date;
    if (dateInfo.timezoneOffset != null) {
      dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
      date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
    } else {
      date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
    }
    return date;
  };

  /* istanbul ignore next */
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = fecha;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return fecha;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    main.fecha = fecha;
  }
})(this);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Text: __webpack_require__(75),
  Line: __webpack_require__(76),
  Arc: __webpack_require__(77),
  Rect: __webpack_require__(78),
  Html: __webpack_require__(79),
  Tag: __webpack_require__(80)
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Util = __webpack_require__(0);
var GuideBase = __webpack_require__(9);

var Text = function (_GuideBase) {
  _inherits(Text, _GuideBase);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, _GuideBase.apply(this, arguments));
  }

  Text.prototype._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'text';
    /**
     * 辅助文本的位置
     * @type {Function | Array}
     */
    this.position = null;
    /**
     * 辅助文本的显示文字
     * @type {String}
     */
    this.content = null;
    /**
     * 辅助文本的样式配置
     * @type {Object}
     */
    this.style = {
      fill: '#000'
    };
    /**
     * x 方向的偏移量
     * @type {Number}
     */
    this.offsetX = 0;
    /**
     * y 方向的偏移量
     * @type {Number}
     */
    this.offsetY = 0;
  };

  Text.prototype.render = function render(coord, container) {
    var position = this.position;
    var point = this.parsePoint(coord, position);
    var content = this.content,
        style = this.style,
        offsetX = this.offsetX,
        offsetY = this.offsetY;


    if (offsetX) {
      point.x += offsetX;
    }

    if (offsetY) {
      point.y += offsetY;
    }

    var shape = container.addShape('text', {
      className: 'guide-text',
      attrs: Util.mix({
        x: point.x,
        y: point.y,
        text: content
      }, style)
    });
    this.element = shape;
  };

  return Text;
}(GuideBase);

GuideBase.Text = Text;
module.exports = Text;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Util = __webpack_require__(0);
var GuideBase = __webpack_require__(9);

var Line = function (_GuideBase) {
  _inherits(Line, _GuideBase);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, _GuideBase.apply(this, arguments));
  }

  Line.prototype._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'line';
    this.start = [];
    this.end = [];
    this.style = {
      stroke: '#000',
      lineWidth: 1
    };
  };

  Line.prototype.render = function render(coord, container) {
    var points = [];
    points[0] = this.parsePoint(coord, this.start);
    points[1] = this.parsePoint(coord, this.end);
    var shape = container.addShape('Line', {
      className: 'guide-line',
      attrs: Util.mix({
        x1: points[0].x,
        y1: points[0].y,
        x2: points[1].x,
        y2: points[1].y
      }, this.style)
    });
    this.element = shape;
  };

  return Line;
}(GuideBase);

GuideBase.Line = Line;
module.exports = Line;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Util = __webpack_require__(0);
var GuideBase = __webpack_require__(9);

var Arc = function (_GuideBase) {
  _inherits(Arc, _GuideBase);

  function Arc() {
    _classCallCheck(this, Arc);

    return _possibleConstructorReturn(this, _GuideBase.apply(this, arguments));
  }

  Arc.prototype._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'arc';
    /**
     * 起点
     * @type {Array | Function}
     */
    this.start = [];
    /**
     * 终点
     * @type {Array | Function}
     */
    this.end = [];
    /**
     * 辅助文本的样式配置
     * @type {Object}
     */
    this.style = {
      stroke: '#999',
      lineWidth: 1
    };
  };

  Arc.prototype.render = function render(coord, container) {
    var self = this;
    var start = self.parsePoint(coord, self.start);
    var end = self.parsePoint(coord, self.end);
    var coordCenter = coord.center;
    var radius = Math.sqrt((start.x - coordCenter.x) * (start.x - coordCenter.x) + (start.y - coordCenter.y) * (start.y - coordCenter.y));
    var startAngle = Math.atan2(start.y - coordCenter.y, start.x - coordCenter.x);
    var endAngle = Math.atan2(end.y - coordCenter.y, end.x - coordCenter.x);
    var shape = container.addShape('arc', {
      className: 'guide-arc',
      attrs: Util.mix({
        x: coordCenter.x,
        y: coordCenter.y,
        r: radius,
        startAngle: startAngle,
        endAngle: endAngle
      }, self.style)
    });
    self.element = shape;
  };

  return Arc;
}(GuideBase);

GuideBase.Arc = Arc;
module.exports = Arc;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Util = __webpack_require__(0);
var GuideBase = __webpack_require__(9);

var Rect = function (_GuideBase) {
  _inherits(Rect, _GuideBase);

  function Rect() {
    _classCallCheck(this, Rect);

    return _possibleConstructorReturn(this, _GuideBase.apply(this, arguments));
  }

  Rect.prototype._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'rect';
    this.start = [];
    this.end = [];
    this.style = {
      fill: '#CCD7EB',
      opacity: 0.4
    };
  };

  Rect.prototype.render = function render(coord, container) {
    var start = this.parsePoint(coord, this.start);
    var end = this.parsePoint(coord, this.end);
    var shape = container.addShape('rect', {
      className: 'guide-rect',
      attrs: Util.mix({
        x: start.x,
        y: start.y,
        width: Math.abs(end.x - start.x),
        height: Math.abs(start.y - end.y)
      }, this.style)
    });
    this.element = shape;
  };

  return Rect;
}(GuideBase);

GuideBase.Rect = Rect;
module.exports = Rect;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Util = __webpack_require__(0);
var GuideBase = __webpack_require__(9);

function getOffsetFromAlign(alignX, alignY, width, height) {
  var result = [];

  if (alignX === 'left' && alignY === 'top') {
    result[0] = 0;
    result[1] = 0;
  } else if (alignX === 'right' && alignY === 'top') {
    result[0] = -width;
    result[1] = 0;
  } else if (alignX === 'left' && alignY === 'bottom') {
    result[0] = 0;
    result[1] = Math.floor(-height);
  } else if (alignX === 'right' && alignY === 'bottom') {
    result[0] = Math.floor(-width);
    result[1] = Math.floor(-height);
  } else if (alignX === 'right' && alignY === 'middle') {
    result[0] = Math.floor(-width);
    result[1] = Math.floor(-height / 2);
  } else if (alignX === 'left' && alignY === 'middle') {
    result[0] = 0;
    result[1] = Math.floor(-height / 2);
  } else if (alignX === 'center' && alignY === 'bottom') {
    result[0] = Math.floor(-width / 2);
    result[1] = Math.floor(-height);
  } else if (alignX === 'center' && alignY === 'top') {
    result[0] = Math.floor(-width / 2);
    result[1] = 0;
  } else {
    result[0] = Math.floor(-width / 2);
    result[1] = Math.floor(-height / 2);
  }

  return result;
}

function modifyCSS(DOM, CSS) {
  for (var key in CSS) {
    if (CSS.hasOwnProperty(key)) {
      DOM.style[key] = CSS[key];
    }
  }
  return DOM;
}

function createDom(str) {
  var container = document.createElement('div');
  str = str.replace(/(^\s*)|(\s*$)/g, '');
  container.innerHTML = '' + str;
  return container.childNodes[0];
}

var Html = function (_GuideBase) {
  _inherits(Html, _GuideBase);

  function Html() {
    _classCallCheck(this, Html);

    return _possibleConstructorReturn(this, _GuideBase.apply(this, arguments));
  }

  Html.prototype._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'html';
    /**
     * dom 显示位置点
     * @type {Object | Array}
     */
    this.position = null;
    /**
      * 水平方向对齐方式，可取值 'left'、'center'、'right'
      * @type {String}
      */
    this.alignX = 'center';
    /**
      * 垂直方向对齐方式，可取值 'top'、'middle'、'bottom'
      * @type {String}
      */
    this.alignY = 'middle';
    /**
      * x 方向的偏移量
      * @type {Number}
      */
    this.offsetX = null;
    /**
      * y 方向的偏移量
      * @type {Number}
      */
    this.offsetY = null;
    /**
    * html内容
    *@type {String | Function}
    */
    this.html = null;
  };

  // override paint


  Html.prototype.render = function render(coord, container) {
    var self = this;
    var position = self.parsePoint(coord, self.position);
    var myNode = createDom(self.html);
    myNode = modifyCSS(myNode, {
      position: 'absolute',
      top: Math.floor(position.y) + 'px',
      left: Math.floor(position.x) + 'px',
      visibility: 'hidden'
    });

    var parentNode = container.get('canvas').get('el').parentNode;
    parentNode = modifyCSS(parentNode, {
      position: 'relative'
    });
    // 创建html guide 的容器
    var wrapperNode = void 0;
    if (parentNode.getElementsByClassName('guideWapper').length > 0) {
      wrapperNode = parentNode.getElementsByClassName('guideWapper')[0];
    } else {
      wrapperNode = createDom('<div class="guideWapper"></div>');
      wrapperNode = modifyCSS(wrapperNode, {
        position: 'absolute',
        top: 0,
        left: 0
      });
      parentNode.appendChild(wrapperNode);
    }
    wrapperNode.appendChild(myNode);

    var alignX = self.alignX,
        alignY = self.alignY,
        offsetX = self.offsetX,
        offsetY = self.offsetY;

    var width = Util.getWidth(myNode);
    var height = Util.getHeight(myNode);
    var newOffset = getOffsetFromAlign(alignX, alignY, width, height);
    position.x = position.x + newOffset[0];
    position.y = position.y + newOffset[1];

    if (offsetX) {
      position.x += offsetX;
    }

    if (offsetY) {
      position.y += offsetY;
    }

    modifyCSS(myNode, {
      top: Math.floor(position.y) + 'px',
      left: Math.floor(position.x) + 'px',
      visibility: 'visible'
    });
    self.element = wrapperNode;
  };

  Html.prototype.remove = function remove() {
    var element = this.element;
    element && element.remove();
  };

  return Html;
}(GuideBase);

GuideBase.Html = Html;
module.exports = Html;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Util = __webpack_require__(0);
var GuideBase = __webpack_require__(9);

var Tag = function (_GuideBase) {
  _inherits(Tag, _GuideBase);

  function Tag() {
    _classCallCheck(this, Tag);

    return _possibleConstructorReturn(this, _GuideBase.apply(this, arguments));
  }

  Tag.prototype._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'tag';
    this.position = null;
    this.content = null;
    this.direct = 'auto'; // 默认自动计算，如果用户设置了就按照用户设置的渲染
    this.offsetX = 0;
    this.offsetY = 0;
    this.side = 4; //  三角标的边长
    this.background = {
      padding: 5, // tag 内边距
      radius: 2, // tag 圆角
      fill: '#1890FF' // tag 背景色
    };
    this.textStyle = {
      fontSize: 12,
      fill: '#fff',
      textAlign: 'center',
      textBaseline: 'middle'
    };
    this.withPoint = true;
    this.pointStyle = {
      fill: '#1890FF',
      r: 3,
      lineWidth: 1,
      stroke: '#fff'
    };
  };

  Tag.prototype._getDirect = function _getDirect(container, point, tagWidth, tagHeight) {
    var direct = this.direct;
    if (direct === 'auto') {
      // 自动计算
      var side = this.side;
      var canvas = container.get('canvas');
      var clientWidth = canvas.getWidth();
      var clientHeight = canvas.getHeight();
      var x = point.x,
          y = point.y;


      var vertical = 't';
      var horizontal = 'l';

      if (y - side - tagHeight < 0) {
        vertical = 'b';
      }

      if (vertical === 'b') {
        if (y + side + tagHeight > clientHeight) {
          vertical = 't';
        }
      }

      var diff = vertical === 'c' ? side : 0;
      if (x - diff - tagWidth < 0) {
        horizontal = 'r';
      }
      if (horizontal === 'r') {
        var _diff = vertical === 'c' ? side : 0;
        if (x + _diff + tagWidth > clientWidth) {
          horizontal = 'l';
        }
      }
      direct = vertical + horizontal;
      this.direct = direct;
    }

    return direct;
  };

  Tag.prototype.render = function render(coord, container) {
    var position = this.parsePoint(coord, this.position);
    var content = this.content,
        background = this.background,
        textStyle = this.textStyle;


    var wrapperContainer = container.addGroup({
      className: 'guide-tag'
    });

    if (this.withPoint) {
      wrapperContainer.addShape('Circle', {
        className: 'guide-tag-point',
        attrs: Util.mix({
          x: position.x,
          y: position.y
        }, this.pointStyle)
      });
    }

    var tagContainer = wrapperContainer.addGroup();
    // 绘制文本
    var tagText = tagContainer.addShape('text', {
      className: 'guide-tag-text',
      zIndex: 1,
      attrs: Util.mix({
        x: 0,
        y: 0,
        text: content
      }, textStyle)
    });

    // 绘制背景框
    var textBBox = tagText.getBBox();
    var padding = Util.parsePadding(background.padding);
    var tagWidth = textBBox.width + padding[1] + padding[3];
    var tagHeight = textBBox.height + padding[0] + padding[2];
    var yMin = textBBox.minY - padding[0];
    var xMin = textBBox.minX - padding[3];
    var tagBg = tagContainer.addShape('rect', {
      className: 'guide-tag-bg',
      zIndex: -1,
      attrs: Util.mix({
        x: xMin,
        y: yMin,
        width: tagWidth,
        height: tagHeight
      }, background)
    });
    var direct = this._getDirect(container, position, tagWidth, tagHeight);
    var side = this.side;
    var x = position.x + this.offsetX;
    var y = position.y + this.offsetY;
    var arrowPoints = void 0;
    var radius = Util.parsePadding(background.radius);
    if (direct === 'tl') {
      arrowPoints = [{ x: tagWidth - side + xMin, y: tagHeight + yMin - 1 }, // 这个 1 是为了防止出现白边
      { x: tagWidth + xMin, y: tagHeight + yMin - 1 }, { x: tagWidth + xMin, y: tagHeight + side + yMin }];
      radius[2] = 0;
      x = x - tagWidth;
      y = y - side - tagHeight;
    } else if (direct === 'cl') {
      arrowPoints = [{ x: tagWidth + xMin - 1, y: (tagHeight - side) / 2 + yMin }, { x: tagWidth + xMin - 1, y: (tagHeight + side) / 2 + yMin }, { x: tagWidth + side + xMin, y: tagHeight / 2 + yMin }];

      x = x - tagWidth - side;
      y = y - tagHeight / 2;
    } else if (direct === 'bl') {
      arrowPoints = [{ x: tagWidth + xMin, y: -side + yMin }, { x: tagWidth - side + xMin, y: yMin + 1 }, { x: tagWidth + xMin, y: yMin + 1 }];
      radius[1] = 0;

      x = x - tagWidth;
      y = y + side;
    } else if (direct === 'bc') {
      arrowPoints = [{ x: tagWidth / 2 + xMin, y: -side + yMin }, { x: (tagWidth - side) / 2 + xMin, y: yMin + 1 }, { x: (tagWidth + side) / 2 + xMin, y: yMin + 1 }];
      x = x - tagWidth / 2;
      y = y + side;
    } else if (direct === 'br') {
      arrowPoints = [{ x: xMin, y: -side + yMin }, { x: xMin, y: yMin + 1 }, { x: side + xMin, y: yMin + 1 }];
      radius[0] = 0;
      y = y + side;
    } else if (direct === 'cr') {
      arrowPoints = [{ x: -side + xMin, y: tagHeight / 2 + yMin }, { x: xMin + 1, y: (tagHeight - side) / 2 + yMin }, { x: xMin + 1, y: (tagHeight + side) / 2 + yMin }];
      x = x + side;
      y = y - tagHeight / 2;
    } else if (direct === 'tr') {
      arrowPoints = [{ x: 0 + xMin, y: tagHeight + side + yMin }, { x: 0 + xMin, y: tagHeight + yMin - 1 }, { x: side + xMin, y: tagHeight + yMin - 1 }];
      radius[3] = 0;

      y = y - tagHeight - side;
    } else if (direct === 'tc') {
      arrowPoints = [{ x: (tagWidth - side) / 2 + xMin, y: tagHeight + yMin - 1 }, { x: (tagWidth + side) / 2 + xMin, y: tagHeight + yMin - 1 }, { x: tagWidth / 2 + xMin, y: tagHeight + side + yMin }];
      x = x - tagWidth / 2;
      y = y - tagHeight - side;
    }

    tagContainer.addShape('Polygon', {
      zIndex: 0,
      attrs: {
        points: arrowPoints,
        fill: background.fill
      }
    });

    tagBg.attr('radius', radius);
    tagContainer.moveTo(x - xMin, y - yMin);
    tagContainer.sort();

    this.element = wrapperContainer;
  };

  return Tag;
}(GuideBase);

GuideBase.Tag = Tag;
module.exports = Tag;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = __webpack_require__(0);
var Global = __webpack_require__(1);
var Tooltip = __webpack_require__(82);

// Register the default configuration for Tooltip
Global.tooltip = Util.deepMix({
  triggerOn: ['touchstart', 'touchmove'],
  // triggerOff: 'touchend',
  showTitle: false,
  showCrosshairs: false,
  crosshairsStyle: {
    stroke: 'rgba(0, 0, 0, 0.25)',
    lineWidth: 1
  },
  showTooltipMarker: true,
  background: {
    radius: 1,
    fill: 'rgba(0, 0, 0, 0.65)',
    padding: [3, 5]
  },
  titleStyle: {
    fontSize: 12,
    fill: '#fff',
    textAlign: 'start',
    textBaseline: 'top'
  },
  nameStyle: {
    fontSize: 12,
    fill: 'rgba(255, 255, 255, 0.65)',
    textAlign: 'start',
    textBaseline: 'middle'
  },
  valueStyle: {
    fontSize: 12,
    fill: '#fff',
    textAlign: 'start',
    textBaseline: 'middle'
  },
  showItemMarker: true,
  itemMarkerStyle: {
    radius: 3,
    symbol: 'circle',
    lineWidth: 1,
    stroke: '#fff'
  },
  layout: 'horizontal'
}, Global.tooltip || {});

function _getTooltipValueScale(geom) {
  var colorAttr = geom.getAttr('color');
  if (colorAttr) {
    var colorScale = colorAttr.getScale(colorAttr.type);
    if (colorScale.isLinear) {
      return colorScale;
    }
  }
  var xScale = geom.getXScale();
  var yScale = geom.getYScale();
  if (yScale) {
    return yScale;
  }

  return xScale;
}

function getTooltipName(geom, origin) {
  var name = void 0;
  var nameScale = void 0;
  var groupScales = geom._getGroupScales();
  if (groupScales.length) {
    // 如果存在分组类型，取第一个分组类型
    Util.each(groupScales, function (scale) {
      nameScale = scale;
      return false;
    });
  }
  if (nameScale) {
    var field = nameScale.field;
    name = nameScale.getText(origin[field]);
  } else {
    var valueScale = _getTooltipValueScale(geom);
    name = valueScale.alias || valueScale.field;
  }
  return name;
}

function getTooltipValue(geom, origin) {
  var scale = _getTooltipValueScale(geom);
  return scale.getText(origin[scale.field]);
}

function getTooltipTitle(geom, origin) {
  var position = geom.getAttr('position');
  var field = position.getFields()[0];
  var scale = geom.get('scales')[field];
  return scale.getText(origin[scale.field]);
}

function _indexOfArray(items, item) {
  var rst = -1;
  Util.each(items, function (sub, index) {
    if (sub.title === item.title && sub.name === item.name && sub.value === item.value && sub.color === item.color) {
      rst = index;
      return false;
    }
  });
  return rst;
}

// 去除重复的值, 去除不同图形相同数据，只展示一份即可
function _uniqItems(items) {
  var tmp = [];
  Util.each(items, function (item) {
    var index = _indexOfArray(tmp, item);
    if (index === -1) {
      tmp.push(item);
    } else {
      tmp[index] = item;
    }
  });
  return tmp;
}

function isEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

var TooltipController = function () {
  function TooltipController(cfg) {
    _classCallCheck(this, TooltipController);

    this.enable = true;
    this.cfg = {};
    this.tooltip = null;
    this.chart = null;
    this.timeStamp = 0;
    Util.mix(this, cfg);
    var chart = this.chart;
    this.canvasDom = chart.get('canvas').get('el');
  }

  TooltipController.prototype._setCrosshairsCfg = function _setCrosshairsCfg() {
    var self = this;
    var chart = self.chart;
    var defaultCfg = Util.mix({}, Global.tooltip);
    var geoms = chart.get('geoms');
    var shapes = [];
    Util.each(geoms, function (geom) {
      var type = geom.get('type');
      if (Util.indexOf(shapes, type) === -1) {
        shapes.push(type);
      }
    });
    if (geoms.length && chart.get('coord').type === 'cartesian') {
      if (shapes.length === 1 && ['line', 'area', 'path', 'point'].indexOf(shapes[0]) !== -1) {
        Util.mix(defaultCfg, {
          showCrosshairs: true
        });
      }
    }

    return defaultCfg;
  };

  TooltipController.prototype._getMaxLength = function _getMaxLength() {
    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var layout = cfg.layout,
        plotRange = cfg.plotRange;

    return layout === 'horizontal' ? plotRange.br.x - plotRange.bl.x : plotRange.bl.y - plotRange.tr.y;
  };

  TooltipController.prototype.render = function render() {
    var self = this;

    if (self.tooltip || !self.enable) {
      return;
    }

    var chart = self.chart;
    var canvas = chart.get('canvas');
    var frontPlot = chart.get('frontPlot').addGroup({
      className: 'tooltipContainer',
      zIndex: 10
    });
    var backPlot = chart.get('backPlot').addGroup({
      className: 'tooltipContainer'
    });
    var plotRange = chart.get('plotRange');
    var coord = chart.get('coord');

    var defaultCfg = self._setCrosshairsCfg();
    var cfg = self.cfg;
    cfg = Util.deepMix({
      plotRange: plotRange,
      frontPlot: frontPlot,
      backPlot: backPlot,
      canvas: canvas,
      fixed: coord.transposed || coord.isPolar
    }, defaultCfg, cfg);
    cfg.maxLength = self._getMaxLength(cfg);
    this.cfg = cfg;
    var tooltip = new Tooltip(cfg);
    self.tooltip = tooltip;
    self.bindEvents();
  };

  TooltipController.prototype.clear = function clear() {
    var tooltip = this.tooltip;
    tooltip && tooltip.destroy();
    this.tooltip = null;
    this.prePoint = null;
    this.unBindEvents();
  };

  TooltipController.prototype._getTooltipMarkerStyle = function _getTooltipMarkerStyle() {
    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var type = cfg.type,
        items = cfg.items;

    var tooltipCfg = this.cfg;
    if (type === 'rect') {
      var x = void 0;
      var y = void 0;
      var width = void 0;
      var height = void 0;
      var chart = this.chart;

      var _chart$get = chart.get('plotRange'),
          tl = _chart$get.tl,
          br = _chart$get.br;

      var coord = chart.get('coord');
      var firstItem = items[0];
      var lastItem = items[items.length - 1];
      var intervalWidth = firstItem.width;
      if (coord.transposed) {
        x = tl.x;
        y = lastItem.y - intervalWidth * 0.75;
        width = br.x - tl.x;
        height = firstItem.y - lastItem.y + 1.5 * intervalWidth;
      } else {
        x = firstItem.x - intervalWidth * 0.75;
        y = tl.y;
        width = lastItem.x - firstItem.x + 1.5 * intervalWidth;
        height = br.y - tl.y;
      }

      cfg.style = Util.mix({
        x: x,
        y: y,
        width: width,
        height: height,
        fill: '#CCD6EC',
        opacity: 0.3
      }, tooltipCfg.tooltipMarkerStyle);
    } else {
      cfg.style = Util.mix({
        radius: 4,
        fill: '#fff',
        lineWidth: 2
      }, tooltipCfg.tooltipMarkerStyle);
    }

    return cfg;
  };

  TooltipController.prototype._setTooltip = function _setTooltip(point, items) {
    var tooltipMarkerCfg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var lastActive = this._lastActive;
    var tooltip = this.tooltip;
    var cfg = this.cfg;

    items = _uniqItems(items); // 过滤重复的记录项

    if (cfg.onShow) {
      // tooltip 展示
      cfg.onShow({
        x: point.x,
        y: point.y,
        tooltip: tooltip,
        items: items,
        tooltipMarkerCfg: tooltipMarkerCfg
      });
    }
    if (isEqual(lastActive, items)) {
      return;
    }
    this._lastActive = items;

    if (cfg.onChange || Util.isFunction(cfg.custom)) {
      // 兼容之前的写法
      var onChange = cfg.onChange || cfg.custom;
      onChange({
        x: point.x,
        y: point.y,
        tooltip: tooltip,
        items: items,
        tooltipMarkerCfg: tooltipMarkerCfg
      });
    }

    if (!cfg.custom) {
      var first = items[0];
      var title = first.title || first.name;
      tooltip.setContent(title, items);
    }
    tooltip.setPosition(items);

    var markerItems = tooltipMarkerCfg.items;
    if (cfg.showTooltipMarker && markerItems.length) {
      tooltipMarkerCfg = this._getTooltipMarkerStyle(tooltipMarkerCfg);
      tooltip.setMarkers(tooltipMarkerCfg);
    } else {
      tooltip.clearMarkers();
    }

    tooltip.show();
  };

  TooltipController.prototype.showTooltip = function showTooltip(point) {
    var self = this;
    var chart = self.chart;

    var tooltipMarkerType = void 0;
    var tooltipMarkerItems = [];
    var items = [];
    var cfg = self.cfg;
    var marker = void 0;
    if (cfg.showItemMarker) {
      marker = cfg.itemMarkerStyle;
    }

    var geoms = chart.get('geoms');
    var coord = chart.get('coord');

    Util.each(geoms, function (geom) {
      var type = geom.get('type');
      var records = geom.getSnapRecords(point);
      Util.each(records, function (record) {
        if (record.x && record.y) {
          var x = record.x,
              y = record.y,
              _origin = record._origin,
              color = record.color;

          var tooltipItem = {
            x: x,
            y: Util.isArray(y) ? y[1] : y,
            color: color || Global.defaultColor,
            origin: _origin,
            name: getTooltipName(geom, _origin),
            value: getTooltipValue(geom, _origin),
            title: getTooltipTitle(geom, _origin)
          };
          if (marker) {
            tooltipItem.marker = Util.mix({
              fill: color || Global.defaultColor
            }, marker);
          }
          items.push(tooltipItem);

          if (['line', 'area', 'path'].indexOf(type) !== -1) {
            tooltipMarkerType = 'circle';
            tooltipMarkerItems.push(tooltipItem);
          } else if (type === 'interval' && coord.type === 'cartesian') {
            tooltipMarkerType = 'rect';
            tooltipItem.width = geom.getSize(record._origin);
            tooltipMarkerItems.push(tooltipItem);
          }
        }
      });
    });

    if (items.length) {
      var tooltipMarkerCfg = {
        items: tooltipMarkerItems,
        type: tooltipMarkerType
      };
      self._setTooltip(point, items, tooltipMarkerCfg);
    } else {
      self.hideTooltip();
    }
  };

  TooltipController.prototype.hideTooltip = function hideTooltip() {
    var cfg = this.cfg;
    this._lastActive = [];
    var tooltip = this.tooltip;
    if (tooltip) {
      tooltip.hide();
      if (cfg.onHide) {
        cfg.onHide({
          tooltip: tooltip
        });
      }
      var canvas = this.chart.get('canvas');
      canvas.draw();
    }
  };

  TooltipController.prototype.handleShowEvent = function handleShowEvent(ev) {
    var chart = this.chart;
    var plot = chart.get('plotRange');

    var _Util$createEvent = Util.createEvent(ev, chart),
        x = _Util$createEvent.x,
        y = _Util$createEvent.y;

    if (!(x >= plot.tl.x && x <= plot.tr.x && y >= plot.tl.y && y <= plot.br.y)) {
      // not in chart plot
      this.hideTooltip();
      return;
    }
    var lastTimeStamp = this.timeStamp;
    var timeStamp = +new Date();
    if (timeStamp - lastTimeStamp > 16) {
      this.showTooltip({ x: x, y: y });
      this.timeStamp = timeStamp;
    }
  };

  TooltipController.prototype.handleHideEvent = function handleHideEvent() {
    this.hideTooltip();
  };

  TooltipController.prototype.handleDocEvent = function handleDocEvent(ev) {
    var canvasDom = this.canvasDom;
    if (ev.target !== canvasDom) {
      this.hideTooltip();
    }
  };

  TooltipController.prototype._handleEvent = function _handleEvent(methodName, method, action) {
    var canvasDom = this.canvasDom;
    Util.each([].concat(methodName), function (aMethod) {
      if (Util.isFunction(aMethod)) {
        aMethod(method, action); // TODO： 测试，供用户自己绑定事件
      } else if (action === 'bind') {
        Util.addEventListener(canvasDom, aMethod, method);
      } else {
        Util.removeEventListener(canvasDom, aMethod, method);
      }
    });
  };

  TooltipController.prototype.bindEvents = function bindEvents() {
    var triggerOn = this.cfg.triggerOn;
    var triggerOff = this.cfg.triggerOff;
    var showMethod = Util.wrapBehavior(this, 'handleShowEvent');
    var hideMethod = Util.wrapBehavior(this, 'handleHideEvent');

    triggerOn && this._handleEvent(triggerOn, showMethod, 'bind');
    triggerOff && this._handleEvent(triggerOff, hideMethod, 'bind');
    // TODO: 当用户点击canvas 外的事件时 tooltip 消失
    var docMethod = Util.wrapBehavior(this, 'handleDocEvent');
    Util.isBrowser && Util.addEventListener(document, 'touchstart', docMethod);
  };

  TooltipController.prototype.unBindEvents = function unBindEvents() {
    var triggerOn = this.cfg.triggerOn;
    var triggerOff = this.cfg.triggerOff;
    var showMethod = Util.getWrapBehavior(this, 'handleShowEvent');
    var hideMethod = Util.getWrapBehavior(this, 'handleHideEvent');

    triggerOn && this._handleEvent(triggerOn, showMethod, 'unBind');
    triggerOff && this._handleEvent(triggerOff, hideMethod, 'unBind');
    // TODO: 当用户点击canvas 外的事件时 tooltip 消失
    var docMethod = Util.getWrapBehavior(this, 'handleDocEvent');
    Util.isBrowser && Util.removeEventListener(document, 'touchstart', docMethod);
  };

  return TooltipController;
}();

module.exports = {
  init: function init(chart) {
    var tooltipController = new TooltipController({
      chart: chart
    });
    chart.set('tooltipController', tooltipController);
    /**
     * 配置 tooltip
     * @param  {Boolean|Object} enable Boolean 表示是否开启tooltip，Object 则表示配置项
     * @param  {Object} cfg 配置项
     * @return {Chart} 返回 Chart 实例
     */
    chart.tooltip = function (enable) {
      var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (Util.isObject(enable)) {
        cfg = enable;
        enable = true;
      }
      tooltipController.enable = enable;
      tooltipController.cfg = cfg;

      return this;
    };
  },
  afterGeomDraw: function afterGeomDraw(chart) {
    var tooltipController = chart.get('tooltipController');
    tooltipController.render();

    /**
     * 根据坐标点显示对应的 tooltip
     * @param  {Object} point 画布上的点
     * @return {Chart}       返回 chart 实例
     */
    chart.showTooltip = function (point) {
      tooltipController.showTooltip(point);
      return this;
    };

    /**
     * 隐藏 tooltip
     * @return {Chart}       返回 chart 实例
     */
    chart.hideTooltip = function () {
      tooltipController.hideTooltip();
      return this;
    };
  },
  clearInner: function clearInner(chart) {
    var tooltipController = chart.get('tooltipController');
    tooltipController.clear();
  }
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = __webpack_require__(0);
var Marker = __webpack_require__(65);
var Container = __webpack_require__(66);
var GAP = 4;

var Tooltip = function () {
  Tooltip.prototype.getDefaultCfg = function getDefaultCfg() {
    return {
      /**
       * 是否显示 tooltip 辅助线配置，默认不展示
       * @type {Object}
       */
      showCrosshairs: false,
      /**
       * tooltip 辅助线显示样式
       * @type {Object}
       */
      crosshairsStyle: {
        stroke: 'rgba(0, 0, 0, 0.25)',
        lineWidth: 1
      },
      /**
       * tooltip 容器的样式
       * @type {Object}
       */
      background: null,
      /**
       * 布局方式，horizontal 或者 vertical
       * @type {String}
       */
      layout: 'horizontal',
      offsetX: 0,
      offsetY: 0
    };
  };

  function Tooltip(cfg) {
    _classCallCheck(this, Tooltip);

    Util.deepMix(this, this.getDefaultCfg(), cfg);
    var frontPlot = this.frontPlot;
    var plotRange = this.plotRange;

    if (!this.custom) {
      // custom 表示用户使用自定义 tooltip
      var container = new Container(Util.mix({
        parent: frontPlot
      }, cfg));
      this.container = container;
      if (!this.fixed) {
        this.tooltipArrow = frontPlot.addShape('Polygon', {
          className: 'tooltip-arrow',
          visible: false,
          zIndex: -1,
          attrs: {
            points: [],
            fill: this.background.fill
          }
        });
      }
    }

    if (this.showCrosshairs) {
      var crosshairsStyle = this.crosshairsStyle;
      var shape = frontPlot.addShape('Line', {
        className: 'tooltip-crosshairs',
        zIndex: 0,
        visible: false,
        attrs: Util.mix({
          x1: 0,
          y1: plotRange.bl.y,
          x2: 0,
          y2: plotRange.tl.y
        }, crosshairsStyle)
      });
      this.crosshairsShape = shape;
    }

    frontPlot.sort();
  }

  Tooltip.prototype.setContent = function setContent(title, items) {
    this.title = title;
    this.items = items;
    var container = this.container;
    container.setTitle(title);
    container.setItems(items);
  };

  Tooltip.prototype.setPosition = function setPosition(items) {
    var container = this.container,
        plotRange = this.plotRange,
        offsetX = this.offsetX,
        offsetY = this.offsetY,
        crosshairsShape = this.crosshairsShape,
        fixed = this.fixed,
        tooltipArrow = this.tooltipArrow;

    crosshairsShape && crosshairsShape.moveTo(items[0].x, 0); // 移动辅助线

    if (!container) {
      return;
    }

    var containerBBox = container.container.getBBox();
    var minX = containerBBox.minX,
        minY = containerBBox.minY,
        width = containerBBox.width,
        height = containerBBox.height;
    var tl = plotRange.tl,
        tr = plotRange.tr;

    var posX = 0;
    var posY = tl.y - height - GAP + offsetY; // 垂直方向贴着图表绘图区域上方边缘

    if (fixed) {
      var x = (tl.x + tr.x) / 2;
      posX = x - width / 2 + offsetX;
    } else {
      var _x = void 0;
      if (items.length > 1) {
        _x = (items[0].x + items[items.length - 1].x) / 2;
      } else {
        _x = items[0].x;
      }
      posX = _x - width / 2 + offsetX;
      // 调整位置，始终位于图表范围内
      if (posX < tl.x) {
        posX = tl.x;
      }
      if (posX + width > tr.x) {
        posX = tr.x - width;
      }

      // if (posY < 0) {
      //   posY = 0;
      // }

      if (tooltipArrow) {
        tooltipArrow.attr('points', [{ x: _x - 3, y: tl.y - GAP + offsetY }, { x: _x + 3, y: tl.y - GAP + offsetY }, { x: _x, y: tl.y + offsetY }]);
        var backShape = container.backShape;
        var radius = Util.parsePadding(backShape.attr('radius'));
        if (_x === tl.x) {
          radius[3] = 0;

          tooltipArrow.attr('points', [{ x: tl.x, y: tl.y + offsetY }, { x: tl.x, y: tl.y - GAP + offsetY }, { x: tl.x + GAP, y: tl.y - GAP + offsetY }]);
        } else if (_x === tr.x) {
          radius[2] = 0;

          tooltipArrow.attr('points', [{ x: tr.x, y: tl.y + offsetY }, { x: tr.x - GAP, y: tl.y - GAP + offsetY }, { x: tr.x, y: tl.y - GAP + offsetY }]);
        }
        backShape.attr('radius', radius);
      }
    }

    container.moveTo(posX - minX, posY - minY);
  };

  Tooltip.prototype.setMarkers = function setMarkers() {
    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var self = this;
    var items = cfg.items,
        style = cfg.style,
        type = cfg.type;

    var markerGroup = self._getMarkerGroup(type);
    if (type === 'circle') {
      for (var i = 0, length = items.length; i < length; i++) {
        var item = items[i];
        var marker = new Marker({
          className: 'tooltip-circle-marker',
          attrs: Util.mix({
            x: item.x,
            y: item.y,
            stroke: item.color
          }, style)
        });
        markerGroup.add(marker);
      }
    } else {
      markerGroup.addShape('rect', {
        className: 'tooltip-rect-marker',
        attrs: style
      });
    }
  };

  Tooltip.prototype.clearMarkers = function clearMarkers() {
    var markerGroup = this.markerGroup;
    markerGroup && markerGroup.clear();
  };

  Tooltip.prototype.show = function show() {
    var crosshairsShape = this.crosshairsShape;
    var markerGroup = this.markerGroup;
    var container = this.container;
    var tooltipArrow = this.tooltipArrow;
    var canvas = this.canvas;
    // canvas.sort();
    crosshairsShape && crosshairsShape.show();
    markerGroup && markerGroup.show();
    container && container.show();
    tooltipArrow && tooltipArrow.show();
    canvas.draw();
  };

  Tooltip.prototype.hide = function hide() {
    var crosshairsShape = this.crosshairsShape;
    var markerGroup = this.markerGroup;
    var container = this.container;
    var tooltipArrow = this.tooltipArrow;
    crosshairsShape && crosshairsShape.hide();
    markerGroup && markerGroup.hide();
    container && container.hide();
    tooltipArrow && tooltipArrow.hide();
  };

  Tooltip.prototype.destroy = function destroy() {
    var crosshairsShape = this.crosshairsShape;
    var markerGroup = this.markerGroup;
    var container = this.container;
    var tooltipArrow = this.tooltipArrow;

    crosshairsShape && crosshairsShape.remove(true);
    markerGroup && markerGroup.remove(true);
    container && container.clear();
    tooltipArrow && tooltipArrow.remove(true);

    this.destroyed = true;
  };

  Tooltip.prototype._getMarkerGroup = function _getMarkerGroup(type) {
    var markerGroup = this.markerGroup;
    if (!markerGroup) {
      if (type === 'circle') {
        markerGroup = this.frontPlot.addGroup({
          zIndex: 1
        });
      } else {
        markerGroup = this.backPlot.addGroup();
      }
      this.markerGroup = markerGroup;
    } else {
      markerGroup.clear();
    }

    return markerGroup;
  };

  return Tooltip;
}();

module.exports = Tooltip;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = __webpack_require__(0);
var Guide = __webpack_require__(9);
var Global = __webpack_require__(1);

// register the default configuration for Guide
Global.guide = Util.deepMix({
  line: {
    style: {
      stroke: '#a3a3a3',
      lineWidth: 1
    },
    top: true
  },
  text: {
    style: {
      fill: '#787878',
      textAlign: 'center',
      textBaseline: 'middle'
    },
    offsetX: 0,
    offsetY: 0,
    top: true
  },
  rect: {
    style: {
      fill: '#fafafa'
    },
    top: false
  },
  arc: {
    style: {
      stroke: '#a3a3a3'
    },
    top: true
  },
  html: {
    offsetX: 0,
    offsetY: 0,
    alignX: 'middle',
    alignY: 'middle'
  },
  tag: {
    top: true,
    offsetX: 0, // X 轴偏移
    offsetY: 0, // Y 轴偏移
    side: 4, //  三角标的边长
    background: {
      padding: 5, // tag 内边距
      radius: 2, // tag 圆角
      fill: '#1890FF' // tag 背景色
    },
    textStyle: {
      fontSize: 12,
      fill: '#fff',
      textAlign: 'center',
      textBaseline: 'middle'
    }
  }
}, Global.guide || {});

var GuideController = function () {
  function GuideController(cfg) {
    _classCallCheck(this, GuideController);

    this.guides = [];
    this.xScale = null;
    this.yScales = null;
    Util.mix(this, cfg);
  }

  GuideController.prototype.paint = function paint(coord) {
    var self = this;
    var guides = self.guides;
    var xScale = self.xScale;
    var yScales = self.yScales;
    Util.each(guides, function (guide) {
      guide.xScale = xScale;
      guide.yScales = yScales;
      var container = guide.top ? self.frontPlot : self.backPlot;
      guide.render(coord, container);
    });
  };

  GuideController.prototype.clear = function clear() {
    this.reset();
    this.guides = [];
    return this;
  };

  GuideController.prototype.reset = function reset() {
    var guides = this.guides;
    Util.each(guides, function (guide) {
      guide.remove();
    });
  };

  GuideController.prototype._createGuide = function _createGuide(type, cfg) {
    var ClassName = Util.upperFirst(type);
    var guide = new Guide[ClassName](Util.deepMix({}, Global.guide[type], cfg));
    this.guides.push(guide);
    return this;
  };

  GuideController.prototype.line = function line() {
    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return this._createGuide('line', cfg);
  };

  GuideController.prototype.text = function text() {
    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return this._createGuide('text', cfg);
  };

  GuideController.prototype.arc = function arc() {
    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return this._createGuide('arc', cfg);
  };

  GuideController.prototype.html = function html() {
    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return this._createGuide('html', cfg);
  };

  GuideController.prototype.rect = function rect() {
    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return this._createGuide('rect', cfg);
  };

  GuideController.prototype.tag = function tag() {
    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return this._createGuide('tag', cfg);
  };

  return GuideController;
}();

module.exports = {
  init: function init(chart) {
    var guideController = new GuideController({
      frontPlot: chart.get('frontPlot').addGroup({
        zIndex: 20,
        className: 'guideContainer'
      }),
      backPlot: chart.get('backPlot').addGroup({
        className: 'guideContainer'
      })
    });
    chart.set('guideController', guideController);
    /**
     * 为图表添加 guide
     * @return {GuideController} 返回 guide 控制器
     */
    chart.guide = function () {
      return guideController;
    };
  },
  afterGeomDraw: function afterGeomDraw(chart) {
    var guideController = chart.get('guideController');
    if (!guideController.guides.length) {
      return;
    }
    var xScale = chart.getXScale();
    var yScales = chart.getYScales();
    var coord = chart.get('coord');
    guideController.xScale = xScale;
    guideController.yScales = yScales;
    guideController.paint(coord);
  },
  clear: function clear(chart) {
    chart.get('guideController').clear();
  },
  repaint: function repaint(chart) {
    chart.get('guideController').reset();
  }
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = __webpack_require__(0);
var List = __webpack_require__(66);
var Global = __webpack_require__(1);
var LEGEND_GAP = 12;
var MARKER_SIZE = 3;

var DEFAULT_CFG = {
  itemMarginBottom: 12,
  itemGap: 10,
  showTitle: false,
  titleStyle: {
    fontSize: 12,
    fill: '#808080',
    textAlign: 'start',
    textBaseline: 'top'
  },
  nameStyle: {
    fill: '#808080',
    fontSize: 12,
    textAlign: 'start',
    textBaseline: 'middle'
  },
  valueStyle: {
    fill: '#000000',
    fontSize: 12,
    textAlign: 'start',
    textBaseline: 'middle'
  },
  unCheckColor: '#bfbfbf',
  itemWidth: 'auto',
  wordSpace: 6
};

// Register the default configuration for Legend
Global.legend = Util.deepMix({
  right: Util.mix({
    position: 'right',
    layout: 'vertical'
  }, DEFAULT_CFG),
  left: Util.mix({
    position: 'left',
    layout: 'vertical'
  }, DEFAULT_CFG),
  top: Util.mix({
    position: 'top',
    layout: 'horizontal'
  }, DEFAULT_CFG),
  bottom: Util.mix({
    position: 'bottom',
    layout: 'horizontal'
  }, DEFAULT_CFG)
}, Global.legend || {});

function compare(a, b) {
  return a - b;
}

function _isScaleExist(scales, compareScale) {
  var flag = false;
  Util.each(scales, function (scale) {
    var scaleValues = [].concat(scale.values);
    var compareScaleValues = [].concat(compareScale.values);
    if (scale.type === compareScale.type && scale.field === compareScale.field && scaleValues.sort(compare).toString() === compareScaleValues.sort(compare).toString()) {
      flag = true;
      return;
    }
  });

  return flag;
}

var LegendController = function () {
  function LegendController(cfg) {
    _classCallCheck(this, LegendController);

    this.legendCfg = {};
    this.enable = true;
    this.position = 'top';
    Util.mix(this, cfg);
    var chart = this.chart;
    this.canvasDom = chart.get('canvas').get('el');
    this.clear();
  }

  LegendController.prototype.addLegend = function addLegend(scale, attr, filterVals) {
    var self = this;
    var legendCfg = self.legendCfg;
    var field = scale.field;
    var fieldCfg = legendCfg[field];

    if (fieldCfg === false) {
      // 如果不显示此图例
      return null;
    }

    if (fieldCfg && fieldCfg.custom) {
      // 自定义图例逻辑
      self.addCustomLegend(field);
    } else {
      var position = legendCfg.position || self.position;
      if (fieldCfg && fieldCfg.position) {
        // 如果对某个图例单独设置 position，则以该 position 为准
        position = fieldCfg.position;
      }
      if (scale.isCategory) {
        // 目前只支持分类
        self._addCategroyLegend(scale, attr, position, filterVals);
      }
    }
  };

  LegendController.prototype.addCustomLegend = function addCustomLegend(field) {
    var self = this;

    var legendCfg = self.legendCfg;
    if (field && legendCfg[field]) {
      legendCfg = legendCfg[field];
    }

    var position = legendCfg.position || self.position;
    var legends = self.legends;
    legends[position] = legends[position] || [];
    var items = legendCfg.items;
    if (!items) {
      return null;
    }

    var container = self.container;
    Util.each(items, function (item) {
      if (!Util.isObject(item.marker)) {
        item.marker = {
          symbol: item.marker || 'circle',
          fill: item.fill,
          radius: MARKER_SIZE
        };
      } else {
        item.marker.radius = item.marker.radius || MARKER_SIZE;
      }
      item.checked = Util.isNil(item.checked) ? true : item.checked;
      item.name = item.name || item.value; // 兼容 value 的写法
    });
    var legend = new List(Util.deepMix({}, Global.legend[position], legendCfg, {
      maxLength: self._getMaxLength(position),
      items: items,
      parent: container
    }));
    // container.add(legend.container);
    legends[position].push(legend);
  };

  LegendController.prototype.clear = function clear() {
    var legends = this.legends;
    Util.each(legends, function (legendItems) {
      Util.each(legendItems, function (legend) {
        legend.clear();
      });
    });

    this.legends = {};
    this.unBindEvents();
  };

  LegendController.prototype._isFiltered = function _isFiltered(scale, values, value) {
    var rst = false;
    value = scale.invert(value);
    Util.each(values, function (val) {
      rst = rst || scale.getText(val) === scale.getText(value);
      if (rst) {
        return false;
      }
    });
    return rst;
  };

  LegendController.prototype._getMaxLength = function _getMaxLength(position) {
    var chart = this.chart;
    var appendPadding = chart.get('appendPadding') * 2;
    return position === 'right' || position === 'left' ? chart.get('height') - appendPadding : chart.get('width') - appendPadding;
  };

  LegendController.prototype._addCategroyLegend = function _addCategroyLegend(scale, attr, position, filterVals) {
    var self = this;
    var legendCfg = self.legendCfg,
        legends = self.legends,
        container = self.container;

    var items = [];
    var field = scale.field;
    var ticks = scale.getTicks();
    legends[position] = legends[position] || [];

    var symbol = 'circle';
    if (legendCfg[field] && legendCfg[field].marker) {
      // 用户为 field 对应的图例定义了 marker
      symbol = legendCfg[field].marker;
    } else if (legendCfg.marker) {
      symbol = legendCfg.marker;
    }

    Util.each(ticks, function (tick) {
      var text = tick.text;
      var name = text;
      var scaleValue = tick.value;
      var value = scale.invert(scaleValue);
      var color = attr.mapping(value).join('') || Global.defaultColor;

      var marker = {
        fill: color,
        radius: 3,
        symbol: 'circle',
        stroke: '#fff'
      };

      if (Util.isPlainObject(symbol)) {
        Util.mix(marker, symbol);
      } else {
        marker.symbol = symbol;
      }

      items.push({
        name: name, // 图例项显示文本的内容
        dataValue: value, // 图例项对应原始数据中的数值
        checked: filterVals ? self._isFiltered(scale, filterVals, scaleValue) : true,
        marker: marker
      });
    });

    var lastCfg = Util.deepMix({}, Global.legend[position], legendCfg[field] || legendCfg, {
      maxLength: self._getMaxLength(position),
      items: items,
      field: field,
      filterVals: filterVals,
      parent: container
    });
    if (lastCfg.showTitle) {
      Util.deepMix(lastCfg, {
        title: scale.alias || scale.field
      });
    }

    var legend = new List(lastCfg);
    // container.add(legend.container);
    legends[position].push(legend);
    return legend;
  };

  LegendController.prototype._alignLegend = function _alignLegend(legend, pre, position) {
    var self = this;
    var _self$plotRange = self.plotRange,
        tl = _self$plotRange.tl,
        bl = _self$plotRange.bl;

    var chart = self.chart;
    var offsetX = legend.offsetX || 0;
    var offsetY = legend.offsetY || 0;
    var chartWidth = chart.get('width');
    var chartHeight = chart.get('height');
    var appendPadding = chart.get('appendPadding');
    var legendHeight = legend.getHeight();
    var legendWidth = legend.getWidth();

    var x = 0;
    var y = 0;
    if (position === 'left' || position === 'right') {
      // position 为 left、right，默认图例整体居中对齐
      var verticalAlign = legend.verticalAlign || 'middle'; // 图例垂直方向上的对齐方式
      var height = Math.abs(tl.y - bl.y);
      x = position === 'left' ? appendPadding : chartWidth - legendWidth - appendPadding;
      y = (height - legendHeight) / 2 + tl.y;
      if (verticalAlign === 'top') {
        y = tl.y;
      } else if (verticalAlign === 'bottom') {
        y = bl.y - legendHeight;
      }

      if (pre) {
        y = pre.get('y') - legendHeight - LEGEND_GAP;
      }
    } else {
      // position 为 top、bottom，图例整体居左对齐
      var align = legend.align || 'left'; // 图例水平方向上的对齐方式
      x = appendPadding;

      if (align === 'center') {
        x = chartWidth / 2 - legendWidth / 2;
      } else if (align === 'right') {
        x = chartWidth - (legendWidth + appendPadding);
      }
      y = position === 'top' ? appendPadding + Math.abs(legend.container.getBBox().minY) : chartHeight - legendHeight;
      if (pre) {
        var preWidth = pre.getWidth();
        x = pre.x + preWidth + LEGEND_GAP;
      }
    }
    if (position === 'bottom' && offsetY > 0) {
      offsetY = 0;
    }
    if (position === 'right' && offsetX > 0) {
      offsetX = 0;
    }
    legend.moveTo(x + offsetX, y + offsetY);
  };

  LegendController.prototype.alignLegends = function alignLegends() {
    var self = this;
    var legends = self.legends;
    Util.each(legends, function (legendItems, position) {
      Util.each(legendItems, function (legend, index) {
        var pre = legendItems[index - 1];
        self._alignLegend(legend, pre, position);
      });
    });

    return self;
  };

  LegendController.prototype.handleEvent = function handleEvent(ev) {
    var self = this;

    function findItem(x, y) {
      var result = null;
      var legends = self.legends;
      Util.each(legends, function (legendItems) {
        Util.each(legendItems, function (legend) {
          var itemsGroup = legend.itemsGroup,
              legendHitBoxes = legend.legendHitBoxes;

          var children = itemsGroup.get('children');
          if (children.length) {
            var legendPosX = legend.x;
            var legendPosY = legend.y;
            Util.each(legendHitBoxes, function (box, index) {
              if (x >= box.x + legendPosX && x <= box.x + box.width + legendPosX && y >= box.y + legendPosY && y <= box.height + box.y + legendPosY) {
                // inbox
                result = {
                  clickedItem: children[index],
                  clickedLegend: legend
                };
                return false;
              }
            });
          }
        });
      });
      return result;
    }

    var chart = self.chart;

    var _Util$createEvent = Util.createEvent(ev, chart),
        x = _Util$createEvent.x,
        y = _Util$createEvent.y;

    var clicked = findItem(x, y);
    if (clicked && clicked.clickedLegend.clickable !== false) {
      var clickedItem = clicked.clickedItem,
          clickedLegend = clicked.clickedLegend;

      if (clickedLegend.onClick) {
        ev.clickedItem = clickedItem;
        clickedLegend.onClick(ev);
      } else if (!clickedLegend.custom) {
        var filterVals = clickedLegend.filterVals;
        var field = clickedLegend.field;
        var checked = clickedItem.get('checked');
        var value = clickedItem.get('dataValue');
        if (!checked) {
          filterVals.push(value);
        } else {
          Util.Array.remove(filterVals, value);
        }
        chart.filter(field, function (val) {
          return filterVals.indexOf(val) !== -1;
        });
        chart.repaint();
      }
    }
  };

  LegendController.prototype.bindEvents = function bindEvents() {
    var legendCfg = this.legendCfg;
    var triggerOn = legendCfg.triggerOn || 'touchstart';
    var method = Util.wrapBehavior(this, 'handleEvent');
    if (Util.isFunction(triggerOn)) {
      triggerOn(method, 'bind');
    } else {
      Util.addEventListener(this.canvasDom, triggerOn, method);
    }
  };

  LegendController.prototype.unBindEvents = function unBindEvents() {
    var legendCfg = this.legendCfg;
    var triggerOn = legendCfg.triggerOn || 'touchstart';
    var method = Util.getWrapBehavior(this, 'handleEvent');
    if (Util.isFunction(triggerOn)) {
      triggerOn(method, 'unBind');
    } else {
      Util.removeEventListener(this.canvasDom, triggerOn, method);
    }
  };

  return LegendController;
}();

module.exports = {
  init: function init(chart) {
    var legendController = new LegendController({
      container: chart.get('backPlot'),
      plotRange: chart.get('plotRange'),
      chart: chart
    });
    chart.set('legendController', legendController);

    /**
     * 设置图例
     * @chainable
     * @param  {Boolean|String|Object} field Boolean 表示关闭开启图例，String 表示指定具体的图例，Object 表示为所有的图例设置
     * @param  {Object|Boolean} cfg   图例的配置，Object 表示为对应的图例进行配置，Boolean 表示关闭对应的图例
     * @return {Chart}       返回当前 chart 的引用
     */
    chart.legend = function (field, cfg) {
      var legendCfg = legendController.legendCfg;
      legendController.enable = true;

      if (Util.isBoolean(field)) {
        legendController.enable = field;
        legendCfg = cfg || {};
      } else if (Util.isObject(field)) {
        legendCfg = field;
      } else {
        legendCfg[field] = cfg;
      }

      legendController.legendCfg = legendCfg;

      return this;
    };
  },
  beforeGeomDraw: function beforeGeomDraw(chart) {
    var legendController = chart.get('legendController');
    if (!legendController.enable) return null; // legend is not displayed

    var geoms = chart.get('geoms');
    var legendCfg = legendController.legendCfg;
    var scales = [];

    if (legendCfg && legendCfg.custom) {
      // 用户自定义图例
      legendController.addCustomLegend();
    } else {
      Util.each(geoms, function (geom) {
        var colorAttr = geom.getAttr('color');
        if (colorAttr) {
          var type = colorAttr.type;
          var scale = colorAttr.getScale(type);
          if (scale.type !== 'identity' && !_isScaleExist(scales, scale)) {
            scales.push(scale);
            // Get filtered values
            var field = scale.field,
                values = scale.values;

            var filters = chart.get('filters');
            var filterVals = void 0;
            if (filters && filters[field]) {
              filterVals = values.filter(filters[field]);
            } else {
              filterVals = values.slice(0);
            }
            legendController.addLegend(scale, colorAttr, filterVals);
          }
        }
      });
    }

    if (legendCfg && legendCfg.clickable !== false) {
      legendController.bindEvents();
    }

    var legends = legendController.legends;
    var legendRange = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
    var appendPadding = chart.get('appendPadding');
    Util.each(legends, function (legendItems, position) {
      var padding = 0;
      Util.each(legendItems, function (legend) {
        var width = legend.getWidth();
        var height = legend.getHeight();
        if (position === 'top' || position === 'bottom') {
          padding = Math.max(padding, height);
          if (legend.offsetY > 0) {
            padding += legend.offsetY;
          }
        } else {
          padding = Math.max(padding, width);
          if (legend.offsetX > 0) {
            padding += legend.offsetX;
          }
        }
      });
      legendRange[position] = padding + appendPadding;
    });
    chart.set('legendRange', legendRange);
  },
  afterGeomDraw: function afterGeomDraw(chart) {
    var legendController = chart.get('legendController');
    legendController.alignLegends();

    /**
     * 获取图例的 items
     * [getLegendItems description]
     * @return {[type]} [description]
     */
    chart.getLegendItems = function () {
      var result = {};
      var legends = legendController.legends;
      Util.each(legends, function (legendItems) {
        Util.each(legendItems, function (legend) {
          var field = legend.field,
              items = legend.items;

          result[field] = items;
        });
      });
      return result;
    };
  },
  clearInner: function clearInner(chart) {
    var legendController = chart.get('legendController');
    legendController.clear();
    chart.set('legendRange', null);
  }
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 动画获取以及注册机制
 * @author sima.zhang
 */
var Util = __webpack_require__(0);
var defaultAnimationCfg = {
  appear: {
    duration: 450,
    easing: 'quadraticOut'
  }, // 初始入场动画配置
  update: {
    duration: 300,
    easing: 'quadraticOut'
  }, // 更新时发生变更的动画配置
  enter: {
    duration: 300,
    easing: 'quadraticOut'
  }, // 更新时新增元素的入场动画配置
  leave: {
    duration: 350,
    easing: 'quadraticIn' // 更新时销毁动画配置
  } };

var Animate = {
  defaultCfg: {},
  Action: {},
  getAnimation: function getAnimation(geomType, coord, animationType) {
    var geomAnimateCfg = this.defaultCfg[geomType];
    if (geomAnimateCfg) {
      var animation = geomAnimateCfg[animationType];
      if (Util.isFunction(animation)) {
        return animation(coord);
      }
    }
    return false;
  },
  getAnimateCfg: function getAnimateCfg(geomType, animationType) {
    var defaultCfg = defaultAnimationCfg[animationType];
    var geomConfig = this.defaultCfg[geomType];
    if (geomConfig && geomConfig.cfg && geomConfig.cfg[animationType]) {
      return Util.deepMix({}, defaultCfg, geomConfig.cfg[animationType]);
    }
    return defaultCfg;
  },
  registerAnimation: function registerAnimation(animationName, animationFun) {
    if (!this.Action) {
      this.Action = {};
    }
    this.Action[animationName] = animationFun;
  }
};

module.exports = Animate;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 动画工具
 */
var _require = __webpack_require__(6),
    Shape = _require.Shape,
    Matrix = _require.Matrix;

var Util = __webpack_require__(0);

var Helpers = {
  getCoordInfo: function getCoordInfo(coord) {
    var start = coord.start;
    var end = coord.end;
    return {
      start: start,
      end: end,
      width: end.x - start.x,
      height: Math.abs(end.y - start.y)
    };
  },
  getScaledMatrix: function getScaledMatrix(shape, v, direct) {
    var scaledMatrix = void 0;

    shape.apply(v); // shape 原先可能做了变化
    var x = v[0];
    var y = v[1];

    if (direct === 'x') {
      shape.transform([['t', x, y], ['s', 0.01, 1], ['t', -x, -y]]);
      var matrix = shape.getMatrix();
      scaledMatrix = Matrix.transform(matrix, [['t', x, y], ['s', 100, 1], ['t', -x, -y]]);
    } else if (direct === 'y') {
      shape.transform([['t', x, y], ['s', 1, 0.01], ['t', -x, -y]]);
      var _matrix = shape.getMatrix();
      scaledMatrix = Matrix.transform(_matrix, [['t', x, y], ['s', 1, 100], ['t', -x, -y]]);
    } else if (direct === 'xy') {
      shape.transform([['t', x, y], ['s', 0.01, 0.01], ['t', -x, -y]]);
      var _matrix2 = shape.getMatrix();
      scaledMatrix = Matrix.transform(_matrix2, [['t', x, y], ['s', 100, 100], ['t', -x, -y]]);
    }
    return scaledMatrix;
  },
  getClip: function getClip(coord) {
    var _Helpers$getCoordInfo = Helpers.getCoordInfo(coord),
        start = _Helpers$getCoordInfo.start,
        end = _Helpers$getCoordInfo.end,
        width = _Helpers$getCoordInfo.width,
        height = _Helpers$getCoordInfo.height;

    var margin = 200;
    var clip = void 0;

    if (coord.isPolar) {
      var circleRadius = coord.circleRadius,
          center = coord.center,
          startAngle = coord.startAngle,
          endAngle = coord.endAngle;

      clip = new Shape.Sector({
        attrs: {
          x: center.x,
          y: center.y,
          r: circleRadius + margin,
          r0: 0,
          startAngle: startAngle,
          endAngle: startAngle
        }
      });
      clip.endState = {
        endAngle: endAngle
      };
    } else {
      clip = new Shape.Rect({
        attrs: {
          x: start.x - margin,
          y: end.y - margin,
          width: coord.isTransposed ? width + margin * 2 : 0,
          height: coord.isTransposed ? 0 : height + margin * 2
        }
      });

      if (coord.isTransposed) {
        clip.endState = {
          height: height + margin * 2
        };
      } else {
        clip.endState = {
          width: width + margin * 2
        };
      }
    }
    clip.isClip = true;
    return clip;
  },
  getAnimateParam: function getAnimateParam(animateCfg, index, id) {
    var result = {};
    if (animateCfg.delay) {
      result.delay = Util.isFunction(animateCfg.delay) ? animateCfg.delay(index, id) : animateCfg.delay;
    }
    result.easing = animateCfg.easing;
    result.duration = animateCfg.duration;
    result.delay = animateCfg.delay;
    // result.onStart = animateCfg.onStart;
    // result.onUpdate = animateCfg.onUpdate;
    // result.onEnd = animateCfg.onEnd;
    return result;
  },
  doAnimation: function doAnimation(shape, endState, animateCfg, callback) {
    var id = shape._id;
    var index = shape.get('index');

    var _Helpers$getAnimatePa = Helpers.getAnimateParam(animateCfg, index, id),
        easing = _Helpers$getAnimatePa.easing,
        delay = _Helpers$getAnimatePa.delay,
        duration = _Helpers$getAnimatePa.duration;

    var anim = shape.animate().to({
      attrs: endState,
      duration: duration,
      delay: delay,
      easing: easing
    });

    if (callback) {
      anim.onEnd(function () {
        callback();
      });
    }
  }
};

module.exports = Helpers;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 完整版，包含所有的图表类型以及组件
 */
var F2 = __webpack_require__(27);

__webpack_require__(88);
__webpack_require__(61);

__webpack_require__(64); // 极坐标系
__webpack_require__(71); // 极坐标系下的弧长坐标轴

__webpack_require__(72); // timeCat 类型的度量

__webpack_require__(74); // 加载 guide 组件

var Tooltip = __webpack_require__(81);
var Guide = __webpack_require__(83);
var Legend = __webpack_require__(84);
var Animation = __webpack_require__(93); // 使用精细动画

F2.Animate = __webpack_require__(85);
// 注册插件
F2.Chart.plugins.register([Tooltip, Legend, Guide, Animation]);

module.exports = F2;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var Geom = __webpack_require__(4);

__webpack_require__(67);
__webpack_require__(25);
__webpack_require__(58);
__webpack_require__(69);
__webpack_require__(59);
__webpack_require__(89);
__webpack_require__(91);

module.exports = Geom;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Geom = __webpack_require__(4);
var Util = __webpack_require__(0);
__webpack_require__(90);

var Polygon = function (_Geom) {
  _inherits(Polygon, _Geom);

  function Polygon() {
    _classCallCheck(this, Polygon);

    return _possibleConstructorReturn(this, _Geom.apply(this, arguments));
  }

  /**
   * 获取默认的配置属性
   * @protected
   * @return {Object} 默认属性
   */
  Polygon.prototype.getDefaultCfg = function getDefaultCfg() {
    var cfg = _Geom.prototype.getDefaultCfg.call(this);
    cfg.type = 'polygon';
    cfg.shapeType = 'polygon';
    cfg.generatePoints = true;
    return cfg;
  };

  Polygon.prototype.createShapePointsCfg = function createShapePointsCfg(obj) {
    var cfg = _Geom.prototype.createShapePointsCfg.call(this, obj);
    var self = this;
    var x = cfg.x;
    var y = cfg.y;
    var temp = void 0;
    if (!(Util.isArray(x) && Util.isArray(y))) {
      // x y 都是数组时，不做处理
      var xScale = self.getXScale();
      var yScale = self.getYScale();
      var xCount = xScale.values ? xScale.values.length : xScale.ticks.length;
      var yCount = yScale.values ? yScale.values.length : yScale.ticks.length;
      var xOffset = 0.5 * 1 / xCount;
      var yOffset = 0.5 * 1 / yCount;
      if (xScale.isCategory && yScale.isCategory) {
        // 如果x,y都是分类
        x = [x - xOffset, x - xOffset, x + xOffset, x + xOffset];
        y = [y - yOffset, y + yOffset, y + yOffset, y - yOffset];
      } else if (Util.isArray(x)) {
        // x 是数组
        temp = x;
        x = [temp[0], temp[0], temp[1], temp[1]];
        y = [y - yOffset / 2, y + yOffset / 2, y + yOffset / 2, y - yOffset / 2];
      } else if (Util.isArray(y)) {
        // y 是数组
        temp = y;
        y = [temp[0], temp[1], temp[1], temp[0]];
        x = [x - xOffset / 2, x - xOffset / 2, x + xOffset / 2, x + xOffset / 2];
      }
      cfg.x = x;
      cfg.y = y;
    }
    return cfg;
  };

  return Polygon;
}(Geom);

Geom.Polygon = Polygon;

module.exports = Polygon;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var Shape = __webpack_require__(5);
var Util = __webpack_require__(0);

var Polygon = Shape.registerFactory('polygon', {
  defaultShapeType: 'polygon',
  getDefaultPoints: function getDefaultPoints(pointInfo) {
    var points = [];
    var x = pointInfo.x,
        y = pointInfo.y;

    for (var i = 0, len = x.length; i < len; i++) {
      points.push({
        x: x[i],
        y: y[i]
      });
    }
    return points;
  }
});

Shape.registerShape('polygon', 'polygon', {
  draw: function draw(cfg, container) {
    var points = this.parsePoints(cfg.points);
    var style = Util.mix({
      fill: cfg.color,
      points: points
    }, cfg.style);
    // G.drawLines(points, canvas, style);
    return container.addShape('Polygon', {
      className: 'polygon',
      attrs: style
    });
  }
});

module.exports = Polygon;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Geom = __webpack_require__(4);
var Util = __webpack_require__(0);
var SizeMixin = __webpack_require__(26);
__webpack_require__(92);

var Schema = function (_Geom) {
  _inherits(Schema, _Geom);

  Schema.prototype.getDefaultCfg = function getDefaultCfg() {
    var cfg = _Geom.prototype.getDefaultCfg.call(this);
    cfg.type = 'schema';
    cfg.shapeType = 'schema';
    cfg.generatePoints = true;
    return cfg;
  };

  function Schema(cfg) {
    _classCallCheck(this, Schema);

    var _this = _possibleConstructorReturn(this, _Geom.call(this, cfg));

    Util.mix(_this, SizeMixin);
    return _this;
  }

  Schema.prototype.createShapePointsCfg = function createShapePointsCfg(obj) {
    var cfg = _Geom.prototype.createShapePointsCfg.call(this, obj);
    cfg.size = this.getNormalizedSize(obj);
    return cfg;
  };

  Schema.prototype.clearInner = function clearInner() {
    _Geom.prototype.clearInner.call(this);
    this.set('defaultSize', null);
  };

  return Schema;
}(Geom);

Geom.Schema = Schema;

module.exports = Schema;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var Shape = __webpack_require__(5);
var Util = __webpack_require__(0);
// START candle shape
function _sortValue(value) {
  // 从大到小排序
  var sorted = value.sort(function (a, b) {
    return a < b ? 1 : -1;
  });

  var length = sorted.length;
  if (length < 4) {
    var min = sorted[length - 1];
    for (var i = 0; i < 4 - length; i++) {
      sorted.push(min);
    }
  }
  return sorted;
}

// 方向：左下角顺时针连接
function getCandlePoints(x, y, width) {
  var yValues = _sortValue(y);
  var points = [{
    x: x,
    y: yValues[0]
  }, {
    x: x,
    y: yValues[1]
  }, {
    x: x - width / 2,
    y: yValues[2]
  }, {
    x: x - width / 2,
    y: yValues[1]
  }, {
    x: x + width / 2,
    y: yValues[1]
  }, {
    x: x + width / 2,
    y: yValues[2]
  }, {
    x: x,
    y: yValues[2]
  }, {
    x: x,
    y: yValues[3]
  }];
  return points;
}

var Schema = Shape.registerFactory('schema', {});

Shape.registerShape('schema', 'candle', {
  // 获取构建k线图的点
  getPoints: function getPoints(cfg) {
    return getCandlePoints(cfg.x, cfg.y, cfg.size);
  },

  // 绘制k线图
  draw: function draw(cfg, container) {
    var points = this.parsePoints(cfg.points);
    var style = Util.mix({
      stroke: cfg.color,
      fill: cfg.color,
      lineWidth: 1
    }, cfg.style);
    return container.addShape('Custom', {
      className: 'schema',
      attrs: style,
      createPath: function createPath(ctx) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        ctx.lineTo(points[1].x, points[1].y);

        ctx.moveTo(points[2].x, points[2].y);
        for (var i = 3; i < 6; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.closePath();
        ctx.moveTo(points[6].x, points[6].y);
        ctx.lineTo(points[7].x, points[7].y);
      }
    });
  }
});

module.exports = Schema;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 精细动画，包含入场、更新、出场
 * @author sima.zhang
 */
var Util = __webpack_require__(0);
var Element = __webpack_require__(16);
var Timeline = __webpack_require__(94);
var Animator = __webpack_require__(95);
var Animate = __webpack_require__(85);
var ShapeAction = __webpack_require__(97);
var GroupAction = __webpack_require__(98);
var Chart = __webpack_require__(24);

var timeline = void 0;
Element.prototype.animate = function () {
  var attrs = this.get('attrs');
  return new Animator(this, attrs, timeline);
};

Chart.prototype.animate = function (cfg) {
  this.set('animate', cfg);
  return this;
};

Animate.Action = ShapeAction;
Animate.defaultCfg = {
  interval: {
    enter: function enter(coord) {
      if (coord.isPolar && coord.transposed) {
        // 饼图特殊处理
        return function (shape) {
          shape.set('zIndex', -1);
          var container = shape.get('parent');
          container.sort();
        };
      }
      return ShapeAction.fadeIn;
    }
  },
  area: {
    enter: function enter(coord) {
      if (coord.isPolar) return null;
      return ShapeAction.fadeIn;
    }
  },
  line: {
    enter: function enter(coord) {
      if (coord.isPolar) return null;

      return ShapeAction.fadeIn;
    }
  },
  path: {
    enter: function enter(coord) {
      if (coord.isPolar) return null;

      return ShapeAction.fadeIn;
    }
  }
};

var GROUP_ANIMATION = {
  line: function line(coord) {
    if (coord.isPolar) {
      return GroupAction.groupScaleInXY;
    }
    return GroupAction.groupWaveIn;
  },
  area: function area(coord) {
    if (coord.isPolar) {
      return GroupAction.groupScaleInXY;
    }
    return GroupAction.groupWaveIn;
  },
  path: function path(coord) {
    if (coord.isPolar) {
      return GroupAction.groupScaleInXY;
    }
    return GroupAction.groupWaveIn;
  },
  point: function point() {
    return GroupAction.shapesScaleInXY;
  },
  interval: function interval(coord) {
    var result = void 0;
    if (coord.isPolar) {
      // 极坐标
      result = GroupAction.groupScaleInXY; // 南丁格尔玫瑰图
      if (coord.transposed) {
        // 饼图
        result = GroupAction.groupWaveIn;
      }
    } else {
      result = coord.transposed ? GroupAction.groupScaleInX : GroupAction.groupScaleInY;
    }
    return result;
  },
  schema: function schema() {
    return GroupAction.groupWaveIn;
  }
};

function diff(fromAttrs, toAttrs) {
  var endState = {};
  for (var k in toAttrs) {
    if (Util.isNumber(fromAttrs[k]) && fromAttrs[k] !== toAttrs[k]) {
      endState[k] = toAttrs[k];
    } else if (Util.isArray(fromAttrs[k]) && JSON.stringify(fromAttrs[k]) !== JSON.stringify(toAttrs[k])) {
      endState[k] = toAttrs[k];
    }
  }
  return endState;
}

// 给每个 shape 加上唯一的 id 标识
function _getShapeId(geom, dataObj) {
  var type = geom.get('type');
  var id = 'geom-' + type;
  var xScale = geom.getXScale();
  var yScale = geom.getYScale();
  var xField = xScale.field || 'x';
  var yField = yScale.field || 'y';
  var yVal = dataObj[yField];
  var xVal = void 0;
  if (xScale.isIdentity) {
    xVal = xScale.value;
  } else {
    xVal = dataObj[xField];
  }

  if (type === 'interval' || type === 'schema') {
    id += '-' + xVal;
  } else if (type === 'line' || type === 'area' || type === 'path') {
    id += '-' + type;
  } else {
    // 分类类型只需要判断 xVal
    id += xScale.isCategory ? '-' + xVal : '-' + xVal + '-' + yVal;
  }

  var groupScales = geom._getGroupScales();
  Util.each(groupScales, function (groupScale) {
    var field = groupScale.field;
    if (groupScale.type !== 'identity') {
      id += '-' + dataObj[field];
    }
  });

  return id;
}

// 获取图组内所有的shapes
function getShapes(geoms, chart, coord) {
  var shapes = [];

  Util.each(geoms, function (geom) {
    var geomContainer = geom.get('container');
    var geomShapes = geomContainer.get('children'); // 获取几何标记的 shapes
    // const coord = geom.get('coord');
    var type = geom.get('type');
    var animateCfg = Util.isNil(geom.get('animateCfg')) ? _getAnimateCfgByShapeType(type, chart) : geom.get('animateCfg');
    if (animateCfg !== false) {
      Util.each(geomShapes, function (shape, index) {
        if (shape.get('className') === type) {
          shape._id = _getShapeId(geom, shape.get('origin')._origin);
          shape.set('coord', coord);
          shape.set('animateCfg', animateCfg);
          shape.set('index', index);
          shapes.push(shape);
        }
      });
    }
    geom.set('shapes', geomShapes);
  });
  return shapes;
}

function cache(shapes) {
  var rst = {};
  for (var i = 0, len = shapes.length; i < len; i++) {
    var shape = shapes[i];
    if (!shape._id || shape.isClip) continue;
    var id = shape._id;
    rst[id] = {
      _id: id,
      type: shape.get('type'), // 图形形状
      attrs: Util.mix({}, shape._attrs.attrs), // 原始属性
      className: shape.get('className'),
      geomType: shape.get('className'),
      index: shape.get('index'),
      coord: shape.get('coord'),
      animateCfg: shape.get('animateCfg')
    };
  }
  return rst;
}

function getAnimate(geomType, coord, animationType, animationName) {
  var result = void 0;

  if (Util.isFunction(animationName)) {
    result = animationName;
  } else if (Util.isString(animationName)) {
    result = Animate.Action[animationName];
  } else {
    result = Animate.getAnimation(geomType, coord, animationType);
  }
  return result;
}

function getAnimateCfg(geomType, animationType, animateCfg) {
  if (animateCfg && animateCfg[animationType] === false) {
    return false;
  }

  var defaultCfg = Animate.getAnimateCfg(geomType, animationType);
  if (animateCfg && animateCfg[animationType]) {
    return Util.deepMix({}, defaultCfg, animateCfg[animationType]);
  }
  return defaultCfg;
}

function addAnimate(cache, shapes, canvas) {
  var animate = void 0;
  var animateCfg = void 0;

  // 动画执行顺序: leave -> update -> enter
  var updateShapes = []; // 存储的是 shapes
  var newShapes = []; // 存储的是 shapes
  Util.each(shapes, function (shape) {
    var result = cache[shape._id];
    if (!result) {
      newShapes.push(shape);
    } else {
      shape.set('cacheShape', result);
      updateShapes.push(shape);
      delete cache[shape._id];
    }
  });

  // 执行销毁动画
  Util.each(cache, function (deletedShape) {
    var className = deletedShape.className,
        coord = deletedShape.coord,
        _id = deletedShape._id,
        attrs = deletedShape.attrs,
        index = deletedShape.index,
        type = deletedShape.type;


    animateCfg = getAnimateCfg(className, 'leave', deletedShape.animateCfg);
    if (animateCfg === false) return true;

    animate = getAnimate(className, coord, 'leave', animateCfg.animation);
    if (Util.isFunction(animate)) {
      var tempShape = canvas.addShape(type, {
        attrs: attrs,
        index: index,
        canvas: canvas,
        className: className
      });
      tempShape._id = _id;
      animate(tempShape, animateCfg, coord);
    }
  });

  // 执行更新动画
  Util.each(updateShapes, function (updateShape) {
    var className = updateShape.get('className');

    animateCfg = getAnimateCfg(className, 'update', updateShape.get('animateCfg'));
    if (animateCfg === false) return true;

    var coord = updateShape.get('coord');
    var cacheAttrs = updateShape.get('cacheShape').attrs;
    var endState = diff(cacheAttrs, updateShape._attrs.attrs); // 判断如果属性相同的话就不进行变换
    if (Object.keys(endState).length) {
      animate = getAnimate(className, coord, 'update', animateCfg.animation);
      if (Util.isFunction(animate)) {
        animate(updateShape, animateCfg, coord);
      } else {
        updateShape.attr(cacheAttrs);
        updateShape.animate().to({
          attrs: endState,
          duration: animateCfg.duration,
          easing: animateCfg.easing,
          delay: animateCfg.delay
        }).onEnd(function () {
          updateShape.set('cacheShape', null);
        });
      }
    }
  });

  // 新进场 shape 动画
  Util.each(newShapes, function (newShape) {
    // 新图形元素的进场元素
    var className = newShape.get('className');
    var coord = newShape.get('coord');

    animateCfg = getAnimateCfg(className, 'enter', newShape.get('animateCfg'));
    if (animateCfg === false) return true;

    animate = getAnimate(className, coord, 'enter', animateCfg.animation);
    if (Util.isFunction(animate)) {
      if (className === 'interval' && coord.isPolar && coord.transposed) {
        var index = newShape.get('index');
        var lastShape = updateShapes[index - 1];
        animate(newShape, animateCfg, lastShape);
      } else {
        animate(newShape, animateCfg, coord);
      }
    }
  });
}

function _getAnimateCfgByShapeType(type, chart) {
  var animateCfg = chart.get('animate');

  if (animateCfg) {
    return animateCfg[type];
  }

  return null;
}

module.exports = {
  afterCanvasInit: function afterCanvasInit() /* chart */{
    timeline = new Timeline();
    timeline.play();
  },
  beforeCanvasDraw: function beforeCanvasDraw(chart) {
    if (chart.get('animate') === false) {
      return;
    }

    var isUpdate = chart.get('isUpdate');
    var canvas = chart.get('canvas');
    var coord = chart.get('coord');
    var geoms = chart.get('geoms');

    var caches = canvas.get('caches') || [];
    if (caches.length === 0) {
      isUpdate = false;
    }

    var shapes = getShapes(geoms, chart, coord); // geom 上的图形

    var _chart$get = chart.get('axisController'),
        frontPlot = _chart$get.frontPlot,
        backPlot = _chart$get.backPlot;

    var axisShapes = [];
    // get axes' shapes
    frontPlot.get('children').concat(backPlot.get('children')).forEach(function (s) {
      var className = s.get('className');
      s.set('coord', coord);
      s.set('animateCfg', _getAnimateCfgByShapeType(className, chart));
      axisShapes.push(s);
    });

    var cacheShapes = shapes.concat(axisShapes);
    canvas.set('caches', cache(cacheShapes));

    if (isUpdate) {
      addAnimate(caches, cacheShapes, canvas);
    } else {
      // 初次入场动画
      var animateCfg = void 0;
      var animate = void 0;
      Util.each(geoms, function (geom) {
        var type = geom.get('type');
        var geomCfg = Util.isNil(geom.get('animateCfg')) ? _getAnimateCfgByShapeType(type, chart) : geom.get('animateCfg');
        if (geomCfg !== false) {
          animateCfg = getAnimateCfg(type, 'appear', geomCfg);
          animate = getAnimate(type, coord, 'appear', animateCfg.animation);
          if (Util.isFunction(animate)) {
            // 用户指定了动画类型
            var _shapes = geom.get('shapes');
            Util.each(_shapes, function (shape) {
              animate(shape, animateCfg, coord);
            });
          } else if (GROUP_ANIMATION[type]) {
            // 默认进行整体动画
            animate = GroupAction[animateCfg.animation] || GROUP_ANIMATION[type](coord);

            var yScale = geom.getYScale();
            var zeroY = coord.convertPoint({
              x: 0,
              y: yScale.scale(geom.getYMinValue())
            });

            var container = geom.get('container');
            animate && animate(container, animateCfg, coord, zeroY);
          }
        }
      });
    }
  },
  afterCanvasDestroyed: function afterCanvasDestroyed() /* chart */{
    timeline.stop();
  }
};

/***/ }),
/* 94 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var requestAnimationFrame = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.requestAnimationFrame ? window.requestAnimationFrame : function (fn) {
  return setTimeout(fn, 16);
};
// const cancelAnimationFrame = typeof window === 'object' && window.cancelAnimationFrame ? window.cancelAnimationFrame : function(id) {
//   return clearInterval(id);
// };

var clock = (typeof performance === 'undefined' ? 'undefined' : _typeof(performance)) === 'object' && performance.now ? performance : Date;

var Timeline = function () {
  function Timeline() {
    _classCallCheck(this, Timeline);

    this.anims = [];
    this.time = null;
    this.playing = false;
    this.canvas = [];
  }

  Timeline.prototype.play = function play() {
    var self = this;
    self.time = clock.now();
    self.playing = true;

    function step() {
      if (self.playing) {
        requestAnimationFrame(step);
        self.update();
      }
    }

    requestAnimationFrame(step);
  };

  Timeline.prototype.stop = function stop() {
    this.playing = false;
    this.time = null;
    this.canvas = [];
  };

  Timeline.prototype.update = function update() {
    var currentTime = clock.now();
    this.canvas = [];

    for (var i = 0; i < this.anims.length; i++) {
      var propertyAnim = this.anims[i];
      if (currentTime < propertyAnim.startTime || propertyAnim.hasEnded) {
        continue;
      }
      var shape = propertyAnim.shape; // shape
      if (shape.get('destroyed')) {
        this.anims.splice(i, 1);
        i--;
        continue;
      }

      var startState = propertyAnim.startState,
          endState = propertyAnim.endState,
          interpolate = propertyAnim.interpolate,
          duration = propertyAnim.duration;

      if (currentTime >= propertyAnim.startTime && !propertyAnim.hasStarted) {
        propertyAnim.hasStarted = true;
        if (propertyAnim.onStart) {
          propertyAnim.onStart();
        }
      }
      var t = (currentTime - propertyAnim.startTime) / duration;
      t = Math.max(0, Math.min(t, 1));
      t = propertyAnim.easing(t);

      if (propertyAnim.onFrame) {
        propertyAnim.onFrame(t);
      } else {
        for (var key in interpolate) {
          var diff = interpolate[key];
          var value = diff(t);
          var newValue = void 0;
          if (key === 'points') {
            newValue = [];
            var aLen = Math.max(startState.points.length, endState.points.length);
            for (var j = 0; j < aLen; j += 2) {
              newValue.push({
                x: value[j],
                y: value[j + 1]
              });
            }
          } else {
            newValue = value;
          }
          shape._attrs.attrs[key] = newValue;
        }
      }

      var canvas = shape.get('canvas');
      if (this.canvas.indexOf(canvas) === -1) {
        this.canvas.push(canvas);
      }

      if (propertyAnim.onUpdate) {
        propertyAnim.onUpdate();
      }

      if (currentTime >= propertyAnim.endTime && !propertyAnim.hasEnded) {
        propertyAnim.hasEnded = true;
        if (propertyAnim.onEnd) {
          propertyAnim.onEnd();
        }
      }

      if (t === 1) {
        // 结束
        this.anims.splice(i, 1);
        i--;
      }
    }

    this.canvas.map(function (c) {
      c.draw();
      return c;
    });
    this.time = clock.now();
  };

  return Timeline;
}();

// Timeline.getGlobalInstance = function() {
//   if (!Timeline.globalInstance) {
//     Timeline.globalInstance = new Timeline();
//   }
//   return Timeline.globalInstance;
// };

module.exports = Timeline;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Easing = __webpack_require__(96);

function plainArray(arr) {
  var result = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i]) {
      result.push(arr[i].x);
      result.push(arr[i].y);
    }
  }
  return result;
}

function interpolateNumber(a, b) {
  a = +a;
  b -= a;
  return function (t) {
    return a + b * t;
  };
}

function interpolateArray(a, b) {
  var nb = b ? b.length : 0;
  var na = a ? Math.min(nb, a.length) : 0;
  var x = new Array(na);
  var c = new Array(nb);
  var i = void 0;

  for (i = 0; i < na; ++i) {
    x[i] = interpolateNumber(a[i], b[i]);
  }for (; i < nb; ++i) {
    c[i] = b[i];
  }return function (t) {
    for (i = 0; i < na; ++i) {
      c[i] = x[i](t);
    }return c;
  };
}

var Animator = function () {
  function Animator(shape, source, timeline) {
    _classCallCheck(this, Animator);

    this.hasStarted = false;
    this.hasEnded = false;
    this.shape = shape;
    this.source = source;
    this.timeline = timeline;
    this.animate = null;
  }

  // delay, attrs, duration, easing


  Animator.prototype.to = function to() {
    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var delay = cfg.delay || 0;
    var attrs = cfg.attrs || {};
    var duration = cfg.duration || 1000;

    var easing = void 0; // 缓动函数
    if (typeof cfg.easing === 'function') {
      easing = cfg.easing;
    } else {
      easing = Easing[cfg.easing] || Easing.linear;
    }

    var animInfo = {
      shape: this.shape,
      startTime: this.timeline.time + delay,
      duration: duration,
      easing: easing
    };

    var interpolate = {}; // 差值函数
    for (var attrName in attrs) {
      var startValue = this.source[attrName];
      var endValue = attrs[attrName];
      if (attrName === 'points') {
        startValue = plainArray(startValue);
        endValue = plainArray(endValue);
        interpolate.points = interpolateArray(startValue, endValue);
        this.source.points = startValue;
        attrs.points = endValue;
      } else if (attrName === 'matrix') {
        interpolate.matrix = interpolateArray(startValue, endValue);
      } else {
        interpolate[attrName] = interpolateNumber(startValue, endValue);
      }
    }
    animInfo.interpolate = interpolate;
    animInfo.startState = this.source;
    animInfo.endState = attrs;
    animInfo.endTime = animInfo.startTime + duration;

    this.timeline.anims.push(animInfo);
    this.animate = animInfo;
    return this;
  };

  Animator.prototype.onFrame = function onFrame(callback) {
    // 自定义每一帧动画的动作
    if (this.animate) {
      this.animate.onFrame = function (frame) {
        callback(frame);
      };
    }

    return this;
  };

  Animator.prototype.onStart = function onStart(callback) {
    if (this.animate) {
      this.animate.onStart = function () {
        callback();
      };
    }

    return this;
  };

  Animator.prototype.onUpdate = function onUpdate(callback) {
    if (this.animate) {
      this.animate.onUpdate = function () {
        callback();
      };
    }

    return this;
  };

  Animator.prototype.onEnd = function onEnd(callback) {
    if (this.animate) {
      this.animate.onEnd = function () {
        callback();
      };
    }

    return this;
  };

  return Animator;
}();

module.exports = Animator;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

var Easing = {
  linear: function linear(k) {
    return k;
  },
  quadraticIn: function quadraticIn(k) {
    return k * k;
  },
  quadraticOut: function quadraticOut(k) {
    return k * (2 - k);
  },
  quadraticInOut: function quadraticInOut(k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k;
    }
    return -0.5 * (--k * (k - 2) - 1);
  },
  cubicIn: function cubicIn(k) {
    return k * k * k;
  },
  cubicOut: function cubicOut(k) {
    return --k * k * k + 1;
  },
  cubicInOut: function cubicInOut(k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k;
    }
    return 0.5 * ((k -= 2) * k * k + 2);
  },
  elasticIn: function elasticIn(k) {
    var s = void 0;
    var a = 0.1;
    var p = 0.4;
    if (k === 0) return 0;
    if (k === 1) return 1;
    if (!p) {
      p = 0.3;
    }
    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
  },
  elasticOut: function elasticOut(k) {
    var s = void 0;
    var a = 0.1;
    var p = 0.4;
    if (k === 0) return 0;
    if (k === 1) return 1;
    if (!p) {
      p = 0.3;
    }
    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
  },
  elasticInOut: function elasticInOut(k) {
    var s = void 0;
    var a = 0.1;
    var p = 0.4;
    if (k === 0) return 0;
    if (k === 1) return 1;
    if (!p) {
      p = 0.3;
    }
    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    if ((k *= 2) < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
    }
    return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
  },
  backIn: function backIn(k) {
    var s = 1.70158;
    return k * k * ((s + 1) * k - s);
  },
  backOut: function backOut(k) {
    var s = 1.70158;
    return (k = k - 1) * k * ((s + 1) * k + s) + 1;
  },
  backInOut: function backInOut(k) {
    var s = 1.70158 * 1.525;
    if ((k *= 2) < 1) {
      return 0.5 * (k * k * ((s + 1) * k - s));
    }
    return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
  },
  bounceIn: function bounceIn(k) {
    return 1 - Easing.bounceOut(1 - k);
  },
  bounceOut: function bounceOut(k) {
    if ((k /= 1) < 1 / 2.75) {
      return 7.5625 * k * k;
    } else if (k < 2 / 2.75) {
      return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
    } else if (k < 2.5 / 2.75) {
      return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
    }

    return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
  },
  bounceInOut: function bounceInOut(k) {
    if (k < 0.5) {
      return Easing.bounceIn(k * 2) * 0.5;
    }
    return Easing.bounceOut(k * 2 - 1) * 0.5 + 0.5;
  }
};

module.exports = Easing;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview 单个 shape 的默认动画库
 * @author sima.zhang
 */
var Util = __webpack_require__(0);
var Helpers = __webpack_require__(86);

/*
function waveIn(shape, animateCfg, coord) {
  const clip = Helpers.getClip(coord);
  clip.set('canvas', shape.get('canvas'));
  shape.attr('clip', clip);
  const onEnd = function() {
    shape.attr('clip', null);
    clip.remove(true);
  };
  Helpers.doAnimation(clip, clip.endState, animateCfg, onEnd);
}

function scaleInX(shape, animateCfg) {
  const box = shape.getBBox();
  const points = shape.get('origin').points;
  let x;
  const y = (box.minY + box.maxY) / 2;

  if (points[0].y - points[1].y > 0) { // 当顶点在零点之下
    x = box.maxX;
  } else {
    x = box.minX;
  }
  const scaledMatrix = Helpers.getScaledMatrix(shape, [ x, y ], 'x');
  Helpers.doAnimation(shape, { matrix: scaledMatrix }, animateCfg);
}

function scaleInY(shape, animateCfg) {
  const box = shape.getBBox();
  const points = shape.get('origin').points;
  const x = (box.minX + box.maxX) / 2;
  let y;

  if (points[0].y - points[1].y <= 0) { // 当顶点在零点之下
    y = box.maxY;
  } else {
    y = box.minY;
  }
  const scaledMatrix = Helpers.getScaledMatrix(shape, [ x, y ], 'x');
  Helpers.doAnimation(shape, { matrix: scaledMatrix }, animateCfg);
}
*/

function fadeIn(shape, animateCfg) {
  var fillOpacity = Util.isNil(shape.attr('fillOpacity')) ? 1 : shape.attr('fillOpacity');
  var strokeOpacity = Util.isNil(shape.attr('strokeOpacity')) ? 1 : shape.attr('strokeOpacity');
  shape.attr('fillOpacity', 0);
  shape.attr('strokeOpacity', 0);
  var endState = {
    fillOpacity: fillOpacity,
    strokeOpacity: strokeOpacity
  };
  Helpers.doAnimation(shape, endState, animateCfg);
}

// 默认动画库
module.exports = {
  // waveIn,
  // scaleInX,
  // scaleInY,
  fadeIn: fadeIn
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 整体动画
 * @author sima.zhang
 */
var Helpers = __webpack_require__(86);

var _require = __webpack_require__(6),
    Shape = _require.Shape;

function _groupScaleIn(container, animateCfg, coord, zeroY, type) {
  var _Helpers$getCoordInfo = Helpers.getCoordInfo(coord),
      start = _Helpers$getCoordInfo.start,
      end = _Helpers$getCoordInfo.end,
      width = _Helpers$getCoordInfo.width,
      height = _Helpers$getCoordInfo.height;

  var x = void 0;
  var y = void 0;

  var clip = new Shape.Rect({
    attrs: {
      x: start.x,
      y: end.y,
      width: width,
      height: height
    }
  });

  if (type === 'y') {
    x = start.x + width / 2;
    y = zeroY.y < start.y ? zeroY.y : start.y;
  } else if (type === 'x') {
    x = zeroY.x > start.x ? zeroY.x : start.x;
    y = start.y + height / 2;
  } else if (type === 'xy') {
    if (coord.isPolar) {
      x = coord.center.x;
      y = coord.center.y;
    } else {
      x = (start.x + end.x) / 2;
      y = (start.y + end.y) / 2;
    }
  }

  var endMatrix = Helpers.getScaledMatrix(clip, [x, y], type);
  clip.isClip = true;
  clip.endState = {
    matrix: endMatrix
  };

  clip.set('canvas', container.get('canvas'));
  container.attr('clip', clip);
  var onEnd = function onEnd() {
    container.attr('clip', null);
    clip.remove(true);
  };
  Helpers.doAnimation(clip, clip.endState, animateCfg, onEnd);
}

function _shapeScale(container, animateCfg, type) {
  var shapes = container.get('children');
  var x = void 0;
  var y = void 0;
  var endMatrix = void 0;

  for (var i = 0, len = shapes.length; i < len; i++) {
    var shape = shapes[i];
    var box = shape.getBBox();
    x = (box.minX + box.maxX) / 2;
    y = (box.minY + box.maxY) / 2;
    endMatrix = Helpers.getScaledMatrix(shape, [x, y], type);
    Helpers.doAnimation(shape, { matrix: endMatrix }, animateCfg);
  }
}

function groupScaleInX(container, animateCfg, coord, zeroY) {
  _groupScaleIn(container, animateCfg, coord, zeroY, 'x');
}

function groupScaleInY(container, animateCfg, coord, zeroY) {
  _groupScaleIn(container, animateCfg, coord, zeroY, 'y');
}

function groupScaleInXY(container, animateCfg, coord, zeroY) {
  _groupScaleIn(container, animateCfg, coord, zeroY, 'xy');
}

function shapesScaleInX(container, animateCfg) {
  _shapeScale(container, animateCfg, 'x');
}

function shapesScaleInY(container, animateCfg) {
  _shapeScale(container, animateCfg, 'y');
}

function shapesScaleInXY(container, animateCfg) {
  _shapeScale(container, animateCfg, 'xy');
}

function groupWaveIn(container, animateCfg, coord) {
  var clip = Helpers.getClip(coord);
  clip.set('canvas', container.get('canvas'));
  container.attr('clip', clip);
  var onEnd = function onEnd() {
    container.attr('clip', null);
    clip.remove(true);
  };
  Helpers.doAnimation(clip, clip.endState, animateCfg, onEnd);
}

module.exports = {
  groupWaveIn: groupWaveIn,
  groupScaleInX: groupScaleInX,
  groupScaleInY: groupScaleInY,
  groupScaleInXY: groupScaleInXY,
  shapesScaleInX: shapesScaleInX,
  shapesScaleInY: shapesScaleInY,
  shapesScaleInXY: shapesScaleInXY
};

/***/ })
/******/ ]);
});

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_router__ = __webpack_require__(198);
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
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'grid-item',
  props: ['icon', 'label', 'link'],
  created() {
    this.$parent.countColumn();
  },
  mounted() {
    this.$slots.icon && (this.hasIconSlot = true);
    this.$slots.label && (this.hasLabelSlot = true);
  },
  destroyed() {
    this.$parent.countColumn();
  },
  computed: {
    isLast() {
      return !((this.index + 1) % this.$parent.column);
    },
    style() {
      const column = this.$parent.column;
      if (!column || column === 3) {
        return;
      }
      const styles = {};
      styles.width = `${100 / column}%`;
      return styles;
    }
  },
  methods: {
    onClick() {
      this.$emit('on-item-click');
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_router__["a" /* go */])(this.link, this.$router);
    }
  },
  data() {
    return {
      index: 0,
      hasIconSlot: false,
      hasLabelSlot: false
    };
  }
});

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
  name: 'grid',
  methods: {
    countColumn() {
      this.childrenSize = this.$children.length;
      this.$children.forEach((c, index) => c.index = index);
    }
  },
  props: {
    rows: {
      type: Number,
      validator() {
        /* istanbul ignore if */
        if (false) {
          console.warn('[VUX warn] Grid rows 属性已经废弃，使用 cols 代替。单行列数为自动计算');
        }
        return true;
      }
    },
    cols: {
      type: Number
    },
    showLrBorders: {
      type: Boolean,
      default: true
    },
    showVerticalDividers: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    column() {
      return this.cols || this.childrenSize;
    }
  },
  data() {
    return {
      childrenSize: 3
    };
  }
});

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin__ = __webpack_require__(650);



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin__["a" /* default */]],
  data() {
    return {
      chartName: 'area'
    };
  }
});

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(632);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    x: Boolean,
    y: Boolean,
    field: String,
    disabled: Boolean,
    // only for x axis
    autoAlign: Boolean,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {
    let _options = _extends({}, this.$props, this.options, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* camelAttrs */])(this.$attrs));
    this.$parent.setAxis(_options);
  },
  render() {}
});

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin__ = __webpack_require__(650);



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin__["a" /* default */]],
  data() {
    return {
      chartName: 'bar'
    };
  }
});

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__antv_f2__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__antv_f2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__antv_f2__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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


// const shapeMap = {
//   point: ['circle', 'hollowCircle', 'rect'],
//   line: ['line', 'smooth', 'dash'],
//   area: ['area', 'smooth'],
//   interval: ['rect'],
//   polygon: ['polygon'],
//   schema: ['candle']
// }



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    width: Number,
    height: Number,
    backgroundColor: {
      type: String,
      default: '#fff'
    },
    data: {
      type: Array
    },
    tooltip: {
      type: Object
    },
    shape: {
      type: String,
      default: 'line'
    },
    preventRender: {
      type: Boolean,
      default: false
    },
    preventDefault: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      xField: '',
      yField: '',
      hasPoint: false,
      pointStyle: {},

      guideTags: [],

      areaOptions: null,
      lineOptions: null,
      tooltipOptions: null,
      legendOptions: null,

      barOptions: null,

      pieOptions: null,

      guideOptions: null,

      pointOptions: null,

      xFieldOptions: {},
      yFieldOptions: {},

      guides: [],

      seriesField: '',

      xAxisOptions: null,
      yAxisOptions: null,

      autoAlignXAxis: undefined
    };
  },
  computed: {
    currentData() {
      if (this.pieOptions) {
        return this.data.slice().map(item => {
          item.a = '1';
          return item;
        });
      }
      return this.data;
    },
    currentXFieldOptions(val) {
      const defaultOptions = {
        tickCount: 5
      };
      if (!this.barOptions) {
        defaultOptions.range = [0, 1];
      } else {
        defaultOptions.tickCount = 0;
      }
      // auto detect if is timeCat
      if (!this.xFieldOptions) {
        if (/\d{4}-\d{2}-\d{2}/.test(this.data[0][this.xField])) {
          return Object.assign({}, defaultOptions, {
            type: 'timeCat',
            tickCount: 3
          });
        } else {
          return defaultOptions;
        }
      }

      return Object.assign({}, defaultOptions, this.xFieldOptions);
    },
    currentYFieldOptions(val) {
      const defaultOptions = {
        tickCount: 5
      };
      if (!val) {
        return defaultOptions;
      }

      return Object.assign({}, defaultOptions, this.yFieldOptions);
    }
  },
  watch: {
    data() {
      this.changeData(this.data);
    }
  },
  methods: {
    onTouchstart(e) {
      this.preventDefault && e.preventDefault();
    },
    set(name, options) {
      this[`${name}Options`] = options;
    },
    changeData(data) {
      this.chart && this.chart.changeData(data);
    },
    setField(axis, item) {
      this[`${axis}Field`] = item;
    },
    repaint() {
      this.chart.repaint();
    },
    rerender() {
      this.destroy();
      this.render();
    },
    destroy() {
      this.chart && this.chart.destroy();
    },
    addGuide(options) {
      this.guides.push(options);
    },
    setScale(options) {
      if (options.x) {
        this.xFieldOptions = options.x;
      }
      if (options.y) {
        this.yFieldOptions = options.y;
      }
    },
    setAxis(options) {
      if (options.x) {
        this.xAxisOptions = options;
        if (typeof options.autoAlign !== 'undefined') {
          this.autoAlignXAxis = options.autoAlign;
        }
      }
      if (options.y) {
        this.yAxisOptions = options;
      }
    },
    buildColor(c) {
      let color = c || '';
      if (Array.isArray(c) && Array.isArray(c[0])) {
        const ctx = this.$refs.chart.getContext('2d');
        color = ctx.createLinearGradient(0, 0, window.innerWidth, 0);
        c.forEach(c => {
          color.addColorStop(c[0], c[1]);
        });
      }
      return color;
    },
    setPie(options = {}) {
      this.pieOptions = options;
    },
    setBar(options = {}) {
      this.barOptions = options;
    },
    setLegend(options) {
      this.legendOptions = options;
    },
    setTooltip(options) {
      this.tooltipOptions = options;
    },
    setArea(options) {
      this.areaOptions = options;
    },
    setGuide(options) {
      this.guideOptions = options;
    },
    setLine(options) {
      this.lineOptions = options;
    },
    setPoint(options) {
      this.pointOptions = options;
    },
    buildPosition() {
      return `${this.xField}*${this.yField}`;
    },
    getFields() {
      if (this.xField && this.yField) {
        return;
      }

      if (this.data && this.data.length) {
        const keys = Object.keys(this.data[0]);
        if (keys.length >= 2) {
          let indexes = [0, 1];
          const type1 = typeof this.data[0][keys[0]];
          const type2 = typeof this.data[0][keys[1]];
          if (type1 === 'number' && type2 !== 'number') {
            indexes = [1, 0];
          } else if (type1 === 'string' && type2 === 'string' && keys[2] === 'value') {
            indexes = [0, 2];
          }
          this.xField = keys[indexes[0]];
          this.yField = keys[indexes[1]];
        }
      }
    },
    render() {
      const _this = this;
      let autoAlignXAxis = this.autoAlignXAxis;
      if (this.barOptions) {
        autoAlignXAxis = false;
      }
      if (typeof autoAlignXAxis === 'undefined') {
        autoAlignXAxis = true;
      }
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const chart = new __WEBPACK_IMPORTED_MODULE_0__antv_f2___default.a.Chart(_extends({
        el: this.$refs.chart,
        width: this.width || windowWidth,
        height: this.height ? this.height : windowWidth > windowHeight ? windowHeight - 54 : windowWidth * 0.707,
        pixelRatio: this.$devicePixelRatio || window.devicePixelRatio
      }, this.$attrs));
      if (this.preventRender) {
        this.$emit('on-render', { chart });
        return;
      }

      if (!this.data || !this.data.length) {
        return;
      }

      this.getFields();

      chart.source(this.currentData);

      chart.scale(this.xField, this.currentXFieldOptions);
      chart.scale(this.yField, this.currentYFieldOptions);

      if (this.legendOptions) {
        if (this.legendOptions.disabled) {
          chart.legend(false);
        } else {
          chart.legend(this.legendOptions);
        }
      }

      if (this.tooltipOptions) {
        if (this.barOptions) {
          this.tooltipOptions.showCrosshairs = false;
        }
        if (!this.tooltipOptions.disabled) {
          // handle show-value-in-legend
          if (this.tooltipOptions.showValueInLegend) {
            const customTooltip = {
              custom: true, // 自定义 tooltip 内容框
              onChange: function (obj) {
                const legend = _this.chart.get('legendController').legends.top[0];
                const tooltipItems = obj.items;
                const legendItems = legend.items;
                const map = {};
                legendItems.map(item => {
                  map[item.name] = JSON.parse(JSON.stringify(item));
                });
                tooltipItems.map(item => {
                  const { name, value } = item;
                  if (map[name]) {
                    map[name].value = value;
                  }
                });
                legend.setItems(Object.values(map));
              },
              onHide: function () {
                const VChart = _this.chart;
                const legend = VChart.get('legendController').legends.top[0];
                legend.setItems(VChart.getLegendItems().type);
              }
            };
            this.tooltipOptions = _extends({}, this.tooltipOptions, customTooltip);
          }
          chart.tooltip(this.tooltipOptions);
        } else {
          chart.tooltip(false);
        }
      } else {
        chart.tooltip({
          showCrosshairs: !this.barOption
        });
      }

      if (autoAlignXAxis) {
        chart.axis(this.xField, {
          label(text, index, total) {
            const textCfg = {};
            if (index === 0) {
              textCfg.textAlign = 'left';
            }
            if (index === total - 1) {
              textCfg.textAlign = 'right';
            }
            return textCfg;
          }
        });
      }

      if (this.lineOptions) {
        const { shape, adjust } = this.lineOptions;
        let seriesField = this.lineOptions.seriesField || '';
        let colors = this.buildColor(this.lineOptions.colors);
        let rs = chart.line().position(this.buildPosition()).shape(shape);

        if (!seriesField && colors) {
          rs.color(colors);
        }
        if (seriesField) {
          if (colors && colors.length) {
            rs.color(seriesField, colors);
          } else {
            rs.color(seriesField);
          }
        }
        if (adjust) {
          rs.adjust(adjust);
        }
      }

      if (this.guides.length) {
        this.guides.forEach(guide => {
          chart.guide()[guide.type](guide.options);
        });
      }

      if (this.areaOptions) {
        const { adjust, seriesField } = this.areaOptions;
        let color = this.buildColor(this.areaOptions.colors);
        let rs = chart.area().position(this.buildPosition()).shape(this.areaOptions.shape || '');
        if (!seriesField && color) {
          rs.color(color);
        } else {
          rs.color(seriesField || '', color);
        }

        if (adjust) {
          rs.adjust(adjust);
        }
      }

      if (this.barOptions) {
        const { adjust, seriesField } = this.barOptions;
        let color = this.buildColor(this.barOptions.colors);
        let rs = chart.interval().position(this.buildPosition());
        if (!seriesField && color) {
          rs.color(color);
        } else {
          rs.color(seriesField || '', color);
        }

        if (adjust) {
          rs.adjust(adjust);
        }
      }

      ['x', 'y'].forEach(axis => {
        if (this[`${axis}AxisOptions`]) {
          chart.axis(this[`${axis}Field`], this[`${axis}Field`].disabled ? false : this[`${axis}AxisOptions`]);
        }
      });

      if (this.pieOptions) {
        chart.coord(this.pieOptions.coord, this.pieOptions);
        chart.axis(false);
        chart.interval().position('a*percent').color(this.pieOptions.seriesField, this.pieOptions.colors && this.pieOptions.colors.length ? this.pieOptions.colors : '').adjust('stack').style({
          lineWidth: 1,
          stroke: '#fff',
          lineJoin: 'round',
          lineCap: 'round'
        }).animate({
          appear: {
            duration: 1200,
            easing: 'bounceOut'
          }
        });
      }

      if (this.pointOptions) {
        const { seriesField } = this.pointOptions;
        let rs = chart.point().position(this.buildPosition()).style(this.pointOptions.styles);

        let color = this.buildColor(this.pointOptions.colors);
        if (!seriesField && color) {
          rs.color(color);
        } else {
          rs.color(seriesField || '', color);
        }
      }
      chart.render();
      this.chart = chart;
    }
  },
  async mounted() {
    await this.$nextTick();
    this.render();
    window.addEventListener('resize', this.render);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.render);
    this.destroy();
  }
});

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(632);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.$parent.setLegend(_extends({}, this.options, {
      disabled: this.disabled
    }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* camelAttrs */])(this.$attrs)));
  },
  render() {}
});

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin__ = __webpack_require__(650);



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin__["a" /* default */]],
  data() {
    return {
      chartName: 'line'
    };
  }
});

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(632);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    x: Boolean,
    y: Boolean,
    field: String
  },
  render() {},
  created() {
    this.emitSetting();
  },
  methods: {
    emitSetting() {
      ['x', 'y'].forEach(item => {
        if (this[item]) {
          this.$parent.setScale({
            [item]: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* camelAttrs */])(this.$attrs))
          });
          if (this.field) {
            this.$parent.setField(item, this.field);
          }
        }
      });
    }
  }
});

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(632);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    showCrosshairs: {
      type: Boolean,
      default: true
    },
    showItemMarker: {
      type: Boolean,
      default: true
    },
    showXValue: {
      type: Boolean,
      default: false
    },
    showValueInLegend: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  render() {},
  created() {
    const options = _extends({
      disabled: this.disabled,
      showCrosshairs: this.showCrosshairs,
      showItemMarker: this.showItemMarker,
      showValueInLegend: this.showValueInLegend
    }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* camelAttrs */])(this.options), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* camelAttrs */])(this.$attrs));
    if (this.showXValue) {
      options.onShow = function (ev) {
        const { items } = ev;
        items[0].name = items[0].title;
      };
    }
    this.$parent.setTooltip(options);
  }
});

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__normal__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__normal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__normal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vip__ = __webpack_require__(966);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svip__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__svip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tubu__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tubu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__tubu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vux_src_components_x_dialog_index_vue__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vux_src_components_x_dialog_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vux_src_components_x_dialog_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vux_src_directives_transfer_dom_index_js__ = __webpack_require__(633);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };









/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    TransferDom: __WEBPACK_IMPORTED_MODULE_6_vux_src_directives_transfer_dom_index_js__["a" /* default */]
  },
  components: {
    XDialog: __WEBPACK_IMPORTED_MODULE_5_vux_src_components_x_dialog_index_vue___default.a,
    Normal: __WEBPACK_IMPORTED_MODULE_1__normal___default.a,
    Vip: __WEBPACK_IMPORTED_MODULE_2__vip___default.a,
    Svip: __WEBPACK_IMPORTED_MODULE_3__svip___default.a,
    Tubu: __WEBPACK_IMPORTED_MODULE_4__tubu___default.a
  },
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])(['userInfo', 'identityCode'])),
  data() {
    return {
      showHideOnBlur: false
    };
  },
  methods: {
    showInfoToast(e) {
      console.log(e);
      this.showHideOnBlur = true;
    }
  },
  mounted() {
    console.log(this.identityCode);
  }
});

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vux_src_components_cell_index_vue__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vux_src_components_cell_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vux_src_components_cell_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_src_components_tab_tab_vue__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_src_components_tab_tab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vux_src_components_tab_tab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_src_components_tab_tab_item_vue__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_src_components_tab_tab_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vux_src_components_tab_tab_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vux_src_components_grid_grid_vue__ = __webpack_require__(951);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vux_src_components_grid_grid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vux_src_components_grid_grid_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vux_src_components_grid_grid_item_vue__ = __webpack_require__(950);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vux_src_components_grid_grid_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vux_src_components_grid_grid_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_freedom__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_freedom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_components_freedom__);









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Cell: __WEBPACK_IMPORTED_MODULE_0_vux_src_components_cell_index_vue___default.a,
    Group: __WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue___default.a,
    Tab: __WEBPACK_IMPORTED_MODULE_2_vux_src_components_tab_tab_vue___default.a,
    TabItem: __WEBPACK_IMPORTED_MODULE_3_vux_src_components_tab_tab_item_vue___default.a,
    Grid: __WEBPACK_IMPORTED_MODULE_4_vux_src_components_grid_grid_vue___default.a,
    GridItem: __WEBPACK_IMPORTED_MODULE_5_vux_src_components_grid_grid_item_vue___default.a,
    FreeDom: __WEBPACK_IMPORTED_MODULE_6_components_freedom___default.a
  },
  data() {
    return {};
  },
  methods: {
    handelClick(item) {
      console.log(item);
    }
  },
  mounted() {}
});

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vux_src_components_cell_index_vue__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vux_src_components_cell_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vux_src_components_cell_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_src_components_tab_tab_vue__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_src_components_tab_tab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vux_src_components_tab_tab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_src_components_tab_tab_item_vue__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_src_components_tab_tab_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vux_src_components_tab_tab_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vux_src_components_v_chart_v_chart_vue__ = __webpack_require__(956);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vux_src_components_v_chart_v_chart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vux_src_components_v_chart_v_chart_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vux_src_components_v_chart_v_line_vue__ = __webpack_require__(958);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vux_src_components_v_chart_v_line_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vux_src_components_v_chart_v_line_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vux_src_components_v_chart_v_area_vue__ = __webpack_require__(953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vux_src_components_v_chart_v_area_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vux_src_components_v_chart_v_area_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vux_src_components_v_chart_v_tooltip_vue__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vux_src_components_v_chart_v_tooltip_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vux_src_components_v_chart_v_tooltip_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vux_src_components_v_chart_v_legend_vue__ = __webpack_require__(957);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vux_src_components_v_chart_v_legend_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vux_src_components_v_chart_v_legend_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vux_src_components_v_chart_v_bar_vue__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vux_src_components_v_chart_v_bar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_vux_src_components_v_chart_v_bar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vux_src_components_v_chart_v_scale_vue__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vux_src_components_v_chart_v_scale_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_vux_src_components_v_chart_v_scale_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vux_src_components_v_chart_v_axis_vue__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vux_src_components_v_chart_v_axis_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_vux_src_components_v_chart_v_axis_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lint_color_json__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lint_color_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__lint_color_json__);















/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Cell: __WEBPACK_IMPORTED_MODULE_0_vux_src_components_cell_index_vue___default.a,
    Group: __WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue___default.a,
    Tab: __WEBPACK_IMPORTED_MODULE_2_vux_src_components_tab_tab_vue___default.a,
    TabItem: __WEBPACK_IMPORTED_MODULE_3_vux_src_components_tab_tab_item_vue___default.a,
    VChart: __WEBPACK_IMPORTED_MODULE_4_vux_src_components_v_chart_v_chart_vue___default.a,
    VLine: __WEBPACK_IMPORTED_MODULE_5_vux_src_components_v_chart_v_line_vue___default.a,
    VArea: __WEBPACK_IMPORTED_MODULE_6_vux_src_components_v_chart_v_area_vue___default.a,
    VTooltip: __WEBPACK_IMPORTED_MODULE_7_vux_src_components_v_chart_v_tooltip_vue___default.a,
    VLegend: __WEBPACK_IMPORTED_MODULE_8_vux_src_components_v_chart_v_legend_vue___default.a,
    VBar: __WEBPACK_IMPORTED_MODULE_9_vux_src_components_v_chart_v_bar_vue___default.a,
    VScale: __WEBPACK_IMPORTED_MODULE_10_vux_src_components_v_chart_v_scale_vue___default.a,
    VAxis: __WEBPACK_IMPORTED_MODULE_11_vux_src_components_v_chart_v_axis_vue___default.a
  },
  data() {
    return {
      data: [{ name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 }, { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 }, { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 }, { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 }, { name: 'London', 月份: 'May.', 月均降雨量: 47 }, { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 }, { name: 'London', 月份: 'Jul.', 月均降雨量: 24 }, { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 }, { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 }, { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 }, { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 }, { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 }, { name: 'Berlin', 月份: 'May.', 月均降雨量: 52.6 }, { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 }, { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 }, { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 }],
      data2: __WEBPACK_IMPORTED_MODULE_12__lint_color_json___default.a
    };
  },
  methods: {
    handelClick(item) {
      console.log(item);
    }
  },
  mounted() {}
});

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(512)();
// imports


// module
exports.push([module.i, ".weui-grid.vux-grid-item-no-border:before{display:none}", "", {"version":3,"sources":["D:/zhitaoAPP/node_modules/_vux@2.9.1@vux/src/components/grid/grid-item.vue"],"names":[],"mappings":"AACA,0CACE,YAAc,CACf","file":"grid-item.vue","sourcesContent":["\n.weui-grid.vux-grid-item-no-border:before {\n  display: none;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(512)();
// imports


// module
exports.push([module.i, "section[data-v-1331f831]{margin-bottom:60px;color:#333}.head_btn[data-v-1331f831]{padding:44px 1.5rem 1rem;background:#fff}.section[data-v-1331f831]{margin-top:10px;margin:10px 1rem}.section li[data-v-1331f831]{min-height:150px;background:#fff;margin-bottom:10px;border-radius:10px}.section .title[data-v-1331f831]{width:100%;height:3rem;border-bottom:1px solid #f3f3f3;text-align:center;line-height:3rem;font-size:.8rem;position:relative;font-weight:600;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.section .title img[data-v-1331f831]{width:1.5rem;height:auto;margin-right:5px}.section .desc-box[data-v-1331f831]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:30px}.section .desc-box .desc[data-v-1331f831]{-ms-flex:1;flex:1;min-height:100px;text-align:center}.section .desc-box .desc-title[data-v-1331f831]{color:#078ae9;font-size:.6rem;line-height:4rem;margin-top:1rem}.section .desc-box .desc-title span[data-v-1331f831]{font-size:1.5rem}.section .desc-box .desc-info[data-v-1331f831]{width:80%;margin:0 auto;line-height:1.5rem;font-size:.6rem;color:#848484}.bottom-btn img[data-v-1331f831]{width:60%;margin:0 auto;margin-top:1rem;padding-bottom:1rem}", "", {"version":3,"sources":["D:/zhitaoAPP/src/pages/svip/vip.vue"],"names":[],"mappings":"AACA,yBACE,mBAAoB,AACpB,UAAY,CACb,AACD,2BACE,yBAA0B,AAC1B,eAAiB,CAClB,AACD,0BACE,gBAAiB,AACjB,gBAAkB,CACnB,AACD,6BACE,iBAAkB,AAClB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAoB,CACrB,AACD,iCACE,WAAY,AACZ,YAAa,AACb,gCAAiC,AACjC,kBAAmB,AACnB,iBAAkB,AAClB,gBAAiB,AACjB,kBAAmB,AACnB,gBAAiB,AACjB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,sBAAwB,CAC7B,AACD,qCACE,aAAc,AACd,YAAa,AACb,gBAAkB,CACnB,AACD,oCACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,8BAA+B,AACnC,mBAAqB,CACtB,AACD,0CACE,WAAY,AACR,OAAQ,AACZ,iBAAkB,AAClB,iBAAmB,CACpB,AACD,gDACE,cAAe,AACf,gBAAiB,AACjB,iBAAkB,AAClB,eAAiB,CAClB,AACD,qDACE,gBAAkB,CACnB,AACD,+CACE,UAAW,AACX,cAAe,AACf,mBAAoB,AACpB,gBAAiB,AACjB,aAAe,CAChB,AACD,iCACE,UAAW,AACX,cAAe,AACf,gBAAiB,AACjB,mBAAqB,CACtB","file":"vip.vue","sourcesContent":["\nsection[data-v-1331f831] {\n  margin-bottom: 60px;\n  color: #333;\n}\n.head_btn[data-v-1331f831] {\n  padding: 44px 1.5rem 1rem;\n  background: #fff;\n}\n.section[data-v-1331f831] {\n  margin-top: 10px;\n  margin: 10px 1rem;\n}\n.section li[data-v-1331f831] {\n  min-height: 150px;\n  background: #fff;\n  margin-bottom: 10px;\n  border-radius: 10px;\n}\n.section .title[data-v-1331f831] {\n  width: 100%;\n  height: 3rem;\n  border-bottom: 1px solid #F3F3F3;\n  text-align: center;\n  line-height: 3rem;\n  font-size: .8rem;\n  position: relative;\n  font-weight: 600;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.section .title img[data-v-1331f831] {\n  width: 1.5rem;\n  height: auto;\n  margin-right: 5px;\n}\n.section .desc-box[data-v-1331f831] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  padding-bottom: 30px;\n}\n.section .desc-box .desc[data-v-1331f831] {\n  -ms-flex: 1;\n      flex: 1;\n  min-height: 100px;\n  text-align: center;\n}\n.section .desc-box .desc-title[data-v-1331f831] {\n  color: #078AE9;\n  font-size: .6rem;\n  line-height: 4rem;\n  margin-top: 1rem;\n}\n.section .desc-box .desc-title span[data-v-1331f831] {\n  font-size: 1.5rem;\n}\n.section .desc-box .desc-info[data-v-1331f831] {\n  width: 80%;\n  margin: 0 auto;\n  line-height: 1.5rem;\n  font-size: .6rem;\n  color: #848484;\n}\n.bottom-btn img[data-v-1331f831] {\n  width: 60%;\n  margin: 0 auto;\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(512)();
// imports


// module
exports.push([module.i, ".weui-grids{position:relative;overflow:hidden}.weui-grids:before{right:0;height:1px;border-top:1px solid #d9d9d9;transform-origin:0 0;transform:scaleY(.5)}.weui-grids:after,.weui-grids:before{content:\" \";position:absolute;left:0;top:0;color:#d9d9d9}.weui-grids:after{width:1px;bottom:0;border-left:1px solid #d9d9d9;transform-origin:0 0;transform:scaleX(.5)}.weui-grid{position:relative;float:left;padding:20px 10px;width:33.33333333%;box-sizing:border-box}.weui-grid:before{top:0;width:1px;border-right:1px solid #d9d9d9;transform-origin:100% 0;transform:scaleX(.5)}.weui-grid:after,.weui-grid:before{content:\" \";position:absolute;right:0;bottom:0;color:#d9d9d9}.weui-grid:after{left:0;height:1px;border-bottom:1px solid #d9d9d9;transform-origin:0 100%;transform:scaleY(.5)}.weui-grid:active{background-color:#ececec}.weui-grid__icon{width:28px;height:28px;margin:0 auto}.weui-grid__icon img{display:block;width:100%;height:100%}.weui-grid__icon+.weui-grid__label{margin-top:5px}.weui-grid__label{display:block;text-align:center;color:#000;font-size:14px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.weui-grids.vux-grid-no-lr-borders:after{display:none}", "", {"version":3,"sources":["D:/zhitaoAPP/node_modules/_vux@2.9.1@vux/src/components/grid/grid.vue"],"names":[],"mappings":"AAgSA,YACE,kBAAmB,AACnB,eAAiB,CAClB,AACD,mBAKE,QAAS,AACT,WAAY,AACZ,6BAA8B,AAE9B,qBAAsB,AACtB,oBAAuB,CACxB,AACD,qCAXE,YAAa,AACb,kBAAmB,AACnB,OAAQ,AACR,MAAO,AAIP,aAAe,CAehB,AAXD,kBAKE,UAAW,AACX,SAAU,AACV,8BAA+B,AAE/B,qBAAsB,AACtB,oBAAuB,CACxB,AACD,WACE,kBAAmB,AACnB,WAAY,AACZ,kBAAmB,AACnB,mBAAoB,AACpB,qBAAuB,CACxB,AACD,kBAIE,MAAO,AACP,UAAW,AAEX,+BAAgC,AAEhC,wBAAyB,AACzB,oBAAuB,CACxB,AACD,mCAXE,YAAa,AACb,kBAAmB,AACnB,QAAS,AAGT,SAAU,AAEV,aAAe,CAehB,AAXD,iBAGE,OAAQ,AAGR,WAAY,AACZ,gCAAiC,AAEjC,wBAAyB,AACzB,oBAAuB,CACxB,AACD,kBACE,wBAA0B,CAC3B,AACD,iBACE,WAAY,AACZ,YAAa,AACb,aAAe,CAChB,AACD,qBACE,cAAe,AACf,WAAY,AACZ,WAAa,CACd,AACD,mCACE,cAAgB,CACjB,AACD,kBACE,cAAe,AACf,kBAAmB,AACnB,WAAe,AACf,eAAgB,AAChB,mBAAoB,AACpB,uBAAwB,AACxB,eAAiB,CAClB,AACD,yCACE,YAAc,CACf","file":"grid.vue","sourcesContent":["/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.weui-grids {\n  position: relative;\n  overflow: hidden;\n}\n.weui-grids:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.weui-grids:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  transform-origin: 0 0;\n  transform: scaleX(0.5);\n}\n.weui-grid {\n  position: relative;\n  float: left;\n  padding: 20px 10px;\n  width: 33.33333333%;\n  box-sizing: border-box;\n}\n.weui-grid:before {\n  content: \" \";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-right: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  transform-origin: 100% 0;\n  transform: scaleX(0.5);\n}\n.weui-grid:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n}\n.weui-grid:active {\n  background-color: #ECECEC;\n}\n.weui-grid__icon {\n  width: 28px;\n  height: 28px;\n  margin: 0 auto;\n}\n.weui-grid__icon img {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.weui-grid__icon + .weui-grid__label {\n  margin-top: 5px;\n}\n.weui-grid__label {\n  display: block;\n  text-align: center;\n  color: #000000;\n  font-size: 14px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.weui-grids.vux-grid-no-lr-borders:after {\n  display: none;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(512)();
// imports


// module
exports.push([module.i, ".weui-cell[data-v-2c0d1aa0]{padding:1.2rem 1rem!important;font-size:1rem}section[data-v-2c0d1aa0]{margin-bottom:55px;color:#333}.head_btn[data-v-2c0d1aa0]{padding:4rem 0 1rem;background:#fff}.head_btn .center[data-v-2c0d1aa0]{background:#fff;padding:1rem 0;border-bottom:1px solid #eaeaea;padding:0;padding-bottom:.8rem}.head_btn .center .all_nums[data-v-2c0d1aa0]{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;color:#333}.head_btn .center .all_nums div[data-v-2c0d1aa0]{width:33.333%;box-sizing:border-box;text-align:center}.head_btn .center .all_nums div span[data-v-2c0d1aa0]{font-size:.8rem}.head_btn .center .all_nums div p[data-v-2c0d1aa0]{line-height:2rem}.head_btn .center .all_nums .vips[data-v-2c0d1aa0]{border-left:1px solid #eaeaea;border-right:1px solid #eaeaea}.tab_box .vux-tab-item[data-v-2c0d1aa0]{font-weight:600;background:transparent}.tab_box .tab_content[data-v-2c0d1aa0]{display:block;padding:0 1rem;color:#333;background:#fff;padding-bottom:1rem}.tab_box .tab_content .except[data-v-2c0d1aa0]{line-height:4rem;font-size:.8rem;color:#333;font-weight:600}.tab_box .tab_content .except_nums[data-v-2c0d1aa0]{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;width:100%}.tab_box .tab_content .except_nums .except_box[data-v-2c0d1aa0]{-ms-flex:1;flex:1}.tab_box .tab_content .except_nums .except_box .except_title[data-v-2c0d1aa0]{color:#999;font-size:.8rem}.tab_box .tab_content .except_nums .except_box p[data-v-2c0d1aa0]{line-height:2rem;color:#999;font-size:.8rem;font-weight:600}.count_box[data-v-2c0d1aa0]{margin-top:1rem;background:#fff;width:100%}.count_box .vux-label[data-v-2c0d1aa0]{font-weight:600}.count_box .weui-flex__item[data-v-2c0d1aa0]{color:#317df4}", "", {"version":3,"sources":["D:/zhitaoAPP/src/pages/svip/tubu.vue"],"names":[],"mappings":"AACA,4BACE,8BAAgC,AAChC,cAAgB,CACjB,AACD,yBACE,mBAAoB,AACpB,UAAY,CACb,AACD,2BACE,oBAAqB,AACrB,eAAiB,CAClB,AACD,mCACE,gBAAiB,AACjB,eAAgB,AAChB,gCAAiC,AACjC,UAAW,AACX,oBAAsB,CACvB,AACD,6CACE,WAAY,AACZ,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,8BAA+B,AACnC,UAAY,CACb,AACD,iDACE,cAAe,AACf,sBAAuB,AACvB,iBAAmB,CACpB,AACD,sDACE,eAAiB,CAClB,AACD,mDACE,gBAAkB,CACnB,AACD,mDACE,8BAA+B,AAC/B,8BAAgC,CACjC,AACD,wCACE,gBAAiB,AACjB,sBAAwB,CACzB,AACD,uCACE,cAAe,AACf,eAAgB,AAChB,WAAY,AACZ,gBAAoB,AACpB,mBAAqB,CACtB,AACD,+CACE,iBAAkB,AAClB,gBAAiB,AACjB,WAAY,AACZ,eAAiB,CAClB,AACD,oDACE,oBAAqB,AACrB,aAAc,AACd,WAAY,AACR,OAAQ,AACZ,UAAY,CACb,AACD,gEACE,WAAY,AACR,MAAQ,CACb,AACD,8EACE,WAAY,AACZ,eAAiB,CAClB,AACD,kEACE,iBAAkB,AAClB,WAAY,AACZ,gBAAiB,AACjB,eAAiB,CAClB,AACD,4BACE,gBAAiB,AACjB,gBAAiB,AACjB,UAAY,CACb,AACD,uCACE,eAAiB,CAClB,AACD,6CACE,aAAe,CAChB","file":"tubu.vue","sourcesContent":["\n.weui-cell[data-v-2c0d1aa0] {\n  padding: 1.2rem 1rem !important;\n  font-size: 1rem;\n}\nsection[data-v-2c0d1aa0] {\n  margin-bottom: 55px;\n  color: #333;\n}\n.head_btn[data-v-2c0d1aa0] {\n  padding: 4rem 0 1rem;\n  background: #fff;\n}\n.head_btn .center[data-v-2c0d1aa0] {\n  background: #FFF;\n  padding: 1rem 0;\n  border-bottom: 1px solid #eaeaea;\n  padding: 0;\n  padding-bottom: .8rem;\n}\n.head_btn .center .all_nums[data-v-2c0d1aa0] {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  color: #333;\n}\n.head_btn .center .all_nums div[data-v-2c0d1aa0] {\n  width: 33.333%;\n  box-sizing: border-box;\n  text-align: center;\n}\n.head_btn .center .all_nums div span[data-v-2c0d1aa0] {\n  font-size: .8rem;\n}\n.head_btn .center .all_nums div p[data-v-2c0d1aa0] {\n  line-height: 2rem;\n}\n.head_btn .center .all_nums .vips[data-v-2c0d1aa0] {\n  border-left: 1px solid #eaeaea;\n  border-right: 1px solid #eaeaea;\n}\n.tab_box .vux-tab-item[data-v-2c0d1aa0] {\n  font-weight: 600;\n  background: transparent;\n}\n.tab_box .tab_content[data-v-2c0d1aa0] {\n  display: block;\n  padding: 0 1rem;\n  color: #333;\n  background: #ffffff;\n  padding-bottom: 1rem;\n}\n.tab_box .tab_content .except[data-v-2c0d1aa0] {\n  line-height: 4rem;\n  font-size: .8rem;\n  color: #333;\n  font-weight: 600;\n}\n.tab_box .tab_content .except_nums[data-v-2c0d1aa0] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  width: 100%;\n}\n.tab_box .tab_content .except_nums .except_box[data-v-2c0d1aa0] {\n  -ms-flex: 1;\n      flex: 1;\n}\n.tab_box .tab_content .except_nums .except_box .except_title[data-v-2c0d1aa0] {\n  color: #999;\n  font-size: .8rem;\n}\n.tab_box .tab_content .except_nums .except_box p[data-v-2c0d1aa0] {\n  line-height: 2rem;\n  color: #999;\n  font-size: .8rem;\n  font-weight: 600;\n}\n.count_box[data-v-2c0d1aa0] {\n  margin-top: 1rem;\n  background: #fff;\n  width: 100%;\n}\n.count_box .vux-label[data-v-2c0d1aa0] {\n  font-weight: 600;\n}\n.count_box .weui-flex__item[data-v-2c0d1aa0] {\n  color: #317df4;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(512)();
// imports


// module
exports.push([module.i, ".noselect{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}", "", {"version":3,"sources":["D:/zhitaoAPP/node_modules/_vux@2.9.1@vux/src/components/v-chart/v-chart.vue"],"names":[],"mappings":"AACA,UACE,2BAA4B,AAC1B,yBAA0B,AACvB,sBAAuB,AACtB,qBAAsB,AAClB,gBAAkB,CAE7B","file":"v-chart.vue","sourcesContent":["\n.noselect {\n  -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n       -moz-user-select: none; /* Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(512)();
// imports


// module
exports.push([module.i, "section[data-v-4b4f7e83]{margin-bottom:60px;color:#333}.head_btn[data-v-4b4f7e83]{padding:44px 1.5rem 1rem;background:#fff}.section[data-v-4b4f7e83]{margin-top:10px;margin:10px 1rem}.section li[data-v-4b4f7e83]{min-height:150px;background:#fff;margin-bottom:10px;border-radius:10px}.section .title[data-v-4b4f7e83]{width:100%;height:3rem;border-bottom:1px solid #f3f3f3;text-align:center;line-height:3rem;font-size:.8rem;position:relative;font-weight:600;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.section .title img[data-v-4b4f7e83]{width:1.5rem;height:auto;margin-right:5px}.section .desc-box[data-v-4b4f7e83]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:30px}.section .desc-box .desc[data-v-4b4f7e83]{-ms-flex:1;flex:1;min-height:100px;text-align:center}.section .desc-box .desc-title[data-v-4b4f7e83]{color:#078ae9;font-size:.6rem;line-height:4rem;margin-top:1rem}.section .desc-box .desc-title span[data-v-4b4f7e83]{font-size:1.5rem}.section .desc-box .desc-info[data-v-4b4f7e83]{width:80%;margin:0 auto;line-height:1.5rem;font-size:.6rem;color:#848484}.bottom-btn img[data-v-4b4f7e83]{width:60%;margin:0 auto;margin-top:1rem;padding-bottom:1rem}", "", {"version":3,"sources":["D:/zhitaoAPP/src/pages/svip/normal.vue"],"names":[],"mappings":"AACA,yBACE,mBAAoB,AACpB,UAAY,CACb,AACD,2BACE,yBAA0B,AAC1B,eAAiB,CAClB,AACD,0BACE,gBAAiB,AACjB,gBAAkB,CACnB,AACD,6BACE,iBAAkB,AAClB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAoB,CACrB,AACD,iCACE,WAAY,AACZ,YAAa,AACb,gCAAiC,AACjC,kBAAmB,AACnB,iBAAkB,AAClB,gBAAiB,AACjB,kBAAmB,AACnB,gBAAiB,AACjB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,sBAAwB,CAC7B,AACD,qCACE,aAAc,AACd,YAAa,AACb,gBAAkB,CACnB,AACD,oCACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,8BAA+B,AACnC,mBAAqB,CACtB,AACD,0CACE,WAAY,AACR,OAAQ,AACZ,iBAAkB,AAClB,iBAAmB,CACpB,AACD,gDACE,cAAe,AACf,gBAAiB,AACjB,iBAAkB,AAClB,eAAiB,CAClB,AACD,qDACE,gBAAkB,CACnB,AACD,+CACE,UAAW,AACX,cAAe,AACf,mBAAoB,AACpB,gBAAiB,AACjB,aAAe,CAChB,AACD,iCACE,UAAW,AACX,cAAe,AACf,gBAAiB,AACjB,mBAAqB,CACtB","file":"normal.vue","sourcesContent":["\nsection[data-v-4b4f7e83] {\n  margin-bottom: 60px;\n  color: #333;\n}\n.head_btn[data-v-4b4f7e83] {\n  padding: 44px 1.5rem 1rem;\n  background: #fff;\n}\n.section[data-v-4b4f7e83] {\n  margin-top: 10px;\n  margin: 10px 1rem;\n}\n.section li[data-v-4b4f7e83] {\n  min-height: 150px;\n  background: #fff;\n  margin-bottom: 10px;\n  border-radius: 10px;\n}\n.section .title[data-v-4b4f7e83] {\n  width: 100%;\n  height: 3rem;\n  border-bottom: 1px solid #F3F3F3;\n  text-align: center;\n  line-height: 3rem;\n  font-size: .8rem;\n  position: relative;\n  font-weight: 600;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.section .title img[data-v-4b4f7e83] {\n  width: 1.5rem;\n  height: auto;\n  margin-right: 5px;\n}\n.section .desc-box[data-v-4b4f7e83] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  padding-bottom: 30px;\n}\n.section .desc-box .desc[data-v-4b4f7e83] {\n  -ms-flex: 1;\n      flex: 1;\n  min-height: 100px;\n  text-align: center;\n}\n.section .desc-box .desc-title[data-v-4b4f7e83] {\n  color: #078AE9;\n  font-size: .6rem;\n  line-height: 4rem;\n  margin-top: 1rem;\n}\n.section .desc-box .desc-title span[data-v-4b4f7e83] {\n  font-size: 1.5rem;\n}\n.section .desc-box .desc-info[data-v-4b4f7e83] {\n  width: 80%;\n  margin: 0 auto;\n  line-height: 1.5rem;\n  font-size: .6rem;\n  color: #848484;\n}\n.bottom-btn img[data-v-4b4f7e83] {\n  width: 60%;\n  margin: 0 auto;\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(512)();
// imports


// module
exports.push([module.i, ".vux-close[data-v-718ce766]{position:relative;display:inline-block;vertical-align:middle;color:#999;width:24px;height:24px}.vux-close[data-v-718ce766]:after,.vux-close[data-v-718ce766]:before{content:\"\";position:absolute;left:0;top:11px;width:24px;height:1px;background-color:currentColor;transform:rotate(-45deg)}.vux-close[data-v-718ce766]:after{transform:rotate(45deg)}.page-content header[data-v-718ce766]{height:12rem;background:#fff url(" + __webpack_require__(862) + ");background-size:100% 100%;position:relative}.page-content header .img[data-v-718ce766]{position:absolute;right:0}.page-content header .img.img_idot[data-v-718ce766]{background:url(" + __webpack_require__(870) + ");background-size:100% 100%;width:1.2rem;height:1.2rem;right:20%;top:1.5rem;z-index:2}.page-content header .img.img_glue[data-v-718ce766]{background:url(" + __webpack_require__(848) + ");background-size:100% 100%;width:70px;height:50px;right:0;top:2rem;z-index:2}.page-content header .head_card[data-v-718ce766]{width:85%;height:12rem;background:#444;border-radius:1rem;margin:0 auto;position:absolute;top:2rem;left:0;right:0}.page-content header .head_card .card[data-v-718ce766]{position:relative;height:inherit;padding:1rem .8rem 0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.page-content header .head_card .card .card_t[data-v-718ce766]{display:-ms-flexbox;display:flex;height:3.5rem}.page-content header .head_card .card .card_t .user_avatar[data-v-718ce766]{width:3.5rem;height:3.5rem}.page-content header .head_card .card .card_t .card_t_r[data-v-718ce766]{margin-left:1rem;display:-ms-flexbox;display:flex;width:100%;-ms-flex-direction:column;flex-direction:column;line-height:1.5rem}.page-content header .head_card .card .card_t .card_t_r .card_name[data-v-718ce766]{-ms-flex:1;flex:1;color:#fff;font-weight:600;font-size:1rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;line-height:inherit}.page-content header .head_card .card .card_t .card_t_r .card_name img[data-v-718ce766]{width:1.5rem;margin-left:10px}.page-content header .head_card .card .card_t .card_t_r .card_name .tubu-icon[data-v-718ce766]{width:2.5rem}.page-content header .head_card .card .card_t .card_t_r .f18[data-v-718ce766]{font-size:1.1rem;font-weight:400}.page-content header .head_card .card .card_t .card_t_r .card_date[data-v-718ce766]{color:#fff;font-size:.9rem;line-height:inherit}.page-content header .head_card .card .card_c[data-v-718ce766]{-ms-flex:1;flex:1;position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.page-content header .head_card .card .card_f[data-v-718ce766]{color:#f2d48e;position:absolute;line-height:2rem;bottom:1rem;font-size:1rem}.page-content header .head_card .card .inner_white[data-v-718ce766]{-ms-flex:1;flex:1;color:#fff;font-size:.8rem;line-height:2rem;position:relative;margin-top:3rem;border-top:1px solid #737373}.page-content header .head_card .card .check-info[data-v-718ce766]{position:absolute;right:0;top:2rem}.content[data-v-718ce766]{box-sizing:border-box;background:#fff}.dialog-toast .weui-dialog[data-v-718ce766]{border-radius:8px;padding-bottom:8px}.dialog-toast .dialog-head[data-v-718ce766]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:60%;margin:0 auto;-ms-flex-align:center;align-items:center}.dialog-toast .dialog-head .dialog-title[data-v-718ce766]{line-height:4rem;color:#333;font-weight:600}.dialog-toast .dialog-head img[data-v-718ce766]{height:3px}.dialog-toast .dialog-body[data-v-718ce766]{width:90%;margin:0 auto}.dialog-toast .dialog-body .dialog-h[data-v-718ce766]{font-size:.8rem;border-bottom:1px solid #eaeaea;text-align:left;line-height:20px;padding-bottom:10px}.dialog-toast .dialog-body .dialog-list[data-v-718ce766]{line-height:3rem;border-bottom:1px solid #eaeaea}.dialog-toast .dialog-body .dialog-list li[data-v-718ce766]{font-size:.8rem;text-align:left}.dialog-toast .dialog-body .dialog-list li a[data-v-718ce766]{color:#333}.dialog-toast .dialog-body .dialog-list li span[data-v-718ce766]{float:right}.dialog-toast .dialog-body .dialog-list li:last-child span[data-v-718ce766]{font-weight:600}.dialog-toast .dialog-footer[data-v-718ce766]{margin:20px auto}.dialog-toast .dialog-footer img[data-v-718ce766]{width:80%;margin:0 auto}", "", {"version":3,"sources":["D:/zhitaoAPP/src/pages/svip/index.vue"],"names":[],"mappings":"AACA,4BACE,kBAAmB,AACnB,qBAAsB,AACtB,sBAAuB,AACvB,WAAY,AACZ,WAAY,AACZ,WAAa,CACd,AACD,qEAEE,WAAY,AACZ,kBAAmB,AACnB,OAAQ,AACR,SAAU,AACV,WAAY,AACZ,WAAY,AACZ,8BAA+B,AAC/B,wBAA0B,CAC3B,AACD,kCACE,uBAAyB,CAC1B,AACD,sCACE,aAAc,AACd,8CAA0D,AAC1D,0BAA2B,AAC3B,iBAAmB,CACpB,AACD,2CACE,kBAAmB,AACnB,OAAS,CACV,AACD,oDACE,yCAAgD,AAChD,0BAA2B,AAC3B,aAAc,AACd,cAAe,AACf,UAAW,AACX,WAAY,AACZ,SAAW,CACZ,AACD,oDACE,yCAAkD,AAClD,0BAA2B,AAC3B,WAAY,AACZ,YAAa,AACb,QAAS,AACT,SAAU,AACV,SAAW,CACZ,AACD,iDACE,UAAW,AACX,aAAc,AACd,gBAAoB,AACpB,mBAAoB,AACpB,cAAe,AACf,kBAAmB,AACnB,SAAU,AACV,OAAQ,AACR,OAAS,CACV,AACD,uDACE,kBAAmB,AACnB,eAAgB,AAChB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,qBAAuB,CAC5B,AACD,+DACE,oBAAqB,AACrB,aAAc,AACd,aAAe,CAChB,AACD,4EACE,aAAc,AACd,aAAe,CAChB,AACD,yEACE,iBAAkB,AAClB,oBAAqB,AACrB,aAAc,AACd,WAAY,AACZ,0BAA2B,AACvB,sBAAuB,AAC3B,kBAAoB,CACrB,AACD,oFACE,WAAY,AACR,OAAQ,AACZ,WAAY,AACZ,gBAAiB,AACjB,eAAgB,AAChB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,mBAAqB,CACtB,AACD,wFACE,aAAc,AACd,gBAAkB,CACnB,AACD,+FACE,YAAc,CACf,AACD,8EACE,iBAAkB,AAClB,eAAoB,CACrB,AACD,oFACE,WAAY,AACZ,gBAAiB,AACjB,mBAAqB,CACtB,AACD,+DACE,WAAY,AACR,OAAQ,AACZ,kBAAmB,AACnB,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,qBAAuB,CAC5B,AACD,+DACE,cAAe,AACf,kBAAmB,AACnB,iBAAkB,AAClB,YAAa,AACb,cAAgB,CACjB,AACD,oEACE,WAAY,AACR,OAAQ,AACZ,WAAY,AACZ,gBAAiB,AACjB,iBAAkB,AAClB,kBAAmB,AACnB,gBAAiB,AACjB,4BAA8B,CAC/B,AACD,mEACE,kBAAmB,AACnB,QAAS,AACT,QAAU,CACX,AACD,0BACE,sBAAuB,AACvB,eAAiB,CAClB,AACD,4CACE,kBAAmB,AACnB,kBAAoB,CACrB,AACD,4CACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,8BAA+B,AACnC,UAAW,AACX,cAAe,AACf,sBAAuB,AACnB,kBAAoB,CACzB,AACD,0DACE,iBAAkB,AAClB,WAAY,AACZ,eAAiB,CAClB,AACD,gDACE,UAAY,CACb,AACD,4CACE,UAAW,AACX,aAAe,CAChB,AACD,sDACE,gBAAiB,AACjB,gCAAiC,AACjC,gBAAiB,AACjB,iBAAkB,AAClB,mBAAqB,CACtB,AACD,yDACE,iBAAkB,AAClB,+BAAiC,CAClC,AACD,4DACE,gBAAiB,AACjB,eAAiB,CAClB,AACD,8DACE,UAAY,CACb,AACD,iEACE,WAAa,CACd,AACD,4EACE,eAAiB,CAClB,AACD,8CACE,gBAAkB,CACnB,AACD,kDACE,UAAW,AACX,aAAe,CAChB","file":"index.vue","sourcesContent":["\n.vux-close[data-v-718ce766] {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  color: #999;\n  width: 24px;\n  height: 24px;\n}\n.vux-close[data-v-718ce766]:before,\n.vux-close[data-v-718ce766]:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 11px;\n  width: 24px;\n  height: 1px;\n  background-color: currentColor;\n  transform: rotate(-45deg);\n}\n.vux-close[data-v-718ce766]:after {\n  transform: rotate(45deg);\n}\n.page-content header[data-v-718ce766] {\n  height: 12rem;\n  background: #ffffff url(\"../../assets/images/svipbg.png\");\n  background-size: 100% 100%;\n  position: relative;\n}\n.page-content header .img[data-v-718ce766] {\n  position: absolute;\n  right: 0;\n}\n.page-content header .img.img_idot[data-v-718ce766] {\n  background: url(\"../../assets/images/yuan.png\");\n  background-size: 100% 100%;\n  width: 1.2rem;\n  height: 1.2rem;\n  right: 20%;\n  top: 1.5rem;\n  z-index: 2;\n}\n.page-content header .img.img_glue[data-v-718ce766] {\n  background: url(\"../../assets/images/buyuan.png\");\n  background-size: 100% 100%;\n  width: 70px;\n  height: 50px;\n  right: 0;\n  top: 2rem;\n  z-index: 2;\n}\n.page-content header .head_card[data-v-718ce766] {\n  width: 85%;\n  height: 12rem;\n  background: #444444;\n  border-radius: 1rem;\n  margin: 0 auto;\n  position: absolute;\n  top: 2rem;\n  left: 0;\n  right: 0;\n}\n.page-content header .head_card .card[data-v-718ce766] {\n  position: relative;\n  height: inherit;\n  padding: 1rem .8rem 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n.page-content header .head_card .card .card_t[data-v-718ce766] {\n  display: -ms-flexbox;\n  display: flex;\n  height: 3.5rem;\n}\n.page-content header .head_card .card .card_t .user_avatar[data-v-718ce766] {\n  width: 3.5rem;\n  height: 3.5rem;\n}\n.page-content header .head_card .card .card_t .card_t_r[data-v-718ce766] {\n  margin-left: 1rem;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  line-height: 1.5rem;\n}\n.page-content header .head_card .card .card_t .card_t_r .card_name[data-v-718ce766] {\n  -ms-flex: 1;\n      flex: 1;\n  color: #fff;\n  font-weight: 600;\n  font-size: 1rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  line-height: inherit;\n}\n.page-content header .head_card .card .card_t .card_t_r .card_name img[data-v-718ce766] {\n  width: 1.5rem;\n  margin-left: 10px;\n}\n.page-content header .head_card .card .card_t .card_t_r .card_name .tubu-icon[data-v-718ce766] {\n  width: 2.5rem;\n}\n.page-content header .head_card .card .card_t .card_t_r .f18[data-v-718ce766] {\n  font-size: 1.1rem;\n  font-weight: normal;\n}\n.page-content header .head_card .card .card_t .card_t_r .card_date[data-v-718ce766] {\n  color: #fff;\n  font-size: .9rem;\n  line-height: inherit;\n}\n.page-content header .head_card .card .card_c[data-v-718ce766] {\n  -ms-flex: 1;\n      flex: 1;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n.page-content header .head_card .card .card_f[data-v-718ce766] {\n  color: #f2d48e;\n  position: absolute;\n  line-height: 2rem;\n  bottom: 1rem;\n  font-size: 1rem;\n}\n.page-content header .head_card .card .inner_white[data-v-718ce766] {\n  -ms-flex: 1;\n      flex: 1;\n  color: #fff;\n  font-size: .8rem;\n  line-height: 2rem;\n  position: relative;\n  margin-top: 3rem;\n  border-top: 1px solid #737373;\n}\n.page-content header .head_card .card .check-info[data-v-718ce766] {\n  position: absolute;\n  right: 0;\n  top: 2rem;\n}\n.content[data-v-718ce766] {\n  box-sizing: border-box;\n  background: #fff;\n}\n.dialog-toast .weui-dialog[data-v-718ce766] {\n  border-radius: 8px;\n  padding-bottom: 8px;\n}\n.dialog-toast .dialog-head[data-v-718ce766] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  width: 60%;\n  margin: 0 auto;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.dialog-toast .dialog-head .dialog-title[data-v-718ce766] {\n  line-height: 4rem;\n  color: #333;\n  font-weight: 600;\n}\n.dialog-toast .dialog-head img[data-v-718ce766] {\n  height: 3px;\n}\n.dialog-toast .dialog-body[data-v-718ce766] {\n  width: 90%;\n  margin: 0 auto;\n}\n.dialog-toast .dialog-body .dialog-h[data-v-718ce766] {\n  font-size: .8rem;\n  border-bottom: 1px solid #EAEAEA;\n  text-align: left;\n  line-height: 20px;\n  padding-bottom: 10px;\n}\n.dialog-toast .dialog-body .dialog-list[data-v-718ce766] {\n  line-height: 3rem;\n  border-bottom: 1px solid #EAEAEA;\n}\n.dialog-toast .dialog-body .dialog-list li[data-v-718ce766] {\n  font-size: .8rem;\n  text-align: left;\n}\n.dialog-toast .dialog-body .dialog-list li a[data-v-718ce766] {\n  color: #333;\n}\n.dialog-toast .dialog-body .dialog-list li span[data-v-718ce766] {\n  float: right;\n}\n.dialog-toast .dialog-body .dialog-list li:last-child span[data-v-718ce766] {\n  font-weight: 600;\n}\n.dialog-toast .dialog-footer[data-v-718ce766] {\n  margin: 20px auto;\n}\n.dialog-toast .dialog-footer img[data-v-718ce766] {\n  width: 80%;\n  margin: 0 auto;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(512)();
// imports


// module
exports.push([module.i, ".weui-cell[data-v-7aac1034]{padding:1.2rem 1rem!important;font-size:1rem}section[data-v-7aac1034]{margin-bottom:60px;color:#333}.head_btn[data-v-7aac1034]{padding:4rem 0 1rem;background:#fff}.tab_box .vux-tab-item[data-v-7aac1034]{font-weight:600;background:transparent}.tab_box .tab_content[data-v-7aac1034]{display:block;padding:0 1rem;color:#333;background:#fff;padding-bottom:1rem}.tab_box .tab_content .except[data-v-7aac1034]{line-height:4rem;font-size:.8rem;color:#333;font-weight:600}.tab_box .tab_content .except_nums[data-v-7aac1034]{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;width:100%}.tab_box .tab_content .except_nums .except_box[data-v-7aac1034]{-ms-flex:1;flex:1}.tab_box .tab_content .except_nums .except_box .except_title[data-v-7aac1034]{color:#999;font-size:.8rem}.tab_box .tab_content .except_nums .except_box p[data-v-7aac1034]{line-height:2rem;color:#999;font-size:.8rem;font-weight:600}.advertbox[data-v-7aac1034]{padding:0 1rem .5rem}.power-box[data-v-7aac1034]{background:#fff}", "", {"version":3,"sources":["D:/zhitaoAPP/src/pages/svip/svip.vue"],"names":[],"mappings":"AACA,4BACE,8BAAgC,AAChC,cAAgB,CACjB,AACD,yBACE,mBAAoB,AACpB,UAAY,CACb,AACD,2BACE,oBAAqB,AACrB,eAAiB,CAClB,AACD,wCACE,gBAAiB,AACjB,sBAAwB,CACzB,AACD,uCACE,cAAe,AACf,eAAgB,AAChB,WAAY,AACZ,gBAAoB,AACpB,mBAAqB,CACtB,AACD,+CACE,iBAAkB,AAClB,gBAAiB,AACjB,WAAY,AACZ,eAAiB,CAClB,AACD,oDACE,oBAAqB,AACrB,aAAc,AACd,WAAY,AACR,OAAQ,AACZ,UAAY,CACb,AACD,gEACE,WAAY,AACR,MAAQ,CACb,AACD,8EACE,WAAY,AACZ,eAAiB,CAClB,AACD,kEACE,iBAAkB,AAClB,WAAY,AACZ,gBAAiB,AACjB,eAAiB,CAClB,AACD,4BACE,oBAAsB,CACvB,AACD,4BACE,eAAoB,CACrB","file":"svip.vue","sourcesContent":["\n.weui-cell[data-v-7aac1034] {\n  padding: 1.2rem 1rem !important;\n  font-size: 1rem;\n}\nsection[data-v-7aac1034] {\n  margin-bottom: 60px;\n  color: #333;\n}\n.head_btn[data-v-7aac1034] {\n  padding: 4rem 0 1rem;\n  background: #fff;\n}\n.tab_box .vux-tab-item[data-v-7aac1034] {\n  font-weight: 600;\n  background: transparent;\n}\n.tab_box .tab_content[data-v-7aac1034] {\n  display: block;\n  padding: 0 1rem;\n  color: #333;\n  background: #ffffff;\n  padding-bottom: 1rem;\n}\n.tab_box .tab_content .except[data-v-7aac1034] {\n  line-height: 4rem;\n  font-size: .8rem;\n  color: #333;\n  font-weight: 600;\n}\n.tab_box .tab_content .except_nums[data-v-7aac1034] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  width: 100%;\n}\n.tab_box .tab_content .except_nums .except_box[data-v-7aac1034] {\n  -ms-flex: 1;\n      flex: 1;\n}\n.tab_box .tab_content .except_nums .except_box .except_title[data-v-7aac1034] {\n  color: #999;\n  font-size: .8rem;\n}\n.tab_box .tab_content .except_nums .except_box p[data-v-7aac1034] {\n  line-height: 2rem;\n  color: #999;\n  font-size: .8rem;\n  font-weight: 600;\n}\n.advertbox[data-v-7aac1034] {\n  padding: 0 1rem .5rem;\n}\n.power-box[data-v-7aac1034] {\n  background: #ffffff;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(753);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(513)("af73490a", content, true);

/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(755);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(513)("d980dc22", content, true);

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(758);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(513)("01353220", content, true);

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(760);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(513)("afe83bf0", content, true);

/***/ }),

/***/ 808:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(765);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(513)("00bbd50a", content, true);

/***/ }),

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(768);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(513)("5a5b9c5a", content, true);

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(773);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(513)("2a338cb3", content, true);

/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(775);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(513)("7dee88da", content, true);

/***/ }),

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/banner1.f33ff3f.png";

/***/ }),

/***/ 845:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 848:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAABfCAMAAADh7XjeAAAAeFBMVEUAAAD32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb6qj6DAAAAKHRSTlMAoq6oKS+0JJyDlx9YNV4+uUiOiRRSfk1DGnljk3RoOnC+wmwPxgULJbP8mQAABF5JREFUaN7E1Y1ugjAQwHHQYlUoBKyCfLlkpn3/N9ylQ24X3FiF1nuBX/69FoJ3jAreMHceeB/NGQs8j4oZY75br1EEqF9VRoB6VjUTRuUeVcWFQb2q8e2Gahx4GSkyRD2pOsoykupBVayqQEXUhxpXOaCoAupclVmem9SHyt2r+lYOKE29Bu5GRWX5UAWmulV5eT7/kupMlXkCKFEN6lLVWZIkYyp5NoC6UZVI04Sm4lZdqTxJR3WyVUeqPDfNXKpce6FV3wOKW0UUVSlXXmjf95NUQS/w2ipvPj5HlZyvO1UmnUHnt7qeqvOu+wDVoE9Snaiiq+s/UhkMoiup/PMC6CM1RZSkrqvK5HC51N3zVDFJXUVV5QHQIbUf0PPfqffFC72cQAXUYqtL1bg7nUyqxQUGdJEq06I4WaUuV1VZAIqpiM6lLlDF4dh+o5iazn6Bl6lxfTy27Wupr6r3Zr9HFF/NDzV7+lYXqCo/hntIJVfJIvUlVRRh+CwVf+ZjagSDqahqW/NabwEdUgG1TDWqVnambraAwvli6uQDgamIkgNWtgsNH+jwag7WqdanG7WbzZacL/3XGNWgFaC3YaucbFVbLxRMRMlV+m+q7eHqdAMDqFFbo45X6edWywGdvlX70Dzc7RDFVERnU61NVuwApalmq5hKUPoF5t/oV+/lgp0qEATRVhHiEwMa1IcfBEXY/w5zJnKomfRMSPNJbeCeLquKUWhucvIB5afmvzhVfGgVzhvonFXV0Rr+sZEuYDSLY0C5v4C6T5WaG+xiQHlrrl0DoQKcCpnlNW6gvg41B/ihnwp/29mX/6BfUPgrGYhmlhKSaTMrChu0O0owWGru+qNQUPyoTX75QGTO1kjNrR8Fh3afar5bhG2p9v69aO0FFFVFa5wDITV3ObsD2sRX2wczSmf7QARCZrq6Kyjshb/Ib8dASM2ts8IOXSgoPnAYYH7qUtqWo3/XoWaScCqPUvOCUNC10Fzv7fm0XMrz2z72M+avJ2xLeXgqqJ4kQM0HBF+l5tSNeIp8N5Tl1xGlNQl1fLqhur+KetL/1wDqVVJo+BPUUVXjhbbdlCRVZEJjdimram6uUpSSWEkMqD5J6kNj5tfRGkyRQKvmVEAxSYDuTChO3dTUQ4EB5Umy5FeLUpRQL606oKDyU49r6qf6ziapA4pn97KinvqPJHGo8hf5bVf/RY1K6q38G9TXL21KY4vSMaUB+ucsKvcXp4YeDdK8A6rtA1bpVtEwxbDXBsX+ojXbhIYq5vEF1OZvGNBwzc2iLvQktVCs/hltGZQmR1Htp25rGkW59TMDf/VPTZjSSNrGlqIyqKJmHo2m2kd8DXtfpUF+o4pG1MHRGfPUfUmjyvsF9LymsXVwQFt/rxsaX8kCUK0zbWnQllEVgcqh7wlNpL3l0t3X9y33aDrtFZVDD2jLJLq9metwUVC0ZSol+YsJaJbSHyh46NAsoD9SfXs/fVwuq1N4m9jbT7zZIbUZ/G5uAAAAAElFTkSuQmCC"

/***/ }),

/***/ 850:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxQUNENDAyMjNERkExMUU4QThGMzk0OUZDMkY3NEZBOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxQUNENDAyMzNERkExMUU4QThGMzk0OUZDMkY3NEZBOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFBQ0Q0MDIwM0RGQTExRThBOEYzOTQ5RkMyRjc0RkE4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFBQ0Q0MDIxM0RGQTExRThBOEYzOTQ5RkMyRjc0RkE4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ti8yiAAAAXJJREFUeNpiNKz7zAAF3UDsAMT/GGgDGIH4OxB7n2vk+cKCJGELxCYMtAdsIIIJSeAFHSz9AgtRFiySP4H4F5UtBHmQG9mjTFgUdQCxNBALATEfEPOTg4HxCNMLMssJajYnzBJsPn4PxJ+R+P/xeQVoAT45kN7PRvVfniAlMJwWw8Q2ArE5EP/FZzHQUHzB+xVouQqQ/oPLEmQAy066QCxOpTj+TYzF7FDaBMr+R0G+hekVJ8ZiWIJ7R4zp+OIYCbASY/FPKL0K6ut/ZMYxuKQCOkwHSL8iJY6toFmBGuAXPot/oiUEVSDmxZYiSSg0YHqZkaLmA8xiAagiXqicBFTsA7RQpyiOgVEBKog0kfjKQOotI7B2OgnNOuxIrvyJ7EoKwT+oWexIIfsQ5GMx5KIMGgosNKwoQA6QAPnwIwP9wQcmhgECoxaPWjxq8ajFFFnMMwD2soEsfj0AFvOAaqFUIF4IbcD/p7GFjNDWSDtAgAEA9m1PDmx3RlkAAAAASUVORK5CYII="

/***/ }),

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/svip_icon.f9eb3bf.png";

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAHPCAMAAAA726/2AAAA2FBMVEUAAADsx4DsxoDrxX732pXsxoDxz4n01I/215L425X22JL215L32ZT004363pr32JP74Jv22JP215L22JL11pHwzYf22JL74Jz01Y/635rz0o332pXxz4r63pn84p774Zz635rxzon74Jvy0Yv84p3xzojwzYfxz4n84p3wzYf74Zz01ZD53Zj32pX53pnvy4b01ZDwzofx0InnvHXy0Yv64Jv53pn22JPuyYP32ZT11pHz04374Zzov3fz0o3425b43Jf115LpwXnsx4H8453qw3vrxX7sxX94EE4eAAAAL3RSTlMACQQSQg/frB3bVF/vgnOcgjQovjwWz58vrY1KeGXn3sO4jWy4m+728cX59vfo8PJmqYIAAB/qSURBVHja7JptatxAEAX3RsqGfHScJY7ZH7n/jUIgNsb2jnpmtOi9VrWuUBSlx5y+jt23gfvduMfW/ei477339PYe2vep+3427teN+5K/z9137r9ls4vOu25wf57vzrjnedfB/Wlz3Ftngvt5N9zjmv9unhXuXbzfG/cHNdzRe17vp4tIzaB3bb3vh3ve72K4UzO+uO9ZM9lrAG+F+wFrRo73xaDer+u4UzPoXR33ebtfn3G30Du4N696zaTtnsD9YoA70/uR9b6l3dG7v96L4571e5N3K9wfwb1OzdxN73Fdx13mZ5WaQe+zdhfDnZrxrRn96b0JvBXuB5zeeUgwZPc27kI1g9619S4/vf8DXgt3asYX97P6NtOe3q1wP2DNyPGuvs38B76FOzWD3vVxT9u9zfvpYqN3cC80vUfv5e2+ijsPCZje1fW+ld3Rew29F8c9o/dV4K1w5yFBoZrp5z1v9ybuUj+r1Ax6n7a7Fu7UjG/NaL96X53erXA/4PTOQ4KXy9u9hbtYzRxV79TM6qXtLoY7NUPNDOCet3vUwP2ANSPHu/I2k7A7NYPeXXBP210Ld2pG5GfVrGa2sTsPCZjeHfS+hd3Rex29F8c90nYPcD8A7mY1M6D3ebvL/axSM+h91u5iuKN335rRnd5f2T1q4H7A6Z2HBBvanZqR0Ts1s3p5u2vhTs1QMwO4u9pdU+/UjLjep+2uWDPoXVvvqtvMa7uHFu7UjIjevWpmA7vzkIDp3UXvs3ZH77X0Xhz3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"

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAFCAMAAADCIhozAAAARVBMVEX635vpwnv01ZDqwnz/6KP/6KT/6KTrw33+56L95J/74Zz325b01I/y0Yvwzojvy4XtyYPsxoD32ZP635r53Zj11pHsx4H/rR9PAAAAB3RSTlP+vR7697u6bXQ84wAAAElJREFUGNOl0NsRgCAQQ9FlAcW3LmD/pXp1rADOfzKZiA4hYfrMkJxLWWBmta7YsOPAifvC+PJOJSagpQBOwp9vLPD9CzT2ffAAkV4PMLtQ/EIAAAAASUVORK5CYII="

/***/ }),

/***/ 864:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAFCAMAAADCIhozAAAARVBMVEXpwXv/6KPpwnz/6KT/56P/6KTpwXvqw3z95KDxzon/56L84Z3115Lz0ozvy4XtyYPsxoH635v53pn43Jf01ZDrxX732ZR211WjAAAAB3RSTlO7+ve/ux4em18KsQAAAEdJREFUGNOl0IcRgDAMQ1EnlICpbtl/VJQV8Bvgn060Um0QES88cMM+XODuJ/RuZqoqIgdsAzOXeSFq8DMAE9VcoKQXpD/4AEQtECD8k8XIAAAAAElFTkSuQmCC"

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWkAAAC0CAMAAABhci05AAAB6VBMVEWqhiurhivDqWcAAACshyvCoU3DoU2thyvDnT6tkj2nhiuoiS61nFKxlkWnii+mhiuliC3CpFrBpFmmhSukhSumhyy5lDCohSuujjC3lzu9p2m8qW/Bq3HAqWy+n0u4lDO/qW6qiy6wiiy/mz63kzG/qm+oiS2+qW62ljmjhCuyji7CrHK0lTm8p2rhojL/8tfgoC3/9NvdnzH/9t//+OLXmy+3iyyviCvPli7LlC7gpDjaqE7VqlrLqmTTql7iozTHqmbfpkHbp0jjpjr/8dTTmC/Iki7CkS7gnyzanTC7iyzz0ZH+79DgpT3Xpkm/ji3nsU+ziCzkqUDYqVPEkC3ep0bOqmL97MnRqmDEqWfgnijWqlbptlv97czlq0Psvmr22qPos1XcpUPHo03SpUzOpE375r733KnmrUf65Ln86cXvx3z54bTsv23uw3bquWHwyoP1153twXHxzYm0iy3rvGa8jy354rb43qz437Dmr0vfnCTqu2T005XLo03yzo376MH01JnwyID22qaqhivemiDTrmXHp1/OrWvHrXH/++fRp1PfpTvLrXDZojrImDHMmTDDrHHUnzbJrGq5kS7ElzDAljDFq2zUp0/PokXHoEbQnDLYq1vRqVnGpFPMqFvbpD/Lnj3LpVRDXCJZAAAALnRSTlPu+u4A7u75+f4H0k8iED29G/3r4aht7/V6qnhU59jVwK4u+O/Vw5eTjojk9ls5ooua3AAAIL5JREFUeNrs2EtPGlEYxvETWo2jjAppjSAgWBGD4MLEphG0QGIbF7IhM4G44/INmi5ZgoRLAfHCxRuftM87Z4ZL08UM6/M/wO6w+OXNzJxhH4wk2R7dcYf8Qa/H47GJFstpc1I+n//QHYnaZWniy/4DfdTpdB6pnMhSVVpVh8NB1C5Qr89QMwN6zhnSvITIVNwYH0TUL8tLsHYdwlr6R9q+4/YHPZ4jcq7VaqR8RyVEpgPyOZyr1Re0vLy05Nt1ba+BekZaJmgvlImZutM7F5kNynoOQBcKhcHKyhcfqAPyVFqK7oSCgDacm03BvEAqeqXG4wKXBvXuYSQgTaTtgPYAumZAN2+Rqla0JTLZK5yzGvS4XC4PBoMVtAVquy4ta9DGQDfJmUPfaiurZkWme0b1er1UgvQ7oO8fQL22KZO0RNdoA7pJETMN9IT4QmSuZx26WCr1++/oz/0DqLXbIpPkKL8Zzg10RQW2MLZQnNKln4rFoi4N6q191/a6LDG6dnhtgJ4OdIXH/0BkrTqgIZ3u97vd7rANaVAfRDZlZo+6gzY8Pc9Ac2qhbKmbG3wQQT+l0+lWC9BcuofrRyDAohjpR2Q8cVR48REW9otMldF+eDE4z0v39g/W1hndDnP8QMihyfpiNBrFMyLLxRCkU/m3Ny5N1L97YdfnCHOHgrZcYsYZwXm6NYMlslAqpUHPSuNJb5uF/F5DWoXzFFr4LqZM0HlAt05AbUjvfzpgfox0LpHQzpKVKfRkZ0xJiUwXSymKkk8mG4Am6SGX7oU3NpjPi/eqgIb0vDP2KSKL5fFNJq8bZ2fHJydXp8NvXPrr3uoq8zrprSqgs1l6stOhuXJSSYqsB2hDuq1L/wqvMqfTQdIqpHVnglby+iaR1bgzQV+dXmKmf/wk6Y9hhpFGBE0nFd1ZIeMGOhMt0jFJA/qybUjvQdqBmcarPhzYcVAxoK+nxt9Ff9mxn9WEgSAM4Jf+eZtl8GCVHpZ2oAasNiyFgqRRq9aFkKRK6UFoC3pMH8CTBZ+0m01Cm2JC1DQ1sN/FyxyGH18mauYEYBF0TProp7T4lXMeQkthorJrKoF0rVa/2iDteRH0hTw1KnlLr1br9adw9pYRtKi0KvQ+zuHxkNKNm5i0J6EDaQWdn3RdSlel9PFJKL2Ulb5Ulc6DOk166Uu3pfSHkt7POSZ923ipPp+dhtJe+P+1kH4Q0up1uCd1RumWkv7LTg+/K91SX/Fy6nQtvNOR9GDw5o2UdJ6dTpYeKemCOi2kh20lnVunlXRCyt1p8EMOJCCSYaK4TgvoHDt9MM6Fb1spThpAA/mRWBXYPruuIiNXgtTHDzRNjJSr06B1OoCINHF5ALI1NOwoLVYgFAl0OhokTlBEovkTULZOU6b3dc6Q/Pu1BoKMz2YcafImFLmucwSAUt1pAIKm7k4ta+r2ubCONwUg6DndLkkvrVQdkLv0XduZdl3dRLJxGJlu2I5jG7rJkJap04DctZqT8bj3Ou/2WfyxledQlIiZpsmyRoz6BhsuSPpVAQ1w5u+y6E2alsspaL8nBDQ3nHc5MbcNvxlQmk4TZjwtHu/ur7+ot5YeVdEg+o9UoqvZsJCFCSyIGxIDAhuQhzxjxAfBR+6mf/WcKlG01da+Mws8k0nfFqXhcL76qk6VhlPIkT291SOCJiRv67+Fvb7X5GknA55HsdkitxxNMTTHzePp/QlIFgfL0wzD2K3KSJ8iyHyGpqExcZ2lfrc/GAy6WriHrGdjEbtNnY2IUxWr+ZD8FohFJLgbxZ4WC34gHj2+mGmcuH4Xl9Lv+lZg875xK/qxfrB2El2tYIRypoqj0Udomu5jaB8KZfDFt6c5xT7J9GkHIYTvrDOltequfo0izbcz8RvTveGYlP6Yab6UKAXRDMmT5+q3XW806awjawdZEPAwDvYQZ/0ETeM+RASPUIJEgG5XUvzVPoAcewDFTTtIPU2RJOV3kCS/SLC2b9Y/1oceYyOjGA7cX8o0zutL6eOpu/l22rnhEdejV57UF4C+0NVWuU5Mf46mk7D7NRC6AN2h4Vl5Zk+HvBfO5iXujPT+O7DiAn18YRo/x/YiyKs8MLGR3afL+A1MV56Aj+JChK7kWJHamYyad1Acz1JN4GvF/0ZYxcPJZ2j6FKcjV+HbY6aFrrEL08TklYunUBi/JhqAMBWvzNbnMMrLIyqLpeOs+OQUtO8e+ljPve75UgRlCckS0w3RiOMrpV8zLX2SpgFsMtvSkTh4MPBD2RVyZiNTm25lr4v4/WvQ2Xz3YItnpnpDNds7Bp4lXq/m9pgjyIXD0WgCdNTANbCsGH3B35tjen3EmGwmFMdxqf3TZSpOCtFvNvVxnKXNmia10fV7RhdyZq4pBErIQgJ9Nl6bpSP8BdO8/I1VAqYndXU021ahAq1/Ia6symChjsUecLYDNpvNnz+b4WLvg0NGv2+4gSpO6HWAD2/lpcFaoCemFXk8nvypD1M4aremKYDq0X6pXZHEsj4mW1U1ZedvNM2L2z8GrOk6SEfproswNKDnSJn71X7ZY4DvYSx7SvfMtLSUzZlIcYaAZ7YOXI14rpk+HrAR0OEarY7TAO35diQXKBhw/WdB8Y4W24t8eWFaoPD7ZpTmdBc8dUZ1tog8+KjR8qg3My/lIhDg2mimArOZne094/LApd0xR9F9xtqey47Ub5gucNTGAdumDyOlabemCTCYzENZ4DbAUM30QFqWUWxS2tWv723wPhAjEEVtyj1qpu3A0iDoc4ajOBYn3COyt+xtdMjzPEny/cpXmmWBqjWV8wuqNESgvzp6LKu8xgGuDVel7dV0D2BZm6iDlfONQH1QVGLWTDOkd8Fv9o+Hc3zgOI2QT4HoEp+QcKPeFjmwZJW18hyCj9y9e4GkGP7OuWDnGzjYHDU03yHQW1ZITfnBtlXTHB03wEiEz7Rf7XAvWP51YVBlDdOK5qyO1mscj65bAGnCPDYZHETt07m7l9Xv0ls6SErkAkoW+O/e5zD9C/DLs6OC4hen2rytmub0ivf1Cck6weqV6OrvmJa0ZXow4635BuYZgPrk2v3hXPgIqhGezhEEZWQ8G8NUKjS8fkLD5aOI1X96tK4YUce0VNNkqxPEk09tz3PYehKphTetc/SoF/sMvsVrjBk453efjqhG4n7RI2UPsR0HyJFJsIz7bJHx+ijS73RBTLdR05zm2jFUuNXVcW/zZyKut4F8DHeaomhemix0M1/WmobCTWQH6gusqXNDy4SSrzvDM+DEvUkfnDSJAhmSxkv/EdjCj2ZLNV3fvGy5xzTP9PFo82eEELKN8hT7U4g0TFUXVV0jSgaShSB6jXlswxeiUuKWaQBrJpNDQ7gwjYrdKuX96n9h+qtbzFuqaTAxha3uGAgNIRt4J5mrcVDt0fTQp8NZU42j3AhdbHcvQN2ShTp81NrGC8hAuMpjcF69K9J9AaeUqBa+41FF9AyDL8mdt1bTQ5vcXiS/Agy8Ktqi4TL5s+lM7QV2NOq+TK+YRlKl+T9CA3zHcytzjc3wYVdbXM9PiUYta6g6lS2//3VbEj1PNn6olhTLbKWmiQpyKaXTnm74y6McbNfiBAnfeDpbU8ekYfo3CTUnAY+ZnsBoorzdaCruUE5K76LpW+fkO+r3PNZ4d1fGrdR0j4iEodO/FCZabUx3LuUG2nq/9vJQ88CDm9L5Hze/0QikfVEgxWIbK5IMibaiGCdoNzAU1EE3lYz2DcYJOOCgA9NKTbOTGZfa4IuI5C4H9VsSihq9CWHU+8608AYQCAwLxvTjco1NZj0qEazZHsF7I8rzipBBbbEGq9WSzBjGeasobrACQmC5DN2SjJR21ojoytk5KmThTCIlGEUZUEtkRKZvo+l3iD4HBGZPRez5ocuTlaHGp5McOZ6C+qSSZbn6DjldkaXdEO2S0VHdQQaSeXt9D0TNWWT5pGfm6VyvHLZruuSb6PHaYrpkyQNBg06f3zTSEi7AHQ2+xXIfqSIq9XiBpD6OtwtzXgNZfhZUltcwbThuFZl4RwNzsd3iM6hKzZgebku9PEwr0aiHrwhsONQhBHlzEiMjbph+08t7m2neFxeH8rgqrAq2EFens9lsio34arLEtvV5kjLTdTMrTA8LermBDbOUPoqKaUqZZUv9aR4ZWiSWp9Gu04SQnRWteyg8vsVpSXrVDn+PaV4uIooYGKXBVh2fulwiuQLjGZrn223M0PVFVB0d5YrpPZwXPa5Bb9TtGZX9+LBIG0NbNc3zSSqKRNfzFXbwTkx1vVwdwXMC2VdZnuJ7brrfp4+xTy2EVOkl042sx2q82GIQsDawR6hq7BgBA0M8B0YQJLIVNnY1cqNjmR+CQw16YxCZOMV5wldsc89FHKJMCWRkuBRCSDrIHXzZvmMaXt4+WOh6/Bh6nOXuTnmXaQQujhhjasDXAcXOEjm1yHJ1axShc+1IK5R6uA0KwE1zU6WZBkS7tvfGO8T1IQ1xTxIbvgPByW2xxx4fR49rL2/4xL4bUp+QChLhHaY5gJz/VZerarTHNTyMSMCT+CVBACX+GI1FtX3eg64R45tZnrpL7I08EecedNWOyeHTzeqi6ZWMlbpWH2OmkoPyrqYBkUcPzjyfDBHlbrJEEH4qxrnTLnllpuJsbZ/3wO0S1eO1biJeO0hDIF45MrNDaVkY0YtkGs46eXlH+RA8QxTkaai9GacZ10xzm8BFQ/eXTPOTkZaVjvyl7TNMl+HxIXVcUCg4oSXnh6QsdgoGEao85W40i3q3LH7ACuXcC6Z7AD3Y+if/65xgz2s7lSEATPQd7qwnFP9aOp9hd29/nK6bicj49CzAfp7k8v641Mhad1yroMqGmb43He48ih+zPP4ztxg1TGc0/9cUoy9z94bpgeRySdprvabrhVx/wUTVs+ro+QYVKqhiPIdHWWq87Ii/0PQ9OldMI3T9Va9FKepJ6/ZrulEcz2WkjnLWsQGlvmPDMxrf43jPNNt4KAKvMR0zQVfRo7Hs/N1TOLudzwuoGSrD/MEHzDA11cRmQzN6e++UWwu1iN+w4Rk13eTlHe+XM9E5s7fzrMF8q8NgecC04i9RJD1FWaZodRrSFdP6+HM03QO4fU02fS1QQVJIO7fu/Atw9EizNbncd71x6po12FeByTOnDdO1yxWWh8x8CnhMnCd1hc/TNEWOU1otryguXxqqPoq0Jkq/33OBRfWNaeoAJNQJbuCt0CimenwyumZ6IPhpZtMsw9MhB5gmFV2ocGH6UzSN6pju1jxZZ8Klda2F7gq5RxM8XwKNRO9YmRQ8vo878HJRrqE5GO8l33Ai3jDtVDQNjE36IThP4i/E9IXP0nSPwNNxctEMvnA3NdzLl3yaeLFeAs1x6kZyedzcOn8zKbAcOvs1JJrescXNPdNDuAE/YMpMDz5L0xQ4kBXA0ytXNHZ7ETSaAvtDIC/PNSK6jNE8i14hi2GEYn6cR2ua7s5sjmr7ZuidO4mKV+n//NlcMc3DSBEsq8UzkPcfVa72aZo+GZbwTo+e1gwoQnz0tQBzXl3NMC1U2O7rH8FzzJ0J4YZpUQ34220wq5r/BPyuYcTrhmke13WxYVrPQIfccEc74udougfQxNg8535A0+Tqsv2h24tq2Xh529l4PHuJxt8TOw3T/5J3Nb1pA1HwHxEscudQDpGcQ8QFCeEaLiF8GRsLQSjI2FEv/dWdebvYuNjeuFUl3M6lrYrVdrqs386+mTdJpnOu15sWr7GbY1q/E4zoNauebrel4nATyhzpbaK+4woh3b2tUy2PfXoovVYmbDbcYaA50QzXvWZavjIWkGvxmq5umbYeCfNdWmPWdLtFufKYxHtel6QU4EfK/iOq0eso3y02NUO1D6CES9baQM99+sXD0TNj+aptsYjpjpHojtWkNc2bUsgcclbJVDRt+OFf/vddciDtnLkvaCHdqjsZ4+5hPo1qObVBa5o79NYPlvoCQKsWbCAXExvtrSnTtX0uPx6fl3QjP2nvlnSJQbli11HPyLR5TVvNWdPap/0ufenXO8f8I9SHZN6Na5dcfqWZQYX+Nd4ctBsZf5YcjKbsNwLfvTKmP4/mrGn2Er14qZ8qtTLPxv6RJkBVlfy+8/Ohx9wIMi2QbmHPZ8NRvIftoIJpXjq8GnAeOL2GrOmLC7un+vIufTVS25Ho4dMfMz3Ya49t5j9AFAJv0aUzqYRp1tO7wK5GHOAl3pB6Wuo7N4KLJSVSG2sPDBnT3jnpVJdNsSbwSOaxFbQvlhp4H6M95aFipkVhWpjOiLBsNOWMqKVKRkrIaU3HqCyYtwOk1rZEshB+gO28Z8r8RnzgPp0ynRrxoYGPEvrlSplmF8QXCAQl4H+W0j06jdA9yLS++beEuocBffN4FYo4lGrKLozcnRumO59g2qGzk7VH3vv4HYkGOJn3qpj2D8Pvw3YZnviqFh9pM9a07NMJbWsiPDvnaUixMydVUkr1Tu9nuY/N9Yub4Dhz2MZ/uXlRmieilBZBNdPRiGu6DFjTjdLydI07leba190HG71b3yjBZeBXfeImkW2fxjzh6RcWGvROdjVOsZ24L6wVb75LLQPT0PLGCS9WKrBJ5MqiEWuaANWQlpaz2RKi8haN3qA2y3C43Jij0xadtIw4kdgepn757prdtdWYKNmjLtOMSKFvuvrg/46mzabU0zqxZ+XH0CEjb3TQ7bFFgE/jGAxUQBLedGjPwodNIM8lTFft04KeGQ+NOSO2Wswmge7hqxQq+GeLuu4OlEERE+QGTsp0jNu/z8RACtdmpv99LY/2wDfpW/IXSBIlsAPmFVCaILboCN8y+Uptozyue2KVqMCWD6lo0lKm/xfdQ+cCbeDlMSIK7dwb8SO2zYgYcVjF9H+l5b14dJsAMJtVYkepIusYn+2Whs/Dt7aPPUQ0/pU13WnSmtaH7Z3Tc7SB8rkU+L18lAw6bozAHa997IPZv/JGbJiWN1FanmVCgX/bDPoSN9JuW5NpXu/wa1GBGcS8pml5zzxpfwKa6hpKNdr135OJeKNrMS238qEfVoB9x7MmaXnQPZbPpjVdKY1WgFLK0h/1uzWZth51v8exBPTHuV7UPC2vKrTURDSpLnuy8+OHMN2qz/TZRr9DaToOu0omx2TcLC0vMq7ph2pUrekfD+8L2T1atZneHmC3rQDcZuOm9OXJPk2huFfex+KomqMMNGSU1ix8bh7UfyPqm4BjRYrZVtp6943pNVXWtGg6Q3ttIaRkpg+jlGgHGuDyHUVC4fMIrwmVqcrAdPfmdmsZ2GG1VBhMX50m9U9Ty4uD+FQIG4jZrFechyTF2F7k01MxoJselFm5fpU3q8YrzbdNqae1lrdle2gBVhBBvEUU7Mh02ZXsbGr7HpQS6iW3gGrVN57G2cP07Q+7EPaL0X2vaaY09A8Qn18KJTwk6SHBV1o6S/A8XwYQNyaHAhVwotJzzTcBU+/rcPhnCtM+uXefi+THFANCdf9l69OgXIFnZnZjmhA+bxCoS5ju8HTz0pLIsd3Vmq5xaH1sxD4NFLkbAAZwbFUyVXFppzeQ817d1qinnszz5Nq0TmRM04u87rdbb66+pq8L61GsYvfvRwSxeajoXh27SaKrmJbpDbRbYMICU2jB9RXAezHT2T4NmzrD/rtIOeMh6veYHgQuS5x2t3FrmjNeJhsVsl6IXk7XGzAeiROwtIvzCsUxW1+P4cUjbUki8PErh8poO4VVE50HMSA93XsWwk1C8pAT/NC7rooOK83lvmLXGZzF7Xz5TQYkhR4qDdlEKqcWpsN4rhLDzoz7R9drxGbMzmNNWAwzekO/RAOyEK6ZVmEfjJA9k8tOuknM0/qVUtvHNHXT8UOof2GKjbz1wTAfss279mwWgIATcvBGQ0cEC526VFtIwU9wPhrefb4HkX3Xu/SfuUmskjqy1vU5fIna08pv6zgM2XXdk99ML2J2gc/paDp7iigIAiDRrDLksSza1IPRY+QhdukVlsYsJNWM81I1uD01IN9Dj635xvFjyJzaJHwRWo9p9LmE2ES+/Y4iTDN98lZehDCqdICDxZ88IzfQ97aM+2rp/On2bXwbQwmdLASZzzKjz1+tjxxZd8kdtD+JKFmhwpO37/2vaVXZUUQdrRZcVgNHrD9ZyDyTzzcBbmd09BhignCqiaYMuk+ZRlgnN5E4hBkc7Xi3RPPXJHrn3CTFYtZhYGPQ35YNOxojI3RgnhR4d55Zo7/jXenePIxWiT3e0St3PUFHkgpHX76M7Kyzxt6+8VwTjuUaN8ebg7FaEaq+rzy4FITkebmjIJFFtNkLl+fNi8euFmR85v3OKFJtm30GLx6RbBl/LCGQ8TVzZRF4ZTJrf9ie5Jj+iur1TblFe1a2/lkK0PRs+5vjBGzz35+fnBqT6JRpauPZgJd9EGFdu+s03NEA5eEXJUBNO27dawYkaQDPnNDr2wgWnLOhlLyl/k9mrSdb5GF+b49OuTWNrbGrHNDnNLZbnpUZLAxzSlZqAHE76+Jxww9qncWDFbD5nGc7BHDGnJVDyqUn3QgZteEyKqR7vxmQXQ5lXi1CO5hmuwZhEeobzTMJZjW01vEV0+4bLfgSmRmOEf6mQmhzMt9ujNcjDInZZK3+OswSAHTteJ5rI2Re9IbqnbWzmoFP/mTvWnbThoLoH6WgtOssSisqqBSxqWSFxmxKzCMYowrjYIHJth/dc+aOH3VswGqQ7oKp1FbBD3IYz4t7z2F2GFjKAamKAEB5MyOLh2hq5c55y8DRM7yjTiXSjiMbzlGFeLp7Nmerwtl77v3kjK2w5GHyoXiLoecukRjkZ3qihC5+kUMW/HUDm417AaC2UaNIhC+2vgghCzGNpqesPp6wPjZvHlCXkdaEz4Zye1CxrNITgdij9GotpR70OgRVDWV0Mg0QflI/b6tpw99QzHW4huytlfzT2hb/opDeP30EwWBaMz1fS1QHnZe7CqRxFYYQIZAMvUkxxvNAfDcePivS5Pc4vGZiIhKaZnEwIpOZxO4KFsIGxvJftKWs9GkHO3tWG5FOLRL93ZoyID5Qox5AH0W61U3nJNMeASvChVUI7Q0mEl057C4SmrYM6c5kvIIYScor0iku3slmR+cbWTfh1BRztU4ngEgvdlJz6SOr/0CdeeauhApeWSkU6aGUf7dAOgbSeE1fV9U/f6l8XwZsCqz03fmgq0iPpqIEpQM8AO3LQlTJqrux8EfCGq+DyMvFjpeIwpl12hfq05qP6EH0bWR+L8RgbnGfqycr0ss+nJQ8EZC2mEeFiCi5kWxZfkISWnwW6mfQod1iQwfvBaT9kEFCfJXzN38x4B2QVRHp0ZpiO8WPTk5sKhCnmeOk8Z72+rTGaTbUCjXCBkVdoKIfMW6UkR5+JNIAcB8/kqStiDSHJk+j3yRXUzzZ9WxWusfWUX4P9VLRTjQdO5FhrRkIqzehLkmdnYOzvKthaGucRi5Tvby2SfUYO7MInlNlRAsGmiL9EE/w6/BB7a9326diPWWOZR1iSGiNCkufKS+S/Yj8C3FaJ4Sd/h6hY9Ci8Vyz0dnMAvZcXqwLc1Izj0GtSW5oi+a2nbWH7pLD+F1GnmgXQjeWef7g5g1DuUM9ktnQaEJRNbXc+uKzEccW5wTjAbbQY4WC8nukqsSxMHkPUT4eSN3WLT4TN0yraFUTF+U9V+1OqIYD65zzRbmoNz5bWk/DCPUc43fAvHld9qgEa+YH5WG+cM4ECft1NNroRyqeUu1k2NwHBwDmxlqNK9IyXRqvPW89piwzn6kiLaIhPb3HydMVl+osx0DbE8gJ9hFT6pfY7MO2sUfUUI1a+NVNdj7maJFpU6r9H+o2u8TloSIFVJN4TI8C75xOmVUL7bEQ8q2AYa9Wb5YnK/cp8SaBaQylh3DmAfQ642K3GWa1gQDduuTc489/IM3EvwBBFbhcR1RadyRu1EtWBs9BNjeqMokhGD1Fo4dR6TD8F/d6hJFP702J0FJB3S5HizBK6YgF+ND8E3Zg0MuAbg71xZHOmYq5eZC4HNP8/8wjeajMQmtdWjBMBVvxp3QvmKFCrjzX4dnKTfFTTbdJRjUmL8m7kqva6dPlRQhnH3nmReuv0HBZxEnLLmqrT2sio8GbTgCQH3n6M9Ffv+ZeR5uLFFkns5fTlr0ri3365urTzXz6ajDLffpqAvS3T1+I9Ncr0hcz+vQV6SZ2eZ/+fkX6PX36Lzt2r5owFAVw/HYTLTr4UV0qxVC0lA5CrOniZIIdKkKeQOgbFMdOGUsSgi0kLsmb9pybk8SGDiU33c4/a+7y43DyYVvbxRtL/1NzllZKfaaj6P01DKX0nqXrqHjJS6VhT1+IXPqFpWuc6ULaKqQbURSFUnovoVlatfKHy2/ScRx/MHRtn4hG9pK3Q+lJIR3HLF0PdCFtWXKkz6VdCKURevXA1TLStDx2j46UbkRJgtKhy9A1OEvobKTt9Asxk24kSRIEruyJpVUHmkaalsf2ebED6atMOoALoVe8opWgZQW0DdAo7UjpiZSGNq47z49wVcPVQa94tr3FkUZp0RXXIO35p9MJreecojJEE00jvcilNe3r0/N8P6VOrTdcxXSMVgdCS2l8IHabYqwNkBqnWtcDup9TaE0/PBAat7R8IDY7YjQGaZrqtc6pIUMlaJDGke70xHSkZdT+Em6jI1yllpiRQlsSmka6dyuGUxhqpEZruI1OcFUzEBqdEZqkRWc2FPf90d0BqMm6fIyvv18UPApL0E6312+JdmuqHQ/S2jQ9g6ueKbPJ+Qzaac5abXF5MxwPjmBtWUD9I8PkvtutYxSJQSiM4y9kGjVGwQTTZgshc4DkCAvTDIE9So6wR5gD75c3ui7bjdP6x05sfjwevtZXZM7QO6AbMuPckbYqSKa+3z9RfFIrCMrs/HeiIU0yKKtJ6H7E9+MBa8auFZeV80QD2sth7LWgVlhQXw/cRGzuVk/JScjRmZe0A7QVLbUn9WSuH8exxuB9q5WVmXmgkTPLCQ1pZNVyUnPrY02d72qvt6M00B7QyraIpcWspkFecHfEdrTWypCZOULLYVGz+JXmXc3Uub1W2BaZEcnnjo7SHKiDkY4uzVYrLys3npw0AdDQzdLIzmpcBiPJfz/baqXKyIN5WEYF6P/SQidrR943teK8J4rOs9UiS2fqrldTYOraW7kTOkyq7wCd+gF+kDGYbwpS6QAAAABJRU5ErkJggg=="

/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/vip_icon.cdbfccb.png";

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAgVBMVEUAAAD32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb32Zb03fjVAAAAK3RSTlMAxENdKyPKYzi5eq09HqhIvoBsVKKPhbNxWDOdikwZlC92Z8+ZJ1DTCNcSDV61pAAAAZRJREFUOMt1k1m2gjAQRINhHkQRRFF5KoPI/hf4uhNIk4D9fU/dooxMO+d6zsug3BeXNGE/buBR41rWISijfX5rw3jYorjVAKWwv+Ie+isoiT6fxnWX1PkY8lGndq5OtYiFr8tbq9h/vzMVRBR2yd6es8hCCrHDUglhmeddazVD810pkcIwfn3MHxyREqh9LouFkjr1saQ8ojRllgnqIZceXCyGlFIKagp7pDtfhAFlbqFRuxi/ovysiyEmiwEW+zZjnVGsLUg5UX41MG4WK/RigFXPkd2XSqDU/EIpKbtmESmN+SdlBVjCLE1ZGMpYhHUOc4kipVbMRsyid9Eu5yclUAkLkDLm92gLQQGW60qg1sqkZseNYqR8CmUyshNQxhZ8Usazsh6YYxQjpaIQY7eNYn2aqmJA4f/rpCkXxZQSw9hwo3exnl+G4aXTu9iYHykME3dU85OSikGYvLpQSkmRkig4W1A/leqeVKynH2mm6LoXhG1vod3It+anXlSQm+8Co9Y3dOlSSZ+4JhO7AsoGRk/6B4sIVo4UvIzyAAAAAElFTkSuQmCC"

/***/ }),

/***/ 911:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "weui-grid",
    class: {
      'vux-grid-item-no-border': (_vm.isLast && !_vm.$parent.showLrBorders) || (!_vm.isLast && !_vm.$parent.showVerticalDividers),
    },
    style: (_vm.style),
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.onClick
    }
  }, [(_vm.hasIconSlot || _vm.icon) ? _c('div', {
    staticClass: "weui-grid__icon"
  }, [_vm._t("icon", [_c('img', {
    attrs: {
      "src": _vm.icon,
      "alt": ""
    }
  })])], 2) : _vm._e(), _vm._v(" "), (_vm.hasLabelSlot || _vm.label) ? _c('p', {
    staticClass: "weui-grid__label"
  }, [_vm._t("label", [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.label)
    }
  })])], 2) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "head_btn"
  }, [_c('router-link', {
    attrs: {
      "to": "/buysvip"
    }
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(690),
      "alt": ""
    }
  })])], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('router-link', {
    staticClass: "bottom-btn",
    attrs: {
      "to": "/buysvip"
    }
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(694),
      "alt": ""
    }
  })])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "section"
  }, [_c('li', [_c('div', {
    staticClass: "title"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(691),
      "alt": ""
    }
  }), _vm._v("专享高额返佣")]), _vm._v(" "), _c('div', {
    staticClass: "desc-box"
  }, [_c('div', {
    staticClass: "desc desc-l"
  }, [_c('div', {
    staticClass: "desc-title"
  }, [_c('span', [_vm._v("省20")]), _vm._v("元\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "desc-info"
  }, [_vm._v("\n                        假设普通vip购买了商品A省了20元\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "desc desc-r"
  }, [_c('div', {
    staticClass: "desc-title"
  }, [_c('span', [_vm._v("省30")]), _vm._v("元")]), _vm._v(" "), _c('div', {
    staticClass: "desc-info"
  }, [_vm._v("如果你是 SVIP ，你同样购买商品A则可省30元")])])])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "title"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(692),
      "alt": ""
    }
  }), _vm._v("两级推荐奖励")]), _vm._v(" "), _c('div', {
    staticClass: "desc-box"
  }, [_c('div', {
    staticClass: "desc desc-l"
  }, [_c('div', {
    staticClass: "desc-title"
  }, [_c('span', [_vm._v("赚100")]), _vm._v("元\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "desc-info"
  }, [_vm._v("\n                        推荐客户成为SVIP你可赚100元\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "desc desc-r"
  }, [_c('div', {
    staticClass: "desc-title"
  }, [_c('span', [_vm._v("赚20")]), _vm._v("元")]), _vm._v(" "), _c('div', {
    staticClass: "desc-info"
  }, [_vm._v("下级推荐客户成为SVIP你可赚20元")])])])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "title"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(693),
      "alt": ""
    }
  }), _vm._v("专属客户返佣")]), _vm._v(" "), _c('div', {
    staticClass: "desc-box"
  }, [_c('div', {
    staticClass: "desc desc-l"
  }, [_c('div', {
    staticClass: "desc-title"
  }, [_c('span', [_vm._v("赚10")]), _vm._v("元\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "desc-info"
  }, [_vm._v("\n                        你的一级客户购买商品A省了20元，你可赚10元\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "desc desc-r"
  }, [_c('div', {
    staticClass: "desc-title"
  }, [_c('span', [_vm._v("赚2.5")]), _vm._v("元")]), _vm._v(" "), _c('div', {
    staticClass: "desc-info"
  }, [_vm._v("你的二级客户购买商品A省了20元，你可赚2.5元")])])])])])
}]}

/***/ }),

/***/ 918:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-grids",
    class: {
      'vux-grid-no-lr-borders': !_vm.showLrBorders
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 920:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "tab_box"
  }, [_c('tab', {
    attrs: {
      "bar-active-color": "transparent",
      "active-color": "#f9ba31"
    }
  }, [_c('tab-item', {
    attrs: {
      "selected": ""
    },
    on: {
      "on-item-click": function($event) {
        _vm.handelClick('today')
      }
    }
  }, [_vm._v("今日")]), _vm._v(" "), _c('tab-item', {
    on: {
      "on-item-click": function($event) {
        _vm.handelClick('yesterday')
      }
    }
  }, [_vm._v("昨日")])], 1), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('div', {
    staticClass: "count_box incomes"
  }, [_c('div', {
    staticClass: "weui-flex weui-flex-title weui-cell vux-tap-active weui-cell_access"
  }, [_vm._m(2), _vm._v(" "), _c('router-link', {
    staticClass: "weui-flex__item weui-cell__ft_in-access weui-cell__ft",
    attrs: {
      "to": "/income"
    }
  }, [_vm._v("收入统计")])], 1), _vm._v(" "), _c('div', [_c('v-chart', {
    ref: "demo",
    attrs: {
      "data": _vm.data
    }
  }, [_c('v-scale', {
    attrs: {
      "x": "",
      "field": "月份"
    }
  }), _vm._v(" "), _c('v-scale', {
    attrs: {
      "y": "",
      "field": "月均降雨量"
    }
  }), _vm._v(" "), _c('v-bar', {
    attrs: {
      "series-field": "name",
      "adjust": "stack"
    }
  }), _vm._v(" "), _c('v-tooltip', {
    attrs: {
      "show-value-in-legend": ""
    }
  })], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "count_box customs"
  }, [_c('div', {
    staticClass: "weui-flex weui-flex-title weui-cell vux-tap-active weui-cell_access"
  }, [_vm._m(3), _vm._v(" "), _c('router-link', {
    staticClass: "weui-flex__item weui-cell__ft_in-access weui-cell__ft",
    attrs: {
      "to": "/custom"
    }
  }, [_vm._v("客户统计")])], 1), _vm._v(" "), _c('div', [_c('v-chart', {
    attrs: {
      "data": _vm.data2
    }
  }, [_c('v-line', {
    attrs: {
      "series-field": "type"
    }
  })], 1)], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "head_btn"
  }, [_c('div', {
    staticClass: "center partner_center"
  }, [_c('div', {
    staticClass: "all_nums"
  }, [_c('div', {
    staticClass: "alls"
  }, [_c('span', [_vm._v("客户数")]), _vm._v(" "), _c('p', {
    staticClass: "gold_col"
  }, [_vm._v("0")])]), _vm._v(" "), _c('div', {
    staticClass: "vips"
  }, [_c('span', [_vm._v("VIP 数")]), _vm._v(" "), _c('p', {
    staticClass: "gold_col"
  }, [_vm._v("0")])]), _vm._v(" "), _c('div', {
    staticClass: "svips"
  }, [_c('span', [_vm._v("SVIP 数")]), _vm._v(" "), _c('p', {
    staticClass: "gold_col"
  }, [_vm._v("0")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tab_content"
  }, [_c('p', {
    staticClass: "except"
  }, [_vm._v(" 成交预估收入: ￥0.00 ")]), _vm._v(" "), _c('div', {
    staticClass: "except_nums"
  }, [_c('div', {
    staticClass: "except_box"
  }, [_c('div', {
    staticClass: "except_title"
  }, [_vm._v("新增客户数")]), _vm._v(" "), _c('p', [_vm._v("0")])]), _vm._v(" "), _c('div', {
    staticClass: "except_box"
  }, [_c('div', {
    staticClass: "except_title"
  }, [_vm._v("付款笔数")]), _vm._v(" "), _c('p', [_vm._v("0")])]), _vm._v(" "), _c('div', {
    staticClass: "except_box"
  }, [_c('div', {
    staticClass: "except_title"
  }, [_vm._v("新增SVIP数")]), _vm._v(" "), _c('p', [_vm._v("0")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-cell-bd vux-cell-primary"
  }, [_c('p', [_c('label', {
    staticClass: "vux-label"
  }, [_vm._v("收入统计")])]), _vm._v(" "), _c('span', {
    staticClass: "vux-label-desc"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-cell-bd vux-cell-primary"
  }, [_c('p', [_c('label', {
    staticClass: "vux-label"
  }, [_vm._v("客户统计")])]), _vm._v(" "), _c('span', {
    staticClass: "vux-label-desc"
  })])
}]}

/***/ }),

/***/ 925:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: ({
      backgroundColor: _vm.backgroundColor,
      width: _vm.width + 'px',
      height: _vm.height + 'px'
    }),
    on: {
      "touchstart": _vm.onTouchstart
    }
  }, [_c('canvas', {
    ref: "chart",
    staticClass: "noselect",
    attrs: {
      "height": "260"
    }
  }), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "head_btn"
  }, [_c('router-link', {
    attrs: {
      "to": "/buysvip"
    }
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(690),
      "alt": ""
    }
  })])], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('router-link', {
    staticClass: "bottom-btn",
    attrs: {
      "to": "/buysvip"
    }
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(694),
      "alt": ""
    }
  })])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "section"
  }, [_c('li', [_c('div', {
    staticClass: "title"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(691),
      "alt": ""
    }
  }), _vm._v("专享高额返佣")]), _vm._v(" "), _c('div', {
    staticClass: "desc-box"
  }, [_c('div', {
    staticClass: "desc desc-l"
  }, [_c('div', {
    staticClass: "desc-title"
  }, [_c('span', [_vm._v("省20")]), _vm._v("元\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "desc-info"
  }, [_vm._v("\n                        假设普通vip购买了商品A省了20元\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "desc desc-r"
  }, [_c('div', {
    staticClass: "desc-title"
  }, [_c('span', [_vm._v("省30")]), _vm._v("元")]), _vm._v(" "), _c('div', {
    staticClass: "desc-info"
  }, [_vm._v("如果你是 SVIP ，你同样购买商品A则可省30元")])])])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "title"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(692),
      "alt": ""
    }
  }), _vm._v("两级推荐奖励")]), _vm._v(" "), _c('div', {
    staticClass: "desc-box"
  }, [_c('div', {
    staticClass: "desc desc-l"
  }, [_c('div', {
    staticClass: "desc-title"
  }, [_c('span', [_vm._v("赚100")]), _vm._v("元\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "desc-info"
  }, [_vm._v("\n                        推荐客户成为SVIP你可赚100元\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "desc desc-r"
  }, [_c('div', {
    staticClass: "desc-title"
  }, [_c('span', [_vm._v("赚20")]), _vm._v("元")]), _vm._v(" "), _c('div', {
    staticClass: "desc-info"
  }, [_vm._v("下级推荐客户成为SVIP你可赚20元")])])])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "title"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(693),
      "alt": ""
    }
  }), _vm._v("专属客户返佣")]), _vm._v(" "), _c('div', {
    staticClass: "desc-box"
  }, [_c('div', {
    staticClass: "desc desc-l"
  }, [_c('div', {
    staticClass: "desc-title"
  }, [_c('span', [_vm._v("赚10")]), _vm._v("元\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "desc-info"
  }, [_vm._v("\n                        你的一级客户购买商品A省了20元，你可赚10元\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "desc desc-r"
  }, [_c('div', {
    staticClass: "desc-title"
  }, [_c('span', [_vm._v("赚2.5")]), _vm._v("元")]), _vm._v(" "), _c('div', {
    staticClass: "desc-info"
  }, [_vm._v("你的二级客户购买商品A省了20元，你可赚2.5元")])])])])])
}]}

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-content"
  }, [_c('header', [_c('span', {
    staticClass: "img img_idot"
  }), _vm._v(" "), _c('span', {
    staticClass: "img img_glue"
  }), _vm._v(" "), _c('div', {
    staticClass: "head_card"
  }, [(_vm.identityCode <= 1) ? _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card_t"
  }, [_c('img', {
    staticClass: "user_avatar",
    attrs: {
      "src": __webpack_require__(592),
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "card_t_r"
  }, [(_vm.identityCode < 1) ? _c('span', {
    staticClass: "card_name gold_color f18"
  }, [_vm._v("SVIP拿奖励，疯狂赚")]) : _vm._e(), _vm._v(" "), (_vm.identityCode === 1) ? _c('span', {
    staticClass: "card_name gold_color f18"
  }, [_vm._v("Kar98k🚫 "), _c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(867),
      "alt": ""
    }
  })]) : _vm._e(), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), (_vm.identityCode > 1) ? _c('div', {
    staticClass: "card_c"
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "card_f inner_white"
  }, [_c('div', [_vm._v("亲爱的少年锦时,")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "check-info",
    on: {
      "click": _vm.showInfoToast
    }
  }, [_vm._v("查看详细 >")])])]) : (_vm.identityCode === 2) ? _c('div', {
    staticClass: "card"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "card_c"
  }), _vm._v(" "), _c('div', {
    staticClass: "card_f"
  })]) : _c('div', {
    staticClass: "card"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "card_c"
  }), _vm._v(" "), _c('div', {
    staticClass: "card_f"
  })])])]), _vm._v(" "), (_vm.identityCode <= 0 || _vm.identityCode == undefined) ? _c('div', {}, [_c('normal')], 1) : (_vm.identityCode === 1) ? _c('div', {}, [_c('vip')], 1) : (_vm.identityCode === 2) ? _c('div', {}, [_c('svip')], 1) : _c('div', {}, [_c('tubu')], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "transfer-dom",
      rawName: "v-transfer-dom"
    }]
  }, [_c('x-dialog', {
    staticClass: "dialog-toast",
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
    staticClass: "dialog-box"
  }, [_c('div', {
    staticClass: "dialog-head"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(863),
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "dialog-title"
  }, [_vm._v("SVIP 赚钱明细")]), _vm._v(" "), _c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(864),
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "dialog-body"
  }, [_c('div', {
    staticClass: "dialog-h"
  }, [_c('span', [_vm._v("根据智淘过去一年的分析，开通SVIP预计可为你多赚 "), _c('span', {
    staticClass: "gold_col"
  }, [_vm._v("8568")]), _vm._v(" 元，明细如下：")])]), _vm._v(" "), _c('ul', {
    staticClass: "dialog-list"
  }, [_c('li', {
    staticClass: "clearfix"
  }, [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("可优惠（SVIP 专享返佣）"), _c('span', [_vm._v("￥516>")])])], 1), _vm._v(" "), _c('li', {
    staticClass: "clearfix"
  }, [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("可享推荐奖励（二级奖励）"), _c('span', [_vm._v("￥7000>")])])], 1), _vm._v(" "), _c('li', {
    staticClass: "clearfix"
  }, [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("可享客户返佣（二级返佣）"), _c('span', [_vm._v("￥1052>")])])], 1), _vm._v(" "), _c('li', {
    staticClass: "clearfix"
  }, [_c('div', [_vm._v("加入SVIP预计为你多赚"), _c('span', [_vm._v("￥8783.60")])])])])]), _vm._v(" "), _c('p'), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer"
  }, [_c('router-link', {
    attrs: {
      "to": "/buysvip"
    }
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(845),
      "alt": ""
    }
  })])], 1)])])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "card_date"
  }, [_vm._v("VIP期间已为你节省"), _c('span', {
    staticClass: "gold_color"
  }, [_vm._v("￥0.00")]), _vm._v("元")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("开通SVIP预计可多赚"), _c('span', {
    staticClass: "gold_color"
  }, [_vm._v("￥8568.00")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card_t"
  }, [_c('img', {
    staticClass: "user_avatar",
    attrs: {
      "src": __webpack_require__(592),
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "card_t_r"
  }, [_c('span', {
    staticClass: "card_name gold_color f18"
  }, [_vm._v("Kar98k🚫 "), _c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(861),
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "card_date"
  }, [_vm._v("2020-12-12 到期")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card_t"
  }, [_c('img', {
    staticClass: "user_avatar",
    attrs: {
      "src": __webpack_require__(592),
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "card_t_r"
  }, [_c('span', {
    staticClass: "card_name gold_color f18"
  }, [_vm._v("Kar98k🚫"), _c('img', {
    staticClass: "img-responsive tubu-icon",
    attrs: {
      "src": __webpack_require__(866),
      "alt": ""
    }
  })])])])
}]}

/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "head_btn"
  }, [_c('group', [_c('cell', {
    attrs: {
      "title": "收入明细",
      "is-link": "",
      "link": {
        path: '/custom'
      }
    }
  }, [_c('img', {
    staticStyle: {
      "display": "block",
      "margin-right": "5px"
    },
    attrs: {
      "slot": "icon",
      "width": "16",
      "src": __webpack_require__(850)
    },
    slot: "icon"
  })])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "tab_box"
  }, [_c('tab', {
    attrs: {
      "bar-active-color": "transparent",
      "active-color": "#f9ba31"
    }
  }, [_c('tab-item', {
    attrs: {
      "selected": ""
    },
    on: {
      "on-item-click": function($event) {
        _vm.handelClick('today')
      }
    }
  }, [_vm._v("今日")]), _vm._v(" "), _c('tab-item', {
    on: {
      "on-item-click": function($event) {
        _vm.handelClick('yesterday')
      }
    }
  }, [_vm._v("昨日")])], 1), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "power-box"
  }, [_c('free-dom', {
    attrs: {
      "title": 'SVIP 6大特权：'
    }
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tab_content"
  }, [_c('p', {
    staticClass: "except"
  }, [_vm._v(" 成交预估收入: ￥0.00 ")]), _vm._v(" "), _c('div', {
    staticClass: "except_nums"
  }, [_c('div', {
    staticClass: "except_box"
  }, [_c('div', {
    staticClass: "except_title"
  }, [_vm._v("新增客户数")]), _vm._v(" "), _c('p', [_vm._v("0")])]), _vm._v(" "), _c('div', {
    staticClass: "except_box"
  }, [_c('div', {
    staticClass: "except_title"
  }, [_vm._v("付款笔数")]), _vm._v(" "), _c('p', [_vm._v("0")])]), _vm._v(" "), _c('div', {
    staticClass: "except_box"
  }, [_c('div', {
    staticClass: "except_title"
  }, [_vm._v("新增SVIP数")]), _vm._v(" "), _c('p', [_vm._v("0")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "advertbox"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(843),
      "alt": ""
    }
  })])
}]}

/***/ }),

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(796)

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(702),
  /* template */
  __webpack_require__(911),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(801)

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(703),
  /* template */
  __webpack_require__(918),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(705),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(706),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(707),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(808)

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(708),
  /* template */
  __webpack_require__(925),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(709),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(710),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(711),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(712),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(811)

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(735),
  /* template */
  __webpack_require__(928),
  /* scopeId */
  "data-v-4b4f7e83",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(818)

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(737),
  /* template */
  __webpack_require__(935),
  /* scopeId */
  "data-v-7aac1034",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(803)

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(738),
  /* template */
  __webpack_require__(920),
  /* scopeId */
  "data-v-2c0d1aa0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(798)

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(739),
  /* template */
  __webpack_require__(914),
  /* scopeId */
  "data-v-1331f831",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 967:
/***/ (function(module, exports) {

module.exports = [{"date":"2010-01-10","type":"能源","value":99.9},{"date":"2010-01-10","type":"金属","value":96.6},{"date":"2010-01-10","type":"农副产品","value":96.2},{"date":"2010-02-10","type":"能源","value":96.7},{"date":"2010-02-10","type":"金属","value":91.1},{"date":"2010-02-10","type":"农副产品","value":93.4},{"date":"2010-03-10","type":"能源","value":100.2},{"date":"2010-03-10","type":"金属","value":99.4},{"date":"2010-03-10","type":"农副产品","value":91.7},{"date":"2010-04-10","type":"能源","value":104.7},{"date":"2010-04-10","type":"金属","value":108.1},{"date":"2010-04-10","type":"农副产品","value":93.1},{"date":"2010-05-10","type":"能源","value":95.6},{"date":"2010-05-10","type":"金属","value":96},{"date":"2010-05-10","type":"农副产品","value":92.3},{"date":"2010-06-10","type":"能源","value":95.6},{"date":"2010-06-10","type":"金属","value":89.1},{"date":"2010-06-10","type":"农副产品","value":92.5},{"date":"2010-07-10","type":"能源","value":95.3},{"date":"2010-07-10","type":"金属","value":89.2},{"date":"2010-07-10","type":"农副产品","value":95.7},{"date":"2010-08-10","type":"能源","value":96.1},{"date":"2010-08-10","type":"金属","value":97.6},{"date":"2010-08-10","type":"农副产品","value":99.9},{"date":"2010-09-10","type":"能源","value":96.1},{"date":"2010-09-10","type":"金属","value":100.6},{"date":"2010-09-10","type":"农副产品","value":103.8},{"date":"2010-10-10","type":"能源","value":101.6},{"date":"2010-10-10","type":"金属","value":108.3},{"date":"2010-10-10","type":"农副产品","value":108.9},{"date":"2010-11-10","type":"能源","value":105.6},{"date":"2010-11-10","type":"金属","value":109.4},{"date":"2010-11-10","type":"农副产品","value":113.7},{"date":"2010-12-10","type":"能源","value":112.7},{"date":"2010-12-10","type":"金属","value":114.5},{"date":"2010-12-10","type":"农副产品","value":118.8},{"date":"2011-01-11","type":"能源","value":117},{"date":"2011-01-11","type":"金属","value":120.8},{"date":"2011-01-11","type":"农副产品","value":124.3},{"date":"2011-02-11","type":"能源","value":121.8},{"date":"2011-02-11","type":"金属","value":125.8},{"date":"2011-02-11","type":"农副产品","value":130.1},{"date":"2011-03-11","type":"能源","value":133.1},{"date":"2011-03-11","type":"金属","value":121.4},{"date":"2011-03-11","type":"农副产品","value":125.8},{"date":"2011-04-11","type":"能源","value":141.9},{"date":"2011-04-11","type":"金属","value":124.3},{"date":"2011-04-11","type":"农副产品","value":127.4},{"date":"2011-05-11","type":"能源","value":133.1},{"date":"2011-05-11","type":"金属","value":118.5},{"date":"2011-05-11","type":"农副产品","value":123.9},{"date":"2011-06-11","type":"能源","value":131.2},{"date":"2011-06-11","type":"金属","value":117},{"date":"2011-06-11","type":"农副产品","value":123.2},{"date":"2011-07-11","type":"能源","value":133.7},{"date":"2011-07-11","type":"金属","value":121},{"date":"2011-07-11","type":"农副产品","value":122.6},{"date":"2011-08-11","type":"能源","value":125.2},{"date":"2011-08-11","type":"金属","value":114.8},{"date":"2011-08-11","type":"农副产品","value":123.2},{"date":"2011-09-11","type":"能源","value":125.5},{"date":"2011-09-11","type":"金属","value":109.1},{"date":"2011-09-11","type":"农副产品","value":121.6},{"date":"2011-10-11","type":"能源","value":124.2},{"date":"2011-10-11","type":"金属","value":98.4},{"date":"2011-10-11","type":"农副产品","value":115.6},{"date":"2011-11-11","type":"能源","value":129.4},{"date":"2011-11-11","type":"金属","value":95.8},{"date":"2011-11-11","type":"农副产品","value":112.2},{"date":"2011-12-11","type":"能源","value":128},{"date":"2011-12-11","type":"金属","value":95.1},{"date":"2011-12-11","type":"农副产品","value":109.1},{"date":"2012-01-12","type":"能源","value":130.6},{"date":"2012-01-12","type":"金属","value":100.5},{"date":"2012-01-12","type":"农副产品","value":111},{"date":"2012-02-12","type":"能源","value":136.2},{"date":"2012-02-12","type":"金属","value":104},{"date":"2012-02-12","type":"农副产品","value":113.4},{"date":"2012-03-12","type":"能源","value":141.2},{"date":"2012-03-12","type":"金属","value":103.5},{"date":"2012-03-12","type":"农副产品","value":114.6},{"date":"2012-04-12","type":"能源","value":136.1},{"date":"2012-04-12","type":"金属","value":101},{"date":"2012-04-12","type":"农副产品","value":114.8},{"date":"2012-05-12","type":"能源","value":126.3},{"date":"2012-05-12","type":"金属","value":96.6},{"date":"2012-05-12","type":"农副产品","value":113.1},{"date":"2012-06-12","type":"能源","value":111.5},{"date":"2012-06-12","type":"金属","value":91.6},{"date":"2012-06-12","type":"农副产品","value":110.7},{"date":"2012-07-12","type":"能源","value":118.6},{"date":"2012-07-12","type":"金属","value":91.2},{"date":"2012-07-12","type":"农副产品","value":118.7},{"date":"2012-08-12","type":"能源","value":127.7},{"date":"2012-08-12","type":"金属","value":87.7},{"date":"2012-08-12","type":"农副产品","value":118.6},{"date":"2012-09-12","type":"能源","value":128.5},{"date":"2012-09-12","type":"金属","value":93.6},{"date":"2012-09-12","type":"农副产品","value":118.5},{"date":"2012-10-12","type":"能源","value":125.9},{"date":"2012-10-12","type":"金属","value":94},{"date":"2012-10-12","type":"农副产品","value":115.2},{"date":"2012-11-12","type":"能源","value":124.1},{"date":"2012-11-12","type":"金属","value":92.4},{"date":"2012-11-12","type":"农副产品","value":113},{"date":"2012-12-12","type":"能源","value":124.2},{"date":"2012-12-12","type":"金属","value":97.4},{"date":"2012-12-12","type":"农副产品","value":112.4},{"date":"2013-01-13","type":"能源","value":128.4},{"date":"2013-01-13","type":"金属","value":100.3},{"date":"2013-01-13","type":"农副产品","value":111.5},{"date":"2013-02-13","type":"能源","value":131.2},{"date":"2013-02-13","type":"金属","value":101.3},{"date":"2013-02-13","type":"农副产品","value":110.4},{"date":"2013-03-13","type":"能源","value":126.2},{"date":"2013-03-13","type":"金属","value":94.5},{"date":"2013-03-13","type":"农副产品","value":108.4},{"date":"2013-04-13","type":"能源","value":123.1},{"date":"2013-04-13","type":"金属","value":90.7},{"date":"2013-04-13","type":"农副产品","value":106},{"date":"2013-05-13","type":"能源","value":123.2},{"date":"2013-05-13","type":"金属","value":88.3},{"date":"2013-05-13","type":"农副产品","value":108.1},{"date":"2013-06-13","type":"能源","value":122.9},{"date":"2013-06-13","type":"金属","value":85.4},{"date":"2013-06-13","type":"农副产品","value":107.7},{"date":"2013-07-13","type":"能源","value":128.1},{"date":"2013-07-13","type":"金属","value":85.7},{"date":"2013-07-13","type":"农副产品","value":105.6},{"date":"2013-08-13","type":"能源","value":130.9},{"date":"2013-08-13","type":"金属","value":89.6},{"date":"2013-08-13","type":"农副产品","value":103.8},{"date":"2013-09-13","type":"能源","value":131.6},{"date":"2013-09-13","type":"金属","value":88.2},{"date":"2013-09-13","type":"农副产品","value":103.6},{"date":"2013-10-13","type":"能源","value":128.3},{"date":"2013-10-13","type":"金属","value":89.1},{"date":"2013-10-13","type":"农副产品","value":104},{"date":"2013-11-13","type":"能源","value":125.4},{"date":"2013-11-13","type":"金属","value":87.8},{"date":"2013-11-13","type":"农副产品","value":103.3},{"date":"2013-12-13","type":"能源","value":129.5},{"date":"2013-12-13","type":"金属","value":88.7},{"date":"2013-12-13","type":"农副产品","value":103.4},{"date":"2014-01-14","type":"能源","value":126.4},{"date":"2014-01-14","type":"金属","value":88.1},{"date":"2014-01-14","type":"农副产品","value":102.3},{"date":"2014-02-14","type":"能源","value":130.6},{"date":"2014-02-14","type":"金属","value":86.2},{"date":"2014-02-14","type":"农副产品","value":106.1},{"date":"2014-03-14","type":"能源","value":127.9},{"date":"2014-03-14","type":"金属","value":83},{"date":"2014-03-14","type":"农副产品","value":108},{"date":"2014-04-14","type":"能源","value":128.4},{"date":"2014-04-14","type":"金属","value":85.5},{"date":"2014-04-14","type":"农副产品","value":107.2},{"date":"2014-05-14","type":"能源","value":129},{"date":"2014-05-14","type":"金属","value":84.8},{"date":"2014-05-14","type":"农副产品","value":107.2},{"date":"2014-06-14","type":"能源","value":131.5},{"date":"2014-06-14","type":"金属","value":84.4},{"date":"2014-06-14","type":"农副产品","value":105.2},{"date":"2014-07-14","type":"能源","value":126.9},{"date":"2014-07-14","type":"金属","value":88.2},{"date":"2014-07-14","type":"农副产品","value":103.2},{"date":"2014-08-14","type":"能源","value":121.2},{"date":"2014-08-14","type":"金属","value":88},{"date":"2014-08-14","type":"农副产品","value":102.1},{"date":"2014-09-14","type":"能源","value":116.6},{"date":"2014-09-14","type":"金属","value":85.1},{"date":"2014-09-14","type":"农副产品","value":98.4},{"date":"2014-10-14","type":"能源","value":106.2},{"date":"2014-10-14","type":"金属","value":82.6},{"date":"2014-10-14","type":"农副产品","value":98},{"date":"2014-11-14","type":"能源","value":96.4},{"date":"2014-11-14","type":"金属","value":82.9},{"date":"2014-11-14","type":"农副产品","value":98.3},{"date":"2014-12-14","type":"能源","value":78.6},{"date":"2014-12-14","type":"金属","value":78.8},{"date":"2014-12-14","type":"农副产品","value":96.8},{"date":"2015-01-15","type":"能源","value":63.1},{"date":"2015-01-15","type":"金属","value":73.9},{"date":"2015-01-15","type":"农副产品","value":94.7},{"date":"2015-02-15","type":"能源","value":70.4},{"date":"2015-02-15","type":"金属","value":72.4},{"date":"2015-02-15","type":"农副产品","value":93.4},{"date":"2015-03-15","type":"能源","value":68.1},{"date":"2015-03-15","type":"金属","value":71.8},{"date":"2015-03-15","type":"农副产品","value":90.7},{"date":"2015-04-15","type":"能源","value":72.2},{"date":"2015-04-15","type":"金属","value":72.1},{"date":"2015-04-15","type":"农副产品","value":90.4},{"date":"2015-05-15","type":"能源","value":77.8},{"date":"2015-05-15","type":"金属","value":74.6},{"date":"2015-05-15","type":"农副产品","value":90.1},{"date":"2015-06-15","type":"能源","value":76.3},{"date":"2015-06-15","type":"金属","value":70.3},{"date":"2015-06-15","type":"农副产品","value":90.2},{"date":"2015-07-15","type":"能源","value":68.8},{"date":"2015-07-15","type":"金属","value":65.7},{"date":"2015-07-15","type":"农副产品","value":90.8},{"date":"2015-08-15","type":"能源","value":59.5},{"date":"2015-08-15","type":"金属","value":62.7},{"date":"2015-08-15","type":"农副产品","value":87.5},{"date":"2015-09-15","type":"能源","value":59.7},{"date":"2015-09-15","type":"金属","value":63.4},{"date":"2015-09-15","type":"农副产品","value":85.8},{"date":"2015-10-15","type":"能源","value":59.7},{"date":"2015-10-15","type":"金属","value":62.2},{"date":"2015-10-15","type":"农副产品","value":86.8},{"date":"2015-11-15","type":"能源","value":55.2},{"date":"2015-11-15","type":"金属","value":57.8},{"date":"2015-11-15","type":"农副产品","value":85.7},{"date":"2015-12-15","type":"能源","value":47.8},{"date":"2015-12-15","type":"金属","value":56.3},{"date":"2015-12-15","type":"农副产品","value":85.4},{"date":"2016-01-16","type":"能源","value":40.5},{"date":"2016-01-16","type":"金属","value":55.2},{"date":"2016-01-16","type":"农副产品","value":83.5},{"date":"2016-02-16","type":"能源","value":41.2},{"date":"2016-02-16","type":"金属","value":57.7},{"date":"2016-02-16","type":"农副产品","value":84.2},{"date":"2016-03-16","type":"能源","value":47.3},{"date":"2016-03-16","type":"金属","value":61.2},{"date":"2016-03-16","type":"农副产品","value":85.9},{"date":"2016-04-16","type":"能源","value":51.1},{"date":"2016-04-16","type":"金属","value":62},{"date":"2016-04-16","type":"农副产品","value":88.3},{"date":"2016-05-16","type":"能源","value":56.6},{"date":"2016-05-16","type":"金属","value":60},{"date":"2016-05-16","type":"农副产品","value":91.1},{"date":"2016-06-16","type":"能源","value":59.4},{"date":"2016-06-16","type":"金属","value":60.3},{"date":"2016-06-16","type":"农副产品","value":93.8},{"date":"2016-07-16","type":"能源","value":56.6},{"date":"2016-07-16","type":"金属","value":63.5},{"date":"2016-07-16","type":"农副产品","value":91.9},{"date":"2016-08-16","type":"能源","value":57.6},{"date":"2016-08-16","type":"金属","value":63.8},{"date":"2016-08-16","type":"农副产品","value":90.9},{"date":"2016-09-16","type":"能源","value":58.2},{"date":"2016-09-16","type":"金属","value":62.8},{"date":"2016-09-16","type":"农副产品","value":90.5},{"date":"2016-10-16","type":"能源","value":63.7},{"date":"2016-10-16","type":"金属","value":64.1},{"date":"2016-10-16","type":"农副产品","value":89.5},{"date":"2016-11-16","type":"能源","value":59.4},{"date":"2016-11-16","type":"金属","value":71.5},{"date":"2016-11-16","type":"农副产品","value":89.9},{"date":"2016-12-16","type":"能源","value":68.4},{"date":"2016-12-16","type":"金属","value":73.5},{"date":"2016-12-16","type":"农副产品","value":89.4},{"date":"2017-01-17","type":"能源","value":68.9},{"date":"2017-01-17","type":"金属","value":74.5},{"date":"2017-01-17","type":"农副产品","value":91.3},{"date":"2017-02-17","type":"能源","value":69.4},{"date":"2017-02-17","type":"金属","value":77.9},{"date":"2017-02-17","type":"农副产品","value":91.3},{"date":"2017-03-17","type":"能源","value":65.3},{"date":"2017-03-17","type":"金属","value":77.3},{"date":"2017-03-17","type":"农副产品","value":89.2},{"date":"2017-04-17","type":"能源","value":67.1},{"date":"2017-04-17","type":"金属","value":74},{"date":"2017-04-17","type":"农副产品","value":87.7},{"date":"2017-05-17","type":"能源","value":64.3},{"date":"2017-05-17","type":"金属","value":72.2},{"date":"2017-05-17","type":"农副产品","value":88.9},{"date":"2017-06-17","type":"能源","value":60.4},{"date":"2017-06-17","type":"金属","value":71.7},{"date":"2017-06-17","type":"农副产品","value":87.4},{"date":"2017-07-17","type":"能源","value":62.3},{"date":"2017-07-17","type":"金属","value":75.4},{"date":"2017-07-17","type":"农副产品","value":88.1},{"date":"2017-08-17","type":"能源","value":65},{"date":"2017-08-17","type":"金属","value":81.6},{"date":"2017-08-17","type":"农副产品","value":86.5},{"date":"2017-09-17","type":"能源","value":68.5},{"date":"2017-09-17","type":"金属","value":82.7},{"date":"2017-09-17","type":"农副产品","value":87.7}]

/***/ })

});
//# sourceMappingURL=0.97d1e9f7aea02b2fd88b.js.map