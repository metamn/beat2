<template lang="html">
  <time>{{ formattedDate }}</time>
</template>

<script>
  export default {
    name: 'mv-article-date',
    props: {
      date: String
    },
    computed: {
      formattedDate () {
        let options = {
          month: 'short',
          year: '2-digit',
          day: 'numeric'
        }
        return new Date(this.date).toLocaleString('en-US', options)
      }
    }
  }
</script>

<style lang="css">
</style>
