<template>
    <div class="page-content">
        <div class="page-wrap">
            <span class="title">扫描下方二维码</span>
            <span class="text">关注公众号联系我们，</span>
            <span class="text">发送文字或语音消息留言，</span>
            <span class="text">我们会及时回复你的问题。</span>
            <div class="code-box">
                <img class="img-responsive" src="../../assets/images/code.png" alt="">
                <div>长按识别二维码，关注智淘</div>
            </div>
            <div class="contact">
                <i class="iconfont icon-dianhua">15620517253</i>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.page-content{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #091732;
    .page-wrap{
        padding: 3rem;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        .title{
            line-height: 5rem;
            font-size: 2rem;
        }
        .text{
            font-size: 1rem;
            line-height: 2rem
        }
        .code-box{
            margin-top: 5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            img{  
                width: 10rem;
            }
            div{
                line-height: 2rem;
                font-size: .8rem;
            }
        }
        .contact{
            position: absolute;
            bottom: 3rem;
            text-align: center;
        }
    }
}
</style>
