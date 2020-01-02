<template>
  <SubMenu>
    <div slot="title">{{parent.title}}</div>
    <template v-for="(item, i) in parent.children">
      <MenuItem @click.native="emitParams(item)" v-if="!item.children" :key="`menu_item_${index}_${i}`">{{ item.title }}</MenuItem>
      <ReSubmenu  v-else :key="`menu_item_${index}_${i}`" :parent="item"></ReSubmenu>
    </template>
  </SubMenu>
</template>

<script>
import SubMenu from '@/components/FoldPanel'
import MenuItem from './MenuItem'
export default {
  name: 'ReSubmenu',
  components: {
    SubMenu,
    MenuItem
  },
  props: {
    parent: {
      type: Object,
      default: () => {}
    },
    index: Number
  },
  methods: {
    emitParams(item) {
      this.$emit('emitParams', item)
    }
  }
}
</script>
<style lang="stylus">

</style>