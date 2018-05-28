<template>
  <div class="weui-panel__bd">
    <div v-for="(item,index) in list" :key="item.id" class="itemList">
      <router-link class="weui-media-box weui-media-box_appmsg list"  :to="{name: 'GuideDetail', params: {id: item.id}}">
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title" v-html="item.title"></h4>
          <p class="weui-media-box__desc" v-html="item.info"></p>
        </div>
        <img  v-if="item.type == 'image'" class="img-responsive" :src="item.imagesrc" alt="">
        <img v-else class="img-responsive" :src="item.imagesrc" alt="">
      </router-link>
      <x-button mini  class="share_btn iconfont icon-fenxiang" @click.native="handleChage(item)">{{item.share}}</x-button>
    </div>
    <div class="itemList">
      <router-link class="weui-media-box weui-media-box_appmsg list"  to="/">
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">常见问题</h4>
          <p class="weui-media-box__desc">你在智淘遇到的问题，在这都可以找到答案哦</p>
        </div>
        <img class="img-responsive" src="../../assets/images/questions.png" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
  import { guideList,shareNums} from 'api'
  import {XButton } from 'vux'
  export default {
    name: 'guideList',
    data () {
      return {
        list: []
      }
    },
    components: {
      XButton
    },
    methods: {
      getList(){
        guideList().then(res =>{
          if(res.code === 0) {
            this.list = res.result
          }
        })
      },
      changeShareNums(data){
        shareNums(data).then(res =>{
          console.log(res)
        })
      },
      handleChage(item){
        let data = {
          id: item.id
        }
        this.changeShareNums(data)
        this.getList()
      }
    },
    mounted () {
      this.$nextTick(() =>{
        this.getList()
      })
    },
  }
</script>


<style lang="less" scoped>
.itemList{
  border-bottom: 1px solid #E9E8E8;
  padding: 1rem !important;
  &:last-child{
    border: none
  }
}
.list{
  padding: 0;
  position: relative;
  display: flex;
  height: 7rem;
  .weui-media-box__bd{
    flex: .7
  }
  img{
    flex: .3;
    width: 8rem;
    height: 6rem;
  }
}
.share_btn{
  background: transparent;
  padding: 0 10px;
  &::after{
    border: none
  }
}
.weui-media-box__title{
  color: #323232;
  font-weight: 600;
  line-height: 3rem
}
.weui-media-box__desc{
  color:#333;
  font-size:.8rem;
  margin-bottom:1rem;
  line-height: 2rem
}
</style>