<template>
  <Child/>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Child from './child.vue'

@Component({
  components: {
    Child
  }
})
export default class ParentComponent extends Vue {
}
</script>