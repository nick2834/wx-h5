<template>
  <div id="app">
    <transition :name="transitionName">
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
import {Tabbar, TabbarItem,ViewBox} from 'vux'
export default {
  name: 'app',
  components:{
    ViewBox,
    Tabbar,
    TabbarItem 
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-right';
      }else{
        this.transitionName = 'slide-left';
      }
    }
  },
  created () {
    
    
  },
  data() {
    return{transitionName: ''}
  },
  methods: {
    
  },
  mounted () {
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
  background: #317df4 !important
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
    transition: all .5s cubic-bezier(.55,0,.1,1);
    position: absolute;
    width:100%;
    left:0;
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
/* .slide-left-enter,.slide-right-leave-active {
    transform: translateX(-100%);
}
.slide-right-enter,.slide-left-leave-active {
    transform: translateX(100%);
} */
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
