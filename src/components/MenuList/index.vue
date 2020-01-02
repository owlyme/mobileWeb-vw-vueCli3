<template>
  <div class="menu-wrapper" @click.stop>
    <template  v-for="(item, index) in list">
      <MenuItem @click.native="emitParams(item)" v-if="!item.children" :key="`menu_item_${index}`">{{ item.title }}</MenuItem>
      <ReSubmenu @emitParams="emitParams" v-else :key="`menu_item_${index}`" :parent="item" :index="index"></ReSubmenu>
    </template>
  </div>
</template>
<script>
import MenuItem from './MenuItem'
import ReSubmenu from './ReSubmenu'
export default {
  name: 'MenuWrapper',
  components: {
    MenuItem,
    ReSubmenu
  },
  props: {
    list: {
      default: () => [],
      type: Array
    }
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
