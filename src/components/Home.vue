<template>
  <div>
    <section class="section container--xs">
      <ImageResponsive linkHref="/static/grand-chapiteau.jpg" description="Un grand chapiteau de cirque" class="banner__home"></ImageResponsive>
    </section>
    <section class='container section'>
      <h2>Louer un chapiteau de cirque ou une tente pour tout vos évenements</h2>
      <p>Nous construisons, livrons, montons, et décorons nos propres chapiteaux pour des événements dans toute la france depuis plus de 10 ans. <br>
        Mariage, anniversaire, réception, soirée dansante, nous sommes à l’écoute de tous vos projets. <br>Nous possédons deux camions capablent de vous livrez tout le materiel nécessaire partout dans l'hexagone, à n'importe quelle date. Vous pouvez ainsi louer vos chapiteaux et tentes pour votre mariage, réception, soirée en un rien de temps !
        <br>
        Pour vous faire gagner de l'argent, nous proposons que vous montiez vous-même un de nos chapiteau ou tente, avec la supervisation d'un maître monteur.
      </p>
      <h5>Appelez nous, votre chapiteau sera livré et monté aussitôt !</h5>
    </section>
    <section class="section">
      <Presentation :presentationList='presentations'></Presentation>
    </section>
    <section class="section">
      <div class='container'>
        <h3 class='home__title'>Choisissez votre chapiteau à louer</h3>
      </div>
      <div class='container--xs'>
        <div class='row'>
          <div class='col-xs-12 col-sm-6' v-for='(card, index) in cards'>
            <Card :props='card' displayLink='true' extraClass='card--hover'>
            </Card>
          </div>
        </div>
        <div class="text--center">
          <ButtonMaterial label="Réservez votre chapiteau" href="http://www.francklocation.com/wizard/step1.php"></ButtonMaterial>
        </div>
      </div>
    </section>
    <section class="section">
      <div class='container'>
        <h3 class='home__title'>Nos accessories pour chapiteaux</h3>
      </div>
      <div class="container--xs">
        <div class="row">
          <div class="col-xs-12 col-sm-3" v-for="(accessorie, index) in accessories">
            <ImageResponsive :linkHref="accessorie.linkHref" :description="accessorie.description"></ImageResponsive>
          </div>
        </div>
        <div class="text--center">
          <ButtonMaterial label="Réservez vos accessoires" href="http://www.francklocation.com/wizard/step1.php"></ButtonMaterial>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import cards from 'store/cards.json'
import accessories from 'store/accessories.json'
const Presentation = () => import('@/components/Presentation.vue')
const Card = () => import('@/components/Card.vue')
const ImageResponsive = () => import('@/components/ImageResponsive.vue')
const ButtonMaterial = () => import('@/components/molecules/ButtonMaterial.vue')

export default {
  name: 'Home',
  data () {
    return {
      cards,
      accessories,
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
          title: 'Montage professionnel',
          description: 'Possibilité de montage par nos soins'
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
    ImageResponsive,
    Presentation,
    ButtonMaterial
  }
}
</script>

<style lang='scss' scoped>
  @import '~stylesheets/helpers/_variables.scss';
  @import '~stylesheets/helpers/mixins/style.scss';

  .banner__home {
    margin: -4rem 0 0 0;
    @include medium {
      margin: 0;
    }
  }

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
