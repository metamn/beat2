<template lang="html">
  <time :class="computedClass">{{ formattedDate }}</time>
</template>

<script>
  export default {
    name: 'mv-article-date',
    props: {
      date: String,
      displayAsThumb: Boolean
    },
    computed: {
      formattedDate () {
        let options = {
          month: 'short',
          year: '2-digit',
          day: 'numeric'
        }
        return new Date(this.date).toLocaleString('en-US', options)
      },
      computedClass () {
        return (this.displayAsThumb) ? this.$style.thumb : this.$style.default
      }
    }
  }
</script>

<style module>
  .thumb {
    order: -1;
  }
</style>
