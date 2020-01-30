<template>
  <div>
    <input v-model="msg">
    <p>prop: {{propMessage}}</p>
    <p>msg: {{msg}}</p>
    <p>helloMsg: {{helloMsg}}</p>
    <p>computed msg: {{computedMsg}}</p>
    <button @click="greet">Greet</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const AppProps = Vue.extend({
  props: {
    propMessage: String
  }
})
@Component
export default class Hello extends AppProps {
  // initial data
  msg: number = 123

  // use prop values for initial data
  helloMsg = 'Hello, ' + this.propMessage

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // method
  greet () {
    console.log('greeting: ' + this.msg)
  }
  // lifecycle hook
  mounted () {
    this.greet()
  }
}
</script>
