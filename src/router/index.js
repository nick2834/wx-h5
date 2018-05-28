import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import {authorizeLogin,wxLogin,getUserInfo} from 'api'
import Storage from 'good-storage'
const Author = resolve => require(['pages/author'], resolve)
const Index = resolve => require(['pages/Index/Index'], resolve)
const Detail = resolve => require([ 'pages/Index/detail'], resolve)
const GuideList = resolve => require([ 'pages/Index/guideList'], resolve)
const GuideDetail = resolve => require([ 'pages/Index/guideDetail'], resolve)
const SvipPage = resolve => require([ 'pages/svip'], resolve)
const Buysvip = resolve => require([ 'pages/svip/buysvip'], resolve)
const Power = resolve => require([ 'pages/svip/power'], resolve)
const RankPage = resolve => require([ 'pages/rank'], resolve)
const Mine = resolve => require([ 'pages/Mine'], resolve)
const Search = resolve => require([ 'pages/search'], resolve)
const SearchList = resolve => require([ 'pages/search/list'], resolve)
const Custom = resolve => require([ 'pages/Mine/custom'], resolve)
const Code = resolve => require([ 'pages/Mine/code'], resolve)
const Register = resolve => require([ 'pages/Mine/register'], resolve)
const Questions = resolve => require([ 'pages/Mine/question'], resolve)
const Income = resolve => require([ 'pages/Mine/income'], resolve)
const Acount = resolve => require([ 'pages/Mine/acount'], resolve)
const Myacount = resolve => require([ 'pages/Mine/myacount'], resolve)
const Withdraw = resolve => require([ 'pages/Mine/withdraw'], resolve)
const Record = resolve => require([ 'pages/Mine/record'], resolve)
Vue.use(Router)
const router =  new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta:{
        title:"智淘APP",
        index: 0
      }
    },
    {
      path: '/author',
      name: 'Author',
      component: Author,
      meta:{
        title:"授权登录",
        index: 0
      }
    },
    {
      path: '/guide',
      name: 'GuideList',
      component: GuideList,
      meta:{
        title:"新手指引",
        index: 10
      }
    },
    {
      path: '/guide/:id',
      name: 'GuideDetail',
      component: GuideDetail,
      meta:{
        title:"新手指引",
        index: 11
      }
    },
    {
      path: '/detail/:id/:info',
      name: 'Detail',
      component: Detail,
      meta:{
        title:"商品详情",
        index: 9
      }
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      meta:{
        title:"商品详情",
        index: 9
      }
    },
    {
      path: '/svippage',
      name: 'SVIP',
      component: SvipPage,
      meta:{
        title:"SVIP",
        index: 1
      }
    },
    {
      path: '/buysvip',
      name: 'Buysvip',
      component: Buysvip,
      meta:{
        title:"SVIP购买",
        index: 1
      }
    },
    {
      path: '/power',
      name: 'Power',
      component: Power,
      meta:{
        title:"特权详情",
        index: 1
      }
    },
    {
      path: '/rankpage',
      name: 'RankPage',
      component: RankPage,
      meta:{
        title:"排行",
        index: 2
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta:{ title:"我的" ,index: 3}
    },
    {
      path: '/register',
      name: 'Register',
      component : Register,
      meta: { title:"注册" ,index: 12 }
    },
    {
      path: '/custom',
      component: Custom,
      name: 'Custom',
      meta: {title:'我的客户',index: 4}
    },
    {
      path: '/income',
      component: Income,
      name: 'Income',
      meta: {title:'收入明细',index: 14}
    },
    {
      path: '/code',
      component: Code,
      name: 'Code',
      meta: {title:'我的二维码',index: 5}
    },
    {
      path: '/questions',
      component: Questions,
      name: 'Questions',
      meta: {title:'常见问题',index: 13}
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta:{
        title:"搜素",index: 6
      }
    },
    {
      path: '/searchlist/:items',
      name: 'SearchList',
      component: SearchList,
      meta:{
        title:"搜索结果",index: 7
      }
    },
    {
      path: '/searchlist',
      name: 'SearchList',
      component: SearchList,
      meta:{
        title:"搜索结果",index: 8
      }
    },
    {
      path: '/acount',
      name: 'Acount',
      component: Acount,
      meta:{
        title:"我的账户",index: 8
      }
    },
    {
      path: '/myacount',
      name: 'Myacount',
      component: Myacount,
      meta:{
        title:"提现账户",index: 8
      }
    },
    {
      path: '/withdraw',
      name: 'Withdraw',
      component: Withdraw,
      meta:{
        title:"申请提现",index: 8
      }
    },
    {
      path: '/record',
      name: 'Record',
      component: Record,
      meta:{
        title:"提现记录",index: 8
      }
    },
    {
      path: '/Index',
      redirect: '/'
    },
    {
      path: '/redirect_uri',
      name: '网页授权',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
function getUrlParms(name){
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r!=null)
  return unescape(r[2]);
  return null;
}
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if ((!Storage.session.get('token') && !store.state.token && !store.state.hasLogin)) {
    // 第一次访问
    console.log('授权登录')
    // 跳转到微信授权页面，微信授权地址通过服务端获得
    authorizeLogin().then(res => {
      if (res.code === 0) {
        store.commit('HASLOGIN',true)
        window.location.href = res.url
      }
    })
  } else if (store.state.hasLogin) {
    let data = {
      code: getUrlParms('code')
    }
    // 刷新页面，获取数据存入vuex
    wxLogin(data).then(res => {
      if (res.code === 0) {
        store.commit('SET_TOKEN',res.result.data.token)
        store.commit('SET_IDENTITYCODE',res.result.data.type)
        let para = {
            token:res.result.data.token
        }
        getUserInfo(para).then(res =>{
            if(res.code === 0){
              store.commit('SET_USER',res.result.data)
            }
            console.log(res.result.data)
        })
        next()
      }else{
        store.commit('HASLOGIN',false)
      }
    })
    next()
  } else {
    // 已经登录
    console.log('已登录')
    next()
  }
});

export default router