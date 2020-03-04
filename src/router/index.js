import Vue from 'vue'
import Router from 'vue-router'

import Terminal from '@/components/Terminal.vue'
import Contact from '@/components/Contact.vue'
import CV from '@/components/CV.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Terminal',
      component: Terminal,
      meta: {
        title: 'About Tanapol',
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        title: 'Contact Tanapol',
      }
    },
    {
      path: '/cv',
      name: 'CV',
      component: CV,
      meta: {
        title: 'Curriculum Vitae',
      }
    },
  ]
})
