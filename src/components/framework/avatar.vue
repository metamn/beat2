<template lang="html">
  <div :class="$style.avatar">
    <mv-link :class="$style.avatarLink" :url="avatar.url" :title="avatar.title">
      <mv-image v-if="hasImage" :class="$style.avatarImage" :image="avatar.image" />
      <span v-else :class="$style.avatarInitiale">{{ initiale }}</span>
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
        return this.avatar.title.charAt(0)
      },
      hasImage () {
        return (this.avatar.image.src && this.avatar.image.src !== '')
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
    composes: inverted from './colors.css';

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
