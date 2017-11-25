<template>
  <div class='infos'>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-8">
          <h3 class='infos__title'>{{newChapiteau.title}}</h3>
          <img :src="imageSrc" :alt="altImage" class='img--responsive infos__image'>
        </div>
        <div class="infos__description">
          <p>{{newChapiteau.description}}</p>
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
    position: relative;
    margin: 40px 0 0 0;
  }

  .infos__title {
    margin: 0 0 20px 0;
  }

  .infos__description {
    margin: 2rem 0 0 0;
    @include large {
      width: 60%;
      position: absolute;
      top: 8rem;
      right: 0;
      background: white;
      border-radius: $border-radius-xs;
      transform: translateX(-40px);
      box-shadow: 0 0.5px 2.5px 0 rgba(0, 0, 0, 0.2), 0 1.5px 2px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.14);
      margin: 10rem 0 0 0;
      padding: 20px;
    }
  }
</style>
