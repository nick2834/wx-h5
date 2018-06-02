<template id="cascade">
    <div class="cascade-list" :style="{height: clientWidth/3 + 'px'}">
        <div v-for="(item, index) in items" class="item" @click="selectIndex(index)" @click.prevent='selectCascade' :style="{width:item.width+'px',
            height:item.height+'px',
                left:item.left+'px',
                    bottom:item.bottom+'px',
                        'z-index':item.zIndex,
                            opacity:item.opacity
        }">
            <span :style="{'line-height':item.height+'px'}">
                <x-circle
                    :percent="list[index].percent"
                    :stroke-width="6"
                    :trail-width="5"
                    stroke-color="#ffffff"
                    trail-color="#366ec1">
                    <span style="color:#ffffff">{{ list[index].percent }}%</span>
                </x-circle>
            </span>
            <p>{{list[index].titles}}</p>
        </div> 
    </div>
</template>
<script>
import { XCircle } from 'vux'
import {getSpace} from 'api'
function copyArr(arr){
    return arr.map((e)=>{
        if(typeof e === 'object'){
            return Object.assign({},e)
        }else{
            return e
        }
    })
}
var list = [
    {content:1,titles: '省钱空间'},
    {content:2,titles: 'SVIP空间'},
    {content:3,titles: '拓展空间'}
]
export default {
    components: {
        XCircle
    },
    data () { 
        return {
            items:[],
            rlist:[],
            dir:'right',
            clientWidth: document.documentElement.clientWidth,
            list: []
        }
    },
    props:['allWidth','allHeight','curHeight','curWidth','scale'],   
    watch: {
        clientWidth(val){
            this.clientWidth = val
        }
    },
    created () {

    },
    methods: {
        selectCascade(e){
            var that = this;
            let mouseTarget = e.clientX
            if(mouseTarget > that.clientWidth/2){
                var pop = that.items.shift();
                that.items.push(pop);
            }else{
                var pop = that.items.pop();
                that.items.unshift(pop);
            }
        },
        selectIndex(){
        },
        getSpageList(){
            let that = this
            getSpace().then(res =>{
                if(res.code === 0){
                    list.map((item,index) =>{
                        item.percent = res.result[index].percentage
                    })
                    var items = [];
                    var rlist = list;
                    var level = Math.floor(list.length/2);
                    if(list.length%2==0){
                        var center = list[0];
                        rlist.push(Object.assign({},center));
                    }
                    var lefts = rlist.slice(0,level);
                    var rights = rlist.slice(level);
                    var that = this;
                    var leftGap = (this.allWidth - this.curWidth)/2;
                    var gap = leftGap/level;
                    lefts.forEach(function(e,i){
                        var obj = {};
                        obj.content = e.content;
                        obj.left = i*gap;
                        obj.zIndex = i+1;
                        obj.opacity = 1/(level+1-i);
                        obj.width = that.curWidth*Math.pow(that.scale,level-i);
                        obj.height = that.curHeight*Math.pow(that.scale,level-i);
                        obj.bottom = (that.allHeight-obj.height)/2;
                        items.push(obj);
                    });
                    rights.forEach(function(e,i){
                        var obj = {};
                        obj.content = e.content;
                        obj.width = that.curWidth*Math.pow(that.scale,i);
                        obj.height = that.curHeight*Math.pow(that.scale,i);
                        obj.left = that.allWidth - (level-i)*gap - obj.width;
                        obj.zIndex = level-i+1;
                        obj.opacity = 1/(i+1);
                        obj.bottom = (that.allHeight-obj.height)/2;
                        items.push(obj); 
                    });
                    that.items = items
                    that.list = rlist
                }
            })
        }
    },
    mounted () {
        const that = this;
        that.$nextTick(() =>{
            that.getSpageList()
            this.selectIndex()
            window.onresize = () => {
                return (() => {
                    that.clientWidth = document.documentElement.clientWidth
                })()
            }
        })
        
    }
}
</script>
<style lang="less" scoped>
.cascade-list{
    width:100%;
    height:100px;
    position:relative;
    margin:0 auto;
}
.toggle{
	position:absolute;
	padding:.5em .8em;
	top:0;
	left:0;
}
.item{
    box-sizing:border-box;
    position:absolute;
    display:block;
    color:#fff;
    text-align:center;
    transition: all .8s ease;
}
.item span{
	transition:inherit;
	font-size:20px;
}
.cascade-list .item:nth-child(2n){
  /*
	background-color:red;
	*/
}
</style>
