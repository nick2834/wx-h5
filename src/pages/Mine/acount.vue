<template>
    <div class="page-content">
        <div class='head'>
            <div class='money_box'>
                <div class='nums'>
                    <p>可用佣金（元）</p>
                    <p class='mymoney'>{{account.money}}</p>
                </div>
            </div>
            <div class='money_btn'>
                <router-link tag="div"  to="/withdraw" class='shenq'>申请提现</router-link>
                <router-link tag="div" to="/record" class='record'>提现记录</router-link>
            </div>
        </div>
        <div class='content'>
            <div class='up'>
                <div class='con_box up_l'>
                    <p class='cont_title'>累计佣金（元）</p>
                    <p class='con_money'>{{account.totalmoney}}</p>
                </div>
                <div class='con_box up_r'>
                    <p class='cont_title'>待确认佣金（元）</p>
                    <p class='con_money'>{{account.wait_money}}</p>
                </div>
            </div>
            <div class='down'>
                <div class='con_box down_l'>
                    <p class='cont_title'>提现中（元）</p>
                    <p class='con_money'>{{account.underway_money}}</p>
                </div>
                <div class='con_box down_r'>
                    <p class='cont_title'>已提现（元）</p>
                    <p class='con_money'>{{account.complete_money}}</p>
                </div>
            </div>
        </div>
        <div class='ques_list'>
            <router-link class='list list1' to="/myacount">
                <div class='list_title'>
                    <i class='iconfont icon-zhanghu'><span>提现账户</span></i>
                </div>
                <i class='iconfont icon-previewright arrow' style='right:30rpx'></i>
            </router-link>
            <router-link  class='list list2' to='/questions'>
                <div class='list_title'>
                    <i class='iconfont icon-question'><span>常见问题</span></i>
                </div>
                <i class='iconfont icon-previewright arrow' style='right:30rpx'></i>
            </router-link>
        </div>
    </div>
</template>
<script>
import {account} from 'api'
import {mapGetters} from 'vuex'
export default {
    data () {
        return {
            account:{}
        }
    },
    computed:{
        ...mapGetters(['userInfo','identityCode','token'])
    },
    methods: {
        getAccount(data){
            account(data).then(res =>{
                if(res.code === 0){
                    this.account = res.result.data
                }
            })
        }
    },
    mounted () {
        let that = this
        that.$nextTick(() =>{
            let data = {
                token:that.token,
                uid: that.userInfo.uid
            }
            that.getAccount(data)
        })
    }
}
</script>
<style lang="less" scoped>
.head{
    background: #317EF3;
    height: 12rem;
    width: 100%;
    .money_box{
        height: 9rem;
        position: relative;
        .nums{
            text-align: center;
            position: absolute;
            color: #fff;
            top: 3rem;
            left: 50%;
            transform: translateX(-50%);
            p{
                font-size: 1rem;
            }
            .mymoney{
                font-size: 2rem !important;
                line-height: 4rem;
            }
        }
    }
    .money_btn{
        line-height: 2rem;
        color: #fff;
        display: flex;
        justify-content: space-between;
        text-align: center;
        div{
            flex: .5;
            font-size: 1rem;
            font-weight: 200;
            box-sizing: border-box;
            &:first-child{
                  border-right: 1px solid #2d77e2;
            }
        }
    }
}
.content{
    margin-top: .8rem;
    background: #fff;
    height: 10rem;
    padding:  0 1rem;
    display: flex;
    flex-direction: column;
    .up,.down{
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: space-around;
        box-sizing: border-box;
        padding: .8rem 0; 
    }
    .up{
        border-bottom: 1px solid #eaeaea;
        
    }
    .con_box{
        flex: 0.5;
        &:nth-child(2n+1){
            border-right:1px solid #eaeaea 
        }
        &:nth-child(2n){
            margin-left: 1rem;
        }
        .cont_title{
            color: #707070;
            font-size: 1rem;
        }
        .con_money{
            color: #317EF3;
            font-size: 1.5rem;
            line-height: 3rem;
        }
    }
}
.ques_list{
    margin-top: .8rem;
    background: #fff;
    /* height: 174rpx; */
    display: flex;
    flex-direction: column;
    .list{
        width: 100%;
        height: 3rem;
        box-sizing: border-box;
        line-height: 3rem;
        padding:0 1rem;
        position: relative;
        color: #333;
        &:first-child{
            border-bottom: 1px solid #eaeaea
        }
        .list_title{
            position: relative;
            box-sizing: border-box;
            font-size: 1rem;
            span{
                font-size: 1rem;
                line-height: 3rem;
                padding-left: .8rem;
                color: #333
            }
        }
        .arrow{
            position: absolute;
            right: 1rem;
            top: 0;
            line-height: 3rem;
            font-size: 1.5rem;
            color: #999
        }
    }
}
</style>
