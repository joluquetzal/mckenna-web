import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '',
      component: () => import('./layouts/DefaultLayout'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('./views/HomePage')
        },
        {
          path: '/learn',
          name: 'learn',
          component: () => import('./views/Learn')
        },
        {
          path: '/design',
          name: 'design',
          component: () => import('./views/Design')
        },
        {
          path: '/service',
          name: 'service',
          component: () => import('./views/Service')
        },
      ]
    }
  ]
});

export default router;
