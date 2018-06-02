<template>
  <section class="page-content">
    <div v-if="!isLoading">
        <loading :show="!isLoading" text="请稍后..."></loading>
    </div>
    <div>
        <tab :line-width=2 active-color='#317df3' v-model="index">
            <tab-item class="vux-center" :selected="index === 0" v-for="(item, index) in tablist" @on-item-click="onItemClick" :key="index">{{item}}</tab-item>
        </tab>
        <div class="fullBox">
            <scroller lock-x height="-44" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
                <div class="income-box" v-if="JSON.stringify(incomeList) !== '[]'">
                    <div class='weui-tab-list' v-for="(item,index) in incomeList" :key="item.orderid">
                        <div class='weui-tab-head'>
                            <img lazy-load class='shop_image' :src='item.goods_pic'/>
                            <div class='shop_msg'>
                            <div class='shop_box'>
                                <p class='title' style="-webkit-box-orient:vertical;">{{item.goods_title}}</p>
                                <span v-if="item.type === 1" class='shops'>所属店铺：{{item.goods_shoptitle}}</span>                    
                            </div>
                            <div class='source'>来源：{{item.source}}</div>
                            </div>
                        </div>
                        <div class='weui-tab-body'>
                            <div class='pay'>
                            <p class='tit'>付款金额</p>
                            <p class='coins'>￥{{item.price}}</p>
                            </div>
                            <div class='pay'>
                            <span class='tit'>成交预估收入</span>
                            <span class='coins'>￥{{item.commision}}</span>
                            </div>
                            <div class='pay'>
                            <span class='tit'>预计到账时间</span>
                            <span class='coins'>{{item.yujitime}}</span>
                            </div>
                            <div class='pay'>
                            <span class='tit'>佣金状态</span>
                            <span v-if="item.status == 1" class='coins'>未到账</span>
                            <span v-if="item.status == 2" class='coins'>已到账</span>
                            <span v-if="item.status == 3" class='coins'>已关闭</span>
                            <span v-if="item.status == 4" class='coins'>退款中</span>
                            <span v-if="item.status == 5" class='coins'>已退款</span>
                            </div>
                        </div>
                        <div class='weui-tab-foot'>{{item.datetime}}创建</div>
                    </div>
                    <load-more tip="拼命加载中...." v-if="!IslastPage"></load-more>
                    <div class="IslastPage" v-else></div>
                </div>
                <div class="income-box" v-else>
                    <place-holder :title="'当前暂无收入明细'"></place-holder>
                </div>
            </scroller>
        </div>  
    </div>   
  </section>
</template>
<script>
import PlaceHolder from 'components/placeholder'
import {mapGetters} from 'vuex'
import {orders} from 'api'
import { Tab, TabItem,Scroller,LoadMore,Loading  } from 'vux'
const list = () => ['所有', '未到账', '已到账', '交易关闭']
export default{
    components: {
        Tab,
        TabItem,
        Scroller,
        LoadMore,
        Loading,
        PlaceHolder
    },
    computed:{
        ...mapGetters(['userInfo','identityCode','token'])
    },
    data () {
        return {
            tablist: list(),
            onFetching: false,
            defaultTab: '所有',
            index: 0,
            incomeList: [],
            initNum:0,
            page: 1,
            lastPage:1,
            IslastPage:false,
            isLoading: false
        }
    },
    methods: {
        getOrders(data){
            orders(data).then(res =>{
                let that = this
                if (that.onFetching) return;
                that.onFetching = true
                if(res.code === 0){
                    let IslastPage = false
                    if(that.page >= res.result.last_page)
                        IslastPage = true 
                    that.incomeList = res.result.data
                    that.page = res.result.current_page
                    that.lastPage = res.result.last_page
                    that.onFetching = false
                    that.IslastPage = IslastPage
                }
                that.onFetching = false
                that.isLoading = true
            })
        },
        onScrollBottom () {
            let that = this          
            if (this.onFetching || this.IslastPage || that.page >=that.lastPage) {
                return false
            }else{
                that.onFetching = true
                var page =  ++ that.page
                let data = {
                    token:this.token,
                    status:this.initNum,
                    page: page
                }
                orders(data).then(res =>{
                    if(res.code === 0){
                        let IslastPage = false
                        if(that.page >= res.result.last_page)
                            IslastPage = true               
                        that.incomeList = that.incomeList.concat(res.result.data)
                        that.page = res.result.current_page
                        that.lastPage = res.result.last_page
                        that.onFetching = true
                        that.IslastPage = IslastPage
                    }
                    that.onFetching = false
                    that.$nextTick(() => {
                        that.$refs.scrollerBottom.reset()
                    })
                })
            }
        },
        onItemClick(e){
            this.initNum = e
            this.$nextTick(() => {
                this.$refs.scrollerBottom.reset({top: 0})
                let data = {token:this.token,status:this.initNum,page: this.page}
                this.getOrders(data)
            })
        }
    },
    mounted () {
        let that = this
        that.$nextTick(() => {
            this.$refs.scrollerBottom.reset({top: 0})
            let data = {token:that.token,status:0,page: that.page}
            that.getOrders(data)
        })
    }
}
</script>
<style lang="less" scoped>
.vux-tab-wrap{
    position: fixed;
    width: 100%;
}
.weui-tab-list{
    border-bottom: 10px solid #eaeaea;
    padding: 1rem;
    .weui-tab-head{
        overflow: hidden;
        .shop_image{
            width: 6rem;
            height: 6rem;
            margin-right: 1rem;
            float: left;
        }
        .shop_msg{
            font-size: .8rem;
            height: 6rem;
            position: relative;
            margin-left: 7rem;
            .shop_box{
                line-height: 2.5rem;
                position: relative;
                .title{
                    word-break: break-all;
                    text-overflow: ellipsis;
                    display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
                    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
                    -webkit-line-clamp: 1; /** 显示的行数 **/
                    overflow: hidden;  /** 隐藏超出的内容 **/
                    line-height: 1.5rem; 
                }
                .shops{
                    color:#7d7d7d;
                }
            }
        }
        .source{
            background: #317ef2;
            color: #fff;
            padding: 0 5px;
            font-size: .6rem;
            height: 1.5rem;
            line-height: 1.5rem;
            display: table;
            border-radius: 10px;
            margin-top: 10px;
        }
    }
    .weui-tab-body{
        display: flex;
        justify-content: space-around;
        padding:5px 0;
        .pay{
            flex: .3;
            line-height: 1.5rem;
            &:first-child{
                flex: .2;
                .coins{
                    font-weight: bold; 
                    font-size: .9rem
                }
            }
            &:nth-child(2){
                .coins{
                    font-weight: bold; 
                    font-size: .9rem
                }
            }
            &:last-child{
                flex: .2
            }
            .tit{
                font-size: .8rem;
                color: #535353
            }
            .coins{
                font-size: .8rem;
                display: block;
            }
        }
    }
    .weui-tab-foot{
        font-size: .8rem;
        color: #7d7d7d;
    }
}
.weui-tab-list:last-child{
    border: none
}
</style>
