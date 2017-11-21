<template>
  <div>
    <h3>{{card.title}}</h3>
    <img :src="card.background" :alt="altImage">
  </div>
</template>

<script>
  import cards from 'store/cards.json'

  export default {
    name: 'chapiteau',
    data () {
      return {
        card: {},
      }
    },
    created () {
      this.card = cards[this.$route.params.id]
    },
    computed: {
      altImage () {
        return `Chapiteau ${this.card.title}`
      }
    }
  }
</script>

<style>
</style>
