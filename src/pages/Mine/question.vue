<template>
    <div>
        <div v-for="(item,index) in list" :key="index">
            <p class="roles_title">{{item.title}}</p>
            <van-collapse v-for="(child,childindex) in  item.child" :key="childindex" v-model="activeName" accordion>
                <van-collapse-item :title="child.name" :name="child.id">
                    <div slot="default" v-html="child.contents"></div>
                </van-collapse-item>
            </van-collapse>
        </div>
    </div>
</template>
<script>
import {Collapse, CollapseItem} from 'vant'
export default {
    components: {
      'van-collapse':Collapse,
      'van-collapse-item': CollapseItem  
    },
    data () {
        return {
            list:[
                {
                    "title":"名词解释",
                    "child": [
                    {
                        id: '01',
                        name: '智淘VIP定义',
                        open: false,
                        contents: "智淘VIP是智淘设置的一种体验SVIP角色，目前普通客户可免费注册成为智淘VIP。智淘VIP，可以领取优惠券，且通过智淘下单购买商品可以获得返佣。同时智淘VIP可通过分享小程序链接或二维码方式带来客户或订单，赚取佣金。"
                    },
                    {
                        id: '02',
                        name: 'SVIP定义',
                        open: false,
                        contents: "SVIP是智淘设置的一种尊享角色，目前客户支付298元软件服务费可申请成为SVIP。SVIP，可以领取优惠券，自购商品比VIP多省50%，享受专属客户返佣和两级推荐奖励。SVIP可通过分享小程序链接或二维码方式带来客户或订单，也可通过下级VIP或SVIP带来客户或订单，赚取佣金。佣金通过系统自动结算，达到最低提现金额可进行提现。"
                    },
                    {
                        id: '03',
                        name: '一级和二级客户定义',
                        open: false,
                        contents: "一级客户：VIP或SVIP直接发展的客户或者VIP为自己的一级客户；<br/>二级客户：VIP或者SVIP的下级VIP或者SVIP发展的一级客户或者VIP为自己的二级客户。<br/>注：只有VIP和SVIP可以发展下级客户，且你的一级客户升级为SVIP后，将变为你的二级客户。"
                    },
                    {
                        id: '04',
                        name: '我的账户相关定义',
                        open: false,
                        contents: "我的账户：智淘系统的资金管理工具，记录VIP和SVIP在智淘助手小程序的资金数据。<br/>可用佣金：从淘宝订单交易成功、无退换货申请且过了维权期中获得的佣金和推荐SVIP获得的佣金，已减去退款返还的佣金，即账户内可申请提现至自己的收款账户的金额。<br/>待确认佣金：从淘宝支付成功的订单中获得的佣金，在交易成功、无退换货申请且过了维权期后，进入可用佣金。<br/>提现中：已经申请提现，未到账的金额。<br/>已提现：已经申请提现，并且已经到账的金额。<br/>累计佣金：从淘宝订单交易成功、无退换货申请且过了维权期中获得的佣金和推荐SVIP获得的佣金的累计总佣金。"
                    },
                    ]
                },
                {
                    "title": "赚钱规则",
                    "child": [
                    {
                        id: '05',
                        name: '淘宝购物如何省钱',
                        open: false,
                        contents: "1、在淘宝或天猫选好商品后，复制商品标题；<br/>2、打开微信进入智淘助手小程序，立即搜索找到该商品并进入商品详情页；<br/>3、点击右下角按钮然后复制淘口令，再次打开手机淘宝，领取优惠券完成下单；<br/>4、正常交易完成后，回智淘助手小程序可获得相应佣金，随时可申请提现到微信零钱。备注：普通客户只能领取优惠券；智淘VIP和SVIP，能领取优惠券且购物下单可以获得返佣。"
                    },
                    {
                        id: '06',
                        name: 'SVIP如何赚钱',
                        open: false,
                        contents: "分享二维码：SVIP可以将二维码图片发送给微信好友或分享至朋友圈，好友扫码进入智淘助手小程序后即成为自己的客户，客户通过智淘助手购物省钱即可按照一定比率获得佣金，且客户申请成为SVIP也可获得相应奖励。分享智淘小程序页面：将智淘小程序链接发送给微信好友，好友进入智淘小程序后即成为自己的客户，客户通过智淘助手购物省钱即可按照一定比率获得佣金，且客户申请成为SVIP也可获得相应奖励。<br/>注：客户首次进入智淘助手小程序后即绑定关系链，关系链不能改变。"
                    },
                    {
                        id: '07',
                        name: '推荐SVIP的奖励是多少',
                        open: false,
                        contents: "目前只有SVIP推荐客户或VIP申请成为SVIP可获得奖励，SVIP小红直接推荐客户或者VIP成为SVIP，小红可获得100元奖励，SVIP小红的下级SVIP或一级VIP推荐客户或VIP成为SVIP，小红可获得20元奖励。"
                    },
                    ]
                },
                {
                    "title":"推广技巧",
                    "child": [
                    {
                        id: '08',
                        name: 'SVIP如何发展下级SVIP',
                        open: false,
                        contents: "SVIP小李通过分享专属二维码或智淘助手小程序链接的方式带来的客户或VIP申请成为SVIP小红，则SVIP小红就成为小李的下级SVIP，此时小李可以获得100元的推荐奖励。若小红发展了下级SVIP，则小红获得100元的推荐奖励，小李获得20元的推荐奖励。注：SVIP小李的下级VIP小张推荐了客户申请成为SVIP，SVIP小李可以获得20元的奖励，小张拿不到奖励。"
                    },
                    {
                        id: '09',
                        name: '如何分享二维码或链接',
                        open: false,
                        contents: "分享二维码：VIP或SVIP在我的页面“我的二维码”页面长按二维码图片后，可直接发送给好友或保存图片分享至朋友圈。分享链接：在智淘助手小程序首页或商品详情页直接通过右上角的分享按钮进行链接分享。"
                    },
                    ]
                },
                {
                    "title": "佣金规则",
                    "child": [
                    {
                        id: '10',
                        name: '淘宝订单的商品佣金在哪里查看',
                        open: false,
                        contents: "在智淘助手小程序我的页面“收入明细”中查看订单和佣金明细"
                    },
                    {
                        id: '11',
                        name: 'SVIP推荐奖励何时到账',
                        open: false,
                        contents: "目前SVIP推荐奖励实时到账，可在智淘助手小程序我的页面“收入明细”查看相关明细。"
                    },
                    {
                        id: '12',
                        name: '商品返佣何时到账',
                        open: false,
                        contents: "商品返佣的到账时间，是以淘宝订单交易成功且无退换货申请为前提的正常时间：<br/>到账周期：对于部分信用较好的用户，淘宝部分订单在确认收货后即可返佣到账，部分淘宝订单在订单过了维权期后返佣到账，时间在确认收货后的1天—20天，给你带来不便，我们深表歉意。<br/>预估到账时间：可进入我的页面“收入明细”查看具体淘宝订单佣金预估到账时间。如果你超过上述周期仍未获得返佣，请在智淘助手小程序联系客户，我们将第一时间帮你排查原因并处理。"
                    },
                    {
                        id: '13',
                        name: '淘宝订单交易后产生退货，有佣金吗',
                        open: false,
                        contents: "淘宝订单交易后产生退货，你的佣金将被扣除。"
                    },
                    ]
                },
                {
                    "title": "提现",
                    "child": [
                    {
                        id: '14',
                        name: '佣金如何提现',
                        open: false,
                        contents: "当可用佣金的账户余额中金额大于最低提现金额（当前为1元）时，便可进行提现申请。目前提现支持微信零钱，首次提现时需要进行实名认证，申请提现后一般实时到账，可在微信零钱查收到账金额。且目前提现时不收取任何手续费。"
                    },
                    {
                        id: '15',
                        name: '提现如果没有到账怎么办',
                        open: false,
                        contents: "请在智淘助手小程序联系在线客服。"
                    }
                    ],
                },
                {
                    "title": "其他",
                    "child": [
                    {
                        id: '16',
                        name: '为什么有的淘宝商品在智淘助手搜索不到',
                        open: false,
                        contents: "目前智淘助手小程序覆盖淘宝、天猫80%左右的在线商品，所以存在少数商品未能搜索到。"
                    },
                    {
                        id: '17',
                        name: '为什么有的商品没有优惠券',
                        open: false,
                        contents: "智淘助手小程序的优惠券是参与活动推广的内部优惠券，小部分未参与活动的商品则没有优惠券"
                    },
                    {
                        id: '18',
                        name: '智淘助手小程序怎么打开',
                        open: false,
                        contents: "在微信【发现】——【小程序】中，搜索智淘助手进入小程序，也可以通过朋友分享的小程序二维码或链接打开。"
                    },
                    {
                        id: '19',
                        name: 'SVIP服务费能退吗',
                        open: false,
                        contents: "不能"
                    },
                    ]  
                }
            ],
            activeName: '1'
        }
    }
}
</script>
<style lang="less" scoped>
.roles_title{
    line-height:3rem;
    background:#f3f3f3;
    font-size:.9rem;
    margin-left:1rem;
    color:#969696;
}
</style>
