<template lang="html">
  <aside :class="$style.authors">
    <h3 hidden>Authors</h3>

    <div v-for="personWithQuote in authors">
      <mv-person-with-quote :personWithQuote="personWithQuote" />
    </div>
  </aside>
</template>

<script>
  import personWithQuote from '../framework/person-with-quote'

  export default {
    name: 'mv-article-authors',
    props: {
      authors: Array
    },
    components: {
      'mv-person-with-quote': personWithQuote
    }
  }
</script>

<style module>
  .authors {

  }
</style>
