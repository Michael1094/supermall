import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
// 懒加载路由
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')

// 安装路由
Vue.use(VueRouter)
// 配置路由
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
]
const router = new VueRouter({
  routes,
  //  mode: 'history'-> http://localhost:8080/category 没有'#'
  // 否则 http://localhost:8080/category#/category
  mode: 'history'
})

export default router