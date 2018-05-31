import Vue from 'vue'
import Vuex from 'vuex'
import Storage from 'good-storage'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        userInfo:Storage.session.get('userInfo'),
        token: null,
        comInfomation: Storage.session.get('detailData'),
        identityCode: Storage.session.get('identityCode') || null,
        fullname: '',
        hasLogin: Storage.session.get('hasLogin') || false
    },
    getters:{
        //获取属性的状态
        token: state => state.token = Storage.session.get('token'),
        userInfo: state => state.userInfo = Storage.session.get('userInfo'),
        comInfomation: state => state.comInfomation = Storage.session.get('detailData'),
        identityCode: state => state.identityCode = Storage.session.get('identityCode'),
        fullname: state => state.fullname,
        hasLogin: state => state.hasLogin = Storage.session.get('hasLogin')
    },
    mutations:{
        HASLOGIN:(state,data) =>{
            Storage.session.set('hasLogin',data)
            state.userInfo = data
        },
        //改变属性的状态
        SET_USER:(state, data) =>{
            Storage.session.set('userInfo',data)
            state.userInfo = data
        },
        //设置token
        SET_TOKEN:(state, data) => {
            Storage.session.set("token", data);
            state.token = data
        },
        SET_FULLNAME:(state,data) =>{
            state.fullname = data
        },
        SET_LOGOUT:(state,data) =>{
            Storage.session.remove("token")
        },
        SET_INFOMATION:(state,data) =>{
            Storage.session.set("detailData", data);
            state.comInfomation = data
        },
        SET_IDENTITYCODE:(state,data) =>{
            Storage.session.set("identityCode", data);
            state.identityCode = data
        }
    },
    actions:{}
})
export default store