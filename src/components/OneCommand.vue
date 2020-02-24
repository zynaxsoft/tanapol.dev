<template>
  <div class="command">
    <h1 v-observe-visibility="{
      callback: visib,
      intersection: {
        threshold,
        },
      throttle,
      once: true,
      }">
    {{ msg }}</h1>
    <span v-html="promptTxt"></span>
    <vue-typer
      v-if="!seen"
      text=" "
      :repeat="Infinity"
      :preTypeDelay="999999999"
      :preEraseDelay="9999999999"
      initial-action="typing"
      caret-animation="blink"
      :type-delay="typeDelay"
    ></vue-typer>
    <vue-typer
      v-if="seen && nores && !erased"
      :text="cmdtxt"
      :repeat="0"
      initial-action="typing"
      caret-animation="blink"
      :type-delay="typeDelay"
      :eraseOnComplete="true"
      :preEraseDelay="200"
      @erased="onErased"
    ></vue-typer>
    <vue-typer
      v-if="seen && !nores"
      :text="cmdtxt"
      :repeat="0"
      initial-action="typing"
      caret-animation="blink"
      :type-delay="typeDelay"
      @typed="onTyped"
    ></vue-typer>
    <br/>
    <span class="result" v-if="typedCmd || overridden2" v-html="restxt"></span>
    <br/>
    <span v-if="typedCmd && showLastPrompt" v-html="promptTxt"></span>
    <vue-typer
      v-if="typedCmd && showLastPrompt"
      text=" "
      :repeat="Infinity"
      :preTypeDelay="999999999"
      :preEraseDelay="9999999999"
      initial-action="typing"
      caret-animation="blink"
      :type-delay="0"
    ></vue-typer>
  </div>
</template>

<script>

import { bus } from '../event-bus.js'
export default {
  name: 'OneCommand',
  props: {
    msg: String,
    cmdtxt: String,
    restxt: String,
    promptTxt: {
      type: String,
      default: `<span class="prompt-host">me@tanapol.dev:</span>`
               + `<span class="prompt-path">~/intro</span><br>$ `,
    },
    showLastPrompt: {
      type: Boolean,
      default: false,
    },
    nores: {
      type: Boolean,
      default: false,
    },
    typeDelay: {
      type: Number,
      default: 200,
    },
  },
  data() {
    return {
      seen: false,
      typedCmd: false,
      overridden2: false,
      erased: false,
      threshold: 1,
      throttle: 1000,
    }
  },
  methods: {
    visib: function (isVisible) {
      if (isVisible) {
        this.seen = true;
      }
    },
    onTyped: function () {
      this.typedCmd = true;
    },
    onErased: function () {
      this.typedCmd = true;
      this.erased = true;
    },
    showNow: function () {
      this.typedCmd = true;
      this.seen = true;
      this.overridden2 = true;
      this.$forceUpdate();
    },
  },
  watch: {
    typedCmd: function (typed) {
      if (typed) {
        this.$emit('done')
      }
    }
  },
  created: function () {
    bus.$on('overrideCommand', () => {
      this.showNow();
      })
  },
}
</script>

<style scoped>
a {
  color: var(--green);
}
.command {
  line-height: 1.4;
}
</style>

<style>
.prompt-host {
  font-weight: 700;
  color: var(--base01);
}
.prompt-path {
  font-weight: 700;
  color: var(--base1);
}
</style>
