<template lang="html">
  <div :class="$style.excerpt">
    {{ excerpt }}
  </div>
</template>

<script>
  export default {
    name: 'mv-article-excerpt',
    props: {
      excerpt: String
    }
  }
</script>

<style module>
  .excerpt {
    composes: bodyText from '../framework/text-style.css'
  }
</style>
