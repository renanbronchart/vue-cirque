<template>
  <div id="app">
    <AsideNav :props='asideLinks'></AsideNav>
    <NavHome @toggle='toggleSideBar'></NavHome>
    <router-view/>
  </div>
</template>

<script>
import asideLinks from 'store/asideLinks.json'
import 'stylesheets/style.scss'
import NavHome from '@/components/NavHome.vue'
import AsideNav from '@/components/AsideNav.vue'

export default {
  name: 'app',
  data () {
    return {
      asideLinks,
      sideBarOpen: false
    }
  },
  methods: {
    toggleSideBar (event) {
      this.sideBarOpen = !this.sideBarOpen
    }
  },
  components: {
    NavHome,
    AsideNav
  }
}
</script>

<style lang='scss'>
.nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.header {
  margin: 4.5rem 0 0 0;
}

</style>
