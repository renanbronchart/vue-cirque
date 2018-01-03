<template>
  <aside class='aside' :class="{'aside--active': active}">
    <ul class='aside__list'>
      <li class="aside__title">
        <h4>Chapiteau Location</h4>
      </li>
      <li v-for='section in props' class='section'>
        <h5 class='section__title'>{{section.title}}</h5>
        <ul class='section__links'>
          <router-link :to="{ name: link.pageName, params: { id: link.id }}" :title="link.titleLink" class='section__link' v-for='link in section.links'>
            {{link.labelLink}}
          </router-link>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: 'AsideNav',
    props: ['props', 'active']
  }
</script>

<style lang='scss' scoped>
  @import '~stylesheets/helpers/_variables.scss';
  @import '~stylesheets/helpers/mixins/style.scss';

  .aside {
    width: 230px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    box-shadow: 2px 0px 15px rgba(0, 0, 0, 0.35);
    transform: translateX(-350px);
    transition: transform .15s ease-in-out;
    overflow: hidden;
    overflow-x: auto;
    z-index: 10;
    @include medium {
      width: 340px;
    }
  }

  .aside--active {
    transform: translateX(0);
  }

  .aside__list {
    .section {

    }
  }

  .aside__title {
    height: 4.5rem;
    display: flex;
    padding: 1.2rem;
  }

  .section {
    border-top: 1px solid gray;
    padding: 0 0 1.2rem 0;
  }

  .section__title,
  .section__link {
    display: block;
    padding: 1.2rem;
  }
</style>
