<template lang="html">
  <div :class="$style.container">
    <mv-creating-a-styleguide-with-gulp :displayAsThumb="true" />
  </div>
</template>

<script>
  import creatingAStyleguideWithGulp from '../pages/creating-a-styleguide-with-gulp'

  export default {
    name: 'mv-creating-a-styleguide-with-gulp-artwork',
    components: {
      'mv-creating-a-styleguide-with-gulp': creatingAStyleguideWithGulp
    }
  }
</script>

<style lang="scss"module>
  .container {
    composes: articleThumbBottomMargin from '../framework/grid.css';
    composes: normalAll from '../framework/border.css';
    composes: articlePadding from '../framework/grid.css';
    composes: articleThumbSize from '../framework/grid.css';
    composes: articleThumbRightMargin from '../framework/grid.css';
  }
</style>
