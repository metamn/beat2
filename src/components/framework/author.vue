<template lang="html">
  <div :class="$style.author">
    <mv-link :url="author.url" :title="author.name">
      <mv-image :src="author.avatar" :title="author.name"/>
    </mv-link>
  </div>
</template>

<script>
  import link from './link'
  import image from './image'

  export default {
    name: 'mv-author',
    props: {
      author: Object
    },
    components: {
      'mv-link': link,
      'mv-image': image
    }
  }
</script>

<style module>
  .author {
    
  }
</style>
