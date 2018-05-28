import Vue from 'vue'
import axios from 'axios'
import Storage from 'good-storage'
import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)
axios.interceptors.request.use(config =>{
    Vue.$vux.loading.show({
        text: 'Loading'
    })
    // let token = Storage.session.get('token')
    // if (token) {
    //     config.params['token'] = token;
    // }    
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// // 添加响应拦截器
axios.interceptors.response.use(response => {
    Vue.$vux.loading.hide()
    return response
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

//授权接口
export const authorizeLogin = () => {
    return axios.get(process.env.API_HOST + `api/wx/loginUrl`).then(res => res.data)
}
//授权登录接口
export const wxLogin = (params) => {
    return axios.get(process.env.API_HOST + `api/wx/login`,{params:params}).then(res => res.data)
}
//获取用户信息接口
export const getUserInfo = (params) => {
    return axios.get(process.env.API_HOST + `api/users/index`,{params:params}).then(res => res.data)
}


//首页指引接口
export const guidelist = () => {
    return axios.get(process.env.API_HOST + `api/Novice/index`).then(res => res.data)
}
//智淘快报接口
export const dynamicList = () => {
    return axios.get(process.env.API_HOST + `api/dynamic/index`).then(res => res.data)
}
//首页tab列表
export const categoryList = () => {
    return axios.get(process.env.API_HOST + `api/goods/category`).then(res => res.data)
}
//首页商品列表
export const indexShopList = (params) => {
    return axios.get(process.env.API_HOST + `api/goods/lists`,{params:params}).then(res => res.data)
}
//淘宝客转链
export const tbkConvert = (data) =>{
    return axios.post(process.env.API_HOST + 'api/tbk/convert',data).then(res =>res.data)
}
//商品详情
export const getDetails = (params) =>{
    return axios.get(process.env.API_HOST + 'api/goods/info',{params:params}).then(res =>res.data)
}
//商品详情图
export const goodsImgDetails = (params) => {
    return axios.get(process.env.API_HOST + `api/goods/details`,{params:params}).then(res => res.data)
}
//新手指引列表
export const guideList = (params) => {
    return axios.get(process.env.API_HOST + `api/Novice/lists`,{params:params}).then(res => res.data)
}
//新手指引详情页
export const guideDetail = (data) =>{
    return axios.post(process.env.API_HOST + 'api/Novice/info',data).then(res =>res.data)
}
//更新播放次数
export const playNums = (params) =>{
    return axios.get(process.env.API_HOST + 'api/Novice/addplayback',{params:params}).then(res =>res.data)
}
//更新分享次数
export const shareNums = (params) =>{
    return axios.get(process.env.API_HOST + 'api/Novice/addshare',{params:params}).then(res =>res.data)
}


//用户注册
export const Register = (data) =>{
    return axios.post(process.env.API_HOST + 'api/users/register',data).then(res =>res.data)
}
//获取验证码
export const setfullname = (data) =>{
    return axios.post(process.env.API_HOST + 'api/users/setname',data).then(res =>res.data)
}
//更新用户姓名
export const IdentityCode = (data) =>{
    return axios.post(process.env.API_HOST + 'api/sms/getcode',data).then(res =>res.data)
}
//搜索结果
export const getSearch = (data) =>{
    return axios.post(process.env.API_HOST + 'api/search',data).then(res =>res.data)
}

//空间数值
export const getSpace = (params) =>{
    return axios.get(process.env.API_HOST + 'api/space/index',{params:params}).then(res =>res.data)
}
//赚钱榜
export const getEaring = (data) =>{
    return axios.post(process.env.API_HOST + 'api/space/earning',data).then(res =>res.data)
}
//拓客榜
export const getExpand = (data) =>{
    return axios.post(process.env.API_HOST + 'api/space/expand',data).then(res =>res.data)
}