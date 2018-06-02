<template>
	<div class="page-content">
      <div data-v-2c8d64fe="" class="weui-msg">
        <div class="weui-msg__icon-area">
          <i v-if="identityCode <= 2" class="weui-icon_msg weui-icon-success"></i>
          <img v-else style="width:6rem;" src="../../assets/images/icon_clz@3x.png" alt="">
          <!-- <icon v-else type="waiting" is-msg></icon> -->
        </div> 
        <div class="weui-msg__text-area" v-if="identityCode <= 2">
          <h2 class="weui-msg__title">提现成功！</h2> 
          <p class="weui-msg__desc">提现后一般实时到账，具体到账时间以微信处理时间为准</p> 
          <p class="weui-msg__desc desc_bottom">申请成功后请至微信零钱账户查看</p>
        </div> 
        <div class="weui-msg__text-area" v-else>
          <h2 class="weui-msg__title">处理中</h2> 
          <p class="weui-msg__desc">渠道用户提现订单每周二后台统一审核处理，请耐心等候</p> 
          <p class="weui-msg__desc desc_bottom">审核成功后请至微信零钱账户查看</p>
        </div> 
      </div>
      <div class="link-footer">
        <div class="weui-footer">
            <div class="weui-footer__text footer">
              <router-link to="/questions" hover-class='none' class='que'>常见问题</router-link>
              <span class='line'>|</span>
              <router-link to="/record" hover-class='none' class='rec'>提现记录</router-link> 
            </div>
        </div>
      </div>
  	</div>
</template>

<script>
import { Msg, Divider, XButton, Icon } from 'vux'	
import {getUserInfo} from 'api'
import {mapGetters} from 'vuex'
export default {
  components: {
    Msg,
    Icon,
    Divider,
    XButton
  },
  computed:{
    ...mapGetters(['identityCode','userInfo','token'])
  },  
  methods: {
    getUserInfo(data){
        getUserInfo(data).then(res =>{
            if(res.code === 0){
                this.$store.commit('SET_USER',res.result.data)
            }
        })
    },
  },
  data () {
    return {
      
    }
  },
  mounted(){
    let data = {token:this.token}
    this.getUserInfo(data)
  }
}
</script>
<style lang="less" scoped>
.page-content{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:#ffffff;
}
.weui-icon-success{
  color: #317df4
}
.weui-msg__title{
  color:#317ef3;
  font-size:1.2rem;
  line-height:3rem;
  font-weight: 400
}
.weui-msg__desc{
  line-height: 2;
  color:#333;
  padding: 0 2rem;
}
.desc_bottom{
  color:#757575;
  margin-top: 1rem;
}
.link-footer{
  position:absolute;
  bottom: 44px;
  left: 0;
  right: 0; 
}
.weui-footer {
  color:#999;
  font-size:.9rem;
  text-align:center;
}
.footer {
  width:60%;
  display:flex;
  color:#777;
  justify-content:space-between;
  margin:0 auto;
  position:relative;
  a{
    width:50%;
    font-weight:100;
    font-size:.9rem;
    box-sizing:border-box;
  }
  .que{
    padding:15px;
    text-align:right;
  }
  .rec{
    padding:15px;
    text-align:left;
  }
  .line{
    width:1px;
    height:1rem;
    position:absolute;
    left:50%;
    top:50%;
    transform:translateY(-50%);
  }
}
.weui-footer__text {
  padding:0 .34em;
  font-size:.8rem;
}

</style>