<template>
  <h1>Hello {{ name }}</h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      name: 'Typescript'
    }
  }
})
</script>

<style scoped>
h1 {
  color:darkorange;
}
</style>