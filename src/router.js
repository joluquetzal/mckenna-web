import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '',
      component: () => import('./layouts/LayoutWithoutHeader'),
      children: [
        {
          path: '',
          name: 'landing',
          component: () => import('./views/LandingPage')
        },
      ],
    },
    {
      path: '/views',
      component: () => import('./layouts/DefaultLayout'),
      children: [
        {
          path: 'learn',
          name: 'learn',
          component: () => import('./views/Learn')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('./views/Contact')
        },
        {
          path: 'design',
          name: 'design',
          component: () => import('./views/Design')
        },
        {
          path: 'service',
          name: 'service',
          component: () => import('./views/Service')
        },
        {
          path: 'extras',
          name: 'extras',
          component: () => import('./views/Extras')
        },
        {
          path: 'contact/laborContact',
          name: 'labor-contact',
          component: () => import('./views/LaborContact')
        },
        {
          path: 'contact/clientsContact',
          name: 'clients-contact',
          component: () => import('./views/ClientsContact')
        },
      ]
    },
  ]
});

export default router;

