<template>
  <div class='contact'>
    <div class='container'>
      <BackTo></BackTo>
      <h3 class='page__title'>Contact</h3>
    </div>
    <div id='map' class='map'></div>
  </div>
</template>

<script>
const BackTo = () => import('@/components/BackTo.vue')
import mapboxgl from 'mapbox-gl'

export default {
  data () {
    return {}
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
        center: [2.341,48.853],
        zoom: 12,
        maxZoom: 12,
        minZoom: 12
      })

      map.scrollZoom.disable()
    }
  },
  components: {
    BackTo
  }
}
</script>

<style lang='scss' scoped>
  .page__title {
    margin: 2rem 0 0 0;
  }

  .map {
    min-height: 60vh;
    height: 60vh;
    margin: 2rem 0 0 0;
  }
</style>
