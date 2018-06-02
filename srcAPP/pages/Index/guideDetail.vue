<template>
  <div>
    <div v-if="details.type == 'image'">
      <img v-for="(item,index) in details.listsrc" class="img-responsive" :src="item" alt="">
    </div>
    <div v-else>
      <video class="video_container" :src="details.videosrc" autoplay loop></video>
      <div style="overflow:hidden">
        <scroller lock-x height="-200" @on-scroll="onScroll" ref="scrollerEvent">
          <div class="other_container">
            <div class="control_box">
              <i class="iconfont icon-play">{{details.playback}}</i>
              <i class="iconfont icon-fenxiang"></i>
            </div>
            <div class="description">
              <h4 class="title">{{details.title}}</h4>
              <div class="desc" v-html="details.info"></div>
            </div>
            <div class="more">
              <h4 class="title">更多指引</h4>
              <div class="list clearfix">
                <!-- <router-link v-for="(item,index) in otherList" :key="index" class="items" :to="'/guide/'+ item.id" @click.native="handleChange(item)" tag="div"> -->
                <div v-for="(item,index) in otherList" :key="index" class="items" @click="handleChange(item)" tag="div">
                  <img class="img-responsive" :src="item.imagesrc" alt="">
                  <p>{{item.title}}</p>
                </div>
              </div>
            </div>
          </div>
        </scroller>
      </div>
    </div>
  </div>
</template>

<script>
import {guideDetail,playNums} from 'api'
import {Scroller} from 'vux'
export default {
  name: 'guideDetail',
  data () {
    return {
      details:{},
      otherList: []
    }
  },
  components: {
    Scroller
  },
  methods: {
    getDetails(data){
      guideDetail(data).then(res =>{
        if(res.code === 0){
          this.details = res.result.one[0]
          this.otherList = res.result.list
        }
      })
    },
    getNums(data){
      playNums(data).then(res=>{
        console.log(res)
      })
    },
    onScroll(){

    },
    handleChange(item){
      let data = {
        id: item.id
      }
      this.getDetails(data)
    }
  },
  mounted () {
    this.$nextTick(() =>{
      let data = {
        id: this.$route.params.id
      }
      this.getNums(data)
      this.getDetails(data)
    })
  },
  activated () {
    let data = {
      id: this.$route.params.id
    }
    this.getDetails(data)
  }
}
</script>


<style lang="less" scoped>
.video_container{
  height: 200px;
  width: 100%;
  background: #31a8e2;
}
.other_container{
  width:100%;
  margin:0 auto;
  padding:0 1rem;
  box-sizing:border-box;
  display:block;
  .control_box{
    width:100%;
    overflow:hidden;
    position:relative;
    height:3rem;
    line-height: 3rem;
    display: flex;
    justify-content: space-between;
    .iconfont{
      font-size: 1.2rem
    }
  }
}
.description{
  padding-bottom: 1rem;
  border-bottom: 1px solid #E9E8E8;
  .title{
    font-weight:bold;
    font-size:1rem;
    line-height:3rem;
    color:#343434;
  }
  .desc{
    font-size:.8rem;
    color:#575757;
    line-height:1.5rem;
    white-space: pre-wrap;
  }
}
.more{
  .title{
    font-weight:bold;
    font-size:1rem;
    line-height:3rem;
    color:#343434;
  }
  .list{
    .items{
      float: left;
      margin-right: 1rem;
      &:last-child{
        margin-right: 0
      }
      img{
        height: 80px;
      }
      p{
        line-height: 2rem;
        font-size: .8rem;
        text-align: center
      }
    }
  }
}
</style>