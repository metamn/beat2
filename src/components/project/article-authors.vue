<template lang="html">
  <aside :class="$style.authors">
    <h3 hidden>Authors</h3>

    <mv-person v-for="(author, index) in authors" :style="dynamicZIndex(index)" :class="$style.person" :person="author.person" :display="display" />
  </aside>
</template>

<script>
  import person from '../framework/person'

  export default {
    name: 'mv-article-authors',
    props: {
      authors: Array,
      display: {
        type: Array,
        default: () => ['avatar']
      }
    },
    methods: {
      dynamicZIndex (index) {
        return 'z-index: ' + index + ';'
      }
    },
    components: {
      'mv-person': person
    }
  }
</script>

<style module>
  @value lem from './../framework/scale.css';

  .authors {
    composes: dotted from './../framework/background-images.css';

    display: flex;
    position: relative;
    width: calc(lem * 12);
    height: calc(lem * 6);
  }

  .person {
    position: absolute;
    top: 45%;
    left: 50%;
  }

  @keyframes fade {
    0% {
      z-index: 1;
    }
    100% {
      z-index: -1;
    }
  }
</style>
