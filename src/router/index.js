import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const Home = () => import('@/components/Home')
const Contact = () => import('@/components/Contact')
const Chapiteau = () => import('@/components/Chapiteau')

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
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/*',
      redirect: {
        name: 'Home'
      }
    }
  ]
})
