//页面路由跳转
import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/main'   //重定向
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('../views/Main/main.vue')
    },
    {
        path: '/personnel',
        name: 'personnel',
        component: () => import('../views/Personnel/personnel.vue')
    },
    {
        path: '/research',
        name: 'research',
        component: () => import('../views/Research/research.vue')
    },
    {
        path: '/example',
        name: 'example',
        component: () => import('../views/Example/example.vue')
    },
    {
        path: '/education',
        name: 'education',
        component: () => import('../views/Education/education.vue')
    },
    {
        path: '/facilitiesn',
        name: 'facilitiesn',
        component: () => import('../views/Facilitiesn/facilitiesn.vue')
    },
    {
        path: '/media',
        name: 'media',
        component: () => import('../views/Media/media.vue')
    },
    {
        path: '/leader',
        name: 'leader',
        component: () => import('../views/Leader/leader.vue')
    },
    {
        path: '/facilitiesn1',
        name: 'facilitiesn1',
        component: () => import('../views/Facilitiesn1/facilitiesn1.vue')
    },
    {
        path: '/facilitiesn2',
        name: 'facilitiesn2',
        component: () => import('../views/Facilitiesn1/facilitiesn2.vue')
    },
    {
        path: '/facilitiesn3',
        name: 'facilitiesn3',
        component: () => import('../views/Facilitiesn1/facilitiesn3.vue')
    },
    {
        path: '/facilitiesn4',
        name: 'facilitiesn4',
        component: () => import('../views/Facilitiesn1/facilitiesn4.vue')
    },
    {
        path: '/facilitiesn5',
        name: 'facilitiesn5',
        component: () => import('../views/Facilitiesn1/facilitiesn5.vue')
    },
]

const router = new VueRouter({
    // mode: 'history',
    routes
})

//解决相同路径跳转报错问题
//使用push的方法
const RouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return RouterPush.call(this, to).catch(err => err)
}

//使用replace的方法
const RouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(to) {
    return RouterReplace.call(this, to).catch(err => err)
}

export default router





