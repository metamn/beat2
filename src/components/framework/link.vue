<template lang="html">
  <a :class="[computedClass, 'link']" :href="computedURL" :title="title"><slot></slot></a>
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
      },
      /**
       * The style of the url.
       */
      klass: {
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
      },

      /**
       * Style the component
       *
       * This seems to be not working, I mean the return is lost somehowin Vue
       * If I add manually the '$style.default' to :class it works
       *
       * @public
       * @param {String} klass The styles to be added
       * @return {computedClass} a CSS Module like computed stuff
       */
      computedClass () {
        switch (this.klass) {
          case 'underlined':
            return this.$style.underlined
          case 'not-styled':
            return this.$style.notStyled
          default:
            return this.$style.default
        }
      }
    }
  }
</script>

<style module>
  .default {
    composes: link from './text-style.css';
    text-decoration: none;
  }

  .underlined {
    composes: default;
    text-decoration: underline;
  }

  .notStyled {
    composes: default from './colors.css';
    text-decoration: none;
  }
</style>
