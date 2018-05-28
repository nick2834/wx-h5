<template>
    <div class="page-content">
        <scroller lock-x height="-1" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
            <div class="record-box" v-if="recordList.length > 0">
                <div class='content' v-for="(item,index) in recordList" :key="item.id">
                    <div class='content-item'>
                        <span class='month_title'>{{item.month}}</span>
                        <div class='record_list'>
                            <router-link class='list' to="/">
                                <div class='list_content'>
                                    <div class='list_l'>
                                        <span>{{item.week}}</span>
                                        <span>{{item.create_time}}</span>
                                    </div>
                                    <div class='list_c'>
                                        <img class='wxzf img-responsive' src='../../assets/images/icon_wxzf@3x.png'>
                                    </div>
                                    <div class='list_r'>
                                        <span class='wx_money'>-{{item.money}}</span>
                                        <span class='wx_info'>提取{{item.money}}元- {{item.fullname}}（微信零钱）</span>
                                    </div>
                                </div>
                                <i class='iconfont icon-previewright arrow'></i>
                            </router-link>
                        </div>
                    </div>
                </div>
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
import { Scroller,LoadMore  } from 'vux'
import PlaceHolder from 'components/placeholder'
export default {
    components: {
        Scroller,
        LoadMore,
        PlaceHolder 
    },
    data () {
        return {
            onFetching: false,
            IslastPage: false,
            recordList: []
        }
    },
    methods: {
        onScrollBottom () {
            
        },
    },
    mounted () {
        this.$nextTick(() => {
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
.record_list{
    background: #fff;
    width: 100%;
    .list{
        padding: .5rem 1rem;
        box-sizing: border-box;
        height: 7rem;
        border-bottom: 1px solid #eaeaea;
        position: relative;
        .list_content {
            display: flex;
            span{
                display: block;
                font-size: .8rem;
                line-height: 3rem;
                /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
                color: #5f5f5f
            }
            .list_l{
                margin-right: 1rem;
            }
            .list_c{
                width: 3rem;
                height: 6rem;
                margin-right: .6rem;
            }
            .list_r{
                width: 70%;
                overflow: hidden
            }
            .wxzf{
                width: 4rem;
                margin-top: .8rem;
            }
            .wx_money{
                /* font-weight: bold !important; */
                color: black !important;
            }
            .wx_info{
                word-break: break-all;
                text-overflow: ellipsis;
                display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
                -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
                -webkit-line-clamp: 1; /** 显示的行数 **/
                overflow: hidden;  /** 隐藏超出的内容 **/
            }
        }
        .arrow{
            top: 0;
            right: 1rem;
            line-height: 7rem;
        }
    }
}

</style>
