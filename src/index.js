/*global Vue*/

var app = new Vue({
  data: {
    coins: '0 monete',
    attempsMessage: 'Indovina la parola entro <strong>10 tentativi</strong>',
    word2discover: 'meraviglioso',
    letter2check: '',
    goodLetters: [],
    badLetters: [],
    gameover: false
  },
  computed: {
    badAttemps() {
      return this.badLetters.length
    }
  },
  methods: {
    confirm() {
      const letter = this.letter2check.toLowerCase()
      if (this.word2discover.includes(letter)) {
        if (!this.goodLetters.includes(letter)) this.goodLetters.push(letter)
      } else {
        this.badLetters.push(letter)
      }
      if (this.badLetters.length === 6) this.gameover = true
      this.letter2check = ''
    }
  },
}).$mount('#app');


// this console log it's for debugging, it will be removed later on
console.log(app);

// skip parcel requireJs scope, expose the app to the world!
window.app = app;