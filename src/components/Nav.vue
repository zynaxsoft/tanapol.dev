<template>
  <div class="nav">
    <nav>
    <router-link class="button-link" v-for="routes in links"
        v-bind:key="routes.id"
        :to="`${routes.page}`">
      <NeuButton v-if="showButtons" :id="routes.id"
        >Solarized!</NeuButton>
    </router-link>
    </nav>
  </div>
</template>

<script>

import { bus } from '../event-bus.js'
import NeuButton from './NeuButton.vue'

export default {
  name: 'Nav',
  components: {
    NeuButton,
  },
  props: {
  },
  data() {
    return {
      links: [
        {
          id: 0,
          text: "About",
          page: "/",
        },
        {
          id: 1,
          text: "Contact",
          page: "/contact",
        },
      ],
      showButtons: true,
    }
  },
  methods: {
  },
  watch: {
  },
  created: function () {
    bus.$on('showNav', () => {
      this.showButtons = true;
    })
  },
}
</script>

<style scoped>
.button-link:link {
  text-decoration: none;
}
.button-link:visited {
  text-decoration: none;
}
</style>
