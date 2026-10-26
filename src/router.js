import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/contact', component: ContactView },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})
