<template>
  <div @click="onClick" class="neubutton blur-able" v-bind:class="{ 'neuactive': isActive }">
    <slot></slot>
  </div>
</template>

<script>

import { bus } from '../event-bus.js'

export default {
  name: 'NeuButton',
  props: {
    id: Number,
    pressEvent: {
      type: String,
      required: false,
    },
    independent: {
      type: Boolean,
      default: false,
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
      if (this.independent) {
        if (!this.isActive) {
          this.isActive = true;
        } else {
          this.isActive = false;
        }
        if (this.pressEvent != undefined) {
          bus.$emit(this.pressEvent);
        }
        return;
      }
      if (this.count < 1) {
        this.count++;
      }
      if (this.pressEvent != undefined) {
        bus.$emit(this.pressEvent);
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
  width: 8em;
  height: 2.2em;
  line-height: 2.2em;
  font-weight: 600;
  padding: 5px;
  text-align: center;
  box-shadow: -3px -3px 6px 0 rgba(255, 255, 255, 0.1),
              4px 6px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  background-color: var(--background);
  display: inline-block;
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
  box-shadow: 11px 6px 20px 0 rgba(0, 0, 0, 0.1) inset,
               -7px -7px 10px 0 rgba(255, 255, 255, 0.05) inset,
               2px 2px 1px 0 rgba(0, 0, 0, 0.02),
              -3px -4px 8px 0 rgba(255, 255, 255, 0.1);
  background-color: var(--background);
}
</style>
