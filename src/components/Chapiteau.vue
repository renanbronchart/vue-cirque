<template>
  <div>
    <h3>{{newChapiteau.title}}</h3>
    <img :src="imageSrc" :alt="altImage">
  </div>
</template>

<script>
  import cards from 'store/cards.json'

  export default {
    name: 'chapiteau',
    data () {
      return {
        card: {}
      }
    },
    created () {
      this.card = this.newChapiteau
    },
    computed: {
      altImage () {
        return `Chapiteau ${this.newChapiteau.title}`
      },

      imageSrc () {
        return `/static/${this.newChapiteau.background}`
      },

      newChapiteau () {
        return cards[this.$route.params.id]
      }
    }
  }
</script>

<style>
</style>
