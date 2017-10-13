<template lang="html">
  <h3 v-if="article.display.includes('title-with-link')">
    <router-link :to="{ path: article.slug }">{{ article.title }}</router-link>
  </h3>
  <h3 v-else>{{ article.title }}</h3>
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

<style lang="css">
</style>
