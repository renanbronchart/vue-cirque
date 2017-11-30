<template>
  <div class='contact'>
    <div class='container'>
      <BackTo></BackTo>
      <h3 class='page__title'>Contact</h3>
    </div>
    <div id='map' class='map'></div>
    <div class="container">
      <Card class='contact__card'>
        <Presentation :presentationList='presentations'></Presentation>
      </Card>
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
const BackTo = () => import('@/components/BackTo.vue')
const Card = () => import('@/components/Card.vue')
const Presentation = () => import('@/components/Presentation.vue')

export default {
  data () {
    return {
      presentations: [
        {
          iconName: 'phone',
          iconClass: 'icn__xxl',
          displayIcon: 'true',
          linkHref: 'tel:+33666351155',
          title: 'Par téléphone',
          description: '+33666351155',
        },
        {
          iconName: 'email',
          iconClass: 'icn__xxl',
          displayIcon: 'true',
          title: 'Par email',
          linkHref: 'mailto:renan.bronchart@gmail.com',
          description: 'Une réponse sous deux, trois jours'
        },
        {
          iconName: 'add_location',
          iconClass: 'icn__xxl',
          displayIcon: 'true',
          title: 'Nous sommes pas loin',
          description: 'SARL Zanel,  23 rue Jean Jacques Rousseau, 75001 Paris'
        }
      ]
    }
  },
  mounted () {
    this.createMap()
  },
  methods: {
    createMap: function () {
      let map = this.map

      mapboxgl.accessToken = 'pk.eyJ1IjoicmVuYW5icm9uY2hhcnQiLCJhIjoiY2o5OW82cG1jMHdxZTMzcXRxbThnczZuMSJ9.zrdXIR4UBPh8195XRQPLtQ'

      map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/renanbronchart/cjaiubug4a7se2sp7uikzmket',
        center: [2.322, 48.853],
        zoom: 12,
        maxZoom: 12,
        minZoom: 12
      })

      map.scrollZoom.disable()
    }
  },
  components: {
    BackTo,
    Card,
    Presentation
  }
}
</script>

<style lang='scss'>
  @import '~stylesheets/helpers/_variables.scss';
  @import '~stylesheets/helpers/mixins/style.scss';

  .page__title {
    margin: 2rem 0 0 0;
  }

  .contact__card {
    background: white;
    transform: translateY(-10%);
    padding: 2rem 0;
    @include medium {
      transform: translateY(-30%);
    }
  }

  .map {
    min-height: 350px;
    height: 45vh;
    margin: 2rem 0 0 0;
  }

  .mapboxgl-control-container {
    display: none;
  }

</style>
