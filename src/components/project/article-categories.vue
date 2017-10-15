<template lang="html">
  <div :class="$style.categories">
    {{ categoriesToString }}
  </div>
</template>

<script>
  export default {
    name: 'mv-article-categories',
    props: {
      categories: Array
    },
    computed: {
      categoriesToString () {
        return this.categories.join(',')
      }
    }
  }
</script>

<style module>
  .categories {
    display: inline-table;
    composes: inverted from '../framework/colors.css';
  }
</style>
