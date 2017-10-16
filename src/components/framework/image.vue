<template lang="html">
  <img :class="$style.image" v-lazy="image.src" :data-srcset="image.srcset" :alt="image.title">
</template>

<script>
  export default {
    name: 'mv-image',
    props: {
      image: {
        type: Object,
        default: function () {
          return {
            /**
             * The source of the image
             */
            src: {
              type: String
            },
            /**
             * The responsive versions of the image
             * - https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/
             */
            srcset: {
              type: String,
              default: ''
            },
            /**
             * The title of the image
             */
            title: {
              type: String
            }
          }
        }
      }
    }
  }
</script>

<style module scoped>
  .image {
    
  }
</style>
