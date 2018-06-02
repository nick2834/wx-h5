<template>
    <div class="page-content" @touchstart.native.stop="show = true">
        <div class='header'>
            <div class='title'>可用佣金（元）</div>
            <div class='money'>{{userInfo.money}}</div>
        </div>
        <group>
            <cell :title="'收款账户'">
                <div class="userbox" v-cloak>
                    <img class="user_avatar img-responsive" :src="userInfo.avatar" alt="">
                    <span class="user_name">{{userInfo.nickname}}</span>
                </div>
            </cell>
            <cell :title="'收款方式'" :value="'微信零钱'"></cell>
            <cell :title="'姓名'">
                <div>
                    <input @blur="onBlur" class="nickname" name="nickname" type="text"  v-model="form.nickname" placeholder="请输入提现用户姓名">
                </div>
            </cell>
            <cell :title="'提取金额'">
                <div>
                    <input class="nickname" type="number" v-model="form.money" name="money" placeholder="请输入提现金额" @blur='blur'>
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
import {mapGetters} from 'vuex'
import { Cell,Group,Alert  } from 'vux'
import {getUserInfo,extract} from 'api'
const NAMEREG = /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/
 var moneyreg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
export default {
    components: {
        Cell,
        Group,
        Alert
    },
    computed:{
      ...mapGetters(['fullname','userInfo','token'])
    },
    data () {
        return {
            show:false,
            showToast: false,
            form:{
                nickname: '',
                money: ''
            },
            errVal: '请输入正确的中文姓名'
        }
    },
    methods: {
        blur(e){
            if(!moneyreg.test(this.form.money)){
                this.errVal = '请输入正确的金额'
                this.showToast = true
                return
            }
        },
        getUserInfo(data){
            getUserInfo(data).then(res =>{
                if(res.code === 0){
                    this.$store.commit('SET_USER',res.result.data)
                    this.$store.commit('SET_FULLNAME',res.result.data.fullname)
                    this.form.nickname = res.result.data.fullname
                }
            })
        },
        getExtract(data){
            let that = this
            extract(data).then(res =>{
                if(res.code === 0){
                    let data = {token:that.token}
                    that.getUserInfo(data)
                    that.$router.push('/success')
                }else{
                    that.errVal = res.msg
                    that.showToast = true
                }
            })
        },
        onBlur(e){
            let that = this
            let nickname = that.form.nickname
            console.log(that.form)
        },
        handleSubmit(e){
            let that = this
            if(that.form.nickname === ''){
                that.showToast = true
                return
            }
            if(that.form.money < 1){
                that.errVal = '提现金额需≥1元'
                that.showToast = true
                return
            }
            if(that.form.money === ''|| !moneyreg.test(that.form.money)){
                that.errVal = '请输入正确的金额'
                that.showToast = true
                return
            }
            let data = {
                token: that.token,
                money:that.form.money,
                fullname: that.form.nickname
            }
            that.getExtract(data)
        }
    },
    mounted () {
        let that = this
        that.$nextTick(() =>{
            let data = {token:that.token}
            that.getUserInfo(data)
        })
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
            text-align: right;
            background: #ffffff;
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
