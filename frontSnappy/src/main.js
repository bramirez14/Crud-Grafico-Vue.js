import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy';
import router from "./router";
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import 'buefy/dist/buefy.css';


Vue.use(Chartkick.use(Chart))
 
Vue.use(Buefy);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
