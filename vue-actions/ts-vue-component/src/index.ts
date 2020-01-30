import Vue from 'vue'

import ExamplesComponent from './examples/component/index.vue'
import ExamplesMixins from './examples/mixins/index.vue'
import ExamplesProps from './examples/props/index.vue'
import ExamplesModel from './examples/model/index.vue'

new Vue({
  el: '#app',
  components: {
    ExamplesComponent,
    ExamplesMixins,
    ExamplesProps,
    ExamplesModel
  },
  data: {
    name: 'TypeScript'
  },
  template: `<div>
    <ExamplesComponent/>
    <ExamplesMixins/>
    <ExamplesProps/>
    <ExamplesModel/>
  </div>`
})