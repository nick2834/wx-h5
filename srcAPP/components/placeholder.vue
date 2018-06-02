<template id="placeholder">
    <div class="placeholder-box">
        <img class="img-responsive" src="../assets/images/placeholder.png" alt="">   
        <span>{{title}}</span>   
    </div>    
</template>
<script>
export default {
    props: {
        title:{
            type: String,
            default: '当前没有商品'
        }
    }
}
</script>
<style lang="less" scoped>
.placeholder-box{
    text-align: center;
    color: #333;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 5rem;
    span{
        line-height: 3rem;
        font-size: 1.2rem;
        color: #d0d0d0;
    }
}
</style>
