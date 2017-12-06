<template>
  <div id="app">
    <header>
      <h1>Text Input Effects</h1>
    </header>

    <main>
      <su-input v-model="value" label="姓名"></su-input>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'App',

    data () {
      return {
        value: '',
      }
    }
  }
</script>

<style>
</style>
