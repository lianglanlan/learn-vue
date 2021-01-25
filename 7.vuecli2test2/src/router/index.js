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
const Profile = () => import('../components/Profile.vue')

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
        meta: {
            title: '首页'
        },
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
        meta: {
            title: '关于'
        },
        component: About
    }, {
        path: '/user/:id',
        meta: {
            title: '用户'
        },
        component: User
    }, {
        path: '/profile',
        meta: {
            title: '个人中心'
        },
        component: Profile
    }
]

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes  //配置路由和组件之间的应用关系
})

router.beforeEach((to, from, next) => {
    //从from跳到to
    document.title = to.matched[0].meta.title
    next()
})

//将router对象传入实例中
export default router