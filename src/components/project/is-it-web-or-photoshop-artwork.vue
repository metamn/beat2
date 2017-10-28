<template lang="html">
  <div :class="$style.container">
    <mv-is-it-web-or-photoshop :displayAsThumb="true" />
  </div>
</template>

<script>
  import isItWebOrPhotoshop from '../pages/is-it-web-or-photoshop'

  export default {
    name: 'mv-is-it-web-or-photoshop-artwork',
    components: {
      'mv-is-it-web-or-photoshop': isItWebOrPhotoshop
    }
  }
</script>

<style module>
  .container {
    composes: articleThumbBottomMargin from '../framework/grid.css';
    composes: normalAll from '../framework/border.css';
    composes: articlePadding from '../framework/grid.css';
    composes: articleThumbSize from '../framework/grid.css';
  }
</style>
