<template>
  <div>
    <div class='container'>
      <h2>Louer un chapiteau de cirque ou une tente pour tout vos évenements</h2>
      <p>Nous construisons, livrons, montons, et décorons nos propres chapiteaux pour des événements dans toute la france depuis plus de 10 ans. <br>
        Mariage, anniversaire, réception, soirée dansante, nous sommes à l’écoute de tous vos projets. <br>Nous possédons deux camions capablent de vous livrez tout le materiel nécessaire partout dans l'hexagone, à n'importe quelle date. Vous pouvez ainsi louer vos chapiteaux et tentes pour votre mariage, réception, soirée en un rien de temps !
        <br>
        Pour vous faire gagner de l'argent, nous proposons que vous montiez vous-même un de nos chapiteau ou tente, avec la supervisation d'un maître monteur.
      </p>
      <h5>Appelez nous, votre chapiteau sera livré et monté aussitôt !</h5>
    </div>
    <Presentation :presentationList='presentations'></Presentation>
    <div class='container'>
      <h3 class='home__title'>Choisissez votre chapiteau à louer</h3>
    </div>
    <div class='container--xs'>
      <div class='row'>
        <div class='col-xs-12 col-sm-6' v-for='(card, index) in cards'>
          <Card :props='card' displayBackground='true' extraClass='card--hover'>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cards from 'store/cards.json'
const Presentation = () => import('@/components/Presentation.vue')
const Card = () => import('@/components/Card.vue')

export default {
  name: 'Home',
  data () {
    return {
      cards,
      presentations: [
        {
          iconName: 'security',
          iconClass: 'icn__xxl',
          displayIcon: 'true',
          title: 'Paiement sécurisé',
          description: 'Un paiement toujours sécurisé'
        },
        {
          iconName: 'home',
          iconClass: 'icn__xxl',
          displayIcon: 'true',
          title: 'Paiement sécurisé',
          description: 'Un paiement toujours sécurisé'
        },
        {
          iconName: 'local_shipping',
          iconClass: 'icn__xxl',
          displayIcon: 'true',
          title: 'Livraison rapide',
          description: 'Dans toute la France, quelques jours avant votre évènement'
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

<style lang='scss' scoped>
  @import '~stylesheets/helpers/_variables.scss';
  @import '~stylesheets/helpers/mixins/style.scss';

  .home__title {
    margin-top: 4rem;
  }

  .presentation {
    margin: 4rem 0 0 0;
  }

  .card {
    height: 300px;
    @include medium {
      margin: 0 0 2rem 0;
    }
  }
</style>
