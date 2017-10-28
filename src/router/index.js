import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pages/home'
import contact from '@/components/pages/contact'
import styleguideWithGulp from '@/components/pages/creating-a-styleguide-with-gulp'
import deliveringTheMessage from '@/components/pages/delivering-the-message'
import noProblemsFrontend from '@/components/pages/no-more-problems-on-the-front-end'
import herculean from '@/components/pages/herculean'
import peopleApart2016 from '@/components/pages/what-some-people-apart-are-up-to-in-2016'
import isItWebOrPhotoshop from '@/components/pages/is-it-web-or-photoshop'

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
    },
    {
      path: '/no-more-problems-on-the-front-end',
      name: 'noProblemsFrontend',
      component: noProblemsFrontend
    },
    {
      path: '/herculean',
      name: 'herculean',
      component: herculean
    },
    {
      path: '/what-some-people-apart-are-up-to-in-2016',
      name: 'peopleApart2016',
      component: peopleApart2016
    },
    {
      path: '/is-it-web-or-photoshop',
      name: 'isItWebOrPhotoshop',
      component: isItWebOrPhotoshop
    }
  ]
})
