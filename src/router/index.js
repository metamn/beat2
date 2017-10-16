import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pages/home'
import contact from '@/components/pages/contact'
import styleguideWithGulp from '@/components/pages/creating-a-styleguide-with-gulp'
import deliveringTheMessage from '@/components/pages/delivering-the-message'

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
    },
    {
      path: '/creating-a-styleguide-with-gulp',
      name: 'styleguideWithGulp',
      component: styleguideWithGulp
    },
    {
      path: '/delivering-the-message',
      name: 'deliveringTheMessage',
      component: deliveringTheMessage
    }
  ]
})
