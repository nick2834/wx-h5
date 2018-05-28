<template>
    <div class="page-content">
        <tab class="tabs" active-color='#EAC37D' ref="tabbox">
            <tab-item v-for="(item,index) in orientationList" :key="item.id" :selected="index===0" class="items"  @on-item-click="handleSelect(item,index)">
                <img class="icon" :src="item.src" alt="">
                <p>{{item.region}}</p>
            </tab-item>
        </tab>
        <div class="foot">
            <div class="address_top" v-for="(item,index) in act_addList" :key="item.id" :id="item.id">
                <p class="title" :class="{'active':index === isActive}">{{item.region}}</p>
                <ul class="info">
                    <li v-for="(items,indexs) in item.infos" :key="indexs" class="gold_col"><span>{{items.info}}</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { Scroller,LoadMore,Tab, TabItem  } from 'vux'
export default {
    data () {
        return {
            orientationList: [
                { 
                    id: "01", 
                    region: "高额返佣",
                    img1: "../../../static/images/unselected_btn_fl.png", 
                    img2:"../../../static/images/selected_btn_fl.png",
                    src:"../../../static/images/selected_btn_fl.png", 
                },
                {
                    id: "02", 
                    region: "两级推荐奖励",
                    img1: "../../../static/images/unselected_btn_jl.png",
                    img2: "../../../static/images/selected_btn_jl.png",
                    src: "../../../static/images/unselected_btn_jl.png", 
                },
                { 
                    id: "03", 
                    region: "专属客户返佣",
                    img1: "../../../static/images/unselected_btn_fy.png",
                    img2: "../../../static/images/selected_btn_fy.png",
                    src:"../../../static/images/unselected_btn_fy.png",

                },
                { id: "04", 
                    region: "极速返佣", 
                    img1: "../../../static/images/unselected_btn_js.png", 
                    img2: "../../../static/images/selected_btn_js.png",
                    src:"../../../static/images/unselected_btn_js.png", 
                },
                { id: "05",
                    region: "专属客服", 
                    img1: "../../../static/images/unselected_btn_kf.png", 
                    img2: "../../../static/images/selected_btn_kf.png", 
                    src: "../../../static/images/unselected_btn_kf.png",
                },
                { 
                    id: "06",
                    region: "尊贵标识",
                    img1: "../../../static/images/unselected_btn_svip.png",
                    img2: "../../../static/images/selected_btn_svip.png",
                    src:"../../../static/images/unselected_btn_svip.png",
                }
            ],
            act_addList: [
                {
                    id: "01", region: "专享高额返佣",
                    infos: [
                    { info: "SVIP可享受商品高额返佣的专属福利，SVIP自购商品的返佣是普通VIP的1.5倍"},
                    { info: "例如，商品A普通VIP购买获得10元返佣，SVIP购买则可获得15元的返佣"}
                        ],
                },
                {
                    id: "02", region: "两级推荐奖励",
                    infos: [
                    { info: "SVIP邀约一级客户或vip申请成为SVIP，得100元的奖励；邀约二级客户或vip申请成为SVIP，得20元的奖励" },
                    { info: "SVIP拥有自己专属的二维码，通过分享智淘助手小程序链接或者二维码锁定两级客户关系" },
                    { info: "例如，小李是SVIP，小李的朋友小红扫了他的二维码成为他的一级客户；小红申请成为SVIP时，小李可得100元的奖励(小红升级为SVIP后，小红是属于自己的一级客户，是小李的二级客户）；小张扫了小红的二维码，则小张成为小红的一级客户，成为小李的二级客户；小张申请成为SVIP时，小李得20元的奖励（小红得100元奖励）"}
                    ]
                },
                {
                    id: "03", region: "专属客户返佣",
                    infos: [
                    { info: "SVIP享受二级客户的返佣，获得直属客户或vip购物时省钱金额的50%返佣，获得二级客户或vip购物时省钱金额的12.5%" },
                    { info: "例如，小李是SVIP，其一级客户小张通过智淘助手淘宝购物省了20元，则小李得10元的返佣；小李的二级客户小红通过智淘助手淘宝购物省了20元，则小李得2.5元的返佣" }
                    ],
                },
                {
                    id: "04", region: "极速返佣",
                    infos: [
                    { info: "SVIP通过智淘助手淘宝购物享有确认收货后返佣立即到账的特权，极速返佣额度30元/月；普通VIP确认收货后一般需要7天左右才到账" },
                    
                    ],
                },
                {
                    id: "05", region: "专属客服",
                    infos: [
                    { info: "智淘助手推出专属微信(微信号：zhitaofuwu）为SVIP提供优先处理，专业解答、专属通道的极速客服服务" },
                    ],
                },
                {
                    id: "06", region: "尊贵标识",
                    infos: [
                    { info: "智淘SVIP标识将会实现多平台共享（后续智淘将会推出智淘手机APP），随时随地彰显尊贵身份，点亮SVIP图标，就是那么不一样！" },
                    ],
                },
                
            ],
            isActive: 0
        }
    },
    components: {
        Scroller,
        LoadMore,
        Tab,
        TabItem, 
    },
    methods: {
        handleSelect(item,index){
            let _id = item.id
            let that= this
            that.isActive = index
            that.orientationList.map((item,index) =>{
                if(that.orientationList[index].id == _id){
                    that.orientationList[index].src = that.orientationList[index].img2;
                }else{
                    that.orientationList[index].src = that.orientationList[index].img1;
                }
            })
            // 找到锚点
            let anchorElement = document.getElementById(_id);
            if(anchorElement) { anchorElement.scrollIntoView(); }
        }
    },
    mounted () {
        let that = this
    }
}
</script>
<style lang="less" scoped>
.page-content{
    background: #ffffff;
}
.tabs{
    height: 6rem !important;
}
.items{
    height: inherit;
    width: 6rem;
    margin-left: 1rem;
    text-align: center;
    color: #ffffff;
    display:inline-block;
    .icon{
        width: 3rem;
        height: 3rem;
        margin: 0 auto;
        margin-top: 1rem;
    }
    p{
        font-size: .8rem;
        line-height: 1.6rem
    }
    &:first-child{
        margin-left: 0;
    }
}
.foot{
    position: fixed;
    top: 6rem;
    bottom: 0;
    background: #ffffff;
    overflow-y: auto;
    .address_top{
        padding: 0 1rem;
        color:#999999;
        font-size:.9rem;
        min-height: 3rem;
        border-top: 10px solid #f3f3f3;
        .title{
            text-align:#f3f3f3;
            line-height:3rem;
            font-size:1rem;
            color:#333;
            font-weight:bold;
            &.active{
                color: rgb(234, 195, 125)
            }
        }
        .info {
            padding: 0 1rem;
            li{
                list-style: disc;
                font-size: .8rem;
                line-height: 1.6rem;
                padding-bottom: 1rem;
                span{
                    color: #333;
                }
            }
        }
    }
}
</style>
