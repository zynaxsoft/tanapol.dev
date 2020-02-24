<template>
  <div id="app">
    <Terminal @theyAreHurried="onHurried" class="blur-able"/>
    <div class="popup">
      <div v-if="hurried && !overridden" class="popup-wrapper">
        <OverrideTerm @overriddenTyped="turnOffPopup"/>
      </div>
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
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
  color: var(--base0);
  background-color: var(--base03);
  margin-top: 60px;
  min-width: 338px;
  max-width: 840px;
  width: 90vw;
  margin: auto;
  left: -3px;
  position: relative;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 3px;
  /*box-shadow: 4px 5px 20px rgba(0, 0, 0, 0.7);*/
  box-shadow: -4px -5px 12px 0 rgba(255, 255, 255, 0.05),
              8px 9px 12px 0 rgba(0, 0, 0, 1);
}

#nav {
  border-style: solid;
  border-color: var(--base02);
}

.popup {
  position: fixed;
  top: 30vh;
  left: 5vw;
  width: 90vw;
  align-items: center;
  justify-content: center;
}

.popup .popup-wrapper {
  align-items: center;
  display: flex;
  z-index: 1;
  background-color: rgba(253, 246, 227, 1);
  border-radius: 3px;
  padding: 1vw;
  /*box-shadow: 4px 5px 20px rgba(0, 0, 0, 0.7);*/
  box-shadow: -4px -5px 12px 0 rgba(255, 255, 255, 0.1),
              8px 9px 12px 0 rgba(0, 0, 0, 1);
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
