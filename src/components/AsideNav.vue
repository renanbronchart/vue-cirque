<template>
  <aside class='aside'>
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
    props: ['props']
  }
</script>

<style lang='scss' scoped>
  .aside {
    width: 340px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    box-shadow: 2px 0px 15px rgba(0, 0, 0, 0.35);
    z-index: 10;
  }

  .aside__title {
    height: 4.5rem;
    display: flex;
    padding: 1.2rem;
  }

  .section {
    border-top: 1px solid gray;
  }

  .section__title,
  .section__link {
    display: block;
    padding: 1.2rem;
  }
</style>
