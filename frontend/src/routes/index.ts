import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/Home/HomePage.vue'
import ResumeContent from '../modules/DashBoard/Resume/ResumeContent.vue'
import SignIn from '../views/SignIn/SignIn.vue'
import SignUp from '../views/SignUp/SignUp.vue'
import { dashBoardGroupRouter } from '../modules/DashBoard/router'

// Dashboard Views

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomePage,
    children: [
      {
        name: 'resume-home',
        path: '',
        component: ResumeContent,
      },
    ],
  },
  {
    name: 'dashboard-init',
    path: '/painel-de-controle',
    component: HomePage,
    children: [
      {
        name: 'resume',
        path: '',
        component: ResumeContent,
      },
    ],
  },
  {
    name: 'dashboard',
    path: '/painel-de-controle',
    component: HomePage,
    children: dashBoardGroupRouter,
  },
  { name: 'login', path: '/entrar', component: SignIn },
  { name: 'register', path: '/registrar', component: SignUp },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
