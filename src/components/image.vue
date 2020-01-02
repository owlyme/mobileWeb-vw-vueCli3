<template>
  <!-- 显示图片组件 -->
  <div>
    <img class="my-image" :src="src" alt="">
  </div>
</template>

<script>
  export default {
    props: ['src'],
    data() {
      return {}
    },
    components: {},
    computed: {},
    created() {},
    watch: {},
    mounted() {},
    methods: {},
  }
</script>

<style lang="stylus">
  .my-image 
    width: 100%
</style>