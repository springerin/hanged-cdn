/*global Vue*/

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  computed: {
    messageReverse() {
      return this.message.split('').reverse().join('')
    }
  },
});

// this console log it's for debugging, it will be removed later on
console.log(app);

// skip parcel requireJs scope, expose the app to the world!
window.app = app;