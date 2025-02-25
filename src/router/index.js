import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import sbuPage from '../views/sbuPage.vue'
import ProfesionalPge from '../views/ProfesionalPge.vue'
import pageLAAP from '@/views/pageLAAP.vue'
import pageISO from '@/views/pageISO.vue'
import Nextsertiv from '@/views/Nextsertiv.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sbuPage',
      name: 'sbuPage',
      component: sbuPage,
    },
    {
      path: '/profesionalPage',
      name: 'ProfesionalPage',
      component: ProfesionalPge,
    },
    {
      path: '/pageLAAP',
      name: 'PageLAAP',
      component: pageLAAP,
    },
    {
      path: '/pageISO',
      name: 'PageISO',
      component: pageISO,
    },
    {
      path: '/nextsertiv',
      name: 'Nextsertiv',
      component: Nextsertiv,
    },
  ],
})

export default router
