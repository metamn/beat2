<template lang="html">
  <h3 v-if="article.display.includes('title-with-link')" :class="$style.title">
    <router-link :to="{ path: article.slug }" :class="$style.link">{{ article.title }}</router-link>
  </h3>
  <h3 v-else :class="$style.title">{{ article.title }}</h3>
</template>

<script>
  export default {
    name: 'mv-article-title',
    props: {
      article: {
        type: Object
      }
    }
  }
</script>

<style module>
  .title {
    composes: title from '../framework/text-style.css'
  }

  .link {
    composes: linkLinethrough from '../framework/text-style.css'
  }
</style>
