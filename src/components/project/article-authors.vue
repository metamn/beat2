<template lang="html">
  <aside class="authors">
    <h3 hidden>Authors</h3>

    <div v-for="author in authors">
      <mv-person :person="author.person" />
    </div>
  </aside>
</template>

<script>
  import person from '../framework/person'

  export default {
    name: 'mv-article-authors',
    props: {
      authors: Array
    },
    components: {
      'mv-person': person
    }
  }
</script>

<style module>
  .authors {

  }
</style>
