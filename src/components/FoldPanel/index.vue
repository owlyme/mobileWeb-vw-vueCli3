<template>
  <div class="fold-panel menu-item">
    <div class="fold-title" @click.stop="packUpToogle">
      <slot name="title"></slot>
      <i class="icon chevron" v-if="!cantFold" :class="{chevronAnimate: !foldStatu}">&#xe7d7;</i>
    </div>
    <collapse-transition>
      <div class="collapse-wrap"
        v-show="foldStatu">
        <slot></slot>
      </div>
    </collapse-transition>
  </div>
</template>

<script>
import collapseTransition from './foldPanel'
export default {
  name: 'foldPanel',
  props: {
    isFold: {
      type: Boolean,
      default: false
    },
    cantFold: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      foldStatu: this.isFold
    }
  },
  mounted() {},
  methods: {
    packUpToogle() {
      if (this.cantFold) {
        return
      }
      this.foldStatu = !this.foldStatu
    }
  },
  components: {
    collapseTransition
  }
}
</script>

<style lang="stylus">
.fold-panel
  .fold-title
    position relative
    cursor pointer
    display flex
    justify-content space-between
    align-items center
    .chevron
      color #fff
      transition transform 0.2s
    .chevronAnimate
      transform rotateZ(-180deg)
</style>
