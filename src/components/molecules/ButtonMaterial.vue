<template>
  <a :href="href" type="button" class="button" target="_blank">{{label}}</a>
</template>

<script>
  export default {
    props: ['label', 'href']
  }
</script>

<style lang='scss'>
  @import '~stylesheets/helpers/_variables.scss';
  @import '~stylesheets/helpers/mixins/style.scss';

  a.button {
    height: 35px;
    line-height: 35px;
    font-size: 15px;
    display: inline-block;
    color: white;
    background-color: $blue-material;
    position: relative;
    cursor: pointer;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    letter-spacing: .8px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    vertical-align: middle;
    white-space: nowrap;
    outline: none;
    border: none;
    user-select: none;
    border-radius: 2px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.225);
    transition: all .3s ease-out;
    padding: 0 1.5rem;
    margin: 2rem 1rem;
    &:hover {
      box-shadow: 0 4px 10px 0px rgba(0, 0, 0, 0.225);
    }
    @include medium {
      margin: 1rem;
    }
  }
</style>
