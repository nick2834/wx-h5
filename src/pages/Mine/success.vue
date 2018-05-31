<template>
	<div class="page-content">
    	<div data-v-ee2b5d40="" class="weui-msg">
        <div class="weui-msg__icon-area">
          <i v-if="identityCode < 2" class="weui-icon_msg weui-icon-success"></i>
          <img v-else style="width:6rem" src="../../assets/images/icon_clz@3x.png" alt="">
        </div> 
        <div class="weui-msg__text-area" v-if="identityCode <= 2">
            <h2 class="weui-msg__title">提现成功！</h2>
            <p class="weui-msg__desc">提现后一般实时到账，具体到账时间以微信处理时间为准</p> 
            <p class="weui-msg__desc status_msg">申请成功后请至微信零钱账户查看</p>
        </div>
        <div class="weui-msg__text-area" v-else>
            <h2 class="weui-msg__title">处理中</h2>
            <p class="weui-msg__desc">渠道用户提现订单每周二后台统一审核处理，请耐心等候</p> 
            <p class="weui-msg__desc status_msg">申请成功后请至微信零钱账户查看</p>
        </div>
        <div class="weui-msg__extra-area">
            <div class="weui-footer">
                <div class="weui-footer__text footer">
                  <router-link to="/questions" hover-class='none' class='que'>常见问题</router-link>
                  <span class='line'>|</span>
                  <router-link to="/record" hover-class='none' class='rec'>提现记录</router-link> 
                </div>
            </div>
        </div>
  	</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import { Msg, Divider, XButton } from 'vux'	
export default {
  components: {
    Msg,
    Divider,
    XButton
  },
  computed:{
    ...mapGetters(['identityCode','userInfo','token'])
  },
  methods: {

  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.page-content{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
}	
.weui-icon-success{
  color: #317df4
}
.weui-msg__title{
  color: #317ef3;
  font-size: 1.2rem;
  line-height: 3rem;
}
.weui-msg__desc{
  padding: 0 3rem;
  color: #333;
  line-height: 1.5rem;
}
.status_msg{
  text-align: center;
  color: #757575;
  margin-top: 1rem;
  font-size: .9rem;
}
</style>