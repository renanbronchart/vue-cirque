<template>
  <div class='presentation'>
    <div class='container'>
      <div class='row'>
        <div class='col-xs-12 col-sm-4' v-for='(presentation, index) in presentationList' :class='{"column--border" : index !== 0}'>
          <div class='presentation__column'>
            <a :href='presentation.linkHref' v-if='presentation.linkHref' class='presentation__link'/>
            <Icon :name='presentation.iconName' :color='presentation.iconColor' :extraClass='presentation.iconClass' v-if='presentation.displayIcon' class='presentation__icon'></Icon>
            <h3 class='presentation__title'>{{presentation.title}}</h3>
            <p class='presentation__description' v-if='presentation.description'>{{presentation.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const Icon = () => import('@/components/molecules/Icon.vue')

  export default {
    props: ['presentationList'],
    data () {
      return {
      }
    },
    components: {
      Icon
    }
  }
</script>

<style lang='scss' scoped>
  @import '~stylesheets/helpers/_variables.scss';
  @import '~stylesheets/helpers/mixins/style.scss';

  .presentation {
    text-align: center;
  }

  .presentation__icon {
    transition: transform .2s ease-in-out;
    margin: 0 0 1.5rem 0;
  }

  .presentation__link {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
    &:hover {
      & + .presentation__icon {
        transform: translateY(-10px);
      }
    }
  }

  .presentation__column {
    position: relative;
    padding: 2rem;
    .presentation__icon {
      color: $red-secondary;
    }
  }

  .column--border {
    @include medium {
      border-left: 1px solid $gray;
    }
  }

</style>
