<template>
  <div class="nav">
    <NeuButton v-if="showButtons" press-event="switchTheme">Solarized!</NeuButton>
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
      showButtons: false,
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
</style>
