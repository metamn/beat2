<template lang="html">
  <mv-article :article="article" :displayAsThumb="displayAsThumb">
    <markdown v-if="displayAsThumb !== true"/>
  </mv-article>
</template>

<script>
import article from '../project/article'
import markdown from './no-more-problems-on-the-front-end.md'

export default {
  name: 'mv-no-more-problems-on-the-front-end',
  props: {
    displayAsThumb: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      article: {
        title: 'No More Problems On The Front End',
        slug: 'no-more-problems-on-the-front-end',
        excerpt: 'The last decade  was hard with problems for front-end developers. Cross-browser compatibility, naming and structuring code, and poor performance. Now all these are solved.',
        date: '2015-08-19',
        categories: ['code'],
        display: [
          'title-with-link',
          'date',
          'categories',
          'excerpt'
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
