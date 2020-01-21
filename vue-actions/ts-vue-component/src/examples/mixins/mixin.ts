import { Vue, Component } from 'vue-property-decorator'
@Component
export default class MyMixins extends Vue {
  mixinValue: string = 'I am mixins'
}