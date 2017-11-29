<template>
  <div>
    <div class="container">
      <h2>Louer une tente pour tout vos évenements</h2>
      <p>France Location conçoit, construit, aménage et décore des espaces éphémères pour vos événements depuis 50 ans. Que ce soit pour des événements professionnels ou privés, nos équipes sont à l’écoute de votre projet. Notre stock de matériel nous permet de répondre à une grande diversité d’événements. Nous proposons ainsi la location de tentes, chapiteaux et orangerie pour vos projets de mariages, réceptions, événements sportifs et culturels, événements d’entreprise, foires et salons mais aussi la location de structures et chapiteaux CTS pour vos besoins de stockage et d’agrandissement de surface.</p>
    </div>
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
