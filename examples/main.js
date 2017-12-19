import Vue from 'vue'
import App from './App.vue'

import SugarInput from '../src'
import '../src/styles/index.styl'

Vue.use(SugarInput)

new Vue({
  el: '#app',
  render: h => h(App)
})
