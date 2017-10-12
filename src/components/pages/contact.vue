<template lang="html">
  <article :class="$style.contact">
    <mv-contact-email/>
    <mv-contact-subscribe/>
  </article>
</template>

<script>
  import contactEmail from '../project/contact-email'
  import contactSubscribe from '../project/contact-subscribe'

  export default {
    name: 'mv-contact',
    data: function () {
      return {
        thumbDisplay: ['artwork']
      }
    },
    components: {
      'mv-contact-email': contactEmail,
      'mv-contact-subscribe': contactSubscribe
    }
  }
</script>

<style module>
  .contact {
    composes: defaultMargin from '../framework/grid.css';

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
</style>
