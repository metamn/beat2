<template lang="html">
  <span class="flip">
    <span class="flip__span" :data-hover="text">{{ text }}</span>
  </span>
</template>

<script>
  export default {
    name: 'mv-text-flip',
    props: {
      /**
       * The text which will be flipped
       */
      text: {
        type: String
      }
    }
  }
</script>

<style lang="scss">
  .flip {
    position: relative;
    display: inline-block;
    outline: none;
    overflow: hidden;

    cursor: pointer;

    &__span {
      position: relative;
      display: inline-block;
      will-change: transform;
      transition: transform 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946);

      &::before {
        position: absolute;
        top: 100%;
        content: attr(data-hover);
        transform: translate3d(0, 0, 0);
      }
    };

    &:hover,
    &:focus,
    &:active {
      outline: none;

      .flip__span {
        transform: translateY(-100%);
      }
    }
  }
</style>
