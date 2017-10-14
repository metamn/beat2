<template lang="html">
  <mv-creating-a-styleguide-with-gulp :display="display" />
</template>

<script>
  import creatingAStyleguideWithGulp from '../pages/creating-a-styleguide-with-gulp'

  export default {
    name: 'mv-creating-a-styleguide-with-gulp-artwork',
    data: function () {
      return {
        display: [
          'title-with-link',
          'date',
          'categories',
          'excerpt'
        ]
      }
    },
    components: {
      'mv-creating-a-styleguide-with-gulp': creatingAStyleguideWithGulp
    }
  }
</script>

<style lang="scss">
  @import '../framework/scale.scss';

  .creating-a-styleguide-with-gulp {
    width: calc(50% - #{$lem * 2} - 2px);
    margin-right: $lem * 2;
  }
</style>
