<template lang="html">
  <mv-article :article="article" :displayAsThumb="displayAsThumb"></mv-article>
</template>

<script>
  import article from '../project/article'

  export default {
    name: 'mv-is-it-web-or-photoshop',
    props: {
      displayAsThumb: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        article: {
          title: 'Is It Web Or Photoshop?',
          slug: 'is-it-web-or-photoshop',
          excerpt: 'Experiment with creating print-like, magazine-like, tv-like websites.',
          date: '2015-12-25',
          categories: ['design'],
          display: [
            'title-with-link',
            'date',
            'categories',
            'carousel'
          ],
          slides: [
            {
              image: {
                title: 'Mars Maiers',
                src: '/static/images/marsmaiers.png'
              }
            },
            {
              image: {
                title: 'Yale / Paul Rand',
                src: '/static/images/yale.png'
              }
            },
            {
              image: {
                title: 'Bloomberg',
                src: '/static/images/bloomberg.png'
              },
              link: {
                url: 'http://www.bloomberg.com/businessweek/design-conference/',
                type: 'external'
              }
            },
            {
              image: {
                title: 'Architetti Arco Alpino',
                src: '/static/images/arco.png'
              },
              link: {
                url: 'http://www.architettiarcoalpino.it/',
                type: 'external'
              }
            },
            {
              image: {
                title: 'Holz.re',
                src: '/static/images/holz.png'
              }
            },
            {
              image: {
                title: 'After All Studio',
                src: '/static/images/afterall.png'
              },
              link: {
                url: 'http://afterallstudio.com/',
                type: 'external'
              }
            }
          ]
        }
      }
    },
    components: {
      'mv-article': article
    }
  }
</script>

<style lang="css">
</style>
