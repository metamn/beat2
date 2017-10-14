<template lang="html">
  <article :class="$style.contactArtwork">
    <h3 hidden>Contact artwork</h3>

    <div :class="$style.container">
      <router-link :to="{ name: 'Contact' }">
        <mv-text-around-circle :class="$style.textAroundCircle" text="• Follow • Contact" width="12.5em" height="12.5em"/>
        <mv-image :class="$style.image" :image="image"/>
      </router-link>
    </div>
  </article>
</template>

<script>
  import textAroundCircle from '../framework/text-around-circle'
  import image from '../framework/image'

  export default {
    name: 'mv-contact-artwork',
    components: {
      'mv-text-around-circle': textAroundCircle,
      'mv-image': image
    },
    data: function () {
      return {
        image: {
          src: '/static/images/email.png',
          title: 'Email'
        }
      }
    }
  }
</script>

<style module>
  .contactArtwork {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    position: relative;
    width: 12.5em;
    height: 12.5em;
  }

  .textAroundCircle {
    position: absolute;
    top: 0;
    left: 0;

    composes: default from '../framework/text-style.css';
    text-transform: uppercase;
  }

  .image {
    position: absolute;

    width: calc(12.5em / 1.5) !important;
    height: calc(12.5em / 1.5) !important;
    top: calc((12.5em - calc(12.5em / 1.5)) / 2);
    left: calc((12.5em - calc(12.5em / 1.5)) / 2);

    animation: flip 1s infinite;
  }

  @keyframes flip {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(180deg);
    }
  }
</style>
