// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(SuiVue);
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-stock-trader-92bbc.firebaseio.com/';

Vue.filter('currency', value => '$' + value.toLocaleString());

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
