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
      }
    }
  }
</script>
