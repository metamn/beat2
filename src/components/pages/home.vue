<template lang="html">
  <section>
    <mv-contact-artwork/>
    <mv-footer/>
  </section>
</template>

<script>
  import footer from '../project/footer'
  import contactArtwork from '../project/contact-artwork'

  export default {
    name: 'mv-home',
    components: {
      'mv-footer': footer,
      'mv-contact-artwork': contactArtwork
    }
  }
</script>

<style lang="css">
</style>
