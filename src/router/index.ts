import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AuthorView from '@/views/AuthorView.vue'
import ArticleView from '@/views/ArticleView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/article/:slug',
    name: 'article',
    component: ArticleView
  },
  {
    path: '/author/:id',
    name: 'author',
    component: AuthorView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export { routes }

export default router
