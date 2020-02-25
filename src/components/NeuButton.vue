<template>
  <div @click="onClick" class="neubutton" v-bind:class="{ 'neuactive': isActive }">
    <slot></slot>
  </div>
</template>

<script>

import { bus } from '../event-bus.js'

export default {
  name: 'NeuButton',
  props: {
    pressEvent: String,
  },
  data() {
    return {
      isActive: false,
      state: 0, // 0 for dark, 1 for light
    }
  },
  methods: {
    onClick: function () {
      if (this.state == 0) {
        this.state = 1;
        this.isActive = true;
      } else {
        this.state = 0;
        this.isActive = false;
      }
      bus.$emit(this.pressEvent);
    },
  },
  watch: {
    state: function (value) {
      if (value == 0) {
        document.getElementsByClassName("neubutton")[0].style.boxShadow = `blur(2px)`;
      } else {
        value;
      }
    }
  },
  created: function () {
    bus.$on('overrideCommand', () => {
      })
  },
}
</script>

<style scoped>
.neubutton {
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  background-color: var(--bg-hl);
  color: var(--text);
  width: 10em;
  height: 3em;
  font-weight: 600;
  padding: 5px;
  line-height: 3em;
  text-align: center;
  box-shadow: -3px -4px 8px 0 rgba(255, 255, 255, 0.1),
              8px 8px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  background-color: var(--background);
}
.neubutton:hover {
  /*
  padding: 4px;
  border-color: var(--comment);
  border-style: solid;
  border-width: 1px;
  */
}
.neuactive, .neubutton:active {
  box-shadow: 11px 6px 20px 0 rgba(0, 0, 0, 0.05) inset,
               7px 7px 23px 0 rgba(0, 0, 0, 0.05) inset,
              -3px -4px 8px 0 rgba(255, 255, 255, 0.1);
  background-color: var(--background);
}
</style>
