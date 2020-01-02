<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "v-collapse",
  props: {
    openName: {
      type: String,
      default: ''
    }
  },
  provide() {
    return {
      parent: this
    }
  },
  mounted() {
    this.$emit("open", this.openName)
  }
}
</script>

<style>

</style>

