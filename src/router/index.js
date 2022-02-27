import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AdminPanel from '../views/AdminPanel.vue'
import { projectAuth } from '../firebase/config'
import Dashboard from '../components/Dashboard.vue'
import Games from '../components/Games.vue'
import Blog from '../components/Blog.vue'



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
    beforeEnter: requireAuth,
    children:[
      {
        path: '/dashboard',
        name: 'Dashboard',
      component: Dashboard,
      },
      {
        path: '/Games',
        name: 'Games',
      component: Games,
      },
      {
        path: '/blog',
        name: 'Blog',
      component: Blog,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
