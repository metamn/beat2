<template lang="html">
  <time class="date">{{ formattedDate }}</time>
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
  .date {
    order: -1;
  }
</style>
