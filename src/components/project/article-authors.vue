<template lang="html">
  <aside :class="$style.authors">
    <h3 hidden>Authors</h3>

    <div :class="$style.persons" v-for="author in authors">
      <mv-person :class="$style.person" :person="author.person" :display="display" />
    </div>
  </aside>
</template>

<script>
  import person from '../framework/person'

  export default {
    name: 'mv-article-authors',
    props: {
      authors: Array,
      display: {
        type: Array,
        default: () => ['avatar']
      }
    },
    components: {
      'mv-person': person
    }
  }
</script>

<style module>
  .authors {

  }

  .persons {

  }

  .person {

  }
</style>
