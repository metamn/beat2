<template lang="html">
  <section>
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

<style lang="css">
</style>
