/*global Vue*/

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    increment: 0,
    bgColor: 'orange',
    list: ['mele', 'banane']
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
});

// this console log it's for debugging, it will be removed later on
console.log(app);

// skip parcel requireJs scope, expose the app to the world!
window.app = app;