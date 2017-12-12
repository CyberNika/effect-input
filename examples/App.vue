<template>
  <div id="app">
    <header>
      <h1>Text Input Effects</h1>
    </header>

    <main>
      <section v-for="(item, index) of inputList" :key="index">
        <su-input v-model="item.value" :type="item.type" label="姓名"></su-input>
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'App',

    data () {
      return {
        inputList: [{
          type: 'haruki',
          value: '',
        }, {
          type: 'hoshi',
          value: '',
        }, {
          type: 'kuro',
          value: '',
        }, {
          type: 'jiro',
          value: '',
        }],
      }
    }
  }
</script>

<style scoped>
  section {
    text-align: center;
  }

  section + section {
    margin-top: 30px;
  }
</style>
