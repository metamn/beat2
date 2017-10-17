<template lang="html">
  <div :class="$style.personWithQuote">
    <mv-person :class="$style.person" :person="personWithQuote.person" />

    <div :class="$style.quote">
      <blockquote :cite="personWithQuote.person.url" v-html="personWithQuote.quote" />
    </div>
  </div>
</template>

<script>
  import person from './person'

  export default {
    name: 'mv-person-with-quote',
    props: {
      personWithQuote: Object
    },
    components: {
      'mv-person': person
    }
  }
</script>

<style module>
  .personWithQuote {

  }

  .person {

  }

  .quote {

  }
</style>
