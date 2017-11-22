<template>
  <div>
    <h3>Choisissez votre chapiteau à louer</h3>
    <div class="container">
      <div class="row">
        <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-md-4 col-lg-3" v-for='(card, index) in cards'>
          <Card :card='card'>
          </Card>
        </div>
      </div>
    </div>
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

<style lang='scss'>
  .card {
    margin: 0 0 20px 0;
  }
</style>
