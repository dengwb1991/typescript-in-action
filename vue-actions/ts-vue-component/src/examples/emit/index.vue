<template>
  <div>
    <h2>Emit:</h2>
    <Main @emit-handler="(n) => this.count = n"/>
    {{count}}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Main from './main.vue'

@Component({
  components: {
    Main
  }
})
export default class Index extends Vue {
  count = 0
}
</script>