<template>
  <section class="page-content">
    <tab :line-width=2 active-color='#317df3' v-model="index">
        <tab-item class="vux-center" :selected="index === 0" v-for="(item, index) in tablist" @on-item-click="onItemClick" :key="index">{{item}}</tab-item>
    </tab>
    <div class="fullBox">
        <scroller lock-x height="-44" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
            <div class="income-box" v-if="incomeList.length > 0">
                <p v-for="i in bottomCount">placeholder {{i}}</p>
                <load-more tip="拼命加载中...." v-if="!IslastPage"></load-more>
                <div class="IslastPage" v-else></div>
            </div>
            <div class="income-box" v-else>
                <place-holder :title="'当前暂无收入明细'"></place-holder>
            </div>
        </scroller>
    </div>     
  </section>
</template>
<script>
import PlaceHolder from 'components/placeholder'
import { Tab, TabItem,Scroller,LoadMore  } from 'vux'
const list = () => ['所有', '未到账', '已到账', '交易关闭']
export default{
    components: {
        Tab,
        TabItem,
        Scroller,
        LoadMore,
        PlaceHolder
    },
    data () {
        return {
            tablist: list(),
            onFetching: false,
            defaultTab: '所有',
            index: 0,
            incomeList: [],
            initNum:0,
            loading:false,
            fullHeight:document.documentElement.clientHeight,
            queryLoading: false,
            moreLoading: false,
            allLoaded: false,
            totalNum: 0,
            pageSize: 20,
            pageNum: 1,
            bottomCount: 20,
            IslastPage:false
        }
    },
    methods: {
        onScrollBottom () {
            if (this.onFetching) {
                // do nothing
            } else {
                this.onFetching = true
                setTimeout(() => {
                this.bottomCount += 10
                this.$nextTick(() => {
                    this.$refs.scrollerBottom.reset()
                })
                this.onFetching = false
                }, 2000)
            }
        },
        onItemClick(e){
            console.log(e)
            this.initNum = e
            this.bottomCount = 20
            this.$nextTick(() => {
                this.$refs.scrollerBottom.reset({top: 0})
            })
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.$refs.scrollerBottom.reset({top: 0})
        })
    }
}
</script>
<style lang="less" scoped>
.vux-tab-wrap{
    position: fixed;
    width: 100%;
}
p{
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}
</style>
