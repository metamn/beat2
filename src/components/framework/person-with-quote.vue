<template lang="html">
  <div :class="$style.personWithQuote">
    <div :class="$style.quote">
      <blockquote :class="$style.blockquote" :cite="personWithQuote.person.url" v-html="personWithQuote.quote" />
    </div>

    <mv-person :class="$style.person" :person="personWithQuote.person" />
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
  @value bodyTextWidth from './text-style.css';
  @value portrait from './breakpoints.css';
  @value desktop from './breakpoints.css';
  @value lem from './scale.css';
  @value white from './colors.css';

  .personWithQuote {
    composes: dottedForPersonWithQuote from './background-images.css';

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  @media desktop {
    .personWithQuote {
      flex-wrap: nowrap;
    }

    .quote {
      margin-right: lem;
    }
  }

  .quote {
    composes: skewForQuote from './text-skew.css';
  }

  .blockquote {
    composes: blockquote from './elements.css';
    max-width: bodyTextWidth;
  }

  .person {
    
  }
</style>
