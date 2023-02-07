import { createRouter, createWebHistory } from 'vue-router'
import TheAdmin from '@/views/TheAdmin.vue'
import TheDiscussions from '@/pages/TheDiscussions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TheAdmin',
      component: TheAdmin,
      children: [
        {
          path: '/',
          name: 'TheDiscussions',
          component: TheDiscussions,
        }
      ]
    }
  ]
})

export default router
