<template>
  <div id="app" :class="$style.app">
    <router-view/>
    <mv-footer/>
  </div>
</template>

<script>
  // Normalize.css
  // - from https://github.com/necolas/normalize.css/
  import 'normalize.css'

  // Loading webfonts
  import fonts from './components/framework/fonts'

  // Import footer
  import footer from './components/project/footer'

  export default {
    name: 'app',
    components: {
      'mv-fonts': fonts,
      'mv-footer': footer
    }
  }
</script>

<style module>
  .app {
    composes: default from './components/framework/text-style.css';

    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>

<style lang="scss">
  // A global css reset applied upon normalize.css
  @import "./components/framework/reset";
</style>
