<template>
  <span :class="inputClass" v-if="type === 'isao'">
    <input
      :name="name"
      :readonly="readonly"
      type="text"
      ref="input"
      v-model="innerValue"
      class="su-input__field">

    <label for="" class="su-input__label" @click="handleLabelClick" :data-content="label">
      <span class="su-input__label-content">
        {{ label }}
      </span>
    </label>
  </span>

  <span :class="inputClass" v-else-if="type === 'madoka'">
    <input
      type="text"
      ref="input"
      v-model="innerValue"
      class="su-input__field">

    <label for="" class="su-input__label" @click="handleLabelClick">
      <svg class="graphic" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
        <path d="m0, 0l404, 0l0, 77l-404, 0l0, -77z"></path>
      </svg>

      <span class="su-input__label-content">
        {{ label }}
      </span>
    </label>
  </span>

  <span :class="inputClass" v-else>
    <input
      type="text"
      ref="input"
      v-model="innerValue"
      class="su-input__field">

    <label for="" class="su-input__label" @click="handleLabelClick">
      <span class="su-input__label-content">
        <slot name="label">
          {{ label }}
        </slot>
      </span>
    </label>
  </span>
</template>

<script>
  export default {
    name: 'SugarInput',

    props: {
      value: String,
      label: String,
      name: String,
      readonly: Boolean,

      type: {
        type: String,
        default: 'haruki',
      },
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

    methods: {
      handleLabelClick () {
        this.$refs.input.focus()
      },
    },
  }
</script>
