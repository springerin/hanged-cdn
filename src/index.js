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
  beforeCreate() {
    console.log('beforeCreate', this, this.message, this.$el)
  },
  created() {
    console.log('created', this, this.message, this.$el)
  },
  beforeMount() {
    console.log('beforeMount', this, this.message, this.$el)
  },
  mounted() {
    console.log('mounted', this, this.message, this.$el)
  },
  beforeUpdate() {
    console.log('beforeUpdate', this, this.message)
  },
  updated() {
    console.log('updated', this, this.message)
  },
  beforeDestroy() {
    console.log('beforeDestroy', this, this.message)
  },
  destroyed() {
    console.log('destroyed', this, this.message)
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