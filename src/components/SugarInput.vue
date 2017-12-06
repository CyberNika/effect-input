<template>
  <span :class="inputClass">
    <input
      type="text"
      v-model="innerValue"
      class="su-input__field">

    <label for="" class="su-input__label">
      <span class="su-input__label-content">{{ label }}</span>
    </label>
  </span>
</template>

<script>
  export default {
    name: 'SugarInput',

    props: {
      value: String,
      label: String,
      type: {
        type: String,
        default: 'haruki',
      },
    },

    data () {
      return {
      }
    },
    computed: {
      inputClass () {
        return {
          'su-input': true,
          'su-input--filled': !!this.innerValue,
          [`su-input--${this.type}`]: true,
        }
      },
      innerValue: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        },
      },
    },

    methods: {},
  }
</script>
