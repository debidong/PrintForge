import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/', 
    redirect: '/home'
  }, {
    path: '/home',
    component: () => import('@/components/Home.vue'),
  }, {
    path: '/order',
    component: () => import('@/components/order/Order.vue'),
    children: [
      {
        path: 'exterior/color',
        component: () => import('@/components/order/exterior/Color.vue'),
      }, {
        path: 'exterior/logo',
        component: () => import('@/components/order/exterior/Logo.vue'),
      }, {
        path: 'exterior/size',
        component: () => import('@/components/order/exterior/Size.vue'),
      }, {
        path: 'local/drying-rack',
        component: () => import('@/components/order/local/DryingRack.vue'),
      }, {
        path: 'local/unloading-device',
        component: () => import('@/components/order/local/UnloadingDevice.vue'),
      }, {
        path: 'local/spindle',
        component: () => import('@/components/order/local/Spindle.vue'),
      }, {
        path: 'local/workbench',
        component: () => import('@/components/order/local/Workbench.vue'),
      }, {
        path: "local/reversing-device",
        component: () => import("@/components/order/local/ReversingDevice.vue")
      }, {
        path: "local/receiving-device",
        component: () => import("@/components/order/local/ReceivingDevice.vue")
      }
    ] 
  }, {
    path: '/component',
    component: () => import('@/components/component/Component.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
