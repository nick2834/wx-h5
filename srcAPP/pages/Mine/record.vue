<template>
    <div class="page-content">
        <scroller lock-x height="-1" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
            <div class="record-box" v-if="recordList.length > 0">
                <group v-for="(item,index) in recordList" :key="item.id" :title="item.month">
                    <cell is-link :link="{path: '/record/'+ item.id}">
                        <div slot="title" class="title_box">
                            <span>{{item.week}}</span>
                            <span>{{item.create_time}}</span>
                        </div>
                        <div slot="child">
                            <div class="child-box">
                                <img class="img-responsive" src="../../assets/images/icon_wxzf.png" alt="">
                                <div class="child-info">
                                    <span class="money-info">-{{item.money}}</span>
                                    <span class="wx-info"  style="-webkit-box-orient:vertical;">提取{{item.money}}元- {{item.fullname}}（微信零钱）</span>
                                </div>
                            </div>
                        </div>
                    </cell>
                </group>
                <load-more tip="拼命加载中...." v-if="!IslastPage"></load-more>
                <div class="IslastPage" v-else></div>
            </div>
            <div class="record-box" v-else>
                <place-holder :title="'暂无提现记录'"></place-holder>
            </div>
        </scroller>
    </div>    
</template>
<script>
import { Scroller,LoadMore,Cell,Group  } from 'vux'
import {mapGetters} from 'vuex'
import {extractlist} from 'api'
import PlaceHolder from 'components/placeholder'
export default {
    components: {
        Cell,
        Group,
        Scroller,
        LoadMore,
        PlaceHolder 
    },
    data () {
        return {
            recordList: [],
            page: 1,
            lastPage:1,
            IslastPage:false,
            isLoading: false
        }
    },
    computed:{
        ...mapGetters(['userInfo','identityCode','token'])
    },
    methods: {
        getList(data){
            extractlist(data).then(res =>{
                let that = this
                if (that.onFetching) return;
                that.onFetching = true
                if(res.code === 0){
                    let IslastPage = false
                    if(that.page >= res.result.last_page)
                        IslastPage = true 
                    that.recordList = res.result.data
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
                        that.recordList = that.recordList.concat(res.result.data)
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
    },
    mounted () {
        let that = this
        this.$nextTick(() => {
            let data = {token:that.token}
            that.getList(data)
            this.$refs.scrollerBottom.reset({top: 0})
        })
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
}
.month_title{
    line-height: 2rem;
    padding: 0 1rem;
    font-size: 1rem;
}
.title_box{
    display: flex;
    flex-direction: column;
    font-size: .9rem;
    line-height: 1.5rem;
    span{
        color: #999;
        &:first-child{
            color: #333
        }
    }
}
.child-box{
    position: absolute;
    left: 4rem;
    height: 3rem;
    display: flex;
    align-items: center;
    top: 10px;
}
.child-info{
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    margin-left: .5rem;
    width: 16rem;
    overflow: hidden;
    .money-info{
        color: #333;
    }
    .wx-info{
        color: #999;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
        -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
        -webkit-line-clamp: 1; /** 显示的行数 **/
        overflow: hidden;  /** 隐藏超出的内容 **/
    }
}
</style>
