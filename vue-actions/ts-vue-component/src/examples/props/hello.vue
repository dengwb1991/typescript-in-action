<template>
  <div>
    <h2>Prop:</h2>
    <p>propA: {{propA}}</p>
    <p>propB: {{propB}}</p>
    <p>propC: {{propC}}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class PropsHello extends Vue {
  // 如果未设置默认值 需要定义 undefined
  @Prop(Number)
  readonly propA: number | undefined

  @Prop({ default: 'default value' })
  readonly propB!: string

  @Prop([String, Boolean])
  propC: string | boolean | undefined

  created () {
    // console.log(this['role'])
    // this.propC = true
  }
}
</script>

<style scoped>
h1 {
  color: black;
}
</style>