<template>
  <div id="app">
    <header>
      <img class="vue-logo" src="https://vuejs.org/images/logo.png" alt="Vue.js">
      <h1>Text Input Effects</h1>

      <a class="github-link" target="__blank"  href="https://github.com/XBT1/text-input-effects">
       <img src="https://img.shields.io/github/stars/XBT1/text-input-effects.svg?style=for-the-badage&label=Stars" alt="GitHub Stars">
      </a>

      <div class="font-size-action">
        <span class="font-size-action-item" @click="handleIncreaseFontSize">A+</span>
        <span class="font-size-action-item" @click="handleResetFontSize">AC</span>
        <span class="font-size-action-item" @click="handleDecreaseFontSize">A-</span>
      </div>

      <div class="set-action">
        <span
          :key="item"
          :class="{
            'set-action-item': true,
            active: currentSet === item - 1,
          }"
          v-for="item of themeList.length"
          @click="handleChangeSet(item - 1)">
            SET {{ item }}
          </span>
      </div>
    </header>

    <main ref="main">
      <section v-for="(item, index) of themeList[currentSet]" :key="index" :style="{ backgroundColor: item.bgColor, color: item.color }">
        <h2 class="section-title">{{ item.type | upper-case }}</h2>

        <effect-input v-if="item.type === 'hideo'" v-model="item.value" :type="item.type">
          <template slot="label">
            <span class="hideo-icon"></span>
          </template>
        </effect-input>

        <effect-input v-else-if="item.type === 'kyo'" v-model="item.value" :type="item.type" label="请输入姓名" :active-color="item.activeColor"></effect-input>

        <effect-input v-else v-model="item.value" :type="item.type" label="姓名"></effect-input>
      </section>
    </main>

    <footer>
      <p>Inspired by <a class="reference-link" target="__blank" href="https://tympanus.net/Development/TextInputEffects">TextInputEffects</a></p>
    </footer>
  </div>
</template>

<script>
  import THEME_LIST from './themes.json'

  export default {
    name: 'App',

    filters: {
      upperCase (value) {
        return value.replace(/^\S/, ($1) => $1.toUpperCase())
      },
    },

    data () {
      return {
        currentSet: window.location.hash ? Number(window.location.hash.replace('#', '')) : 0,
        themeList: THEME_LIST.map((list) => list.map(item => ({ ...item, value: '' }))),
      }
    },

    methods: {
      increaseFontSize (value = 4) {
        const defaultFontSize = 16
        const mainEle = this.$refs.main
        const fontSize = mainEle.style.fontSize ? mainEle.style.fontSize.replace('px', '') : defaultFontSize
        const targetFontSize = value !== null ? (Number(fontSize) + value) : defaultFontSize

        if (targetFontSize <= 10) return

        mainEle.style.fontSize = `${targetFontSize}px`
      },

      handleIncreaseFontSize () {
        this.increaseFontSize(4)
      },
      handleResetFontSize () {
        this.increaseFontSize(null)
      },
      handleDecreaseFontSize () {
        this.increaseFontSize(-4)
      },

      handleChangeSet (index) {
        this.currentSet = index
        window.location.hash = index
      },
    },
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

  main {
    font-size: 16px;
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

  .font-size-action-item {
    display: inline-block;
    padding: 4px 8px;
    cursor: pointer;
    color: #555;
  }

  .font-size-action,
  .set-action {
    margin-top: 10px;
  }

  .set-action-item {
    padding: 0 2px;
    margin: 5px 10px;
    color: #aaa;
    border-bottom: 2px solid transparent;
    cursor: pointer;
  }

  .set-action-item.active {
    color: #333;
    border-bottom-color: #333;
    font-weight: bold;
  }

  .hideo-icon {
    display: inline-block;
    width: 100%;
    height: 100%;
    background: url("./me.svg") center no-repeat / contain;
  }

  footer {
    background-color: #f9f7f6;
    padding: 20px 0;
    text-align: center;
  }

  footer p {
    margin: 0;
    font-size: 14px;
  }

  footer p,
  footer .reference-link {
    color: #c3c8cd;
  }
</style>

<style>
  body {
    margin: 0;
    background-color: #f9f7f6;
    color: #404d5b;
  }
</style>

