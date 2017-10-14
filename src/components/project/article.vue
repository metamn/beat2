<template lang="html">
  <article :class="computedClass">
    <mv-article-title :article="article" :display="display" />
    <mv-article-date v-if="display.includes('date')" :date="article.date" />
    <mv-article-categories v-if="display.includes('categories')" :categories="article.categories" />
    <mv-article-excerpt v-if="display.includes('excerpt')" :excerpt="article.excerpt" />
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
        return (this.display !== null) ? [this.$style.thumb, this.article.slug] : [this.$style.default, this.article.slug]
      }
    }
  }
</script>

<style module>
  @value lem from '../framework/scale.css';

  .thumb {
    composes: normalAll from '../framework/border.css';
    composes: articleMargin from '../framework/grid.css';

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: calc(lem * 2);
  }

  .default {
    display: flex;
  }
</style>
