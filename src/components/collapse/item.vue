<template>
  <div class="v-collapse-item" :class="[name]">
    <div class="item-header"  @touchstart="showOpen">
      <div class="item-title">
        {{title}}
        <div class="upicon" :class="{'rotate': show}"></div>
      </div>
      
    </div>
    <transition name="slidedown">
      <div class="item-content" v-if="show">
        <slot></slot>
      </div>
    </transition>
  </div>  
</template>

<script>
export default {
  name: "v-collapse-item",
  inject: ['parent'],
  props: {
    title: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false
    }
  },
  mounted() {
    if (this.open) {
      this.show = true
    } 
    this.parent.$on("open", (name) => {
      this.show = name === this.name
    })
  },
  methods: {
    showOpen() {
      if (this.show) {
        this.show = !this.show
      } else {
        this.parent.$emit("open", this.name)
      }
    }
  },
}
</script>

<style lang="stylus">
  .v-collapse-item
    margin-bottom 20px
    overflow hidden
    .item-header
      position relative
      z-index 1
      height: 110px;
      line-height 110px
      background-color: #ffffff;
      box-shadow: -1px 1px 0px 0px #e3e4e5;
      padding 0 30px
      .item-title
        position relative
        font-size: 34px;
        color: #303133;
    .item-content
      position relative
      z-index 0
      background-color: #ffffff;

  .slidedown-enter-active{
    transition: all .5s;
  }
  .slidedown-leave-active {
    
  }
  .slidedown-enter, .slidedown-leave-to {
    opacity: 0.0;
    height 0
    transform: translateY(-100px);
  }

  .upicon
    position absolute
    right 30px
    top 50px
    transition: all .5s;
    width 20px
    height 20px
    border 2px solid #979899;
    border-bottom none 
    border-left none
    transform: rotate(-45deg)
    transform-origin: 75% 25%;
  .rotate
    transform: rotate(135deg)
</style>