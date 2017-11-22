<template>
  <div>
    <Header :props='header'></Header>
    <div class="container">
      <h3>Choisissez votre chapiteau à louer</h3>
      <div class="row">
        <div class="col-xs-12 col-sm-6" v-for='(card, index) in cards'>
          <Card :props='card'>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Card from '@/components/Card.vue'
import cards from 'store/cards.json'
import header from 'store/header.json'

export default {
  name: 'Home',
  data () {
    return {
      cards,
      header
    }
  },
  components: {
    Card,
    Header
  }
}
</script>

<style lang='scss'>
  .card {
    margin: 0 0 20px 0;
  }
</style>
