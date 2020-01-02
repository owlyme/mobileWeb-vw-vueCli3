<template>
  <div class="submenu">
    <FoldPanel>
      <slot name="title"></slot>
      <slot></slot>
    </FoldPanel>
  </div>
</template>

<script>
import FoldPanel from '@/components/FoldPanel'
export default {
  name: 'Submenu',
  components: {
    FoldPanel
  },
  data () {
    return {
      showChild: false
    }
  },
  methods: {
    handleClick () {
      this.showChild = !this.showChild
    }
  }
}
</script>

<style lang="stylus">
.submenu
  display block
</style>
