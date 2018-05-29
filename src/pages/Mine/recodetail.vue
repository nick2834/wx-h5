<template>
    <div class="page-content">
        <div class="heade-box">
            <span class="info-box">
                <img class="img-responsive" src="../../assets/images/icon_wxzf.png" alt="">
                <span>微信零钱</span>
                
            </span>
            <span class="money-box">
                <span class="money">{{extractDetails.money}}</span>
                <span class="status" v-if="extractDetails.status === 0">审核中</span>
                <span class="status" v-if="extractDetails.status === 1">提现成功</span>
                <span class="status" v-if="extractDetails.status === 2">提现失败</span>
                <span class="status" v-if="extractDetails.status === 3">正在打款中</span>
            </span>
        </div>
        <ul class="content-box">
            <li><span class="names">提取金额</span><span>{{extractDetails.money}}元</span></li>
            <li><span class="names">手续费（限时免费）</span><span>{{extractDetails.brokerage}}元</span></li>
            <li><span class="names">收款方式</span><span>{{extractDetails.paymode}}</span></li>
            <li><span class="names">收款账户</span><span>{{extractDetails.accounts}}</span></li>
            <li><span class="names">收款人姓名</span><span>{{extractDetails.fullname}}</span></li>
            <li><span class="names">提取时间</span><span>{{extractDetails.create_time}}</span></li>
            <li><span class="names">到账时间</span><span>{{extractDetails.last_time}}</span></li>
        </ul>
        <!-- <p>对此订单有疑问，请联系在线客服</p> -->
    </div>    
</template>
<script>
import {mapGetters} from 'vuex'
import {extractdetails} from 'api'
export default {
    data () {
        return {
           extractDetails: {}
        }
    },
    computed:{
        ...mapGetters(['userInfo','identityCode','token'])
    },
    methods: {
        getDetails(data){
            extractdetails(data).then(res =>{
                if(res.code === 0){
                    this.extractDetails = res.result.data
                }
            })
        }
    },
    mounted () {
        let that = this
        let id = this.$route.params.id
        let data = {
            token: that.token,
            id: id
        }
        that.getDetails(data)   
    }
}
</script>
<style lang="less" scoped>
.page-content{
    background: #ffffff
}
.heade-box{
    border-bottom: 1px solid #f3f3f3;
    padding: 1rem;
    .info-box{
        display: flex;
        line-height: 3rem;
        color: #333;
        font-size: 1rem;
        align-items: center;
        img{
            width: 1.5rem;
            margin-right: .5rem;
        }
    }
    .money-box{
        display: flex;
        flex-direction: column;
        text-align: center;
        .money{
            color: #333;
            font-size: 2rem;
            line-height: 4rem;
        }
        .status{
            color: #888;
            font-size: 1rem;
            line-height: 2
        }
    }
}
.content-box{
    min-height: 15rem;
    padding: 1rem;
    li{
        display: flex;
        justify-content: space-between;
        span{
            flex: 1;
            font-size: 1rem;
            line-height: 2rem;
            text-align: right;
            color: #5c5c5c
        }
        .names{
            color: #333;
            text-align: left
            
        }
    }
}
</style>
