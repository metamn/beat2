<template lang="html">
  <mv-article :article="article" :displayAsThumb="displayAsThumb">
    <markdown v-if="displayAsThumb !== true"/>
  </mv-article>
</template>

<script>
import article from '../project/article'
import markdown from './delivering-the-message.md'

export default {
  name: 'mv-delivering-the-message',
  props: {
    displayAsThumb: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      article: {
        title: 'Delivering The Message',
        slug: 'delivering-the-message',
        excerpt: 'How to delight visitors yet deliver business goals.',
        date: '2015-08-08',
        categories: ['design'],
        display: [
          'title-with-link',
          'date',
          'categories',
          'excerpt'
        ],
        images: [
          {
            title: 'The five focus points on metamn.io',
            src: '/static/images/focus-points-landscape_desktop.png',
            srcset: '/static/images/focus-points-portrait_mobile.png 384w, /static/images/focus-points-portrait_tablet.png 607w, /static/images/focus-points-landscape_desktop 1400w'
          },
          {
            title: 'The living styleguide of metamn.io',
            src: '/static/images/metamn-styleguide-landscape_desktop.png',
            srcset: '/static/images/metamn-styleguide-portrait_mobile.png 420w, /static/images/metamn-styleguide-portrait_tablet.png 768w, /static/images/metamn-styleguide-landscape_laptop.png 1400w, /static/images/metamn-styleguide-landscape_laptop2x.png 2800w'
          },
          {
            title: 'The frontpage of metamn.io',
            src: '/static/images/metamn-frontpage-portrait_tablet.png',
            srcset: '/static/images/metamn-frontpage-portrait_mobile.png 420w, /static/images/metamn-frontpage-portrait_tablet.png 768w, /static/images/metamn-frontpage_laptop.png 1400w, /static/images/metamn-frontpage_laptop2x.png 2800w'
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

<style lang="css">
</style>
