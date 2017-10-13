<template lang="html">
  <mv-article :article="article" />
</template>

<script>
  import article from '../project/article'

  export default {
    name: 'mv-styleguide-with-gulp',
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
            'categories'
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
