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
      @done="done"
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
      finished: false,
    }
  },
  methods: {
    newSeq: function () {
      this.curSeq++;
    },
    done: function () {
      this.finished = true;
    },
    triggerNothingness: function (isVisible) {
      if (isVisible && !this.finished) {
        console.log('Calm down!');
        this.$emit("theyAreHurried");
      }
    },
    showEverything: function () {
      this.curSeq = 100;
      window.scrollTo(0,0);
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
  background-color: var(--bg-hl);
  color: var(--text);
  font-weight: 600;
  padding: 5px;
  text-align: center;
  box-shadow: -3px -4px 8px 0 rgba(255, 255, 255, 0.1),
              8px 8px 10px 0 rgba(0, 0, 0, 0.4);
  border-radius: 3px;
}
a {
  color: var(--green);
}
.command {
  line-height: 1.4;
}
</style>
