<template lang="html">
  <div :class="$style.textAroundCircle" :style="computedDivStyle">
    <span :class="$style.textAroundCircleChar" v-for="(char, index) in chars" :style="computedCharStyle(index)">{{ char }}</span>
  </div>
</template>

<script>
  export default {
    name: 'mv-text-around-circle',
    props: {
      text: String,
      width: String,
      height: String
    },
    data () {
      return {
        chars: this.text.split('')
      }
    },
    computed: {
      computedDivStyle () {
        return 'width: ' + this.width + '; height:' + this.height + ';'
      }
    },
    methods: {
      computedCharStyle (index) {
        let style = ''

        style += 'width: calc(' + (this.width / this.chars.length) + ');'
        style += 'height: ' + this.height + ';'
        style += 'transform: rotate(' + (360 / this.chars.length * index) + 'deg);'

        return style
      }
    }
  }
</script>

<style module>
  .textAroundCircle {
    position: relative;
    display: flex;
  }

  .textAroundCircleChar {
    position: absolute;
  }
</style>
