<template lang="html">
  <a :href="computedURL" :title="title"><slot></slot></a>
</template>

<script>
  export default {
    name: 'mv-link',
    props: {
      /**
       * The URL where the link points
       */
      url: {
        type: String,
        default: 'http://example.com'
      },
      /**
       * The title of the link displayed on hover
       */
      title: {
        type: String,
        default: 'Link title'
      },
      /**
       * The type of the url like email, telephone, etc.
       */
      type: {
        type: String,
        default: ''
      }
    },
    computed: {
      /**
       * Add a prefix to the URL if necessary
       *
       * Like 'mailto:' or 'tel:'
       *
       * @public
       * @param {String} type The type of the URL
       * @param {String} url The value of the URL
       * @return {String} the URL or the URL with a prefix
       */
      computedURL () {
        switch (this.type) {
          case 'email':
          case 'e-mail':
            return 'mailto:' + this.url
          case 'phone':
          case 'tel':
            return 'tel:' + this.url
          default:
            return this.url
        }
      }
    }
  }
</script>

<style module>
  
</style>
