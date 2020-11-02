import Vue from 'vue';
import App from './App.vue';
import VueRoter from 'vue-router';
import Routes from './routes';
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import VueRouter from 'vue-router';

Vue.use(SuiVue);
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRoter({
 routes: Routes,
 mode: 'history'

});

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
