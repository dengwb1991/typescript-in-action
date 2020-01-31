<template>
  <div>
    <h2>Watch:</h2>
    <Main/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import Main from './main.vue'

@Component({
  components: {
    Main
  }
})
export default class Index extends Vue {
}
</script>