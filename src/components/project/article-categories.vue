<template lang="html">
  <div class="">
    <span v-for="category in categories" :key="category.id">
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

<style lang="css">
</style>
