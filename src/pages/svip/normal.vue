<template>
    <section>
        <div class="head_btn">
            <router-link to="/register?type=svip">
                <img class="img-responsive" src="../../assets/images/jiaru.png" alt="">
            </router-link>
        </div>
        <ul class="section">
            <li>
                <div class="title"><img class="img-responsive"  src="../../assets/images/kk1.png" alt="">专享高额返佣</div>
                <div class="desc-box">
                    <div class="desc desc-l">
                        <div class="desc-title">
                            <span>省20</span>元
                        </div>
                        <div class="desc-info">
                            假设普通vip购买了商品A省了20元
                        </div>
                    </div>
                    <div class="desc desc-r">
                        <div class="desc-title"><span>省30</span>元</div>
                        <div class="desc-info">如果你是 SVIP ，你同样购买商品A则可省30元</div>
                    </div>
                </div>
            </li>
            <li>
                <div class="title"><img class="img-responsive"  src="../../assets/images/kk2.png" alt="">两级推荐奖励</div>
                <div class="desc-box">
                    <div class="desc desc-l">
                        <div class="desc-title">
                            <span>赚100</span>元
                        </div>
                        <div class="desc-info">
                            推荐客户成为SVIP你可赚100元
                        </div>
                    </div>
                    <div class="desc desc-r">
                        <div class="desc-title"><span>赚20</span>元</div>
                        <div class="desc-info">下级推荐客户成为SVIP你可赚20元</div>
                    </div>
                </div>
                
            </li>
            <li>
                <div class="title"><img class="img-responsive"  src="../../assets/images/kk3.png" alt="">专属客户返佣</div>
                <div class="desc-box">
                    <div class="desc desc-l">
                        <div class="desc-title">
                            <span>赚10</span>元
                        </div>
                        <div class="desc-info">
                            你的一级客户购买商品A省了20元，你可赚10元
                        </div>
                    </div>
                    <div class="desc desc-r">
                        <div class="desc-title"><span>赚2.5</span>元</div>
                        <div class="desc-info">你的二级客户购买商品A省了20元，你可赚2.5元</div>
                    </div>
                </div>
                
            </li>
        </ul>
        <router-link class="bottom-btn" to="/register?type=svip">
            <img class="img-responsive" src="../../assets/images/liji.png" alt="">
        </router-link>
    </section>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['userInfo','identityCode'])
    },
    mounted () {
        console.log(this.identityCode)
    }
}
</script>
<style lang="less" scoped>
section{
    margin-bottom: 60px;
    color: #333
}
.head_btn{
    padding: 44px 1.5rem 1rem;
    background: #fff;
}
.section{
    margin-top: 10px;
    margin: 10px 1rem;
    li{
        min-height: 150px;
        background: #fff;
        margin-bottom: 10px;
        border-radius: 10px;
    }
    .title{
        width:100%;
        height:3rem;
        border-bottom:1px solid #F3F3F3;
        text-align:center;
        line-height:3rem;
        font-size:.8rem;
        position:relative;
        font-weight:600;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 1.5rem;
            height: auto;
            margin-right: 5px;
        }
    }
    .desc-box{
        display: flex;
        justify-content: space-between;
        padding-bottom: 30px;
        .desc{
            flex: 1;
            min-height: 100px;
            text-align: center;
        }
        .desc-title{
            color:#078AE9;
            font-size:.6rem;
            line-height:4rem;
            margin-top:1rem;
            span{
                font-size: 1.5rem
            }
        }
        .desc-info{
            width:80%;
            margin:0 auto;
            line-height:1.5rem;
            font-size:.6rem;
            color:#848484;
        }
    }
}
.bottom-btn{
    img{
        width: 60%;
        margin:0 auto;
        margin-top:1rem;
        padding-bottom:1rem;
    }
}
</style>
