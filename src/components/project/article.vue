<template lang="html">
  <article :class="article.slug">
    <mv-article-title :article="article" />
    <mv-article-date v-if="article.display.includes('date')" :date="article.date" />
    <mv-article-categories v-if="article.display.includes('categories')" :categories="article.categories" />
  </article>
</template>

<script>
  import articleTitle from './article-title'
  import articleDate from './article-date'
  import articleCategories from './article-categories'

  export default {
    name: 'mv-article',
    props: {
      article: {
        type: Object
      }
    },
    components: {
      'mv-article-title': articleTitle,
      'mv-article-date': articleDate,
      'mv-article-categories': articleCategories
    }
  }
</script>

<style lang="css">
</style>
