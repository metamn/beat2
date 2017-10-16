<template lang="html">
  <aside :class="$style.authors">
    <h3 hidden>Authors</h3>

    <div v-for="author in authors">
      <mv-author :author="author" />
    </div>
  </aside>
</template>

<script>
  import author from '../framework/author'

  export default {
    name: 'mv-article-authors',
    props: {
      authors: Array
    },
    components: {
      'mv-author': author
    }
  }
</script>

<style module>
  .authors {
    
  }
</style>
