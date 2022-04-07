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
    path: '/intro',
    name: 'intro',
    component: () => import('../pages/intro.vue')
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('../pages/work.vue')
  },
  {
    path: '/staff',
    name: 'staff',
    component: () => import('../pages/staff.vue')
  },
  {
    path: '/QA',
    name: 'QA',
    component: () => import('../pages/QA.vue')
  },
  {
    path: '/play_avg',
    name: 'play_avg',
    component: () => import('../pages/play_avg.vue')
  },
  {
    path: '/play_rpg',
    name: 'play_rpg',
    component: () => import('../pages/play_rpg.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
