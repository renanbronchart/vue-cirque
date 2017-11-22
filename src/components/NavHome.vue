<template>
  <nav class='nav'>
    <a class="nav__menu" title='open menu' @click.prevent='toggleMenu'><i class="nav__icon material-icons">menu</i></a>
  </nav>
</template>

<script>
  export default {
    name: 'NavHome',
    methods: {
      toggleMenu () {
        this.$emit('toggle')
      }
    }
  }
</script>

<style lang='scss'>
  @import '~stylesheets/helpers/_variables.scss';

  .nav {
    height: 4.5rem;
    background: $pesto-green;
    box-shadow: 0 2px 5px rgba(0,0,0,.26);
    z-index: 2;
  }

  .nav__menu {
    height: 100%;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .nav__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2.5rem;
    color: white;
    padding: 1rem;
  }
</style>
