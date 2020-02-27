<template>
  <div @click="onClick" class="neubutton blur-able" v-bind:class="{ 'neuactive': isActive }">
    <slot></slot>
  </div>
</template>

<script>

import { bus } from '../event-bus.js'

export default {
  name: 'NeuButtonSmol',
  props: {
    id: Number,
    pressEvent: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      isActive: false,
      count: 0,
    }
  },
  methods: {
    onClick: function () {
      if (this.count < 1) {
        this.count++;
      }
      if (this.pressEvent != undefined) {
        setTimeout(
          () => {bus.$emit(this.pressEvent);}, 200
        )
        setTimeout(
          () => {bus.$emit(this.pressEvent);}, 200
        )
      }
      if (!this.isActive) {
        this.isActive = true;
        bus.$emit('neupress', this.id);
      }
    },
  },
  watch: {
  },
  created: function () {
    bus.$on('neupress', (pressedId) => {
      if (this.independent) {
        return;
      }
      if (!this.isActive && this.count < 1) {
        this.isActive = true;
      }
      if (this.isActive && this.id != pressedId) {
        this.isActive = false;
        return;
      }
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
  width: 5em;
  height: 2em;
  line-height: 2em;
  font-weight: 600;
  font-size: 12px;
  padding: 2px;
  text-align: center;
  box-shadow: -2px -2px 5px 0 rgba(255, 255, 255, 0.1),
              2px 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  background-color: var(--background);
  display: inline-block;
  margin-bottom: 0.5em;
}
.neuactive, .neubutton:active {
  box-shadow: -11px -6px 14px 0 rgba(255, 255, 255, 0.04) inset,
               7px 7px 10px 0 rgba(0, 0, 0, 0.16) inset,
               2px 2px 1px 0 rgba(0, 0, 0, 0.02),
              2px 2px 5px 0 rgba(0, 0, 0, 0.01) inset,
              -2px -2px 5px 0 rgba(255, 255, 255, 0.1);
  background-color: var(--background);
  color: var(--comment);
}
</style>
