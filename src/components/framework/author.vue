<template lang="html">
  <div :class="$style.author">
    <mv-link :url="author.url" :title="author.name">
      <mv-image :image="image" />
    </mv-link>

    <mv-link :url="author.url" :title="author.name">
      {{ author.name }}
    </mv-link>

    <div :class="$style.title">
      {{ author.title }}
    </div>

    <div :class="$style.description">
      <blockquote v-html="author.description" />
    </div>
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
    data: function () {
      return {
        image: {
          src: this.author.avatar,
          title: this.author.name
        }
      }
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

  .title {

  }

  .description {

  }
</style>
