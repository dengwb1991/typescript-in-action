import Vue from 'vue'

import ExamplesComponent from './examples/component/index.vue'
import ExamplesMixins from './examples/mixins/index.vue'
import ExamplesProps from './examples/props/index.vue'
import ExamplesModel from './examples/model/index.vue'
import ExamplesWatch from './examples/watch/index.vue'
import ExamplesProvideInject from './examples/provide-inject/index.vue'
import ExamplesEmit from './examples/emit/index.vue'
import ExamplesRef from './examples/ref/index.vue'

new Vue({
  el: '#app',
  components: {
    ExamplesComponent,
    ExamplesMixins,
    ExamplesProps,
    ExamplesModel,
    ExamplesWatch,
    ExamplesProvideInject,
    ExamplesEmit,
    ExamplesRef
  },
  data: {
    name: 'TypeScript'
  },
  template: `<div>
    <ExamplesComponent/>
    <ExamplesMixins/>
    <ExamplesProps/>
    <ExamplesModel/>
    <ExamplesWatch/>
    <ExamplesProvideInject/>
    <ExamplesEmit/>
    <ExamplesRef/>
  </div>`
})