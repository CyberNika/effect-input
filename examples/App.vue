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
    </header>

    <main ref="main">
      <section v-for="(item, index) of inputList" :key="index" :style="{ backgroundColor: item.bgColor, color: item.color }">
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
          bgColor: '#f0efee',
        }, {
          type: 'hoshi',
          value: '',
          bgColor: '#f9f7f6',
        }, {
          type: 'kuro',
          value: '',
          bgColor: '#2f3238',
          color: '#fff',
        }, {
          type: 'jiro',
          value: '',
          bgColor: '#d0d6d6',
        }, {
          type: 'minoru',
          value: '',
          bgColor: '#f9f7f6',
        }, {
          type: 'yoko',
          value: '',
          bgColor: '#dd665c',
        }, {
          type: 'hideo',
          value: '',
          bgColor: '#f9f7f6',
        }, {
          type: 'kyo',
          value: '',
          bgColor: '#e8e8e8',
          activeColor: 'rgba(11, 43, 205, 0.6)',
        }, {
          type: 'akira',
          value: '',
          bgColor: '#2f3238',
          color: '#fff',
        }, {
          type: 'ichiro',
          value: '',
          bgColor: '#f9f7f6',
        }, {
          type: 'juro',
          value: '',
          color: '#fff',
          bgColor: '#38a9ea',
        }, {
          type: 'madoka',
          value: '',
          color: '#fff',
          bgColor: '#2f3238',
        }, {
          type: 'kaede',
          value: '',
          bgColor: '#f9f7f6',
        }, {
          type: 'isao',
          value: '',
          color: '#fff',
          bgColor: '#3d4444',
        }],
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

