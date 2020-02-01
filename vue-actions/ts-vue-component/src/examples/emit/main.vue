<template>
  <button @click="emitHandler">Add Event</button>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator'

@Component
export default class Main extends Vue {
  count = 0

  @Emit()
  emitHandler () {
    this.count += 1
    return this.count
  }
}
</script>