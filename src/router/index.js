import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('@/components/Home.vue'), name: 'home' },
  { path: '/order', component: () => import('@/components/order/Order.vue'), name: 'order' },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
