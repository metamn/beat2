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
  @value laptopAndUp from './breakpoints.css';
  @value tabletAndUp from './breakpoints.css';
  @value lem from './scale.css';

  .personWithQuote {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .blockquote {
    composes: blockquote from './elements.css';
    max-width: bodyTextWidth;
  }

  @media tabletAndUp {
    .personWithQuote {
      composes: dotted from './background-images.css';
    }

    .quote {
      composes: textSkew from './text-skew.css';
    }
  }

  @media laptopAndUp {
    .personWithQuote {
      flex-wrap: nowrap;
    }

    .quote {
      margin-right: lem;
    }
  }

  .person {

  }


</style>
