import { createRouter, createWebHistory } from 'vue-router'
import BoardView from '@/views/board-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BoardView
    }
  ]
})

export default router
