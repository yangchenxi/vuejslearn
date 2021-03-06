import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Router);
Vue.config.productionTip = false

new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')

