import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import vuex from 'vuex'
import routes from './routes';
import 'element-ui/lib/theme-chalk/index.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import VCharts from 'v-charts';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(vuex);
Vue.use(VCharts);

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
});

router.afterEach(() => {
  setTimeout(() => {
    NProgress.done()
  }, 500);
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
