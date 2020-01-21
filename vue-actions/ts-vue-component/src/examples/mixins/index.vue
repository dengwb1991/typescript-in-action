<template>
  <div>
    <h2>Mixins:</h2>
    <p>{{ mixinValue }}</p>
  </div>
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import MyMixin from './mixin'

@Component
export default class Index extends Mixins(MyMixin) {
  created () {
    // console.log(this.mixinValue)
  }
}
</script>