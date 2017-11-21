<template>
  <div>
    <div class="card" :style="{backgroundImage: 'url(' + card.background + ')'}">
      <div class="card__filter">
        <div class="card__infos">
          <h4>{{card.title}}</h4>
          <p>{{card.description}}</p>
          <router-link :to="{ name: card.linkName, params: { id: card.id }}">Voir le chapiteau</router-link>
        </div>
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
