<template>
  <div class="container--img">
    <img :src="linkHref" alt="description">
  </div>
</template>

<script>
  export default {
    props: ['linkHref', 'description']
  }
</script>

<style lang="scss">
  .container--img {
    width: 100%;
    max-width: 100%;
    img {
      max-width: 100%;
      width: 100%;
      height: auto;
    }
  }
</style>
