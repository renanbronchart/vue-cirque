<template>
  <div id="app">
    <AsideNav :props='asideLinks' :active='sideBarOpen'></AsideNav>
    <NavHome @toggle='toggleSideBar'></NavHome>
    <transition name='fade'>
      <router-view/>
    </transition>
    <transition name='fade'>
      <div class="filter" v-if='sideBarOpen' @click.prevent='closeSideBar'></div>
    </transition>
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
    },
    closeSideBar (event) {
      if (this.sideBarOpen) {
        this.sideBarOpen = false
      }
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

.filter {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 5;
}

</style>
