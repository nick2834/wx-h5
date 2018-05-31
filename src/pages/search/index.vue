<template>
<div class="page-content">
    <div class='search-box'>
        <div class='search'>
            <icon type="search"></icon>
            <input class="search_input" type="text" placeholder="" v-model="searchVal">
            <button class="search_btn" @click="toList">搜优惠券</button>
        </div>
    </div>
    <div class='search_title'>
        <span>历史搜索</span>
        <span @click='clearStorage'>清空</span>
    </div>
    <div class="search_list">
        <router-link v-for="(item,index) in searchList" :key="index" :to="{ name: 'SearchList', params: { items: item }}" class="list_item">{{item}}</router-link>
    </div>
    <div v-transfer-dom>
        <confirm v-model="IsShow"
            title="温馨提示"
            @on-cancel="onCancel"
            @on-confirm="onConfirm"
            @on-show="onShow"
            @on-hide="onHide">
            <p style="text-align:center;">确认删除所有搜索记录吗？</p>
        </confirm>
    </div>
</div>
</template>
<script>
import { XInput,Icon,Confirm,TransferDomDirective as TransferDom  } from 'vux'
import {saveSearch} from '../../../static/js/cache.js'  //引用本地存储js
import storage from 'good-storage'  //引入good-storage包
var searchData = []
export default({
  directives: {
    TransferDom
  },
  data () {
      return {
          searchVal:'',
          searchList: storage.get('_search_') || [],
          IsShow:false
      }
  },
  components: {
      XInput,
      Icon,
      Confirm  
  },
  methods: {
    onCancel(){
        this.IsShow = false
    },
    onConfirm(){
        storage.remove('_search_');
        this.searchList = storage.get('_search_') || []
    },
    onShow(){
        this.IsShow = true
    },
    onHide(){
        this.IsShow = false
    },
    toList(e){
        let that = this
        let searchVal = that.searchVal
        let searches=storage.get('_search_') || [];
        if( that.searchVal.match(/^\s*$/) == null){
            if(searches.indexOf(searchVal) === -1){
                saveSearch(searchVal)
            }
        }
        that.$router.push({path:`/searchlist/${searchVal}`})
    },
    clearStorage(e){
        this.IsShow = true
    }
  },
  mounted () {

  }
})
</script>
<style lang="less" scoped>
.page-content{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffffff;
}
.search-box{
    padding:.5rem 1rem;
    background:#f2f2f2;
    height:2.5rem;
    .search{
        height:2.5rem;
        box-sizing:border-box;
        background:#fff;
        border-radius:25px;
        line-height: 2.5rem;
        display: flex;
        justify-content: space-between;
        position: relative;
        .search_input{
            border: none;
            flex: 1;
            outline: none;
            border-top-right-radius: 25px;
            border-bottom-right-radius: 25px;
            padding-right: 10px;
        }
        .weui-icon-search{
            padding: 0 1rem !important;
            line-height: 2.5rem
        }
        .search_btn{
            position: absolute;
            right: 0;
            padding: 0 1rem;
            color:#317ef2;
            line-height: 2.5rem;
            border: none;
            border-left:1px solid #e5e5e5;
            font-weight:bold;
            font-size: 1rem;
            background: #fff;
            border-top-right-radius: 25px;
            border-bottom-right-radius: 25px;
            z-index:99
        }
    }
}
.search_title{
    margin-top:1rem;
    display:flex;
    justify-content:space-around;
    padding:0 1rem .8rem;
    border-bottom:1px solid #f0f0f0;
    span{
        flex:.5;
        line-height:1rem;
        color:#282828;
        font-weight:600;
        font-size:1rem;
        &:last-child{
            text-align:right;
            font-size:.8rem;
            color:#575757;
        }
    }
}
.search_list{
    overflow:hidden;
    padding:.5rem 1rem 0;
    .list_item{
        background:#f7f7f7;
        padding:0 .8rem;
        height:1.5rem;
        border-radius:10px;
        font-size:.8rem;
        color:#575757;
        line-height:1.5rem;
        float:left;
        margin:0 .5rem .5rem 0;
        word-break:break-all;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:1;
        overflow:hidden;
    }
}
</style>

