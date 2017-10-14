<template lang="html">
  <mv-article :article="article" :display="display">
    <vue-markdown>
      this *IS* ins
    </vue-markdown>
  </mv-article>
</template>

<script>
  import article from '../project/article'
  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'mv-creating-a-styleguide-with-gulp',
    props: {
      display: Array
    },
    data: function () {
      return {
        article: {
          title: 'Creating A Styleguide With Gulp',
          slug: 'creating-a-styleguide-with-gulp',
          excerpt: 'Creating a component layer which both our user-facing applications and our Style Guide can work from.',
          date: '2015-05-15',
          categories: ['code']
        }
      }
    },
    components: {
      'mv-article': article,
      'vue-markdown': VueMarkdown
    }
  }
</script>

<style module>
</style>
