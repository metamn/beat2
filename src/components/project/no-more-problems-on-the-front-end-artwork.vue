<template lang="html">
  <div :class="$style.container">
    <mv-no-more-problems-on-the-front-end :displayAsThumb="true" />
  </div>
</template>

<script>
  import noProblemsFrontend from '../pages/no-more-problems-on-the-front-end'

  export default {
    name: 'mv-no-more-problems-on-the-front-end-artwork',
    components: {
      'mv-no-more-problems-on-the-front-end': noProblemsFrontend
    }
  }
</script>

<style module>
  .container {
    composes: articleThumbBottomMargin from '../framework/grid.css';
    composes: normalAll from '../framework/border.css';
    composes: articlePadding from '../framework/grid.css';
    composes: articleThumbSize from '../framework/grid.css';
    composes: articleThumbRightMargin from '../framework/grid.css';
  }
</style>
