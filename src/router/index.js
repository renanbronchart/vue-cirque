import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Chapiteau from '@/components/Chapiteau'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/chapiteau/:id',
      name: 'Chapiteau',
      component: Chapiteau
    },
    {
      path: '/*',
      redirect: {
        name: 'Home'
      }
    }
  ]
})
