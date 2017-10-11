<template lang="html">
  <h3 :class="$style.logo">
    <mv-link :url="url" :title="text" klass="not-styled">
      <mv-text-flip :text="text"></mv-text-flip>
    </mv-link>
  </h3>
</template>

<script>
  import link from './../framework/link'
  import textFlip from './../framework/text-flip'

  export default {
    name: 'mv-logo',
    props: {
      url: {
        type: String
      },
      type: {
        type: String
      },
      text: {
        type: String
      }
    },
    components: {
      'mv-link': link,
      'mv-text-flip': textFlip
    }
  }
</script>

<style module>
  .logo {
    composes: logo from './../framework/text-style.css';
  }
</style>
