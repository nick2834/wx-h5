<template>
  <div id="app" :class="[isIos ? 'xn-ios':'']">
    <x-header v-if="$route.path == '/index' || $route.path == '/svippage' || $route.path == '/rankpage'||$route.path == '/mine' ||$route.path == '/'" :left-options="{showBack: false}">{{$route.meta.title}}</x-header>
    <x-header v-else :left-options="{backText: ''}">{{$route.meta.title}}</x-header>
    <transition :name='transitionName'>
    <!-- <transition> -->
      <router-view></router-view>
    </transition>
    <tabbar slot="bottom" v-show="$route.path == '/index' || $route.path == '/svippage' || $route.path == '/rankpage'||$route.path == '/mine' ||$route.path == '/'">
      <tabbar-item link="/index" :selected="$route.path == '/index' || $route.path == '/'">
        <img src="./assets/images/ic_tab_home_active.png" v-if="$route.path == '/index' || $route.path == '/'" slot="icon"> 
        <img src="./assets/images/ic_tab_home_normal.png" v-else slot="icon"> 
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/svippage" :selected="$route.path == '/svippage'">
        <img src="./assets/images/ic_tab_svip_active.png" v-if="$route.path == '/svippage'" slot="icon"> 
        <img src="./assets/images/ic_tab_svip_normal.png" v-else slot="icon"> 
        <span slot="label">SVIP</span>
      </tabbar-item>
      <tabbar-item link="/rankpage" :selected="$route.path == '/rankpage'">
        <img src="./assets/images/ic_tab_rank_active.png" v-if="$route.path == '/rankpage'" slot="icon"> 
        <img src="./assets/images/ic_tab_rank_normal.png" v-else slot="icon"> 
        <span slot="label">排行</span>
      </tabbar-item>
      <tabbar-item link="/mine" :selected="$route.path == '/mine'">
        <img src="./assets/images/ic_tab_user_active.png" v-if="$route.path == '/mine'" slot="icon"> 
        <img src="./assets/images/ic_tab_user_normal.png" v-else slot="icon"> 
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import {Tabbar, TabbarItem,ViewBox,XHeader } from 'vux'
import {configs} from 'api'
import wx from 'weixin-js-sdk'
export default {
  name: 'app',
  components:{
    ViewBox,
    Tabbar,
    TabbarItem,
    XHeader  
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      if(to.meta.index > 0){
          if( to.meta.index < from.meta.index){
              this.transitionName = 'slide-right';
          }else{
              this.transitionName = 'slide-left';
          }
      }else if(to.meta.index == 0 && from.meta.index > 0){
          this.transitionName = 'slide-right';
      }
    }
  },
  created () {
        this.wxShare(this.$route.meta.title, '推荐一个超级好用的省钱工具')
  },
  data() {
    return{transitionName: '',isIos:false}
  },
  methods: {
    getDevice(){
        if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
            this.isIos = true;
        }
    }
  },
  mounted () {
    this.$Mui.init({
      swipeBack: true //启用右滑关闭功能
    })
    this.getDevice()
  }
}
</script>

<style lang="less">
.tabs{
    height: 6rem !important;
    padding-top: 0 !important;
    background: #333; 
}
.tabs .vux-tab-container{
  height: 6rem;
}
.tabs .vux-tab{
  height: inherit;
  background-color:#333
}
.tabs .vux-tab .vux-tab-item{
  background: #333;
  line-height: 1;
  color: #fff
}
.tabs .vux-tab .vux-tab-ink-bar{
  bottom: 0
}
.gold_color{
  color:#EEB556;
}
.pages{
  padding-top: 44px;
  /* margin-bottom: 55px; */
}
.page-content{
  margin-top: 44px
}
.fullBox{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: #ffffff;
}
.vux-header{
  height: 44px !important;
  background: #317df4 !important;
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.vux-header .vux-header-left .vux-header-back{
  color: #fff !important
}
.vux-header .vux-header-left .left-arrow:before{
  border-color: #fff !important
}
.weui-cells{
  margin-top: 0 !important
}
.weui-dialog__btn_primary{
  color: #317df4 !important;
}
.weui-tabbar{
  position: fixed !important;
  left: 0;
  right: 0;
}
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
  color: #317df4 !important
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
    will-change: transform;
    transition: all .3s;
    position: absolute;
    width:100%;
    left:0;
}
.slide-right-enter {
    transform: translateX(-100%);
}
.slide-right-leave-active {
    transform: translateX(100%);
}
.slide-left-enter {
    transform: translateX(100%);
}
.slide-left-leave-active {
    transform: translateX(-100%);
}
.van-collapse-item__content{
    font-size:.8rem;
    color:#333;
    line-height:2rem;
}
.vux-tab-ink-bar{
    // display: none !important;
}
.vux-tab .vux-tab-item.vux-tab-selected{
  font-weight: 600
}
.weui-flex{
  display: flex;
  padding-bottom: 1.5rem;
  .weui-flex__item{
    flex: 1;
    .placeholder{
      position: relative;
      text-align: center;
      .weui-flex-img{
        width: 2.5rem;
        display: inline-block;
      }
      .weui-flex-idot {
        width:1.5rem;
        height:1rem;
        background:#333;
        font-size:.6rem;
        border-radius:10px;
        color:#fff;
        line-height:1rem;
        position:absolute;
        top:0;
        right:25%;
      }
      .weui-title{
        color:#333;
        font-size:.8rem;

      }
    }
  }
}
</style>
