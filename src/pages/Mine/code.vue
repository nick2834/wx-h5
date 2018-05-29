<template>
  <section class="page-content">
    <div class="card_content" :style="{'height':scrollHeight}" ref="cardbox">
        <div class="filter-box" :style="{'backgroundImage':'url(' + imgUrl + ')'}"></div>
        <!-- <img 
            ref="codeImg"
            @touchstart='touchStart'   
            @touchmove='touchMove'   
            @touchend='touchEnd' 
            class="img-responsive" 
            :src="imgUrl" alt="" @click="getPreview"> -->
            <img 
            ref="codeImg"
            class="img-responsive" 
            :src="imgUrl" alt="" @click="getPreview">
    </div>
    <div class="card_footer" ref="cardft">
        <scroller lock-y :scrollbar-x=false>
            <div class="swiperFooter" :style="{'width':(imgList.length)*5 + 'rem'}">
                <div class="footer-item" :class="{actived:activeIndex == index}" v-for="(item,index) in imgList" :key="index" :dataid='index' ref="swiperFooter" @click="tabClick(index)" @click.prevent="handleChange(item)">
                    <img class="default-item img-responsive" :src="item.icon" alt="">
                    <x-icon class="iconfont" type="ios-checkmark" size="30"></x-icon>
                </div>
            </div>
        </scroller>
    </div>
  </section>
</template>
<script>
import {mapGetters} from 'vuex'
import {ImagePreview} from 'vant'
import { Scroller  } from 'vux'
import { setTimeout } from 'timers';
import Storage from 'good-storage'
import {qrcodelist,poster} from 'api'
var touchDot = 0;//触摸时的原点
var time = 0;//  时间记录，用于滑动时且时间小于1s则执行左右滑动
var interval = "";// 记录/清理 时间记录
var tmpFlag = true;// 判断左右滑动超出菜单最大值时不再执行滑动事件
export default{
    components: {
       Scroller,
       ImagePreview 
    },
    computed:{
        ...mapGetters(['userInfo','identityCode','token'])
    },
    data () {
        return {
            imgList:[],
            defaultCode: '01',
            imgUrl: '',
            activeIndex: 0,
            clientHeight: 0,
            scrollHeight: 0,
            touchCode: 0,
            startX:0,//开始触摸的位置  
            moveX:0,//滑动时的位置  
            endX:0,//结束触摸的位置  
            disX:0,//移动距离 
        }
    },
    methods: {
        getList(data){
            qrcodelist(data).then(res =>{
                if(res.code === 0){
                    this.imgList = res.result.data
                }
            })
        },
        getPoster(data){
            poster(data).then(res =>{
                let posterArr = []
                if(res.code === 0){
                    var o = new Object()
                    o.codeId = data.code
                    o.imgUrl = res.result.pic_url
                    posterArr.push(o)
                    Storage.session.set('POSTER',posterArr)
                    this.imgUrl = res.result.pic_url
                }
            })
        },
        getPreview(){
            ImagePreview([this.imgUrl])
        },
        tabClick(index){
            this.activeIndex = index
        },
        handleChange(item){
            this.defaultCode = item.code
            let data = {
                code: item.code,
                token: this.token
            }
            this.getPoster(data)
        },
        touchStart(e){
            e = e || event;  
            e.preventDefault(); 
            if(e.touches.length == 1) {    //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕  
                touchDot = e.touches[0].clientX; // 记录开始位置  
                interval = setInterval(function () {
                    time++;
                }, 100);
            } 
            console.log(touchDot)
        },
        //移动触摸事件
        touchMove(e){
            const that = this
            e = e || event;  
            e.preventDefault();     
            if(e.touches.length == 1) {    //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕  
                var touchMove = e.touches[0].clientX; // 记录开始位置  
                //左滑动
                if(touchMove - touchDot <= -40 && time < 10){
                    if (tmpFlag){
                        let touchCode = that.touchCode
                        tmpFlag = false;
                        console.log('向左滑动')
                    }
                }
                //右滑动
                if(touchMove - touchDot >= 40 && time < 10){
                    if (tmpFlag){
                        let touchCode = that.touchCode
                        tmpFlag = false;
                        console.log('向右滑动')
                    }
                }
            } 
        },
        touchEnd(e){
            e = e || event;  
            e.preventDefault();  
            clearInterval(interval); // 清除setInterval
            time = 0;
            tmpFlag = true;
        },
    },
    mounted () {
       const that = this
       that.$nextTick(() => {
           that.clientHeight = `${document.documentElement.clientHeight}`
           that.scrollHeight = (that.clientHeight - that.$refs.cardft.offsetHeight) + 'px'
           let data = {token:that.token}
           let data2 = {token:that.token,code:that.defaultCode}
           that.getList(data)
           that.getPoster(data2)
       })
    }
}
</script>
<style lang="less" scoped>
.page-content{
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .card_content{
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        .filter-box{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index:-1;
            filter:blur(20px);
            background-position: center;
            background-size: 100%;
            background-repeat: no-repeat;
        }
        img{
            width: 80%;
            margin: 0 auto;
            border-radius: 15px;
        }
    }
    .card_footer{
        height: 6rem;
        position: absolute;
        bottom: 0;
        width: 100%;
        background: #ffffff;
        .swiperFooter{
            height: 6rem;
            position: relative;
        }
        .footer-item {
            width: 4rem;
            height: 6rem;
            display:inline-block;
            margin-left: 1rem;
            text-align: center;
            line-height: 6rem;
            position: relative;
            &.actived{
                .iconfont{
                    display: block;
                    fill: #317df3
                }
            }
            .iconfont{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 2rem;
                height: 2rem;
                color: #fff;
                font-size: 1.5rem;
                display: none;
            }
        }
        .default-item{
            width: 4rem;
            height: 4rem;
            margin: 1rem auto;
            border-radius: 10px;
        }
    }
}
</style>
