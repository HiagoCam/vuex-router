import Vue from 'vue'
import VueRouter from 'vue-router'
import Viewmain from '../views/View-main'
import Viewinfracoes from '../views/View-infracoes'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Viewmain
  },
  {
    path: '/infracoes',
    name: 'Infracoes',
    component: Viewinfracoes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
