<template>
  <router-link :to='{name: pageName}' class='link__home'>
    <h4 class='flex flex--center'>
      <i class="material-icons">arrow_back</i>
      <span>{{label}}</span>
    </h4>
  </router-link>
</template>

<script>
  export default {
    props: {
      pageName: {
        type: String,
        default: 'Home'
      },
      label: {
        type: String,
        default: 'Voir tous les chapiteaux'
      },
    }
  }
</script>

<style lang='scss' scoped>
  @import '~stylesheets/helpers/_variables.scss';
  @import '~stylesheets/helpers/mixins/style.scss';

  .link__home {
    margin: 20px 0 0 0;
    @include large {
      margin: 40px 0 0 0;
    }
  }
</style>
