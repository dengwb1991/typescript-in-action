<template>
  <div>
    <input v-model="name"/>{{name}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'

@Component
export default class MyComponent extends Vue {
  name = 'abc'
  @Watch('name')
  onChildChanged(val: string, oldVal: string) {
    console.log('child watching')
  }
}
</script>