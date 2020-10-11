/*global Vue*/

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    increment: 0,
    bgColor: 'orange',
    list: ['mele', 'banane'],
    checkedItems: [],
    radio: '',
    select: ''
  },
  computed: {
    messageReverse() {
      return this.message.split('').reverse().join('')
    },
    isError() {
      return this.increment > 3
    }
  },
  watch: {
    message() {
      // use app.message into your console to change the message value and see watcher in action
      this.increment++
    }
  },
  methods: {
    sayHi(event) {
      // original js event
      console.log(event)
      alert('Ciao'+name+'!')
    },
    sayHiTo(name) {
      var nameToPrint = name || this.list[1]
      alert('Ciao '+ nameToPrint +'!')
    }
  },
});

// this console log it's for debugging, it will be removed later on
console.log(app);

// skip parcel requireJs scope, expose the app to the world!
window.app = app;