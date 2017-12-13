<template>
  <div id="app">
    <header>
      <img class="vue-logo" src="https://vuejs.org/images/logo.png" alt="Vue.js">
      <h1>Text Input Effects</h1>
      <p>Inspired by <a class="reference-link" target="__blank" href="https://tympanus.net/Development/TextInputEffects">TextInputEffects</a></p>

      <a class="github-link" target="__blank"  href="https://github.com/XBT1/text-input-effects">
       <img src="https://img.shields.io/github/stars/XBT1/text-input-effects.svg?style=for-the-badage&label=Stars" alt="GitHub Stars">
      </a>
    </header>

    <main>
      <section v-for="(item, index) of inputList" :key="index" :style="{ backgroundColor: item.color }">
        <h2 class="section-title">{{ item.type | upper-case }}</h2>
        <su-input v-model="item.value" :type="item.type" label="姓名"></su-input>
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'App',

    filters: {
      upperCase (value) {
        return value.replace(/^\S/, ($1) => $1.toUpperCase())
      },
    },

    data () {
      return {
        inputList: [{
          type: 'haruki',
          value: '',
          color: '#f0efee',
        }, {
          type: 'hoshi',
          value: '',
          color: '#f9f7f6',
        }, {
          type: 'kuro',
          value: '',
          color: '#2f3238',
        }, {
          type: 'jiro',
          value: '',
          color: '#d0d6d6',
        }, {
          type: 'minoru',
          value: '',
          color: '#f9f7f6',
        }, {
          type: 'yoko',
          value: '',
          color: '#dd665c',
        }],
      }
    }
  }
</script>

<style scoped>
  header {
    padding: 70px 40px 40px;
    text-align: center;
  }

  header .vue-logo {
    width: 80px;
  }

  header h1 {
    margin: 10px 0;
    font-size: 48px;
  }

  header p {
    margin-top: 0;
    font-size: 24px;
  }

  header p,
  header .reference-link {
    color: #c3c8cd;
  }

  section {
    padding: 40px 0;
    text-align: center;
  }

  .section-title {
    margin-bottom: 50px;;
    font-size: 32px;
    opacity: 0.1;
  }
</style>

<style>
  body {
    margin: 0;
    background-color: #f9f7f6;
    color: #404d5b;
  }
</style>

