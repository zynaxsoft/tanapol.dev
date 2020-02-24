<template>
  <div id="terminal">
    <OneCommand
      v-if="curSeq > -1"
      @done="newSeq"
      msg="Hi! My name is Tanapol"
      cmdtxt="./introduction1"
      restxt="
      Wooooothis is<br> goodboy
      Wooooothis is<br> goodboy
      Wooooothis is<br> goodboy
      Wooooothis is<br> goodboy
      Wooooothis is<br> goodboy
      Wooooothis is<br> goodboy
      Wooooothis is<br> goodboy
      Wooooothis is<br> goodboy
      Wooooothis is<br> goodboy
      Wooooothis is<br> goodboy
      Wooooothis is<br> goodboy
      Wooooothis is<br> goodboy
      Wooooothis is<br> goodboy
      Wooooothis is<br> goodboy
      Wooooothis is<br> goodboy
      Wooooothis is<br> goodboy
      Wooooothis is<br> goodboy
      Wooooothis is<br> goodboy
      Wooooothis is<br> goodboy
      "
      />
    <OneCommand
      v-if="curSeq > 0"
      @done="newSeq"
      msg="Hi! My name is Tanapol"
      cmdtxt="./introduction2"
      restxt="
      Wooooo<br>this is good<br> boy
      If you are considering developing a port for Solarized, please see also the developer notes for information about optional repository structure and readme formats.

      Solarized flips between light and dark modes. In each mode, four monotones form the core values (with an optional fifth for emphasized content).
      If you are considering developing a port for Solarized, please see also the developer notes for information about optional repository structure and readme formats.

      Solarized flips between light and dark modes. In each mode, four monotones form the core values (with an optional fifth for emphasized content).
      "
      />
    <OneCommand
      v-if="curSeq > 1"
      @done="newSeq"
      msg="Hi! My name is Tanapol"
      cmdtxt="./introduction3"
      restxt="
      Wooooo<br>this is good<br> boy
      If you are considering developing a port for Solarized, please see also the developer notes for information about optional repository structure and readme formats.

      Solarized flips between light and dark modes. In each mode, four monotones form the core values (with an optional fifth for emphasized content).
      If you are considering developing a port for Solarized, please see also the developer notes for information about optional repository structure and readme formats.

      Solarized flips between light and dark modes. In each mode, four monotones form the core values (with an optional fifth for emphasized content).
      "
      />
    <OneCommand
      v-if="curSeq > 2"
      @done="newSeq"
      msg="Hi! My name is Tanapol"
      cmdtxt="./introduction4"
      restxt="
      Wooooo<br>this is good<br> boy
      If you are considering developing a port for Solarized, please see also the developer notes for information about optional repository structure and readme formats.

      Solarized flips between light and dark modes. In each mode, four monotones form the core values (with an optional fifth for emphasized content).
      If you are considering developing a port for Solarized, please see also the developer notes for information about optional repository structure and readme formats.

      Solarized flips between light and dark modes. In each mode, four monotones form the core values (with an optional fifth for emphasized content).
      "
      />
    <OneCommand
      v-if="curSeq > 3"
      @done="newSeq"
      msg="Hi! My name is Tanapol"
      cmdtxt="./introduction5"
      restxt="
      Wooooo<br>this is good<br> boy
      If you are considering developing a port for Solarized, please see also the developer notes for information about optional repository structure and readme formats.

      Solarized flips between light and dark modes. In each mode, four monotones form the core values (with an optional fifth for emphasized content).
      If you are considering developing a port for Solarized, please see also the developer notes for information about optional repository structure and readme formats.

      Solarized flips between light and dark modes. In each mode, four monotones form the core values (with an optional fifth for emphasized content).
      "
      />
    <OneCommand
      v-if="curSeq > 4"
      @done="newSeq"
      msg="Hi! My name is Tanapol"
      cmdtxt="./introduction6"
      restxt="
      Wooooo<br>this is good<br> boy
      If you are considering developing a port for Solarized, please see also the developer notes for information about optional repository structure and readme formats.

      Solarized flips between light and dark modes. In each mode, four monotones form the core values (with an optional fifth for emphasized content).
      If you are considering developing a port for Solarized, please see also the developer notes for information about optional repository structure and readme formats.

      Solarized flips between light and dark modes. In each mode, four monotones form the core values (with an optional fifth for emphasized content).
      "
      />
    <OneCommand
      v-if="curSeq > 5"
      @done="newSeq"
      msg="Hi! My name is Tanapol"
      cmdtxt="./introduction7"
      restxt="
      If you are considering developing a port for Solarized, please see also the developer notes for information about optional repository structure and readme formats.

      Solarized flips between light and dark modes. In each mode, four monotones form the core values (with an optional fifth for emphasized content).
      "
      :showLastPrompt="true"
      />
    <div class="empty-spaces"></div>
    <div class="nothing-ness"
         v-observe-visibility="{
           callback: triggerNothingness,
           intersection: {
             threshold: 1,
             },
           throttle: 1000,
           once: true,
           }"
    >
      Nothing to see here</div>
  </div>
</template>

<script>
import OneCommand from './OneCommand.vue'
import { bus } from '../event-bus.js'

export default {
  name: 'Terminal',
  components: {
    OneCommand
  },
  data() {
    return {
      curSeq: 0,
    }
  },
  methods: {
    newSeq: function () {
      this.curSeq++;
    },
    triggerNothingness: function (isVisible) {
      if (isVisible) {
        console.log('Calm down!');
        this.$emit("theyAreHurried");
      }
    },
    showEverything: function () {
      this.curSeq = 100;
      bus.$emit('overrideCommand');
    },
  },
  created: function () {
    bus.$on('overrideTerminal', this.showEverything);
  },
}
</script>

<style scoped>
.empty-spaces {
  padding-bottom: 300vh;
}
.nothing-ness {
  background-color: var(--base0);
  color: var(--base02);
  font-weight: 600;
  padding: 5px;
  text-align: center;
}
a {
  color: var(--green);
}
.command {
  line-height: 1.4;
}
</style>
