<template>
    <div class="page-content">
        <div class='header'>
            <div class='title'>可用佣金（元）</div>
            <div class='money'>0.00</div>
        </div>
        <group>
            <cell :title="'收款账户'">
                <div class="userbox">
                    <img class="user_avatar img-responsive" src="https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epHXnkpD5GImsQkiblbWZCJa3Fo9eV96upBRPeuRGEG899VHAKC32l3rul3HoMkwBK7Dy7obxOdMEQ/132" alt="">
                    <span class="user_name">Nickname</span>
                </div>
            </cell>
            <cell :title="'收款方式'" :value="'微信零钱'"></cell>
            <cell :title="'姓名'">
                <div>
                    <input @blur="onBlur" class="nickname" name="nickname" type="text" v-model="form.nickname" placeholder="请输入提现用户姓名">
                </div>
            </cell>
            <cell :title="'提取金额'">
                <div>
                    <input class="nickname" type="number" v-model="form.money" name="money" placeholder="请输入提现金额">
                </div>
            </cell>
        </group>
        <div class="weui-cells__tips">由于微信零钱限制，提现金额不能低于1元，每天最多可用提现3次。</div>
        <div class="weui-btn-area">
            <button class="weui-btn" @click="handleSubmit">确认提现</button>
        </div>
        <alert v-model="showToast" :title="'温馨提示'" :content="errVal"></alert>
    </div>    
</template>
<script>
import { Cell,Group,Alert  } from 'vux'
const NAMEREG = /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/
export default {
    components: {
        Cell,
        Group,
        Alert 
    },
    data () {
        return {
            showToast: false,
            form:{
                nickname: '',
                money: ''
            },
            errVal: '请输入正确的中文姓名'
        }
    },
    methods: {
        onBlur(e){
            let that = this
            let nickname = that.form.nickname
            console.log(that.form)
        },
        handleSubmit(e){
            let that = this
            if(that.form.nickname === '' || that.form.money === ''){
                that.showToast = true
                return
            }
            console.log(this.form)
        }
    },
    mounted () {
        
    }
}
</script>
<style lang="less" scoped>
.weui-cell{
    font-size: .9rem;
    color: #333333;
    .weui-cell__ft{
        color: #333;
        input{
            text-align: right
        }
    } 
}
.header{
    height: 7rem;
    background: #317df4;
    color: #fff;
    padding: 1rem;
    .title{
        margin-top: 1rem;
        font-size: .8rem;
        line-height: 1.8rem;
    }
    .money{
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 3rem;
    }
}
.userbox{
    overflow: hidden;
    width: 10rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.user_avatar{
    width: 1.5rem;
    vertical-align:middle;
    margin-right: .5rem;
    border-radius: 50%;
    display: inline;
}
.user_name{
    max-width: 8rem;
    color: #acacac;
    font-size: .8rem;
    white-space:nowrap; 
    text-overflow:ellipsis; 
    -o-text-overflow:ellipsis; 
    overflow: hidden;
}
.weui-cells__tips{
    font-size: .8rem;
    line-height: 1.6rem
}
.weui-btn-area {
    margin:1.17647059em 15px .3em;
    button{
        background: #317df4;
        color: #fff;
        line-height: 3rem;
        width: 100%;
        border-radius: 6px;
        border: none
    }
}

</style>
