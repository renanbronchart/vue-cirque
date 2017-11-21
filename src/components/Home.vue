<template>
  <div>
    <h3>Choisissez votre chapiteau à louer</h3>
    <Card
      v-for='(card, index) in cards'
      :title='card.title'
      :description='card.description'
      :background='card.background'
      :linkName='card.linkName'
      :id='card.id'
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
