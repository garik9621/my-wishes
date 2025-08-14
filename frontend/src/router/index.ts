import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import Wishes from '../pages/Wishes.vue'
import Account from '../pages/Account.vue'

const routes: RouteRecordRaw[] = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home 
  },
  { 
    path: '/wishes', 
    name: 'Wishes', 
    component: Wishes 
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
