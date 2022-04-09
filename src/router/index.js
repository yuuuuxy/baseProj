import VueRouter from 'vue-router'
import Login from '@/components/login/login.vue'
import Normal from '@/components/normal/normal.vue'

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/normal',
      component: Normal
    }
  ]
})
export {router};