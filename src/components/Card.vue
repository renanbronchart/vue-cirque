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
  .card {
    width: 25%;
    height: 200px;
    position: relative;
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
      transform: translateY(20px);
      opacity: 0;
      transition: all .25s ease-in-out;
      color: white;
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
