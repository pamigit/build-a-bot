import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import pinDirective from './share/pin-directive';
import currencyFilter from './share/currency-filter';

Vue.config.productionTip = false;
// --global custom directive--
Vue.directive('pin', pinDirective);
// --global filter
Vue.filter('currency', currencyFilter);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
