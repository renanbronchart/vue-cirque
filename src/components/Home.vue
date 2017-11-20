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


<!--     <Card v-for='(card, index) in cards'
      :title= 'card.title',
      :description= 'card.description',
      :linkName= 'card.linkName',
      :linkParams= 'card.linkParams'
    ></Card> -->
  </div>
</template>

<script>
// import Card from './Card.vue'
import Card from './Card.vue'

export default {
  name: 'Home',
  data () {
    return {
      title: 'Le Vintage',
      cards: [
        {
          title: 'Le Vintage',
          description: "À l'ancienne",
          linkName: 'Chapiteau',
          linkParams: '1',
          background: '@/static/LeVintage.jpg'
        }
      ]
    }
  },
  components: {
    Card
  }
}
</script>

<style>
</style>
