<template lang="html">
  <mv-article :article="article" :displayAsThumb="displayAsThumb"></mv-article>
</template>

<script>
import article from '../project/article'

export default {
  name: 'mv-herculean',
  props: {
    displayAsThumb: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      article: {
        title: 'Herculean',
        slug: 'herculean',
        excerpt: 'There is no task in software engineering today quite as herculean as web development',
        date: '2015-12-16',
        categories: ['trend', 'code'],
        display: [
          'title-with-link',
          'date',
          'categories',
          'person-with-quote'
        ],
        personWithQuote: {
          person: {
            name: 'Taylor Savage',
            title: 'Product Manager, Google',
            url: 'http://queue.acm.org/detail.cfm?id=2844732',
            twitter: 'TaylorTheSavage',
            avatar: '/static/images/taylor-savage.jpeg'
          },
          quote: '<p>There is no task in software engineering today quite as herculean as web development. A typical specification for a web application might read:</p><p>The app must work across a wide variety of browsers. It must run animations at 60 fps. It must be immediately responsive to touch. It must conform to a specific set of design principles and specs. It must work on just about every screen size imaginable, from TVs and 30-inch monitors to mobile phones and watch faces. It must be well-engineered and maintainable in the long term.</p><p>With the latest web technologies, this list grows: the web application must work offline. It must be able to send push notifications. It must sync in the background.'
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
