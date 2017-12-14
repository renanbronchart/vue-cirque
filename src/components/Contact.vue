<template>
  <div class='contact'>
    <div class='container'>
      <BackTo></BackTo>
      <h3 class='page__title'>Contact</h3>
    </div>
    <img src="/static/card.png" alt="card location" class='map'>
    <div class="container">
      <Card class='contact__card'>
        <Presentation :presentationList='presentations'></Presentation>
      </Card>
    </div>
  </div>
</template>

<script>
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
          description: '+33666351155'
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
    min-width: 100%;
    height: 45vh;
    min-height: 350px;
    transform: translateX(-40%);
    margin: 2rem 0 0 0;
    @include medium {
      transform: translateX(-20%);
    }
    @include large {
      transform: translateX(-10%);
    }
    @include xlarge {
      width: 100%;
      max-width: 100%;
      height: auto;
      min-height: 0;
      transform: translateX(0);
    }
  }

</style>
