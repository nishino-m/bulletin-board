import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
//import Posts from './components/Posts.vue';
//import ChangePassword from './components/ChangePassword.vue';

const routes = [
  { path: '/', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
