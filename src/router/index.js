import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/home.vue')
  },
  {
    path: '/hello',
    name: 'HelloWorld',
    component: () => import('../components/HelloWorld.vue')
  },
  {
    path: '/intro',
    name: 'intro',
    component: () => import('../pages/intro.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
