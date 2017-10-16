<template lang="html">
  <div :class="$style.author">
    <mv-avatar :class="$style.authorAvatar" :avatar="avatar" />

    <mv-link :class="$style.authorName" :url="author.url" :title="author.name" klass="body-text">
      {{ author.name }}
    </mv-link>

    <div :class="$style.authorTitle">
      {{ author.title }}
    </div>

    <div :class="$style.authorDescription">
      <blockquote :class="$style.blockquote" v-html="author.description" />
    </div>
  </div>
</template>

<script>
  import avatar from './avatar'
  import link from './link'

  export default {
    name: 'mv-author',
    props: {
      author: Object
    },
    data: function () {
      return {
        avatar: {
          link: this.author.url,
          image: {
            src: this.author.avatar,
            title: this.author.name
          },
          title: this.author.name
        }
      }
    },
    components: {
      'mv-avatar': avatar,
      'mv-link': link
    }
  }
</script>

<style module>
  @value lem from './scale.css';
  @value landscape from './breakpoints.css';

  .author {
    composes: dotted from './background-images.css';

    display: flex;
    align-items: center;
  }

  .authorAvatar,
  .authorName,
  .authorTitle {
    flex-grow: 1;
    margin-left: lem;
  }

  .authorAvatar {
    order: 2;
  }

  .authorName {
    order: 2;
  }

  .authorTitle {
    composes: default from './colors.css';
    composes: small1 from './scale.css';
    margin-right: calc(lem / 2);
    word-wrap: break-word;
    order: 2;
  }

  .authorDescription {
    composes: textSkew from './text-skew.css';
    order: 1;
    flex-grow: 5;
    max-width: calc(lem * 25);
  }

  .blockquote {
    composes: blockquote from './elements.css';
  }
</style>
