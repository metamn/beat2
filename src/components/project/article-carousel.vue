<template lang="html">
  <mv-carousel :class="$style.carousel">
    <div v-for="slide in carousel.slides" :key="slide.id">
      <mv-image :class="$style.image" :title="slide.image.title" :src="slide.image.url" :srcset="slide.image.srcset" />
    </div>
  </mv-carousel>
</template>

<script>
  import carousel from '../framework/carousel'
  import image from '../framework/image'

  export default {
    name: 'mv-article-carousel',
    props: {
      carousel: Object
    },
    components: {
      'mv-carousel': carousel,
      'mv-image': image
    }
  }
</script>

<style module>
  .carousel {
    width: 50% !important;
  }

  .image {
    width: 100%;
    height: auto;
  }
</style>
