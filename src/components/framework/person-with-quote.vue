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
  @value desktop from './breakpoints.css';
  @value lem from './scale.css';

  .personWithQuote {
    /**
     * To have different backgrounds on small and large screens a special component is created.
     * Media queries cannot contain 'composes' inside just normal css declarations
     * This is a general idea: compose at component level, here in the parent just include the special cases 
     */
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
  }

  .quote {
    composes: skewForQuote from './text-skew.css';
  }

  .blockquote {
    composes: blockquote from './elements.css';
    max-width: bodyTextWidth;
  }

  .person {
    margin: lem;
    margin-bottom: 0;
  }
</style>
