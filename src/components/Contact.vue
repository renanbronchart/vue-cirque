<template>
  <div class='contact'>
    <div class='container'>
      <BackTo></BackTo>
      <h3 class='page__title'>Contact</h3>
    </div>
  </div>
</template>

<script>
  import BackTo from '@/components/BackTo.vue'

  export default {
    data () {
      return {
      }
    },
    components: {
      BackTo
    }
  }
</script>

<style lang='scss' scoped>
  .page__title {
    margin: 2rem 0 0 0;
  }
</style>
