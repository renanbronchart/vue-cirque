<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <BackTo></BackTo>
        </div>
      </div>
    </div>
    <div class='infos'>
      <div class='container'>
        <div class='flex infos__container'>
          <div class='infos__illustration'>
            <h3 class='infos__title'>{{newChapiteau.title}}</h3>
            <img :src='imageSrc' :alt='altImage' class='img--responsive infos__image'>
          </div>
          <Card extraClass='card--description'>
            <h4 v-if='newChapiteau.title'>{{newChapiteau.title}}</h4>
            <p>{{newChapiteau.description}}</p>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import cards from 'store/cards.json'
  const Card = () => import('@/components/Card.vue')
  const BackTo = () => import('@/components/BackTo.vue')

  export default {
    name: 'chapiteau',
    data () {
      return {
        card: {}
      }
    },
    created () {
      this.card = this.newChapiteau
    },
    computed: {
      altImage () {
        return `Chapiteau ${this.newChapiteau.title}`
      },

      imageSrc () {
        return this.newChapiteau.background
      },

      newChapiteau () {
        return cards[this.$route.params.id]
      }
    },
    components: {
      BackTo,
      Card
    }
  }
</script>

<style lang='scss' scoped>
  @import '~stylesheets/helpers/_variables.scss';
  @import '~stylesheets/helpers/mixins/style.scss';

  .infos {
    position: relative;
    margin: 20px 0 0 0;
    @include large {
      margin: 40px 0 0 0;
    }
  }

  .infos__container {
    flex-direction: column;
    @include large {
      flex-direction: row;
    }
  }

  .infos__title {
    margin: 0 0 20px 0;
  }

  .infos__illustration {
    width: 100%;
    @include large {
      width: 70%;
      min-width: 70%;
    }
  }
</style>
