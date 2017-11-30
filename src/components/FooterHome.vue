<template>
  <footer class='footer'>
    <div class='container'>
      <div class='row'>
        <div class='col-xs-12 col-sm-6 col-md-3'>
          <div class='footer__column'>
            <h4 class='footer__title'>Louer votre chapiteau</h4>
            <router-link :to='{name: "Contact"}' class='footer__link'>
              Prendre contact
            </router-link>
            <a href='http://www.francklocation.com/' title='franck location devis en ligne' target='_blank'class='footer__link'>Faire un devis en ligne</a>
          </div>
        </div>
        <div class='col-xs-12 col-sm-6 col-md-4'>
          <div class='footer__column footer--margin'>
            <h4 class='footer__title'>Partenaires</h4>
            <a href='http://www.franckzavatta.com/' class='footer__link' title='franck zavatta' target='_blank'>Franck Zavatta, artiste de cirque</a>
            <a href='http://www.locationdechapiteaux.org/' class='footer__link'>Location de chapiteau de cirque</a>
          </div>
        </div>
        <div class='col-xs-12'>
          <div class='footer__bottom'>
            <router-link :to='{name: "Terms"}' class='footer__link' title="conditions d'utilisation">
              Conditions d'utilisation
            </router-link>
            <span> - </span>
            <a href='http://renanbronchart.com' title='site du développeur renan bronchart' class='footer__link' target='_blank'>All rights reserved © 2017</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang='scss' scoped>
  @import '~stylesheets/helpers/_variables.scss';
  @import '~stylesheets/helpers/mixins/style.scss';

  .footer {
    background: $blue-gray;
    color: white;
    padding: 2rem 0 1rem 0;
    margin: 2rem 0 0 0;
  }

  .footer__column {
    display: flex;
    flex-direction: column;
  }

  .footer--margin {
    margin: 2.5rem 0 0 0;
    @include medium {
      margin: 0;
    }
  }

  .footer__title {
    margin: 0 0 1.2rem 0;
  }

  .footer__link {
    color: white;
    padding: 0.8rem 0;
  }

  .footer__bottom {
    text-align: center;
    margin: 2rem 0 0 0;
  }

</style>
