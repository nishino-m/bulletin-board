import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import Resetpassword from './components/Resetpassword.vue';
import Categorychoice from './components/Categorychoice.vue';


const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/reset-password',
    component: Resetpassword
  },
  {
    path: '/category-choice',
    component: Categorychoice
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
