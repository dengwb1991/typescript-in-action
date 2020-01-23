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
export default class PropComponent extends Vue {
  @Prop(Number)
  readonly propA: number | undefined

  @Prop({ default: 'default value' })
  readonly propB!: string

  @Prop([String, Boolean])
  propC: string | boolean | undefined
}
</script>

<style scoped>
h1 {
  color: black;
}
</style>