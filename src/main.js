import Vue from 'vue'
import App from './App.vue'
import router from './router'

import DefaultLayout from './layouts/DefaultLayout';

import Flare from '@lkmx/flare';

Vue.config.productionTip = false

Vue.use(Flare);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.component('DefaultLayout', DefaultLayout);

