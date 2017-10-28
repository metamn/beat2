<template lang="html">
  <aside :class="$style.authors">
    <h3 hidden>Authors</h3>
    <mv-person v-for="author in authors" :key="author.id" :class="$style.person" :person="author.person" :display="display" />
  </aside>
</template>

<script>
  import person from '../framework/person'
  import {TweenLite} from 'gsap'

  export default {
    name: 'mv-article-authors',
    props: {
      authors: Array,
      display: {
        type: Array,
        default: () => ['avatar']
      }
    },
    data () {
      return {
        zIndex: 1
      }
    },
    methods: {
      resetAvatars () {
        this.zIndex = 1
        this.$el.childNodes.forEach((el) => {
          if (el.style) {
            el.style.zIndex = '0'
          }
        })
      },
      showAvatar () {
        let index = Math.floor((Math.random() * this.authors.length))
        let el = this.$el.childNodes[index]

        this.zIndex += 1
        if (this.zIndex > 100) {
          this.resetAvatars()
        }

        TweenLite.to(el, 1, {
          zIndex: this.zIndex,
          onComplete: this.showAvatar
        })
      }
    },
    mounted () {
      this.showAvatar()
      console.log(this.$el.childNodes[1])
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
    z-index: 1;
    top: 45%;
    left: 50%;
  }

</style>
