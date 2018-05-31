<template>
    <div class="register-box">
        <div class="indentity-code">
            <input type="text" name="phone" placeholder="请输入手机号" v-model="form.phone" @blur="onBlur">
            <button @click="getCode">
                <countdown v-model="time" :start="start" @on-finish="finish"></countdown>{{btnval}}
            </button>
        </div>
        <input type="text" name="" id="" placeholder="请输入验证码" v-model="form.identicode">
        <div class="agreement">
            继续代表你已经同意
            <router-link to="/regist">智淘助手用户注册协议</router-link>
        </div>
        <x-button class="submitBtn" @click.native="handleSubmit">注册</x-button>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {Countdown,XButton,Toast} from 'vux'
import {Register, IdentityCode,getUserInfo} from 'api'
import Storage from 'good-storage'
const phoneReg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
export default {
    data () {
        return {
            time: null,
            value: '',
            start: false,
            form:{
                phone: '',
                identicode: ''
            },
            showToast: false,
            btnval: '发送验证码',
        }
    },
    computed:{
        ...mapGetters(['userInfo','identityCode','token'])
    },
    components: {
        Countdown,
        XButton,
        Toast
    },
    methods: {
        getUserInfo(data){
            getUserInfo(data).then(res =>{
                console.log(res)
                if(res.code === 0){
                    this.$store.commit('SET_USER',res.result.data)
                    this.$store.commit('SET_IDENTITYCODE',res.result.data.type)
                }
            })
        },
        getCode(e){   
            if(this.start || this.form.phone == '' || !phoneReg.test(this.form.phone)){
                this.$Toast('请输入正确手机号！')
                return
            }
            this.start = true
            this.time = 60
            this.btnval = 's后重试'
            let data = {
                phone: this.form.phone,
                token: this.token
            }
            IdentityCode(data).then(res =>{
                console.log(res)
                if(res.code === 0){
                    this.$Toast(res.msg)
                }else{
                    this.$Toast(res.msg)
                }
            })
        },
        onBlur(e){
            // console.log(this.form)
        },
        finish (index) {
            this.start = false
            this.time = null
            this.btnval = '发送验证码'
        },
        handleSubmit(e){ 
            let that = this
            if(this.form.phone == '' || this.form.identicode == '' || !phoneReg.test(this.form.phone)){
                return
            }
            let data = {
                phone: this.form.phone,
                code: this.form.identicode,
                token: this.token
            }
            Register(data).then(res =>{
                console.log(res)
                if(res.code === 0){
                    let datas = {token: that.token}
                    that.getUserInfo(datas)
                    that.$Toast(res.msg)
                    let type = that.$route.query.type
                    if (type === 'zhuce') {
                        that.$router.replace('/mine')
                    } else if(type === 'details'){
                        that.$router.replace(Storage.session.get('detailPath'))
                    } else {
                        that.$router.replace('/buysvip')
                    } 
                    // this.$router.replace('/mine')
                }else{
                    that.$Toast(res.msg)
                }
            })
        }
    },
    mounted () {
        
    }
}
</script>
<style lang="less" scoped>
.register-box{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffffff;
    display:block;
    padding:5rem 1rem 0;
    input{
        width: 100%;
        height: 3rem;
        background: #f6f6f6;
        border-radius: 5px;
        margin-bottom: 25px;
        padding-left: 10px;
        box-sizing: border-box
    }
    input[name='phone']{
        padding-right: 95px;
        
    }
    .indentity-code{
        position: relative;
        button{
            position: absolute;
            right: 10px;
            top: .5rem;
            // width: 85px;
            background: #ffffff;
            font-size: .8rem;
            border: 1px solid #eaeaea;
            height: 2rem;
        }
    }
    .agreement{
        font-size: .8rem;
        color: #888888;
        a{
            color: #317df4;
            text-decoration: underline
        }
    }
    .submitBtn{
        margin-top: 35px;
    }
}

</style>
