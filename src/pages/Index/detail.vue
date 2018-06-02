<template>
  <div>
    <div v-if="!isLoading">
      <loading :show="!isLoading" text="请稍后..."></loading>
    </div>
    <div v-else>
      <div class="goods_container">
        <div class="headers"><img @click="getPreview" class="img-responsive" :src="goodsDetail.item_pic" alt=""></div>
        <div class="goods_content">
          <div class="infomations">
            <div class="price" v-cloak>
              <span class="price_icon">券后价</span>
              <span class="price_num" v-if="hasDone">￥{{goodsTbkDetail.after_price}}</span>
              <span class="price_num" v-else>正在努力计算中...</span>
            </div>
            <div class="old_price" v-cloak>
              <div class="old">现价 <span style="text-decoration: line-through">￥{{goodsDetail.item_price}}</span>  </div>
              <div class="old">月销 <span>{{goodsDetail.item_volume}}件</span> </div>
            </div>
            <div class='price_desc' v-if="identityCode<2 || identityCode == undefined">
              该商品存在高佣金,加油升级才能查看~,请尽快升级SVIP
            </div>
            <div class="goods_title" v-if="goodsDetail.item_type === 0" v-cloak>
              <img class="img-responsive" src="../../assets/images/taobao.png" alt="">{{goodsDetail.item_title}}
            </div>
            <div class="goods_title" v-if="goodsDetail.item_type === 1" v-cloak>
              <img class="img-responsive" src="../../assets/images/tm.png" alt="">{{goodsDetail.item_title}}
            </div>
            <!-- <button class="iconfont icon-fenxiang"></button> -->
          </div>
          <div class="preferential" v-if="hasDone">
            <div class="pre" :style="{'background':(!hasDone?'#f3f3f3':'')}">
              <i class="iconfont icon-weibiaoti2fuzhi02"></i>
              <span class="amount_info" v-if="hasDone">优惠券
                <span class="gold_col" v-if="hasDone">{{goodsTbkDetail.coupon_amount}}元</span>
                <span v-if="hasAmount">({{amountInfo}})</span>
              </span>
            </div>
            <div class="pre" :style="{'background':(!hasDone?'#f3f3f3':'')}">
              <i class="iconfont iconfont icon-jinbi"></i>
              <span class="amount_info">
                <span v-if="identityCode <= 0 || identityCode == undefined">佣金预计￥0.00( <span class="gold_col">升级VIP预计佣金￥{{goodsTbkDetail.upgrade_subsidy}}</span> )</span>
                <span v-else-if="identityCode === 1">佣金预计￥{{goodsTbkDetail.subsidy}} <span class="gold_col">( 升级SVIP预计佣金￥{{goodsTbkDetail.commissions}} )</span></span>
                <span v-else>佣金预计￥{{goodsTbkDetail.commissions}}</span>
              </span>
            </div>

          </div>
        </div>
        <div class="goods_image">
          <img class="img-responsive" v-for="(item,index) in goodsImages" :key="index" v-lazy="item" alt="">
        </div>
      </div>
      <!-- 有优惠券 -->
      <van-goods-action v-if="hasAmount">
        <van-goods-action-mini-btn icon="wap-home" text="首页" @click="gobackhome"></van-goods-action-mini-btn>
        <div class="footer" v-if="hasDone">
          <div class="footer-box" v-if="identityCode <= 0 || identityCode == undefined">
            <van-goods-action-big-btn @click="onClickBigBtn" to="/register?type=details">
              <p class="btn-text h6">升级VIP 多赚￥{{goodsTbkDetail.upgrade_subsidy}}</p>
              <p class="btn-text h3">免费升级</p>
            </van-goods-action-big-btn>
            <van-goods-action-big-btn 
              v-clipboard:copy="goodsDetail.item_title + goodsTbkDetail.taotoken"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
              primary>
              <p class="btn-text h6">优惠券￥{{goodsTbkDetail.coupon_amount}}</p>
              <p class="btn-text h3">立即领券</p>
            </van-goods-action-big-btn>
          </div>
          <div class="footer-box" v-else-if="identityCode === 1">
            <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn" to="/buysvip?type=details">
              <p class="btn-text h6">升级SVIP 多赚￥{{goodsTbkDetail.upgrade_subsidy}}</p>
              <p class="btn-text h3">立即升级</p>
            </van-goods-action-big-btn>
            <van-goods-action-big-btn 
              v-clipboard:copy="goodsDetail.item_title + goodsTbkDetail.taotoken"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
              primary>
              <p class="btn-text h6">优惠券￥{{goodsTbkDetail.coupon_amount}}</p>
              <p class="btn-text h3">下单再返￥{{goodsTbkDetail.subsidy}}</p>
            </van-goods-action-big-btn>
          </div>
          <div class="footer-box" v-else>
            <van-goods-action-big-btn 
              v-clipboard:copy="goodsDetail.item_title + goodsTbkDetail.taotoken"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
              primary>
              <p class="btn-text h6">优惠券￥{{goodsTbkDetail.coupon_amount}}</p>
              <p class="btn-text h3">下单再返￥{{goodsTbkDetail.commissions}}</p>
            </van-goods-action-big-btn>
          </div>
        </div>
        <div class="footer" v-else>
          <div class="footer-box">
            <van-goods-action-big-btn :text="'正在努力搜券中'"></van-goods-action-big-btn>
          </div>
        </div>
      </van-goods-action>
      <!-- 无优惠券 -->
      <van-goods-action v-else>
        <van-goods-action-mini-btn icon="wap-home" text="首页" @click="gobackhome"></van-goods-action-mini-btn>
        <div class="footer" v-if="hasDone">
          <div class="footer-box" v-if="identityCode <= 0 || identityCode == undefined">
            <van-goods-action-big-btn @click="onClickBigBtn" to="/register?type=details">
              <p class="btn-text h6">升级VIP 多赚{{goodsTbkDetail.upgrade_subsidy}}元</p>
              <p class="btn-text h3">免费升级</p>
            </van-goods-action-big-btn>
          </div>
          <div class="footer-box" v-else-if="identityCode === 1">
            <van-goods-action-big-btn @click="onClickBigBtn" to="/buysvip?type=details">
              <p class="btn-text h6">升级SVIP 多赚{{goodsTbkDetail.upgrade_subsidy}}元</p>
              <p class="btn-text h3">立即升级</p>
            </van-goods-action-big-btn>
            <van-goods-action-big-btn :text="'下单返￥'+goodsTbkDetail.subsidy" @click="onClickBigBtn" primary></van-goods-action-big-btn>
          </div>
          <div class="footer-box" v-else>
            <van-goods-action-big-btn :text="'下单返￥'+goodsTbkDetail.commissions" @click="onClickBigBtn"></van-goods-action-big-btn>
          </div>
        </div>
        <div class="footer" v-else>
          <div class="footer-box">
            <van-goods-action-big-btn :text="'正在努力搜券中...'" >
              <p>正在努力搜券中...</p>
            </van-goods-action-big-btn>
          </div>
        </div>
      </van-goods-action>
      <div v-transfer-dom>
        <x-dialog v-model="showHideOnBlur" class="dialog-box" hide-on-blur>
          <div class="img-box">
            <img :src="goodsDetail.item_pic" class="img-responsive" style="max-width:100%">
          </div>
          <div class="click-text">
            <p>淘口令复制成功，打开[手机淘宝]即可[领取优惠券]并购买，收货后到智淘提现，通过该口令购买的都是您的订单，佣金都归您</p>
          </div>
          <div @click="showHideOnBlur=false">
            <span class="vux-close"></span>
          </div>
        </x-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import VueClipboard from 'vue-clipboard2'
import {mapGetters} from 'vuex'
import { GoodsAction,  GoodsActionBigBtn,  GoodsActionMiniBtn,ImagePreview} from 'vant';
import {Loading,XDialog,TransferDomDirective as TransferDom} from 'vux'
import {tbkConvert,getDetails,goodsImgDetails} from 'api'
import { setTimeout } from 'timers';
import Storage from 'good-storage'
export default {
  directives: {
    TransferDom
  },
  data () {
    return {
      isLoading: false,
      detailData: {},
      amountInfo: '',
      noms: 1 ,
      thumbPic: '',
      goodsDetail:{},
      goodsTbkDetail:{},
      goodsImages: [],
      hasAmount: false,
      showHideOnBlur: false,
      hasDone: false,
      title: ""
    }
  },
  computed:{
      ...mapGetters(['comInfomation','identityCode'])
  },
  created () {
      this.wxShare(this.title, '推荐一个超级好用的省钱工具')
      
  },
  components: {
    XDialog,
    'van-goods-action':GoodsAction,
    'van-goods-action-big-btn':GoodsActionBigBtn,
    'van-goods-action-mini-btn':GoodsActionMiniBtn,
    Loading,
    ImagePreview
  },
  methods: {
    getDetails(data){
      getDetails(data).then(res =>{
        if(res.code === 0){
          this.goodsDetail = res.result.data
          console.log(res.result.data.item_title )
          this.title = res.result.data.item_title 
          document.title = res.result.data.item_title 
        }
        this.isLoading = true
      }).catch(err =>{
        console.log(err)
      })
    },
    getConvert(data){
      tbkConvert(data).then(res =>{
        if(res.code === 0){
          this.goodsTbkDetail = res.result
          this.goodsTbkDetail['commissions'] = (this.goodsTbkDetail.upgrade_subsidy + this.goodsTbkDetail.subsidy).toFixed(2)
          this.goodsTbkDetail['after_price'] = (this.goodsTbkDetail.item_price - this.goodsTbkDetail.coupon_amount).toFixed(2)
        }
        this.hasDone = true
      }).catch(err =>{
        console.log(err)
      })
    },
    getImageList(param){
      let that = this
      goodsImgDetails(param).then(res =>{
        if(res.code === 0){
          that.goodsImages = res.result.data
        }
      })
    },
    gobackhome() {
      // this.$Toast('点击图标');
      this.$router.push('/')
    },
    onCopy(e){
      this.showHideOnBlur = true
      console.log(e)
    },
    onError(e){
      console.log(e)
    },
    onClickCopy(item){
      console.log(item)
    },
    onClickBigBtn(e) {
      console.log(e)
      // this.$Toast('点击按钮'); 
    },
    getPreview(){
      ImagePreview([this.goodsDetail.item_pic])
    }
  },
  mounted () {
    let that = this
    let comInfomation = that.$store.state.comInfomation
    that.$nextTick(() =>{  
      Storage.session.set('detailPath',that.$route.fullPath)
      let id = this.$route.params.id
      this.amountInfo = this.$route.params.info
      let data = {
        item_id :id
      }
      let data1 = {
        gid: id
      }
      that.getDetails(data)
      that.getImageList(data1)
      that.getConvert(data)
      if(comInfomation.item_coupon){
        this.hasAmount = true
      }
    })   
  },
  activated () {
  }
}
</script>


<style lang="less" scoped>
@import '~vux/src/styles/close';
.page-container{
  min-height:100vh;
}
.goods_container{
  padding-bottom: 50px;
  background: #ffffff;
  .goods_content{
    
    .infomations{
      position:relative;
      border-bottom:1rem solid #e9e9e9;
      padding: 1rem 1rem 0;
      .price{
        color: #e4bc76;
        display: flex;
        align-items: center;
      }
      .price_icon{
        text-align:center;
        font-size:.8rem;
        border:1px solid #e4bc76;
        border-radius:2px;
        width:2.5rem;
        padding:0 .8rem;
        height:1.5rem;
        line-height:1.5rem;
      }
      .price_num{
        font-size: 1.2rem;
        font-weight: 600;
        margin-left: 5px;
      }
      .old_price{
        display: flex;
        justify-content: space-between;
        text-align: left;
        color:#7f7f7f;
        font-size: .9rem;
        div{
          flex: 1;
          line-height: 2rem
        }
      }
      .price_desc{
        color: #e4bc76;
        font-size: .9rem;
        line-height: 2rem
      }
      .goods_title{
        color:#333;
        font-size:.9rem;
        line-height:2rem;
        img{
          display: inline-block;
          width: 1rem;
          height: 1rem;
          vertical-align: middle;
          margin-right: 10px;
        }

      }
      button{
        background: transparent;
        border: none;
        line-height: 1.5rem;
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: #e4bc76;
        font-size: 1.3rem
      }
    }
    .preferential{
      padding: .5rem 1rem;
      position:relative;
      border-bottom:1rem solid #e9e9e9;
      font-size: .9rem;
      .pre{
        line-height: 3rem;
        .amount_info{
          line-height: 2rem
        }
      }
    }
  }
}
.footer{
  display: flex;
  width: 100%;
}
.footer-box{
  display: flex;
  width: 100%;
  .van-button__text{
    display: flex;
    flex-direction: column;
    .btn-text{
      flex: .5;
      line-height: 25px;
    }
    .h6{
      line-height: 20px;
      font-size: .8rem;
    }
    .h3{
      line-height: 30px;
      font-size: 1rem;
    }
  }
}
.dialog-box {
  .weui-dialog{
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .img-box {
    overflow: hidden;
  }
  .click-text{
    padding: .5rem;
    font-size: .8rem;
    line-height: 1.6rem
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
</style>