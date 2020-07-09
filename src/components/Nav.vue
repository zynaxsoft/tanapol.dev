<template>
  <div class="navi">
    <nav>
    <router-link class="button-link" v-for="routes in links"
        v-bind:key="routes.id"
        :to="`${routes.page}`">
      <NeuButtonSmol v-if="showButtons" :id="routes.id" v-bind:pressEvent="routes.event">{{ routes.text }}</NeuButtonSmol>
    </router-link>
    </nav>
    <SocialButton v-if="showButtons" social="github" link="https://www.github.com/zynaxsoft" />
    <SocialButton v-if="showButtons" social="twitter" link="https://www.twitter.com/tanapoldev" />
    <SocialButton v-if="showButtons" social="linkedin" link="https://www.linkedin.com/in/tanapol-pr" />
    <SocialButton v-if="showButtons" social="mail" link="mailto:me@tanapol.dev" />
    <br>
    <a v-if="showButtons" href="https://static.tanapol.dev/gpg" title="E107 70F0 BA34 F84F DFA8  F272 7EA1 63BF EC31 6740">pgp</a>
  </div>
</template>

<script>

import { bus } from '../event-bus.js'
import NeuButtonSmol from './NeuButtonSmol.vue'
import SocialButton from './SocialButton.vue'

export default {
  name: 'Nav',
  components: {
    NeuButtonSmol,
    SocialButton,
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
          event: "overrideTerminal",
        },
        {
          id: 1,
          text: "Contact",
          page: "/contact",
          event: "",
        },
        {
          id: 2,
          text: "CV",
          page: "/cv",
          event: "",
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
      this.showButtons = false;
      bus.$emit("neupress", 0);
    } else if (this.$router.currentRoute.path == "/contact") {
      bus.$emit("neupress", 1);
    }
  },
}
</script>

<style scoped>
.navi {
  margin-bottom: 2.7em;
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
a {
  color: var(--green);
}
</style>
