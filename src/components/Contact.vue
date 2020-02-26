<template>
  <div class="contact">
    yea this is a contact
  </div>
</template>

<script>

import { bus } from '../event-bus.js'

export default {
  name: 'Contact',
  components: {
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
    bus.$on('showNav', () => {
    })
  },
}
</script>

<style scoped>
</style>
