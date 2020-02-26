import Vue from 'vue'
import App from './App.vue'
import VueObserveVisibility from 'vue-observe-visibility'
import VueTyperPlugin from 'vue-typer'
import router from './router'

Vue.use(VueObserveVisibility)
Vue.use(VueTyperPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  data: {
    message: 'Hlddd'
  },
}).$mount('#app')
