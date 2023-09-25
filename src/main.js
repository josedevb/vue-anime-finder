import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import store from '@/store';

import routes from '@/routes';

import EventBus from '@/plugins/event-bus';
import msToMm from '@/filters/ms-to-mm';
import blur from '@/directives/blur';
import i18n from '@/i18n';

Vue.use(VueRouter);
Vue.use(EventBus);
Vue.use(msToMm);
Vue.use(blur);

const router = new VueRouter({ routes, mode: 'history' });

new Vue({
  render: (h) => h(App),
  router,
  i18n,
  store,
}).$mount('#app');
