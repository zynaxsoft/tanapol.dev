<template>
  <div class="contact">
  Feel free to contact me! I can be reached by:
  <ul>
  <li>Twitter: tanapoldev</li>
  <li>Email: me@tanapol.dev</li>
  <li>Linkedin: tanapol-pr</li>
  </ul>
  Or you could just press the buttons above 😅.
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
.contact {
  line-height: 1.6em;
}
</style>
