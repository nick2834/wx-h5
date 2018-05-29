<template>
    <div class="page-content">
        <div class="fredombox">
            <free-dom :title="'SVIP 6大特权:'"></free-dom>
        </div>
        <div class="open">
            <div class="open-box">
                <div class="open-title">
                    <img class="img-responsive" width="14" src="../../assets/images/squera.png" alt="" style="display: block; margin-right: 5px;">
                    <span>开通服务</span>
                </div>
                <div class="open-infomation">
                    <div class="boxes">
                        <span class="inner inner-l">
                            <span> 全年 SVIP </span>
                            <span> 限时赠送12个月,共24个月 SVIP </span>
                        </span>
                        <span class="inner inner-r">
                            <span class="tehui">特惠价<span class="gold_col">￥</span><strong class="gold_col">298</strong></span>
                            <span class="outline">￥398</span>
                        </span>
                    </div>
                </div>
                <router-link class="agreement" to="/">SVIP 服务协议 <i class="iconfont icon-information"></i></x-icon></router-link>
            </div>
        </div>
        <div class="open check">
            <div class="open-box">
                <div class="open-title">
                    <img class="img-responsive" width="14" src="../../assets/images/squera.png" alt="" style="display: block; margin-right: 5px;">
                    <span>支付方式</span>
                </div>
            </div>
            <van-radio-group v-model="radio">
                <van-cell-group>
                    <van-cell  clickable @click="radio = '1'">
                        <template slot="title">
                            <span class="van-cell-text"><img class="img-responsive" style="display: block; margin-right: 5px;" src="../../assets/images/icon_wxzf.png" alt="" width="16">微信支付</span>
                        </template>
                        <van-radio name="1" />
                    </van-cell>
                    <van-cell clickable @click="radio = '2'">
                        <template slot="title">
                            <span class="van-cell-text"><img class="img-responsive" style="display: block; margin-right: 5px;" src="../../assets/images/icon_zhitao.png" alt="" width="16">智淘码</span>
                        </template>
                        <van-radio name="2" />
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
        </div>
        <div class="van-submit-bar">
            <div class="van-submit-bar__bar" v-if="radio == '1'">
                <div class="van-submit-bar__price">
                    <span>总计：</span>
                    <span class="gold_col">¥298</span>
                    <span class="">已优惠100元</span>
                </div>
                <button class="van-button van-button--danger van-button--normal" @click="onSubmitPay"><!---->
                    <span class="van-button__text">确认支付</span>
                </button>
            </div>
            <div class="van-submit-bar__bar" v-else>
                <div class="van-submit-bar__price">
                   <van-field v-model="value" placeholder="请输入你的智淘码" />
                </div>
                <button class="van-button van-button--danger van-button--normal" @click="onSubmitCodepay"><!---->
                    <span class="van-button__text">确认</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import FreeDom from 'components/freedom'
import {mapGetters} from 'vuex'
import { RadioGroup, Radio, Cell, CellGroup,SubmitBar,Field  } from 'vant'
import Storage from 'good-storage'
import {pay,codepay} from 'api'
import wx from 'weixin-js-sdk'
export default {
    components: {
        FreeDom,
        'van-radio-group':RadioGroup,
        'van-radio':Radio,
        'van-cell-group': CellGroup,
        'van-cell':Cell,
        'van-submit-bar':SubmitBar,
        'van-field': Field
    },
    data () {
        return {
            radio: '1',
            value: ''
        }
    },
    computed:{
        ...mapGetters(['userInfo','identityCode','token'])
    },
    methods: {
        getPay(data){
            let that = this
            pay(data).then(res =>{
                
                if(res.code === 0){
                    var data = res.jsapi
                    let appId = data.appId;
                    let timestamp = data.timeStamp;
                    let nonceStr = data.nonceStr;
                    let signature = data.signature;
                    let packages = data.package;
                    let paySign = data.paySign;
                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        url: 'http://wx.wxrwin.com/#/buysvip',
                        appId: appId, // 必填，公众号的唯一标识
                        timestamp: timestamp, // 必填，生成签名的时间戳
                        nonceStr: nonceStr, // 必填，生成签名的随机串
                        signature: signature, // 必填，签名，见附录1
                        jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });
                    wx.ready(function(){
                        wx.chooseWXPay({
                            timestamp: timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                            nonceStr: nonceStr, // 支付签名随机串，不长于 32 位
                            package: packages, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                            signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                            paySign: paySign, // 支付签名
                            success: function(res) {
                                that.$store.commit('SET_IDENTITYCODE',2)
                                let type = this.$route.query.type
                                if(type === 'details'){
                                    that.$router.replace(Storage.session.get('detailPath'))
                                }else{
                                    that.$router.replace('/svip')
                                }
                            },
                            fail:function(res){
                                console.log(res)
                            }
                        });
                    });
                    wx.error(function(res) {
                        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                        /*alert("config信息验证失败");*/
                        console.log(res)
                    });
                }
            })
        },
        getCodepay(data){
            codepay(data).then(res =>{
                console.log(res)
            })
        },
        onSubmitPay(e){
            let data = {
                token: this.token,
                appid: 'wx87b3acb00474dd24',
                money: '0.01'
            }
            this.getPay(data)
        },
        onSubmitCodepay(e){
            if(this.value == ''){
                this.$Toast('请输入正确的智淘码')
                return
            }
            let data = { code: this.value, uid: this.userInfo.uid,token: this.token}
            this.getCodepay(data)
        }
    },
    mounted () {
        let type = this.$route.query.type
        console.log(Storage.session.get('detailPath'))
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
    overflow-y: auto;
}
.fredombox{
    border-bottom: 10px solid #f3f3f3;
}
.open{
    background:#fff;
    border-bottom: 10px solid #f3f3f3;
    .open-box{
        box-sizing: border-box
    }
    .open-title{
        padding: 1rem;
        position: relative;
        display: flex;
        align-items: center;
        span{
            font-size: .8rem;
            font-weight: 600;
            color: #333;
        }
    }
    .open-infomation{
        padding: 0 1rem; 
        .boxes{
            height:4rem;
            border:1px #E1B265 solid;
            background:#FEFAEF;
            border-radius:10px;
            margin:0 auto;
            line-height:3rem;
            display: flex;
            justify-content: space-around;
        }
        .inner-l{
            flex: .6;
            display: flex;
            flex-direction: column;
            line-height: 2rem;
            color: #333;
            margin-left: 1rem;
            span:first-child{
                font-size: 1.2rem;
            }
            span:last-child{
                font-size: .6rem;
                color:#6D6C68;
            }
        }
        .inner-r{
            position: relative;
            flex: .4;
            .tehui{
                line-height: 3rem;
                display: block;
                text-align: right;
                margin-right: 1rem;
                strong{
                    font-weight: 600;
                    font-size: 1.5rem;
                }
            }
            .outline{
                position: absolute;
                right: 1rem;
                bottom: .8rem;
                line-height: 1;
                text-decoration: line-through;
                color: #333;
                font-size: .6rem;
            }
        }
    }
    .agreement{
        line-height: 3rem;
        text-align: right;
        font-size: .8rem;
        padding: 0 1rem;
        display: flex;
        justify-content: flex-end;
        .iconfont{
            margin-left: 5px;
        }
    }
}
.check{
    .van-cell-text{
        display: flex;
        align-items: center;
        img{
            width: 1.2rem;
        }
    }
    
}
.van-button--danger{
    background-color:#EEB556;
    border: 1px solid #EEB556;
}
.van-submit-bar__price{
    padding-left: 12px;
    text-align: left;
    .gold_col{
        font-weight: 600
    }
}
</style>
