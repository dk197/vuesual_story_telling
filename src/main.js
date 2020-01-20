import Vue from 'vue'
import App from './App.vue'
import Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more'
import HighchartsVue from 'highcharts-vue'
import loadMap from 'highcharts/modules/map.js';
import VueFullPage from 'vue-fullpage.js'
import './fullpage.scrollHorizontally.min'

More(Highcharts)
Vue.config.productionTip = false
Vue.use(HighchartsVue)
Vue.use(VueFullPage)
loadMap(Highcharts);

new Vue({
  render: h => h(App),
}).$mount('#app')