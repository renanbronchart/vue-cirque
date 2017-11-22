<template>
  <div id="app">
    <NavHome @toggle='toggleSideBar'></NavHome>
    <router-view/>
  </div>
</template>

<script>
import 'stylesheets/style.scss'
import NavHome from '@/components/NavHome.vue'

export default {
  name: 'app',
  data () {
    return {
      sideBarOpen: false
    }
  },
  methods: {
    toggleSideBar (event) {
      this.sideBarOpen = !this.sideBarOpen
    }
  },
  components: {
    NavHome
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
