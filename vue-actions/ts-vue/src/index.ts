import Vue from 'vue'
import Hello from './components/hello.vue'

// new Vue({
//   el: '#app',
//   data: {
//     name: 'TypeScript'
//   },
//   template: `<h1>Hello {{ name }}</h1>`
// })

new Vue({
  el: '#app',
  components: { Hello },
  template: `<hello/>`
})