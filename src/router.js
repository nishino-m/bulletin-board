import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import ResetPassword from './components/ResetPassword.vue';
import CategoryChoice from './components/CategoryChoice.vue';
import RoomChoice from './components/RoomChoice.vue';
import TalkRoom from './components/TalkRoom.vue';


const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/reset-password',
    component: ResetPassword
  },
  {
    path: '/category-choice',
    component: CategoryChoice
  },
  {
    path: '/room-choice/:category',
    component: RoomChoice,
    props: true
  },
  {
    path: '/talk-room/:roomname',
    component: TalkRoom,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
