<template>
  <div>
    <input type="checkbox"
           :value="value"
           :checked="checked">
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model, Prop } from 'vue-property-decorator'

@Component
export default class MyComponent extends Vue {
  @Model('change', { type: Boolean }) readonly checked!: boolean

  @Prop(String)
  value!: string
}

// export default {
//   model: {
//     prop: 'checked',
//     event: 'change'
//   },
//   props: {
//     value: String,
//     checked: {
//       type: Boolean,
//       default: true
//     }
//   }
// }
</script>
