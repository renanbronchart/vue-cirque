<template>
  <div>
    <Presentation :presentationList='presentations'></Presentation>
    <div class="container">
      <h3 class='home__title'>Choisissez votre chapiteau à louer</h3>
      <div class="row">
        <div class="col-xs-12 col-sm-6" v-for='(card, index) in cards'>
          <Card :props='card' displayBackground='true' extraClass='card--hover'>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Presentation from '@/components/Presentation.vue'
import Card from '@/components/Card.vue'
import cards from 'store/cards.json'
import header from 'store/header.json'

export default {
  name: 'Home',
  data () {
    return {
      cards,
      presentations: [
        {
          iconName: 'security',
          iconColor: 'gray',
          iconClass: '',
          displayIcon: 'true',
          title: 'Paiement sécurisé',
          description: 'Un paiement toujours sécurisé'
        },
        {
          iconName: 'home',
          iconColor: 'gray',
          iconClass: '',
          displayIcon: 'true',
          title: 'Paiement sécurisé',
          description: 'Un paiement toujours sécurisé'
        },
        {
          iconName: 'local_shipping',
          iconColor: 'gray',
          iconClass: '',
          displayIcon: 'true',
          title: 'Paiement sécurisé',
          description: 'Un paiement toujours sécurisé'
        }
      ]
    }
  },
  components: {
    Card,
    Presentation
  }
}
</script>

<style lang='scss'>
  .card,
  .home__title {
    margin: 2rem 0 0 0;
  }
</style>
