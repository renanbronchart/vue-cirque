<template>
  <nav class='nav' :class='stickyNav ? "nav--sticky" : ""'>
    <a class="nav__menu" title='open menu' @click.prevent='toggleMenu'><i class="nav__icon material-icons icn__xl">menu</i></a>
    <h1 class='nav__title'>Location de chapiteau</h1>
  </nav>
</template>

<script>
  export default {
    name: 'NavHome',
    data () {
      return {
        stickyNav: false
      }
    },
    methods: {
      toggleMenu () {
        this.$emit('toggle')
      },
      addStickyNav () {
        let posScrollWindow = window.scrollY
        let posTitle = document.querySelector('.nav__title').offsetTop

        this.stickyNav = posScrollWindow > posTitle
      }
    },
    created () {
      window.addEventListener('scroll', this.addStickyNav)
    },
    destroyed () {
      window.removeEventListener('scroll', this.addStickyNav)
    }
  }
</script>

<style lang='scss'>
  @import '~stylesheets/helpers/_variables.scss';
  @import '~stylesheets/helpers/mixins/style.scss';

  .nav {
    position: relative;
    height: 12.5rem;
    background: $pesto-green;
    box-shadow: 0 2px 5px rgba(0,0,0,.26);
    z-index: 2;
    &.nav--sticky {
      width: 100%;
      position: fixed;
      top: -7.5rem;
      left: 0;
      & + .main {
        margin: 12.5rem 0 0 0;
      }
    }
  }

  .nav__menu {
    position: fixed;
    top: 0;
    display: inline-block;
    cursor: pointer;
    z-index: 5;
  }

  .nav__icon {
    color: white;
    padding: 1rem;
  }

  .nav__title {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    line-height: 5rem;
    color: white;
    margin: 0;
    padding: 0 0 0 20px;
    @include medium {
      width: auto;
      text-align: left;
      left: 10%;
      padding: 0;
    }
  }
</style>
