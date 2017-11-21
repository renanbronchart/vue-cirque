<template>
  <div>
    <h3>Choisissez votre chapiteau à louer</h3>
    <Card
      v-for='(card, index) in cards'
      :card='card'
    >
    </Card>
  </div>
</template>

<script>
import Card from './Card.vue'
import cards from 'store/cards.json'

export default {
  name: 'Home',
  data () {
    return {
      cards
    }
  },
  components: {
    Card
  }
}
</script>

<style>
</style>
