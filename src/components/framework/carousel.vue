<template lang="html">
  <slick :class="$style.slick" ref="slick" :options="slickOptions">
    <slot/>
  </slick>
</template>

<script>
  import Slick from 'vue-slick'
  import '../../../node_modules/slick-carousel/slick/slick.css'
  import '../../../node_modules/slick-carousel/slick/slick-theme.css'

  export default {
    name: 'mv-carousel',
    data () {
      return {
        slickOptions: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    },
    methods: {
      reInit () {
        this.$nextTick(() => {
          this.$refs.slick.reSlick()
        })
      }
    },
    components: {
      'slick': Slick
    }
  }
</script>

<style module>
  .slick {
    width: 100%;
  }
</style>

<style lang="css">
  .slick-dots li {
    transform: scale(2);
  }
</style>
