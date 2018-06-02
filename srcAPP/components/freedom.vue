<template id="freedom">
    <div class="freedom-box">
        <div class="weui-flex weui-flex-title weui-cell vux-tap-active weui-cell_access">
            <div class="weui-cell__hd">
                <img src="../assets/images/squera.png" width="12" style="display: block; margin-right: 5px;">
            </div>
            <div class="vux-cell-bd vux-cell-primary"><p><label class="vux-label">{{title}}</label> </p> <span class="vux-label-desc"></span></div>
            <router-link class="weui-flex__item weui-cell__ft_in-access weui-cell__ft" to="/power">特权详情</router-link>
        </div>
        <div class="weui-flex">
            <div class="weui-flex__item">
                <div class="placeholder">
                    <img class='weui-flex-img img-responsive' src='../assets/images/unselected_btn_fl.png'>
                    <div class='weui-flex-idot'>新</div>
                    <div class='weui-title'>高额返佣</div>
                </div>
            </div>
            <div class="weui-flex__item">
                <div class="placeholder">
                    <img class='weui-flex-img img-responsive' src='../assets/images/unselected_btn_jl.png'>
                    <div class='weui-flex-idot'>新</div>
                    <div class='weui-title'>两级推荐奖励</div>
                </div>
            </div>
            <div class="weui-flex__item">
                <div class="placeholder">
                    <img class='weui-flex-img img-responsive' src='../assets/images/unselected_btn_fy.png'>
                    <div class='weui-flex-idot'>新</div>
                    <div class='weui-title'>专属客户返佣</div>
                </div>
            </div>
        </div>
        <div class="weui-flex">
            <div class="weui-flex__item">
                <div class="placeholder">
                    <img class='weui-flex-img img-responsive' src='../assets/images/unselected_btn_js.png'>
                    <div class='weui-title'>极速返佣</div>
                </div>
            </div>
            <div class="weui-flex__item">
                <div class="placeholder">
                    <img class='weui-flex-img img-responsive' src='../assets/images/unselected_btn_kf.png'>
                    <div class='weui-flex-idot'>新</div>
                    <div class='weui-title'>专属客服</div>
                </div>
            </div>
            <div class="weui-flex__item">
                <div class="placeholder">
                    <img class='weui-flex-img img-responsive' src='../assets/images/unselected_btn_svip.png'>
                    <div class='weui-flex-idot'>新</div>
                    <div class='weui-title'>尊贵标识</div>
                </div>
            </div>
        </div>  
    </div>    
</template>
<script>
export default {
    props: {
        title: String
    }
}
</script>
<style lang="less" scoped>
.weui-cell {
    padding: 1.5rem 1rem;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
}
.weui-cell_access .weui-cell__ft {
    position: relative;
    text-align: right;
    color: #6D6C68;
    font-size: .8rem;
    padding-right: 1rem;
    &:after {
        content: " ";
        display: inline-block;
        height: 6px;
        width: 6px;
        border-width: 2px 2px 0 0;
        border-color: #C8C8CD;
        border-style: solid;
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: relative;
        top: -2px;
        position: absolute;
        top: 50%;
        margin-top: -4px;
        right: 2px;
    }
}
.vux-cell-primary{
    flex: 1;
}
.vux-label{
    color:#333;
    font-size:.8rem;
    font-weight:600
}
</style>
