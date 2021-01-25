//配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

//导入组件
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')

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
        component: Home,
        children: [
            {
                path: '',
                redirect: 'news'
            },
            {
                path: 'news',   //子路由不需要加/
                component: HomeNews
            }, {
                path: 'message',
                component: HomeMessage
            }
        ]
    }, {
        path: '/about',
        component: About
    }, {
        path: '/user/:id',
        component: User
    }
]

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes  //配置路由和组件之间的应用关系
})

//将router对象传入实例中
export default router