<template>
    <section>
        <div class="head_btn">
            <div class='center partner_center'>
                <div class='all_nums'>
                <div class='alls'>
                    <span>客户数</span>
                    <p class='gold_col'>0</p>
                </div>
                <div class='vips'>
                    <span>VIP 数</span>
                    <p class='gold_col'>0</p>
                </div>
                <div class='svips'>
                    <span>SVIP 数</span>
                    <p class='gold_col'>0</p>
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
                <p class="except"> 成交预估收入: ￥0.00 </p>
                <div class="except_nums">
                    <div class="except_box">
                        <div class="except_title">新增客户数</div>
                        <p>0</p>
                    </div>
                    <div class="except_box">
                        <div class="except_title">付款笔数</div>
                        <p>0</p>
                    </div>
                    <div class="except_box">
                        <div class="except_title">新增SVIP数</div>
                        <p>0</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="count_box incomes">
            <div class="weui-flex weui-flex-title weui-cell vux-tap-active weui-cell_access">
                <div class="vux-cell-bd vux-cell-primary"><p><label class="vux-label">收入统计</label> </p> <span class="vux-label-desc"></span></div>
                <router-link to="/income" class="weui-flex__item weui-cell__ft_in-access weui-cell__ft">收入统计</router-link>
            </div>
            <div>
                <v-chart ref="demo" :data="data">
                    <v-scale x field="月份" />
                    <v-scale y field="月均降雨量" />
                    <v-bar series-field="name" adjust="stack" />
                    <v-tooltip show-value-in-legend />
                </v-chart>
            </div>
        </div>
        <div class="count_box customs">
            <div class="weui-flex weui-flex-title weui-cell vux-tap-active weui-cell_access">
                <div class="vux-cell-bd vux-cell-primary"><p><label class="vux-label">客户统计</label> </p> <span class="vux-label-desc"></span></div>
                <router-link to="/custom" class="weui-flex__item weui-cell__ft_in-access weui-cell__ft">客户统计</router-link>
            </div>
            <div>
                <v-chart :data="data2">
                    <v-line series-field="type" />
                </v-chart>
            </div>
        </div>
    </section>
</template>
<script>
import {Cell,Group,Tab, TabItem, VChart, VLine, VArea, VTooltip, VLegend, VBar, VScale,VAxis} from 'vux'
import data2 from './lint-color.json'
export default {
    components: {
        Cell,
        Group,
        Tab,
        TabItem,
        VChart,
        VLine,
        VArea,
        VTooltip,
        VLegend,
        VBar,
        VScale,
        VAxis
    },
    data () {
        return {
            data: [
                { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
                { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
                { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
                { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
                { name: 'London', 月份: 'May.', 月均降雨量: 47 },
                { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
                { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
                { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
                { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
                { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
                { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
                { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
                { name: 'Berlin', 月份: 'May.', 月均降雨量: 52.6 },
                { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
                { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
                { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 }
            ],
            data2
        }
    },
    methods: {
       handelClick(item){
           console.log(item)
       } 
    },
    mounted () {
        
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
                    font-size: .8rem;
                }
                p{
                    line-height: 2rem;
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
            font-size:.8rem;
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
                    font-size:.8rem;
                }
                p{
                    line-height:2rem;
                    color:#999;
                    font-size:.8rem;
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
</style>
