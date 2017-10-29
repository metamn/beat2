<template lang="html">
  <div :class="$style.container">
    <mv-masters-of-web-february-2016 :displayAsThumb="true" />
  </div>
</template>

<script>
  import mowFeb2016 from '../pages/masters-of-web-february-2016'

  export default {
    name: 'mv-masters-of-web-february-2016-artwork',
    components: {
      'mv-masters-of-web-february-2016': mowFeb2016
    }
  }
</script>

<style module>
  .container {
    composes: articleThumbBottomMargin from '../framework/grid.css';
    composes: normalAll from '../framework/border.css';
    composes: articlePadding from '../framework/grid.css';
    width: 100%;
  }

  .carousel {
    width: 100% !important;
  }
</style>
