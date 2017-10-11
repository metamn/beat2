<template lang="html">
  <h3 :class="$style.logo">
    <mv-link v-if="type === 'external'" :url="url" :title="text" :klass="not-styled">
      <mv-text-flip :text="text"></mv-text-flip>
    </mv-link>
    <router-link v-else :to="url" :class="$style.link">
      <mv-text-flip :text="text"></mv-text-flip>
    </router-link>
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

  .link {
    composes: link from './../framework/text-style.css';
  }
</style>
