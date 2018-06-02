<template>
  <div class="page-content" id="anchor" ref="anchor">
    <header ref="header">
      <img class="img-responsive logo" src="../../assets/images/slogon_logo.png" alt="">
      <div class="search" :class="isSearchFixed ? 'search_fixed': ''" ref="search">
        <div class="search-box" @click="toSearch">
          <i class="iconfont icon-sousuo"></i>
          <span class="search_input">搜宝贝 领优惠券 拿返佣</span>
          <div class="search_btn">搜优惠券</div>
        </div>
      </div>
      <router-link class="guide_tag" tag="div" to="/guide">
        <span>新手指引</span>
        <img class="img-responsive guide_img" src="../../assets/images/btn_kz@2x.png" alt="">
      </router-link>
    </header>
    <div class="roll_ad" ref="adbox">
      <router-link class="ad_box" to="/guide" tag="div"></router-link>
      <div to="mine" class="roll_box">
        <img class="roll_logo" src="../../assets/images/icon_ztkb.png" alt="">
        <div class="roll_list">
          <div class="list" :class="{anim:animate==true}">
            <div class="list_item" v-for='item in dynamicList'>
              <div class="name_time">
                <div class="name">{{item.nickname}}</div>
                <div class="time">{{item.timeqian}}</div>
              </div>
              <p class="desc_box">{{item.miaoxu}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="prefrence_box">
      <div class="prefrence_title" ref="prefrence"></div>
      <div class="tab_box" :class="isTabFixed ? 'tab_box_fixed': ''" :style="{'top':(isTabFixed?TabTopHeight:'')}" ref="tab_box">
        <tab :line-width=2 active-color='#317ef2' :animate="false"ref="tabitems">
          <tab-item v-for="(item,index) in categoryList" :key="index" :selected="index===0" @on-item-click="checkTabs(item.id,index)">{{item.name}}</tab-item>
        </tab>
      </div>
      <div class="scorll_box" :style="{'margin-top':isTabFixed?'44px':'0'}">
        <scroller lock-x :height="scrollHeight" @on-scroll-bottom="onScrollBottom" @on-scroll="onScroll" ref="scrollerBottom" :scroll-bottom-offst="200">
          <div class="shop_box">
            <div class="box_item" v-for="(item,index) in shopList" @click="toDetail(item)" :key="item.item_id">
              <img class="shop_img" v-if="item.item_pic"  v-lazy="item.item_pic" alt="">
              <img class="shop_img" v-else src="../../assets/images/placeholder.png" alt="">
              <div class="shop_info">
                <div class="shop_name">
                  <img class="shop_logos" v-if="item.item_type == 1" src="../../assets/images/taobao.png" alt="">
                  <img class="shop_logos" v-else src="../../assets/images/tm.png" alt="">
                  <p class="shop_title weui-media-box__desc">{{item.item_title}}</p>
                </div>
                <div class='xianjia'>现价 ￥ {{item.item_price}} <span>月销 {{item.item_volume}}件</span></div>
                <div class='quanhou'>券后价 <span>￥ {{item.item_price_coupons}}</span> </div>
                <div class='quan' v-if="item.item_coupon">
                  <span class='myAmount'>券 <span>{{item.item_coupon.amount}}元</span> </span>
                  <div class='share_msg'>赚 ￥{{item.item_subsidy}}元</div>
                </div>
              </div>
              <!-- <div class='share_group'>
                <span class='share_btn'>
                  <i class='iconfont icon-fenxiang'></i>
                </span>
                <div class='share_msg'>赚 ￥{{item.item_subsidy}}</div>
              </div> -->
            </div>
            <load-more tip="拼命加载中...." v-if="!IslastPage"></load-more>
            <div class="IslastPage" v-else></div>
          </div>
        </scroller>
      </div>
    </div>
  </div>
</template>

<script>
  import {authorizeLogin, wxLogin, guidelist,dynamicList,categoryList,indexShopList} from '../../api'
  import {Panel,Tab, TabItem,Scroller, LoadMore} from 'vux'
  import Storage from 'good-storage'
  import { fail } from 'assert';
  export default {
    name: 'index',
    data() {
      return {
        onFetching: false,
        animate:false,
        title:'组合标题',
        type: '1',  
        guideList:[],
        dynamicList:[],
        categoryList:[],
        shopList:[],
        tabWidth: 0,
        isActive:0,
        cid:1,
        pagesize: 10,
        page: 1,
        IslastPage: false,
        isSearchFixed:false,
        isTabFixed:false,
        tabboxWidth: 0,
        scrollTop: 0,
        scrollHeightBox: '0px',
        scrollBoxHeight: 0,
        scrollHeight: '200px',
        clientHeight: 0,
        top: 0,
        TabTopHeight: "0px"
      }
    },
    components: {
      Panel,
      Tab,
      TabItem,
      Scroller,
      LoadMore
    },
    created() {
      setInterval(this.scroll,3000)
    },
    methods: {
      toDetail(item){
        this.$store.commit('SET_INFOMATION',item)
        
        this.$router.push({name: 'Detail', params:{id : item.item_id,info:item.item_coupon.info}});
      },
      //去图片空格过滤器
      wipeBlank(value) {
        return value.trim()
      },
      //下拉加载
      onScrollBottom () {
        let that = this          
        if (this.onFetching || this.IslastPage || that.page >=that.lastPage) {
          return false
        } else {
          that.onFetching = true
          var page =  ++ that.page
          let data = {
            cid:that.cid,
            pagesize:that.pagesize,
            page: page
          }
          indexShopList(data).then(res =>{
            if(res.code === 0){
              let IslastPage = false
              if(that.page >= res.result.last_page)
                IslastPage = true               
              that.shopList = that.shopList.concat(res.result.data)
              that.page = res.result.current_page
              that.lastPage = res.result.last_page
              that.onFetching = true
              that.IslastPage = IslastPage
            }
            that.onFetching = false
            that.$nextTick(() => {
              that.$refs.scrollerBottom.reset()
            })
          })
        }
      },
      onScroll (pos) {
        let offTop = pos.top
        window.scrollTo(0,328) //window向上滚动
      },
      //滚动监听
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop >= 100){
          //128  搜索栏固定
          this.isSearchFixed = true
          this.isTabFixed = false
          if(scrollTop > 328){
            //763  tab固定
            this.isSearchFixed = true
            this.isTabFixed = true
          }
        }else{
          //搜索栏  tab栏  取消固定
          this.isSearchFixed = false
          this.isTabFixed = false
        }
      },
      scroll(){
        this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
          this.dynamicList.push(this.dynamicList[0]);  // 将数组的第一个元素添加到数组的
          this.dynamicList.shift();               //删除数组的第一个元素
          this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
        },500)
      },
      getGuideList(){
        let that = this
        guidelist().then(res =>{
          if(res.code === 0){
            that.guideList = res.result
          }
        })
      },
      getdynamicList(){
        let that = this
        dynamicList().then(res =>{
          if(res.code === 0){
            that.dynamicList = res.result
          }
        })
      },
      getCategray(){
        let that = this
        categoryList().then(res =>{
          if(res.code === 0){
            that.categoryList = res.result.data
            that.tabWidth = res.result.data.length*5 + 'rem'
          }
        })
      },
      getShopList(data){
        let that = this
        if (that.onFetching) return;
        that.onFetching = true
        indexShopList(data).then(res =>{
          if(res.code === 0){
            that.shopList = res.result.data
            that.page = res.result.current_page
            that.lastPage = res.result.last_page
            that.onFetching = false
            that.IslastPage = false
          }
          that.onFetching = false
        })
      },
      checkTabs(item,index){
        let that = this
        that.$nextTick(() => {
          that.$refs.scrollerBottom.reset({top: 0})
        })
        that.isActive = index
        that.cid = item
        that.page = 1
        that.isSearchFixed = true
        that.isTabFixed = true
        window.scrollTo(0,328) //window向上滚动
        let data = {
          cid:that.cid,
          pagesize:that.pagesize,
          page:that.page
        }
        that.getShopList(data)
      },
      toSearch(e){
        this.$router.push({path:'search'})
      }
    },
    mounted () {
      let that = this
      window.addEventListener('scroll', this.handleScroll)      
      this.$nextTick(() => {
        that.clientHeight = `${document.documentElement.clientHeight}`
        that.scrollHeight = (that.clientHeight - that.$refs.search.offsetHeight - that.$refs.tab_box.offsetHeight) + 'px'
        that.TabTopHeight = (that.$refs.search.offsetHeight + 44 ) + 'px'
        this.$refs.scrollerBottom.reset({top: 0})
        window.scrollTo(0,0)
      })
      let data = {
        cid:this.cid,
        pagesize:this.pagesize,
        page:1
      }
      this.getGuideList()
      this.getdynamicList()
      this.getCategray()
      this.getShopList(data)
    }
  }

</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
.page-content{
  position: relative;
}
header{
  background: #317df4;
  position: relative;
  img.logo{
    width: 90%;
    margin: 0 auto;
    padding-top: 5rem
  }
  .search{
    height: 5rem;
    // height: 76px
    display: flex;
    align-items: center;
  }
  .search-box{
    width: 95%;
    margin: 0 auto;
    background: #fff;
    height: 2.5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-radius: 40px;
    .iconfont{
      line-height: 1.5rem;
      margin: 0 1rem;
      background: #fff;
      height: 1.5rem;
      margin-top: .5rem;
    }
    .search_input{
      height:2.5rem;
      line-height: 2.5rem;
      color:#757575;
      position:relative;
      flex: 1;
      background: #fff;   
      font-size: 1rem 
    }
    .search_btn{
      color:#ffffff;
      line-height: 2.5rem;
      padding: 0 1rem;
      border-left:1px solid #e5e5e5;
      font-weight:bold;
      background: linear-gradient(to right,#85c2fd,#16aaff);
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;
    }
  }
  .search_fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 2;
    background: #317df4;
    max-width: 1080px;
  }
  .guide_tag{
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    img{
      width: 15px;
      height: 15px;
      margin-left: 5px;
    }
  }
}
.roll_ad{
  margin: 0 auto;
  background: #fff;
  border-bottom: .8rem solid #f2f2f2;
  height: 15rem;
  .ad_box{
    background: url('../../assets/images/bg_sj@2x.png');
    height:10.8rem;
    background-position: center;
    background-size: 100%;
    box-sizing: border-box;
  }
  .roll_img{
    width: 100%;
  }
  .roll_box{
    display: flex;
    justify-content: space-around;
    padding: .5rem 1rem;
    .roll_logo{
      width: 3rem;
      height: 3rem;
    }
    .roll_list{
      flex: 1;
      overflow: hidden;
      margin-left: .5rem;
      height: 3rem;
      .list{
        position:relative;
        transition: top .5s;
        .list_item{
          height: 3rem;
          display: flex;
          .name_time{
            flex:.2;
            height:3rem;
            position:relative;
            padding-left:10px;
            display: flex;
            flex-direction: column;
            line-height: 1.5rem;
            .name{
              flex: 1;
              font-size:1rem;
              color:#f5a631;
              display:-webkit-box;
              -webkit-box-orient:vertical;
              -webkit-line-clamp:1;
              overflow:hidden;
            }
            .time{
              font-size:.8rem;
              flex: 1;
              color:#939393;
            }
          }
          .desc_box{
            flex:.8;
            height:3rem;
            font-size:.8rem;
            line-height:1.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
        }
      }
      .anim{
          transition: all 0.5s;
          margin-top: -3rem;
      }
    }
  }
}
.prefrence_box{
  // padding: 0 1rem;
  background: #fff;
  margin-bottom: .8rem;
  .prefrence_title{
    height:3rem;
    background: url('../../assets/images/youxuan.jpg') no-repeat;
    background-position: center;
    background-size: 100%;
    padding-top: 1rem;
  }
  .tab_box{
    &.tab_box_fixed{
      width: 100%;
      position: fixed;
      top: 5rem;
      height: 44px;
      z-index: 500;
    }
  }
}
.scorll_box{
  overflow: hidden;
  padding-bottom: 55px
}
.shop_box{
  width: 100%;
  padding-bottom: 100px;
  .box_item{
    height:6rem;
    align-items:center;
    margin-bottom:1rem;
    position:relative;
    display: block;
    padding-left: 1rem;
    &:first-child{
      margin-top: 1rem;
    }
    .shop_img{
      width: 6rem;
      height: 6rem;
      margin-right:1rem;
      float:left;
      position:relative;
    }
    .shop_info{
      margin-left:7rem;
      padding-right:1rem;
      height: 6rem;
      line-height: 1.5rem;
      .shop_name{
        font-size:.9rem;
        margin-bottom:.5rem;
        position:relative;
        line-height:1.2rem;
        // display: flex;
        // align-items: center;
      }
      .xianjia{
        font-size:.8rem;
        color:#AEAEAE;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
      .quanhou{
        font-size:.8rem;
        color:#AEAEAE;
        span{
          font-size:1.2rem;
          color:#333;
        }
      }
      .quan{
        font-size:.9rem;
        position:relative;
        overflow: hidden;
        .myAmount{
          border:1px solid #ff681d;
          background:#ff681d;
          color:#fff;
          padding-left:.3rem;
          font-size:.9rem;
          box-sizing:border-box;
          border-radius:3px;
          span{
            background:#fff;
            color:#ff681d;
            padding:0 5px;
          } 
        }
        div{
            color:#fe3900;
            float: right;
        }
      }
      .shop_title{
        -webkit-line-clamp: 1 !important;
        margin-left: 1.2rem;
        white-space: nowrap;
        display: block;
        color: #333;
      }
      .shop_logos{
        width: 1rem;
        height: 1rem;
        float: left;
      }
    }
    .share_group{
      position:absolute;
      right:1rem;
      width:5rem;
      text-align:center;
      color:#fe3900;
      top:50%;
      transform:translateY(-50%);
      .share_btn{
        border-radius:50%;
        display: block;
        width:2.2rem;
        height:2.2rem;
        border:1px solid #fe3900;
        margin:0 auto;
        .iconfont{
          font-size:1.3rem;
          line-height:2.2rem;
        }
        .share_msg{
          font-size: .8rem
        }
      }
    }
  }
}
</style>
