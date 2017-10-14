<template lang="html">
  <section :class="$style.articles">
    <h3 hidden>Articles</h3>
    <mv-creating-a-styleguide-with-gulp-artwork />
    <mv-contact-artwork/>
  </section>
</template>

<script>
  import contactArtwork from '../project/contact-artwork'
  import creatingAStyleguideWithGulpArtwork from '../project/creating-a-styleguide-with-gulp-artwork'

  export default {
    name: 'mv-home',
    components: {
      'mv-contact-artwork': contactArtwork,
      'mv-creating-a-styleguide-with-gulp-artwork': creatingAStyleguideWithGulpArtwork
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
