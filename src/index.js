import EffectInput from './components/EffectInput.vue'

export { EffectInput }

export default {
  install (Vue) {
    Vue.component(EffectInput.name, EffectInput)
  },
}
