<template lang="html">
  <slick  :class="$style.slick" ref="slick">
    <div v-for="slide in carousel.slides" v-key="slide.id">
      <mv-link v-if="slide.link" :link="computedLink">
        <mv-image :class="$style.image" :title="slide.image.title" :src="slide.image.url" :srcset="slide.image.srcset" />
      </mv-link>
      <mv-image :class="$style.image" v-else :title="slide.image.title" :src="slide.image.url" :srcset="slide.image.srcset" />
    </div>
  </slick>
</template>

<script>
  import Slick from 'vue-slick'
  import '../../../node_modules/slick-carousel/slick/slick.css'

  import link from '../framework/link'
  import image from '../framework/image'

  export default {
    name: 'mv-article-carousel',
    props: {
      carousel: Array
    },
    data () {
      return {
        slickOptions: {
          slidesToShow: 1
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
      'slick': Slick,
      'mv-link': link,
      'mv-image': image
    }
  }
</script>

<style module>
  .image,
  .slick {
    width: 100%;
    height: auto;
  }
</style>
