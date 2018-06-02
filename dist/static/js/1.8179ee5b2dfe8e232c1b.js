webpackJsonp([1],{

/***/ 1236:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(930);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(488)("8f509f38", content, true);

/***/ }),

/***/ 1238:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(932);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(488)("022db7ab", content, true);

/***/ }),

/***/ 1334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_create__ = __webpack_require__(164);



/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_create__["a" /* default */])({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b({
        on: _vm.value,
        disabled: _vm.disabled
      }), style: _vm.style, on: { "click": _vm.onClick } }, [_c('div', { class: _vm.b('node') }, [_vm.loading ? _c('loading', { class: _vm.b('loading') }) : _vm._e()], 1)]);
  },

  name: 'switch',

  props: {
    value: Boolean,
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: '30px'
    }
  },

  computed: {
    style: function style() {
      return {
        fontSize: this.size
      };
    }
  },

  methods: {
    onClick: function onClick() {
      if (!this.disabled && !this.loading) {
        this.$emit('input', !this.value);
        this.$emit('change', !this.value);
      }
    }
  }
}));

/***/ }),

/***/ 1335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vant_css_base_css__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vant_css_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vant_css_base_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vant_css_switch_css__ = __webpack_require__(1236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vant_css_switch_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vant_css_switch_css__);



/***/ }),

/***/ 1338:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "page-content"
  }, [_c('div', {
    ref: "searchBox",
    staticClass: "search-box"
  }, [_c('div', {
    staticClass: "search"
  }, [_c('x-input', {
    staticClass: "weui-vcode",
    attrs: {
      "title": "发送验证码",
      "name": "value"
    },
    model: {
      value: (_vm.searchVal),
      callback: function($$v) {
        _vm.searchVal = $$v
      },
      expression: "searchVal"
    }
  }, [_c('div', {
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_c('icon', {
    attrs: {
      "type": "search"
    }
  })], 1), _vm._v(" "), _c('button', {
    staticClass: "search_btn",
    attrs: {
      "slot": "right"
    },
    on: {
      "click": _vm.searchBtn
    },
    slot: "right"
  }, [_vm._v("搜优惠券")])])], 1)]), _vm._v(" "), _c('div', {
    ref: "tabBox",
    staticClass: "check_tab"
  }, [_c('div', {
    staticClass: "tab_item",
    class: _vm.currentId == 0 ? 'active' : '',
    attrs: {
      "data-current": "0"
    },
    on: {
      "click": _vm.tabclick
    }
  }, [_vm._v("综合")]), _vm._v(" "), _c('div', {
    staticClass: "tab_item",
    class: _vm.currentId == 1 ? 'active' : '',
    attrs: {
      "data-current": "1"
    },
    on: {
      "click": _vm.tabclick
    }
  }, [_vm._v("佣金比例")]), _vm._v(" "), _c('div', {
    staticClass: "tab_item",
    class: _vm.currentId == 2 ? 'arrow__active' : '',
    attrs: {
      "data-current": "2"
    },
    on: {
      "click": _vm.tabclick
    }
  }, [_vm._v("\n            价格\n            "), _c('div', {
    staticClass: "arrow_group",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.priceCLICK($event)
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-arrowup",
    class: _vm.priceActive ? 'arrow__active' : ''
  }), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-arrowdown-copy",
    class: !_vm.priceActive ? 'arrow__active' : ''
  })])]), _vm._v(" "), _c('div', {
    staticClass: "tab_item",
    class: _vm.currentId == 3 ? 'arrow__active' : '',
    attrs: {
      "data-current": "3"
    },
    on: {
      "click": _vm.tabclick
    }
  }, [_vm._v("\n            销量\n            "), _c('div', {
    staticClass: "arrow_group",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.saleCLICK($event)
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-arrowup",
    class: _vm.saleActive ? 'arrow__active' : ''
  }), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-arrowdown-copy",
    class: !_vm.saleActive ? 'arrow__active' : ''
  })])])]), _vm._v(" "), _c('div', {
    ref: "switchBox",
    staticClass: "switch_box"
  }, [_c('van-cell-group', [_c('van-cell', {
    attrs: {
      "title": "仅显示优惠券商品",
      "icon": "card"
    }
  }), _vm._v(" "), _c('van-switch', {
    on: {
      "change": _vm.switchChange
    },
    model: {
      value: (_vm.value),
      callback: function($$v) {
        _vm.value = $$v
      },
      expression: "value"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "overflow": "hidden"
    }
  }, [_c('scroller', {
    ref: "scrollerBottom",
    attrs: {
      "lock-x": "",
      "height": _vm.scrollHeight,
      "scroll-bottom-offst": 200
    },
    on: {
      "on-scroll-bottom": _vm.onScrollBottom
    }
  }, [(_vm.goodsList.length > 0) ? _c('div', {
    staticClass: "shop_box"
  }, [_vm._l((_vm.goodsList), function(item, index) {
    return _c('div', {
      key: item.item_id,
      staticClass: "box_item",
      on: {
        "click": function($event) {
          _vm.toDetail(item)
        }
      }
    }, [(item.item_pic) ? _c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (item.item_pic),
        expression: "item.item_pic"
      }],
      staticClass: "shop_img",
      attrs: {
        "alt": ""
      }
    }) : _c('img', {
      staticClass: "shop_img",
      attrs: {
        "src": __webpack_require__(578),
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "shop_info"
    }, [_c('div', {
      staticClass: "shop_name"
    }, [(item.item_type == 1) ? _c('img', {
      staticClass: "shop_logos",
      attrs: {
        "src": __webpack_require__(693),
        "alt": ""
      }
    }) : _c('img', {
      staticClass: "shop_logos",
      attrs: {
        "src": __webpack_require__(694),
        "alt": ""
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "shop_title weui-media-box__desc",
      staticStyle: {
        "-webkit-box-orient": "vertical"
      }
    }, [_vm._v(_vm._s(item.item_title))])]), _vm._v(" "), _c('div', {
      staticClass: "xianjia"
    }, [_vm._v("现价 ￥ " + _vm._s(item.item_price)), _c('span', [_vm._v("月销 " + _vm._s(item.item_volume) + "件")])]), _vm._v(" "), (item.item_coupon) ? _c('div', {
      staticClass: "quanhou"
    }, [_vm._v("券后价 "), _c('span', [_vm._v("￥ " + _vm._s(_vm.toFixed(item.item_price - item.item_coupon.amount)))])]) : _c('div', {
      staticClass: "quanhou"
    }, [_vm._v("现价 "), _c('span', [_vm._v("￥ " + _vm._s(item.item_price))])]), _vm._v(" "), (item.item_coupon) ? _c('div', {
      staticClass: "quan"
    }, [_c('span', {
      staticClass: "myAmount"
    }, [_vm._v("券 "), _c('span', [_vm._v(_vm._s(item.item_coupon.amount) + "元")])])]) : _vm._e()])])
  }), _vm._v(" "), (!_vm.IslastPage) ? _c('load-more', {
    attrs: {
      "tip": "拼命加载中...."
    }
  }) : _c('div', {
    staticClass: "IslastPage"
  })], 2) : _c('div', {
    staticClass: "shop_box"
  }, [_c('place-holder', {
    attrs: {
      "title": '没有找到你要的商品'
    }
  })], 1)])], 1), _vm._v(" "), _c('loading', {
    attrs: {
      "show": _vm.isLoading,
      "text": "加载中..."
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1238)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(914),
  /* template */
  __webpack_require__(1338),
  /* scopeId */
  "data-v-098c84bc",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var SUBSTITUTE_REG = /\\?\{([^{}]+)\}/g,
	EMPTY = '';

var RE_TRIM = /^[\s\xa0]+|[\s\xa0]+$/g,
	trim = String.prototype.trim;

var _trim = trim ?
	function(str) {
		return str == null ? EMPTY : trim.call(str);
	} : function(str) {
		return str == null ? EMPTY : (str + '').replace(RE_TRIM, EMPTY);
	};

function upperCase() {
	return arguments[1].toUpperCase();
}

function Empty() {}

function createObject(proto, constructor) {
	var newProto;
	if (Object.create) {
		newProto = Object.create(proto);
	} else {
		Empty.prototype = proto;
		newProto = new Empty();
	}
	newProto.constructor = constructor;
	return newProto;
}

function getNodes(node, rootNode) {
	if (!node) return;
	if (node.nodeType) return [node];
	var rootNode = rootNode && rootNode.nodeType ? rootNode : document;
	if (node && typeof node === "string") {
		return rootNode.querySelectorAll(node);
	}
	return;
}

// Useful for temporary DOM ids.
var idCounter = 0;

var getOffsetTop = function(el) {
	var offset = el.offsetTop;
	if (el.offsetParent != null) offset += getOffsetTop(el.offsetParent);
	return offset;
};
var getOffsetLeft = function(el) {
	var offset = el.offsetLeft;
	if (el.offsetParent != null) offset += getOffsetLeft(el.offsetParent);
	return offset;
};

var Util = {
	// Is a given variable an object?
	isObject: function(obj) {
		return obj === Object(obj);
	},
	isArray: Array.isArray || function(obj) {
		return toString.call(obj) == '[object Array]';
	},
	// Is a given array, string, or object empty?
	// An "empty" object has no enumerable own-properties.
	isEmpty: function(obj) {
		if (obj == null) return true;
		if (this.isArray(obj) || this.isString(obj)) return obj.length === 0;
		for (var key in obj)
			if (this.has(obj, key)) return false;
		return true;
	},
	mix: function(to, from, deep) {
		for (var i in from) {
			to[i] = from[i];
		}
		return to;
	},
	extend: function(r, s, px, sx) {
		if (!s || !r) {
			return r;
		}
		var sp = s.prototype,
			rp;
		// add prototype chain
		rp = createObject(sp, r);
		r.prototype = this.mix(rp, r.prototype);
		r.superclass = createObject(sp, s);
		// add prototype overrides
		if (px) {
			this.mix(rp, px);
		}
		// add object overrides
		if (sx) {
			this.mix(r, sx);
		}
		return r;
	},
	/**
	 * test whether a string start with a specified substring
	 * @param {String} str the whole string
	 * @param {String} prefix a specified substring
	 * @return {Boolean} whether str start with prefix
	 * @member util
	 */
	startsWith: function(str, prefix) {
		return str.lastIndexOf(prefix, 0) === 0;
	},

	/**
	 * test whether a string end with a specified substring
	 * @param {String} str the whole string
	 * @param {String} suffix a specified substring
	 * @return {Boolean} whether str end with suffix
	 * @member util
	 */
	endsWith: function(str, suffix) {
		var ind = str.length - suffix.length;
		return ind >= 0 && str.indexOf(suffix, ind) === ind;
	},
	/**
	 * Removes the whitespace from the beginning and end of a string.
	 * @method
	 * @member util
	 */
	trim: _trim,
	/**
	 * Substitutes keywords in a string using an object/array.
	 * Removes undef keywords and ignores escaped keywords.
	 * @param {String} str template string
	 * @param {Object} o json data
	 * @member util
	 * @param {RegExp} [regexp] to match a piece of template string
	 */
	substitute: function(str, o, regexp) {
		if (typeof str !== 'string' || !o) {
			return str;
		}

		return str.replace(regexp || SUBSTITUTE_REG, function(match, name) {
			if (match.charAt(0) === '\\') {
				return match.slice(1);
			}
			return (o[name] === undefined) ? EMPTY : o[name];
		});
	},
	/**
	 * vendors
	 * @return { String } webkit|moz|ms|o
	 * @memberOf Util
	 */
	vendor: (function() {
		var el = document.createElement('div').style;
		var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform,
			i = 0,
			l = vendors.length;
		for (; i < l; i++) {
			transform = vendors[i] + 'ransform';
			if (transform in el) return vendors[i].substr(0, vendors[i].length - 1);
		}
		return false;
	})(),
	/**
	 *  add vendor to attribute
	 *  @memberOf Util
	 *  @param {String} attrName name of attribute
	 *  @return { String }
	 **/
	prefixStyle: function(attrName) {
		if (this.vendor === false) return false;
		if (this.vendor === '') return attrName;
		return this.vendor + attrName.charAt(0).toUpperCase() + attrName.substr(1);
	},
	/**
	 * judge if has class
	 * @memberOf Util
	 * @param  {HTMLElement}  el
	 * @param  {String}  className
	 * @return {Boolean}
	 */
	hasClass: function(el, className) {
		return el && el.className && className && el.className.indexOf(className) != -1;
	},
	/**
	 * add className for the element
	 * @memberOf Util
	 * @param  {HTMLElement}  el
	 * @param  {String}  className
	 */
	addClass: function(el, className) {
		if (el && className && !this.hasClass(el, className)) {
			el.className += " " + className;
		}
	},
	/**
	 * remove className for the element
	 * @memberOf Util
	 * @param  {HTMLElement}  el
	 * @param  {String}  className
	 */
	removeClass: function(el, className) {
		if (el && el.className && className) {
			el.className = el.className.replace(className, "");
		}
	},
	/**
	 * remove an element
	 * @memberOf Util
	 * @param  {HTMLElement}  el
	 */
	remove: function(el) {
		if (!el || !el.parentNode) return;
		el.parentNode.removeChild(el);
	},
	/**
	 * get offset top
	 * @memberOf Util
	 * @param  {HTMLElement}   el
	 * @return {Number} offsetTop
	 */
	getOffsetTop: getOffsetTop,
	/**
	 * get offset left
	 * @memberOf Util
	 * @param  {HTMLElement}  el
	 * @return {Number} offsetLeft
	 */
	getOffsetLeft: getOffsetLeft,
	/**
	 * get offset left
	 * @memberOf Util
	 * @param  {HTMLElement} el
	 * @param  {String} selector
	 * @param  {HTMLElement} rootNode
	 * @return {HTMLElement} parent element
	 */
	findParentEl: function(el, selector, rootNode) {
		var rs = null,
			parent = null;
		var type = /^#/.test(selector) ? "id" : /^\./.test(selector) ? "class" : "tag";
		var sel = selector.replace(/\.|#/g, "");
		if (rootNode && typeof rootNode === "string") {
			rootNode = document.querySelector(rootNode);
		}
		rootNode = rootNode || document.body;
		if (!el || !selector) return;
		if (type == "class" && el.className && el.className.match(sel)) {
			return el;
		} else if (type == "id" && el.id && _trim(el.id) == sel) {
			return el;
		} else if (type == "tag" && el.tagName.toLowerCase() == sel) {
			return el;
		}
		while (!rs) {
			if (parent == rootNode) break;
			parent = el.parentNode;
			if (!parent) break;
			if ((type == "class" && parent.className && parent.className.match(sel)) || (type == "id" && parent.id && _trim(parent.id) == sel) || (type == "tag" && parent.tagName && parent.tagName.toLowerCase() == sel)) {
				rs = parent
				return rs;
				break;
			} else {
				el = parent;
			}
		}
		return null;
	},
	/**
	 * Generate a unique integer id (unique within the entire client session).
	 * @param  {String} prefix
	 * @return {String} guid
	 */
	guid: function(prefix) {
		var id = ++idCounter + '';
		return prefix ? prefix + id : id;
	},
	/**
	 * judge if is an android os
	 * @return {Boolean} [description]
	 */
	isAndroid: function() {
		return /Android /.test(window.navigator.appVersion);
	},
	/**
	 * judge if is an android device with low  performance
	 * @return {Boolean}
	 */
	isBadAndroid: function() {
		return /Android /.test(window.navigator.appVersion) && !(/Chrome\/\d/.test(window.navigator.appVersion))
	},
	px2Num: function(px) {
		return Number(px.replace(/px/, ''));
	},
	getNodes: getNodes,
	getNode: function(node, rootNode) {
		var nodes = getNodes(node, rootNode);
		return nodes && nodes[0];
	},
	stringifyStyle: function(style) {
		var styleStr = "";
		for (var i in style) {
			styleStr += [i, ":", style[i], ";"].join("");
		}
		return styleStr;
	}
}

// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
var names = ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'];
for (var i = 0; i < names.length; i++) {
	Util['is' + names[i]] = function(obj) {
		return toString.call(obj) == '[object ' + names[i] + ']';
	};
}

if (typeof module == 'object' && module.exports) {
	module.exports = Util;
}
/** ignored by jsdoc **/
else {
	return Util;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(515);
var Events = __webpack_require__(561);
/** 
      @constructor 
      @mixes Events
      */
var Base = function() {}

Util.mix(Base.prototype, Events);

Util.mix(Base.prototype, {
	/**
	 * @memberof Base
	 * @param  {object} plugin plug a plugin
	 */
	plug: function(plugin) {
		var self = this;
		if (!plugin || !plugin.pluginId) return;
		if (!self.__plugins) {
			self.__plugins = [];
		}
		var __plugin = self.getPlugin(plugin.pluginId);
		__plugin && self.unplug(plugin.pluginId);
		plugin.pluginInitializer(self);
		self.__plugins.push(plugin);
		return self;
	},
	/**
	 * @memberof Base
	 * @param  {object|string} plugin unplug a plugin by pluginId or plugin instance
	 */
	unplug: function(plugin) {
		var self = this;
		if (!plugin || !self.__plugins) return;
		var _plugin = typeof plugin == "string" ? self.getPlugin(plugin) : plugin;
		_plugin.pluginDestructor(self);
		for (var i = 0, l = self.__plugins.length;i < l;i++) {
			if (self.__plugins[i] == _plugin) {
				return self.__plugins.splice(i, 1);
			}
		}
	},
	/**
	 * @memberof Base
	 * @param  {object|string} plugin get plugin by pluginId
	 */
	getPlugin: function(pluginId) {
		var self = this;
		var plugins = [];
		if(!self.__plugins) return;
		for (var i = 0, l = self.__plugins.length;i < l;i++) {
			if (self.__plugins[i] && self.__plugins[i].pluginId == pluginId) {
				plugins.push(self.__plugins[i])
			}
		}
		return plugins.length > 1 ? plugins : plugins[0] || null;
	}
});

if (typeof module == 'object' && module.exports) {
	module.exports = Base;
}
/** ignored by jsdoc **/
else {
	return Base;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(515);
var Timer = __webpack_require__(541);
var Easing = __webpack_require__(540);
var Base = __webpack_require__(517);
//transform
var vendorTransform = Util.prefixStyle("transform");
//transition webkitTransition MozTransition OTransition msTtransition
var vendorTransition = Util.prefixStyle("transition");

var vendorTransitionDuration = Util.prefixStyle("transitionDuration");

var vendorTransformOrigin = Util.prefixStyle("transformOrigin");

var vendorTransitionEnd = Util.vendor ? Util.prefixStyle("transitionEnd") : "transitionend";

var vendorTransformStr = Util.vendor ? ["-", Util.vendor, "-transform"].join("") : "transform";

var translateTpl = 'translateX({translateX}px) translateY({translateY}px) translateZ(0)';
//limit attrs
var animAttrs = {
	'transform': true,
	'opacity': true,
	'scrollTop': true,
	'scrollLeft': true
};

function myParse(v) {
	return Math.round(parseFloat(v) * 1e5) / 1e5;
}

function defaultDecompose() {
	return {
		translateX: 0,
		translateY: 0,
		rotate: 0,
		skewX: 0,
		skewY: 0,
		scaleX: 1,
		scaleY: 1
	};
}

function toMatrixArray(matrix) {
	matrix = matrix.split(/,/);
	matrix = Array.prototype.map.call(matrix, function(v) {
		return myParse(v);
	});
	return matrix;
}

function decomposeMatrix(matrix) {
	matrix = toMatrixArray(matrix);
	var scaleX, scaleY, skew,
		A = matrix[0],
		B = matrix[1],
		C = matrix[2],
		D = matrix[3];

	// Make sure matrix is not singular
	if (A * D - B * C) {
		scaleX = Math.sqrt(A * A + B * B);
		skew = (A * C + B * D) / (A * D - C * B);
		scaleY = (A * D - B * C) / scaleX;
		// step (6)
		if (A * D < B * C) {
			skew = -skew;
			scaleX = -scaleX;
		}
		// matrix is singular and cannot be interpolated
	} else {
		// In this case the elem shouldn't be rendered, hence scale == 0
		scaleX = scaleY = skew = 0;
	}

	// The recomposition order is very important
	// see http://hg.mozilla.org/mozilla-central/file/7cb3e9795d04/layout/style/nsStyleAnimation.cpp#l971
	return {
		translateX: myParse(matrix[4]),
		translateY: myParse(matrix[5]),
		rotate: myParse(Math.atan2(B, A) * 180 / Math.PI),
		skewX: myParse(Math.atan(skew) * 180 / Math.PI),
		skewY: 0,
		scaleX: myParse(scaleX),
		scaleY: myParse(scaleY)
	};
}

function getTransformInfo(transform) {
	transform = transform.split(')');
	var trim = Util.trim,
		i = -1,
		l = transform.length - 1,
		split, prop, val,
		ret = defaultDecompose();

	// Loop through the transform properties, parse and multiply them
	while (++i < l) {
		split = transform[i].split('(');
		prop = trim(split[0]);
		val = split[1];
		switch (prop) {
			case 'translateX':
			case 'translateY':
			case 'scaleX':
			case 'scaleY':
				ret[prop] = myParse(val);
				break;
			case 'translate':
			case 'translate3d':
				val = val.split(',');
				ret.translateX = myParse(val[0]);
				ret.translateY = myParse(val[1] || 0);
				break;
			case 'scale':
				val = val.split(',');
				ret.scaleX = myParse(val[0]);
				ret.scaleY = myParse(val[1] || val[0]);
				break;
			case 'matrix':
				return decomposeMatrix(val);
		}
	}

	return ret;
}

/**
 * animate function
 * @constructor
 * @param {HTMLElement} el element to animate
 * @param {Object} config config for animate
 * @param {Object} config.css
 * @param {Number} config.duration
 * @param {String} config.easing
 * @extends {Base}
 */
function Animate(el, cfg) {
	if (!el || !cfg || !cfg.css) return;
	var self = this;
	self.cfg = cfg;
	self.el = el;
	var duration = cfg.duration || 0,
		easing = cfg.easing || "ease",
		delay = cfg.delay || 0;
	//trigger run
	if (cfg.run) {
		//frame animate
		self.timer = self.timer || new Timer({
			duration: Math.round(duration),
			easing: easing,
		});
		self.timer.on("run", cfg.run);
	}
	self._bindEvt();
	return self;
}

function computeTransform(prevTransform, destTransform) {
	var transform = getTransformInfo(prevTransform);
	var dest = getTransformInfo(destTransform);
	var trans = {};
	for (var i in dest) {
		trans[i] = {
			prevVal: transform[i],
			newVal: dest[i]
		}
	}
	return trans;
}

//for scroll only
function setStyle(el, styleName, prevVal, newVal, percent) {
	prevVal = isNaN(Number(prevVal)) ? 0 : Number(prevVal);
	var curVal = ((newVal - prevVal) * percent + prevVal);
	css(el, styleName, curVal);
}

function css(el, styleName, val) {
	switch (styleName) {
		case "scrollTop":
		case "scrollLeft":
			el[styleName] = val;
			break;
		case "transform":
			el.style[vendorTransform] = val;
		case "opacity":
			el.style[styleName] = val;
			break;

	}
}

Util.extend(Animate, Base, {
	/**
	 * to start the animation
	 * @memberof Animate
	 * @return {Animate}
	 */
	run: function() {
		var self = this;
		var cfg = self.cfg,
			el = self.el,
			duration = cfg.duration || 0,
			easing = cfg.easing || "ease",
			delay = cfg.delay || 0;
		self.__isTransitionEnd = false;
		clearTimeout(self.__itv)
		self.timer && self.timer.run();
		if (duration <= Timer.MIN_DURATION) {
			for (var i in cfg.css) {
				css(el, i, cfg.css[i]);
			}
			self.stop()
			self.__handlers.stop.call(self);
			return;
		}

		if(Util.isBadAndroid()){
			//use frame animate on bad android device
			cfg.useTransition = false;
		}

		if (cfg.useTransition) {
			//transition
			el.style[vendorTransition] = Util.substitute('all {duration}ms {easing} {delay}ms', {
				duration: Math.round(duration),
				easing: Easing.format(easing),
				delay: delay
			});
			for (var i in cfg.css) {
				//set css
				css(el, i, cfg.css[i]);
			}
			self.__itv = setTimeout(function() {
				if (!self.__isTransitionEnd) {
					self.__isTransitionEnd = true;
					self.trigger("transitionend");
				}
			}, Number(duration) + 60);
		} else {
			self.computeStyle = self.computeStyle || window.getComputedStyle(el);
			//transform
			if (cfg.css.transform && self.timer) {
				var transmap = self.transmap = computeTransform(self.computeStyle[vendorTransform], cfg.css.transform);
				self.timer.off("run", self.__handlers.transRun);
				self.timer.on("run", self.__handlers.transRun, self);
				self.timer.off("end",self.__handlers.transRun);
				self.timer.on("end", self.__handlers.transRun, self);
			}
		}
		return self;
	},
	_transitionEndHandler: function(e) {
		var self = this;
		self.stop();
		self.__handlers.stop.call(self);
	},
	__handlers: {
		transRun: function(e) {
			var self = this;
			var transmap = self.transmap;
			var el = self.el;
			var newTrans = {};
			for (var i in transmap) {
				newTrans[i] = (transmap[i].newVal - transmap[i].prevVal) * e.percent + transmap[i].prevVal
			}
			var ret = Util.substitute(translateTpl + ' ' +
				'scale({scaleX},{scaleY})', newTrans);
			el.style[vendorTransform] = ret;
		},
		stop: function(e) {
			var self = this;
			var cfg = self.cfg;
			cfg.end && cfg.end({
				percent: 1
			});
		}
	},
	_bindEvt: function() {
		var self = this;
		var cfg = self.cfg;
		var el = self.el;
		self.el.addEventListener(vendorTransitionEnd, function(e) {
			self.__isTransitionEnd = true;
			if (e.target !== e.currentTarget) return;
			self.trigger("transitionend", e);
		})
		self.on("transitionend", self._transitionEndHandler, self);
		var cssRun = function(e) {
			self.computeStyle = self.computeStyle || window.getComputedStyle(el);
			for (var i in cfg.css) {
				if (!/transform/.test(i)) {
					setStyle(self.el, i, self.computeStyle[i], cfg.css[i], e.percent);
				}
			}
		};
		self.timer && self.timer.on("run", cssRun);
		self.timer && self.timer.on("stop", self.__handlers.stop, self);
	},
	/**
	 * to stop the animation
	 * @memberof Animate
	 * @return {Animate}
	 */
	stop: function() {
		var self = this;
		if (self.cfg.useTransition && self.cfg.duration > Timer.MIN_DURATION) {
			var computeStyle = window.getComputedStyle(this.el);
			for (var i in self.cfg.css) {
				if (animAttrs[i]) {
					var value = /transform/.test(i) ? computeStyle[vendorTransform] : computeStyle[i];
					css(self.el, i, Util.substitute(translateTpl + ' ' + 'scale({scaleX},{scaleY})', getTransformInfo(value)));
				}
			}
			self.el.style[vendorTransition] = "none";
		}
		self.timer && self.timer.stop() && self.timer.reset();
		self.computeStyle = null;
		return self;
	},
	/**
	 * to reset the animation to a new state
	 * @memberof Animate
	 * @param {object} cfg cfg for new animation
	 * @return {Animate}
	 */
	reset: function(cfg) {
		var self = this;
		self.computeStyle = null;
		Util.mix(self.cfg, cfg);
		this.timer && self.timer.reset({
			duration: Math.round(self.cfg.duration),
			easing: self.cfg.easing
		});
		return self;
	}
});


if (typeof module == 'object' && module.exports) {
	module.exports = Animate;
}
/** ignored by jsdoc **/
else {
	return Animate;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge]
 * @returns {Object} dest
 */
function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
function merge(dest, src) {
    return extend(dest, src, true);
}

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        extend(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument;
    return (doc.defaultView || doc.parentWindow);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;
    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = last.deltaX - input.deltaX;
        var deltaY = last.deltaY - input.deltaY;
        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }
    
    if (abs(x) >= abs(y)) {
        return x > 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y > 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) - getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.allow = true; // used by Input.TouchMouse to disable mouse events
    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down, and mouse events are allowed (see the TouchMouse input)
        if (!this.pressed || !this.allow) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */
function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        // when we're in a touch event, so  block all upcoming mouse events
        // most mobile browser also emit mouseevents, right after touchstart
        if (isTouch) {
            this.mouse.allow = false;
        } else if (isMouse && !this.mouse.allow) {
            return;
        }

        // reset the allowMouse when we're done
        if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
            this.mouse.allow = true;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        // not needed with native support for the touchAction property
        if (NATIVE_TOUCH_ACTION) {
            return;
        }

        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // pan-x and pan-y can be combined
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_PAN_X + ' ' + TOUCH_ACTION_PAN_Y;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.id = uniqueId();

    this.manager = null;
    this.options = merge(options || {}, this.defaults);

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        extend(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(withState) {
            self.manager.emit(self.options.event + (withState ? stateStr(state) : ''), input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(true);
        }

        emit(); // simple 'eventName' events

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(true);
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = extend({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {
        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this._super.emit.call(this, input);
    },
    reset:function(){
        
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        this._super.emit.call(this, input);
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            this.manager.emit(this.options.event + inOut, input);
        }
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 500, // minimal time of the pointer to be pressed
        threshold: 5 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.65,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.velocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.velocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.velocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.direction &&
            input.distance > this.options.threshold &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.direction);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 10, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;
        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }
        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;
            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED ) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create an manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.4';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, { enable: false }],
        [PinchRecognizer, { enable: false }, ['rotate']],
        [SwipeRecognizer,{ direction: DIRECTION_HORIZONTAL }],
        [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    options = options || {};

    this.options = merge(options, Hammer.defaults);
    this.options.inputTarget = this.options.inputTarget || element;
    this.handlers = {};
    this.session = {};
    this.recognizers = [];

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        extend(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        var recognizers = this.recognizers;
        recognizer = this.get(recognizer);
        recognizers.splice(inArray(recognizers, recognizer), 1);

        this.touchAction.update();
        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    each(manager.options.cssProps, function(value, name) {
        element.style[prefixed(element.style, name)] = add ? value : '';
    });
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

extend(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

if (typeof module == 'object' && module.exports) {
    module.exports = Hammer;
}
/** ignored by jsdoc **/
else {
    return Hammer;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(515),
    Base = __webpack_require__(517),
    Animate = __webpack_require__(521),
    Boundry = __webpack_require__(556),
    Hammer = __webpack_require__(536),
    Sticky = __webpack_require__(560),
    Fixed = __webpack_require__(558);
// boundry checked bounce effect
var BOUNDRY_CHECK_DURATION = 500;
var BOUNDRY_CHECK_EASING = "ease";
var BOUNDRY_CHECK_ACCELERATION = 0.1;
/** 
 * @constructor
 * @param {object} cfg config for scroll
 * @param {number} cfg.SCROLL_ACCELERATION  acceleration for scroll, min value make the scrolling smoothly
 * @param {number} cfg.BOUNDRY_CHECK_DURATION duration for boundry bounce
 * @param {number} cfg.BOUNDRY_CHECK_EASING easing for boundry bounce
 * @param {number} cfg.BOUNDRY_CHECK_ACCELERATION acceleration for boundry bounce
 * @param {boolean} cfg.lockX just like overflow-x:hidden
 * @param {boolean} cfg.lockY just like overflow-y:hidden
 * @param {boolean} cfg.scrollbarX config if the scrollbar-x is visible
 * @param {boolean} cfg.scrollbarY config if the scrollbar-y is visible
 * @param {boolean} cfg.useTransition config if use css3 transition or raf for scroll animation
 * @param {boolean} cfg.useOriginScroll config if use simulate or origin scroll
 * @param {boolean} cfg.bounce config if use has the bounce effect when scrolling outside of the boundry
 * @param {boolean} cfg.boundryCheck config if scrolling inside of the boundry
 * @param {boolean} cfg.preventDefault prevent touchstart
 * @param {boolean} cfg.preventTouchMove prevent touchmove
 * @param {string|HTMLElement}  cfg.container config for scroller's container which default value is ".xs-container"
 * @param {string|HTMLElement}  cfg.content config for scroller's content which default value is ".xs-content"
 * @param {object}  cfg.indicatorInsets  config scrollbars position {top: number, left: number, bottom: number, right: number}
 * @param {string}  cfg.stickyElements config for sticky-positioned elements
 * @param {string}  cfg.fixedElements config for fixed-positioned elements
 * @param {string}  cfg.touchAction config for touchAction of the scroller
 * @extends XScroll
 * @example
 * var xscroll = new XScroll({
 *    renderTo:"#scroll",
 *    lockX:false,
 *    scrollbarX:true
 * });
 * xscroll.render();
 */
function XScroll(cfg) {
    XScroll.superclass.constructor.call(this);
    this.userConfig = cfg;
    this.init();
}

Util.extend(XScroll, Base, {
    /**
     * version
     * @memberof XScroll
     * @type {string}
     */
    version: "3.0.13",
    /**
     * init scroll
     * @memberof XScroll
     * @return {XScroll}
     */
    init: function() {
        var self = this;
        var defaultCfg = {
            preventDefault: true,
            bounce: true,
            boundryCheck: true,
            useTransition: true,
            gpuAcceleration: true,
            BOUNDRY_CHECK_EASING: BOUNDRY_CHECK_EASING,
            BOUNDRY_CHECK_DURATION: BOUNDRY_CHECK_DURATION,
            BOUNDRY_CHECK_ACCELERATION: BOUNDRY_CHECK_ACCELERATION,
            useOriginScroll: false,
            zoomType: "y",
            indicatorInsets: {
                top: 3,
                bottom: 3,
                left: 3,
                right: 3,
                width: 3,
                spacing: 5
            },
            container: ".xs-container",
            content: ".xs-content",
            stickyElements: ".xs-sticky",
            fixedElements: ".xs-fixed",
            touchAction: "auto"
        };
        //generate guid
        self.guid = Util.guid();
        self.renderTo = Util.getNode(self.userConfig.renderTo);
        //timer for animtion
        self.__timers = {};
        //config attributes on element
        var elCfg = JSON.parse(self.renderTo.getAttribute('xs-cfg'));
        var userConfig = self.userConfig = Util.mix(Util.mix(defaultCfg, elCfg), self.userConfig);
        self.container = Util.getNode(userConfig.container,self.renderTo);
        self.content = Util.getNode(userConfig.content,self.renderTo);
        self.boundry = new Boundry();
        self.boundry.refresh();
        return self;
    },
    /**
     * destroy scroll
     * @memberof XScroll
     * @return {XScroll}
     */
    destroy: function() {
        var self = this;
        self.mc && self.mc.destroy();
        self.sticky && self.sticky.destroy();
        self.fixed && self.fixed.destroy();
    },
    _initContainer: function() {},
    /**
     * @memberof XScroll
     * @return {XScroll}
     */
    enableGPUAcceleration: function() {
        this.userConfig.gpuAcceleration = true;
        return this;
    },
    /**
     * @memberof XScroll
     * @return {XScroll}
     */
    disableGPUAcceleration: function() {
        this.userConfig.gpuAcceleration = false;
        return this;
    },
    /**
     * get scroll offset
     * @memberof XScroll
     * @return {Object} {scrollTop:scrollTop,scrollLeft:scrollLeft}
     */
    getScrollPos: function() {
        var self = this;
        return {
            scrollLeft: self.getScrollLeft(),
            scrollTop: self.getScrollTop()
        }
    },
    /**
     * get scroll top value
     * @memberof XScroll
     * @return {number} scrollTop
     */
    getScrollTop: function() {},
    /**
     * get scroll left value
     * @memberof XScroll
     * @return {number} scrollLeft
     */
    getScrollLeft: function() {},
    /**
     * scroll absolute to the destination
     * @memberof XScroll
     * @param scrollLeft {number} scrollLeft
     * @param scrollTop {number} scrollTop
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/
    scrollTo: function(scrollLeft, scrollTop, duration, easing, callback) {
        var self = this;
        var scrollLeft = (undefined === scrollLeft || isNaN(scrollLeft)) ? -self.getScrollLeft() : scrollLeft;
        var scrollTop = (undefined === scrollTop || isNaN(scrollTop)) ? -self.getScrollTop() : scrollTop;
        self.scrollLeft(scrollLeft, duration, easing, callback);
        self.scrollTop(scrollTop, duration, easing, callback);
    },
    /**
     * scroll relative to the destination
     * @memberof XScroll
     * @param scrollLeft {number} scrollLeft
     * @param scrollTop {number} scrollTop
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/
    scrollBy: function(scrollLeft, scrollTop, duration, easing, callback) {
        this.scrollByX(scrollLeft, duration, easing, callback);
        this.scrollByY(scrollTop, duration, easing, callback);
    },
    /**
     * horizontal scroll relative to the destination
     * @memberof XScroll
     * @param scrollLeft {number} scrollLeft
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/
    scrollLeftBy: function(scrollLeft, duration, easing, callback) {
        this.scrollLeft(Number(scrollLeft) + Number(this.getScrollLeft()), duration, easing, callback);
    },
    /**
     * vertical scroll relative to the destination
     * @memberof XScroll
     * @param scrollTop {number} scrollTop
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/
    scrollTopBy: function(scrollTop, duration, easing, callback) {
        this.scrollTop(Number(scrollTop) + Number(this.getScrollTop()), duration, easing, callback);
    },
    /**
     * horizontal scroll absolute to the destination
     * @memberof XScroll
     * @param scrollLeft {number} scrollLeft
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/
    scrollLeft: function(scrollLeft, duration, easing, callback) {},
    /**
     * vertical scroll absolute to the destination
     * @memberof XScroll
     * @param scrollTop {number} scrollTop
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/
    scrollTop: function(scrollTop, duration, easing, callback) {},
    /**
     * reset the boundry size
     * @memberof XScroll
     * @return {XScroll}
     **/
    resetSize: function() {
        var self = this;
        if(!self.container || !self.content) return;
        var userConfig = self.userConfig;
        var renderToStyle = getComputedStyle(self.renderTo);
        var width = self.width = (userConfig.width || self.renderTo.offsetWidth) - Util.px2Num(renderToStyle['padding-left']) - Util.px2Num(renderToStyle['padding-right']);
        var height = self.height = (userConfig.height || self.renderTo.offsetHeight) - Util.px2Num(renderToStyle['padding-top']) - Util.px2Num(renderToStyle['padding-bottom']);;
        var containerWidth = userConfig.containerWidth || self.content.offsetWidth;
        var containerHeight = userConfig.containerHeight || self.content.offsetHeight;
        self.containerWidth = containerWidth < self.width ? self.width : containerWidth;
        self.containerHeight = containerHeight < self.height ? self.height : containerHeight;
        self.boundry.refresh({
            width: self.width,
            height: self.height
        });
        return self;
    },
    /**
     * render scroll
     * @memberof XScroll
     * @return {XScroll}
     **/
    render: function() {
        var self = this;
        self.resetSize();
        //init stickies
        self.initSticky();
        //init fixed elements
        self.initFixed();

        self.trigger("afterrender", {
            type: "afterrender"
        });
        self._bindEvt();
        //update touch-action 
        self.initTouchAction();
        return self;
    },
    /**
     * init touch action
     * @memberof XScroll
     * @return {XScroll}
     */
    initTouchAction: function() {
        var self = this;
        self.mc.set({
            touchAction: self.userConfig.touchAction
        });
        return self;
    },
    initFixed: function() {
        var self = this,
            userConfig = self.userConfig;
        self.fixed = self.fixed || new Fixed({
            fixedElements:userConfig.fixedElements,
            xscroll:self,
            fixedRenderTo:userConfig.fixedRenderTo
        });
        self.fixed.render();
        self.resetSize();
        return self;
    },
    initSticky:function(){
        var self = this,userConfig = self.userConfig;
        var sticky = self.sticky = self.sticky || new Sticky({
            xscroll:self,
            zoomType:userConfig.zoomType,
            stickyRenderTo:userConfig.stickyRenderTo
        });
        sticky.render();
    },
    /**
     * bounce to the boundry vertical and horizontal
     * @memberof XScroll
     * @return {XScroll}
     **/
    boundryCheck: function() {
        return this;
    },
    /**
     * bounce to the boundry horizontal
     * @memberof XScroll
     * @return {XScroll}
     **/
    boundryCheckX: function() {
        return this;
    },
    /**
     * bounce to the boundry vertical
     * @memberof XScroll
     * @return {XScroll}
     **/
    boundryCheckY: function() {
        return this;
    },
    _bindEvt: function() {
        var self = this;
        if (self.___isEvtBind) return;
        self.___isEvtBind = true;
        var mc = self.mc = new Hammer.Manager(self.renderTo);
        var tap = new Hammer.Tap();
        var pan = new Hammer.Pan();
        var pinch = new Hammer.Pinch();
        mc.add([tap, pan]);
        //trigger all events 
        self.mc.on("panstart pan panend pancancel pinchstart pinchmove pinchend pinchcancel pinchin pinchout", function(e) {
            self.trigger(e.type, e);
        });
        //trigger touch events
        var touchEvents = ['touchstart', 'touchmove', 'touchend', 'touchcancel','mousedown'];
        for (var i = 0, l = touchEvents.length; i < l; i++) {
            self.renderTo.addEventListener(touchEvents[i], function(e) {
                self.trigger(e.type, e);
            });
        }
        self.mc.on("tap", function(e) {
            if (e.tapCount == 1) {
                e.type = "tap";
                self.trigger(e.type, e);
            } else if (e.tapCount == 2) {
                e.type = "doubletap";
                self.trigger("doubletap", e);
            }
        });
        return self;
    },
    _resetLockConfig: function() {},
    stop: function() {}
});

if (typeof module == 'object' && module.exports) {
    module.exports = XScroll;
}
/** ignored by jsdoc **/
else {
    return XScroll;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
//easing
var Easing = {
	"linear": [0, 0, 1, 1],
	"ease": [.25, .1, .25, 1],
	"ease-in":[.42,0,1,1],
	"ease-out": [0, 0, .58, 1],
	"ease-in-out": [.42, 0, .58, 1],
	"quadratic": [0.33, 0.66, 0.66, 1],
	"circular": [0.1, 0.57, 0.1, 1],
	"bounce": [.71, 1.35, .47, 1.41],
	format: function(easing) {
		if (!easing) return;
		if (typeof easing === "string" && this[easing]) {
			return this[easing] instanceof Array ? [" cubic-bezier(", this[easing], ") "].join("") : this[easing];
		}
		if (easing instanceof Array) {
			return [" cubic-bezier(", easing, ") "].join("");
		}
		return easing;
	}
}
if (typeof module == 'object' && module.exports) {
	module.exports = Easing;
}
/** ignored by jsdoc **/
 else {
	return Easing;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(515);
var Base = __webpack_require__(517);
var Easing = __webpack_require__(540);

var RAF = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function(callback) {
		window.setTimeout(callback, 1000 / 60);
	};

var vendors = ['webkit', 'moz', 'ms', 'o'];
var cancelRAF = window.cancelAnimationFrame;
if (!cancelRAF) {
	for (var i = 0; i < vendors.length; i++) {
		if (window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame']) {
			cancelRAF = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
		}
	}
}

cancelRAF = cancelRAF || window.clearTimeout;

function Bezier(x1, y1, x2, y2, epsilon) {
	var curveX = function(t) {
		var v = 1 - t;
		return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
	};

	var curveY = function(t) {
		var v = 1 - t;
		return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
	};

	var derivativeCurveX = function(t) {
		var v = 1 - t;
		return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (-t * t * t + 2 * v * t) * x2;
	};

	return function(t) {

		var x = t,
			t0, t1, t2, x2, d2, i;

		// First try a few iterations of Newton's method -- normally very fast.
		for (t2 = x, i = 0; i < 8; i++) {
			x2 = curveX(t2) - x;
			if (Math.abs(x2) < epsilon) return curveY(t2);
			d2 = derivativeCurveX(t2);
			if (Math.abs(d2) < 1e-6) break;
			t2 = t2 - x2 / d2;
		}

		t0 = 0, t1 = 1, t2 = x;

		if (t2 < t0) return curveY(t0);
		if (t2 > t1) return curveY(t1);

		// Fallback to the bisection method for reliability.
		while (t0 < t1) {
			x2 = curveX(t2);
			if (Math.abs(x2 - x) < epsilon) return curveY(t2);
			if (x > x2) t0 = t2;
			else t1 = t2;
			t2 = (t1 - t0) * .5 + t0;
		}

		// Failure
		return curveY(t2);

	};

};



function Timer(cfg) {
	var self = this;
	self.cfg = Util.mix({
		easing: "linear"
	}, cfg)
}

Timer.MIN_DURATION = 1;

Util.extend(Timer, Base, {
	reset: function(cfg) {
		var self = this;
		Util.mix(self.cfg, cfg);
		self.isfinished = false;
		self.percent = 0;
		self._stop = null;
	},
	run: function() {
		var self = this;
		var duration = self.cfg.duration;
		if (duration <= Timer.MIN_DURATION) {
			self.isfinished = true;
			self.trigger("run", {
				percent: 1
			});
			self.trigger("end", {
				percent: 1
			});
		}
		if (self.isfinished) return;
		self._hasFinishedPercent = self._stop && self._stop.percent || 0;
		self._stop = null;
		self.start = Date.now();
		self.percent = 0;
		// epsilon determines the precision of the solved values
		var epsilon = (1000 / 60 / duration) / 4;
		var b = Easing[self.cfg.easing];
		self.easingFn = Bezier(b[0], b[1], b[2], b[3], epsilon);
		self._run();
	},
	_run: function() {
		var self = this;
		cancelRAF(self._raf);
		self._raf = RAF(function() {
			self.now = Date.now();
			self.duration = self.now - self.start >= self.cfg.duration ? self.cfg.duration : self.now - self.start;
			self.progress = self.easingFn(self.duration / self.cfg.duration);
			self.percent = self.duration / self.cfg.duration + self._hasFinishedPercent;
			if (self.percent >= 1 || self._stop) {
				self.percent = self._stop && self._stop.percent ? self._stop.percent : 1;
				self.duration = self._stop && self._stop.duration ? self._stop.duration : self.duration;
				var param = {
					percent: self.percent
				};
				self.trigger("stop", param);
				if (self.percent >= 1) {
					self.isfinished = true;
					self.trigger("end", {
						percent: 1
					});
				}
				return;
			}
			self.trigger("run", {
				percent: self.progress,
				originPercent:self.percent
			});
			self._run();
		})
	},
	stop: function() {
		var self = this;
		self._stop = {
			percent: self.percent,
			now: self.now
		};
		cancelRAF(self._raf)
	}
});


if (typeof module == 'object' && module.exports) {
	module.exports = Timer;
}
/** ignored by jsdoc **/
else {
	return Timer;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_xscroll_build_cmd_xscroll_js__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_xscroll_build_cmd_xscroll_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vux_xscroll_build_cmd_xscroll_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_xscroll_build_cmd_plugins_pulldown__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_xscroll_build_cmd_plugins_pulldown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vux_xscroll_build_cmd_plugins_pulldown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_xscroll_build_cmd_plugins_pullup__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_xscroll_build_cmd_plugins_pullup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vux_xscroll_build_cmd_plugins_pullup__);
//
//
//
//
//
//
//
//
//
//






const pulldownDefaultConfig = () => ({
  content: 'Pull Down To Refresh',
  height: 60,
  autoRefresh: false,
  downContent: 'Pull Down To Refresh',
  upContent: 'Release To Refresh',
  loadingContent: 'Loading...',
  clsPrefix: 'xs-plugin-pulldown-'
});

const pullupDefaultConfig = () => ({
  content: 'Pull Up To Refresh',
  pullUpHeight: 60,
  height: 40,
  autoRefresh: false,
  downContent: 'Release To Refresh',
  upContent: 'Pull Up To Refresh',
  loadingContent: 'Loading...',
  clsPrefix: 'xs-plugin-pullup-'
});

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'scroller',
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          pulldownStatus: '',
          pullupStatus: ''
        };
      }
    },
    height: String,
    lockX: Boolean,
    lockY: Boolean,
    scrollbarX: Boolean,
    scrollbarY: Boolean,
    bounce: {
      type: Boolean,
      default: true
    },
    useOriginScroll: {
      type: Boolean,
      default: false
    },
    useTransition: {
      type: Boolean,
      default: true
    },
    preventDefault: {
      type: Boolean,
      default: false
    },
    stopPropagation: Boolean,
    boundryCheck: {
      type: Boolean,
      default: true
    },
    gpuAcceleration: {
      type: Boolean,
      default: true
    },
    usePulldown: {
      type: Boolean,
      default: false
    },
    usePullup: {
      type: Boolean,
      default: false
    },
    /**
    * refer to: http://xscroll.github.io/node_modules/xscroll/doc/PullDown.html
    */
    pulldownConfig: {
      type: Object,
      default() {
        return {};
      }
    },
    pullupConfig: {
      type: Object,
      default() {
        return {};
      }
    },
    enableHorizontalSwiping: {
      type: Boolean,
      default: false
    },
    scrollBottomOffset: {
      type: Number,
      default: 0
    }
  },
  methods: {
    reset(scrollPosition, duration, easing) {
      if (scrollPosition) {
        if (typeof scrollPosition.left !== 'undefined') {
          this._xscroll.scrollLeft(scrollPosition.left, duration, easing);
        }
        if (typeof scrollPosition.top !== 'undefined') {
          this._xscroll.scrollTop(scrollPosition.top, duration, easing);
        }
      }
      this._xscroll && this._xscroll.resetSize();
    },
    donePulldown() {
      this.pulldown.reset(() => {
        // repaint
        this.reset();
      });
      this.currentValue.pulldownStatus = 'default';
    },
    disablePullup() {
      // this._xscroll.unplug(this.pullup)
      this.pullup.stop();
      this.currentValue.pullupStatus = 'disabled';
    },
    enablePullup() {
      this.currentValue.pullupStatus = 'default';
      this.pullup.restart();
    },
    donePullup() {
      this.pullup.complete();
      this.reset();
      this.currentValue.pullupStatus = 'default';
    },
    getStyles() {
      let height = this.height;
      if (!this.height && this.$el && !this.$el.style.height && this.lockX) {
        height = `${document.documentElement.clientHeight}px`;
        this.reset();
      }

      if (this.height && this.height.indexOf('-') === 0) {
        height = `${document.documentElement.clientHeight + parseInt(this.height)}px`;
      }
      this.styles = {
        height: `${height}`
      };
    }
  },
  created() {
    if (!this.value) {
      this.currentValue = {
        pulldownStatus: '',
        pullupStatus: ''
      };
    } else {
      this.currentValue = this.value;
    }
    this.handleOrientationchange = () => {
      setTimeout(() => {
        this.reset();
      }, 100);
    };
  },
  data() {
    return {
      currentValue: {},
      styles: {}
    };
  },
  watch: {
    currentValue: {
      handler: function (val) {
        this.$emit('input', pure(val));
      },
      deep: true
    },
    height() {
      this.getStyles();
    },
    value: {
      handler: function (val) {
        if (val.pullupStatus === 'default' && this.currentValue.pullupStatus !== 'default') {
          this.donePullup();
        }
        if (val.pulldownStatus === 'default' && this.currentValue.pulldownStatus !== 'default') {
          this.donePulldown();
        }
        if (val.pullupStatus === 'disabled' && this.currentValue.pullupStatus !== 'disabled') {
          this.disablePullup();
        }
        if (val.pullupStatus === 'enabled' && this.currentValue.pullupStatus === 'disabled') {
          this.enablePullup();
        }
      },
      deep: true
    }
  },
  mounted() {
    this.uuid = Math.random().toString(36).substring(3, 8);
    this.$nextTick(() => {
      this.$el.setAttribute('id', `vux-scroller-${this.uuid}`);
      let content = null;
      if (this.$slots.default) {
        content = this.$slots.default[0].elm;
      }
      if (!content) {
        throw new Error('no content is found');
      }

      this._xscroll = new __WEBPACK_IMPORTED_MODULE_1_vux_xscroll_build_cmd_xscroll_js___default.a({
        renderTo: `#vux-scroller-${this.uuid}`,
        lockX: this.lockX,
        lockY: this.lockY,
        scrollbarX: this.scrollbarX,
        scrollbarY: this.scrollbarY,
        content: content,
        bounce: this.bounce,
        useOriginScroll: this.useOriginScroll,
        useTransition: this.useTransition,
        preventDefault: this.preventDefault,
        boundryCheck: this.boundryCheck,
        gpuAcceleration: this.gpuAcceleration,
        stopPropagation: this.stopPropagation
      });

      this._xscroll.on('scroll', () => {
        if (this._xscroll) {
          const top = this._xscroll.getScrollTop();
          this.$emit('on-scroll', {
            top: top,
            left: this._xscroll.getScrollLeft()
          });
          const containerHeight = this._xscroll.containerHeight;
          const scrollHeight = this._xscroll.height;
          if (top >= containerHeight - scrollHeight - this.scrollBottomOffset) {
            this.$emit('on-scroll-bottom');
          }
        }
      });

      if (this.usePulldown) {
        // if use slot=pulldown
        let container = this.$slots.pulldown;
        let config = __WEBPACK_IMPORTED_MODULE_0_object_assign___default()(pulldownDefaultConfig(), this.pulldownConfig);
        if (container) {
          config.container = container[0].elm;
        }
        this.pulldown = new __WEBPACK_IMPORTED_MODULE_2_vux_xscroll_build_cmd_plugins_pulldown___default.a(config);
        this._xscroll.plug(this.pulldown);
        this.pulldown.on('loading', e => {
          this.$emit('on-pulldown-loading', this.uuid);
        });
        this.pulldown.on('statuschange', val => {
          this.currentValue.pulldownStatus = val.newVal;
        });
      }

      if (this.usePullup) {
        // if use slot=pullup
        let container = this.$slots.pullup;
        let config = __WEBPACK_IMPORTED_MODULE_0_object_assign___default()(pullupDefaultConfig(), this.pullupConfig);

        if (container) {
          config.container = container[0].elm;
        }
        this.pullup = new __WEBPACK_IMPORTED_MODULE_3_vux_xscroll_build_cmd_plugins_pullup___default.a(config);
        this._xscroll.plug(this.pullup);
        this.pullup.on('loading', e => {
          this.$emit('on-pullup-loading', this.uuid);
        });
        this.pullup.on('statuschange', val => {
          this.currentValue.pullupStatus = val.newVal;
        });
      }

      if (this.enableHorizontalSwiping) {
        this._xscroll.on('panstart', e => {
          if (e.direction === 2 || e.direction === 4) {
            e.preventDefault();
            if (this.scrollbarY) {
              this._xscroll.userConfig.scrollbarY = false;
            }
            this._xscroll.userConfig.lockY = true;
          }
        });
        this._xscroll.on('panend', () => {
          if (this.scrollbarY) {
            this._xscroll.userConfig.scrollbarY = true;
          }
          this._xscroll.userConfig.lockY = false;
        });
      }

      this._xscroll.render();
      window.addEventListener('orientationchange', this.handleOrientationchange, false);
    });
    this.getStyles();
  },
  updated() {
    this.reset();
  },
  beforeDestroy() {
    if (this.pullup) {
      this._xscroll.unplug(this.pullup);
      this.pullup.pluginDestructor();
    }
    if (this.pulldown) {
      this._xscroll.unplug(this.pulldown);
      this.pulldown.pluginDestructor();
    }
    window.removeEventListener('orientationchange', this.handleOrientationchange, false);
    this._xscroll.destroy();
    this._xscroll = null;
  }
});

function pure(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/***/ }),

/***/ 551:
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

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(487)();
// imports


// module
exports.push([module.i, ".xs-plugin-pullup-container{text-align:center}", "", {"version":3,"sources":["F:/WXH5/node_modules/_vux@2.9.1@vux/src/components/scroller/index.vue"],"names":[],"mappings":"AACA,4BACE,iBAAmB,CACpB","file":"index.vue","sourcesContent":["\n.xs-plugin-pullup-container {\n  text-align: center;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(552);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(488)("6e9752d4", content, true);

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: (_vm.styles)
  }, [_c('div', {
    staticClass: "xs-container"
  }, [_vm._t("default"), _vm._v(" "), _vm._t("pulldown"), _vm._v(" "), _vm._t("pullup")], 2)])
},staticRenderFns: []}

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(553)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(550),
  /* template */
  __webpack_require__(554),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
 var Util = __webpack_require__(515);

 function Boundry(cfg) {
     this.cfg = Util.mix({
         width: 0,
         height: 0
     }, cfg)
     this.init();
 }
 Util.mix(Boundry.prototype, {
     init: function() {
         var self = this;
         self._xtop = 0;
         self._xright = 0;
         self._xleft = 0;
         self._xbottom = 0;
         self.refresh({
             width: self.cfg.width,
             height: self.cfg.height
         });
     },
     reset: function() {
         this.resetTop();
         this.resetLeft();
         this.resetBottom();
         this.resetRight();
         return this;
     },
     resetTop: function() {
         this._xtop = 0;
         this.refresh();
         return this;
     },
     resetLeft: function() {
         this._xleft = 0;
         this.refresh();
         return this;
     },
     resetBottom: function() {
         this._xbottom = 0;
         this.refresh();
         return this;
     },
     resetRight: function() {
         this._xright = 0;
         this.refresh();
         return this;
     },
     expandTop: function(top) {
         this._xtop = top;
         this.refresh();
         return this;
     },
     expandLeft: function(left) {
         this._xleft = left;
         this.refresh();
         return this;
     },
     expandRight: function(right) {
         this._xright = right;
         this.refresh();
         return this;
     },
     expandBottom: function(bottom) {
         this._xbottom = bottom;
         this.refresh();
         return this;
     },
     refresh: function(cfg) {
         Util.mix(this.cfg, cfg);
         this.top = this._xtop;
         this.left = this._xleft;
         this.bottom = (cfg && cfg.height || this.cfg.height || 0) - this._xbottom;
         this.right = (cfg && cfg.width || this.cfg.width || 0) - this._xright;
         this.width = this.right - this.left > 0 ? this.right - this.left : 0;
         this.height = this.bottom - this.top > 0 ? this.bottom - this.top : 0;
         return this;
     }
 });


 if (typeof module == 'object' && module.exports) {
     module.exports = Boundry;
 }
 /** ignored by jsdoc **/
 else{
    return Boundry;
 }
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
/*
	wrapped scroll controller
*/
"use strict";
var Util = __webpack_require__(515),
	Base = __webpack_require__(517);

var Controller = function(cfg) {
	Controller.superclass.constructor.call(this, cfg);
	this.userConfig = Util.mix({}, cfg);
	this.init();
}

Util.extend(Controller, Base, {
	init: function() {
		var self = this;
		self.xscroll = self.userConfig.xscroll;
	},
	add: function(scroll, cfg) {
		var self = this;
		cfg = Util.extend({
			captureBounce: false,
			stopPropagation: true
		}, cfg)
		if (!self.__scrolls) {
			self.__scrolls = {};
		}
		if (scroll.guid && !self.__scrolls[scroll.guid]) {
			scroll.parentscroll = self.xscroll;
			self._bind(scroll);
			return self.__scrolls[scroll.guid] = scroll;
		}
		return;
	},
	remove: function(scroll) {
		var self = this;
		if (!scroll || !scroll.guid) return;
		var subscroll = self.__scrolls[scroll.guid];
		if (subscroll) {
			subscroll.parentscroll = null;
			self._unbind(scroll);
			subscroll = null;
		}
	},
	get: function(guid) {
		if (guid) {
			return this.__scrolls[guid];
		}
		return this.__scrolls;
	},

	_unbind: function(sub) {

	},

	_bind: function(sub) {
		var self = this,
			xscroll = self.xscroll;
		xscroll.renderTo.addEventListener("touchstart", function() {
			xscroll._resetLockConfig();
		});
		sub.renderTo.addEventListener("touchstart", function() {
			sub._resetLockConfig();
		});
		xscroll.on("panend", xscroll._resetLockConfig);
		sub.on("panend", sub._resetLockConfig);
		sub.on("panstart", function(e) {
			//vertical scroll enabled
			if (!sub.userConfig.lockY && !xscroll.userConfig.lockY) {
				//outside of boundry
				if (sub.isBoundryOut()) {
					xscroll.userConfig.lockY = true;
					return;
				}
				if (e.direction == 16 && sub.getBoundryOutTop() >= 0) {
					sub.userConfig.lockY = true;
				} else if (e.direction == 8 && sub.getBoundryOutTop() >= 0 && sub.getBoundryOutBottom() < 0) {
					xscroll.userConfig.lockY = true;
				}
				if (e.direction == 8 && sub.getBoundryOutBottom() >= 0) {
					sub.userConfig.lockY = true;
				} else if (e.direction == 16 && sub.getBoundryOutBottom() >= 0 && sub.getBoundryOutTop() < 0) {
					xscroll.userConfig.lockY = true;
				}
				if (sub.getBoundryOutTop() < 0 && sub.getBoundryOutBottom() < 0) {
					xscroll.userConfig.lockY = true;
				}
			}
			//horizontal scroll enabled
			if (!sub.userConfig.lockX && !xscroll.userConfig.lockX) {
				if (sub.isBoundryOut()) {
					xscroll.userConfig.lockX = true;
					return;
				}
				if (e.direction == 4 && sub.getBoundryOutLeft() >= 0) {
					sub.userConfig.lockX = true;
				} else if (e.direction == 2 && sub.getBoundryOutLeft() >= 0 && sub.getBoundryOutRight() < 0) {
					xscroll.userConfig.lockX = true;
				}
				if (e.direction == 2 && sub.getBoundryOutRight() >= 0) {
					sub.userConfig.lockX = true;
				} else if (e.direction == 4 && sub.getBoundryOutRight() >= 0 && sub.getBoundryOutLeft() < 0) {
					xscroll.userConfig.lockX = true;
				}
				if (sub.getBoundryOutLeft() < 0 && sub.getBoundryOutRight() < 0) {
					xscroll.userConfig.lockX = true;
				}
			}

			if (!sub.userConfig.lockX && xscroll.userConfig.lockX) {
				//pan x
				if (e.direction == 2 || e.direction == 4) {
					xscroll.userConfig.lockY = true;
				} else {
					sub.userConfig.lockX = true;
				}
			}

			if (!sub.userConfig.lockY && xscroll.userConfig.lockY) {
				//pan y
				if (e.direction == 8 || e.direction == 16) {
					xscroll.userConfig.lockX = true;
				} else {
					sub.userConfig.lockY = true;
				}
			}
		});
	}
});

if (typeof module == 'object' && module.exports) {
	module.exports = Controller;
}
/** ignored by jsdoc **/
else {
	return Controller;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(515);
var Base = __webpack_require__(517);
var transform = Util.prefixStyle("transform");

var Fixed = function(cfg) {
  Fixed.superclass.constructor.call(this, cfg);
  this.userConfig = Util.mix({
    fixedRenderTo: undefined,
    fixedElements: ".xs-fixed",
    prefix: "xs-fixed-container",
    zoomType: "y"
  }, cfg);
  this.init();
}

Util.extend(Fixed, Base, {
  fixedElements: [],
  init: function() {
    var self = this,
      userConfig = self.userConfig,
      xscroll = self.xscroll = userConfig.xscroll,
      xscrollConfig = self.xscrollConfig = xscroll.userConfig;
    self.isY = !!(userConfig.zoomType == "y");
    self._ = self.isY ? {
      top: "top",
      height: "height",
      width: "width",
      offsetTop:"offsetTop"
    } : {
      top: "left",
      height: "width",
      width: "height",
      offsetTop:"offsetLeft"
    };
    self.fixedRenderTo = Util.getNode(userConfig.fixedRenderTo);
    return self;
  },
  render: function() {
    var self = this;
    var xscroll = self.xscroll;
    self.infinite = xscroll.getPlugin("infinite");
    if (!self.fixedRenderTo) {
      self.fixedRenderTo = document.createElement('div');
      xscroll.renderTo.appendChild(self.fixedRenderTo);
    }
    Util.addClass(self.fixedRenderTo, self.userConfig.prefix);
    var originalFixedElements = self.originalFixedElements = self.getFixedElements();
    for (var i = 0, l = originalFixedElements.length; i < l; i++) {
      self.renderFixedElement(originalFixedElements[i], i,self.fixedRenderTo);
    }
    return self;
  },
  getFixedElements: function() {
    var self = this;
    var infinite = self.infinite;
    var userConfig = self.userConfig;
    if (infinite) {
      var els = [];
      for (var i in infinite.__serializedData) {
        var data = infinite.__serializedData[i];
        if (data && data.style && data.style.position == "fixed") {
          els.push(data);
        }
      }
      return els;
    } else {
      return Util.getNodes(userConfig.fixedElements, self.xscroll.content);
    }
  },
  renderFixedElement: function(el, fixedIndex,fixedRenderTo) {
    var self = this;
    var isRender = true;
    var _ = self._;
    var xscroll = self.xscroll;
    var userConfig = self.userConfig;
    var xscrollConfig = self.xscrollConfig;
    var useOriginScroll = xscrollConfig.useOriginScroll;
    var infinite = self.infinite;
    var fixedElement = self.fixedElements[fixedIndex];
    if (!self.fixedElements[fixedIndex]) {
      isRender = false;
      if (useOriginScroll && !infinite) {
        //use original position:fixed stylesheet
        el.style.position = "fixed";
        el.style.display = "block";
      } else {
        //deep clone fixed nodes and hide original nodes
        fixedElement = document.createElement("div");
        if (infinite) {
          fixedElement.setAttribute("style", Util.stringifyStyle(Util.mix(el.style, {
            display: "block",
            width: "100%"
          })));
          fixedElement.style[_.top] = (el.style[_.top] >= 0 ? el.style[_.top] : el._top) + "px";
          if (el.style[_.height]) {
            fixedElement.style[_.height] = el.style[_.height] + "px";
          }
          infinite.userConfig.renderHook.call(self, fixedElement, el);
        } else {
          fixedElement.style.display = "block";
          fixedElement.style.position = "absolute";
          fixedElement.style[_.width] = "100%";
          fixedElement.innerHTML = el.innerHTML;
          fixedElement.className = el.className;
          fixedElement.setAttribute("style", el.getAttribute("style"));
          fixedElement.style[_.top] = el[_.offsetTop] + "px";
          el.style.display = "none";
        }
        fixedRenderTo.appendChild(fixedElement);
        self.fixedElements.push(fixedElement);
      }
    }
    xscroll.trigger("fixedchange", {
      fixedIndex: fixedIndex,
      fixedElement: useOriginScroll ? el : fixedElement,
      originalFixedElement: el,
      isRender: isRender
    });
  },
  destroy: function() {
    var self = this;
    self.fixedElements = undefined;
  }
});

if (typeof module == 'object' && module.exports) {
  module.exports = Fixed;
}
/** ignored by jsdoc **/
else {
  return Fixed;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(515);
var Animate = __webpack_require__(521);
var MAX_BOUNCE_DISTANCE = 40;
var MIN_BAR_SCROLLED_SIZE = 10;
var MIN_BAR_SIZE = 50;
var transform = Util.prefixStyle("transform");
var transformStr = Util.vendor ? ["-", Util.vendor, "-transform"].join("") : "transform";
var transition = Util.prefixStyle("transition");
var borderRadius = Util.prefixStyle("borderRadius");
var transitionDuration = Util.prefixStyle("transitionDuration");

var ScrollBar = function(cfg) {
	this.userConfig = Util.mix({
		MIN_BAR_SCROLLED_SIZE:MIN_BAR_SCROLLED_SIZE,
		MIN_BAR_SIZE:MIN_BAR_SIZE,
		MAX_BOUNCE_DISTANCE:MAX_BOUNCE_DISTANCE,
		spacing:5
	}, cfg);
	this.init(cfg.xscroll);
}

Util.mix(ScrollBar.prototype, {
	init: function(xscroll) {
		var self = this;
		self.xscroll = xscroll;
		self.type = self.userConfig.type;
		self.isY = self.type == "y" ? true : false;
		self.scrollTopOrLeft = self.isY ? "scrollTop" : "scrollLeft";
	},
	destroy: function() {
		var self = this;
		Util.remove(self.scrollbar);
		self.xscroll.off("scroll", self._scrollHandler, self);
		self.xscroll.off("scrollend", self._scrollEndHandler, self);
	},
	render: function() {
		var self = this;
		var xscroll = self.xscroll;
		var boundry = xscroll.boundry;
		var indicatorInsets = self.xscroll.userConfig.indicatorInsets;
		var translateZ = xscroll.userConfig.gpuAcceleration ? " translateZ(0) " : "";
		var transform = translateZ ? transformStr + ":" + translateZ + ";" : "";
		var commonCss = "opacity:0;position:absolute;z-index:999;overflow:hidden;-webkit-border-radius:3px;-moz-border-radius:3px;-o-border-radius:3px;" + transform;
		indicatorInsets._xright =  indicatorInsets.right + indicatorInsets.spacing;
		indicatorInsets._xbottom =  indicatorInsets.bottom + indicatorInsets.spacing;
		var css = self.isY ?
			Util.substitute("width:{width}px;bottom:{_xbottom}px;top:{top}px;right:{right}px;", indicatorInsets) + commonCss :
			Util.substitute("height:{width}px;left:{left}px;right:{_xright}px;bottom:{bottom}px;",indicatorInsets) + commonCss;
		

		if(!self.scrollbar){
			self.scrollbar = document.createElement("div");	
			self.indicate = document.createElement("div");
			xscroll.renderTo.appendChild(self.scrollbar);
			self.scrollbar.appendChild(self.indicate);
		}
		self.scrollbar.style.cssText = css;
		var size = self.isY ? "width:100%;" : "height:100%;";
		self.indicate.style.cssText = size + "position:absolute;background:rgba(0,0,0,0.3);-webkit-border-radius:3px;-moz-border-radius:3px;-o-border-radius:3px;"
		self._update();
		self.hide(0);
		self._bindEvt();
	},
	_update: function(pos, duration, easing, callback) {
		var self = this;
		var pos = undefined === pos ? (self.isY ? self.xscroll.getScrollTop() : self.xscroll.getScrollLeft()) : pos;
		var barInfo = self.computeScrollBar(pos);
		var size = self.isY ? "height" : "width";
		self.indicate.style[size] = Math.round(barInfo.size) + "px";
		if (duration && easing) {
			self.scrollTo(barInfo.pos, duration, easing, callback);
		} else {
			self.moveTo(barInfo.pos);
		}
	},
	//compute the position and size of the scrollbar
	computeScrollBar: function(pos) {
		var self = this;
		var type = self.isY ? "y" : "x";
		var spacing = self.userConfig.spacing;
		var xscroll = self.xscroll;
		var boundry = xscroll.boundry;
		var userConfig = self.userConfig;
		var pos = self.isY ? Math.round(pos) + boundry._xtop : Math.round(pos) + boundry._xleft;
		var MIN_BAR_SCROLLED_SIZE = userConfig.MIN_BAR_SCROLLED_SIZE;
		var MIN_BAR_SIZE = userConfig.MIN_BAR_SIZE;
		var MAX_BOUNCE_DISTANCE = userConfig.MAX_BOUNCE_DISTANCE;
		self.containerSize = self.isY ? xscroll.containerHeight + boundry._xtop + boundry._xbottom : self.xscroll.containerWidth + boundry._xright + boundry._xleft;
		self.size = self.isY ? boundry.cfg.height : boundry.cfg.width;
		self.indicateSize = self.isY ? boundry.cfg.height - spacing * 2 : boundry.cfg.width - spacing * 2;
		var indicateSize = self.indicateSize;
		var containerSize = self.containerSize;
		var barPos = indicateSize * pos / containerSize;
		var barSize = Math.round(indicateSize * self.size / containerSize);
		var overTop = self.isY ? xscroll.getBoundryOutTop() : xscroll.getBoundryOutLeft();
		var overBottom = self.isY ? xscroll.getBoundryOutBottom() : xscroll.getBoundryOutRight();
		var barShiftSize = MIN_BAR_SIZE - barSize > 0 ? MIN_BAR_SIZE - barSize : 0;
		barSize = barSize < MIN_BAR_SIZE ? MIN_BAR_SIZE : barSize;
		barPos = (indicateSize - barShiftSize) * pos / containerSize;
		if (overTop >= 0) {
			var pct = overTop / MAX_BOUNCE_DISTANCE;
			pct = pct > 1 ? 1 : pct;
			barPos = - pct * (barSize -  MIN_BAR_SCROLLED_SIZE)
		}
		if (overBottom >= 0) {
			var pct = overBottom / MAX_BOUNCE_DISTANCE;
			pct = pct > 1 ? 1 : pct;
			barPos = pct * (barSize - MIN_BAR_SCROLLED_SIZE) + indicateSize - barSize; 
		}
		self.barPos = Math.round(barPos);
		return {
			size: Math.round(barSize),
			pos: self.barPos
		};
	},
	scrollTo: function(pos, duration, easing, callback) {
		var self = this;
		self.show();
		var translateZ = self.xscroll.userConfig.gpuAcceleration ? " translateZ(0) " : "";
		var config = {
			css: {
				transform: self.isY ? "translateY(" + pos + "px)" + translateZ : "translateX(" + pos + "px)" + translateZ
			},
			duration: duration,
			easing: easing,
			useTransition: self.xscroll.userConfig.useTransition,
			end: callback
		};
		self.__timer = self.__timer || new Animate(self.indicate, config);
		//run
		self.__timer.stop();
		self.__timer.reset(config);
		self.__timer.run();
	},
	moveTo: function(pos) {
		var self = this;
		self.show();
		var translateZ = self.xscroll.userConfig.gpuAcceleration ? " translateZ(0) " : "";
		self.isY ? self.indicate.style[transform] = "translateY(" + pos + "px) " + translateZ : self.indicate.style[transform] = "translateX(" + pos + "px) " + translateZ
		self.indicate.style[transition] = "";
	},
	_scrollHandler: function(e) {
		var self = this;
		self._update(e[self.scrollTopOrLeft]);
		return self;
	},
	isBoundryOut: function() {
		var self = this;
		return !self.isY ? (self.xscroll.isBoundryOutLeft() || self.xscroll.isBoundryOutRight()) : (self.xscroll.isBoundryOutTop() || self.xscroll.isBoundryOutBottom());
	},
	_scrollEndHandler: function(e) {
		var self = this;
		if (!self.isBoundryOut()) {
			self._update(e[self.scrollTopOrLeft]);
			self.hide();
		}
		return self;
	},
	_bindEvt: function() {
		var self = this;
		if (self.__isEvtBind) return;
		self.__isEvtBind = true;
		self.xscroll.on("scroll", self._scrollHandler, self);
		self.xscroll.on("scrollend", self._scrollEndHandler, self);
	},
	reset: function() {
		var self = this;
		self.pos = 0;
		self._update();
	},
	hide: function(duration, easing, delay) {
		var self = this;
		var duration = duration >= 0 ? duration : 300;
		var easing = easing || "ease-out";
		var delay = delay >= 0 ? delay : 100;
		self.scrollbar.style.opacity = 0;
		self.scrollbar.style[transition] = ["opacity ", duration, "ms ", " ease-out ", delay, "ms"].join("");
	},
	show: function() {
		var self = this;
		self.scrollbar.style.opacity = 1;
		self.scrollbar.style[transition] = "";
	}
});

if (typeof module == 'object' && module.exports) {
	module.exports = ScrollBar;
}
/** ignored by jsdoc **/
else {
	return ScrollBar;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(515);
var Base = __webpack_require__(517);
//transform
var transform = Util.prefixStyle("transform");
// default render function for position:sticky elements
var defaultStickyRenderFunc = function(e) {
  var stickyElement = e.stickyElement;
  var curStickyElement = e.curStickyElement;
  var xscroll = e.xscroll;
  var _ = e._;
  var infinite = xscroll.getPlugin("infinite");
  if (infinite) {
    infinite.userConfig.renderHook.call(self, stickyElement, curStickyElement);
    stickyElement.setAttribute("xs-guid", curStickyElement.guid);
    Util.addClass(stickyElement, curStickyElement.className);
    for (var attrName in curStickyElement.style) {
      if (attrName != "display" && attrName != "position") {
        //copy styles
        stickyElement.style[attrName] = attrName == _.height ? curStickyElement.style[attrName] + 'px' : curStickyElement.style[attrName];
      }
    }
  } else {
    var style = curStickyElement.getAttribute("style");
    stickyElement.innerHTML = curStickyElement.innerHTML;
    stickyElement.className = curStickyElement.className;
    style && stickyElement.setAttribute("style", style);
  }
}

var Sticky = function(cfg) {
  Sticky.superclass.constructor.call(this, cfg);
  this.userConfig = Util.mix({
    stickyRenderTo: undefined,
    forceSticky: true,
    prefix: "xs-sticky-container",
    stickyRenderFunc: defaultStickyRenderFunc,
    zoomType: "y"
  }, cfg);
  this.init();
}

Util.extend(Sticky, Base, {
  init: function() {
    var self = this,
      userConfig = self.userConfig,
      xscroll = self.xscroll = userConfig.xscroll;
    var isY = self.isY = !!(userConfig.zoomType == "y");
    self._ = {
      top: self.isY ? "top" : "left",
      left: self.isY ? "left" : "bottom",
      right: self.isY ? "right" : "top",
      height: self.isY ? "height" : "width",
      width: self.isY ? "width" : "height"
    };
    self.stickyRenderTo = Util.getNode(userConfig.stickyRenderTo);
    self._handlers = [];
    return self;
  },
  getStickiesPos: function() {
    var self = this;
    var xscroll = self.xscroll;
    var isInfinite = self.isInfinite;
    var isY = self.isY;
    var _ = self._;
    var stickiesPos = [];
    var getPos = function(sticky) {
      var pos = {};
      if (isInfinite) {
        pos[_.top] = isY ? sticky._top : sticky._left;
        pos[_.height] = isY ? sticky._height : sticky._width;
      } else {
        pos[_.top] = self.isY ? Util.getOffsetTop(sticky) : Util.getOffsetLeft(sticky);
        pos[_.height] = self.isY ? sticky.offsetHeight : sticky.offsetWidth;
      }
      return pos;
    }
    for (var i = 0; i < self.stickiesNum; i++) {
      var pos = getPos(self.stickyElements[i]);
      self._handlers[i] = self._handlers[i] || self.createStickyEl();
      pos.el = self._handlers[i];
      pos.isRender = false;
      stickiesPos.push(pos);
    }
    return stickiesPos
  },
  getStickyElements: function() {
    var self = this;
    var xscroll = self.xscroll;
    var userConfig = self.userConfig;
    var isInfinite = self.isInfinite;
    var infinite = xscroll.getPlugin("infinite");
    if (infinite) {
      var stickyElements = [],
        serializedData = infinite.__serializedData;
      for (var i in serializedData) {
        var rowData = serializedData[i];
        if (rowData && rowData.style && "sticky" == rowData.style.position) {
          stickyElements.push(rowData);
        }
      }
      return stickyElements;
    } else {
      return Util.getNodes(xscroll.userConfig.stickyElements, xscroll.content);
    }
  },
  render: function(force) {
    var self = this;
    var userConfig = self.userConfig;
    var xscroll = self.xscroll;
    self.isInfinite = !!xscroll.getPlugin("infinite");
    var _ = self._;
    self.stickyElements = self.getStickyElements();
    self.stickiesNum = self.stickyElements && self.stickyElements.length;
    if (!self.stickiesNum) return;
    if (!self.stickyRenderTo) {
      self.stickyRenderTo = document.createElement('div');
      xscroll.renderTo.appendChild(self.stickyRenderTo);
    }
    self.stickiesPos = self.getStickiesPos();
    var stickyRenderTo = self.stickyRenderTo;
    stickyRenderTo.style[_.top] = 0;
    stickyRenderTo.style[_.left] = 0;
    stickyRenderTo.style[_.right] = 0;
    stickyRenderTo.style.position = xscroll.userConfig.useOriginScroll ? "fixed" : "absolute";
    Util.addClass(self.stickyRenderTo, userConfig.prefix);
    self.stickyHandler(force);
    self._bindEvt();
  },
  createStickyEl: function() {
    var self = this;
    var el = document.createElement('div');
    el.style.display = "none";
    Util.addClass(el, "xs-sticky-handler");
    self.stickyRenderTo.appendChild(el);
    return el;
  },
  _bindEvt: function() {
    var self = this,
      xscroll = self.xscroll;
    xscroll.on("scroll", self.stickyHandler, self);
  },
  stickyHandler: function(force) {
    var self = this;
    var xscroll = self.xscroll;
    var userConfig = self.userConfig;
    var scrollTop = self.isY ? xscroll.getScrollTop() : xscroll.getScrollLeft();
    var stickiesPos = self.stickiesPos;
    var _ = self._;
    var indexes = [];
    for (var i = 0, l = stickiesPos.length; i < l; i++) {
      var top = stickiesPos[i][_.top];
      if (scrollTop > top) {
        indexes.push(i);
      }
    }
    if (!indexes.length) {
      if (self.stickyElement) {
        self.stickyElement.style.display = "none";
      }
      self.curStickyIndex = undefined;
      return;
    }

    var curStickyIndex = Math.max.apply(null, indexes);
    if (self.curStickyIndex != curStickyIndex || force) {
      var prevStickyIndex = self.curStickyIndex;
      self.curStickyIndex = curStickyIndex;
      self.curStickyElement = self.stickyElements[curStickyIndex];
      self.curStickyPos = stickiesPos[curStickyIndex];
      self.stickyElement = self.curStickyPos.el;
      for (var i = 0, l = stickiesPos.length; i < l; i++) {
        stickiesPos[i].el.style.display = "none";
      }
      var eventsObj = {
        stickyElement: self.stickyElement,
        curStickyIndex: self.curStickyIndex,
        prevStickyIndex: prevStickyIndex,
        curStickyPos: self.curStickyPos,
        isRender: self.curStickyPos.isRender
      };
      xscroll.trigger("beforestickychange", eventsObj);
      self._stickyRenderFunc(self);
      xscroll.trigger("stickychange", eventsObj);
    }

    var trans = 0;
    if (self.stickiesPos[self.curStickyIndex + 1]) {
      var cur = self.stickiesPos[self.curStickyIndex];
      var next = self.stickiesPos[self.curStickyIndex + 1];
      if (scrollTop + cur[_.height] > next[_.top] && scrollTop + cur[_.height] < next[_.top] + cur[_.height]) {
        trans = cur[_.height] + scrollTop - next[_.top];
      } else {
        trans = 0;
      }
    }
    self.stickyElement.style[transform] = self.isY ? "translateY(-" + (trans) + "px) translateZ(0)" : "translateX(-" + (trans) + "px) translateZ(0)";
  },
  _stickyRenderFunc: function(e) {
    var self = this;
    var _ = self._;
    var stickyRenderFunc = self.userConfig.stickyRenderFunc;
    var el = self.curStickyPos.el;
    if (!self.curStickyPos.isRender) {
      el.style[_.left] = 0;
      el.style[_.right] = 0;
      stickyRenderFunc && stickyRenderFunc.call(self, e);
    }
    el.style.display = "block";
    self.curStickyPos.isRender = true;
  },
  destroy: function() {
    var self = this;
    self.stickyElements = undefined;
    self.stickiesNum = undefined;
    self.stickiesPos = undefined;
    Util.remove(self.stickyElement);
    self.stickyElement = undefined;
  }
});

if (typeof module == 'object' && module.exports) {
  module.exports = Sticky;
}
/** ignored by jsdoc **/
else {
  return Sticky;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(515);
// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
var _once = function(func) {
  var ran = false,
    memo;
  return function() {
    if (ran) return memo;
    ran = true;
    memo = func.apply(this, arguments);
    func = null;
    return memo;
  };
};


/**
 * @discription events
 * @mixin
 */
var Events = {
  // Bind an event to a `callback` function. Passing `"all"` will bind
  // the callback to all events fired.
  on: function(name, callback, context) {
    if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
    this._events || (this._events = {});
    var events = this._events[name] || (this._events[name] = []);
    events.push({
      callback: callback,
      context: context,
      ctx: context || this
    });
    return this;
  },


  // Bind an event to only be triggered a single time. After the first time
  // the callback is invoked, it will be removed.
  once: function(name, callback, context) {
    if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
    var self = this;
    var once = _once(function() {
      self.off(name, once);
      callback.apply(this, arguments);
    });
    once._callback = callback;
    return this.on(name, once, context);
  },

  // Remove one or many callbacks. If `context` is null, removes all
  // callbacks with that function. If `callback` is null, removes all
  // callbacks for the event. If `name` is null, removes all bound
  // callbacks for all events.
  off: function(name, callback, context) {
    if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;

    // Remove all callbacks for all events.
    if (!name && !callback && !context) {
      this._events = void 0;
      return this;
    }

    var names = name ? [name] : Object.keys(this._events);
    for (var i = 0, length = names.length; i < length; i++) {
      name = names[i];

      // Bail out if there are no events stored.
      var events = this._events[name];
      if (!events) continue;

      // Remove all callbacks for this event.
      if (!callback && !context) {
        delete this._events[name];
        continue;
      }

      // Find any remaining events.
      var remaining = [];
      for (var j = 0, k = events.length; j < k; j++) {
        var event = events[j];
        if (
          callback && callback !== event.callback &&
          callback !== event.callback._callback ||
          context && context !== event.context
        ) {
          remaining.push(event);
        }
      }

      // Replace events if there are any remaining.  Otherwise, clean up.
      if (remaining.length) {
        this._events[name] = remaining;
      } else {
        delete this._events[name];
      }
    }

    return this;
  },

  // Trigger one or many events, firing all bound callbacks. Callbacks are
  // passed the same arguments as `trigger` is, apart from the event name
  // (unless you're listening on `"all"`, which will cause your callback to
  // receive the true name of the event as the first argument).
  trigger: function(name) {
    if (!this._events) return this;
    var args = Array.prototype.slice.call(arguments, 1);
    if (!eventsApi(this, 'trigger', name, args)) return this;
    var events = this._events[name];
    var allEvents = this._events.all;
    if (events) triggerEvents(events, args);
    if (allEvents) triggerEvents(allEvents, arguments);
    return this;
  },

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  listenTo: function(obj, name, callback) {
    var listeningTo = this._listeningTo || (this._listeningTo = {});
    var id = obj._listenId || (obj._listenId = Util.guid('l'));
    listeningTo[id] = obj;
    if (!callback && typeof name === 'object') callback = this;
    obj.on(name, callback, this);
    return this;
  },

  listenToOnce: function(obj, name, callback) {
    if (typeof name === 'object') {
      for (var event in name) this.listenToOnce(obj, event, name[event]);
      return this;
    }
    var cb = _once(function() {
      this.stopListening(obj, name, cb);
      callback.apply(this, arguments);
    });
    cb._callback = callback;
    return this.listenTo(obj, name, cb);
  },

  // Tell this object to stop listening to either specific events ... or
  // to every object it's currently listening to.
  stopListening: function(obj, name, callback) {
    var listeningTo = this._listeningTo;
    if (!listeningTo) return this;
    var remove = !name && !callback;
    if (!callback && typeof name === 'object') callback = this;
    if (obj)(listeningTo = {})[obj._listenId] = obj;
    for (var id in listeningTo) {
      obj = listeningTo[id];
      obj.off(name, callback, this);
      if (remove || Util.isEmpty(obj._events)) delete this._listeningTo[id];
    }
    return this;
  }

};

// Regular expression used to split event strings.
var eventSplitter = /\s+/;

// Implement fancy features of the Events API such as multiple event
// names `"change blur"` and jQuery-style event maps `{change: action}`
// in terms of the existing API.
var eventsApi = function(obj, action, name, rest) {
  if (!name) return true;

  // Handle event maps.
  if (typeof name === 'object') {
    for (var key in name) {
      obj[action].apply(obj, [key, name[key]].concat(rest));
    }
    return false;
  }

  // Handle space separated event names.
  if (eventSplitter.test(name)) {
    var names = name.split(eventSplitter);
    for (var i = 0, length = names.length; i < length; i++) {
      obj[action].apply(obj, [names[i]].concat(rest));
    }
    return false;
  }

  return true;
};

// A difficult-to-believe, but optimized internal dispatch function for
// triggering events. Tries to keep the usual cases speedy (most internal
var triggerEvents = function(events, args) {
  var ev, i = -1,
    l = events.length,
    a1 = args[0],
    a2 = args[1],
    a3 = args[2];
  switch (args.length) {
    case 0:
      while (++i < l)(ev = events[i]).callback.call(ev.ctx);
      return;
    case 1:
      while (++i < l)(ev = events[i]).callback.call(ev.ctx, a1);
      return;
    case 2:
      while (++i < l)(ev = events[i]).callback.call(ev.ctx, a1, a2);
      return;
    case 3:
      while (++i < l)(ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
      return;
    default:
      while (++i < l)(ev = events[i]).callback.apply(ev.ctx, args);
      return;
  }
};

// Aliases for backwards compatibility.
Events.bind = Events.on;
Events.unbind = Events.off;

if (typeof module == 'object' && module.exports) {
  module.exports = Events;
}
/** ignored by jsdoc **/
else {
  return Events;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(515),
    Base = __webpack_require__(517),
    Core = __webpack_require__(539),
    Animate = __webpack_require__(521);

var transformOrigin = Util.prefixStyle("transformOrigin");
/** 
 * @constructor
 * @param {object} cfg config for scroll
 * @extends XScroll
 * @example
 * var xscroll = new OriginScroll({
 *    renderTo:"#scroll"
 * });
 * xscroll.render();
 */
function OriginScroll(cfg) {
    OriginScroll.superclass.constructor.call(this, cfg);
}

Util.extend(OriginScroll, Core, {
    init: function() {
        var self = this;
        OriginScroll.superclass.init.call(this);
        self.resetSize();
    },
    /**
     * get scroll top value
     * @memberof OriginScroll
     * @return {number} scrollTop
     */
    getScrollTop: function() {
        return this.renderTo.scrollTop;
    },
    /**
     * get scroll left value
     * @memberof OriginScroll
     * @return {number} scrollLeft
     */
    getScrollLeft: function() {
        return this.renderTo.scrollLeft;
    },
    /**
     * vertical scroll absolute to the destination
     * @memberof SimuScroll
     * @param scrollTop {number} scrollTop
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/
    scrollTop: function(y, duration, easing, callback) {
        var self = this;
        var y = Math.round(y);
        if (self.userConfig.lockY) return;
        var duration = duration || 0;
        var easing = easing || "quadratic";
        var config = {
            css: {
                scrollTop: y
            },
            duration: duration,
            easing: easing,
            run: function(e) {
                //trigger scroll event
                self.trigger("scroll", {
                    scrollTop: self.getScrollTop(),
                    scrollLeft: self.getScrollLeft()
                });
            },
            useTransition: false, //scrollTop 
            end: callback
        };
        self.__timers.y = self.__timers.y || new Animate(self.renderTo, config);
        //run
        self.__timers.y.stop();
        self.__timers.y.reset(config);
        self.__timers.y.run();
    },
    /**
     * horizontal scroll absolute to the destination
     * @memberof SimuScroll
     * @param scrollLeft {number} scrollLeft
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/
    scrollLeft: function(x, duration, easing, callback) {
        var self = this;
        var x = Math.round(x);
        if (self.userConfig.lockX) return;
        var duration = duration || 0;
        var easing = easing || "quadratic";
        var config = {
            css: {
                scrollLeft: x
            },
            duration: duration,
            easing: easing,
            run: function(e) {
                //trigger scroll event
                self.trigger("scroll", {
                    scrollTop: self.getScrollTop(),
                    scrollLeft: self.getScrollLeft()
                });
            },
            useTransition: false, //scrollTop 
            end: callback
        };
        self.__timers.x = self.__timers.x || new Animate(self.renderTo, config);
        //run
        self.__timers.x.stop();
        self.__timers.x.reset(config);
        self.__timers.x.run();
    },
    _bindEvt: function() {
        OriginScroll.superclass._bindEvt.call(this);
        var self = this;
        if (self.__isEvtBind) return;
        self.__isEvtBind = true;
        self.renderTo.addEventListener("scroll", function(e) {
            self.trigger("scroll", {
                type: "scroll",
                scrollTop: self.getScrollTop(),
                scrollLeft: self.getScrollLeft()
            })
        }, false)
    }
});

if (typeof module == 'object' && module.exports) {
    module.exports = OriginScroll;
}
/** ignored by jsdoc **/
else {
    return OriginScroll;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(515);
var Base = __webpack_require__(517);
var clsPrefix;
var containerCls;
var content = "Pull Down To Refresh";
var loadingContent = "Loading...";
/**
 * A pulldown to refresh plugin for xscroll.
 * @constructor
 * @param {object} cfg
 * @param {number} cfg.height
 * @param {string} cfg.content default html for pulldown
 * @param {string} cfg.downContent html for pulldown when scrollTop is smaller than cfg.height
 * @param {string} cfg.upContent html for pulldown when scrollTop is larger than cfg.height
 * @param {string} cfg.loadingContent html for pulldown when released
 * @param {string} cfg.clsPrefix  class prefix which default value is "xs-plugin-pulldown-"
 * @extends {Base}
 */
var PullDown = function(cfg) {
	PullDown.superclass.constructor.call(this, cfg);
	this.userConfig = Util.mix({
		content: content,
		height: 60,
		autoRefresh: true,
		downContent: "Pull Down To Refresh",
		upContent: "Release To Refresh",
		loadingContent: loadingContent,
		clsPrefix: "xs-plugin-pulldown-"
	}, cfg);
}
Util.extend(PullDown, Base, {
	/**
	 * a pluginId
	 * @memberOf PullDown
	 * @type {string}
	 */
	pluginId: "pulldown",
	/**
	 * plugin initializer
	 * @memberOf PullDown
	 * @override Base
	 * @return {PullDown}
	 */
	pluginInitializer: function(xscroll) {
		var self = this;
		self.xscroll = xscroll.render();
		clsPrefix = self.userConfig.clsPrefix;
		self.render();
		return self;
	},
	/**
	 * detroy the plugin
	 * @memberOf PullDown
	 * @override Base
	 * @return {PullDown}
	 */
	pluginDestructor: function() {
		var self = this;
		Util.remove(self.pulldown);
		self.xscroll.off("panstart", self._panStartHandler, self);
		self.xscroll.off("pan", self._panHandler, self);
		self.xscroll.off("panend", self._panEndHandler, self);
		self.__isRender = false;
		self._evtBinded = false;
	},
	/**
	 * render pulldown plugin
	 * @memberOf PullDown
	 * @return {PullDown}
	 */
	render: function() {
		var self = this;
		if (self.__isRender) return;
		self.__isRender = true;

		if (!self.userConfig.container) {
			var containerCls = clsPrefix + "container";
			var height = self.userConfig.height || 60;
			var pulldown = self.pulldown = document.createElement("div");
			pulldown.className = containerCls;
			pulldown.style.position = "absolute";
			pulldown.style.width = "100%";
			pulldown.style.height = height + "px";
			pulldown.style.lineHeight = height + "px";
			pulldown.style.top = -height + "px";
			pulldown.style.textAlign = "center";
			self.xscroll.container.appendChild(pulldown);
			self.status = 'up';
			Util.addClass(pulldown, clsPrefix + self.status);
			pulldown.innerHTML = self.userConfig[self.status + "Content"] || self.userConfig.content;
		} else {
			// has customed container
			self.pulldown = self.userConfig.container
		}
		
		self._bindEvt();
		return self;
	},
	_bindEvt: function() {
		var self = this;
		if (self._evtBinded) return;
		self._evtBinded = true;
		var pulldown = self.pulldown;
		var xscroll = self.xscroll;
		xscroll.on("pan", self._panHandler, self);
		xscroll.on("panstart", self._panStartHandler, self);
		xscroll.on("panend", self._panEndHandler, self);
	},
	_changeStatus: function(status) {
		var prevVal = this.status;
		this.status = status;
		if (!this.userConfig.container) {
			Util.removeClass(this.pulldown, clsPrefix + prevVal)
			Util.addClass(this.pulldown, clsPrefix + status);
			if (this.userConfig[status + "Content"]) {
				this.pulldown.innerHTML = this.userConfig[status + "Content"];
			}
		}
		if (prevVal != status) {
			this.trigger("statuschange", {
				prevVal: prevVal,
				newVal: status
			});
			if (status == "loading") {
				this.trigger("loading");
			}
		}
	},
	/**
	 * reset the pulldown plugin
	 * @memberOf PullDown
	 * @param {function} callback
	 * @return {PullDown}
	 */
	reset: function(callback) {
		this.xscroll.boundry.resetTop()
		this.xscroll.boundryCheckY(callback);
		this._expanded = false;
		return this;
	},
	_panStartHandler: function(e) {
		clearTimeout(this.loadingItv);
	},
	_panHandler: function(e) {
		var self = this;
		var scrollTop = self.xscroll.getScrollTop();
		if (scrollTop > 0) return;
		self._changeStatus(Math.abs(scrollTop) < self.userConfig.height ? "down" : "up");
	},
	_panEndHandler: function(e) {
		var self = this;
		var xscroll = self.xscroll;
		var height = self.userConfig.height || 60;
		var scrollTop = xscroll.getScrollTop();
		if (scrollTop < -height) {
			//prevent default bounce
			e.preventDefault();
			xscroll.boundry.resetTop();
			self._changeStatus("loading");
			xscroll.boundry.expandTop(height);
			xscroll.boundryCheckY(function() {
			});
			if (self.userConfig.autoRefresh) {
				clearTimeout(self.loadingItv);
				self.loadingItv = setTimeout(function() {
					xscroll.boundry.resetTop();
					xscroll.boundryCheckY(function() {
						window.location.reload();
					})
				}, 800);
			}
		}
	}
});

if (typeof module == 'object' && module.exports) {
	module.exports = PullDown;
}
/** ignored by jsdoc **/
else if (window.XScroll && window.XScroll.Plugins) {
	return XScroll.Plugins.PullDown = PullDown;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(515);
var Base = __webpack_require__(517);
var clsPrefix;
var containerCls;
var loadingContent = "Loading...";
var upContent = "Pull Up To Refresh";
var downContent = "Release To Refresh";
var PULL_UP_HEIGHT = 60;
var HEIGHT = 40;
/**
 * A pullup to load plugin for xscroll.
 * @constructor
 * @param {object} cfg
 * @param {number} cfg.height
 * @param {string} cfg.downContent
 * @param {string} cfg.upContent
 * @param {string} cfg.loadingContent
 * @param {string} cfg.clsPrefix  class prefix which default value is "xs-plugin-pullup-"
 * @param {number} cfg.bufferHeight preload data before scrolling to the bottom of the boundry
 * @extends {Base}
 */
var PullUp = function(cfg) {
	PullUp.superclass.constructor.call(this);
	this.userConfig = Util.mix({
		upContent: upContent,
		downContent: downContent,
		pullUpHeight: PULL_UP_HEIGHT,
		height: HEIGHT,
		loadingContent: loadingContent,
		bufferHeight: 0,
		clsPrefix: "xs-plugin-pullup-"
	}, cfg);
}
Util.extend(PullUp, Base, {
	/**
	 * a pluginId
	 * @memberOf PullUp
	 * @type {string}
	 */
	pluginId: "pullup",
	/**
	 * plugin initializer
	 * @memberOf PullUp
	 * @override Base
	 * @return {PullUp}
	 */
	pluginInitializer: function(xscroll) {
		var self = this;
		self.xscroll = xscroll.render();
		clsPrefix = self.userConfig.clsPrefix;
		self.render();
		return self;
	},
	/**
	 * detroy the plugin
	 * @memberOf PullUp
	 * @override Base
	 * @return {PullUp}
	 */
	pluginDestructor: function() {
		var self = this;
		Util.remove(self.pullup);
		self.xscroll.off("scrollend", self._scrollEndHandler, self);
		self.xscroll.off("scroll", self._scrollHandler, self);
		self.xscroll.off("pan", self._panHandler, self);
		self.xscroll.boundry.resetBottom();
		self.__isRender = false;
		self._evtBinded = false;
	},
	/**
	 * disable the plugin
	 * @memberOf PullUp
	 * @override Base
	 * @return {PullUp}
	 */
	pluginDisable: function() {
		var self = this;
		self.userConfig.container || Util.remove(self.pullup)
		self.xscroll.off("scrollend", self._scrollEndHandler, self);
		self.xscroll.off("scroll", self._scrollHandler, self);
		self.xscroll.off("pan", self._panHandler, self);
		self.xscroll.boundry.resetBottom();
		self.__isRender = false;
		self._evtBinded = false;
	},
	/**
	 * render pullup plugin
	 * @memberOf PullUp
	 * @return {PullUp}
	 */
	render: function() {
		var self = this;
		if (self.__isRender) return;
		self.__isRender = true;
		if (!self.userConfig.container) {
			var containerCls = clsPrefix + "container";
			var height = self.userConfig.height;
			var pullup = self.pullup = document.createElement("div");
			pullup.className = containerCls;
			pullup.style.position = "absolute";
			pullup.style.width = "100%";
			pullup.style.height = height + "px";
			pullup.style.bottom = -height + "px";
			pullup.style.textAlign = "center";
			self.xscroll.container.appendChild(pullup);
			Util.addClass(pullup, clsPrefix + self.status);
			pullup.innerHTML = self.userConfig[self.status + "Content"] || self.userConfig.content;
		} else {
			self.pullup = self.userConfig.container
		}
		self.xscroll.boundry.expandBottom(self.userConfig.height);
		self.status = 'up';
		self._bindEvt();
		return self;
	},
	_bindEvt: function() {
		var self = this;
		if (self._evtBinded) return;
		self._evtBinded = true;
		var pullup = self.pullup;
		var xscroll = self.xscroll;
		xscroll.on("pan", self._panHandler, self);
		//load width a buffer
		if (self.userConfig.bufferHeight > 0) {
			xscroll.on("scroll", self._scrollHandler, self);
		}
		//bounce bottom
		xscroll.on("scrollend", self._scrollEndHandler, self);
		return self;
	},
	_scrollEndHandler: function(e) {
		var self = this,
			xscroll = self.xscroll,
			scrollTop = xscroll.getScrollTop();
		if (scrollTop == xscroll.containerHeight - xscroll.height + self.userConfig.height) {
			self._changeStatus("loading");
		}
		return self;
	},
	_scrollHandler: function(e) {
		var self = this,
			xscroll = self.xscroll;
		if (!self.isLoading && Math.abs(e.scrollTop) + xscroll.height + self.userConfig.height + self.userConfig.bufferHeight >= xscroll.containerHeight + xscroll.boundry._xtop + xscroll.boundry._xbottom) {
			self._changeStatus("loading");
		}
		return self;
	},
	_panHandler: function(e) {
		var self = this;
		var xscroll = self.xscroll;
		var offsetTop = -xscroll.getScrollTop();
		if (offsetTop < xscroll.height - xscroll.containerHeight - self.userConfig.pullUpHeight) {
			self._changeStatus("down")
		} else {
			self._changeStatus("up");
		}
		return self;
	},
	_changeStatus: function(status) {
		if (status != "loading" && this.isLoading) return;
		var prevVal = this.status;
		this.status = status;
		if (!this.userConfig.container) {
			Util.removeClass(this.pullup, clsPrefix + prevVal)
			Util.addClass(this.pullup, clsPrefix + status);
			this.pullup.innerHTML = this.userConfig[status + "Content"];
		}
		if (prevVal != status) {
			this.trigger("statuschange", {
				prevVal: prevVal,
				newVal: status
			});
			if (status == "loading") {
				this.isLoading = true;
				this.trigger("loading");
			}
		}
		return this;
	},
	/**
	 * notify pullup plugin to complete state after a remote data request
	 * @memberOf PullUp
	 * @return {PullUp}
	 */
	complete: function() {
		var self = this;
		var xscroll = self.xscroll;
		self.isLoading = false;
		self._changeStatus("up");
		return self;
	},
	stop: function() {
		var xscroll = this.xscroll;
		this.isLoading = false;
		this._changeStatus("stop");
		this.pluginDisable()
		return this;
	},
	restart: function() {
		var xscroll = this.xscroll;
		this.isLoading = false;
		this._changeStatus("default");
		this.render()
		return this;
	}
});

if (typeof module == 'object' && module.exports) {
	module.exports = PullUp;
}
/** ignored by jsdoc **/
else if (window.XScroll && window.XScroll.Plugins) {
	return XScroll.Plugins.PullUp = PullUp;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(515),
  Base = __webpack_require__(517),
  Core = __webpack_require__(539),
  Animate = __webpack_require__(521),
  Hammer = __webpack_require__(536),
  ScrollBar = __webpack_require__(559),
  Controller = __webpack_require__(557);
//reduced boundry pan distance
var PAN_RATE = 1 - 0.618;
//constant for scrolling acceleration
var SCROLL_ACCELERATION = 0.0005;
//constant for outside of boundry acceleration
var BOUNDRY_ACCELERATION = 0.03;
//transform-origin
var transformOrigin = Util.prefixStyle("transformOrigin");
//transform
var transform = Util.prefixStyle("transform");
/** 
 * @constructor
 * @param {object} cfg config for scroll
 * @param {number} cfg.SCROLL_ACCELERATION  acceleration for scroll, min value make the scrolling smoothly
 * @param {number} cfg.BOUNDRY_CHECK_DURATION duration for boundry bounce
 * @param {number} cfg.BOUNDRY_CHECK_EASING easing for boundry bounce
 * @param {number} cfg.BOUNDRY_CHECK_ACCELERATION acceleration for boundry bounce
 * @param {boolean} cfg.lockX just like overflow-x:hidden
 * @param {boolean} cfg.lockY just like overflow-y:hidden
 * @param {boolean} cfg.scrollbarX config if the scrollbar-x is visible
 * @param {boolean} cfg.scrollbarY config if the scrollbar-y is visible
 * @param {boolean} cfg.useTransition config if use css3 transition or raf for scroll animation
 * @param {boolean} cfg.bounce config if use has the bounce effect when scrolling outside of the boundry
 * @param {boolean} cfg.boundryCheck config if scrolling inside of the boundry
 * @param {boolean} cfg.preventDefault prevent touchstart
 * @param {boolean} cfg.preventTouchMove prevent touchmove
 * @param {string|HTMLElement}  cfg.container config for scroller's container which default value is ".xs-container"
 * @param {string|HTMLElement}  cfg.content config for scroller's content which default value is ".xs-content"
 * @param {object}  cfg.indicatorInsets  config scrollbars position {top: number, left: number, bottom: number, right: number}
 * @param {string}  cfg.stickyElements config for sticky-positioned elements
 * @param {string}  cfg.fixedElements config for fixed-positioned elements
 * @param {string}  cfg.touchAction config for touchAction of the scroller
 * @extends XScroll
 * @example
 * var xscroll = new SimuScroll({
 *    renderTo:"#scroll",
 *    lockX:false,
 *    scrollbarX:true
 * });
 * xscroll.render();
 */
function SimuScroll(cfg) {
  SimuScroll.superclass.constructor.call(this, cfg);
}

Util.extend(SimuScroll, Core, {
  /** 
   * @memberof SimuScroll
   * @override
   */
  init: function() {
    var self = this;
    var defaultCfg = {
      preventDefault: true,
      preventTouchMove: true
    };
    SimuScroll.superclass.init.call(this);
    self.userConfig = Util.mix(defaultCfg, self.userConfig);
    self.SCROLL_ACCELERATION = self.userConfig.SCROLL_ACCELERATION || SCROLL_ACCELERATION;
    self.BOUNDRY_ACCELERATION = self.userConfig.BOUNDRY_ACCELERATION || BOUNDRY_ACCELERATION;
    self._initContainer();
    self.resetSize();
    //set overflow behaviors
    self._setOverflowBehavior();
    self.defaltConfig = {
      lockY: self.userConfig.lockY,
      lockX: self.userConfig.lockX
    }
    return self;
  },
  destroy: function() {
    var self = this;
    SimuScroll.superclass.destroy.call(this);
    self.renderTo.style.overflow = "";
    self.renderTo.style.touchAction = "";
    self.container.style.transform = "";
    self.container.style.transformOrigin = "";
    self.content.style.transform = "";
    self.content.style.transformOrigin = "";
    self.off("touchstart mousedown", self._ontouchstart);
    self.off("touchmove", self._ontouchmove);
    window.removeEventListener("resize", self.resizeHandler, self);
    self.destroyScrollBars();
  },
  /**
   * set overflow behavior
   * @return {boolean} [description]
   */
  _setOverflowBehavior: function() {
    var self = this;
    var renderTo = self.renderTo;
    var computeStyle = getComputedStyle(renderTo);
    self.userConfig.lockX = undefined === self.userConfig.lockX ? ((computeStyle['overflow-x'] == "hidden" || self.width == self.containerWidth) ? true : false) : self.userConfig.lockX;
    self.userConfig.lockY = undefined === self.userConfig.lockY ? ((computeStyle['overflow-y'] == "hidden" || self.height == self.containerHeight) ? true : false) : self.userConfig.lockY;
    self.userConfig.scrollbarX = undefined === self.userConfig.scrollbarX ? (self.userConfig.lockX ? false : true) : self.userConfig.scrollbarX;
    self.userConfig.scrollbarY = undefined === self.userConfig.scrollbarY ? (self.userConfig.lockY ? false : true) : self.userConfig.scrollbarY;
    return self;
  },
  /**
   * reset lockX or lockY config to the default value
   */
  _resetLockConfig: function() {
    var self = this;
    self.userConfig.lockX = self.defaltConfig.lockX;
    self.userConfig.lockY = self.defaltConfig.lockY;
    return self;
  },
  /**
   * init container
   * @override
   * @return {SimuScroll}
   */
  _initContainer: function() {
    var self = this;
    SimuScroll.superclass._initContainer.call(self);
    if (self.__isContainerInited || !self.container || !self.content) return;
    self.container.style[transformOrigin] = "0 0";
    self.content.style[transformOrigin] = "0 0";
    self.translate(0, 0);
    self.__isContainerInited = true;
    return self;
  },
  /**
   * get scroll top value
   * @memberof SimuScroll
   * @return {number} scrollTop
   */
  getScrollTop: function() {
    var transY = window.getComputedStyle(this.container)[transform].match(/[-\d\.*\d*]+/g);
    return transY ? Math.round(transY[5]) === 0 ? 0 : -Math.round(transY[5]) : 0;
  },
  /**
   * get scroll left value
   * @memberof SimuScroll
   * @return {number} scrollLeft
   */
  getScrollLeft: function() {
    var transX = window.getComputedStyle(this.content)[transform].match(/[-\d\.*\d*]+/g);
    return transX ? Math.round(transX[4]) === 0 ? 0 : -Math.round(transX[4]) : 0;
  },
  /**
   * horizontal scroll absolute to the destination
   * @memberof SimuScroll
   * @param scrollLeft {number} scrollLeft
   * @param duration {number} duration for animte
   * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
   **/
  scrollLeft: function(x, duration, easing, callback) {
    if (this.userConfig.lockX) return;
    var translateZ = this.userConfig.gpuAcceleration ? " translateZ(0) " : "";
    this.x = (undefined === x || isNaN(x) || 0 === x) ? 0 : -Math.round(x);
    this._animate("x", "translateX(" + this.x + "px) scale(" + this.scale + ")" + translateZ, duration, easing, callback);
    return this;
  },
  /**
   * vertical scroll absolute to the destination
   * @memberof SimuScroll
   * @param scrollTop {number} scrollTop
   * @param duration {number} duration for animte
   * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
   **/
  scrollTop: function(y, duration, easing, callback) {
    if (this.userConfig.lockY) return;
    var translateZ = this.userConfig.gpuAcceleration ? " translateZ(0) " : "";
    this.y = (undefined === y || isNaN(y) || 0 === y) ? 0 : -Math.round(y);
    this._animate("y", "translateY(" + this.y + "px) " + translateZ, duration, easing, callback);
    return this;
  },
  /**
   * translate the scroller to a new destination includes x , y , scale
   * @memberof SimuScroll
   * @param x {number} x
   * @param y {number} y
   * @param scale {number} scale
   **/
  translate: function(x, y, scale) {
    var translateZ = this.userConfig.gpuAcceleration ? " translateZ(0) " : "";
    this.x = x || this.x || 0;
    this.y = y || this.y || 0;
    this.scale = scale || this.scale || 1;
    this.content.style[transform] = "translate(" + this.x + "px,0px) scale(" + this.scale + ") " + translateZ;
    this.container.style[transform] = "translate(0px," + this.y + "px) " + translateZ;
    return this;
  },
  _animate: function(type, transform, duration, easing, callback) {
    var self = this;
    var duration = duration || 0;
    var easing = easing || "quadratic";
    var el = type == "y" ? self.container : self.content;
    var config = {
      css: {
        transform: transform
      },
      duration: duration,
      easing: easing,
      run: function(e) {
        /**
         * @event {@link SimuScroll#"scroll"}
         */
        self.trigger("scroll", {
          scrollTop: self.getScrollTop(),
          scrollLeft: self.getScrollLeft(),
          type: "scroll"
        });
      },
      useTransition: self.userConfig.useTransition,
      end: function(e) {
        callback && callback();
        if ((self["_bounce" + type] === 0 || self["_bounce" + type] === undefined) && easing != "linear") {
          self['isScrolling' + type.toUpperCase()] = false;
          self['isRealScrolling' + type.toUpperCase()] = false;
          self.trigger("scrollend", {
            type: "scrollend",
            scrollTop: self.getScrollTop(),
            scrollLeft: self.getScrollLeft(),
            zoomType: type,
            duration: duration,
            easing: easing
          });
        }
      }
    };
    var timer = self.__timers[type] = self.__timers[type] || new Animate(el, config);
    timer.stop();
    timer.reset(config);
    timer.run();
    self.trigger("scrollanimate", {
      type: "scrollanimate",
      scrollTop: -self.y,
      scrollLeft: -self.x,
      duration: duration,
      easing: easing,
      zoomType: type
    })
    return this;
  },
  _ontap: function(e) {
    var self = this;
    self.boundryCheck();
    // self._unPreventHref(e);
    if (!self.isRealScrollingX && !self.isRealScrollingY) {
      // self._triggerClick(e);
    }
    // self._preventHref(e);
    self.isRealScrollingY = false;
    self.isRealScrollingY = false;
  },
  _bindEvt: function() {
    SimuScroll.superclass._bindEvt.call(this);
    var self = this;
    if (self.__isEvtBind) return;
    self.__isEvtBind = true;
    var pinch = new Hammer.Pinch();
    self.mc.add(pinch);
    self.on("touchstart mousedown", self._ontouchstart, self);
    self.on("touchmove", self._ontouchmove, self);
    self.on("tap", self._ontap, self);
    self.on("panstart", self._onpanstart, self);
    self.on("pan", self._onpan, self);
    self.on("panend", self._onpanend, self);
    self.resizeHandler = function(e) {
      setTimeout(function() {
        self.resetSize();
        self.boundryCheck(0);
        self.render();
      }, 100);
    }
    //window resize
    window.addEventListener("resize", self.resizeHandler, self);

    return this;
  },
  _ontouchstart: function(e) {
    var self = this;
    if (!(/(SELECT|INPUT|TEXTAREA)/i).test(e.target.tagName) && self.userConfig.preventDefault) {
      e.preventDefault();
    }
    self.stop();
  },
  _ontouchmove: function(e) {
    this.userConfig.preventTouchMove && e.preventDefault();
  },
  _onpanstart: function(e) {
    this.userConfig.preventTouchMove && e.preventDefault();
    var self = this;
    var scrollLeft = self.getScrollLeft();
    var scrollTop = self.getScrollTop();
    self.stop();
    self.translate(-scrollLeft, -scrollTop);
    var threshold = self.mc.get("pan").options.threshold;
    self.thresholdY = e.direction == "8" ? threshold : e.direction == "16" ? -threshold : 0;
    self.thresholdX = e.direction == "2" ? threshold : e.direction == "4" ? -threshold : 0;
    return self;
  },
  _onpan: function(e) {
    this.userConfig.preventTouchMove && e.preventDefault();
    var self = this;
    var boundry = self.boundry;
    var userConfig = self.userConfig;
    var boundryCheck = userConfig.boundryCheck;
    var bounce = userConfig.bounce;
    var scrollTop = self.__topstart || (self.__topstart = -self.getScrollTop());
    var scrollLeft = self.__leftstart || (self.__leftstart = -self.getScrollLeft());
    var y = userConfig.lockY ? Number(scrollTop) : Number(scrollTop) + (e.deltaY + self.thresholdY);
    var x = userConfig.lockX ? Number(scrollLeft) : Number(scrollLeft) + (e.deltaX + self.thresholdX);
    var containerWidth = self.containerWidth;
    var containerHeight = self.containerHeight;
    if (boundryCheck) {
      //over top
      y = y > boundry.top ? bounce ? (y - boundry.top) * PAN_RATE + boundry.top : boundry.top : y;
      //over bottom
      y = y < boundry.bottom - containerHeight ? bounce ? y + (boundry.bottom - containerHeight - y) * PAN_RATE : boundry.bottom - containerHeight : y;
      //over left
      x = x > boundry.left ? bounce ? (x - boundry.left) * PAN_RATE + boundry.left : boundry.left : x;
      //over right
      x = x < boundry.right - containerWidth ? bounce ? x + (boundry.right - containerWidth - x) * PAN_RATE : boundry.right - containerWidth : x;
    }
    //move to x,y
    self.translate(x, y);
    //pan trigger the opposite direction
    self.directionX = e.type == 'panleft' ? 'right' : e.type == 'panright' ? 'left' : '';
    self.directionY = e.type == 'panup' ? 'down' : e.type == 'pandown' ? 'up' : '';
    self.trigger("scroll", {
      scrollTop: -y,
      scrollLeft: -x,
      triggerType: "pan",
      type: "scroll"
    });
    return self;
  },
  _onpanend: function(e) {
    var self = this;
    var userConfig = self.userConfig;
    var transX = self.computeScroll("x", e.velocityX);
    var transY = self.computeScroll("y", e.velocityY);
    var scrollLeft = transX ? transX.pos : 0;
    var scrollTop = transY ? transY.pos : 0;
    var duration;
    if (transX && transY && transX.status == "inside" && transY.status == "inside" && transX.duration && transY.duration) {
      //ensure the same duration
      duration = Math.max(transX.duration, transY.duration);
    }
    transX && self.scrollLeft(scrollLeft, duration || transX.duration, transX.easing, function(e) {
      self.boundryCheckX();
    });
    transY && self.scrollTop(scrollTop, duration || transY.duration, transY.easing, function(e) {
      self.boundryCheckY();
    });
    //judge the direction
    self.directionX = e.velocityX < 0 ? "left" : "right";
    self.directionY = e.velocityY < 0 ? "up" : "down";
    //clear start
    self.__topstart = null;
    self.__leftstart = null;
    return self;
  },
  /**
   * judge the scroller is out of boundry horizontally and vertically
   * @memberof SimuScroll
   * @return {boolean} isBoundryOut
   **/
  isBoundryOut: function() {
    return this.isBoundryOutLeft() || this.isBoundryOutRight() || this.isBoundryOutTop() || this.isBoundryOutBottom();
  },
  /**
   * judge if the scroller is outsideof left
   * @memberof SimuScroll
   * @return {boolean} isBoundryOut
   **/
  isBoundryOutLeft: function() {
    return this.getBoundryOutLeft() > 0 ? true : false;
  },
  /**
   * judge if the scroller is outsideof right
   * @memberof SimuScroll
   * @return {boolean} isBoundryOut
   **/
  isBoundryOutRight: function() {
    return this.getBoundryOutRight() > 0 ? true : false;
  },
  /**
   * judge if the scroller is outsideof top
   * @memberof SimuScroll
   * @return {boolean} isBoundryOut
   **/
  isBoundryOutTop: function() {
    return this.getBoundryOutTop() > 0 ? true : false;
  },
  /**
   * judge if the scroller is outsideof bottom
   * @memberof SimuScroll
   * @return {boolean} isBoundryOut
   **/
  isBoundryOutBottom: function() {
    return this.getBoundryOutBottom() > 0 ? true : false;
  },
  /**
   * get the offset value outsideof top
   * @memberof SimuScroll
   * @return {number} offset
   **/
  getBoundryOutTop: function() {
    return -this.boundry.top - this.getScrollTop();
  },
  /**
   * get the offset value outsideof left
   * @memberof SimuScroll
   * @return {number} offset
   **/
  getBoundryOutLeft: function() {
    return -this.boundry.left - this.getScrollLeft();
  },
  /**
   * get the offset value outsideof bottom
   * @memberof SimuScroll
   * @return {number} offset
   **/
  getBoundryOutBottom: function() {
    return this.boundry.bottom - this.containerHeight + this.getScrollTop();
  },
  /**
   * get the offset value outsideof right
   * @memberof SimuScroll
   * @return {number} offset
   **/
  getBoundryOutRight: function() {
    return this.boundry.right - this.containerWidth + this.getScrollLeft();
  },
  /**
   * compute scroll transition by zoomType and velocity
   * @memberof SimuScroll
   * @param {string} zoomType zoomType of scrolling
   * @param {number} velocity velocity after panend
   * @example
   * var info = xscroll.computeScroll("x",2);
   * // return {pos:90,easing:"easing",status:"inside",duration:500}
   * @return {Object}
   **/
  computeScroll: function(type, v) {
    var self = this;
    var userConfig = self.userConfig;
    var boundry = self.boundry;
    var pos = type == "x" ? self.getScrollLeft() : self.getScrollTop();
    var boundryStart = type == "x" ? boundry.left : boundry.top;
    var boundryEnd = type == "x" ? boundry.right : boundry.bottom;
    var innerSize = type == "x" ? self.containerWidth : self.containerHeight;
    var maxSpeed = userConfig.maxSpeed || 2;
    var boundryCheck = userConfig.boundryCheck;
    var bounce = userConfig.bounce;
    var transition = {};
    var status = "inside";
    if (boundryCheck) {
      if (type == "x" && (self.isBoundryOutLeft() || self.isBoundryOutRight())) {
        self.boundryCheckX();
        return;
      } else if (type == "y" && (self.isBoundryOutTop() || self.isBoundryOutBottom())) {
        self.boundryCheckY();
        return;
      }
    }
    if (type == "x" && self.userConfig.lockX) return;
    if (type == "y" && self.userConfig.lockY) return;
    v = v > maxSpeed ? maxSpeed : v < -maxSpeed ? -maxSpeed : v;
    var a = self.SCROLL_ACCELERATION * (v / (Math.abs(v) || 1));
    var a2 = self.BOUNDRY_ACCELERATION;
    var t = isNaN(v / a) ? 0 : v / a;
    var s = Number(pos) + t * v / 2;
    //over top boundry check bounce
    if (s < -boundryStart && boundryCheck) {
      var _s = -boundryStart - pos;
      var _t = (Math.sqrt(-2 * a * _s + v * v) + v) / a;
      var v0 = v - a * _t;
      var _t2 = Math.abs(v0 / a2);
      var s2 = v0 / 2 * _t2;
      t = _t + _t2;
      s = bounce ? -boundryStart + s2 : -boundryStart;
      status = "outside";
    } else if (s > innerSize - boundryEnd && boundryCheck) {
      var _s = (boundryEnd - innerSize) + pos;
      var _t = (Math.sqrt(-2 * a * _s + v * v) - v) / a;
      var v0 = v - a * _t;
      var _t2 = Math.abs(v0 / a2);
      var s2 = v0 / 2 * _t2;
      t = _t + _t2;
      s = bounce ? innerSize - boundryEnd + s2 : innerSize - boundryEnd;
      status = "outside";
    }
    if (isNaN(s) || isNaN(t)) return;
    transition.pos = s;
    transition.duration = t;
    transition.easing = Math.abs(v) > 2 ? "circular" : "quadratic";
    transition.status = status;
    var Type = type.toUpperCase();
    self['isScrolling' + Type] = true;
    self['isRealScrolling' + Type] = true;
    return transition;
  },
  /**
   * bounce to the boundry horizontal
   * @memberof SimuScroll
   * @return {SimuScroll}
   **/
  boundryCheckX: function(duration, easing, callback) {
    var self = this;
    if (!self.userConfig.boundryCheck) return;
    if (typeof arguments[0] == "function") {
      callback = arguments[0];
      duration = self.userConfig.BOUNDRY_CHECK_DURATION;
      easing = self.userConfig.BOUNDRY_CHECK_EASING;
    } else {
      duration = duration === 0 ? 0 : self.userConfig.BOUNDRY_CHECK_DURATION,
        easing = easing || self.userConfig.BOUNDRY_CHECK_EASING;
    }
    if (!self.userConfig.bounce || self.userConfig.lockX) return;
    var boundry = self.boundry;
    if (self.isBoundryOutLeft()) {
      self.scrollLeft(-boundry.left, duration, easing, callback);
    } else if (self.isBoundryOutRight()) {
      self.scrollLeft(self.containerWidth - boundry.right, duration, easing, callback);
    }
    return self;
  },
  /**
   * bounce to the boundry vertical
   * @memberof SimuScroll
   * @return {SimuScroll}
   **/
  boundryCheckY: function(duration, easing, callback) {
    var self = this;
    if (!self.userConfig.boundryCheck) return;
    if (typeof arguments[0] == "function") {
      callback = arguments[0];
      duration = self.userConfig.BOUNDRY_CHECK_DURATION;
      easing = self.userConfig.BOUNDRY_CHECK_EASING;
    } else {
      duration = duration === 0 ? 0 : self.userConfig.BOUNDRY_CHECK_DURATION,
        easing = easing || self.userConfig.BOUNDRY_CHECK_EASING;
    }
    if (!self.userConfig.boundryCheck || self.userConfig.lockY) return;
    var boundry = self.boundry;
    if (self.isBoundryOutTop()) {
      self.scrollTop(-boundry.top, duration, easing, callback);
    } else if (self.isBoundryOutBottom()) {
      self.scrollTop(self.containerHeight - boundry.bottom, duration, easing, callback);
    }
    return self;
  },
  /**
   * bounce to the boundry vertical and horizontal
   * @memberof SimuScroll
   * @return {SimuScroll}
   **/
  boundryCheck: function(duration, easing, callback) {
    this.boundryCheckX(duration, easing, callback);
    this.boundryCheckY(duration, easing, callback);
    return this;
  },
  /**
   * stop scrolling immediatelly
   * @memberof SimuScroll
   * @return {SimuScroll}
   **/
  stop: function() {
    var self = this;
    self.__timers.x && self.__timers.x.stop();
    self.__timers.y && self.__timers.y.stop();
    if (self.isScrollingX || self.isScrollingY) {
      var scrollTop = self.getScrollTop(),
        scrollLeft = self.getScrollLeft();
      self.trigger("scrollend", {
        scrollTop: scrollTop,
        scrollLeft: scrollLeft
      });
      self.trigger("stop", {
        scrollTop: scrollTop,
        scrollLeft: scrollLeft
      })
      self.isScrollingX = false;
      self.isScrollingY = false;
    }
    return self;
  },
  /**
   * render scroll
   * @memberof SimuScroll
   * @return {SimuScroll}
   **/
  render: function() {
    var self = this;
    SimuScroll.superclass.render.call(this);
    //fixed for scrollbars
    if (getComputedStyle(self.renderTo).position == "static") {
      self.renderTo.style.position = "relative";
    }
    self.renderTo.style.overflow = "hidden";
    self.initScrollBars();
    self.initController();
    return self;
  },
  /**
   * init scrollbars
   * @memberof SimuScroll
   * @return {SimuScroll}
   */
  initScrollBars: function() {
    var self = this;
    if (!self.userConfig.boundryCheck) return;
    var indicatorInsets = self.userConfig.indicatorInsets;
    if (self.userConfig.scrollbarX) {
      self.scrollbarX = self.scrollbarX || new ScrollBar({
        xscroll: self,
        type: "x",
        spacing: indicatorInsets.spacing
      });
      self.scrollbarX.render();
      self.scrollbarX._update();
      self.scrollbarX.hide();
    }
    if (self.userConfig.scrollbarY) {
      self.scrollbarY = self.scrollbarY || new ScrollBar({
        xscroll: self,
        type: "y",
        spacing: indicatorInsets.spacing
      });
      self.scrollbarY.render();
      self.scrollbarY._update();
      self.scrollbarY.hide();
    }
    return self;
  },
  /**
   * destroy scrollbars
   * @memberof SimuScroll
   * @return {SimuScroll}
   */
  destroyScrollBars: function() {
    this.scrollbarX && this.scrollbarX.destroy();
    this.scrollbarY && this.scrollbarY.destroy();
    return this;
  },
  /**
   * init controller for multi-scrollers
   * @memberof SimuScroll
   * @return {SimuScroll}
   */
  initController: function() {
    var self = this;
    self.controller = self.controller || new Controller({
      xscroll: self
    });
    return self;
  },
  _unPreventHref: function(e) {
    var target = Util.findParentEl(e.target,'a',this.renderTo);
    if(!target) return;
    if (target.tagName.toLowerCase() == "a") {
      var href = target.getAttribute("data-xs-href");
      if (href) {
        target.setAttribute("href", href);
      }
    }
  },
  _preventHref: function(e) {
    var target = Util.findParentEl(e.target,'a',this.renderTo);
    if(!target) return;
    if (target.tagName.toLowerCase() == "a") {
      var href = target.getAttribute("href");
      href && target.setAttribute("href", "javascript:void(0)");
      href && target.setAttribute("data-xs-href", href);
    }
  },
  _triggerClick: function(e) {
    var target = e.target;
    if (!(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName)) {
      var ev = document.createEvent('MouseEvents');
      ev.initMouseEvent('click', true, true, e.view, 1,
        target.screenX, target.screenY, target.clientX, target.clientY,
        e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
        0, null);
      target.dispatchEvent(ev);
    }
  }
});

if (typeof module == 'object' && module.exports) {
  module.exports = SimuScroll;
}
/** ignored by jsdoc **/
else {
  return SimuScroll;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(515),
	Base = __webpack_require__(517),
	Timer = __webpack_require__(541),
	Animate = __webpack_require__(521),
	Hammer = __webpack_require__(536),
	SimuScroll = __webpack_require__(565),
	OriginScroll = __webpack_require__(562);
var XScroll = function(cfg) {
		var _ = cfg && cfg.useOriginScroll ? OriginScroll : SimuScroll;
		return new _(cfg);
	}
/**
 * Util
 * @namespace Util
 * @type {Object}
 */
XScroll.Util = Util;
/**
 * Base
 * @namespace Base
 * @type {Base}
 */
XScroll.Base = Base;
/**
 * Timer
 * @namespace Timer
 * @type {Timer}
 */
XScroll.Timer = Timer;
/**
 * Animate
 * @namespace Animate
 * @type {Animate}
 */
XScroll.Animate = Animate;
/**
 * Hammer
 * @namespace Hammer
 * @type {Hammer}
 */
XScroll.Hammer = Hammer;
/**
 * plugins
 * @namespace Plugins
 * @type {Object}
 */
XScroll.Plugins = {};

if (typeof module == 'object' && module.exports) {
	module.exports = XScroll;
}
/** ignored by jsdoc **/
else {
	return window.XScroll = XScroll;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(574)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(572),
  /* template */
  __webpack_require__(575),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;
function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}
module.exports = exports['default'];

/***/ }),

/***/ 572:
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

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(487)();
// imports


// module
exports.push([module.i, ".vux-label-desc{font-size:14px;color:#666}", "", {"version":3,"sources":["F:/WXH5/node_modules/_vux@2.9.1@vux/src/components/inline-desc/index.vue"],"names":[],"mappings":"AACA,gBACE,eAAe,AACf,UAAW,CACZ","file":"index.vue","sourcesContent":["\n.vux-label-desc {\n  font-size:14px;\n  color:#666;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(573);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(488)("65dbea24", content, true);

/***/ }),

/***/ 575:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "vux-label-desc"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 579:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'load-more',
  props: {
    showLoading: {
      type: Boolean,
      default: true
    },
    tip: String
  }
});

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(487)();
// imports


// module
exports.push([module.i, ".weui-loading{width:20px;height:20px;display:inline-block;vertical-align:middle;animation:weuiLoading 1s steps(12) infinite;background:transparent url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=\") no-repeat;background-size:100%}.weui-loading.weui-loading_transparent{background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTAwIDEwMCc+PHBhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgxMDB2MTAwSDB6Jy8+PHJlY3QgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjU2KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0zMCknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDEwNS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjQzKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA3NS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjM4KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2NSA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjMyKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTguNjYgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4yOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMTUwIDU0LjAyIDY1KScvPjxyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjIpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKC0xNTAgNDUuOTggNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTEyMCA0MS4zNCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjE0KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtOTAgMzUgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtNjAgMjQuMDIgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4wMyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTMwIC01Ljk4IDY1KScvPjwvc3ZnPgo=\")}@keyframes weuiLoading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.weui-loadmore{width:65%;margin:1.5em auto;line-height:1.6em;font-size:14px;text-align:center}.weui-loadmore__tips{display:inline-block;vertical-align:middle}.weui-loadmore_line{border-top:1px solid #e5e5e5;margin-top:2.4em}.weui-loadmore_line .weui-loadmore__tips{position:relative;top:-.9em;padding:0 .55em;color:#999}.weui-loadmore_dot .weui-loadmore__tips{padding:0 .16em}.weui-loadmore_dot .weui-loadmore__tips:before{content:\" \";width:4px;height:4px;border-radius:50%;background-color:#e5e5e5;display:inline-block;position:relative;vertical-align:0;top:-.16em}.vux-loadmore.weui-loadmore_line{display:-ms-flexbox;display:flex;border-top:0}.vux-loadmore.weui-loadmore_line:after,.vux-loadmore.weui-loadmore_line:before{position:relative;top:-1px;-ms-flex:1;flex:1;content:\"\";border-top:1px solid #e5e5e5}", "", {"version":3,"sources":["F:/WXH5/node_modules/_vux@2.9.1@vux/src/components/load-more/index.vue"],"names":[],"mappings":"AAgSA,cACE,WAAY,AACZ,YAAa,AACb,qBAAsB,AACtB,sBAAuB,AACvB,4CAAkD,AAClD,m5DAAo5D,AACp5D,oBAAsB,CACvB,AACD,uCACE,8oEAAgpE,CACjpE,AACD,uBACA,GACI,sBAAmC,CACtC,AACD,GACI,uBAAqC,CACxC,CACA,AACD,eACE,UAAW,AACX,kBAAmB,AACnB,kBAAmB,AACnB,eAAgB,AAChB,iBAAmB,CACpB,AACD,qBACE,qBAAsB,AACtB,qBAAuB,CACxB,AACD,oBACE,6BAA8B,AAC9B,gBAAkB,CACnB,AACD,yCACE,kBAAmB,AACnB,UAAY,AACZ,gBAAiB,AACjB,UAAe,CAChB,AACD,wCACE,eAAiB,CAClB,AACD,+CACE,YAAa,AACb,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,yBAA0B,AAC1B,qBAAsB,AACtB,kBAAmB,AACnB,iBAAkB,AAClB,UAAa,CACd,AACD,iCACE,oBAAqB,AACrB,aAAc,AACd,YAAc,CACf,AACD,+EAEE,kBAAmB,AACnB,SAAU,AACV,WAAY,AACR,OAAQ,AACZ,WAAY,AACZ,4BAA8B,CAC/B","file":"index.vue","sourcesContent":["/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.weui-loading {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  vertical-align: middle;\n  animation: weuiLoading 1s steps(12, end) infinite;\n  background: transparent url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=\") no-repeat;\n  background-size: 100%;\n}\n.weui-loading.weui-loading_transparent {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTAwIDEwMCc+PHBhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgxMDB2MTAwSDB6Jy8+PHJlY3QgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjU2KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0zMCknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDEwNS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjQzKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA3NS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjM4KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2NSA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjMyKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTguNjYgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4yOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMTUwIDU0LjAyIDY1KScvPjxyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjIpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKC0xNTAgNDUuOTggNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTEyMCA0MS4zNCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjE0KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtOTAgMzUgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtNjAgMjQuMDIgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4wMyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTMwIC01Ljk4IDY1KScvPjwvc3ZnPgo=\");\n}\n@keyframes weuiLoading {\n0% {\n    transform: rotate3d(0, 0, 1, 0deg);\n}\n100% {\n    transform: rotate3d(0, 0, 1, 360deg);\n}\n}\n.weui-loadmore {\n  width: 65%;\n  margin: 1.5em auto;\n  line-height: 1.6em;\n  font-size: 14px;\n  text-align: center;\n}\n.weui-loadmore__tips {\n  display: inline-block;\n  vertical-align: middle;\n}\n.weui-loadmore_line {\n  border-top: 1px solid #E5E5E5;\n  margin-top: 2.4em;\n}\n.weui-loadmore_line .weui-loadmore__tips {\n  position: relative;\n  top: -0.9em;\n  padding: 0 .55em;\n  color: #999999;\n}\n.weui-loadmore_dot .weui-loadmore__tips {\n  padding: 0 .16em;\n}\n.weui-loadmore_dot .weui-loadmore__tips:before {\n  content: \" \";\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background-color: #E5E5E5;\n  display: inline-block;\n  position: relative;\n  vertical-align: 0;\n  top: -0.16em;\n}\n.vux-loadmore.weui-loadmore_line {\n  display: -ms-flexbox;\n  display: flex;\n  border-top: 0;\n}\n.vux-loadmore.weui-loadmore_line:before,\n.vux-loadmore.weui-loadmore_line:after {\n  position: relative;\n  top: -1px;\n  -ms-flex: 1;\n      flex: 1;\n  content: '';\n  border-top: 1px solid #E5E5E5;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(580);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(488)("5711b386", content, true);

/***/ }),

/***/ 584:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-loadmore weui-loadmore",
    class: {
      'weui-loadmore_line': !_vm.showLoading, 'weui-loadmore_dot': !_vm.showLoading && !_vm.tip
    }
  }, [(_vm.showLoading) ? _c('i', {
    staticClass: "weui-loading"
  }) : _vm._e(), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tip || !_vm.showLoading),
      expression: "tip || !showLoading"
    }],
    staticClass: "weui-loadmore__tips"
  }, [_vm._v(_vm._s(_vm.tip))])])
},staticRenderFns: []}

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(613)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(595),
  /* template */
  __webpack_require__(623),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(583)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(579),
  /* template */
  __webpack_require__(584),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'icon',
  props: {
    type: String,
    isMsg: Boolean
  },
  computed: {
    className() {
      // compatible with old type param
      return `weui-icon weui_icon_${this.type} weui-icon-${this.type.replace(/_/g, '-')}`;
    }
  }
});

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        title: {
            type: String,
            default: '当前没有商品'
        }
    }
});

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(487)();
// imports


// module
exports.push([module.i, ".placeholder-box[data-v-23669388]{text-align:center;color:#333;margin:0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;margin-top:5rem}.placeholder-box span[data-v-23669388]{line-height:3rem;font-size:1.2rem;color:#d0d0d0}", "", {"version":3,"sources":["F:/WXH5/src/components/placeholder.vue"],"names":[],"mappings":"AACA,kCACE,kBAAmB,AACnB,WAAY,AACZ,cAAe,AACf,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,0BAA2B,AACvB,sBAAuB,AAC3B,eAAiB,CAClB,AACD,uCACE,iBAAkB,AAClB,iBAAkB,AAClB,aAAe,CAChB","file":"placeholder.vue","sourcesContent":["\n.placeholder-box[data-v-23669388] {\n  text-align: center;\n  color: #333;\n  margin: 0 auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  margin-top: 5rem;\n}\n.placeholder-box span[data-v-23669388] {\n  line-height: 3rem;\n  font-size: 1.2rem;\n  color: #d0d0d0;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(487)();
// imports


// module
exports.push([module.i, "@font-face{font-weight:400;font-style:normal;font-family:weui;src:url(\"data:application/octet-stream;base64,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\") format(\"truetype\")}[class*=\" weui-icon-\"],[class^=weui-icon-]{display:inline-block;vertical-align:middle;font:normal normal normal 14px/1 weui;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased}[class*=\" weui-icon-\"]:before,[class^=weui-icon-]:before{display:inline-block;margin-left:.2em;margin-right:.2em}.weui-icon-circle:before{content:\"\\EA01\"}.weui-icon-download:before{content:\"\\EA02\"}.weui-icon-info:before{content:\"\\EA03\"}.weui-icon-safe-success:before{content:\"\\EA04\"}.weui-icon-safe-warn:before{content:\"\\EA05\"}.weui-icon-success:before{content:\"\\EA06\"}.weui-icon-success-circle:before{content:\"\\EA07\"}.weui-icon-success-no-circle:before{content:\"\\EA08\"}.weui-icon-waiting:before{content:\"\\EA09\"}.weui-icon-waiting-circle:before{content:\"\\EA0A\"}.weui-icon-warn:before{content:\"\\EA0B\"}.weui-icon-info-circle:before{content:\"\\EA0C\"}.weui-icon-cancel:before{content:\"\\EA0D\"}.weui-icon-search:before{content:\"\\EA0E\"}.weui-icon-clear:before{content:\"\\EA0F\"}.weui-icon-back:before{content:\"\\EA10\"}.weui-icon-delete:before{content:\"\\EA11\"}[class*=\" weui-icon_\"]:before,[class^=weui-icon_]:before{margin:0}.weui-icon-success{font-size:23px;color:#09bb07}.weui-icon-waiting{font-size:23px;color:#10aeff}.weui-icon-warn{font-size:23px;color:#f43530}.weui-icon-info{font-size:23px;color:#10aeff}.weui-icon-success-circle,.weui-icon-success-no-circle{font-size:23px;color:#09bb07}.weui-icon-waiting-circle{font-size:23px;color:#10aeff}.weui-icon-circle{font-size:23px;color:#c9c9c9}.weui-icon-download,.weui-icon-info-circle{font-size:23px;color:#09bb07}.weui-icon-safe-success{color:#09bb07}.weui-icon-safe-warn{color:#ffbe00}.weui-icon-cancel{color:#f43530;font-size:22px}.weui-icon-clear,.weui-icon-search{color:#b2b2b2;font-size:14px}.weui-icon-delete.weui-icon_gallery-delete{color:#fff;font-size:22px}.weui-icon_msg{font-size:93px}.weui-icon_msg.weui-icon-warn{color:#f76260}.weui-icon_msg-primary{font-size:93px}.weui-icon_msg-primary.weui-icon-warn{color:#ffbe00}.icon-big:before{font-size:93px}", "", {"version":3,"sources":["F:/WXH5/node_modules/_vux@2.9.1@vux/src/components/icon/index.vue"],"names":[],"mappings":"AACA,WACE,gBAAoB,AACpB,kBAAmB,AACnB,iBAAoB,AACpB,mmMAAqmM,CACtmM,AACD,2CAEE,qBAAsB,AACtB,sBAAuB,AACvB,sCAAyC,AACzC,kBAAmB,AACnB,oBAAqB,AACrB,kCAAoC,CACrC,AACD,yDAEE,qBAAsB,AACtB,iBAAkB,AAClB,iBAAmB,CACpB,AACD,yBACE,eAAiB,CAClB,AAED,2BACE,eAAiB,CAClB,AAED,uBACE,eAAiB,CAClB,AAED,+BACE,eAAiB,CAClB,AAED,4BACE,eAAiB,CAClB,AAED,0BACE,eAAiB,CAClB,AAED,iCACE,eAAiB,CAClB,AAED,oCACE,eAAiB,CAClB,AAED,0BACE,eAAiB,CAClB,AAED,iCACE,eAAiB,CAClB,AAED,uBACE,eAAiB,CAClB,AAED,8BACE,eAAiB,CAClB,AAED,yBACE,eAAiB,CAClB,AAED,yBACE,eAAiB,CAClB,AAED,wBACE,eAAiB,CAClB,AAED,uBACE,eAAiB,CAClB,AAED,yBACE,eAAiB,CAClB,AAkSD,yDAEE,QAAU,CACX,AACD,mBACE,eAAgB,AAChB,aAAe,CAChB,AACD,mBACE,eAAgB,AAChB,aAAe,CAChB,AACD,gBACE,eAAgB,AAChB,aAAe,CAChB,AACD,gBACE,eAAgB,AAChB,aAAe,CAChB,AAKD,uDAHE,eAAgB,AAChB,aAAe,CAKhB,AACD,0BACE,eAAgB,AAChB,aAAe,CAChB,AACD,kBACE,eAAgB,AAChB,aAAe,CAChB,AAKD,2CAHE,eAAgB,AAChB,aAAe,CAKhB,AACD,wBACE,aAAe,CAChB,AACD,qBACE,aAAe,CAChB,AACD,kBACE,cAAe,AACf,cAAgB,CACjB,AAKD,mCACE,cAAe,AACf,cAAgB,CACjB,AACD,2CACE,WAAe,AACf,cAAgB,CACjB,AACD,eACE,cAAgB,CACjB,AACD,8BACE,aAAe,CAChB,AACD,uBACE,cAAgB,CACjB,AACD,sCACE,aAAe,CAChB,AAID,iBACE,cAAgB,CACjB","file":"index.vue","sourcesContent":["\n@font-face {\n  font-weight: normal;\n  font-style: normal;\n  font-family: \"weui\";\n  src: url('data:application/octet-stream;base64,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') format('truetype');\n}\n[class^=\"weui-icon-\"],\n[class*=\" weui-icon-\"] {\n  display: inline-block;\n  vertical-align: middle;\n  font: normal normal normal 14px/1 \"weui\";\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n}\n[class^=\"weui-icon-\"]:before,\n[class*=\" weui-icon-\"]:before {\n  display: inline-block;\n  margin-left: .2em;\n  margin-right: .2em;\n}\n.weui-icon-circle:before {\n  content: \"\\EA01\";\n}\n/* '' */\n.weui-icon-download:before {\n  content: \"\\EA02\";\n}\n/* '' */\n.weui-icon-info:before {\n  content: \"\\EA03\";\n}\n/* '' */\n.weui-icon-safe-success:before {\n  content: \"\\EA04\";\n}\n/* '' */\n.weui-icon-safe-warn:before {\n  content: \"\\EA05\";\n}\n/* '' */\n.weui-icon-success:before {\n  content: \"\\EA06\";\n}\n/* '' */\n.weui-icon-success-circle:before {\n  content: \"\\EA07\";\n}\n/* '' */\n.weui-icon-success-no-circle:before {\n  content: \"\\EA08\";\n}\n/* '' */\n.weui-icon-waiting:before {\n  content: \"\\EA09\";\n}\n/* '' */\n.weui-icon-waiting-circle:before {\n  content: \"\\EA0A\";\n}\n/* '' */\n.weui-icon-warn:before {\n  content: \"\\EA0B\";\n}\n/* '' */\n.weui-icon-info-circle:before {\n  content: \"\\EA0C\";\n}\n/* '' */\n.weui-icon-cancel:before {\n  content: \"\\EA0D\";\n}\n/* '' */\n.weui-icon-search:before {\n  content: \"\\EA0E\";\n}\n/* '' */\n.weui-icon-clear:before {\n  content: \"\\EA0F\";\n}\n/* '' */\n.weui-icon-back:before {\n  content: \"\\EA10\";\n}\n/* '' */\n.weui-icon-delete:before {\n  content: \"\\EA11\";\n}\n/* '' */\n/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n[class^=\"weui-icon_\"]:before,\n[class*=\" weui-icon_\"]:before {\n  margin: 0;\n}\n.weui-icon-success {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui-icon-waiting {\n  font-size: 23px;\n  color: #10AEFF;\n}\n.weui-icon-warn {\n  font-size: 23px;\n  color: #F43530;\n}\n.weui-icon-info {\n  font-size: 23px;\n  color: #10AEFF;\n}\n.weui-icon-success-circle {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui-icon-success-no-circle {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui-icon-waiting-circle {\n  font-size: 23px;\n  color: #10AEFF;\n}\n.weui-icon-circle {\n  font-size: 23px;\n  color: #C9C9C9;\n}\n.weui-icon-download {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui-icon-info-circle {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui-icon-safe-success {\n  color: #09BB07;\n}\n.weui-icon-safe-warn {\n  color: #FFBE00;\n}\n.weui-icon-cancel {\n  color: #F43530;\n  font-size: 22px;\n}\n.weui-icon-search {\n  color: #B2B2B2;\n  font-size: 14px;\n}\n.weui-icon-clear {\n  color: #B2B2B2;\n  font-size: 14px;\n}\n.weui-icon-delete.weui-icon_gallery-delete {\n  color: #FFFFFF;\n  font-size: 22px;\n}\n.weui-icon_msg {\n  font-size: 93px;\n}\n.weui-icon_msg.weui-icon-warn {\n  color: #F76260;\n}\n.weui-icon_msg-primary {\n  font-size: 93px;\n}\n.weui-icon_msg-primary.weui-icon-warn {\n  color: #FFBE00;\n}\n/**\nfollowing styles will be removed after v3.0.0\n*/\n.icon-big:before {\n  font-size: 93px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(602);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(488)("33c3969e", content, true);

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(604);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(488)("04d688b0", content, true);

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "placeholder-box"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(578),
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.title))])])
},staticRenderFns: []}

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', {
    class: [_vm.className, _vm.isMsg ? 'weui-icon_msg' : '']
  })
},staticRenderFns: []}

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(611)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(598),
  /* template */
  __webpack_require__(621),
  /* scopeId */
  "data-v-23669388",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports['default'];

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_safari_fix__ = __webpack_require__(638);
//
//
//
//
//
//
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
  name: 'toast',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_safari_fix__["a" /* default */]],
  props: {
    value: Boolean,
    time: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'success'
    },
    transition: String,
    width: {
      type: String,
      default: '7.6em'
    },
    isShowMask: {
      type: Boolean,
      default: false
    },
    text: String,
    position: String
  },
  data() {
    return {
      show: false
    };
  },
  created() {
    if (this.value) {
      this.show = true;
    }
  },
  computed: {
    currentTransition() {
      if (this.transition) {
        return this.transition;
      }
      if (this.position === 'top') {
        return 'vux-slide-from-top';
      }
      if (this.position === 'bottom') {
        return 'vux-slide-from-bottom';
      }
      return 'vux-fade';
    },
    toastClass() {
      return {
        'weui-toast_forbidden': this.type === 'warn',
        'weui-toast_cancel': this.type === 'cancel',
        'weui-toast_success': this.type === 'success',
        'weui-toast_text': this.type === 'text',
        'vux-toast-top': this.position === 'top',
        'vux-toast-bottom': this.position === 'bottom',
        'vux-toast-middle': this.position === 'middle'
      };
    },
    style() {
      if (this.type === 'text' && this.width === 'auto') {
        return { padding: '10px' };
      }
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.$emit('input', true);
        this.$emit('on-show');
        this.fixSafariOverflowScrolling('auto');

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.show = false;
          this.$emit('input', false);
          this.$emit('on-hide');
          this.fixSafariOverflowScrolling('touch');
        }, this.time);
      }
    },
    value(val) {
      this.show = val;
    }
  }
});

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  mounted() {
    this.$overflowScrollingList = document.querySelectorAll('.vux-fix-safari-overflow-scrolling');
  },
  methods: {
    fixSafariOverflowScrolling(type) {
      if (!this.$overflowScrollingList.length) return;
      // if (!/iphone/i.test(navigator.userAgent)) return
      for (let i = 0; i < this.$overflowScrollingList.length; i++) {
        this.$overflowScrollingList[i].style.webkitOverflowScrolling = type;
      }
    }
  }
});

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(487)();
// imports


// module
exports.push([module.i, ".vux-fade-enter-active,.vux-fade-leave-active{opacity:1;transition:opacity .2s linear}.vux-fade-enter,.vux-fade-leave-to{opacity:0}.vux-dialog-enter-active{animation:vux-dialog-in .5s}.vux-dialog-leave-active{animation:vux-dialog-out .3s}@keyframes vux-dialog-in{0%{transform:scale(1.185);opacity:0}to{transform:scale(1);opacity:1}}@keyframes vux-dialog-out{0%{transform:scale(1);opacity:1}to{transform:scale(.85);opacity:0}}.vux-mask-enter,.vux-mask-leave-active{opacity:0}.vux-mask-enter-active,.vux-mask-leave-active{transition:opacity .3s}.weui-mask{background:rgba(0,0,0,.6)}.weui-mask,.weui-mask_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}@font-face{font-weight:400;font-style:normal;font-family:weui;src:url(\"data:application/octet-stream;base64,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\") format(\"truetype\")}[class*=\" weui-icon-\"],[class^=weui-icon-]{display:inline-block;vertical-align:middle;font:normal normal normal 14px/1 weui;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased}[class*=\" weui-icon-\"]:before,[class^=weui-icon-]:before{display:inline-block;margin-left:.2em;margin-right:.2em}.weui-icon-circle:before{content:\"\\EA01\"}.weui-icon-download:before{content:\"\\EA02\"}.weui-icon-info:before{content:\"\\EA03\"}.weui-icon-safe-success:before{content:\"\\EA04\"}.weui-icon-safe-warn:before{content:\"\\EA05\"}.weui-icon-success:before{content:\"\\EA06\"}.weui-icon-success-circle:before{content:\"\\EA07\"}.weui-icon-success-no-circle:before{content:\"\\EA08\"}.weui-icon-waiting:before{content:\"\\EA09\"}.weui-icon-waiting-circle:before{content:\"\\EA0A\"}.weui-icon-warn:before{content:\"\\EA0B\"}.weui-icon-info-circle:before{content:\"\\EA0C\"}.weui-icon-cancel:before{content:\"\\EA0D\"}.weui-icon-search:before{content:\"\\EA0E\"}.weui-icon-clear:before{content:\"\\EA0F\"}.weui-icon-back:before{content:\"\\EA10\"}.weui-icon-delete:before{content:\"\\EA11\"}[class*=\" weui-icon_\"]:before,[class^=weui-icon_]:before{margin:0}.weui-icon-success{font-size:23px;color:#09bb07}.weui-icon-waiting{font-size:23px;color:#10aeff}.weui-icon-warn{font-size:23px;color:#f43530}.weui-icon-info{font-size:23px;color:#10aeff}.weui-icon-success-circle,.weui-icon-success-no-circle{font-size:23px;color:#09bb07}.weui-icon-waiting-circle{font-size:23px;color:#10aeff}.weui-icon-circle{font-size:23px;color:#c9c9c9}.weui-icon-download,.weui-icon-info-circle{font-size:23px;color:#09bb07}.weui-icon-safe-success{color:#09bb07}.weui-icon-safe-warn{color:#ffbe00}.weui-icon-cancel{color:#f43530;font-size:22px}.weui-icon-clear,.weui-icon-search{color:#b2b2b2;font-size:14px}.weui-icon-delete.weui-icon_gallery-delete{color:#fff;font-size:22px}.weui-icon_msg{font-size:93px}.weui-icon_msg.weui-icon-warn{color:#f76260}.weui-icon_msg-primary{font-size:93px}.weui-icon_msg-primary.weui-icon-warn{color:#ffbe00}.weui-toast{position:fixed;z-index:5001;width:7.6em;min-height:7.6em;top:180px;left:50%;margin-left:-3.8em;background:hsla(0,0%,7%,.7);text-align:center;border-radius:5px;color:#fff}.weui-icon_toast{margin:22px 0 0;display:block}.weui-icon_toast.weui-icon-success-no-circle:before{color:#fff;font-size:55px}.weui-icon_toast.weui-loading{margin:30px 0 0;width:38px;height:38px;vertical-align:baseline}.weui-toast__content{margin:0 0 15px}.weui-toast.vux-toast-top{top:10px}.weui-toast.vux-toast-bottom{top:auto;bottom:10px;transform:translateX(-50%)}.weui-toast.vux-toast-middle{top:50%;transform:translateX(-50%) translateY(-50%)}.vux-slide-from-top-enter,.vux-slide-from-top-leave-active{opacity:0;transform:translateX(-50%) translateY(-100%)!important}.vux-slide-from-bottom-enter,.vux-slide-from-bottom-leave-active{opacity:0;transform:translateX(-50%) translateY(100%)!important}.vux-slide-from-bottom-enter-active,.vux-slide-from-bottom-leave-active,.vux-slide-from-top-enter-active,.vux-slide-from-top-leave-active{transition:all .4s cubic-bezier(.36,.66,.04,1)}.weui-toast{transform:translateX(-50%);margin-left:0!important}.weui-toast.weui-toast_forbidden{color:#f76260}.weui-toast.weui-toast_forbidden .weui-toast__content{margin-top:10px}.weui-toast.weui-toast_text{min-height:0}.weui-toast_text .weui-toast__content{margin:0;padding-top:10px;padding-bottom:10px;border-radius:15px}.weui-toast__content{font-size:16px}.weui-loading_toast .weui-toast__content{margin-top:0}.weui-toast_success .weui-icon_toast:before{content:\"\\EA08\"}.weui-toast_cancel .weui-icon_toast:before{content:\"\\EA0D\"}.weui-toast_forbidden .weui-icon_toast.weui-icon-success-no-circle:before{content:\"\\EA0B\";color:#f76260}", "", {"version":3,"sources":["F:/WXH5/node_modules/_vux@2.9.1@vux/src/components/toast/index.vue"],"names":[],"mappings":"AACA,8CAEE,UAAW,AACX,6BAAgC,CACjC,AACD,mCAEE,SAAW,CACZ,AACD,yBACE,2BAA8B,CAC/B,AACD,yBACE,4BAA+B,CAChC,AACD,yBACA,GACI,uBAAwB,AACxB,SAAW,CACd,AACD,GACI,mBAAoB,AACpB,SAAW,CACd,CACA,AACD,0BACA,GACI,mBAAoB,AACpB,SAAW,CACd,AACD,GACI,qBAAuB,AACvB,SAAW,CACd,CACA,AACD,uCAEE,SAAW,CACZ,AACD,8CAEE,sBAA0B,CAC3B,AAiSD,WAOE,yBAA+B,CAChC,AACD,kCARE,eAAgB,AAChB,aAAc,AACd,MAAO,AACP,QAAS,AACT,OAAQ,AACR,QAAU,CAUX,AACD,WACE,gBAAoB,AACpB,kBAAmB,AACnB,iBAAoB,AACpB,mmMAAqmM,CACtmM,AACD,2CAEE,qBAAsB,AACtB,sBAAuB,AACvB,sCAAyC,AACzC,kBAAmB,AACnB,oBAAqB,AACrB,kCAAoC,CACrC,AACD,yDAEE,qBAAsB,AACtB,iBAAkB,AAClB,iBAAmB,CACpB,AACD,yBACE,eAAiB,CAClB,AAED,2BACE,eAAiB,CAClB,AAED,uBACE,eAAiB,CAClB,AAED,+BACE,eAAiB,CAClB,AAED,4BACE,eAAiB,CAClB,AAED,0BACE,eAAiB,CAClB,AAED,iCACE,eAAiB,CAClB,AAED,oCACE,eAAiB,CAClB,AAED,0BACE,eAAiB,CAClB,AAED,iCACE,eAAiB,CAClB,AAED,uBACE,eAAiB,CAClB,AAED,8BACE,eAAiB,CAClB,AAED,yBACE,eAAiB,CAClB,AAED,yBACE,eAAiB,CAClB,AAED,wBACE,eAAiB,CAClB,AAED,uBACE,eAAiB,CAClB,AAED,yBACE,eAAiB,CAClB,AAED,yDAEE,QAAU,CACX,AACD,mBACE,eAAgB,AAChB,aAAe,CAChB,AACD,mBACE,eAAgB,AAChB,aAAe,CAChB,AACD,gBACE,eAAgB,AAChB,aAAe,CAChB,AACD,gBACE,eAAgB,AAChB,aAAe,CAChB,AAKD,uDAHE,eAAgB,AAChB,aAAe,CAKhB,AACD,0BACE,eAAgB,AAChB,aAAe,CAChB,AACD,kBACE,eAAgB,AAChB,aAAe,CAChB,AAKD,2CAHE,eAAgB,AAChB,aAAe,CAKhB,AACD,wBACE,aAAe,CAChB,AACD,qBACE,aAAe,CAChB,AACD,kBACE,cAAe,AACf,cAAgB,CACjB,AAKD,mCACE,cAAe,AACf,cAAgB,CACjB,AACD,2CACE,WAAe,AACf,cAAgB,CACjB,AACD,eACE,cAAgB,CACjB,AACD,8BACE,aAAe,CAChB,AACD,uBACE,cAAgB,CACjB,AACD,sCACE,aAAe,CAChB,AACD,YACE,eAAgB,AAChB,aAAc,AACd,YAAa,AACb,iBAAkB,AAClB,UAAW,AACX,SAAU,AACV,mBAAoB,AACpB,4BAAkC,AAClC,kBAAmB,AACnB,kBAAmB,AACnB,UAAe,CAChB,AACD,iBACE,gBAAiB,AACjB,aAAe,CAChB,AACD,oDACE,WAAe,AACf,cAAgB,CACjB,AACD,8BACE,gBAAiB,AACjB,WAAY,AACZ,YAAa,AACb,uBAAyB,CAC1B,AACD,qBACE,eAAiB,CAClB,AACD,0BACE,QAAU,CACX,AACD,6BACE,SAAU,AACV,YAAa,AACb,0BAA4B,CAC7B,AACD,6BACE,QAAS,AACT,2CAA6C,CAC9C,AACD,2DAEE,UAAW,AACX,sDAAyD,CAC1D,AACD,iEAEE,UAAW,AACX,qDAAwD,CACzD,AACD,0IAIE,8CAAwD,CACzD,AACD,YACE,2BAA4B,AAC5B,uBAAyB,CAC1B,AACD,iCACE,aAAe,CAChB,AACD,sDACE,eAAiB,CAClB,AACD,4BACE,YAAc,CACf,AACD,sCACE,SAAU,AACV,iBAAkB,AAClB,oBAAqB,AACrB,kBAAoB,CACrB,AACD,qBACE,cAAgB,CACjB,AACD,yCACE,YAAc,CACf,AACD,4CACE,eAAiB,CAClB,AACD,2CACE,eAAiB,CAClB,AACD,0EACE,gBAAiB,AACjB,aAAe,CAChB","file":"index.vue","sourcesContent":["\n.vux-fade-enter-active,\n.vux-fade-leave-active {\n  opacity: 1;\n  transition: opacity linear 0.2s;\n}\n.vux-fade-enter,\n.vux-fade-leave-to {\n  opacity: 0;\n}\n.vux-dialog-enter-active {\n  animation: vux-dialog-in 0.5s;\n}\n.vux-dialog-leave-active {\n  animation: vux-dialog-out 0.3s;\n}\n@keyframes vux-dialog-in {\n0% {\n    transform: scale(1.185);\n    opacity: 0;\n}\n100% {\n    transform: scale(1);\n    opacity: 1;\n}\n}\n@keyframes vux-dialog-out {\n0% {\n    transform: scale(1);\n    opacity: 1;\n}\n100% {\n    transform: scale(0.85);\n    opacity: 0;\n}\n}\n.vux-mask-enter,\n.vux-mask-leave-active {\n  opacity: 0;\n}\n.vux-mask-leave-active,\n.vux-mask-enter-active {\n  transition: opacity 300ms;\n}\n/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.weui-mask {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.weui-mask_transparent {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n}\n@font-face {\n  font-weight: normal;\n  font-style: normal;\n  font-family: \"weui\";\n  src: url('data:application/octet-stream;base64,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') format('truetype');\n}\n[class^=\"weui-icon-\"],\n[class*=\" weui-icon-\"] {\n  display: inline-block;\n  vertical-align: middle;\n  font: normal normal normal 14px/1 \"weui\";\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n}\n[class^=\"weui-icon-\"]:before,\n[class*=\" weui-icon-\"]:before {\n  display: inline-block;\n  margin-left: .2em;\n  margin-right: .2em;\n}\n.weui-icon-circle:before {\n  content: \"\\EA01\";\n}\n/* '' */\n.weui-icon-download:before {\n  content: \"\\EA02\";\n}\n/* '' */\n.weui-icon-info:before {\n  content: \"\\EA03\";\n}\n/* '' */\n.weui-icon-safe-success:before {\n  content: \"\\EA04\";\n}\n/* '' */\n.weui-icon-safe-warn:before {\n  content: \"\\EA05\";\n}\n/* '' */\n.weui-icon-success:before {\n  content: \"\\EA06\";\n}\n/* '' */\n.weui-icon-success-circle:before {\n  content: \"\\EA07\";\n}\n/* '' */\n.weui-icon-success-no-circle:before {\n  content: \"\\EA08\";\n}\n/* '' */\n.weui-icon-waiting:before {\n  content: \"\\EA09\";\n}\n/* '' */\n.weui-icon-waiting-circle:before {\n  content: \"\\EA0A\";\n}\n/* '' */\n.weui-icon-warn:before {\n  content: \"\\EA0B\";\n}\n/* '' */\n.weui-icon-info-circle:before {\n  content: \"\\EA0C\";\n}\n/* '' */\n.weui-icon-cancel:before {\n  content: \"\\EA0D\";\n}\n/* '' */\n.weui-icon-search:before {\n  content: \"\\EA0E\";\n}\n/* '' */\n.weui-icon-clear:before {\n  content: \"\\EA0F\";\n}\n/* '' */\n.weui-icon-back:before {\n  content: \"\\EA10\";\n}\n/* '' */\n.weui-icon-delete:before {\n  content: \"\\EA11\";\n}\n/* '' */\n[class^=\"weui-icon_\"]:before,\n[class*=\" weui-icon_\"]:before {\n  margin: 0;\n}\n.weui-icon-success {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui-icon-waiting {\n  font-size: 23px;\n  color: #10AEFF;\n}\n.weui-icon-warn {\n  font-size: 23px;\n  color: #F43530;\n}\n.weui-icon-info {\n  font-size: 23px;\n  color: #10AEFF;\n}\n.weui-icon-success-circle {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui-icon-success-no-circle {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui-icon-waiting-circle {\n  font-size: 23px;\n  color: #10AEFF;\n}\n.weui-icon-circle {\n  font-size: 23px;\n  color: #C9C9C9;\n}\n.weui-icon-download {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui-icon-info-circle {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui-icon-safe-success {\n  color: #09BB07;\n}\n.weui-icon-safe-warn {\n  color: #FFBE00;\n}\n.weui-icon-cancel {\n  color: #F43530;\n  font-size: 22px;\n}\n.weui-icon-search {\n  color: #B2B2B2;\n  font-size: 14px;\n}\n.weui-icon-clear {\n  color: #B2B2B2;\n  font-size: 14px;\n}\n.weui-icon-delete.weui-icon_gallery-delete {\n  color: #FFFFFF;\n  font-size: 22px;\n}\n.weui-icon_msg {\n  font-size: 93px;\n}\n.weui-icon_msg.weui-icon-warn {\n  color: #F76260;\n}\n.weui-icon_msg-primary {\n  font-size: 93px;\n}\n.weui-icon_msg-primary.weui-icon-warn {\n  color: #FFBE00;\n}\n.weui-toast {\n  position: fixed;\n  z-index: 5001;\n  width: 7.6em;\n  min-height: 7.6em;\n  top: 180px;\n  left: 50%;\n  margin-left: -3.8em;\n  background: rgba(17, 17, 17, 0.7);\n  text-align: center;\n  border-radius: 5px;\n  color: #FFFFFF;\n}\n.weui-icon_toast {\n  margin: 22px 0 0;\n  display: block;\n}\n.weui-icon_toast.weui-icon-success-no-circle:before {\n  color: #FFFFFF;\n  font-size: 55px;\n}\n.weui-icon_toast.weui-loading {\n  margin: 30px 0 0;\n  width: 38px;\n  height: 38px;\n  vertical-align: baseline;\n}\n.weui-toast__content {\n  margin: 0 0 15px;\n}\n.weui-toast.vux-toast-top {\n  top: 10px;\n}\n.weui-toast.vux-toast-bottom {\n  top: auto;\n  bottom: 10px;\n  transform: translateX(-50%);\n}\n.weui-toast.vux-toast-middle {\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n.vux-slide-from-top-enter,\n.vux-slide-from-top-leave-active {\n  opacity: 0;\n  transform: translateX(-50%) translateY(-100%) !important;\n}\n.vux-slide-from-bottom-enter,\n.vux-slide-from-bottom-leave-active {\n  opacity: 0;\n  transform: translateX(-50%) translateY(100%) !important;\n}\n.vux-slide-from-top-enter-active,\n.vux-slide-from-top-leave-active,\n.vux-slide-from-bottom-enter-active,\n.vux-slide-from-bottom-leave-active {\n  transition: all 400ms cubic-bezier(0.36, 0.66, 0.04, 1);\n}\n.weui-toast {\n  transform: translateX(-50%);\n  margin-left: 0!important;\n}\n.weui-toast.weui-toast_forbidden {\n  color: #F76260;\n}\n.weui-toast.weui-toast_forbidden .weui-toast__content {\n  margin-top: 10px;\n}\n.weui-toast.weui-toast_text {\n  min-height: 0;\n}\n.weui-toast_text .weui-toast__content {\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-radius: 15px;\n}\n.weui-toast__content {\n  font-size: 16px;\n}\n.weui-loading_toast .weui-toast__content {\n  margin-top: 0;\n}\n.weui-toast_success .weui-icon_toast:before {\n  content: \"\\EA08\";\n}\n.weui-toast_cancel .weui-icon_toast:before {\n  content: \"\\EA0D\";\n}\n.weui-toast_forbidden .weui-icon_toast.weui-icon-success-no-circle:before {\n  content: \"\\EA0B\";\n  color: #F76260;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(639);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(488)("7d617558", content, true);

/***/ }),

/***/ 655:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-toast"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowMask && _vm.show),
      expression: "isShowMask && show"
    }],
    staticClass: "weui-mask_transparent"
  }), _vm._v(" "), _c('transition', {
    attrs: {
      "name": _vm.currentTransition
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "weui-toast",
    class: _vm.toastClass,
    style: ({
      width: _vm.width
    })
  }, [_c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.type !== 'text'),
      expression: "type !== 'text'"
    }],
    staticClass: "weui-icon-success-no-circle weui-icon_toast"
  }), _vm._v(" "), (_vm.text) ? _c('p', {
    staticClass: "weui-toast__content",
    style: (_vm.style),
    domProps: {
      "innerHTML": _vm._s(_vm.text)
    }
  }) : _c('p', {
    staticClass: "weui-toast__content",
    style: (_vm.style)
  }, [_vm._t("default")], 2)])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(652)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(633),
  /* template */
  __webpack_require__(655),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_base__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__toast__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inline_desc__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inline_desc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__inline_desc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_validator_lib_isEmail__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_validator_lib_isEmail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_validator_lib_isEmail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_validator_lib_isMobilePhone__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_validator_lib_isMobilePhone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_validator_lib_isMobilePhone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_debounce__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vanilla_masker__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vanilla_masker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vanilla_masker__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













const validators = {
  'email': {
    fn: __WEBPACK_IMPORTED_MODULE_4_validator_lib_isEmail___default.a,
    msg: '邮箱格式'
  },
  'china-mobile': {
    fn(str) {
      return __WEBPACK_IMPORTED_MODULE_5_validator_lib_isMobilePhone___default()(str, 'zh-CN');
    },
    msg: '手机号码'
  },
  'china-name': {
    fn(str) {
      return str.length >= 2 && str.length <= 6;
    },
    msg: '中文姓名'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'x-input',
  created() {
    this.currentValue = this.value === undefined || this.value === null ? '' : this.mask ? this.maskValue(this.value) : this.value;
    /* istanbul ignore if */
    if (false) {
      if (!this.title && !this.placeholder && !this.currentValue) {
        console.warn('no title and no placeholder?');
      }
    }

    if (this.required && (typeof this.currentValue === 'undefined' || this.currentValue === '')) {
      this.valid = false;
    }
    this.handleChangeEvent = true;
    if (this.debounce) {
      this._debounce = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__tools_debounce__["a" /* default */])(() => {
        this.$emit('on-change', this.currentValue);
      }, this.debounce);
    }
  },
  beforeMount() {
    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true;
    }
    if (this.$slots && this.$slots['right-full-height']) {
      this.hasRightFullHeightSlot = true;
    }
  },
  beforeDestroy() {
    if (this._debounce) {
      this._debounce.cancel();
    }
    window.removeEventListener('resize', this.scrollIntoView);
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__libs_base__["a" /* default */]],
  components: {
    Icon: __WEBPACK_IMPORTED_MODULE_1__icon___default.a,
    InlineDesc: __WEBPACK_IMPORTED_MODULE_3__inline_desc___default.a,
    Toast: __WEBPACK_IMPORTED_MODULE_2__toast___default.a
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: [String, Number],
    name: String,
    readonly: Boolean,
    disabled: Boolean,
    keyboard: String,
    inlineDesc: String,
    isType: [String, Function],
    min: Number,
    max: Number,
    showClear: {
      type: Boolean,
      default: true
    },
    equalWith: String,
    textAlign: String,
    // https://github.com/yisibl/blog/issues/3
    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    novalidate: {
      type: Boolean,
      default: false
    },
    iconType: String,
    debounce: Number,
    placeholderAlign: String,
    labelWidth: String,
    mask: String,
    shouldToastError: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    labelStyles() {
      return {
        width: this.labelWidthComputed || this.$parent.labelWidth || this.labelWidthComputed,
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      };
    },
    labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    },
    pattern() {
      if (this.keyboard === 'number' || this.isType === 'china-mobile') {
        return '[0-9]*';
      }
    },
    labelWidthComputed() {
      const width = this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1;
      if (width < 10) {
        return width + 'em';
      }
    },
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    },
    inputStyle() {
      if (this.textAlign) {
        return {
          textAlign: this.textAlign
        };
      }
    },
    showWarn() {
      return !this.novalidate && !this.equalWith && !this.valid && this.firstError && (this.touched || this.forceShowError);
    }
  },
  mounted() {
    window.addEventListener('resize', this.scrollIntoView);
  },
  methods: {
    scrollIntoView(time = 0) {
      // alert('scroll into view')
      if (/iphone/i.test(navigator.userAgent)) {
        // return
      }
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        // alert('will scroll')
        setTimeout(() => {
          // alert(this.$refs.input.length)
          this.$refs.input.scrollIntoViewIfNeeded(true);
        }, time);
      }
    },
    onClickErrorIcon() {
      if (this.shouldToastError && this.firstError) {
        this.showErrorToast = true;
      }
      this.$emit('on-click-error-icon', this.firstError);
    },
    maskValue(val) {
      const val1 = this.mask ? __WEBPACK_IMPORTED_MODULE_7_vanilla_masker___default.a.toPattern(val, this.mask) : val;
      return val1;
    },
    reset(value = '') {
      this.dirty = false;
      this.currentValue = value;
      this.firstError = '';
      this.valid = true;
    },
    clear() {
      this.currentValue = '';
      this.focus();
      this.$emit('on-click-clear-icon');
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
    focusHandler($event) {
      this.$emit('on-focus', this.currentValue, $event);
      this.isFocus = true;
      // this.scrollIntoView(500)
      // this.scrollIntoView(5000)
      setTimeout(() => {
        this.$refs.input.scrollIntoViewIfNeeded(false);
        // this.$refs.input.scrollIntoViewIfNeeded()
      }, 1000);
      // $event.target.
    },
    onBlur($event) {
      this.setTouched();
      this.validate();
      this.isFocus = false;
      this.$emit('on-blur', this.currentValue, $event);
    },
    onKeyUp(e) {
      if (e.key === 'Enter') {
        e.target.blur();
        this.$emit('on-enter', this.currentValue, e);
      }
    },
    getError() {
      let key = Object.keys(this.errors)[0];
      this.firstError = this.errors[key];
    },
    validate() {
      if (typeof this.equalWith !== 'undefined') {
        this.validateEqual();
        return;
      }
      this.errors = {};

      if (!this.currentValue && !this.required) {
        this.valid = true;
        return;
      }

      if (!this.currentValue && this.required) {
        this.valid = false;
        this.errors.required = '必填哦';
        this.getError();
        return;
      }

      if (typeof this.isType === 'string') {
        const validator = validators[this.isType];
        if (validator) {
          let value = this.currentValue;

          if (this.isType === 'china-mobile' && this.mask === '999 9999 9999') {
            value = this.currentValue.replace(/\s+/g, '');
          }

          this.valid = validator['fn'](value);
          if (!this.valid) {
            this.forceShowError = true;
            this.errors.format = validator['msg'] + '格式不对哦~';
            this.getError();
            return;
          } else {
            delete this.errors.format;
          }
        }
      }

      if (typeof this.isType === 'function') {
        const validStatus = this.isType(this.currentValue);
        this.valid = validStatus.valid;
        if (!this.valid) {
          this.errors.format = validStatus.msg;
          this.forceShowError = true;
          this.getError();
          return;
        } else {
          delete this.errors.format;
        }
      }

      if (this.min) {
        if (this.currentValue.length < this.min) {
          this.errors.min = `最少应该输入${this.min}个字符哦`;
          this.valid = false;
          this.getError();
          return;
        } else {
          delete this.errors.min;
        }
      }

      if (this.max) {
        if (this.currentValue.length > this.max) {
          this.errors.max = `最多可以输入${this.max}个字符哦`;
          this.valid = false;
          this.forceShowError = true;
          return;
        } else {
          this.forceShowError = false;
          delete this.errors.max;
        }
      }

      this.valid = true;
    },
    validateEqual() {
      if (!this.equalWith && this.currentValue) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      }
      let willCheck = this.dirty || this.currentValue.length >= this.equalWith.length;
      // 只在长度符合时显示正确与否
      if (willCheck && this.currentValue !== this.equalWith) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      } else {
        if (!this.currentValue && this.required) {
          this.valid = false;
        } else {
          this.valid = true;
          delete this.errors.equal;
        }
      }
    }
  },
  data() {
    return {
      hasRightFullHeightSlot: false,
      hasRestrictedLabel: false,
      firstError: '',
      forceShowError: false,
      hasLengthEqual: false,
      valid: true,
      currentValue: '',
      showErrorToast: false,
      isFocus: false
    };
  },
  watch: {
    mask(val) {
      if (val && this.currentValue) {
        this.currentValue = this.maskValue(this.currentValue);
      }
    },
    valid() {
      this.getError();
    },
    value(val) {
      this.currentValue = val;
    },
    equalWith(newVal) {
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }
    },
    currentValue(newVal) {
      if (!this.equalWith && newVal) {
        this.validateEqual();
      }
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }
      this.$emit('input', this.maskValue(newVal));
      if (this._debounce) {
        this._debounce();
      } else {
        this.$emit('on-change', newVal);
      }
    }
  }
});

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_uuid__ = __webpack_require__(671);


/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_uuid__["a" /* default */]],
  props: {
    required: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.handleChangeEvent = false;
  },
  computed: {
    dirty: {
      get: function () {
        return !this.pristine;
      },
      set: function (newValue) {
        this.pristine = !newValue;
      }
    },
    invalid() {
      return !this.valid;
    }
  },
  methods: {
    setTouched() {
      this.touched = true;
    }
  },
  watch: {
    value(newVal) {
      if (this.pristine === true) {
        this.pristine = false;
      }
      if (!this.handleChangeEvent) {
        this.$emit('on-change', newVal);
        this.$emit('input', newVal);
      }
    }
  },
  data() {
    return {
      errors: {},
      pristine: true,
      touched: false
    };
  }
});

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  mounted() {
    // fix for ssr
    if (false) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[VUX] 当前版本组件要求 vux-loader 更新到最新版本');
      }
    } else if (false) {
      // eslint-disable-line
      this.uuid = createId();
    }
  },
  data() {
    return {
      uuid: createId()
    };
  }
});

function createId() {
  return Math.random().toString(36).substring(3, 8);
}

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_debounce__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_debounce__);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_lodash_debounce___default.a);

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(487)();
// imports


// module
exports.push([module.i, ".weui-cell_access{-webkit-tap-highlight-color:rgba(0,0,0,0);color:inherit}.weui-cell_access:active{background-color:#ececec}.weui-cell_access .weui-cell__ft{padding-right:13px;position:relative}.weui-cell_access .weui-cell__ft:after{content:\" \";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:2px}.weui-cell_link{color:#586c94;font-size:14px}.weui-cell_link.weui-cell:first-child:before{display:block}.weui-cell_access.vux-cell-box{padding-right:13px;position:relative}.weui-cell_access.vux-cell-box:after{content:\" \";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:17px}.weui-cells{margin-top:1.17647059em;background-color:#fff;line-height:1.41176471;font-size:17px;overflow:hidden;position:relative}.weui-cells:before{top:0;border-top:1px solid #d9d9d9;transform-origin:0 0;transform:scaleY(.5)}.weui-cells:after,.weui-cells:before{content:\" \";position:absolute;left:0;right:0;height:1px;color:#d9d9d9}.weui-cells:after{bottom:0;border-bottom:1px solid #d9d9d9;transform-origin:0 100%;transform:scaleY(.5)}.weui-cells__title{margin-top:.77em;margin-bottom:.3em;padding-left:15px;padding-right:15px;color:#999;font-size:14px}.weui-cells__title+.weui-cells{margin-top:0}.weui-cells__tips{margin-top:.3em;color:#999;padding-left:15px;padding-right:15px;font-size:14px}.weui-cell{padding:10px 15px;position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.weui-cell:before{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;transform-origin:0 0;transform:scaleY(.5);left:15px}.weui-cell:first-child:before{display:none}.weui-cell_primary{-ms-flex-align:start;align-items:flex-start}.weui-cell__bd{-ms-flex:1;flex:1}.weui-cell__ft{text-align:right;color:#999}.vux-cell-justify{height:1.41176471em}.vux-cell-justify.vux-cell-justify:after{content:\".\";display:inline-block;width:100%;overflow:hidden;height:0}.weui-label{display:block;width:105px;word-wrap:break-word;word-break:break-all}.weui-input{width:100%;border:0;outline:0;-webkit-appearance:none;background-color:transparent;font-size:inherit;color:inherit;height:1.41176471em;line-height:1.41176471}.weui-input::-webkit-inner-spin-button,.weui-input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.weui-textarea{display:block;border:0;resize:none;width:100%;color:inherit;font-size:1em;line-height:inherit;outline:0}.weui-textarea-counter{color:#b2b2b2;text-align:right}.weui-cell_warn .weui-textarea-counter{color:#e64340}.weui-toptips{display:none;position:fixed;transform:translateZ(0);top:0;left:0;right:0;padding:5px;font-size:14px;text-align:center;color:#fff;z-index:5000;word-wrap:break-word;word-break:break-all}.weui-toptips_warn{background-color:#e64340}.weui-cells_form .weui-cell__ft{font-size:0}.weui-cells_form .weui-icon-warn{display:none}.weui-cells_form input,.weui-cells_form label[for],.weui-cells_form textarea{-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-cell_warn{color:#e64340}.weui-cell_warn .weui-icon-warn{display:inline-block}.weui-cell_vcode{padding-top:0;padding-right:0;padding-bottom:0}.weui-vcode-btn,.weui-vcode-img{margin-left:5px;height:44px;vertical-align:middle}.weui-vcode-btn{display:inline-block;padding:0 .6em 0 .7em;border-left:1px solid #e5e5e5;line-height:44px;font-size:17px;color:#3cc51f}button.weui-vcode-btn{background-color:transparent;border-top:0;border-right:0;border-bottom:0;outline:0}.weui-vcode-btn:active{color:#52a341}.vux-x-input .vux-x-input-placeholder-right input::-webkit-input-placeholder{text-align:right}.vux-x-input .vux-x-input-placeholder-center input::-webkit-input-placeholder{text-align:center}.vux-input-icon.weui-icon-success:before,.vux-input-icon.weui-icon-warn:before,.vux-x-input .vux-input-icon{font-size:21px}.vux-x-input .weui-icon{padding-left:5px}.vux-x-input.weui-cell_vcode{padding-top:0;padding-right:0;padding-bottom:0}.vux-x-input.disabled .weui-input{text-fill-color:#888;-webkit-text-fill-color:#888;opacity:1}.vux-x-input-right-full{margin-left:5px;height:44px;vertical-align:middle}.vux-x-input-right-full img{height:44px}.vux-x-input-has-right-full{padding-top:0;padding-right:0;padding-bottom:0}", "", {"version":3,"sources":["F:/WXH5/node_modules/_vux@2.9.1@vux/src/components/x-input/index.vue"],"names":[],"mappings":"AAgSA,kBACE,0CAA8C,AAC9C,aAAe,CAChB,AACD,yBACE,wBAA0B,CAC3B,AACD,iCACE,mBAAoB,AACpB,iBAAmB,CACpB,AACD,uCACE,YAAa,AACb,qBAAsB,AACtB,WAAY,AACZ,UAAW,AACX,yBAA0B,AAC1B,qBAAsB,AACtB,mBAAoB,AACpB,uCAAiD,AACjD,kBAAmB,AACnB,SAAU,AACV,kBAAmB,AACnB,QAAS,AACT,gBAAiB,AACjB,SAAW,CACZ,AACD,gBACE,cAAe,AACf,cAAgB,CACjB,AACD,6CACE,aAAe,CAChB,AACD,+BACE,mBAAoB,AACpB,iBAAmB,CACpB,AACD,qCACE,YAAa,AACb,qBAAsB,AACtB,WAAY,AACZ,UAAW,AACX,yBAA0B,AAC1B,qBAAsB,AACtB,mBAAoB,AACpB,uCAAiD,AACjD,kBAAmB,AACnB,SAAU,AACV,kBAAmB,AACnB,QAAS,AACT,gBAAiB,AACjB,UAAY,CACb,AACD,YACE,wBAAyB,AACzB,sBAA0B,AAC1B,uBAAwB,AACxB,eAAgB,AAChB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,mBAIE,MAAO,AAGP,6BAA8B,AAE9B,qBAAsB,AACtB,oBAAuB,CACxB,AACD,qCAXE,YAAa,AACb,kBAAmB,AACnB,OAAQ,AAER,QAAS,AACT,WAAY,AAEZ,aAAe,CAehB,AAXD,kBAIE,SAAU,AAGV,gCAAiC,AAEjC,wBAAyB,AACzB,oBAAuB,CACxB,AACD,mBACE,iBAAmB,AACnB,mBAAqB,AACrB,kBAAmB,AACnB,mBAAoB,AACpB,WAAe,AACf,cAAgB,CACjB,AACD,+BACE,YAAc,CACf,AACD,kBACE,gBAAiB,AACjB,WAAe,AACf,kBAAmB,AACnB,mBAAoB,AACpB,cAAgB,CACjB,AACD,WACE,kBAAmB,AACnB,kBAAmB,AACnB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,kBAAoB,CACzB,AACD,kBACE,YAAa,AACb,kBAAmB,AACnB,OAAQ,AACR,MAAO,AACP,QAAS,AACT,WAAY,AACZ,6BAA8B,AAC9B,cAAe,AACf,qBAAsB,AACtB,qBAAuB,AACvB,SAAW,CACZ,AACD,8BACE,YAAc,CACf,AACD,mBACE,qBAAsB,AAClB,sBAAwB,CAC7B,AACD,eACE,WAAY,AACR,MAAQ,CACb,AACD,eACE,iBAAkB,AAClB,UAAe,CAChB,AACD,kBACE,mBAAqB,CACtB,AACD,yCACE,YAAa,AACb,qBAAsB,AACtB,WAAY,AACZ,gBAAiB,AACjB,QAAU,CACX,AACD,YACE,cAAe,AACf,YAAa,AACb,qBAAsB,AACtB,oBAAsB,CACvB,AACD,YACE,WAAY,AACZ,SAAU,AACV,UAAW,AACX,wBAAyB,AACzB,6BAA8B,AAC9B,kBAAmB,AACnB,cAAe,AACf,oBAAqB,AACrB,sBAAwB,CACzB,AACD,8EAEE,wBAAyB,AACzB,QAAU,CACX,AACD,eACE,cAAe,AACf,SAAU,AACV,YAAa,AACb,WAAY,AACZ,cAAe,AACf,cAAe,AACf,oBAAqB,AACrB,SAAW,CACZ,AACD,uBACE,cAAe,AACf,gBAAkB,CACnB,AACD,uCACE,aAAe,CAChB,AACD,cACE,aAAc,AACd,eAAgB,AAChB,wBAAyB,AACzB,MAAO,AACP,OAAQ,AACR,QAAS,AACT,YAAa,AACb,eAAgB,AAChB,kBAAmB,AACnB,WAAY,AACZ,aAAc,AACd,qBAAsB,AACtB,oBAAsB,CACvB,AACD,mBACE,wBAA0B,CAC3B,AACD,gCACE,WAAa,CACd,AACD,iCACE,YAAc,CACf,AACD,6EAGE,yCAA8C,CAC/C,AACD,gBACE,aAAe,CAChB,AACD,gCACE,oBAAsB,CACvB,AACD,iBACE,cAAe,AACf,gBAAiB,AACjB,gBAAkB,CACnB,AAMD,gCAJE,gBAAiB,AACjB,YAAa,AACb,qBAAuB,CAYxB,AAVD,gBACE,qBAAsB,AAGtB,sBAAyB,AACzB,8BAA+B,AAC/B,iBAAkB,AAElB,eAAgB,AAChB,aAAe,CAChB,AACD,sBACE,6BAA8B,AAC9B,aAAc,AACd,eAAgB,AAChB,gBAAiB,AACjB,SAAW,CACZ,AACD,uBACE,aAAe,CAChB,AACD,6EACE,gBAAkB,CACnB,AACD,8EACE,iBAAmB,CACpB,AAID,4GAEE,cAAgB,CACjB,AACD,wBACE,gBAAkB,CACnB,AACD,6BACE,cAAe,AACf,gBAAiB,AACjB,gBAAkB,CACnB,AACD,kCACE,qBAAsB,AACtB,6BAA8B,AAE9B,SAAW,CAEZ,AACD,wBACE,gBAAiB,AACjB,YAAa,AACb,qBAAuB,CACxB,AACD,4BACE,WAAa,CACd,AACD,4BACE,cAAe,AACf,gBAAiB,AACjB,gBAAkB,CACnB","file":"index.vue","sourcesContent":["/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.weui-cell_access {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  color: inherit;\n}\n.weui-cell_access:active {\n  background-color: #ECECEC;\n}\n.weui-cell_access .weui-cell__ft {\n  padding-right: 13px;\n  position: relative;\n}\n.weui-cell_access .weui-cell__ft:after {\n  content: \" \";\n  display: inline-block;\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  margin-top: -4px;\n  right: 2px;\n}\n.weui-cell_link {\n  color: #586C94;\n  font-size: 14px;\n}\n.weui-cell_link.weui-cell:first-child:before {\n  display: block;\n}\n.weui-cell_access.vux-cell-box {\n  padding-right: 13px;\n  position: relative;\n}\n.weui-cell_access.vux-cell-box:after {\n  content: \" \";\n  display: inline-block;\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  margin-top: -4px;\n  right: 17px;\n}\n.weui-cells {\n  margin-top: 1.17647059em;\n  background-color: #FFFFFF;\n  line-height: 1.41176471;\n  font-size: 17px;\n  overflow: hidden;\n  position: relative;\n}\n.weui-cells:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.weui-cells:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n}\n.weui-cells__title {\n  margin-top: 0.77em;\n  margin-bottom: 0.3em;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #999999;\n  font-size: 14px;\n}\n.weui-cells__title + .weui-cells {\n  margin-top: 0;\n}\n.weui-cells__tips {\n  margin-top: .3em;\n  color: #999999;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 14px;\n}\n.weui-cell {\n  padding: 10px 15px;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.weui-cell:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n  left: 15px;\n}\n.weui-cell:first-child:before {\n  display: none;\n}\n.weui-cell_primary {\n  -ms-flex-align: start;\n      align-items: flex-start;\n}\n.weui-cell__bd {\n  -ms-flex: 1;\n      flex: 1;\n}\n.weui-cell__ft {\n  text-align: right;\n  color: #999999;\n}\n.vux-cell-justify {\n  height: 1.41176471em;\n}\n.vux-cell-justify.vux-cell-justify:after {\n  content: \".\";\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  height: 0;\n}\n.weui-label {\n  display: block;\n  width: 105px;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.weui-input {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  -webkit-appearance: none;\n  background-color: transparent;\n  font-size: inherit;\n  color: inherit;\n  height: 1.41176471em;\n  line-height: 1.41176471;\n}\n.weui-input::-webkit-outer-spin-button,\n.weui-input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.weui-textarea {\n  display: block;\n  border: 0;\n  resize: none;\n  width: 100%;\n  color: inherit;\n  font-size: 1em;\n  line-height: inherit;\n  outline: 0;\n}\n.weui-textarea-counter {\n  color: #B2B2B2;\n  text-align: right;\n}\n.weui-cell_warn .weui-textarea-counter {\n  color: #E64340;\n}\n.weui-toptips {\n  display: none;\n  position: fixed;\n  transform: translateZ(0);\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 5px;\n  font-size: 14px;\n  text-align: center;\n  color: #FFF;\n  z-index: 5000;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.weui-toptips_warn {\n  background-color: #E64340;\n}\n.weui-cells_form .weui-cell__ft {\n  font-size: 0;\n}\n.weui-cells_form .weui-icon-warn {\n  display: none;\n}\n.weui-cells_form input,\n.weui-cells_form textarea,\n.weui-cells_form label[for] {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.weui-cell_warn {\n  color: #E64340;\n}\n.weui-cell_warn .weui-icon-warn {\n  display: inline-block;\n}\n.weui-cell_vcode {\n  padding-top: 0;\n  padding-right: 0;\n  padding-bottom: 0;\n}\n.weui-vcode-img {\n  margin-left: 5px;\n  height: 44px;\n  vertical-align: middle;\n}\n.weui-vcode-btn {\n  display: inline-block;\n  height: 44px;\n  margin-left: 5px;\n  padding: 0 0.6em 0 0.7em;\n  border-left: 1px solid #E5E5E5;\n  line-height: 44px;\n  vertical-align: middle;\n  font-size: 17px;\n  color: #3CC51F;\n}\nbutton.weui-vcode-btn {\n  background-color: transparent;\n  border-top: 0;\n  border-right: 0;\n  border-bottom: 0;\n  outline: 0;\n}\n.weui-vcode-btn:active {\n  color: #52a341;\n}\n.vux-x-input .vux-x-input-placeholder-right input::-webkit-input-placeholder {\n  text-align: right;\n}\n.vux-x-input .vux-x-input-placeholder-center input::-webkit-input-placeholder {\n  text-align: center;\n}\n.vux-x-input .vux-input-icon {\n  font-size: 21px;\n}\n.vux-input-icon.weui-icon-warn:before,\n.vux-input-icon.weui-icon-success:before {\n  font-size: 21px;\n}\n.vux-x-input .weui-icon {\n  padding-left: 5px;\n}\n.vux-x-input.weui-cell_vcode {\n  padding-top: 0;\n  padding-right: 0;\n  padding-bottom: 0;\n}\n.vux-x-input.disabled .weui-input {\n  text-fill-color: #888;\n  -webkit-text-fill-color: #888;\n  /* Override iOS / Android font color change */\n  opacity: 1;\n  /* Override iOS opacity change affecting text & background color */\n}\n.vux-x-input-right-full {\n  margin-left: 5px;\n  height: 44px;\n  vertical-align: middle;\n}\n.vux-x-input-right-full img {\n  height: 44px;\n}\n.vux-x-input-has-right-full {\n  padding-top: 0;\n  padding-right: 0;\n  padding-bottom: 0;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(673);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(488)("82e5cdfa", content, true);

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABTVBMVEX6TCP1SiMAAAD1SiP6TCPsSCHnRx/pRyL4TCP4TCP2TSP1SyP0SCLxRyHySCLrRSX8TSX0SSLxRirgRRzwRCvnRiPmRSXqSCT/TST/////TiT/TyX+TiX+OQz+j3b+USn+MAD+Qhf+MgP+LQD+UCf+Tib+Sh/+Rhv+PhL+Ngj+KwH/9/X+LgD/+Pf/29L/v7H/rpz+dFb+ZUP+SyH+KAD+IQD/7uv/1cv/t6f+hWr+gmf+a0n+Xzv+PxP/+vn/9PL/8O7/6eT/yLz+iW/+fV/+eVr+cE/+bkz+aEb+WTL+SB7+RBn+OAr+NAb//fz/5uD/4tz/0cf+zcL/ycD/vKz+rJj+nYj/mob+l4D+k3r+jHL+Yj3+Vi7+UCj7TiP+PRD+HAD+FAD+DQD/7Oj/xLb+s6L+pI/+Wjf+WTT9Th/+JgD+AwD9Z0T9US/+Mw+WTTofAAAAGHRSTlPy8gD19YRxI+rb0seklYwu965rYVw5GhcONkWeAAACU0lEQVQ4y32TZ3PaQBBAZRLbcU/PrdCpd8l0DBiDTTXVvVfA3U7y/z9mJWCSeMBvRprR7NPt3t0uEwgEvk/OTYxgbnEagyh8+ciywRGwwaspT/j6FCRjYMlUgPlxxZKxsNw0s4jxN4x5ZpYgHDFNwgnU0rlXwgfmHVagxeV6XSZSLUtzAmnkKKWmrvnCe18g9NRxjtvtAqRiXcW8iNVij9RuCr4wgUIrBohax1dmNbwCHrun11QgLOMLdA2QZhrAyQMsF4/4k22AlJTjBoIqV3YKsXPwSEUtMaEklT2AAzc+EDidKtTEpSM3ELK7rujKvSjAimH0Bc0t3Wy+HACs/czDXrR0xvN8LYa56mZfkJoAULIjvLwMQ0JeWdlWX2joZxsAqz27AIcP6wDhi80qV0Wh0h6kiCckTPDwe3cvaaN63xPlZBTwH3FYpNBK3kJZc/6mCJ//IyBC5x6qViRSDG1h9fvp3ZPaf4LQ1te39DLPSwlMcdw92vfPriIPhMtrJQXhpAOwaWORJy8OlOKAX1ZfuMw9hwGiyR2AcgePK32M28xirnPqC6qUSAPsWAm08kW/zn2AyAasC5IvGLmUd40J82IbPAqHlnsbTechZOl9oXEHsE0NoUUyPJ/JUiOT/VXGlSoi3iY2jNp4Xgsd2Sq5lETXFa3OIXg4vEiILxBOlQ0tToZI1dO7YuTsUdE1r6Nmva5Wm4ZKhgimrciKcq1xftMujGh7jsTx8WA/MdNvDg5ZYgKfn9jx8UlveKe4IDuSIDfpT3dgaWGGGcHM/DcM/gGfQYmWIa3qAgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAMAAAAmopZHAAAC7lBMVEUAAAD5EwvXCQUbGBX0CgPcCwbjCwXwCwPlAwD///8oHhsjGRYbEQ/ALS/kVlnxEwskGxgxFhSGDgvrEArcDgciGBXnEgveCgauCQbgBwTgBwPPBgPWAADJAADqEAn////1EAgnGBXeEAnzEwv0Ewr6EwyQi4o7MzALAwEAAACno6I0Kyn5EQqzm5wHAQDiGBP2Ew0uAABCIyHnHBhdJCLhHhvwGBTBiYnfIR//1NXcLC1/JSXfISL///8AAQD0Egv2Egr94uOeDA/qAwHmAgDsAADYAADMCRL3EwzxEgviBwjEBQTfAAHUAQDyAADiAAD2ur32q7HweXnjESfgDiEBGxgQGxcLGRXYCxQdFBLICA2aCwrrEQnXBwfdCQXuBgTkAAHeAAD93N3HxcT3srT5qan7k5Dtg4Djb3HrRUXkECDaDBvkDRrbDBcmGBXqAxPkABMCExDoEQwYDgvlEQjmDAUQBgPeBQLaAgAKAQD66On62tz61dX90tH30NH6x8r5xcT8t738trj8r6/2paz7paj1oKX4lqL2nJ/4lpnzkpP3iJPwkY/pjo3ui4uPionxgIj1g4D0c396dXTxb3PwZHL1dHDkOTo4NTPrFTPwDi3nESjvFSTdDh/oBx8lHhzeHhvfDBr0FBbSCxYsFxQaFxTwBhP0BxLuABANEg/WCQ7RCQ7bDQylDAoACgf6DwbvDAXIBgXkBwT4AgP3CgDwCACKAwD/AgDuAADdAAC+AADZ7+796u3Y5uXz3uDR0ND8vsGqsK+VsK71qqqrqKf5mabuo6Twmpv1jYvphYvpgIbpe4D0aHuCe3n8dHhRa2lRY2D5XmD1U2DrWF5eVlRdUVDZUk/bTErrMUdNSEb0QUVMQ0HrMz0rPjvuODTqLTTzGzPgMy/nIy0WLivoHCs0KygyKijyLCchKCXvBh3vBxHyBw/wFQzoFAz0Cgz3EgvYEgvwBQvfEAgkDAjgAAenCQbNAACyAABGAAA2AAAxJVqMAAAAPXRSTlMAyfLx/PLy8vK9vb29Egn19PPz8/Py8vLy8vLy8vLt6ODf3cnJvr29vb27tLSqpaCenJWVlI+Lc2ZQRTYvY8+GjAAAAkJJREFUKM8dy2NgGwEYBuCvWLtytm0bd5csaGw2rm2ltm1rta3Ztm3b279d+/x8AQDWOzcuM8AtNVhiMGrt9t2A27uwX0kjYBiBTqcTMAKNQOvs2wBgZRyIBShHA7ofhtG+BARgdGX/FtjW94lLoXA4lCFOLae3NpDa9p3T9bETFvcYC5ycCnNSU659vnxfp3YNYbuSuibAfLXGKc4ROewYm69JDS3KR9LTkbNDpjDlK4nC5Sa46ljkciqfd4OYmUnMIJnCVPWbHGdBRJzgXG5DdmgyQ1Bd7cLSTAfD4McODqcRO8eYhKflBXyHM2HhJ5JJJmCiJGt1VOQomdL07jqRF0+9UEi28xsP4xiBXFZESngaqbQ0NymRzwuzi41i4Ll6WBdNHH6CpDWVaJNi+G7Zzm3RfnNhBrWIyGMxtA8PRnmfQp7HJ0ZGZhBV88Aw5NltNsvDTVtZUHLx7s+X511cnO8w54Chhj3S3SrzKKv0KfP2EfpQmb/ZI8GzYLaCGcK0tdnvLhIKhSKRh6eNKpj8ayZMFtd1c/HCxt1NVFHhLmtpUQ0qxEYwSSquY5Nt8YdnTY2nTNaqGmwXS4zAyMvL98cfUg/Du7Gx4f2Hb72UAV+p1zRYVK8PetT8V6HYN6Z94N+Lt3r5RNiKvra/dewKKpFI0Q6J1LfjeN6lk0HNYKU/hKD2SFWQvOpecb0czUNePUCubgLYs+AAmoXcRP39j2ShcnziX4ysA5z1jvWrzVastLA0N7e0WLXcbM3mXQD/AWET4xCvem/AAAAAAElFTkSuQmCC"

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isByteLength;

var _assertString = __webpack_require__(570);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = __webpack_require__(570);

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = __webpack_require__(631);

var _merge2 = _interopRequireDefault(_merge);

var _isByteLength = __webpack_require__(695);

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isFQDN = __webpack_require__(697);

var _isFQDN2 = _interopRequireDefault(_isFQDN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(displayName);
    if (display_email) {
      str = display_email[1];
    } else if (options.require_display_name) {
      return false;
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');

  var lower_domain = domain.toLowerCase();
  if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 254 })) {
    return false;
  }

  if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
    return false;
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

  var user_parts = user.split('.');
  for (var i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
module.exports = exports['default'];

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFQDN;

var _assertString = __webpack_require__(570);

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = __webpack_require__(631);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFQDN(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  var parts = str.split('.');
  if (options.require_tld) {
    var tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
    // disallow spaces
    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }
  for (var part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    // disallow full-width chars
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMobilePhone;

var _assertString = __webpack_require__(570);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var phones = {
  'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
  'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
  'ar-EG': /^((\+?20)|0)?1[012]\d{8}$/,
  'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
  'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
  'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
  'be-BY': /^(\+?375)?(24|25|29|33|44)\d{7}$/,
  'bg-BG': /^(\+?359|0)?8[789]\d{7}$/,
  'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'da-DK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'de-DE': /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
  'el-GR': /^(\+?30|0)?(69\d{8})$/,
  'en-AU': /^(\+?61|0)4\d{8}$/,
  'en-GB': /^(\+?44|0)7\d{9}$/,
  'en-HK': /^(\+?852\-?)?[456789]\d{3}\-?\d{4}$/,
  'en-IN': /^(\+?91|0)?[6789]\d{9}$/,
  'en-KE': /^(\+?254|0)?[7]\d{8}$/,
  'en-NG': /^(\+?234|0)?[789]\d{9}$/,
  'en-NZ': /^(\+?64|0)2\d{7,9}$/,
  'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  'en-RW': /^(\+?250|0)?[7]\d{8}$/,
  'en-SG': /^(\+65)?[89]\d{7}$/,
  'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
  'en-UG': /^(\+?256|0)?[7]\d{8}$/,
  'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
  'en-ZA': /^(\+?27|0)\d{9}$/,
  'en-ZM': /^(\+?26)?09[567]\d{7}$/,
  'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
  'et-EE': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
  'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
  'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
  'fo-FO': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
  'he-IL': /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}/,
  'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
  'id-ID': /^(\+?62|0[1-9])[\s|\d]+$/,
  'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  'ja-JP': /^(\+?81|0)[789]0[ \-]?[1-9]\d{2}[ \-]?\d{5}$/,
  'kk-KZ': /^(\+?7|8)?7\d{9}$/,
  'kl-GL': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
  'lt-LT': /^(\+370|8)\d{8}$/,
  'ms-MY': /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
  'nb-NO': /^(\+?47)?[49]\d{7}$/,
  'nl-BE': /^(\+?32|0)4?\d{8}$/,
  'nn-NO': /^(\+?47)?[49]\d{7}$/,
  'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
  'pt-BR': /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,
  'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
  'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
  'ru-RU': /^(\+?7|8)?9\d{9}$/,
  'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
  'th-TH': /^(\+66|66|0)\d{9}$/,
  'tr-TR': /^(\+?90|0)?5\d{9}$/,
  'uk-UA': /^(\+?38|8)?0\d{9}$/,
  'vi-VN': /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
  'zh-CN': /^(\+?0?86\-?)?1[3456789]\d{9}$/,
  'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
};
/* eslint-enable max-len */

// aliases
phones['en-CA'] = phones['en-US'];
phones['fr-BE'] = phones['nl-BE'];
phones['zh-HK'] = phones['en-HK'];

function isMobilePhone(str, locale, options) {
  (0, _assertString2.default)(str);
  if (options && options.strictMode && !str.startsWith('+')) {
    return false;
  }
  if (locale in phones) {
    return phones[locale].test(str);
  } else if (locale === 'any') {
    for (var key in phones) {
      if (phones.hasOwnProperty(key)) {
        var phone = phones[key];
        if (phone.test(str)) {
          return true;
        }
      }
    }
    return false;
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.VMasker = factory();
  }
}(this, function() {
  var DIGIT = "9",
      ALPHA = "A",
      ALPHANUM = "S",
      BY_PASS_KEYS = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91, 92, 93],
      isAllowedKeyCode = function(keyCode) {
        for (var i = 0, len = BY_PASS_KEYS.length; i < len; i++) {
          if (keyCode == BY_PASS_KEYS[i]) {
            return false;
          }
        }
        return true;
      },
      mergeMoneyOptions = function(opts) {
        opts = opts || {};
        opts = {
          delimiter: opts.delimiter || ".",
          lastOutput: opts.lastOutput,
          precision: opts.hasOwnProperty("precision") ? opts.precision : 2,
          separator: opts.separator || ",",
          showSignal: opts.showSignal,
          suffixUnit: opts.suffixUnit && (" " + opts.suffixUnit.replace(/[\s]/g,'')) || "",
          unit: opts.unit && (opts.unit.replace(/[\s]/g,'') + " ") || "",
          zeroCents: opts.zeroCents
        };
        opts.moneyPrecision = opts.zeroCents ? 0 : opts.precision;
        return opts;
      },
      // Fill wildcards past index in output with placeholder
      addPlaceholdersToOutput = function(output, index, placeholder) {
        for (; index < output.length; index++) {
          if(output[index] === DIGIT || output[index] === ALPHA || output[index] === ALPHANUM) {
            output[index] = placeholder;
          }
        }
        return output;
      }
  ;

  var VanillaMasker = function(elements) {
    this.elements = elements;
  };

  VanillaMasker.prototype.unbindElementToMask = function() {
    for (var i = 0, len = this.elements.length; i < len; i++) {
      this.elements[i].lastOutput = "";
      this.elements[i].onkeyup = false;
      this.elements[i].onkeydown = false;

      if (this.elements[i].value.length) {
        this.elements[i].value = this.elements[i].value.replace(/\D/g, '');
      }
    }
  };

  VanillaMasker.prototype.bindElementToMask = function(maskFunction) {
    var that = this,
        onType = function(e) {
          e = e || window.event;
          var source = e.target || e.srcElement;

          if (isAllowedKeyCode(e.keyCode)) {
            setTimeout(function() {
              that.opts.lastOutput = source.lastOutput;
              source.value = VMasker[maskFunction](source.value, that.opts);
              source.lastOutput = source.value;
              if (source.setSelectionRange && that.opts.suffixUnit) {
                source.setSelectionRange(source.value.length, (source.value.length - that.opts.suffixUnit.length));
              }
            }, 0);
          }
        }
    ;
    for (var i = 0, len = this.elements.length; i < len; i++) {
      this.elements[i].lastOutput = "";
      this.elements[i].onkeyup = onType;
      if (this.elements[i].value.length) {
        this.elements[i].value = VMasker[maskFunction](this.elements[i].value, this.opts);
      }
    }
  };

  VanillaMasker.prototype.maskMoney = function(opts) {
    this.opts = mergeMoneyOptions(opts);
    this.bindElementToMask("toMoney");
  };

  VanillaMasker.prototype.maskNumber = function() {
    this.opts = {};
    this.bindElementToMask("toNumber");
  };
  
  VanillaMasker.prototype.maskAlphaNum = function() {
    this.opts = {};
    this.bindElementToMask("toAlphaNumeric");
  };

  VanillaMasker.prototype.maskPattern = function(pattern) {
    this.opts = {pattern: pattern};
    this.bindElementToMask("toPattern");
  };

  VanillaMasker.prototype.unMask = function() {
    this.unbindElementToMask();
  };

  var VMasker = function(el) {
    if (!el) {
      throw new Error("VanillaMasker: There is no element to bind.");
    }
    var elements = ("length" in el) ? (el.length ? el : []) : [el];
    return new VanillaMasker(elements);
  };

  VMasker.toMoney = function(value, opts) {
    opts = mergeMoneyOptions(opts);
    if (opts.zeroCents) {
      opts.lastOutput = opts.lastOutput || "";
      var zeroMatcher = ("("+ opts.separator +"[0]{0,"+ opts.precision +"})"),
          zeroRegExp = new RegExp(zeroMatcher, "g"),
          digitsLength = value.toString().replace(/[\D]/g, "").length || 0,
          lastDigitLength = opts.lastOutput.toString().replace(/[\D]/g, "").length || 0
      ;
      value = value.toString().replace(zeroRegExp, "");
      if (digitsLength < lastDigitLength) {
        value = value.slice(0, value.length - 1);
      }
    }
    var number = value.toString().replace(/[\D]/g, ""),
        clearDelimiter = new RegExp("^(0|\\"+ opts.delimiter +")"),
        clearSeparator = new RegExp("(\\"+ opts.separator +")$"),
        money = number.substr(0, number.length - opts.moneyPrecision),
        masked = money.substr(0, money.length % 3),
        cents = new Array(opts.precision + 1).join("0")
    ;
    money = money.substr(money.length % 3, money.length);
    for (var i = 0, len = money.length; i < len; i++) {
      if (i % 3 === 0) {
        masked += opts.delimiter;
      }
      masked += money[i];
    }
    masked = masked.replace(clearDelimiter, "");
    masked = masked.length ? masked : "0";
    var signal = "";
    if(opts.showSignal === true) {
      signal = value < 0 || (value.startsWith && value.startsWith('-')) ? "-" :  "";
    }
    if (!opts.zeroCents) {
      var beginCents = number.length - opts.precision,
          centsValue = number.substr(beginCents, opts.precision),
          centsLength = centsValue.length,
          centsSliced = (opts.precision > centsLength) ? opts.precision : centsLength
      ;
      cents = (cents + centsValue).slice(-centsSliced);
    }
    var output = opts.unit + signal + masked + opts.separator + cents;
    return output.replace(clearSeparator, "") + opts.suffixUnit;
  };

  VMasker.toPattern = function(value, opts) {
    var pattern = (typeof opts === 'object' ? opts.pattern : opts),
        patternChars = pattern.replace(/\W/g, ''),
        output = pattern.split(""),
        values = value.toString().replace(/\W/g, ""),
        charsValues = values.replace(/\W/g, ''),
        index = 0,
        i,
        outputLength = output.length,
        placeholder = (typeof opts === 'object' ? opts.placeholder : undefined)
    ;
    
    for (i = 0; i < outputLength; i++) {
      // Reached the end of input
      if (index >= values.length) {
        if (patternChars.length == charsValues.length) {
          return output.join("");
        }
        else if ((placeholder !== undefined) && (patternChars.length > charsValues.length)) {
          return addPlaceholdersToOutput(output, i, placeholder).join("");
        }
        else {
          break;
        }
      }
      // Remaining chars in input
      else{
        if ((output[i] === DIGIT && values[index].match(/[0-9]/)) ||
            (output[i] === ALPHA && values[index].match(/[a-zA-Z]/)) ||
            (output[i] === ALPHANUM && values[index].match(/[0-9a-zA-Z]/))) {
          output[i] = values[index++];
        } else if (output[i] === DIGIT || output[i] === ALPHA || output[i] === ALPHANUM) {
          if(placeholder !== undefined){
            return addPlaceholdersToOutput(output, i, placeholder).join("");
          }
          else{
            return output.slice(0, i).join("");
          }
        }
      }
    }
    return output.join("").substr(0, i);
  };

  VMasker.toNumber = function(value) {
    return value.toString().replace(/(?!^-)[^0-9]/g, "");
  };
  
  VMasker.toAlphaNumeric = function(value) {
    return value.toString().replace(/[^a-z0-9 ]+/i, "");
  };

  return VMasker;
}));


/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-x-input weui-cell",
    class: {
      'weui-cell_warn': _vm.showWarn,
      'disabled': _vm.disabled,
      'vux-x-input-has-right-full': _vm.hasRightFullHeightSlot
    }
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [(_vm.hasRestrictedLabel) ? _c('div', {
    style: (_vm.labelStyles)
  }, [_vm._t("restricted-label")], 2) : _vm._e(), _vm._v(" "), _vm._t("label", [(_vm.title) ? _c('label', {
    staticClass: "weui-label",
    class: _vm.labelClass,
    style: ({
      width: _vm.labelWidth || _vm.$parent.labelWidth || _vm.labelWidthComputed,
      textAlign: _vm.$parent.labelAlign,
      marginRight: _vm.$parent.labelMarginRight
    }),
    attrs: {
      "for": ("vux-x-input-" + _vm.uuid)
    },
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.inlineDesc) ? _c('inline-desc', [_vm._v(_vm._s(_vm.inlineDesc))]) : _vm._e()])], 2), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd weui-cell__primary",
    class: _vm.placeholderAlign ? ("vux-x-input-placeholder-" + _vm.placeholderAlign) : ''
  }, [(!_vm.type || _vm.type === 'text') ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    ref: "input",
    staticClass: "weui-input",
    style: (_vm.inputStyle),
    attrs: {
      "id": ("vux-x-input-" + _vm.uuid),
      "maxlength": _vm.max,
      "autocomplete": _vm.autocomplete,
      "autocapitalize": _vm.autocapitalize,
      "autocorrect": _vm.autocorrect,
      "spellcheck": _vm.spellcheck,
      "type": "text",
      "name": _vm.name,
      "pattern": _vm.pattern,
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "focus": _vm.focusHandler,
      "blur": _vm.onBlur,
      "keyup": _vm.onKeyUp,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.type === 'number') ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    ref: "input",
    staticClass: "weui-input",
    style: (_vm.inputStyle),
    attrs: {
      "id": ("vux-x-input-" + _vm.uuid),
      "maxlength": _vm.max,
      "autocomplete": _vm.autocomplete,
      "autocapitalize": _vm.autocapitalize,
      "autocorrect": _vm.autocorrect,
      "spellcheck": _vm.spellcheck,
      "type": "number",
      "name": _vm.name,
      "pattern": _vm.pattern,
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "focus": _vm.focusHandler,
      "blur": _vm.onBlur,
      "keyup": _vm.onKeyUp,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.type === 'email') ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    ref: "input",
    staticClass: "weui-input",
    style: (_vm.inputStyle),
    attrs: {
      "id": ("vux-x-input-" + _vm.uuid),
      "maxlength": _vm.max,
      "autocomplete": _vm.autocomplete,
      "autocapitalize": _vm.autocapitalize,
      "autocorrect": _vm.autocorrect,
      "spellcheck": _vm.spellcheck,
      "type": "email",
      "name": _vm.name,
      "pattern": _vm.pattern,
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "focus": _vm.focusHandler,
      "blur": _vm.onBlur,
      "keyup": _vm.onKeyUp,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.type === 'password') ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    ref: "input",
    staticClass: "weui-input",
    style: (_vm.inputStyle),
    attrs: {
      "id": ("vux-x-input-" + _vm.uuid),
      "maxlength": _vm.max,
      "autocomplete": _vm.autocomplete,
      "autocapitalize": _vm.autocapitalize,
      "autocorrect": _vm.autocorrect,
      "spellcheck": _vm.spellcheck,
      "type": "password",
      "name": _vm.name,
      "pattern": _vm.pattern,
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "focus": _vm.focusHandler,
      "blur": _vm.onBlur,
      "keyup": _vm.onKeyUp,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.type === 'tel') ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    ref: "input",
    staticClass: "weui-input",
    style: (_vm.inputStyle),
    attrs: {
      "id": ("vux-x-input-" + _vm.uuid),
      "maxlength": _vm.max,
      "autocomplete": _vm.autocomplete,
      "autocapitalize": _vm.autocapitalize,
      "autocorrect": _vm.autocorrect,
      "spellcheck": _vm.spellcheck,
      "type": "tel",
      "name": _vm.name,
      "pattern": _vm.pattern,
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "focus": _vm.focusHandler,
      "blur": _vm.onBlur,
      "keyup": _vm.onKeyUp,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__ft"
  }, [_c('icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.hasRightFullHeightSlot && !_vm.equalWith && _vm.showClear && _vm.currentValue !== '' && !_vm.readonly && !_vm.disabled && _vm.isFocus),
      expression: "!hasRightFullHeightSlot && !equalWith && showClear && currentValue !== '' && !readonly && !disabled && isFocus"
    }],
    attrs: {
      "type": "clear"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.clear($event)
      }
    }
  }), _vm._v(" "), _c('icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showWarn),
      expression: "showWarn"
    }],
    staticClass: "vux-input-icon",
    attrs: {
      "type": "warn",
      "title": !_vm.valid ? _vm.firstError : ''
    },
    nativeOn: {
      "click": function($event) {
        return _vm.onClickErrorIcon($event)
      }
    }
  }), _vm._v(" "), (!_vm.novalidate && _vm.hasLengthEqual && _vm.dirty && _vm.equalWith && !_vm.valid) ? _c('icon', {
    staticClass: "vux-input-icon",
    attrs: {
      "type": "warn"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.onClickErrorIcon($event)
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.novalidate && _vm.equalWith && _vm.equalWith === _vm.currentValue && _vm.valid),
      expression: "!novalidate && equalWith && equalWith === currentValue && valid"
    }],
    attrs: {
      "type": "success"
    }
  }), _vm._v(" "), _c('icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.novalidate && _vm.iconType === 'success'),
      expression: "novalidate && iconType === 'success'"
    }],
    staticClass: "vux-input-icon",
    attrs: {
      "type": "success"
    }
  }), _vm._v(" "), _c('icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.novalidate && _vm.iconType === 'error'),
      expression: "novalidate && iconType === 'error'"
    }],
    staticClass: "vux-input-icon",
    attrs: {
      "type": "warn"
    }
  }), _vm._v(" "), _vm._t("right"), _vm._v(" "), (_vm.hasRightFullHeightSlot) ? _c('div', {
    staticClass: "vux-x-input-right-full"
  }, [_vm._t("right-full-height")], 2) : _vm._e()], 2), _vm._v(" "), _c('toast', {
    attrs: {
      "type": "text",
      "width": "auto",
      "time": 600
    },
    model: {
      value: (_vm.showErrorToast),
      callback: function($$v) {
        _vm.showErrorToast = $$v
      },
      expression: "showErrorToast"
    }
  }, [_vm._v(_vm._s(_vm.firstError))])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(685)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(668),
  /* template */
  __webpack_require__(700),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inline_desc__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inline_desc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__inline_desc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_clean_style__ = __webpack_require__(551);
//
//
//
//
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
  name: 'x-switch',
  components: {
    InlineDesc: __WEBPACK_IMPORTED_MODULE_0__inline_desc___default.a
  },
  computed: {
    labelStyle() {
      let isHTML = /<\/?[^>]*>/.test(this.title);
      let width = Math.min(isHTML ? 5 : this.title.length + 1, 14) + 'em';
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__libs_clean_style__["a" /* default */])({
        display: 'block',
        width: this.$parent.labelWidth || width,
        textAlign: this.$parent.labelAlign
      });
    },
    labelClass() {
      return {
        'vux-cell-justify': this.$parent && this.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    onClick() {
      this.$emit('on-click', !this.currentValue, this.currentValue);
    },
    toBoolean(val) {
      if (!this.valueMap) {
        return val;
      } else {
        const index = this.valueMap.indexOf(val);
        return index === 1;
      }
    },
    toRaw(val) {
      if (!this.valueMap) {
        return val;
      } else {
        return this.valueMap[val ? 1 : 0];
      }
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    disabled: Boolean,
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    inlineDesc: [String, Boolean, Number],
    preventDefault: Boolean,
    valueMap: {
      type: Array,
      default: () => [false, true]
    }
  },
  data() {
    return {
      currentValue: this.toBoolean(this.value)
    };
  },
  watch: {
    currentValue(val) {
      const rawValue = this.toRaw(val);
      this.$emit('input', rawValue);
      this.$emit('on-change', rawValue);
    },
    value(val) {
      this.currentValue = this.toBoolean(val);
    }
  }
});

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(487)();
// imports


// module
exports.push([module.i, ".weui-label{display:block;width:105px;word-wrap:break-word;word-break:break-all}.weui-input{width:100%;border:0;outline:0;-webkit-appearance:none;background-color:transparent;font-size:inherit;color:inherit;height:1.41176471em;line-height:1.41176471}.weui-input::-webkit-inner-spin-button,.weui-input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.weui-textarea{display:block;border:0;resize:none;width:100%;color:inherit;font-size:1em;line-height:inherit;outline:0}.weui-textarea-counter{color:#b2b2b2;text-align:right}.weui-cell_warn .weui-textarea-counter{color:#e64340}.weui-toptips{display:none;position:fixed;transform:translateZ(0);top:0;left:0;right:0;padding:5px;font-size:14px;text-align:center;color:#fff;z-index:5000;word-wrap:break-word;word-break:break-all}.weui-toptips_warn{background-color:#e64340}.weui-cells_form .weui-cell__ft{font-size:0}.weui-cells_form .weui-icon-warn{display:none}.weui-cells_form input,.weui-cells_form label[for],.weui-cells_form textarea{-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-cell_warn{color:#e64340}.weui-cell_warn .weui-icon-warn{display:inline-block}.weui-cell_switch{padding-top:6px;padding-bottom:6px}.weui-switch{-webkit-appearance:none;-moz-appearance:none;appearance:none}.weui-switch,.weui-switch-cp__box{position:relative;width:52px;height:32px;border:1px solid #dfdfdf;outline:0;border-radius:16px;box-sizing:border-box;background-color:#dfdfdf;transition:background-color .1s,border .1s}.weui-switch-cp__box:before,.weui-switch:before{content:\" \";position:absolute;top:0;left:0;width:50px;height:30px;border-radius:15px;background-color:#fdfdfd;transition:transform .35s cubic-bezier(.45,1,.4,1)}.weui-switch-cp__box:after,.weui-switch:after{content:\" \";position:absolute;top:0;left:0;width:30px;height:30px;border-radius:15px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4);transition:transform .35s cubic-bezier(.4,.4,.25,1.35)}.weui-switch-cp__input:checked~.weui-switch-cp__box,.weui-switch:checked{border-color:#04be02;background-color:#04be02}.weui-switch-cp__input:checked~.weui-switch-cp__box:before,.weui-switch:checked:before{transform:scale(0)}.weui-switch-cp__input:checked~.weui-switch-cp__box:after,.weui-switch:checked:after{transform:translateX(20px)}.weui-switch-cp__input{position:absolute;left:-9999px}.weui-switch-cp__box{display:block}.weui-cell_switch .weui-cell__ft{font-size:0;position:relative}input.weui-switch[disabled]{opacity:.6}.vux-x-switch.weui-cell_switch{padding-top:6px;padding-bottom:6px}.vux-x-switch-overlay{width:60px;height:50px;position:absolute;right:0;top:0;opacity:0}", "", {"version":3,"sources":["F:/WXH5/node_modules/_vux@2.9.1@vux/src/components/x-switch/index.vue"],"names":[],"mappings":"AAgSA,YACE,cAAe,AACf,YAAa,AACb,qBAAsB,AACtB,oBAAsB,CACvB,AACD,YACE,WAAY,AACZ,SAAU,AACV,UAAW,AACX,wBAAyB,AACzB,6BAA8B,AAC9B,kBAAmB,AACnB,cAAe,AACf,oBAAqB,AACrB,sBAAwB,CACzB,AACD,8EAEE,wBAAyB,AACzB,QAAU,CACX,AACD,eACE,cAAe,AACf,SAAU,AACV,YAAa,AACb,WAAY,AACZ,cAAe,AACf,cAAe,AACf,oBAAqB,AACrB,SAAW,CACZ,AACD,uBACE,cAAe,AACf,gBAAkB,CACnB,AACD,uCACE,aAAe,CAChB,AACD,cACE,aAAc,AACd,eAAgB,AAChB,wBAAyB,AACzB,MAAO,AACP,OAAQ,AACR,QAAS,AACT,YAAa,AACb,eAAgB,AAChB,kBAAmB,AACnB,WAAY,AACZ,aAAc,AACd,qBAAsB,AACtB,oBAAsB,CACvB,AACD,mBACE,wBAA0B,CAC3B,AACD,gCACE,WAAa,CACd,AACD,iCACE,YAAc,CACf,AACD,6EAGE,yCAA8C,CAC/C,AACD,gBACE,aAAe,CAChB,AACD,gCACE,oBAAsB,CACvB,AACD,kBACE,gBAAiB,AACjB,kBAAoB,CACrB,AACD,aACE,wBAAyB,AACzB,qBAAsB,AACjB,eAAiB,CACvB,AACD,kCAEE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,yBAA0B,AAC1B,UAAW,AACX,mBAAoB,AACpB,sBAAuB,AACvB,yBAA0B,AAC1B,0CAA+C,CAChD,AACD,gDAEE,YAAa,AACb,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,yBAA0B,AAC1B,kDAA0D,CAC3D,AACD,8CAEE,YAAa,AACb,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,sBAA0B,AAC1B,oCAAyC,AACzC,sDAA+D,CAChE,AACD,yEAGE,qBAAsB,AACtB,wBAA0B,CAE3B,AACD,uFAEE,kBAAoB,CACrB,AACD,qFAEE,0BAA4B,CAC7B,AACD,uBACE,kBAAmB,AACnB,YAAc,CACf,AACD,qBACE,aAAe,CAChB,AACD,iCACE,YAAa,AACb,iBAAmB,CACpB,AACD,4BACE,UAAa,CACd,AACD,+BACE,gBAAiB,AACjB,kBAAoB,CACrB,AACD,sBACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,QAAS,AACT,MAAO,AACP,SAAW,CACZ","file":"index.vue","sourcesContent":["/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.weui-label {\n  display: block;\n  width: 105px;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.weui-input {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  -webkit-appearance: none;\n  background-color: transparent;\n  font-size: inherit;\n  color: inherit;\n  height: 1.41176471em;\n  line-height: 1.41176471;\n}\n.weui-input::-webkit-outer-spin-button,\n.weui-input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.weui-textarea {\n  display: block;\n  border: 0;\n  resize: none;\n  width: 100%;\n  color: inherit;\n  font-size: 1em;\n  line-height: inherit;\n  outline: 0;\n}\n.weui-textarea-counter {\n  color: #B2B2B2;\n  text-align: right;\n}\n.weui-cell_warn .weui-textarea-counter {\n  color: #E64340;\n}\n.weui-toptips {\n  display: none;\n  position: fixed;\n  transform: translateZ(0);\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 5px;\n  font-size: 14px;\n  text-align: center;\n  color: #FFF;\n  z-index: 5000;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.weui-toptips_warn {\n  background-color: #E64340;\n}\n.weui-cells_form .weui-cell__ft {\n  font-size: 0;\n}\n.weui-cells_form .weui-icon-warn {\n  display: none;\n}\n.weui-cells_form input,\n.weui-cells_form textarea,\n.weui-cells_form label[for] {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.weui-cell_warn {\n  color: #E64340;\n}\n.weui-cell_warn .weui-icon-warn {\n  display: inline-block;\n}\n.weui-cell_switch {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.weui-switch {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n}\n.weui-switch,\n.weui-switch-cp__box {\n  position: relative;\n  width: 52px;\n  height: 32px;\n  border: 1px solid #DFDFDF;\n  outline: 0;\n  border-radius: 16px;\n  box-sizing: border-box;\n  background-color: #DFDFDF;\n  transition: background-color 0.1s, border 0.1s;\n}\n.weui-switch:before,\n.weui-switch-cp__box:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #FDFDFD;\n  transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n}\n.weui-switch:after,\n.weui-switch-cp__box:after {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #FFFFFF;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n}\n.weui-switch:checked,\n.weui-switch-cp__input:checked ~ .weui-switch-cp__box {\n  /** vux **/\n  border-color: #04BE02;\n  background-color: #04BE02;\n  /** end vux **/\n}\n.weui-switch:checked:before,\n.weui-switch-cp__input:checked ~ .weui-switch-cp__box:before {\n  transform: scale(0);\n}\n.weui-switch:checked:after,\n.weui-switch-cp__input:checked ~ .weui-switch-cp__box:after {\n  transform: translateX(20px);\n}\n.weui-switch-cp__input {\n  position: absolute;\n  left: -9999px;\n}\n.weui-switch-cp__box {\n  display: block;\n}\n.weui-cell_switch .weui-cell__ft {\n  font-size: 0;\n  position: relative;\n}\ninput.weui-switch[disabled] {\n  opacity: 0.6;\n}\n.vux-x-switch.weui-cell_switch {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.vux-x-switch-overlay {\n  width: 60px;\n  height: 50px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  opacity: 0;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(740);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(488)("fa19afc0", content, true);

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vant_css_base_css__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vant_css_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vant_css_base_css__);


/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vant_css_base_css__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vant_css_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vant_css_base_css__);


/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-x-switch weui-cell weui-cell_switch"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('label', {
    staticClass: "weui-label",
    class: _vm.labelClass,
    style: (_vm.labelStyle),
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  }), _vm._v(" "), (_vm.inlineDesc) ? _c('inline-desc', [_vm._v(_vm._s(_vm.inlineDesc))]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__ft"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    staticClass: "weui-switch",
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled
    },
    domProps: {
      "checked": Array.isArray(_vm.currentValue) ? _vm._i(_vm.currentValue, null) > -1 : (_vm.currentValue)
    },
    on: {
      "change": function($event) {
        var $$a = _vm.currentValue,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.currentValue = $$a.concat([$$v]))
          } else {
            $$i > -1 && (_vm.currentValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.currentValue = $$c
        }
      }
    }
  }), _vm._v(" "), (_vm.preventDefault) ? _c('div', {
    staticClass: "vux-x-switch-overlay",
    on: {
      "click": _vm.onClick
    }
  }) : _vm._e()])])
},staticRenderFns: []}

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(760)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(735),
  /* template */
  __webpack_require__(781),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = saveSearch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_good_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_good_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_good_storage__);

/*把搜索的结果保存下来*/
/*用export把方法暴露出来*/
/*定义存储搜索的key  _search_定义内部使用的key*/
const SEARCH_KEY='_search_'
const SEARCH_MAX_LENGTH=15
/*插入方法     arr存储的数据  val传入存储的值  compare前后比较的函数  maxlen存入的最大值*/
function insertArray(arr,val,compare,maxlen){
	//findIndex()函数也是查找目标元素，找到就返回元素的位置，找不到就返回-1。
	const index=arr.findIndex(compare)
	if(index===0){  //数据为数组中的第一个数据 不做任何操作
		return 
	}
	if(index>0){  //数组中有这条数据并且不再第一个位置
		arr.splice(index,1)  //删掉这个数
	}
	arr.unshift(val);//把这条数据存储到数组中的第一个位置上
	if(maxlen && arr.length>maxlen){
		//如果有条数限制并且数组的个数大于限制数
		arr.pop() //方法将删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值
		
	}
}
function saveSearch(query){
	let searches=__WEBPACK_IMPORTED_MODULE_0_good_storage___default.a.get(SEARCH_KEY,[])
	/*逻辑是最后一次搜索的结果放到搜索历史的第一个*/
	insertArray(searches,query,(item)=>{		
		return item===query //这是传入的一个比较函数 说明query在这个数组中
	},SEARCH_MAX_LENGTH)
	__WEBPACK_IMPORTED_MODULE_0_good_storage___default.a.set(SEARCH_KEY,searches)
	return searches
}

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vant_es_switch_style__ = __webpack_require__(1335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vant_es_switch__ = __webpack_require__(1334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vant_es_cell_group_style__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vant_es_cell_group__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vant_es_cell_style__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vant_es_cell__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vux_src_components_icon_index_vue__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vux_src_components_icon_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vux_src_components_icon_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vux_src_components_x_switch_index_vue__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vux_src_components_x_switch_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vux_src_components_x_switch_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vux_src_components_scroller_index_vue__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vux_src_components_scroller_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vux_src_components_scroller_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vux_src_components_load_more_index_vue__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vux_src_components_load_more_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_vux_src_components_load_more_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vux_src_components_loading_index_vue__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vux_src_components_loading_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_vux_src_components_loading_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vux_src_components_x_input_index_vue__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vux_src_components_x_input_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_vux_src_components_x_input_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_components_placeholder__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_components_placeholder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_components_placeholder__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_api__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__static_js_cache_js__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_good_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_good_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_good_storage__);


















/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      searchVal: this.$route.params.items || '',
      currentId: 0,
      value: false,
      priceSort: 3,
      saleSort: 5,
      priceActive: false,
      saleActive: false,
      goodsList: [],
      pagesize: 10,
      page: 1,
      IslastPage: false,
      coupon: false, //默认不带优惠券
      sortNo: 0, //默认搜索
      clientHeight: 0,
      onFetching: false,
      scrollHeight: '0px',
      isLoading: false,
      boxHeight: '0px'
    };
  },
  components: {
    Icon: __WEBPACK_IMPORTED_MODULE_6_vux_src_components_icon_index_vue___default.a,
    XSwitch: __WEBPACK_IMPORTED_MODULE_7_vux_src_components_x_switch_index_vue___default.a,
    Scroller: __WEBPACK_IMPORTED_MODULE_8_vux_src_components_scroller_index_vue___default.a,
    LoadMore: __WEBPACK_IMPORTED_MODULE_9_vux_src_components_load_more_index_vue___default.a,
    'vanCell': __WEBPACK_IMPORTED_MODULE_5_vant_es_cell__["a" /* default */],
    'vanCellGroup': __WEBPACK_IMPORTED_MODULE_3_vant_es_cell_group__["a" /* default */],
    'vanSwitch': __WEBPACK_IMPORTED_MODULE_1_vant_es_switch__["a" /* default */],
    PlaceHolder: __WEBPACK_IMPORTED_MODULE_12_components_placeholder___default.a,
    Loading: __WEBPACK_IMPORTED_MODULE_10_vux_src_components_loading_index_vue___default.a,
    XInput: __WEBPACK_IMPORTED_MODULE_11_vux_src_components_x_input_index_vue___default.a
  },
  methods: {
    toFixed(val) {
      return val.toFixed(2);
    },
    onScrollBottom() {
      let that = this;
      if (this.onFetching || this.IslastPage || that.page >= that.lastPage || that.goodsList.length <= 0) {
        return false;
      } else {
        that.onFetching = true;
        var page = ++that.page;
        let data = {
          coupon: that.coupon,
          keyword: that.searchVal,
          page: page,
          sort: that.sortNo
        };
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_api__["p" /* getSearch */])(data).then(res => {
          if (res.code === 0) {
            let IslastPage = false;
            if (that.page >= res.result.total_page) IslastPage = true;
            that.goodsList = that.goodsList.concat(res.result.data);
            that.page = res.result.current_page;
            that.lastPage = res.result.total_page;
            that.onFetching = true;
            that.IslastPage = IslastPage;
          }
          that.onFetching = false;
          that.$nextTick(() => {
            that.$refs.scrollerBottom.reset();
          });
        });
      }
    },
    fetchList(data) {
      let that = this;
      that.isLoading = true;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_api__["p" /* getSearch */])(data).then(res => {
        if (res.code === 0) {
          that.goodsList = res.result.data;
          that.page = res.result.current_page;
          that.lastPage = res.result.total_page;
          that.onFetching = false;
          that.IslastPage = false;
        } else {
          that.goodsList = [];
        }
        that.$nextTick(() => {
          that.$refs.scrollerBottom.reset();
        });
        that.isLoading = false;
      });
    },

    searchBtn(e) {
      let that = this;
      if (that.searchVal === '') return;
      let searches = __WEBPACK_IMPORTED_MODULE_15_good_storage___default.a.get('_search_') || [];
      if (that.searchVal.match(/^\s*$/) == null) {
        if (searches.indexOf(that.searchVal) === -1) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__static_js_cache_js__["a" /* saveSearch */])(that.searchVal);
        }
      }
      let data = {
        coupon: that.coupon,
        keyword: that.searchVal,
        page: 1,
        sort: 0
      };
      that.fetchList(data);
    },
    toDetail(item) {
      let hasCount = item.item_coupon;
      console.log(JSON.stringify(hasCount));
      sessionStorage.setItem('detailData', JSON.stringify(item));
      this.$store.commit('SET_INFOMATION', item);
      if (hasCount == undefined) {
        this.$router.push({ path: `/detail/${item.item_id}` });
      } else {
        this.$router.push({ path: `/detail/${item.item_id}/${item.item_coupon.info}` });
      }
    },

    tabclick(e) {
      let that = this;
      let currentId = e.target.dataset.current;
      if (that.searchVal === '') return;
      this.currentId = currentId;
      switch (currentId) {
        case '0':
          that.sortNo = 1;
          break;
        case '1':
          that.sortNo = 2;
          break;
        default:
          that.sortNo = 0;
      }
      let data = {
        coupon: that.coupon,
        keyword: that.searchVal,
        page: 1,
        sort: that.sortNo
      };
      that.fetchList(data);
      that.$refs.scrollerBottom.reset();
    },

    priceCLICK(e) {
      let that = this;
      if (that.searchVal === '') return;
      that.priceActive = !that.priceActive;
      that.currentId = 2;
      if (that.priceActive) {
        that.sortNo = 3;
      } else {
        that.sortNo = 4;
      }
      let data = {
        coupon: that.coupon,
        keyword: that.searchVal,
        page: 1,
        sort: that.sortNo
      };
      that.fetchList(data);
    },

    saleCLICK(e) {
      let that = this;
      if (that.searchVal === '') return;
      that.saleActive = !that.saleActive;
      that.currentId = 3;
      if (that.saleActive) {
        that.sortNo = 5;
      } else {
        that.sortNo = 6;
      }
      let data = {
        coupon: that.coupon,
        keyword: that.searchVal,
        page: 1,
        sort: that.sortNo
      };
      that.fetchList(data);
    },
    switchChange(e) {
      let that = this;
      that.coupon = e;
      if (that.searchVal === '') return;
      let data = {
        coupon: that.coupon,
        keyword: that.searchVal,
        page: 1,
        sort: 0
      };
      that.fetchList(data);
    }
  },
  mounted() {
    let that = this;
    let goodsName = that.$route.params.items;
    let data = {
      coupon: false,
      keyword: that.searchVal,
      page: 1,
      sort: 0
    };
    that.$nextTick(() => {
      that.clientHeight = `${document.documentElement.clientHeight}px`;
      that.scrollHeight = String(-that.$refs.searchBox.offsetHeight - that.$refs.tabBox.offsetHeight - that.$refs.switchBox.offsetHeight);
      that.boxHeight = document.documentElement.clientHeight - that.$refs.searchBox.offsetHeight - that.$refs.switchBox.offsetHeight - that.$refs.tabBox.offsetHeight;
      this.$refs.scrollerBottom.reset();
      if (that.searchVal === '') return;
      that.fetchList(data);
    });
  },
  updated() {

    let that = this;
    that.$nextTick(() => {
      that.clientHeight = `${document.documentElement.clientHeight}px`;
      that.scrollHeight = String(-that.$refs.searchBox.offsetHeight - that.$refs.tabBox.offsetHeight - that.$refs.switchBox.offsetHeight);
      that.boxHeight = document.documentElement.clientHeight - that.$refs.searchBox.offsetHeight - that.$refs.switchBox.offsetHeight - that.$refs.tabBox.offsetHeight;
      this.$refs.scrollerBottom.reset();
    });
  }
});

/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(487)();
// imports


// module
exports.push([module.i, ".van-switch{height:1em;width:1.6em;display:inline-block;position:relative;background:#fff;border-radius:16px;box-sizing:content-box;border:1px solid rgba(0,0,0,.1);border-radius:1em}.van-switch__node{top:0;left:0;z-index:1;width:1em;height:1em;-webkit-transition:.3s;transition:.3s;position:absolute;border-radius:100%;background-color:#fff;box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05)}.van-switch__loading{top:25%;left:25%;width:50%;height:50%}.van-switch--on{background-color:#44db5e}.van-switch--on .van-switch__node{-webkit-transform:translateX(.6em);transform:translateX(.6em)}.van-switch--disabled{opacity:.4}", "", {"version":3,"sources":["F:/WXH5/node_modules/_vant@1.1.5@vant/es/vant-css/switch.css"],"names":[],"mappings":"AAAA,YAAY,WAAW,YAAY,qBAAqB,kBAAkB,gBAAgB,mBAAmB,uBAAuB,gCAAgC,iBAAiB,CAAC,kBAAkB,MAAM,OAAO,UAAU,UAAU,WAAW,uBAAuB,eAAe,kBAAkB,mBAAmB,sBAAsB,6FAA6F,CAAC,qBAAqB,QAAQ,SAAS,UAAU,UAAU,CAAC,gBAAgB,wBAAwB,CAAC,kCAAkC,mCAAmC,0BAA0B,CAAC,sBAAsB,UAAU,CAAC","file":"switch.css","sourcesContent":[".van-switch{height:1em;width:1.6em;display:inline-block;position:relative;background:#fff;border-radius:16px;box-sizing:content-box;border:1px solid rgba(0,0,0,.1);border-radius:1em}.van-switch__node{top:0;left:0;z-index:1;width:1em;height:1em;-webkit-transition:.3s;transition:.3s;position:absolute;border-radius:100%;background-color:#fff;box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05)}.van-switch__loading{top:25%;left:25%;width:50%;height:50%}.van-switch--on{background-color:#44db5e}.van-switch--on .van-switch__node{-webkit-transform:translateX(.6em);transform:translateX(.6em)}.van-switch--disabled{opacity:.4}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(487)();
// imports


// module
exports.push([module.i, ".vux-1px-b[data-v-098c84bc],.vux-1px-l[data-v-098c84bc],.vux-1px-r[data-v-098c84bc],.vux-1px-t[data-v-098c84bc],.vux-1px-tb[data-v-098c84bc],.vux-1px[data-v-098c84bc]{position:relative}.vux-1px[data-v-098c84bc]:before{content:\" \";position:absolute;left:0;top:0;width:200%;border:1px solid #c7c7c7;color:#c7c7c7;height:200%;transform-origin:left top;transform:scale(.5)}.vux-1px-t[data-v-098c84bc]:before{top:0;border-top:1px solid #c7c7c7;transform-origin:0 0;transform:scaleY(.5)}.vux-1px-b[data-v-098c84bc]:after,.vux-1px-t[data-v-098c84bc]:before{content:\" \";position:absolute;left:0;right:0;height:1px;color:#c7c7c7}.vux-1px-b[data-v-098c84bc]:after{bottom:0;border-bottom:1px solid #c7c7c7;transform-origin:0 100%;transform:scaleY(.5)}.vux-1px-tb[data-v-098c84bc]:before{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c7c7c7;color:#c7c7c7;transform-origin:0 0;transform:scaleY(.5)}.vux-1px-tb[data-v-098c84bc]:after{content:\" \";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #c7c7c7;color:#c7c7c7;transform-origin:0 100%;transform:scaleY(.5)}.vux-1px-l[data-v-098c84bc]:before{content:\" \";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #c7c7c7;color:#c7c7c7;transform-origin:0 0;transform:scaleX(.5)}.vux-1px-r[data-v-098c84bc]:after{content:\" \";position:absolute;right:0;top:0;width:1px;bottom:0;border-right:1px solid #c7c7c7;color:#c7c7c7;transform-origin:100% 0;transform:scaleX(.5)}.vux-center-h[data-v-098c84bc],.vux-center-v[data-v-098c84bc],.vux-center[data-v-098c84bc]{display:-ms-flexbox;display:flex}.vux-center-v[data-v-098c84bc],.vux-center[data-v-098c84bc]{-ms-flex-align:center;align-items:center}.vux-center-h[data-v-098c84bc],.vux-center[data-v-098c84bc]{-ms-flex-pack:center;justify-content:center}.vux-x-input[data-v-098c84bc]{width:100%;padding:10px 0 10px 10px}.page-content[data-v-098c84bc]{background:#fff;min-height:100vh}.search-box[data-v-098c84bc]{padding:.5rem 1rem;background:#f2f2f2;height:3.5rem;box-sizing:border-box}.search-box .search[data-v-098c84bc]{height:2.5rem;box-sizing:border-box;background:#fff;border-radius:25px;line-height:2.5rem;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;position:relative}.search-box .search .search_input[data-v-098c84bc]{border:none;-ms-flex:1;flex:1;outline:none;border-top-right-radius:25px;border-bottom-right-radius:25px;padding-right:10px}.search-box .search .weui-icon-search[data-v-098c84bc]{padding:0 1rem!important;line-height:2.5rem}.search-box .search .search_btn[data-v-098c84bc]{padding:0 1rem;color:#317ef2;line-height:2.5rem;border:none;border-left:1px solid #e5e5e5;font-weight:700;font-size:1rem;background:#fff;border-top-right-radius:25px;border-bottom-right-radius:25px;z-index:99}.check_tab[data-v-098c84bc]{height:2.5rem;border-bottom:1px solid #e9e7e8;display:-ms-flexbox;display:flex;line-height:2.5rem;-ms-flex-pack:justify;justify-content:space-between}.check_tab .tab_item[data-v-098c84bc]{-ms-flex:.25;flex:.25;text-align:center;position:relative}.check_tab .tab_item.active[data-v-098c84bc]{font-weight:700;color:#317ef2;border-bottom:2px solid #317ef2}.check_tab .tab_item.arrow__active[data-v-098c84bc]{font-weight:700;color:#317ef2}.check_tab .tab_item .arrow_group[data-v-098c84bc]{position:absolute;top:0;width:100%;text-align:center;line-height:2.5px;height:2.5rem}.check_tab .tab_item .arrow_group .iconfont[data-v-098c84bc]{line-height:.5rem;position:absolute;right:.8rem;color:#ccc}.check_tab .tab_item .arrow_group .iconfont[data-v-098c84bc]:first-child{top:.75rem}.check_tab .tab_item .arrow_group .iconfont[data-v-098c84bc]:last-child{bottom:.75rem}.check_tab .tab_item .arrow_group .iconfont.arrow__active[data-v-098c84bc]{color:#317ef2}.switch_box[data-v-098c84bc]{border-bottom:1px solid #eaeaea}.van-switch[data-v-098c84bc]{font-size:22px!important;position:absolute;right:1rem;top:50%;transform:translateY(-50%)}.van-switch--on[data-v-098c84bc]{background:#317ef2}.shop_box[data-v-098c84bc]{width:100%;padding-bottom:20px}.shop_box .box_item[data-v-098c84bc]{height:6rem;-ms-flex-align:center;align-items:center;margin-bottom:1rem;position:relative;display:block;padding-left:1rem}.shop_box .box_item[data-v-098c84bc]:first-child{margin-top:1rem}.shop_box .box_item .shop_img[data-v-098c84bc]{width:6rem;height:6rem;margin-right:1rem;float:left;position:relative}.shop_box .box_item .shop_info[data-v-098c84bc]{margin-left:7rem;padding-right:1rem;height:6rem;line-height:1.5rem}.shop_box .box_item .shop_info .shop_name[data-v-098c84bc]{font-size:.9rem;margin-bottom:.5rem;position:relative;line-height:1.2rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.shop_box .box_item .shop_info .xianjia[data-v-098c84bc]{font-size:.8rem;color:#aeaeae;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.shop_box .box_item .shop_info .quanhou[data-v-098c84bc]{font-size:.8rem;color:#aeaeae}.shop_box .box_item .shop_info .quanhou span[data-v-098c84bc]{font-size:1.2rem;color:#333}.shop_box .box_item .shop_info .quan[data-v-098c84bc]{font-size:.9rem;position:relative}.shop_box .box_item .shop_info .quan .myAmount[data-v-098c84bc]{border:1px solid #ff681d;background:#ff681d;color:#fff;padding-left:.3rem;font-size:.9rem;box-sizing:border-box;border-radius:3px}.shop_box .box_item .shop_info .quan .myAmount span[data-v-098c84bc]{background:#fff;color:#ff681d;padding:0 5px}.shop_box .box_item .shop_info .shop_title[data-v-098c84bc]{-webkit-line-clamp:1!important;-ms-flex:1;flex:1}.shop_box .box_item .shop_info .shop_logos[data-v-098c84bc]{width:1rem;height:1rem;display:block}", "", {"version":3,"sources":["F:/WXH5/src/pages/search/list.vue"],"names":[],"mappings":"AACA,uKAME,iBAAmB,CACpB,AACD,iCACE,YAAa,AACb,kBAAmB,AACnB,OAAQ,AACR,MAAO,AACP,WAAY,AACZ,yBAA0B,AAC1B,cAAe,AACf,YAAa,AACb,0BAA2B,AAC3B,mBAAsB,CACvB,AACD,mCAIE,MAAO,AAGP,6BAA8B,AAE9B,qBAAsB,AACtB,oBAAuB,CACxB,AACD,qEAXE,YAAa,AACb,kBAAmB,AACnB,OAAQ,AAER,QAAS,AACT,WAAY,AAEZ,aAAe,CAehB,AAXD,kCAIE,SAAU,AAGV,gCAAiC,AAEjC,wBAAyB,AACzB,oBAAuB,CACxB,AACD,oCACE,YAAa,AACb,kBAAmB,AACnB,OAAQ,AACR,MAAO,AACP,QAAS,AACT,WAAY,AACZ,6BAA8B,AAC9B,cAAe,AACf,qBAAsB,AACtB,oBAAuB,CACxB,AACD,mCACE,YAAa,AACb,kBAAmB,AACnB,OAAQ,AACR,SAAU,AACV,QAAS,AACT,WAAY,AACZ,gCAAiC,AACjC,cAAe,AACf,wBAAyB,AACzB,oBAAuB,CACxB,AACD,mCACE,YAAa,AACb,kBAAmB,AACnB,OAAQ,AACR,MAAO,AACP,UAAW,AACX,SAAU,AACV,8BAA+B,AAC/B,cAAe,AACf,qBAAsB,AACtB,oBAAuB,CACxB,AACD,kCACE,YAAa,AACb,kBAAmB,AACnB,QAAS,AACT,MAAO,AACP,UAAW,AACX,SAAU,AACV,+BAAgC,AAChC,cAAe,AACf,wBAAyB,AACzB,oBAAuB,CACxB,AACD,2FAGE,oBAAqB,AACrB,YAAc,CACf,AACD,4DAEE,sBAAuB,AACnB,kBAAoB,CACzB,AACD,4DAEE,qBAAsB,AAClB,sBAAwB,CAC7B,AACD,8BACE,WAAY,AACZ,wBAA0B,CAC3B,AACD,+BACE,gBAAoB,AACpB,gBAAkB,CACnB,AACD,6BACE,mBAAoB,AACpB,mBAAoB,AACpB,cAAe,AACf,qBAAuB,CACxB,AACD,qCACE,cAAe,AACf,sBAAuB,AACvB,gBAAiB,AACjB,mBAAoB,AACpB,mBAAoB,AACpB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,8BAA+B,AACnC,iBAAmB,CACpB,AACD,mDACE,YAAa,AACb,WAAY,AACR,OAAQ,AACZ,aAAc,AACd,6BAA8B,AAC9B,gCAAiC,AACjC,kBAAoB,CACrB,AACD,uDACE,yBAA2B,AAC3B,kBAAoB,CACrB,AACD,iDACE,eAAgB,AAChB,cAAe,AACf,mBAAoB,AACpB,YAAa,AACb,8BAA+B,AAC/B,gBAAkB,AAClB,eAAgB,AAChB,gBAAoB,AACpB,6BAA8B,AAC9B,gCAAiC,AACjC,UAAY,CACb,AACD,4BACE,cAAe,AACf,gCAAiC,AACjC,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AACpB,sBAAuB,AACnB,6BAA+B,CACpC,AACD,sCACE,aAAc,AACV,SAAU,AACd,kBAAmB,AACnB,iBAAmB,CACpB,AACD,6CACE,gBAAkB,AAClB,cAAe,AACf,+BAAiC,CAClC,AACD,oDACE,gBAAkB,AAClB,aAAe,CAChB,AACD,mDACE,kBAAmB,AACnB,MAAO,AACP,WAAY,AACZ,kBAAmB,AACnB,kBAAmB,AACnB,aAAe,CAChB,AACD,6DACE,kBAAmB,AACnB,kBAAmB,AACnB,YAAa,AACb,UAAY,CACb,AACD,yEACE,UAAa,CACd,AACD,wEACE,aAAgB,CACjB,AACD,2EACE,aAAe,CAChB,AACD,6BACE,+BAAiC,CAClC,AACD,6BACE,yBAA2B,AAC3B,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B,AACD,iCACE,kBAAoB,CACrB,AACD,2BACE,WAAY,AACZ,mBAAqB,CACtB,AACD,qCACE,YAAa,AACb,sBAAuB,AACnB,mBAAoB,AACxB,mBAAoB,AACpB,kBAAmB,AACnB,cAAe,AACf,iBAAmB,CACpB,AACD,iDACE,eAAiB,CAClB,AACD,+CACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,WAAY,AACZ,iBAAmB,CACpB,AACD,gDACE,iBAAkB,AAClB,mBAAoB,AACpB,YAAa,AACb,kBAAoB,CACrB,AACD,2DACE,gBAAiB,AACjB,oBAAqB,AACrB,kBAAmB,AACnB,mBAAoB,AACpB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,kBAAoB,CACzB,AACD,yDACE,gBAAiB,AACjB,cAAe,AACf,gBAAiB,AACjB,uBAAwB,AACxB,mBAAoB,AACpB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,6BAA+B,CACpC,AACD,yDACE,gBAAiB,AACjB,aAAe,CAChB,AACD,8DACE,iBAAkB,AAClB,UAAY,CACb,AACD,sDACE,gBAAiB,AACjB,iBAAmB,CACpB,AACD,gEACE,yBAA0B,AAC1B,mBAAoB,AACpB,WAAY,AACZ,mBAAoB,AACpB,gBAAiB,AACjB,sBAAuB,AACvB,iBAAmB,CACpB,AACD,qEACE,gBAAiB,AACjB,cAAe,AACf,aAAe,CAChB,AACD,4DACE,+BAAiC,AACjC,WAAY,AACR,MAAQ,CACb,AACD,4DACE,WAAY,AACZ,YAAa,AACb,aAAe,CAChB","file":"list.vue","sourcesContent":["\n.vux-1px[data-v-098c84bc],\n.vux-1px-t[data-v-098c84bc],\n.vux-1px-b[data-v-098c84bc],\n.vux-1px-tb[data-v-098c84bc],\n.vux-1px-l[data-v-098c84bc],\n.vux-1px-r[data-v-098c84bc] {\n  position: relative;\n}\n.vux-1px[data-v-098c84bc]:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  border: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  height: 200%;\n  transform-origin: left top;\n  transform: scale(0.5);\n}\n.vux-1px-t[data-v-098c84bc]:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.vux-1px-b[data-v-098c84bc]:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n}\n.vux-1px-tb[data-v-098c84bc]:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.vux-1px-tb[data-v-098c84bc]:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n}\n.vux-1px-l[data-v-098c84bc]:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 0;\n  transform: scaleX(0.5);\n}\n.vux-1px-r[data-v-098c84bc]:after {\n  content: \" \";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-right: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 100% 0;\n  transform: scaleX(0.5);\n}\n.vux-center-v[data-v-098c84bc],\n.vux-center-h[data-v-098c84bc],\n.vux-center[data-v-098c84bc] {\n  display: -ms-flexbox;\n  display: flex;\n}\n.vux-center-v[data-v-098c84bc],\n.vux-center[data-v-098c84bc] {\n  -ms-flex-align: center;\n      align-items: center;\n}\n.vux-center-h[data-v-098c84bc],\n.vux-center[data-v-098c84bc] {\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.vux-x-input[data-v-098c84bc] {\n  width: 100%;\n  padding: 10px 0 10px 10px;\n}\n.page-content[data-v-098c84bc] {\n  background: #ffffff;\n  min-height: 100vh;\n}\n.search-box[data-v-098c84bc] {\n  padding: .5rem 1rem;\n  background: #f2f2f2;\n  height: 3.5rem;\n  box-sizing: border-box;\n}\n.search-box .search[data-v-098c84bc] {\n  height: 2.5rem;\n  box-sizing: border-box;\n  background: #fff;\n  border-radius: 25px;\n  line-height: 2.5rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  position: relative;\n}\n.search-box .search .search_input[data-v-098c84bc] {\n  border: none;\n  -ms-flex: 1;\n      flex: 1;\n  outline: none;\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n  padding-right: 10px;\n}\n.search-box .search .weui-icon-search[data-v-098c84bc] {\n  padding: 0 1rem !important;\n  line-height: 2.5rem;\n}\n.search-box .search .search_btn[data-v-098c84bc] {\n  padding: 0 1rem;\n  color: #317ef2;\n  line-height: 2.5rem;\n  border: none;\n  border-left: 1px solid #e5e5e5;\n  font-weight: bold;\n  font-size: 1rem;\n  background: #ffffff;\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n  z-index: 99;\n}\n.check_tab[data-v-098c84bc] {\n  height: 2.5rem;\n  border-bottom: 1px solid #e9e7e8;\n  display: -ms-flexbox;\n  display: flex;\n  line-height: 2.5rem;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n.check_tab .tab_item[data-v-098c84bc] {\n  -ms-flex: .25;\n      flex: .25;\n  text-align: center;\n  position: relative;\n}\n.check_tab .tab_item.active[data-v-098c84bc] {\n  font-weight: bold;\n  color: #317ef2;\n  border-bottom: 2px solid #317ef2;\n}\n.check_tab .tab_item.arrow__active[data-v-098c84bc] {\n  font-weight: bold;\n  color: #317ef2;\n}\n.check_tab .tab_item .arrow_group[data-v-098c84bc] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  text-align: center;\n  line-height: 2.5px;\n  height: 2.5rem;\n}\n.check_tab .tab_item .arrow_group .iconfont[data-v-098c84bc] {\n  line-height: .5rem;\n  position: absolute;\n  right: .8rem;\n  color: #ccc;\n}\n.check_tab .tab_item .arrow_group .iconfont[data-v-098c84bc]:first-child {\n  top: 0.75rem;\n}\n.check_tab .tab_item .arrow_group .iconfont[data-v-098c84bc]:last-child {\n  bottom: 0.75rem;\n}\n.check_tab .tab_item .arrow_group .iconfont.arrow__active[data-v-098c84bc] {\n  color: #317ef2;\n}\n.switch_box[data-v-098c84bc] {\n  border-bottom: 1px solid #eaeaea;\n}\n.van-switch[data-v-098c84bc] {\n  font-size: 22px !important;\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.van-switch--on[data-v-098c84bc] {\n  background: #317ef2;\n}\n.shop_box[data-v-098c84bc] {\n  width: 100%;\n  padding-bottom: 20px;\n}\n.shop_box .box_item[data-v-098c84bc] {\n  height: 6rem;\n  -ms-flex-align: center;\n      align-items: center;\n  margin-bottom: 1rem;\n  position: relative;\n  display: block;\n  padding-left: 1rem;\n}\n.shop_box .box_item[data-v-098c84bc]:first-child {\n  margin-top: 1rem;\n}\n.shop_box .box_item .shop_img[data-v-098c84bc] {\n  width: 6rem;\n  height: 6rem;\n  margin-right: 1rem;\n  float: left;\n  position: relative;\n}\n.shop_box .box_item .shop_info[data-v-098c84bc] {\n  margin-left: 7rem;\n  padding-right: 1rem;\n  height: 6rem;\n  line-height: 1.5rem;\n}\n.shop_box .box_item .shop_info .shop_name[data-v-098c84bc] {\n  font-size: .9rem;\n  margin-bottom: .5rem;\n  position: relative;\n  line-height: 1.2rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.shop_box .box_item .shop_info .xianjia[data-v-098c84bc] {\n  font-size: .8rem;\n  color: #AEAEAE;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n.shop_box .box_item .shop_info .quanhou[data-v-098c84bc] {\n  font-size: .8rem;\n  color: #AEAEAE;\n}\n.shop_box .box_item .shop_info .quanhou span[data-v-098c84bc] {\n  font-size: 1.2rem;\n  color: #333;\n}\n.shop_box .box_item .shop_info .quan[data-v-098c84bc] {\n  font-size: .9rem;\n  position: relative;\n}\n.shop_box .box_item .shop_info .quan .myAmount[data-v-098c84bc] {\n  border: 1px solid #ff681d;\n  background: #ff681d;\n  color: #fff;\n  padding-left: .3rem;\n  font-size: .9rem;\n  box-sizing: border-box;\n  border-radius: 3px;\n}\n.shop_box .box_item .shop_info .quan .myAmount span[data-v-098c84bc] {\n  background: #fff;\n  color: #ff681d;\n  padding: 0 5px;\n}\n.shop_box .box_item .shop_info .shop_title[data-v-098c84bc] {\n  -webkit-line-clamp: 1 !important;\n  -ms-flex: 1;\n      flex: 1;\n}\n.shop_box .box_item .shop_info .shop_logos[data-v-098c84bc] {\n  width: 1rem;\n  height: 1rem;\n  display: block;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=1.8179ee5b2dfe8e232c1b.js.map