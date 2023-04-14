import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
// import ContactView from '../views/ContactView.vue'
import ResumeView from '../views/ResumeView.vue'
// import ProjectsView from '../views/ProjectsView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumeView
  },
  {
    path: '/contact',
    name: 'contact'
  },
  {
    path: '/projects',
    name: 'projects'
  },
  {
    path: '/testimonials',
    name: 'testimonials'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
