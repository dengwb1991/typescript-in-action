<template>
  <div>
    <h2>Provide & inject:</h2>
    <ParentComponent/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
import ParentComponent from './parent.vue'

@Component({
  components: {
    ParentComponent
  }
})
export default class Index extends Vue {
  @Provide() foo = 'foo value'
  @Provide() object = { a: 1, b: 2 }

}
</script>