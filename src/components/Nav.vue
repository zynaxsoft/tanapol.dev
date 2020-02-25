<template>
  <div class="nav">
    <NeuButton press-event="switchTheme"/>
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
    }
  },
  methods: {
  },
  watch: {
  },
  created: function () {
    bus.$on('overrideCommand', () => {
      })
  },
}
</script>

<style scoped>
</style>
