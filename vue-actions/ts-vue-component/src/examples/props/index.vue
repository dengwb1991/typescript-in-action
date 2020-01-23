<template>
  <div>
    <Prop :propA="propA"/>
    <PropSync :name.sync="propB"/>
    {{propB}}
  </div>
</template>


<script lang="ts">
import Prop from './prop.vue'
import PropSync from './prop-sync.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: { Prop, PropSync }
})
export default class PropsExample extends Vue {
  public propA:number = 123
  propB = 'abc'
}
</script>