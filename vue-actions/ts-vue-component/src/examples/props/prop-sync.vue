<template>
  <div>
    <h2>PropSync:</h2>
    <input v-model="syncedName"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'vue-property-decorator'

@Component
export default class PropsSyncComponent extends Vue {
  @PropSync('name', { type: String })
  syncedName!: string
}
</script>

<style scoped>
h1 {
  color: black;
}
</style>