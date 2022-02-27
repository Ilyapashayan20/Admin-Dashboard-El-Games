import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AdminPanel from '../views/AdminPanel.vue'
import { projectAuth } from '../firebase/config'


const requireAuth = (to,from,next) =>{
 let user = projectAuth.currentUser
  if(!user){
    next({ name: 'Home'} )
  }
  else{
    next()
  }

} 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin-panel',
    name: 'Admin-Panel',
    component: AdminPanel,
    beforeEnter: requireAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
