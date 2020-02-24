<template>
  <div id="terminal">
    <OneCommand
      v-if="curSeq > -1"
      @done="newSeq"
      :nores="true"
      msg=""
      cmdtxt="Fine fine I will show you everything."
      promptTxt="<span class='prompt-host' style='color: var(--red);'>root@tanapol.dev:</span>
                <span class='prompt-path'>/</span><br># "
      restxt=""
      :typeDelay="50"
      />
    <OneCommand
      v-if="curSeq > 0"
      @done="doOverride"
      msg=""
      cmdtxt="cat /root/my-secret-token | ./intro --show-everything --override"
      promptTxt="<span class='prompt-host' style='color: var(--red);'>root@tanapol.dev:</span>
                <span class='prompt-path'>/</span><br># "
      restxt="Done."
      :typeDelay="50"
      :showLastPrompt="true"
      />
  </div>
</template>

<script>
import OneCommand from './OneCommand.vue'

export default {
  name: 'OverrideTerm',
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
    doOverride: function () {
      this.$emit("overriddenTyped");
    },
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
