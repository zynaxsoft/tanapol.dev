<template>
  <div id="app">
    <div id="nav-bar">
    <Nav
    v-observe-visibility="{
      callback: showNav,
      intersection: {
        threshold: 1,
        },
      throttle: 200,
      }"
      />
    </div>
    <div id="solarized-button">
    <NeuButton press-event="switchTheme" :independent="true" :id="999">Solarized!</NeuButton>
    </div>
    <router-view />
    <div class="popup">
      <div v-if="hurried && !overridden" class="popup-wrapper">
        <OverrideTerm @overriddenTyped="turnOffPopup"/>
      </div>
    </div>
  </div>
</template>

<script>
import OverrideTerm from './components/OverrideTerm.vue'
import Nav from './components/Nav.vue'
import NeuButton from './components/NeuButton.vue'
import { bus } from './event-bus.js'

export default {
  name: 'App',
  components: {
    Nav,
    NeuButton,
    OverrideTerm,
  },
  data() {
    return {
      theme: 0,
      hurried: false,
      overridden: false,
      didShowNav: false,
    }
  },
  methods: {
    showNav: function(isVisible) {
      if (isVisible) {
        return;
      }
      if (!this.didShowNav) {
        bus.$emit('showNav');
        this.didShowNav = true;
      }
    },
    onHurried: function () {
      this.hurried = true;
      let blurable = document.getElementsByClassName("blur-able")
      document.getElementById("app").style.pointerEvents = "none";
      let i;
      for (i = 0; i < blurable.length; i++) {
        blurable[i].style.filter = "blur(2px)";
      }
    },
    turnOffPopup: function () {
      bus.$emit('overrideTerminal');
      setTimeout(() => {
        bus.$emit('overrideTerminal');
        let blurable = document.getElementsByClassName("blur-able")
        let i;
        for (i = 0; i < blurable.length; i++) {
          blurable[i].style.filter = "";
        }
        this.overridden = true;
        document.getElementById("app").style.pointerEvents = "";
      }, 2000)
    },
  },
  created: function () {
    bus.$on('theyAreHurried', this.onHurried);
    bus.$on('switchTheme', () => {
      let root = document.documentElement;
      let appE = document.getElementById("app");
      if (this.theme == 0) {
        this.theme = 1;
        /*light*/
        root.style.setProperty('--background', "#fdf6e3");
        root.style.setProperty('--text', "#657b83");
        root.style.setProperty('--emph', "#586e75");
        root.style.setProperty('--comment', "#93a1a1");
        root.style.setProperty('--bg-hl', "#eee8d5");
        /*dark*/
        root.style.setProperty('--background-op', "#002b36");
        root.style.setProperty('--text-op', "#839496");
        root.style.setProperty('--emph-op', "#93a1a1");
        root.style.setProperty('--comment-op', "#586e75");
        root.style.setProperty('--bg-hl-op', "#073642");
        appE.style.boxShadow = `-6px -6px 11px 0 rgba(255, 255, 255, 0.4),
                               14px 18px 10px 0 rgba(0, 0, 0, 0.1)`;
      } else {
        this.theme = 0;
        /*light*/
        root.style.setProperty('--background-op', "#fdf6e3");
        root.style.setProperty('--text-op', "#657b83");
        root.style.setProperty('--emph-op', "#586e75");
        root.style.setProperty('--comment-op', "#93a1a1");
        root.style.setProperty('--bg-hl-op', "#eee8d5");
        /*dark*/
        root.style.setProperty('--background', "#002b36");
        root.style.setProperty('--text', "#839496");
        root.style.setProperty('--emph', "#93a1a1");
        root.style.setProperty('--comment', "#586e75");
        root.style.setProperty('--bg-hl', "#073642");
        appE.style.boxShadow = `-5px -6px 8px 0 rgba(255, 255, 255, 0.02),
                                14px 18px 10px 0 rgba(0, 0, 0, 0.1)`;
      }
    });
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


  /*light*/
  --background-op: #fdf6e3;
  --text-op: #657b83;
  --emph-op: #586e75;
  --comment-op: #93a1a1;
  --bg-hl-op: #eee8d5;
  /*dark*/
  --background: #002b36;
  --text: #839496;
  --emph: #93a1a1;
  --comment: #586e75;
  --bg-hl: #073642;
}
#nav-bar {
  width: 50%;
}

#solarized-button {
  position: absolute;
  top: 1em;
  right: 1em;
}

#app {
  font-family: dejavu;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
  color: var(--text);
  background-color: var(--background);
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
  box-shadow: -5px -6px 8px 0 rgba(255, 255, 255, 0.02),
              14px 18px 10px 0 rgba(0, 0, 0, 0.1);
}

#nav {
  border-style: solid;
  border-color: var(--bg-hl);
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
              8px 9px 12px 0 rgba(0, 0, 0, 0.5);
}

@font-face {
  font-family: dejavu;
  src: url(assets/dejavu_font.woff);
}

.vue-typer {
  font-family: dejavu;
}
.vue-typer .custom.char {
  color: var(--text);
}
.vue-typer .custom.caret {
  width: 10px;
  background-color: var(--text);
}
</style>
