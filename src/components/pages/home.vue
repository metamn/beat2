<template lang="html">
  <section :class="$style.articles">
    <h3 hidden>Articles</h3>
    <mv-contact-artwork/>
  </section>
</template>

<script>
  import contactArtwork from '../project/contact-artwork'

  export default {
    name: 'mv-home',
    components: {
      'mv-contact-artwork': contactArtwork
    }
  }
</script>

<style module>
  .articles {
    composes: defaultMargin from '../framework/grid.css';
  }
</style>
