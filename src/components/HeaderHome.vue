<template>
  <div class="header" :style="{backgroundImage: 'url(' + imageSrc + ')'}">
    <div class="header__description container">
      <h1 class='header__title'>{{props.title}}</h1>
      <h2 class='header__subtitle'>{{props.subtitle}}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeaderHome',
    props: ['props'],
    data () {
      return {
        imageSrc: `/static/${this.props.image}`
      }
    }
  }
</script>

<style lang='scss' scoped>
  .header {
    height: 65vh;
    min-height: 500px;
    display: flex;
    align-items: center;
    text-align: center;
    background-size: cover;
    background-origin: center;
    background-repeat: no-repeat;
    background-position: center;
    padding: 40px 0;
  }

  .header__description {
    width: 100%;
  }

  .header__title,
  .header__subtitle {
    color: white;
  }

  .header__subtitle {
    margin: 40px 0 0 0;
  }

</style>
