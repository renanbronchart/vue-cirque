<template>
  <div class='infos'>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-8">
          <h3 class='infos__title'>{{newChapiteau.title}}</h3>
          <img :src="imageSrc" :alt="altImage" class='img--responsive infos__image'>
        </div>
        <div class="col-xs-12 col-sm-6 col-sm-offset-3 col-md-4">
          <div class="infos__description">
            <p>{{newChapiteau.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import cards from 'store/cards.json'

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
        return `/static/${this.newChapiteau.background}`
      },

      newChapiteau () {
        return cards[this.$route.params.id]
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~stylesheets/helpers/_variables.scss';
  @import '~stylesheets/helpers/mixins/style.scss';

  .infos {
    margin: 40px 0 0 0;
  }

  .infos__title {
    margin: 0 0 20px 0;
  }

  .infos__description {
    margin: 2rem 0 0 0;
    @include large {
      margin: 10rem 0 0 0;
    }
  }
</style>
