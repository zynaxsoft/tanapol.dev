<template>
  <div id="terminal" class="blur-able">
    <OneCommand v-if="curSeq > -1" @done="newSeq" cmdtxt="./introduction1">
    Hi! I am a recent graduated Ph.D. and an enthusiastic software engineer that loves and enjoys developing software with new technologies.
    <br><br>
    After, I received my Ph.D. degree in Robotics from JAIST. I joined QBIT Robotics to develop and design Omotenashi System and other software. I have maintained, developed software from scratch.
    <br>
    My knowledge and experiences include:<br>
    <span class="bullet">*</span> Software development in Python.<br>
    <span class="bullet">*</span> AWS, Docker, NGINX, Django, Git, GNU/Linux.<br>
    <span class="bullet">*</span> Machine Learning: Deep learning, Reinforcement learning, etc.<br>
    <span class="bullet">*</span> Robotics and a little bit of Neuroscience.<br>
    Furthermore, I am into developing my new skills such as DevOps, Microservices, and Front-end software.
    <br>
    </OneCommand>
    <OneCommand v-if="curSeq > 0" @done="done" cmdtxt="./introduction7" :showLastPrompt="true">
      restxt="
      If you are considering developing a port for Solarized, please see also the developer notes for information about optional repository structure and readme formats.

      Solarized flips between light and dark modes. In each mode, four monotones form the core values (with an optional fifth for emphasized content).
      "
    </OneCommand>
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
        bus.$emit("theyAreHurried");
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
span.bullet {
  margin-left: 2em;
  font-weight: 600;
}
span.bold {
  font-weight: 600;
}
span.emph {
  color: var(--emph);
}

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
