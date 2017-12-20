import Vue from 'vue'
import App from './App.vue'

import EffectInput from '../src'
import '../src/styles/index.styl'

// import EffectInput from 'effect-input'
// import 'effect-input/dist/index.css'

Vue.use(EffectInput)

new Vue({
  el: '#app',
  render: h => h(App)
})
