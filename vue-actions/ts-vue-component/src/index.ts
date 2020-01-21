import Vue from 'vue'

import ExamplesComponent from './examples/component/index.vue'
import ExamplesMixins from './examples/mixins/index.vue'
import ExamplesProps from './examples/props/index.vue'

new Vue({
  el: '#app',
  components: {
    ExamplesComponent,
    ExamplesMixins,
    ExamplesProps
  },
  data: {
    name: 'TypeScript'
  },
  template: `<div><ExamplesComponent/><ExamplesMixins/><ExamplesProps/></div>`
})