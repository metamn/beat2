<template lang="html">
  <section :class="$style.articles">
    <h3 hidden>Articles</h3>
    <mv-herculean-artwork/>
    <mv-no-more-problems-on-the-front-end-artwork />
    <mv-delivering-the-message-artwork />
    <mv-creating-a-styleguide-with-gulp-artwork />
    <mv-contact-artwork/>
  </section>
</template>

<script>
  import contactArtwork from '../project/contact-artwork'
  import creatingAStyleguideWithGulpArtwork from '../project/creating-a-styleguide-with-gulp-artwork'
  import deliveringTheMessageArtwork from '../project/delivering-the-message-artwork'
  import noProblemsFrontendArtwork from '../project/no-more-problems-on-the-front-end-artwork'
  import herculeanArtwork from '../project/herculean-artwork'

  export default {
    name: 'mv-home',
    components: {
      'mv-contact-artwork': contactArtwork,
      'mv-creating-a-styleguide-with-gulp-artwork': creatingAStyleguideWithGulpArtwork,
      'mv-delivering-the-message-artwork': deliveringTheMessageArtwork,
      'mv-no-more-problems-on-the-front-end-artwork': noProblemsFrontendArtwork,
      'mv-herculean-artwork': herculeanArtwork
    }
  }
</script>

<style module>
  .articles {
    composes: defaultMargin from '../framework/grid.css';

    display: flex;
    flex-wrap: wrap;
  }
</style>
