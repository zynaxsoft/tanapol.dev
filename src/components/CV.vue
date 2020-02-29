<template>
  <div class="cv">
  <div class="pdf">
    <a href="./cv.pdf" target="_blank">
      <pdf src="./cv.pdf"></pdf>
    </a>
  </div>
  </div>
</template>

<script>

import { bus } from '../event-bus.js'
import pdf from 'vue-pdf'

export default {
  name: 'CV',
  components: {
    pdf,
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
.pdf {
  box-shadow: -4px -4px 5px 0 rgba(255, 255, 255, 0.25),
               5px 5px 8px 0 rgba(0, 0, 0, 0.3);
  opacity: 0.98;
  width: 90%;
  margin: 0px auto;
}
</style>
