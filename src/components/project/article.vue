<template lang="html">
  <article :class="computedClass">
    <mv-article-title :article="article" />
    <mv-article-date v-if="article.display.includes('date')" :date="article.date" :displayAsThumb="displayAsThumb" />
    <mv-article-categories v-if="article.display.includes('categories')" :categories="article.categories"/>
    <mv-article-excerpt v-if="article.display.includes('excerpt') && displayAsThumb" :excerpt="article.excerpt" />
    <mv-article-authors v-if="article.display.includes('authors')" :authors="article.authors"/>
    <mv-article-person-with-quote v-if="article.display.includes('person-with-quote')" :personWithQuote="article.personWithQuote" />
    <mv-article-carousel v-if="article.display.includes('carousel')" :carousel="article.carousel" />
    <div v-if="this.$slots.default" :class="$style.slot">
      <slot></slot>
    </div>
  </article>
</template>

<script>
  import articleTitle from './article-title'
  import articleDate from './article-date'
  import articleCategories from './article-categories'
  import articleExcerpt from './article-excerpt'
  import articleAuthors from './article-authors'
  import articlePersonWithQuote from './article-person-with-quote'
  import articleCarousel from './article-carousel'

  export default {
    name: 'mv-article',
    props: {
      article: Object,
      displayAsThumb: Boolean
    },
    components: {
      'mv-article-title': articleTitle,
      'mv-article-date': articleDate,
      'mv-article-categories': articleCategories,
      'mv-article-excerpt': articleExcerpt,
      'mv-article-authors': articleAuthors,
      'mv-article-person-with-quote': articlePersonWithQuote,
      'mv-article-carousel': articleCarousel
    },
    computed: {
      computedClass () {
        return (this.displayAsThumb) ? this.$style.thumb : this.$style.default
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

  .default {
    composes: articlePadding from '../framework/grid.css';
  }

  .slot {
    composes: articleBodyText from '../framework/text-style.css';
  }
</style>
