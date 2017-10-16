<template lang="html">
  <div :class="$style.container">
    <mv-delivering-the-message :displayAsThumb="true" />
  </div>
</template>

<script>
  import deliveringTheMessage from '../pages/delivering-the-message'

  export default {
    name: 'mv-delivering-the-message-artwork',
    components: {
      'mv-delivering-the-message': deliveringTheMessage
    }
  }
</script>

<style lang="scss"module>
  .container {
    composes: articleThumbBottomMargin from '../framework/grid.css';
    composes: normalAll from '../framework/border.css';
    composes: articlePadding from '../framework/grid.css';
    composes: articleThumbSize from '../framework/grid.css';
  }
</style>
