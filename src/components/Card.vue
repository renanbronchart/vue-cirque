<template>
  <div class="card" :style="{backgroundImage: 'url(' + card.background + ')'}">
    <div class="card__filter">
    </div>
    <div class="card__infos">
      <h4>{{card.title}}</h4>
      <p>{{card.description}}</p>
      <router-link :to="{ name: card.linkName, params: { id: card.id }}">Voir le chapiteau</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: ['card'],
    data () {
      return {}
    }
  }
</script>

<style scoped='true' lang='scss'>
  @import '~stylesheets/helpers/_variables.scss';

  .card {
    height: 200px;
    position: relative;
    border-radius: $border-radius-xs;
    overflow: hidden;
    box-shadow: 0 0.5px 2.5px 0 rgba(0, 0, 0, 0.2), 0 1.5px 2px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.14);
    transition: all .2s ease-in-out;
    &:hover {
      box-shadow: 0 2px 2.5px 0 rgba(0, 0, 0, 0.2), 0 1.5px 7px 1.5px rgba(0, 0, 0, 0.12), 0 4px 5px 0.5px rgba(0, 0, 0, 0.14);
      transform: translateY(-8px);
    }
    .card__filter {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: black;
      opacity: 0;
      transition: opacity .25s ease-in-out;
    }

    .card__infos {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      color: white;
      opacity: 0;
      transform: translateY(20px);
      transition: all .2s ease-in-out;
      padding: 20px;
      a {
        color: white;
      }
    }

    &:hover {
      .card__filter {
        opacity: 0.6;
      }

      .card__infos {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
</style>
