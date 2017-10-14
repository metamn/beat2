<template lang="html">
  <div :class="[$style.categories, 'categories']">
    <span v-for="category in categories" :key="category.id" :class="$style.category">
      {{ category }}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'mv-article-categories',
    props: {
      categories: Array
    }
  }
</script>

<style module>
  .category {
    composes: inverted from '../framework/colors.css';
  }
</style>
