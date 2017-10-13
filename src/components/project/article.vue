<template lang="html">
  <article :class="article.slug">
    <mv-article-title :article="article" />
    <mv-article-date :date="article.date" />
  </article>
</template>

<script>
  import articleTitle from './article-title'
  import articleDate from './article-date'

  export default {
    name: 'mv-article',
    props: {
      article: {
        type: Object
      }
    },
    components: {
      'mv-article-title': articleTitle,
      'mv-article-date': articleDate
    }
  }
</script>

<style lang="css">
</style>
