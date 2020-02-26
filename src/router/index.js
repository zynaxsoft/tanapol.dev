import Vue from 'vue'
import Router from 'vue-router'

import Terminal from '@/components/Terminal.vue'
import Contact from '@/components/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Terminal',
      component: Terminal
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
  ]
})
