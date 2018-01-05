<template>
  <div class="card" :style='styleBackground' :class='extraClass'>
    <router-link :to="{ name: props.linkName, params: { id: props.id }}" class='card__link' v-if='displayLink'>
      <div class="card__filter">
      </div>
      <div class="card__infos">
        <h4>{{props.title}}</h4>
        <!-- <p>{{props.description}}</p> -->
      </div>
    </router-link>
    <div v-else>
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      props: {
        type: Object
      },
      displayBackground: {
        default: false
      },
      displayLink: {
        default: false
      },
      extraClass: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
      }
    },
    computed: {
      styleBackground () {
        return this.displayBackground || this.displayLink ? `background-image: url('${this.props.background}')` : ''
      }
    }
  }
</script>

<style scoped='true' lang='scss'>
  @import '~stylesheets/helpers/_variables.scss';
  @import '~stylesheets/helpers/mixins/style.scss';

  .card {
    position: relative;
    border-radius: $border-radius-xs;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    box-shadow: 0 0.5px 2.5px 0 rgba(0, 0, 0, 0.2), 0 1.5px 2px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.14);
    transition: all .2s ease-in-out;

    &.card--description {
      height: auto;
      margin: 2rem 0 0 0;
      box-shadow: none;
      @include large {
        width: 50%;
        min-width: 50%;
        background: white;
        border-radius: $border-radius-xs;
        transform: translate(-50%, 150px);
        box-shadow: 0 0.5px 2.5px 0 rgba(0, 0, 0, 0.2), 0 1.5px 2px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.14);
        margin: 10rem 0 150px 0;
        padding: 20px;
      }
    }

    .card__link {
      height: 100%;
      position: relative;
      display: block;
    }

    .card__filter {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: black;
      opacity: 0.4;
      transition: opacity .25s ease-in-out;
    }

    .card__infos {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      color: white;
      opacity: 1;
      transition: all .2s ease-in-out;
      padding: 20px;
    }

    @include medium {
      .card__filter,
      .card__infos {
        opacity: 0;
      }

      .card__infos {
        transform: translateY(20px);
      }

      &.card--hover {
        &:hover {
          box-shadow: 0 2px 2.5px 0 rgba(0, 0, 0, 0.2), 0 1.5px 7px 1.5px rgba(0, 0, 0, 0.12), 0 4px 5px 0.5px rgba(0, 0, 0, 0.14);
          transform: translateY(-8px);
        }
      }

      &:hover,
      &.card--displayHover {
        .card__filter {
          opacity: 0.6;
        }

        .card__infos {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }
</style>
