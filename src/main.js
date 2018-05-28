import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import wx from 'weixin-js-sdk'
import VueClipboard from 'vue-clipboard2'
import './assets/less/app.less'
import './assets/css/iconfont.css'
import 'mint-ui/lib/style.css'
import Storage from 'good-storage'
import { Lazyload,Toast} from 'vant'
Vue.use(Lazyload);
Vue.use(VueClipboard);
Vue.prototype.$Toast = Toast
// 登录后跳转方法
Vue.prototype.goBeforeLoginUrl = () => {
  let url = Storage.session.get('beforeLoginUrl')
  if(!url || url.indexOf('/author') != -1){
    router.push('/index')
  }else{
    if(url == '/'){
      url = '/index'
    }
    router.push(url)
    Storage.session.set('beforeLoginUrl', '')
  }
}
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
