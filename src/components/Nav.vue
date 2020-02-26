<template>
  <div class="navi">
    <nav>
    <router-link class="button-link" v-for="routes in links"
        v-bind:key="routes.id"
        :to="`${routes.page}`">
      <NeuButtonSmol v-if="showButtons" :id="routes.id">{{ routes.text }}</NeuButtonSmol>
    </router-link>
    </nav>
  </div>
</template>

<script>

import { bus } from '../event-bus.js'
import NeuButtonSmol from './NeuButtonSmol.vue'

export default {
  name: 'Nav',
  components: {
    NeuButtonSmol,
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
  mounted: function() {
    if (this.$router.currentRoute.path == "/") {
      bus.$emit("neupress", 0);
    } else if (this.$router.currentRoute.path == "/contact") {
      bus.$emit("neupress", 1);
    }
  },
}
</script>

<style scoped>
.navi {
  margin-bottom: 3.5em;
}
.button-link {
  margin-right: 1em;
}
.button-link:link {
  text-decoration: none;
}
.button-link:visited {
  text-decoration: none;
}
</style>
