import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create-note',
      name: 'create-note',
      component: () => import('../views/CreateNoteView.vue')
    },
    {
      path: '/notes',
      name: 'all-notes',
      component: () => import('../views/AllNotesView.vue')
    },
    {
      path: '/notes/:id',
      name: 'single-note',
      component: () => import('../views/NoteView.vue')
    },
    {
      path: '/notes/edit/:id',
      name: 'note',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EditNoteView.vue')
    }
  ]
})

export default router
