<template>
  <div class="page-content">
    <header>
      <span class="img img_idot"></span>
      <span class="img img_glue"></span>
      <!-- 判断用户类型 -->
      <div class="head_card" v-cloak>
        <!-- 普通人、VIP -->
        <div class="card" v-if="identityCode <= 1 || identityCode == undefined">
          <div class="card_t">
            <img v-if="userInfo" class="user_avatar" :src="userInfo.avatar" alt="">
            <img v-else class="user_avatar" src="../../assets/images/default.png" alt="">
            <div class="card_t_r">
              <span v-if="identityCode < 1" class="card_name gold_color f18">SVIP拿奖励，疯狂赚</span>
              <span v-if="identityCode === 1" class="card_name gold_color f18">{{userInfo.nickname}} <img class="img-responsive" src="../../assets/images/vip_icon.png" alt=""></span>
              <span class="card_date">VIP期间已为你节省<span class="gold_color">￥0.00</span>元</span>
            </div>
          </div>
          <div class="card_c" v-if="identityCode > 1"></div>
          <div class="card_f inner_white">
            <div>亲爱的<span>{{userInfo.nickname}}</span>,</div>
            <div>开通SVIP预计可多赚<span class="gold_color">￥8568.00</span></div>
            <div class="check-info" @click="showInfoToast">查看详细 ></div>
          </div>
        </div>
        <!-- SVIP -->
        <div class="card" v-else-if="identityCode === 2">
          <div class="card_t">
            <img v-if="userInfo" class="user_avatar" :src="userInfo.avatar" alt="">
            <img v-else class="user_avatar" src="../../assets/images/default.png" alt="">
            <div class="card_t_r">
              <span class="card_name gold_color f18">{{userInfo.nickname}}<img class="img-responsive" src="../../assets/images/svip_icon.png" alt=""></span>
              <span class="card_date">{{headInfo.svip_end_time}} 到期</span>
            </div>
          </div>
          <div class="card_c">
            <div class="inner_nums">
              <span class="gold_col" :style="{'left':headInfo.earn/headInfo.Average*100 + '%'}">￥{{headInfo.earn}}</span>
            </div>
            <box gap="10px 0" style="position:relative">
              <div class="progress" style="width:75%">
                <div class="progeress_bar" :style="{'width':headInfo.earn/headInfo.Average*100 + '%'}"></div>
              </div>
              <span class="total_money">￥{{headInfo.Average}}</span>
            </box>
            <div class="inner_info">
              <div class='info_msg info_l'>
                <div>你当前已赚佣金</div>
              </div>
              <div class='info_msg info_r'>
                <div>SVIP平均赚取佣金</div>                
              </div>
            </div>
          </div>
          <div class="card_f">
            <p>{{iDCard}}</p>
          </div>
        </div>
        <!-- 渠道 -->
        <div class="card" v-else>
          <div class="card_t">
            <img v-if="userInfo" class="user_avatar" :src="userInfo.avatar" alt="">
            <img v-else class="user_avatar" src="../../assets/images/default.png" alt="">
            <div class="card_t_r">
              <span class="card_name gold_color f18">{{userInfo.nickname}}<img class="img-responsive tubu-icon" src="../../assets/images/tubu_icon.png" alt=""></span>
            </div>
          </div>
          <div class="card_c">
            <div class="inner_nums">
              <span class="gold_col" :style="{'left':headInfo.earn/headInfo.Average*100 + '%'}">￥{{headInfo.earn}}</span>
            </div>
            <box gap="10px 0" style="position:relative">
              <div class="progress" style="width:75%">
                <div class="progeress_bar" :style="{'width':headInfo.earn/headInfo.Average*100 + '%'}"></div>
              </div>
              <span class="total_money">￥{{headInfo.Average}}</span>
            </box>
            <div class="inner_info">
              <div class='info_msg info_l'>
                <div>你当前已赚佣金</div>
              </div>
              <div class='info_msg info_r'>
                <div>SVIP平均赚取佣金</div>                
              </div>
            </div>
          </div>
          <div class="card_f">
            <p>{{iDCard}}</p>
          </div>
        </div>
      </div>
    </header>
    <div class="" v-if="identityCode <= 0 || identityCode == undefined" v-cloak>
      <normal></normal>
    </div>
    <div class="" v-else-if="identityCode === 1" v-cloak>
      <vip></vip>
    </div>
    <div class="" v-else-if="identityCode === 2" v-cloak>
      <svip></svip>
    </div>
    <div class="" v-else v-cloak>
      <tubu></tubu>
    </div>

    <div v-transfer-dom>
      <x-dialog v-model="showHideOnBlur" class="dialog-toast" hide-on-blur>
        <div class="dialog-box">
          <div class="dialog-head">
            <img class="img-responsive" src="../../assets/images/tanchu_left.png" alt="">
            <p class="dialog-title">SVIP 赚钱明细</p>
            <img class="img-responsive" src="../../assets/images/tanchu_right.png" alt="">
          </div>
          <div class="dialog-body">
            <div class="dialog-h">
              <span>根据智淘过去一年的分析，开通SVIP预计可为你多赚 <span class="gold_col">8568</span> 元，明细如下：</span>
            </div>
            <ul class="dialog-list">
              <li class="clearfix">
                <router-link to="/power">可优惠（SVIP 专享返佣）<span>￥516></span></router-link>
              </li>
              <li class="clearfix">
                <router-link to="/power">可享推荐奖励（二级奖励）<span>￥7000></span></router-link>
              </li>
              <li class="clearfix">
                <router-link to="/power">可享客户返佣（二级返佣）<span>￥1052></span></router-link>
              </li>
              <li class="clearfix">
                <div>加入SVIP预计为你多赚<span>￥8783.60</span></div>
              </li>
            </ul>
          </div>
          <p></p>
          <div class="dialog-footer">
            <router-link to="/register?type=svip" v-if="identityCode < 1 || identityCode == undefined">
              <img class="img-responsive" src="../../assets/images/btn_jr.png" alt="">
            </router-link>
            <router-link to="/buysvip" v-else>
              <img class="img-responsive" src="../../assets/images/btn_jr.png" alt="">
            </router-link>
          </div>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Normal from './normal'
import Vip from './vip'
import Svip from './svip'
import Tubu from './tubu'
import { XDialog,TransferDomDirective as TransferDom,Box} from 'vux'
import {svipcard,twodays,usersnum,statisticsmoney,statisticcustomer} from 'api'
export default {
  directives: {
    TransferDom
  },
  components: {
    XDialog,
    Normal,
    Vip,
    Svip,
    Tubu,
    Box
  },
  computed:{
      ...mapGetters(['userInfo','identityCode'])
  },
  data () {
    return {
      showHideOnBlur: false,
      headInfo:{},
      iDCard: 0
    }
  },
  methods: {
    showInfoToast(e){
      this.showHideOnBlur = true
    },
    getCard(data){
      svipcard(data).then(res =>{
        if(res.code === 0){
          this.headInfo = res.result.data
          let IDnumbers = res.result.data.number  
          var iDCard = IDnumbers.replace(/\s/g, '').replace(/(.{4})/g, "$1 ");
          this.iDCard = iDCard
        }
      })
    }
  },
  mounted () {
    let that = this
    that.$nextTick(() =>{
      let data = {uid:that.userInfo.uid}
      that.getCard(data)
    })
  }
}
</script>
<style scoped lang="less">
@import '~vux/src/styles/close';
.page-content{
  header{
    height: 12rem;
    background: #ffffff url("../../assets/images/svipbg.png");
    background-size: 100% 100%;
    position: relative;
    .img{
      position: absolute;
      right: 0;
      &.img_idot{
        background: url("../../assets/images/yuan.png");
        background-size: 100% 100%;
        width: 1.2rem;
        height: 1.2rem;
        right: 20%;
        top: 1.5rem;
        z-index: 2;
      }
      &.img_glue{
        background: url("../../assets/images/buyuan.png");
        background-size: 100% 100%;
        width:70px;
        height:50px;
        right: 0;
        top: 2rem;
        z-index: 2;
      }
    }
    .head_card{
      width: 85%;
      height: 12rem;
      background: #444444;
      border-radius: 1rem;
      margin: 0 auto;
      position: absolute;
      top: 2rem;
      left: 0;
      right: 0;
      .card{
        position:relative;
        height:inherit;
        padding:1rem .8rem 0;
        display:flex;
        flex-direction:column;
        .card_t{
          display: flex;
          height: 3.5rem;
          .user_avatar{
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 10px;
            display: block;
          }
          .card_t_r{
            margin-left: 1rem;
            display: flex;
            width: 100%;
            flex-direction: column;
            line-height: 1.5rem;
            flex: 1;
            .card_name{
              flex: 1;
              color:#fff;
              font-weight:600;
              font-size:1rem;
              display:flex;
              align-items:center;
              line-height: inherit;
              img{
                width: 1.5rem;
                margin-left: 10px;
              }
              .tubu-icon{
                width: 2.5rem
              }
            }
            
            .f18{
              font-size:1.1rem;
              font-weight:normal;
              // margin-top:10px;
            }
            .card_date{
              color:#fff;
              font-size:.9rem;
              line-height: inherit;
            }
          }
        }
        .card_c{
          flex:1;
          position:relative;
          display:flex;
          flex-direction:column;
        }
        .inner_nums,.inner_info{
            flex: .3;
            display: flex;
            justify-content: space-around;
            font-size: .8rem;
            color: #fff;
            position: relative;
            width: 75%;
            line-height: 1.6rem;
        }
        .inner_nums .gold_col{
            position: absolute;
            left: 0;
            background: #fffcfd;
            border-radius: 5px;
            color: #ecae5b;
            padding: 0 5px;
            margin-top: 10px;
            line-height: 1.5rem;
        }
        .total_money{
            position:absolute;
            right:0;
            color:#fff;
            font-size:.8rem;
            top:-4px;
            width:25%; 
            text-align:right;
        }
        .inner_info{
          width: 100%;
          text-align: left;
          div{
            flex: 1;
          }
          .info_r{
            text-align: right
          }
        }
        .card_f{
          color:#f2d48e;
          position:absolute;
          line-height:2rem;
          bottom:1rem;
          font-size:1rem;
        }
        .inner_white{
          flex:1;
          color:#fff;
          font-size:.8rem;
          line-height:2rem;
          position:relative;
          margin-top:3rem;
          border-top:1px solid #737373;
        }
        .check-info{
          position: absolute;
          right: 0;
          top: 2rem;
        }
      }
    }
  }
}
.content{
  box-sizing: border-box;
  background: #fff
}
.dialog-toast {
  .weui-dialog{
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-head{
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 0 auto;
    align-items: center;
    .dialog-title {
      line-height: 4rem;
      color: #333;
      font-weight: 600
    }
    img{
      height: 3px;
    }
  }
  .dialog-body{
    width: 90%;
    margin: 0 auto;
    .dialog-h{
      font-size: .8rem;
      border-bottom: 1px solid #EAEAEA;
      text-align: left;
      line-height: 20px;
      padding-bottom: 10px  
    }
    .dialog-list{
      line-height:3rem;
      border-bottom:1px solid #EAEAEA;
      li{
        font-size: .8rem;
        text-align: left;
        a{
          color: #333
        }
        span{
          float: right;
        }
        &:last-child span{
          font-weight: 600
        }
      }
    }
  }
  .dialog-footer{
    margin: 20px auto;
    img{
      width: 80%;
      margin: 0 auto;
    }
  }
}
</style>