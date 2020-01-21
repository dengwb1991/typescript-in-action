<template>
  <div>
    <Hello :propMessage="propMessage"/>
  </div>
</template>

<script lang="ts">
import Hello from './hello.vue'
import { Vue, Component} from 'vue-property-decorator'
@Component({
  components: {
    Hello
  }
})
export default class Index extends Vue {
  propMessage: string = 'propMessage'
  created () {
    console.log(2)
  }
}
</script>