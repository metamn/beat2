<template lang="html">
  <footer :class="$style.footer">
    <mv-logo url="/" type="internal" text="Beat"></mv-logo>
    <span>by</span>
    <mv-logo url="http://metamn.io" type="external" text="Metamn"></mv-logo>
  </footer>
</template>

<script>
  import logo from './logo'

  export default {
    name: 'mv-footer',
    components: {
      'mv-logo': logo
    }
  }
</script>

<style module>
  .footer {
    composes: defaultMargin from '../framework/grid.css';
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
