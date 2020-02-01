<template>
  <div>
    <h2>Ref:</h2>
    <Main ref="mainComponent"/>
    <button ref="aButton">btn</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator'
import Main from './main.vue'

@Component({
  components: {
    Main
  }
})
export default class Index extends Vue {
  @Ref() readonly mainComponent!: Main
  @Ref('aButton') readonly button!: HTMLButtonElement

  mounted () {
    // console.log(this.mainComponent)
    // console.log(this.button)
  }
}
</script>