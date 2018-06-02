import 'babel-polyfill'
import Es6Promise from 'es6-promise'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import wx from 'weixin-js-sdk'
import VueClipboard from 'vue-clipboard2'
import mui from '../static/js/mui.min.js'
import './assets/less/app.less'
import './assets/css/iconfont.css'
import Storage from 'good-storage'
import { Lazyload,Toast} from 'vant'
import {configs} from 'api'
Es6Promise.polyfill()
Vue.use(Lazyload);
Vue.use(VueClipboard);
Vue.prototype.$Mui = mui
Vue.prototype.$Toast = Toast
Vue.prototype.wxShare = function (title, desc) {
	// let links = window.location.href.split('#')[0].split('?')[0]
	let links = window.location.href.split('#')[0]
	let data = {
		url : links
	}
	configs(data).then(res =>{
		wx.config({
	      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
	      appId: res.appId,   // 必填，公众号的唯一标识
	      timestamp: res.timestamp, // 必填，生成签名的时间戳
	      nonceStr: res.nonceStr,   // 必填，生成签名的随机串
	      signature: res.signature, // 必填，签名，见附录1
	      jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	    });
	})
	wx.ready(() =>{
		wx.onMenuShareAppMessage({ // 分享给朋友
	      title: title, // 分享标题
	      desc: desc,   // 分享描述
	      link: links,   // 分享链接 默认以当前链接
	      imgUrl: 'https://api.wxrwin.com/static/pic/fx8.png?v1.0.4',// 分享图标
	      // 用户确认分享后执行的回调函数
	      success: function (res) {
	        console.log(res)
	      },
	      // 用户取消分享后执行的回调函数
	      cancel: function () {
	        console.log('分享到朋友取消');
	      }
		});
		wx.onMenuShareTimeline({
			title: title, // 分享标题
			desc: desc,   // 分享描述
			link: links,   // 分享链接 默认以当前链接
			imgUrl: 'https://api.wxrwin.com/static/pic/fx8.png?v1.0.4',// 分享图标
			// 用户确认分享后执行的回调函数
			success: function (res) {
				console.log(res)
			},
			// 用户取消分享后执行的回调函数
			cancel: function () {
				console.log('分享到朋友取消');
			}
		})
	})
}
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
