<template>
  <nav class="flex-container tabs">
    <div class="tabs-item" :class="{active: activeIndex == 1 }" @click="selector(1)">
      <div class="tabs-label tabs-label-1">关于团队</div>
    </div>
    <div class="tabs-item" :class="{active: activeIndex == 2 }" @click="selector(2)">
      <div class="tabs-label tabs-label-2">企业文化</div>
    </div>
    <div class="tabs-item" :class="{active: activeIndex == 3 }" @click="selector(3)">
      <div class="tabs-label tabs-label-3">加入我们</div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 1
    }
  },
  methods: {
    selector(index){
      this.activeIndex = index
      this.$emit('on-change', index)
    }
  }
}
</script>

<style lang="stylus">
  .tabs
    position: relative;
    z-index: 20;
    width: 750px;
    height: 100px;
    background-color: #ffffff;
    box-shadow: 0px 8px 28px 2px rgba(2, 14, 39, 0.15);
    .tabs-item
      font-size: 28px;
      color: #606366;
      height 100%
      display flex
      align-items center
      border-bottom 3px solid rgba(0,0,0,0);
      .tabs-label
        height 30px
        text-indent 38px
        line-height 30px
        background-size 34px 100% 
        background-repeat no-repeat
      .tabs-label-1
        background-image: url(../../../assets/images/about/icon2_1.png)
      .tabs-label-2
        background-image: url(../../../assets/images/about/icon1_2.png)
      .tabs-label-3
        background-image: url(../../../assets/images/about/icon1_3.png)
    .active    
      letter-spacing: 0px;
      color: #409fff;
      border-bottom 3px solid #409fff;
      .tabs-label-1
        background-image: url(../../../assets/images/about/icon1_1.png)
      .tabs-label-2
        background-image: url(../../../assets/images/about/icon2_2.png)
      .tabs-label-3
        background-image: url(../../../assets/images/about/icon3_1.png)

</style>
