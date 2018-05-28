<template>
    <section class="page-content">
      <header>
        <div class="head">
          <img src="../../assets/images/default.png" alt="">
          <div class="head_info">
            <span class="username">少年锦时</span>
            <span class="infomsg">免费升级 ></span>
          </div>
          <router-link class="usermoney" to="/acount">
            <span class="money">0.00</span>
            <span class="money_info">可用佣金（元） ></span>
          </router-link>
        </div>
      </header>
      <section class="money_box">
        <router-link tag="span" class="compute" to="/income">
          <span>0.00</span>
          <span>今日结算预估佣金(元）</span>
        </router-link>
        <router-link tag="span" class="compute" to="/income">
          <span>0.00</span>
          <span>今日成交预估佣金(元）</span>
        </router-link>
        <span class="line"></span>
      </section>
      <div class="footer">
        <group>
        <cell title="我的客户" :link="{path:'/custom'}">
          <img slot="icon" width="16" style="display:block;margin-right:5px;" src="../../../static/images/btn_kh.png">
        </cell>
        <cell title="我的二维码" :link="{path:'/code'}">
          <img slot="icon" width="16" style="display:block;margin-right:5px;" src="../../../static/images/btn_ewm.png">
        </cell>
        <cell title="收入明细" :link="{path:'/income'}">
          <img slot="icon" width="16" style="display:block;margin-right:5px;" src="../../../static/images/btn_srmx.png">
        </cell>
        <cell title="联系客服" :link="{path:'/'}">
          <img slot="icon" width="16" style="display:block;margin-right:5px;" src="../../../static/images/btn_kf.png">
        </cell>
        <cell title="常见问题" :link="{path:'/questions'}">
          <img slot="icon" width="16" style="display:block;margin-right:5px;" src="../../../static/images/btn_cjwt.png">
        </cell>
        </group>
      </div>
    </section>
</template>
<script>
import {mapGetters} from 'vuex'
import { Icon,XSwitch,Group,Cell} from 'vux'
export default({
  data () {
    return {
      
    }
  },
  computed:{
      ...mapGetters(['userInfo','identityCode'])
  },
  components: {
    Icon,
    XSwitch,
    Group,
    Cell
  },
  methods: {
    
  },
  mounted () {
    
  }
})
</script>
<style lang="less" scoped>
.page-content{
  background: #fff;
}
.weui-cell{
  padding: 1.2rem 1rem !important;
  font-size: 1rem
}
header{
  width: 100%;
  height: 6rem;
  background:#317EF3;
  border-radius: 0 0 30% 30%;
  position:relative;
  .head{
    padding: 1rem 1rem 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    box-sizing: border-box;
    img{
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
    }
    .head_info{
      flex: 1;
      display: flex;
      flex-direction: column;
      position: relative;
      font-size: 1rem;
      line-height: 1;
      margin-left: 1rem;
      color: #fff;
      // padding-right: 30%;
      .username{
        flex: .5;
        display: flex;
        align-items: center;
      }
      .infomsg{
        position:absolute;
        background-size:100% 100%;
        line-height:1.2rem;
        font-size:.6rem;
        text-align:center;
        color:#EECE96;
        background:linear-gradient(to right, #3b3c41, #202122);
        border-radius:10px;
        left:0;
        bottom:0;
        padding:0 10px;
      }
    }
    .usermoney{
      position: absolute;
      display:flex;
      flex-direction:column;
      right:1rem;
      height:3.5rem;
      color: #fff;
      text-align:right;
      .money{
        
        font-size:2rem;
        color:#fff;
        flex: .7;
      }
      .money_info{
        font-size:.8rem;
        color:#fff;
        flex: .3;
      }
    }
  }
}
.money_box{
  margin:0 auto;
  padding: 1rem;
  border-bottom: 10px solid #f3f3f3;
  display: flex;
  justify-content: space-around;
  position: relative;
  height: 3rem;
  .compute{
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    span{
      &:first-child{
        flex: .65;
        color: #317EF3;
        line-height: 2rem;
        font-size: 1.2rem
      }
      &:last-child{
        flex: .35;
        line-height: 1rem;
        font-size: .8rem
      }
    }
  }
  .line{
    position: absolute;
    left: 50%;
    width: 1px;
    background: #EAEAEA;
    height: 2rem;
    top: 1.5rem;
  }
}
</style>

