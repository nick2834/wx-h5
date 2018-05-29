<template>
    <section class="page-content" :style="{'minHeight':clientHeight}">
        <div class='search-box' ref="searchBox">
            <div class='search'>
                <icon type="search"></icon>
                <input class="search_input" type="text" placeholder="" name="value" v-model="searchVal">
                <div class="search_btn" @click="searchBtn">搜优惠券</div>
            </div>
        </div>
        <div class="check_tab" ref="tabBox">
            <div class="tab_item" :class="currentId==0 ? 'active': ''" @click="tabclick" data-current="0">综合</div>
            <div class="tab_item" :class="currentId==1 ? 'active': ''" @click="tabclick" data-current="1">佣金比例</div>
            <div class="tab_item" :class="currentId==2 ? 'arrow__active': ''" @click="tabclick" data-current="2">
                价格
                <div class="arrow_group" @click.stop="priceCLICK">
                    <i class="iconfont icon-arrowup" :class="priceActive?'arrow__active':''"></i>
                    <i class="iconfont icon-arrowdown-copy" :class="!priceActive?'arrow__active':''"></i>
                </div>
            </div>
            <div class="tab_item" :class="currentId==3 ? 'arrow__active': ''" @click="tabclick" data-current="3">
                销量
                <div class="arrow_group" @click.stop="saleCLICK">
                    <i class="iconfont icon-arrowup" :class="saleActive?'arrow__active':''"></i>
                    <i class="iconfont icon-arrowdown-copy" :class="!saleActive?'arrow__active':''"></i>
                </div>
            </div>
        </div>
        <div class="switch_box" ref="switchBox">
            <van-cell-group>
                <van-cell title="仅显示优惠券商品" icon="card"></van-cell>
                <van-switch v-model="value" @change="switchChange" />
            </van-cell-group>
        </div>
        <div style="overflow:hidden">
            <scroller lock-x :height="scrollHeight" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
                <div class="shop_box" v-if="goodsList.length > 0" v-cloak>
                    <div class="box_item" v-for="(item,index) in goodsList" @click="toDetail(item)" :key="item.item_id">
                        <img class="shop_img" v-if="item.item_pic"  v-lazy="item.item_pic" alt="">
                        <img class="shop_img" v-else src="../../assets/images/placeholder.png" alt="">
                        <div class="shop_info">
                            <div class="shop_name">
                                <img class="shop_logos" v-if="item.item_type == 1" src="../../assets/images/taobao.png" alt="">
                                <img class="shop_logos" v-else src="../../assets/images/tm.png" alt="">
                                <p class="shop_title weui-media-box__desc" style="-webkit-box-orient:vertical;">{{item.item_title}}</p>
                            </div>
                            <div class='xianjia'>现价 ￥ {{item.item_price}}<span>月销 {{item.item_volume}}件</span></div>
                            <div class='quanhou' v-if="item.item_coupon">券后价 <span>￥ {{toFixed(item.item_price - item.item_coupon.amount)}}</span> </div>
                            <div class='quanhou' v-else>现价 <span>￥ {{item.item_price}}</span> </div>
                            <div class='quan' v-if="item.item_coupon">
                                <span class='myAmount'>券 <span>{{item.item_coupon.amount}}元</span> </span>
                            </div>
                        </div>
                    </div>
                    <load-more tip="拼命加载中...." v-if="!IslastPage"></load-more>
                    <div class="IslastPage" v-else></div>
                </div>
                <div class="shop_box" v-else v-cloak>
                    <place-holder :title="'没有找到你要的商品'"></place-holder>
                </div>
            </scroller>
        </div> 
        <loading :show="isLoading" text="加载中..."></loading>
    </section>
</template>
<script>
import { Cell, CellGroup,Switch } from 'vant'
import { Icon,XSwitch,Scroller,LoadMore,Loading} from 'vux'
import PlaceHolder from 'components/placeholder'
import {getSearch} from 'api'
import {saveSearch} from '../../../static/js/cache.js'  //引用本地存储js
import storage from 'good-storage'  //引入good-storage包
export default({
  data () {
    return {
        searchVal: this.$route.params.items || '' ,
        currentId: 0,
        value:false,
        priceSort:3,
        saleSort:5,
        priceActive: false,
        saleActive:false,
        goodsList: [],
        pagesize: 10,
        page: 1,
        IslastPage: false,
        coupon:false, //默认不带优惠券
        sortNo: 0, //默认搜索
        clientHeight: 0,
        onFetching: false,
        scrollHeight: '0px',
        isLoading:false
    }
  },
  components: {
    Icon,
    XSwitch,
    Scroller,
    LoadMore,
    'vanCell':Cell,
    'vanCellGroup':CellGroup,
    'vanSwitch':Switch,
    PlaceHolder,
    Loading
  },
  methods: {
    toFixed(val){
        return val.toFixed(2)
    },
    onScrollBottom () {
        let that = this          
        if (this.onFetching || this.IslastPage || that.page >=that.lastPage || that.goodsList.length <= 0) {
          return false
        } else {
          that.onFetching = true
          var page =  ++ that.page
          let data = {
            coupon : that.coupon,
            keyword : that.searchVal,
            page: page,
            sort: that.sortNo
          }
          getSearch(data).then(res =>{
            if(res.code === 0){
              let IslastPage = false
              if(that.page >= res.result.total_page)
                IslastPage = true               
              that.goodsList = that.goodsList.concat(res.result.data)
              that.page = res.result.current_page
              that.lastPage = res.result.total_page
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
    fetchList(data){
        let that = this
        that.isLoading = true
        getSearch(data).then(res =>{
            if(res.code === 0){
                that.goodsList = res.result.data
                that.page = res.result.current_page
                that.lastPage = res.result.total_page
                that.onFetching = false
                that.IslastPage = false
            }else{
                that.goodsList = []
            }
            that.$nextTick(() =>{
                this.$refs.scrollerBottom.reset({top: 0})
            })
            that.isLoading = false
        })
    },
    //搜索按钮
    searchBtn(e){
        let that = this
        if(that.searchVal === '') return
        let searches=storage.get('_search_') || [];
        if( that.searchVal.match(/^\s*$/) == null){
            if(searches.indexOf(that.searchVal) === -1){
                saveSearch(that.searchVal)
            }
        }
        let data = {
            coupon : that.coupon,
            keyword : that.searchVal,
            page: 1,
            sort: 0
        }
        that.fetchList(data)
    },
    toDetail(item){
        let hasCount = item.item_coupon
        console.log(JSON.stringify(hasCount))
        sessionStorage.setItem('detailData',JSON.stringify(item))
        this.$store.commit('SET_INFOMATION',item)
        if(hasCount == undefined){
            this.$router.push({path: `/detail/${item.item_id}`});
        }else{
            this.$router.push({path: `/detail/${item.item_id}/${item.item_coupon.info}`});
        }
        
    },
    //tab点击事件
    tabclick(e){
        let that = this
        let currentId = e.target.dataset.current
        if(that.searchVal === '') return
        this.currentId = currentId
        switch (currentId){
            case '0':
              that.sortNo = 1
              break;  
            case '1':
              that.sortNo = 2
              break;
            default:that.sortNo = 0;
        }
        let data = {
            coupon : that.coupon,
            keyword : that.searchVal,
            page: 1,
            sort: that.sortNo
        }
        that.fetchList(data)
    },
    //价格筛选
    priceCLICK(e){
        let that = this
        if(that.searchVal === '') return
        that.priceActive = !that.priceActive
        that.currentId = 2
        if(that.priceActive){
            that.sortNo = 3
        }else{
            that.sortNo = 4
        }
        let data = {
            coupon : that.coupon,
            keyword : that.searchVal,
            page: 1,
            sort: that.sortNo
        }
        that.fetchList(data)
    },
    //销量筛选
    saleCLICK(e){
        let that = this
        if(that.searchVal === '') return
        that.saleActive = !that.saleActive
        that.currentId = 3
        if(that.saleActive){
            that.sortNo = 5
        }else{
            that.sortNo = 6
        }
        let data = {
            coupon : that.coupon,
            keyword : that.searchVal,
            page: 1,
            sort: that.sortNo
        }
        that.fetchList(data)
    },
    switchChange(e){
        let that = this
        that.coupon = e
        if(that.searchVal === '') return
        let data = {
            coupon : that.coupon,
            keyword : that.searchVal,
            page: 1,
            sort: 0
        }
        that.fetchList(data)
    }
  },
  mounted () {
    let that = this
    let goodsName = that.$route.params.items
    let data = {
        coupon : false,
        keyword : that.searchVal,
        page: 1,
        sort: 0
    }
    that.$nextTick(() =>{
        that.clientHeight = `${document.documentElement.clientHeight}px`
        that.scrollHeight = String(-that.$refs.searchBox.offsetHeight - that.$refs.searchBox.offsetHeight - that.$refs.switchBox.offsetHeight)
        this.$refs.scrollerBottom.reset({top: 0})
        if(that.searchVal === '') return
        that.fetchList(data)
    })
  }
})
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
.page-content{
    background: #ffffff;
}
.search-box{
    padding:.5rem 1rem;
    background:#f2f2f2;
    height: 3.5rem;
    box-sizing: border-box;
    .search{
        height:2.5rem;
        box-sizing:border-box;
        background:#fff;
        border-radius:25px;
        line-height: 2.5rem;
        display: flex;
        justify-content: space-between;
        position: relative;
        .search_input{
            border: none;
            flex: 1;
            outline: none;
            border-top-right-radius: 25px;
            border-bottom-right-radius: 25px;
        }
        .weui-icon-search{
            padding: 0 1rem !important;
            line-height: 2.5rem
        }
        .search_btn{
            position: absolute;
            right: 0;
            padding: 0 1rem;
            color:#317ef2;
            line-height: 2.5rem;
            border: none;
            border-left:1px solid #e5e5e5;
            font-weight:bold;
            font-size: 1rem;
            background: transparent;
        }
    }
}
.check_tab{
    height:2.5rem;
    border-bottom:1px solid #e9e7e8;
    display:flex;
    line-height: 2.5rem;
    justify-content:space-between;
    .tab_item{
        flex: .25;
        text-align: center;
        position: relative;
        &.active{
            font-weight:bold;
            color:#317ef2;
            border-bottom:2px solid #317ef2;
        }
        &.arrow__active{
            font-weight:bold;
            color:#317ef2;
        }
        .arrow_group{
            position:absolute;
            top:0;
            width:100%;
            text-align:center;
            line-height:2.5px;
            height:2.5rem;
            .iconfont{
                line-height:.5rem;
                position:absolute;
                right:.8rem;
                color:#ccc;
                &:first-child{
                    top: .75rem
                }
                &:last-child{
                    bottom: .75rem
                }
                &.arrow__active{
                    color:#317ef2;
                }
            }
        }
    }
}
.switch_box{
    border-bottom:1px solid #eaeaea;
}
.van-switch{
    font-size: 22px !important;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
}
.van-switch--on{
    background: #317ef2
}
.shop_box{
  width: 100%;
  padding-bottom: 20px;
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
      padding-right: 1rem;
      height: 6rem;
      line-height: 1.5rem;
      .shop_name{
        font-size:.9rem;
        margin-bottom:.5rem;
        position:relative;
        line-height:1.2rem;
        display: flex;
        align-items: center;
      }
      .xianjia{
        font-size:.8rem;
        color:#AEAEAE;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        display: flex;
        justify-content: space-between;
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
      }
      .shop_title{
        -webkit-line-clamp: 1 !important;
        // margin-left: .2rem
        flex: 1;
      }
      .shop_logos{
        // padding-right: .2rem;
        width: 1rem;
        height: 1rem;
        display: block;
      }
    }
  }
}
</style>

