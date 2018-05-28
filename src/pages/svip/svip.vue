<template>
    <section>
        <div class="head_btn">
            <group>
                <cell title="收入明细" is-link  :link="{path:'/custom'}">
                    <img slot="icon" width="16" style="display:block;margin-right:5px;" src="../../assets/images/files.png">
                </cell>
            </group>
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
        <div class="advertbox">
            <img class="img-responsive" src="../../assets/images/banner1.png" alt="">
        </div>
        <div class="power-box">
            <free-dom :title="'SVIP 6大特权：'"></free-dom>
        </div>
    </section>
</template>
<script>
import {Cell,Group,Tab, TabItem,Grid, GridItem} from 'vux'
import FreeDom from 'components/freedom'
export default {
    components: {
      Cell,
      Group,
      Tab,
      TabItem,
      Grid,
      GridItem,
      FreeDom
    },
    data () {
        return {
            
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
    margin-bottom: 60px;
    color: #333
}
.head_btn{
    padding: 4rem 0 1rem;
    background: #fff;
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
.advertbox{
    padding: 0 1rem .5rem;
}
.power-box{
    background: #ffffff
}
</style>
