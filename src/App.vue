<template>
  <div id="app" :class="$style.app">
    <router-view/>
  </div>
</template>

<script>
  // Normalize.css
  // - from https://github.com/necolas/normalize.css/
  import 'normalize.css'

  // Loading webfonts
  import fonts from './components/framework/fonts'

  export default {
    name: 'app',
    components: {
      'mv-fonts': fonts
    }
  }
</script>

<style module>
  .app {
    composes: default from './components/framework/text-style.css';
  }
</style>

<style lang="scss">
  // A global css reset applied upon normalize.css
  @import "./components/framework/reset";
</style>
