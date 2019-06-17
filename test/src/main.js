// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './static/common.scss'
import './static/flexible'
import './iconFont/iconfont.css'
import pack from './plugins/pack'
import request from './utiles/request'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(pack)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.http = request;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
