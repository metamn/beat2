<template lang="html">
  <div class="text-spacer">
    <span class="char" v-for="char in chars">{{ char }}</span>
  </div>
</template>

<script>
  export default {
    name: 'mv-text-spacer',
    props: {
      /**
       * The text wich will be the split to be a spacer
       */
      text: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        chars: this.text.split('')
      }
    }
  }
</script>

<style module>
  .text-spacer {
    display: flex;
    flex-wrap: wrap;
  }
</style>
