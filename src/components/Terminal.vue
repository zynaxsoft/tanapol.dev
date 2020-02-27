<template>
  <div id="terminal" class="blur-able">
    <OneCommand v-if="curSeq > -1" @done="newSeq" cmdtxt="./introduction1">
    <a href=/me.png target="_blank">
      <img src="/me.png" id="profile-pic" class="neuimg"><br>
    </a>
    <i>"Hi! I am Tanapol Prucksakorn, a full stack engineer, a recent graduated Ph.D., and an enthusiastic software developer that loves and enjoys building software with new technologies."</i>
    <br><br>
    After, I received my Ph.D. degree in Robotics from JAIST. I joined QBIT Robotics to develop and design Omotenashi System and other software. I have maintained, developed software from scratch.
    <br><br>
    My knowledge and experiences include:<br>
    <span class="bullet">*</span> Software development in Python.<br>
    <span class="bullet">*</span> AWS, Docker, NGINX, Django, Git, GNU/Linux.<br>
    <span class="bullet">*</span> Machine Learning: Deep learning, Reinforcement learning, etc.<br>
    <span class="bullet">*</span> Robotics and a little bit of Neuroscience.<br>
    Furthermore, I am developing my new skills such as Rust, Microservices, and Front-end software.
    <br>
    <a href="https://photo.tanapol.dev/" target="_blank">
      <img src="@/assets/photograph.png" id="photograph" class="neuimg"><br>
    </a>
    </OneCommand>
    <OneCommand v-if="curSeq > 0" @done="done" cmdtxt="./introduction7" :showLastPrompt="true">
    About this website. I crated this website with my basic knowledge of JavaScript + Vue-cli. I chose the design to be terminal-like. The color theme I use is the famous Solarized color palette. I tried to make the website look and feel like Neumorphism design with my wonderful CSS skill (please don't look at it).

    <br>
    If you haven't tried pressing "Solarized" yet, please try.
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
  margin-left: 1.8em;
  font-weight: 600;
}
span.bold {
  font-weight: 600;
}
span.emph {
  color: var(--emph);
}

#profile-pic {
  width: 10em;
  margin: 10px;
}

#photograph {
  width: 21em;
  margin: 10px;
}

a > img:hover {
  opacity: 0.7;
}

.neuimg {
  border-radius: 10%;
  display: inline-block;
  box-shadow: -2px -2px 4px 0 rgba(255, 255, 255, 0.25),
               3px 3px 4px 0 rgba(0, 0, 0, 0.5);
  opacity: 0.9;
}

.neuimg:active {
  box-shadow: 2px 2px 1px 0 rgba(0, 0, 0, 0.02),
              -2px -2px 5px 0 rgba(255, 255, 255, 0.1);
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
