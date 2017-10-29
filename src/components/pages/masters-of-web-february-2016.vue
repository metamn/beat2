<template lang="html">
  <mv-article :article="article" :displayAsThumb="displayAsThumb"></mv-article>
</template>

<script>
  import article from '../project/article'

  export default {
    name: 'mv-masters-of-web-february-2016',
    props: {
      displayAsThumb: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        article: {
          title: 'Masters Of Web, February 2016',
          slug: 'masters-of-web-february-2016',
          excerpt: 'Experiment with creating print-like, magazine-like, tv-like websites.',
          date: '2016-02-15',
          categories: ['design'],
          display: [
            'title-with-link',
            'date',
            'categories',
            'carousel'
          ],
          carousel: {
            slides: [
              {
                image: {
                  title: 'Gabriele Iglesias Dardon',
                  src: '/static/images/gid-landscape_desktop.png',
                  srcset: '/static/images/gid-landscape_desktop.png 960w'
                },
                link: {
                  url: 'http://www.gidmotion.com/',
                  type: 'external'
                }
              },
              {
                image: {
                  title: 'Tennent Brown',
                  src: '/static/images/tennetbrown-landscape_desktop.png',
                  srcset: '/static/images/tennetbrown-landscape_desktop.png 960w'
                },
                link: {
                  url: 'http://tennentbrown.co.nz/',
                  type: 'external'
                }
              }
            ]
          }
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
