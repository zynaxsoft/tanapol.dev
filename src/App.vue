<template>
  <div id="app">
    <Terminal @theyAreHurried="onHurried" class="blur-able"/>
    <div v-if="hurried && !overridden" class="popup">
      <OverrideTerm @overriddenTyped="turnOffPopup"/>
    </div>
  </div>
</template>

<script>
import Terminal from './components/Terminal.vue'
import OverrideTerm from './components/OverrideTerm.vue'
import { bus } from './event-bus.js'

export default {
  name: 'App',
  components: {
    Terminal,
    OverrideTerm,
  },
  data() {
    return {
      hurried: false,
      overridden: false,
    }
  },
  methods: {
    onHurried: function () {
      this.hurried = true;
      document.getElementsByClassName("blur-able")[0].style.filter = "blur(2px)";
    },
    turnOffPopup: function () {
      bus.$emit('overrideTerminal');
      setTimeout(() => {
        bus.$emit('overrideTerminal');
        document.getElementsByClassName("blur-able")[0].style.filter = "";
        this.overridden = true;
      }, 2000)
    },
  },
}
</script>

<style>
:root {
  --base03: #002b36;
  --base02: #073642;
  --base01: #586e75;
  --base00: #657b83;
  --base0: #839496;
  --base1: #93a1a1;
  --base2: #eee8d5;
  --base3: #fdf6e3;
  --yellow: #b58900;
  --orange: #cb4b16;
  --red: #dc322f;
  --magent: #d33682;
  --violet: #6c71c4;
  --blue: #268bd2;
  --cyan: #2aa198;
  --green: #859900;
}
#app {
  font-family: dejavu;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--base0);
  background-color: var(--base03);
  margin-top: 60px;
  min-width: 338px;
  max-width: 500px;
  width: 90vw;
  margin: 0 auto;
  padding: 5px;
}

#nav {
  border-style: solid;
  border-color: var(--base02);
}

.popup {
  position: absolute;
  left: 20vw;
  top: 50vh;
  z-index: 1;
  background-color: rgba(253, 246, 227, 0.9);
  padding: 1vw;
  width: 60vw;
}

@font-face {
  font-family: dejavu;
  src: url(assets/dejavu_font.woff);
}

.vue-typer {
  font-family: dejavu;
}
.vue-typer .custom.char {
  color: var(--base0);
}
.vue-typer .custom.caret {
  width: 10px;
  background-color: var(--base0);
}
</style>
