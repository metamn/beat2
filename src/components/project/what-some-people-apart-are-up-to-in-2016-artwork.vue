<template lang="html">
  <div :class="$style.container">
    <mv-what-some-people-apart-are-up-to-in-2016 :displayAsThumb="true" />
  </div>
</template>

<script>
  import peopleApart2016 from '../pages/what-some-people-apart-are-up-to-in-2016'

  export default {
    name: 'mv-what-some-people-apart-are-up-to-in-2016-artwork',
    components: {
      'mv-what-some-people-apart-are-up-to-in-2016': peopleApart2016
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
