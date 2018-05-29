<template>
  <section class="page-content">
        <div v-if="!isLoading">
            <loading :show="!isLoading" text="请稍后..."></loading>
        </div>
        <div v-else>
            <tab :line-width=2 active-color='#317df3' v-model="index">
                <tab-item class="vux-center" :selected="index === 0" v-for="(item, index) in tablist" @on-item-click="onItemClick" :key="index">{{item}}</tab-item>
            </tab>
            <div class="fullBox">
                <scroller lock-x height="-44" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
                    <div class="custom-box" v-if="customList.length > 0">
                        <div class='weui-tab-list' v-for="(item,index) in customList" :key="index">
                            <img class='user_avator img-responsive' :src='item.avatar'>
                            <!-- <img class='user_avator img-responsive' src="../../assets/images/default.png" alt=""> -->
                            <div class='user_content'>
                                <div class='username'>{{item.nickname}}</div>
                                <div class='user_tags tags_vip' v-if="item.type < 1">客户</div>
                                <div class='user_tags tags_vip' v-else-if="item.type === 1">VIP</div>
                                <div class='user_tags tags_svip' v-else-if="item.type === 2">SVIP</div> 
                                <div class='user_tags tags_tubu' v-else>渠道</div> 
                                <div class='level' v-if="item.type <= 1">
                                    <div v-if="item.toptype === 1">上级: VIP: {{item.topnickname}}</div>
                                    <div v-if="item.toptype === 2">上级: SVIP: {{item.topnickname}}</div>
                                    <div v-if="item.toptype === 3">上级: 渠道: {{item.topnickname}}</div>
                                </div>
                                <div class='custom'>
                                    <div>直接客户：{{item.direct}}</div>
                                </div>
                                <div class='money'>
                                    <div>我的佣金：{{item.money}}</div>
                                </div>
                            </div>
                            <div class='user_time'>{{item.create_time}}</div>
                        </div>
                        <!-- <load-more tip="拼命加载中...." v-if="!IslastPage"></load-more>
                        <div class="IslastPage" v-else></div> -->
                    </div>
                    <div class="custom-box" v-else>
                        <place-holder :title="'继续加油，暂时还没有客户'"></place-holder>
                    </div>
                </scroller>
            </div> 
        </div>    
  </section>
</template>
<script>
import PlaceHolder from 'components/placeholder'
import {mapGetters} from 'vuex'
import {mycustomer} from 'api'
import { Tab, TabItem,Scroller,LoadMore,Loading  } from 'vux'
const list = () => ['全部', 'SVIP', 'VIP', '客户']
export default{
    components: {
        Tab,
        TabItem,
        Scroller,
        LoadMore,
        PlaceHolder,
        Loading
    },
    computed:{
        ...mapGetters(['userInfo','identityCode','token'])
    },
    data () {
        return {
            tablist: list(),
            onFetching: false,
            defaultTab: '全部',
            index: 0,
            customList:[],
            initNum:0,
            loading:false,
            totalNum: 0,
            pageSize: 20,
            pageNum: 1,
            IslastPage:false,
            type: 'all',
            isLoading: false
        }
    },
    methods: {
        getList(data){
            mycustomer(data).then(res =>{
                if(res.code === 0){
                    this.customList = res.result
                }
                this.isLoading = true
            })
        },
        onScrollBottom () {
            this.$nextTick(() => {
                this.$refs.scrollerBottom.reset()
            })
        },
        onItemClick(e){
            this.initNum = e
            if(e === 0){
                this.type = 'all'
            }else if(e === 1){
                this.type = 'svip'
            }else if( e === 2){
                this.type = 'vip'
            }else{
                this.type = 'kehu'
            }
            this.$nextTick(() => {
                this.$refs.scrollerBottom.reset({top: 0})
                let data = {
                    type: this.type,
                    token: this.token
                }
                this.getList(data)
            })
        }
    },
    mounted () {
        let that = this
        that.$nextTick(() => {
            let data = {
                type: that.type,
                token: that.token
            }
            that.getList(data)
        })
    }
}
</script>
<style lang="less" scoped>
.vux-tab-wrap{
    position: fixed;
    top: 0;
    width: 100%;
}
.weui-tab-list{
    border-bottom:1px solid #eaeaea;
    padding:1rem 0 1rem 1rem;
    display:flex;
    .user_avator{
        width:4rem;
        height: 4rem;
        border-radius:50%;
    }
    .user_content{
        padding-left: .5rem;
        font-size: 1.2rem;
        position: relative;
        display: flex;
        flex-direction: column;
        line-height: 1.3333rem;
        .username{
            width:100px;
            overflow:hidden;
            display:inline-block;
            white-space:nowrap;
            text-overflow:ellipsis;
            -o-text-overflow:ellipsis;
        }
        .user_tags{
            position: absolute;
            left: 110px;
            top: 0;
            text-align: center;
        }
        .tags_vip{
            color: #317ef3;
            border: 1px solid #317ef3;
            border-radius: 10px;
            font-size: .8rem;
            padding: 0 5px;
            // margin-left: 5px;
            width: 1.8rem;
        }
        .tags_svip{
            color: #fff;
            background: #317ef3;
            border: 1px solid #317ef3;
            border-radius: 10px;
            font-size: .8rem;
            padding: 0 5px;
            // margin-left: 5px;
        }
        .tags_tubu{
            color: #fff;
            background: #317ef3;
            border: 1px solid #317ef3;
            border-radius: 10px;
            font-size: .8rem;
            padding: 0 5px;
            // margin-left: 5px;
            width: 1.8rem;
        }
        .level,.custom,.money{
            width: 100%;
            font-size: .8rem;
            color: #535353;
            overflow:hidden;
            display:block;
            white-space:nowrap;
            text-overflow:ellipsis;
            -o-text-overflow:ellipsis;
        }
    }
    .user_time{
        text-align: right;
        color: #535353;
        position: absolute;
        right: 1rem;
        font-size: .8rem;
    }
}
</style>
