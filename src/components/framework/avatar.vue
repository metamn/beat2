<template lang="html">
  <div :class="$style.avatar">
    <mv-link :class="$style.avatarLink" :url="avatar.link" :title="avatar.title">
      <mv-image :class="$style.avatarImage" v-if="avatar.image !== null" :image="avatar.image" />
      <span v-else :class="$style.avatarInitiale">{{ avatar.initiale }}</span>
    </mv-link>
  </div>
</template>

<script>
  import link from './link'
  import image from './image'

  export default {
    name: 'mv-avatar',
    props: {
      avatar: Object
    },
    computed: {
      initiale () {
        return this.title.charAt(0)
      }
    },
    components: {
      'mv-link': link,
      'mv-image': image
    }
  }
</script>

<style module>
  @value black from './colors.css';

  .avatar {

  }

  .avatarLink {

  }

  .avatarImage {
    composes: default from './circle.css';
    composes: default from './colors.css';
    color: black; /* if the image is missing do not display it's caption */
  }

  .avatarInitiale {
    composes: default from './circle.css';
    composes: default from './colors.css';
  }
</style>
