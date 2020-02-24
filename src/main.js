import Vue from 'vue'
import App from './App.vue'
import VueObserveVisibility from 'vue-observe-visibility'
import VueTyperPlugin from 'vue-typer'

Vue.use(VueObserveVisibility)
Vue.use(VueTyperPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    message: 'Hlddd'
  },
}).$mount('#app')
