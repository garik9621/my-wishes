import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Account from '../views/Account.vue'

const routes: RouteRecordRaw[] = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home 
  },
  { 
    path: '/account', 
    name: 'Account', 
    component: Account 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
