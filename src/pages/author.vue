<template>
    <div class="page-content">
        
    </div>    
</template>
<script>
import Storage from 'good-storage'
import {authorizeLogin,wxLogin,getUserInfo} from 'api'
function getUrlParms(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
    return unescape(r[2]);
    return null;
}
let code = getUrlParms('code')
Storage.session.set('AUTH_CODE',code)
export default {
    data () {
        return {
            AUTH_CODE: ''
        }
    },
    created () {
        this.AUTH_CODE = Storage.session.get('AUTH_CODE')
        if(!getUrlParms('code')){
            this.login()
        }else{
            this.AUTH_CODE = getUrlParms("code");
            let data = {
                code: this.AUTH_CODE
            }
            this.wxLogin(data)
            Storage.session.set('AUTH_CODE',this.AUTH_CODE)
        }
    },
    methods: {
        isWeiXin() {
            let ua = window.navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                return true;
            } else {
                return false;
            }
        },
        login () {
            authorizeLogin().then(res =>{
                if(res.code === 0){
                    window.location = res.url
                }
            })
        },
        wxLogin(data) {
            wxLogin(data).then(res =>{
                if(res.code === 0){
                    this.$store.commit('SET_TOKEN',res.result.data.token)
                    this.$store.commit('SET_IDENTITYCODE',res.result.data.type)
                    let para = {
                        token:res.result.data.token
                    }
                    getUserInfo(para).then(res =>{
                        if(res.code === 0){
                            this.$store.commit('SET_USER',res.result.data)
                        }
                        console.log(res.result.data)
                    })
                    if(res.result.data.status === -1){
                        this.wxLogin(data)
                    }
                }
            })
        }
    },
    mounted () {
        
    }
}
</script>
<style lang="less" scoped>

</style>
