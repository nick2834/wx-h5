<template>
    <div class="page-content">
        <group>
            <cell  class="cell-title">
                <div slot="title" style="text-align:center">微信零钱</div>
                <!-- <img slot="icon" width="30" style="display:block;margin-right:4rem;" src="../../assets/images/wechat.png"> -->
                <img slot="icon" width="30" style="display:block;" src="../../assets/images/wechat.png">
                <div>
                    <span style="color: green">
                        <img v-if="fullname == ''" class="img-responsive" src="../../assets/images/false.png" width="18" alt="">
                        <img v-else class="img-responsive" src="../../assets/images/true.png" width="18" alt="">
                    </span>
                </div>
            </cell>
        </group>
        <group title="请选择已完成实名认证的提现方式，以免打款失败">
            <x-input title="微信昵称" type="text"  text-align="right" disabled :value="userInfo.nickname"></x-input>
            <x-input title="认证姓名"  is-type="china-name" type="text" placeholder="请输入姓名" text-align="right" v-model="form.fullName"></x-input>
        </group>
        <box gap="1rem 1rem">
            <button class="submitBtn" @click="handleChange">保存</button>
        </box>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import { Cell, CellBox, Group, XInput,Box } from 'vux'
import {setfullname,getUserInfo} from 'api'
const fullnameREG = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/ 
export default {
    components: {
        Cell,
        CellBox,
        Group,
        XInput,
        Box
    },
    data () {
        return {
            form:{
                fullName:""
            }
        }
    },
    computed:{
      ...mapGetters(['fullname','userInfo','token'])
    },
    methods: {
        getUserInfo(data){
            getUserInfo(data).then(res =>{
                if(res.code === 0){
                    this.$store.commit('SET_USER',res.result.data)
                    this.$store.commit('SET_FULLNAME',res.result.data.fullname)
                    this.form.fullName = res.result.data.fullname
                }
            })
        },
        handleChange(e){
            let that = this
            if(that.form.fullName === ''){             
                that.$Toast('请输入正确的姓名');
                return
            }
            if(!fullnameREG.test(that.form.fullName)){
                that.$Toast('请输入两至四个汉字')
                return
            }
            that.$store.commit('SET_FULLNAME',that.form.fullName)
            let data = {
                fullname: that.form.fullName,
                token: that.token
            }
            setfullname(data).then(res =>{
                that.$Toast.success(res.msg)
                if(res.code === 0){
                    
                }
            })
        }
    },
    mounted () {
        let that = this
        that.$nextTick(() =>{
            let data = {token:that.token}
            that.getUserInfo(data)
            that.form.fullName = that.userInfo.fullname
        })
    }
}
</script>
<style lang="less" scoped>
.cell-title{
    padding: 5px 15px;
}
.weui-cell{
    font-size: 1rem;
    color: #333
}
.weui-cell__bd .weui-input{
    text-align: right;
}
.submitBtn{
    background: #317df4;
    color: #ffffff;
    width: 100%;
    height: 3rem;
    border-radius: 5px;
    border: none;
}
</style>
