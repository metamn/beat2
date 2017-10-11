<template lang="html">
  <article>
    <mv-contact-email/>
    <mv-contact-subscribe/>
    <mv-footer/>
  </article>
</template>

<script>
  import contactEmail from '../project/contact-email'
  import contactSubscribe from '../project/contact-subscribe'
  import footer from '../project/footer'

  export default {
    name: 'mv-contact',
    data: function () {
      return {
        thumbDisplay: ['artwork']
      }
    },
    components: {
      'mv-contact-email': contactEmail,
      'mv-contact-subscribe': contactSubscribe,
      'mv-footer': footer
    }
  }
</script>
