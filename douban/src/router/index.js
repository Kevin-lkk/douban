import Vue from 'vue'
import Router from 'vue-router'
//1 引用
import Login from '../components/pages/login'
import Register from '../components/pages/register'
import Index from '../components/pages/index'
import Waiguo from '../components/pages/waiguo'
import Dianying from '../components/pages/dianying'
import Tushu from '../components/pages/tushu'
import Guangbo from '../components/pages/guangbo'
import Xiaozu from '../components/pages/xiaozu'
import Hot from '../components/pages/hot'
import Sou from '../components/pages/sou'
import Love from '../components/love'





Vue.use(Router)
//2 再使用
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/hot',
      name: 'Hot',
      component: Hot
    },
    {
      path: '/waiguo',
      name: 'Waiguo',
      component: Waiguo
    },
    {
      path: '/dianying',
      name: 'Dianying',
      component: Dianying
    },
    {
      path: '/tushu',
      name: 'Tushu',
      component: Tushu
    },
    {
      path: '/guangbo',
      name: 'Guangbo',
      component: Guangbo
    },
    {
      path: '/xiaozu',
      name: 'Xiaozu',
      component: Xiaozu
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/sou',
      name: 'Sou',
      component: Sou
    },
    {
      path: '/love',
      name: 'Love',
      component: Love
    }
  ]
})
