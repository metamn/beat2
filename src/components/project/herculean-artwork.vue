<template lang="html">
  <div :class="$style.container">
    <mv-herculean :displayAsThumb="true" />
  </div>
</template>

<script>
  import herculean from '../pages/herculean'

  export default {
    name: 'mv-herculean-artwork',
    components: {
      'mv-herculean': herculean
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
</style>
