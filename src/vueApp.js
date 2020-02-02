import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

import routes from './routes/vueRoutes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
