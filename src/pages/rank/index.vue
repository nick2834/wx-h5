<template>
  <div class="rank_box">
    <div class="rank_head" ref="cascade">
      <!-- <cascade-loop :cur-width="clientWidth/3" :all-width="clientWidth" :all-height="clientWidth/3"
      :cur-height="clientWidth/3" :scale="0.8"
      ></cascade-loop> -->
      <div class="circle-box">
        <x-circle
          :percent="space.percentage"
          :stroke-width="8"
          :trail-width="7"
          stroke-color="#ffffff"
          trail-color="#366ec1">
          <span style="color:#ffffff;font-size:1.2rem;">{{space.percentage}}%</span>
        </x-circle>
      </div>
      <div class="rank-message">
        <div class='msg msg_l'>
            <span>淘宝客户数</span>
            <span>{{space.taobao}}</span>
        </div>
        <div class='msg msg_r'>
            <span>智淘客户数</span>
            <span>{{space.zhitao}}</span>
        </div>
      </div>
    </div>
    <div class="rank_content">
      <div class="tab_box">
        <span v-for="(item,index) in tabItem" :class="{active:index == isActived}" @click="handelTabbox(index)">{{item}}</span>
      </div>
      <div class="rank_scroll">
        <scroller lock-x :height="scrollHeight" @on-scroll="onScroll" ref="scrollerEvent">
          <div>
            <div class="userInfo" v-if="tabDefault === 1" v-cloak>
              <div class="user user_l clearfix">
                <img v-if="userInfo" class="user_avatar img-responsive" :src="userInfo.avatar" alt="">
                <img v-else class="user_avatar img-responsive" src="../../assets/images/default.png" alt="">
                <div class="user_box">
                  <span>{{userInfo.nickname}}</span>
                  <span>{{isME.mingci}}</span>
                </div>
              </div>
              <div class="user user_r">{{isME.money}}</div>
            </div>
            <div class="userInfo" v-if="tabDefault === 2" v-cloak>
              <div class="user user_l clearfix">
                <img v-if="userInfo" class="user_avatar img-responsive" :src="userInfo.avatar" alt="">
                <img v-else class="user_avatar img-responsive" src="../../assets/images/default.png" alt="">
                <div class="user_box">
                  <span>{{userInfo.nickname}}</span>
                  <span>{{meExpend.mingci}}</span>
                </div>
              </div>
              <div class="user user_r">{{meExpend.top}}</div>
            </div>
            <div class="rank_scroll_box">
              <div class="rank_scroll_head">
                <div class="scoll_head">
                  <img class="img-responsive" src="../../assets/images/seg_bd@2x.png" alt="">
                  <span>本月榜单</span>
                </div>
                <div class="scoll_head" @click="pickerModal = true">
                  <img class="img-responsive" src="../../assets/images/btn_xl@2x.png" alt="">
                  <span>{{thisMonth}}</span>
                </div>
              </div>
              <div class="rank_scroll_list" v-if="earnListItem.length > 0">
                <div class="item_list" v-for="(item,index) in earnListItem" :key="index">
                  <img class="rank_card img-responsive" src="../../assets/images/icon_jin@2x.png" alt="" v-if="index <= 0">
                  <img class="rank_card img-responsive" src="../../assets/images/icon_yin@2x.png" alt="" v-else-if="index === 1">
                  <img class="rank_card img-responsive" src="../../assets/images/icon_tong@2x.png" alt="" v-else-if="index === 2">
                  <span class="rank_nums" v-else>{{index + 1}}</span>
                  <div class="items">
                    <img class="img-responsive" :src="item.avatar" alt="">
                    <span class="rank_username">{{item.nickname}}</span>
                    <span class="rank_numbers">{{item.money}}</span>
                    <span class="rank_numbers">{{item.top}}</span>
                  </div>
                </div>
              </div>
              <div class="rank_scroll_list" v-else>
                <place-holder :title="'本月暂无榜单'"></place-holder>
              </div>
            </div>
          </div>
          
        </scroller>

      </div>
    </div>
    <van-popup v-model="pickerModal" position="bottom">
      <van-picker
        show-toolbar
        :columns="monthArray"
        @confirm="selectPicker"
        @cancel="pickerModal = false"
      />
    </van-popup>
  </div>
</template>

<script>
  // import CascadeLoop from 'components/CascadeLoop'
  import PlaceHolder from 'components/placeholder'
  import {mapGetters} from 'vuex'
  import { Scroller,XCircle } from 'vux'
  import { Popup,Picker  } from 'vant'
  import {getSpace,getEaring,getExpand} from 'api'
  var month = new Date().getMonth();
  var newMonthArray = [];
  var monthArray=['1月榜单 01.01-01.31',
  '2月榜单 02.01-02.28',
  '3月榜单 03.01-03.31',
  '4月榜单 04.01-04.30',
  '5月榜单 05.01-05.31',
  '6月榜单 06.01-06.30',
  '7月榜单 07.01-07.31',
  '8月榜单 08.01-08.31',
  '9月榜单 09.01-09.30',
  '10月榜单 10.01-10.31',
  '11月榜单 11.01-11.30',
  '12月榜单 12.01-12.31',
]
for (let i in monthArray) {
  if (i < month) {
    newMonthArray.push(monthArray[i])
  }
} 
export default {
  name: 'rankpage',
  components: {
    PlaceHolder,
    Scroller,
    XCircle,
    'van-popup':Popup,
    'van-picker': Picker 
  },
  data () {
    return {
        tabItem:['赚钱榜/TOP10','拓客榜/TOP10'],
        clientWidth: document.body.clientWidth,
        isActived: 0,
        scrollHeight: '200px',
        clientHeight: 0,
        tabDefault: 1,
        monthArray: newMonthArray,
        thisMonth: '',
        pickerModal: false,
        space: [],
        expending:{},
        listItem:[],
        earnListItem:[],
        thisMonth:"",
        meExpend:[],
        isME:{},
        meExpend:{},
        space: {}
    }
  },
  computed:{
    ...mapGetters(['userInfo','identityCode','token'])
  },
  watch: {
    clientWidth(val){
      this.clientWidth = val
    }
  },
  methods: {
    getSpaceList(){
      getSpace().then(res =>{
        if(res.code === 0){
          this.space = res.result[2]
        }
      })
    },
    getEaringList(data){
      getEaring(data).then(res =>{
        let that = this
        let listItem = []
        if(res.code === 0){
          let list = res.result.list
          that.earnListItem = res.result.list
          that.earningList = res.result
          that.isME = res.result.me
        }
      })
    },
    getExpandList(data){
      getExpand(data).then(res =>{
        let that = this
        let listItem = []
        if(res.code === 0){
          let list = res.result.list
          that.expending = res.result
          that.earnListItem = res.result.list
          that.meExpend = res.result.me
        }
      })
    },
    handelTabbox(index){
      this.isActived = index
      this.tabDefault = index + 1
      this.thisMonth = this.monthArray[month-1]
      this.$refs.scrollerEvent.reset({top: 0})
      let data = {
        token: this.token,
        date: month,
        uid: this.userInfo.uid
      }
      if(index === 0){
        this.getEaringList(data)
      }else{
        this.getExpandList(data)
      }
    },
    onScroll (pos) {
      this.scrollTop = pos.top
    },
    selectPicker(value){
      this.pickerModal = false
      this.thisMonth = value
      let index = monthArray.indexOf(value)
      let data = {
        token: this.token,
        date: index + 1,
        uid: this.userInfo.uid
      } 
      console.log(value)

      if(this.tabDefault === 1){
        this.getEaringList(data)
      }else{
        this.getExpandList(data)
      }
    }
  },
  mounted () {
    const that = this;
    that.$nextTick(() => {
      window.onresize = () => {
        return (() => {
            window.screenWidth = document.body.clientWidth
            window.screenHeight = document.body.screenHeight
            that.clientWidth = window.screenWidth
            that.clientHeight = window.screenHeight
        })()
      }     
      that.thisMonth = that.monthArray[month - 1] 
      that.scrollHeight = (that.clientHeight  - that.$refs.cascade.offsetHeight - 99) + 'px'
      that.$refs.scrollerEvent.reset({top: 0})
      let data = {
        token: this.token,
        date: month,
        uid: this.userInfo.uid
      }
      that.getEaringList(data)
      that.getSpaceList()
    })
    
  }
}
</script>

<style lang="less" scoped>
.rank_head{
  height: 12rem;
  background: #317df3;
  display: flex;
  align-items: center;
  position: relative;
  .circle-box{
    width: 8rem;
    height: 8rem;
    margin: 0 auto;
  }
  .rank-message{
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    .msg{
      text-align: center;
      flex: 1;
      color: #ffffff;
      font-size: 1.1rem;
      padding-top: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1rem;
      span{
        line-height: 2;
      }
    }
    .msg_l{
      padding-right: 1rem;
    }
    .msg_r{
      padding-left: 1rem;
    }
  }
}
.tab_box{
  display: flex;
  justify-content: space-between;
  line-height: 44px;
  background: #ffffff;
  box-sizing: border-box;
  border-bottom: 1px solid #f3f3f3;
  span{
    flex: 1;
    text-align: center;
    &:first-child{
      border-right: 1px solid #f3f3f3
    }
    &.active{
      color: #317df3;
      font-weight: 600;
      border-bottom: 2px solid #317df3 
    }
  }
}
.rank_content{
  position: absolute;
  top: 12rem;
  bottom: 53px;
  background: #ffffff;
  left: 0;
  right: 0;
  width: 100%;
}
.rank_scroll{
  overflow: hidden;
  .userInfo{
    background:#f4f4f4;
    padding:0 1rem;
    display:flex;
    justify-content:space-around;
    line-height: 4rem;
    .user{
      img{
        width: 3.5rem;
        height: 3.5rem;
        margin: .25rem 0 0 .25rem;
        float: left;
        border-radius: 50%;
      }
    }
    .user_l{
      flex: .7;
      .user_box{
        margin-left: 4rem;
        padding: .5rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        span{
          line-height: 1.75rem;
          &:first-child{
            white-space:nowrap;
            text-overflow:ellipsis;
            -o-text-overflow:ellipsis;
            overflow:hidden;
          }
        }
      }
    }
    .user_r{
      flex: .3;
      text-align: right;
      display: block;
      color:#f36c29;
      font-size:1rem;
    }
  }
}
.rank_scroll_box{
  .rank_scroll_head{
    padding-top:1rem;
    padding:1rem;
    display:flex;
    justify-content:space-around;
    border-bottom:1px solid #f7f7f7;
    .scoll_head{
      flex: 1;
      display: flex;
      align-items: center;
      &:last-child{
        justify-content: flex-end;
        img{
          width: .5rem;
        }
      }
      img{
        width: 1rem;
        margin-right: .5rem;
      }
    }
  }
  .item_list{
    padding-left: 1rem;
    line-height:4rem;
    height:4rem;
    display:flex;
    position:relative;
    .rank_card{
      height:2rem;
      line-height:inherit;
      margin-top:1rem;
      margin-right:1rem;
    }
    .rank_nums{
      width:1.5rem;
      margin-right:1rem;
      line-height:inherit;
      display:inline-block;
      text-align:center;
      font-weight:600;
      color:#9b9b9b;
      font-style:italic;
      font-size: 1.2rem;
    }
    .items{
      flex: 1;
      margin-left: .5rem;
      line-height: 4rem;
      border-bottom: 1px solid #ebebeb;
      display: -ms-flexbox;
      display: flex;
      img{
        width: 3rem;
        height: 3rem;
        margin: .5rem;
        border-radius: 50%;
      }
      .rank_username{
        width: 12rem;
        white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow:hidden;
        color:#202020;
      }
      .rank_numbers{
        color: #f36c29;
        font-size: 1rem;
        position: absolute;
        right: 1rem;
      }
    }
  }
}
</style>