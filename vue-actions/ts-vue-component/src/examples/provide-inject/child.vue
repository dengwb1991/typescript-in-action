<template>
  <div>
    <p>foo: {{foo}}</p>
    <p>object: {{object}}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Inject } from 'vue-property-decorator'
interface Obj {
  a: number
  b: number
}

@Component
export default class ChildComponent extends Vue {
  @Inject() readonly foo!: string
  @Inject() readonly object!: Obj
  created () {
    // console.log(this.foo)
  }
}
</script>