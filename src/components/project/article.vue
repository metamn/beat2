<template lang="html">
  <article :class="computedClass">
    <mv-article-title :article="article" :display="display" />
    <mv-article-date v-if="display.includes('date')" :date="article.date" :display="display" />
    <mv-article-categories v-if="display.includes('categories')" :categories="article.categories" :display="display" />
    <mv-article-excerpt v-if="display.includes('excerpt')" :excerpt="article.excerpt" />
    <slot></slot>
  </article>
</template>

<script>
  import articleTitle from './article-title'
  import articleDate from './article-date'
  import articleCategories from './article-categories'
  import articleExcerpt from './article-excerpt'

  export default {
    name: 'mv-article',
    props: {
      article: {
        type: Object
      },
      display: {
        type: Array
      }
    },
    components: {
      'mv-article-title': articleTitle,
      'mv-article-date': articleDate,
      'mv-article-categories': articleCategories,
      'mv-article-excerpt': articleExcerpt
    },
    computed: {
      computedClass () {
        return (this.display.includes('asThumb')) ? this.$style.thumb : this.$style.default
      }
    }
  }
</script>

<style module>
  .thumb {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
