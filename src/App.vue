<template>
  <div id="app" class='app'>
    <AsideNav :props='asideLinks' :active='sideBarOpen'></AsideNav>
    <NavHome @toggle='toggleSideBar'></NavHome>
    <main class='main'>
      <transition name='fade'>
        <router-view/>
      </transition>
    </main>
    <transition name='fade'>
      <div class="filter" v-if='sideBarOpen' @click.prevent='closeSideBar'></div>
    </transition>
    <FooterHome></FooterHome>
  </div>
</template>

<script>
import asideLinks from 'store/asideLinks.json'
import 'stylesheets/style.scss'

const NavHome = () => import('@/components/NavHome.vue')
const FooterHome = () => import('@/components/FooterHome.vue')
const AsideNav = () => import('@/components/AsideNav.vue')

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
    AsideNav,
    FooterHome
  }
}
</script>

<style lang='scss'>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.main {
  padding: 4rem 0 0 0;
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
