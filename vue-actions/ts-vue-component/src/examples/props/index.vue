<template>
  <Hello :propA="propA"/>
</template>


<script lang="ts">
import Hello from './hello.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: { Hello }
})
export default class PropsExample extends Vue {
  public propA:number = 123
  propB = 111
}
</script>