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
    path: '/cn/home',
    name: 'home',
    component: () => import('../pages/home.vue')
  },
  {
    path: '/cn/intro',
    name: 'intro',
    component: () => import('../pages/intro.vue')
  },
  {
    path: '/cn/work',
    name: 'work',
    component: () => import('../pages/work.vue')
  },
  {
    path: '/cn/staff',
    name: 'staff',
    component: () => import('../pages/staff.vue')
  },
  {
    path: '/cn/QA',
    name: 'QA',
    component: () => import('../pages/QA.vue')
  },
  {
    path: '/cn/play_avg',
    name: 'play_avg',
    component: () => import('../pages/play_avg.vue')
  },
  {
    path: '/cn/play_rpg',
    name: 'play_rpg',
    component: () => import('../pages/play_rpg.vue')
  },
  {
    path: '/cn/shop',
    name: 'shop',
    component: () => import('../pages/shop.vue')
  },
  {
    path: '/en/home',
    name: 'home_en',
    component: () => import('../pages/home_en.vue')
  },
  {
    path: '/en/intro',
    name: 'intro_en',
    component: () => import('../pages/intro_en.vue')
  },
  {
    path: '/en/work',
    name: 'work_en',
    component: () => import('../pages/work_en.vue')
  },
  {
    path: '/en/staff',
    name: 'staff_en',
    component: () => import('../pages/staff_en.vue')
  },
  {
    path: '/en/QA',
    name: 'QA_en',
    component: () => import('../pages/QA_en.vue')
  },
  {
    path: '/en/play_avg',
    name: 'play_avg_en',
    component: () => import('../pages/play_avg_en.vue')
  },
  {
    path: '/en/play_rpg',
    name: 'play_rpg_en',
    component: () => import('../pages/play_rpg_en.vue')
  },
  {
    path: '/en/shop',
    name: 'shop_en',
    component: () => import('../pages/shop_en.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
