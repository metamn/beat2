<template lang="html">
  <mv-article :article="article" :displayAsThumb="displayAsThumb">
    <markdown v-if="displayAsThumb !== true"/>
  </mv-article>
</template>

<script>
  import article from '../project/article'
  import markdown from './creating-a-styleguide-with-gulp.md'

  export default {
    name: 'mv-creating-a-styleguide-with-gulp',
    props: {
      displayAsThumb: {
        type: Boolean,
        default: false
      }
    },
    data: function () {
      return {
        article: {
          title: 'Creating A Styleguide With Gulp',
          slug: 'creating-a-styleguide-with-gulp',
          excerpt: 'Creating a component layer which both our user-facing applications and our Style Guide can work from.',
          date: '2015-05-15',
          categories: ['code'],
          display: [
            'title-with-link',
            'date',
            'categories',
            'excerpt'
          ],
          images: [
            {
              title: 'Styleguide architecture',
              src: '/static/images/styleguide-architecture_tablet.png',
              srcset: '/static/images/styleguide-architecture_mobile.png 420w, /static/images/styleguide-architecture_tablet.png 768w, /static/images/styleguide-architecture.png 1536w'
            },
            {
              title: 'Styleguide architecture details',
              src: '/static/images/styleguide-details-portrait_tablet.png',
              srcset: '/static/images/styleguide-details-portrait_mobile.png 420w, /static/images/styleguide-details-portrait_tablet.png 768w, /static/images/styleguide-details_laptop.png 1400w, /static/images/styleguide-details_laptop2x.png 2800w'
            },
            {
              title: 'Styleguide colors example',
              src: '/static/images/styleguide-example-portrait_tablet.png',
              srcset: '/static/images/styleguide-example-portrait_mobile.png 420w, /static/images/styleguide-example-portrait_tablet.png 768w, /static/images/styleguide-example_laptop.png 1400w, /static/images/styleguide-example_laptop2x.png 2800w'
            }
          ]
        }
      }
    },
    components: {
      'mv-article': article,
      'markdown': markdown
    }
  }
</script>

<style module>
</style>
