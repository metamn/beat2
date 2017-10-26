<template lang="html">
  <mv-person-with-quote :personWithQuote="personWithQuote" />
</template>

<script>
  import personWithQuote from '../framework/person-with-quote'

  export default {
    name: 'mv-article-person-with-quote',
    props: {
      personWithQuote: Object
    },
    components: {
      'mv-person-with-quote': personWithQuote
    }
  }
</script>

<style lang="css">
</style>
