<template lang="html">
  <section>
    <article v-for="article in articles">
      {{ article.name }} {{ article.path }}
    </article>
    <mv-footer/>
  </section>
</template>

<script>
  import footer from '../project/footer'

  export default {
    name: 'mv-home',
    computed: {
      articles: function () {
        return this.$router.options.routes
      }
    },
    components: {
      'mv-footer': footer
    }
  }
</script>

<style lang="css">
</style>
