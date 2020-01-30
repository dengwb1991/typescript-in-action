<template>
  <div>
    <h2>Model:</h2>
    <Main v-model="isChecked"
          :value="value"/>
  </div>
</template>

<script lang="ts">
import Main from './main.vue'
import { Vue, Component} from 'vue-property-decorator'
@Component({
  components: {
    Main
  }
})
export default class Index extends Vue {
  value: string = 'val'
  isChecked = true
}
</script>