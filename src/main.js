import Vue from 'vue'
import App from './App.vue'
import Highcharts from 'highcharts';
import HighchartsVue from 'highcharts-vue'
import loadMap from 'highcharts/modules/map.js';
import VueFullPage from 'vue-fullpage.js'

Vue.config.productionTip = false
Vue.use(HighchartsVue)
Vue.use(VueFullPage)
loadMap(Highcharts);

new Vue({
  render: h => h(App),
}).$mount('#app')
