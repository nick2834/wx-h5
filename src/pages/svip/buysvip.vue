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
            <div class="van-submit-bar__bar">
                <div class="van-submit-bar__price" v-if="radio == '1'">
                    <span>总计：</span>
                    <span class="gold_col">¥298</span>
                    <span class="">已优惠100元</span>
                </div>
                <div class="van-submit-bar__price" v-else>
                   <van-field v-model="value" placeholder="请输入你的智淘码" />
                </div>
                <button class="van-button van-button--danger van-button--normal" @click="onSubmit"><!---->
                    <span class="van-button__text">提交订单</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import FreeDom from 'components/freedom'
import { RadioGroup, Radio, Cell, CellGroup,SubmitBar,Field  } from 'vant'
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
    methods: {
        onSubmit(e){
            console.log(e)
        }
    },
    mounted () {
        
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
