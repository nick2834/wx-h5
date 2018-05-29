<template>
    <section>
        <div class="head_btn">
            <div class='center partner_center'>
                <div class='all_nums'>
                <div class='alls'>
                    <span>客户数</span>
                    <p class='gold_col'>{{usersNums.kehu}}</p>
                </div>
                <div class='vips'>
                    <span>VIP 数</span>
                    <p class='gold_col'>{{usersNums.vip}}</p>
                </div>
                <div class='svips'>
                    <span>SVIP 数</span>
                    <p class='gold_col'>{{usersNums.svip}}</p>
                </div>
                </div>
            </div>
        </div>
        <div class="tab_box">
            <tab bar-active-color="transparent" active-color="#f9ba31">
                <tab-item selected @on-item-click="handelClick('today')">今日</tab-item>
                <tab-item @on-item-click="handelClick('yesterday')">昨日</tab-item>
            </tab>
            <div class="tab_content">
                <p class="except"> 成交预估收入: ￥{{todaysInfo.sum}} </p>
                <div class="except_nums">
                    <div class="except_box">
                        <div class="except_title">新增客户数</div>
                        <p>{{todaysInfo.new_putong}}</p>
                    </div>
                    <div class="except_box">
                        <div class="except_title">付款笔数</div>
                        <p>{{todaysInfo.count}}</p>
                    </div>
                    <div class="except_box">
                        <div class="except_title">新增SVIP数</div>
                        <p>{{todaysInfo.new_svip}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="count_box incomes">
            <div class="weui-flex weui-flex-title weui-cell vux-tap-active weui-cell_access">
                <div class="vux-cell-bd vux-cell-primary"><p><label class="vux-label">收入统计</label> </p> <span class="vux-label-desc"></span></div>
                <router-link to="/income" class="weui-flex__item weui-cell__ft_in-access weui-cell__ft">收入统计</router-link>
            </div>
            <div class="barChart" ref="barChart">
                <div id="barChart" style="width:100%;height:15rem"></div>
            </div>
        </div>
        <div class="count_box customs">
            <div class="weui-flex weui-flex-title weui-cell vux-tap-active weui-cell_access">
                <div class="vux-cell-bd vux-cell-primary"><p><label class="vux-label">客户统计</label> </p> <span class="vux-label-desc"></span></div>
                <router-link to="/custom" class="weui-flex__item weui-cell__ft_in-access weui-cell__ft">客户统计</router-link>
            </div>
            <div class="lineChart">
                <div id="lineChart" style="width:100%;height:15rem"></div>
            </div>
        </div>
    </section>
</template>
<script>
import {mapGetters} from 'vuex'
import echarts from 'echarts'
import {Cell,Group,Tab, TabItem} from 'vux'
import {svipcard,twodays,usersnum,statisticsmoney,statisticcustomer} from 'api'
import data2 from './lint-color.json'
export default {
    components: {
        Cell,
        Group,
        Tab,
        TabItem
    },
    computed:{
        ...mapGetters(['userInfo','identityCode','token'])
    },
    data () {
        return {
            data2,
            usersNums: {},
            dayItem: 'today',
            todaysInfo: {},
            items: [],
            boxWidth: 0,
            boxHeight: 0,
            barChartBox: null,
            lineChartBox: null,
            options: [
                {
                    name:'商品分佣',
                    type:'bar',
                    stack: '收入',
                    barWidth : 10,
                    data:[]
                },
                {
                    name:'推荐奖励',
                    type:'bar',
                    stack: '收入',
                    barWidth : 10,
                    data:[]
                }
            ],
            options2:[
                {
                    name:'新增客户',
                    type:'line',
                    stack: '总量',
                    data:[]
                },
                {
                    name:'新增VIP',
                    type:'line',
                    stack: '总量',
                    data:[]
                },
                {
                    name:'新增SVIP',
                    type:'line',
                    stack: '总量',
                    data:[]
                },
            ]
        }
    },
    created () {
        // this.drawBar()
        // this.drwaLine()
    },
    methods: {
       handelClick(item){
           let that = this
           let data = {
               uid: that.userInfo.uid,
               token: that.token,
               type: item
           }
           that.getToday(data)
       },
       getUseNums(data){
           usersnum(data).then(res =>{
               if(res.code === 0){
                   this.usersNums = res.result.data
               }
           })
       },
       getToday(data){
           twodays(data).then(res =>{
               if(res.code === 0){
                   this.todaysInfo = res.result.data
               }
           })
       },
       getInnerList(data){
           statisticsmoney(data).then(res =>{
               if(res.code === 0){
                    let list = res.result.data
                    let dateArr = []
                    for(let i in list){
                        dateArr.unshift(i)
                        this.options[0].data.unshift(list[i].shopping)
                        this.options[1].data.unshift(list[i].shopping)
                    }
                    this.barChartBox = echarts.init(document.getElementById('barChart'))
                    this.barChartBox.setOption({
                        tooltip : {
                            trigger: 'axis',
                            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        legend: {
                            data:['商品分佣','推荐奖励']
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis : [
                            {
                                type : 'category',
                                data : dateArr,
                                axisLabel:{ //调整x轴的lable  
                                    textStyle:{
                                        fontSize:10 // 让字体变大
                                    }
                                }
                            }
                        ],
                        yAxis : [
                            {
                                type : 'value'
                            }
                        ],
                        series : this.options
                    });
               }
           })
       },
       getCustomers(data){
           statisticcustomer(data).then(res =>{
               if(res.code === 0){
                    let list = res.result.data
                    let dateArr = []
                    for(let i in list){
                        dateArr.unshift(i)
                        this.options2[0].data.unshift(list[i].kehu)
                        this.options2[1].data.unshift(list[i].vip)
                        this.options2[2].data.unshift(list[i].svip)
                    }
                    this.lineChartBox = echarts.init(document.getElementById('lineChart'))
                    this.lineChartBox.setOption({
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data:['新增客户','新增VIP','新增SVIP']
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: dateArr,
                            axisLabel:{ //调整x轴的lable  
                                textStyle:{
                                    fontSize:10 // 让字体变大
                                }
                            }
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: this.options2
                    });
               }
           })
       } 
    },
    mounted () {
        let that = this;
        let data = {uid:that.userInfo.uid}
        let data2 = {
            uid: that.userInfo.uid,
            token: that.token,
            type: 'today'
        }
        that.$nextTick(()=> {
            that.getUseNums(data)
            that.getToday(data2)
            that.getInnerList(data)
            that.getCustomers(data)
        }) 
    }
}
</script>
<style lang="less" scoped>
.weui-cell{
    padding: 1.2rem 1rem !important;
    font-size: 1rem
}
section{
    margin-bottom: 55px;
    color: #333
}
.head_btn{
    padding: 4rem 0 1rem;
    background: #fff;
    .center{
        background:#FFF;
        padding:1rem 0;
        border-bottom:1px solid #eaeaea;
        padding:0;
        padding-bottom:.8rem;
        .all_nums {
            width:100%;
            display:flex;
            justify-content:space-between;
            color:#333;
            div{
                width:33.333%;
                box-sizing:border-box;
                text-align:center;
                span{
                    font-size: .9rem;
                }
                p{
                    line-height: 2rem;
                    font-size: 1rem;
                }
            }
            .vips{
                border-left:1px solid #eaeaea;
                border-right:1px solid #eaeaea;
            }
        }
    }
}
.tab_box{
    .vux-tab-item{
        font-weight: 600;
        background: transparent
    }
    .tab_content{
        display:block;
        padding:0 1rem;
        color:#333;
        background: #ffffff;
        padding-bottom: 1rem;
        .except{
            line-height:4rem;
            font-size:.9rem;
            color:#333;
            font-weight:600;
        }
        .except_nums{
            display:flex;
            flex:1;
            width:100%;
            .except_box{
                flex: 1;
                .except_title {
                    color:#999;
                    font-size:.9rem;
                }
                p{
                    line-height:2rem;
                    color:#999;
                    font-size:.9rem;
                    font-weight:600;
                }

            }
        }
    }
}
.count_box{
    margin-top:1rem;
    background:#fff;
    width:100%;
    .vux-label{
        font-weight: 600;
    }
    .weui-flex__item{
        color: #317df4
    }
}
.barChart,.lineChart{
    height: 15rem;
}
</style>
