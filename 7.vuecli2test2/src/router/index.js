//配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

//导入组件
import Home from '../components/Home.vue'
import About from '../components/About.vue'

//1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

//2.创建路由对象

const routes = [
    //添加首页重定向
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    }, {
        path: '/about',
        component: About
    }
]

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes  //配置路由和组件之间的应用关系
})

//将router对象传入实例中
export default router