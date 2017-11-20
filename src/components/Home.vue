<template>
  <div>
    <h3>Choisissez votre chapiteau à louer</h3>
    <Card
      v-for='(card, index) in cards'
      :title='card.title'
      :description='card.description'
      :background='card.background'
      :linkName='card.linkName'
      :linkParams='card.linkParams'
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
      title: 'Le Vintage',
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
