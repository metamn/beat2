<template lang="html">
  <article :class="article.slug">
    <mv-article-title :article="article" />
  </article>
</template>

<script>
  import articleTitle from './article-title'

  export default {
    name: 'mv-article',
    props: {
      article: {
        type: Object
      }
    },
    components: {
      'mv-article-title': articleTitle
    }
  }
</script>

<style lang="css">
</style>
