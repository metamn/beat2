import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pages/home'
import contact from '@/components/pages/contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: contact
    }
  ]
})
