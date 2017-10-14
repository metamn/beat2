<template lang="html">
  <div :class="$style.excerpt">
    {{ excerpt }}
  </div>
</template>

<script>
  export default {
    name: 'mv-article-excerpt',
    props: {
      excerpt: String
    }
  }
</script>

<style module>
  @value lem from '../framework/scale.css';
  @value landscape from '../framework/breakpoints.css';

  .excerpt {
    composes: bodyText from '../framework/text-style.css';
    padding-top: lem;
  }

  @media landscape {
    .excerpt {
      padding-bottom: lem;
    }
  }
</style>
