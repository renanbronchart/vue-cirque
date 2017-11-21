<template>
  <div class="card" :style="{backgroundImage: 'url(' + card.background + ')'}">
    <div class="card__filter">
      <div class="card__infos">
        <h4>{{card.title}}</h4>
        <p>{{card.description}}</p>
        <router-link :to="{ name: card.linkName, params: { id: card.id }}">Voir le chapiteau</router-link>
      </div>
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
      transition: opacity .3s ease-in-out;
    }

    .card__infos {
      transform: translateX(-20px);
      transition: all .4s ease-in-out;
    }

    &:hover {
      .card__filter {
        opacity: 1;
      }

      .card__infos {
        transform: translateX(0);
      }
    }
  }
</style>
