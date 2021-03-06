<template lang="html">
  <div :class="$style.person">
    <mv-avatar v-if="display.includes('avatar')" :class="$style.personAvatar" :avatar="avatar" />

    <div v-if="display.includes('name')" :class="$style.personName">
      <mv-link v-if="person.url" :class="$style.personNameWithLink" :url="person.url" :title="person.name">
        {{ person.name }}
      </mv-link>
      <span v-else :class="$style.personNameWithoutLink">
        {{ person.name }}
      </span>
    </div>

    <div v-if="display.includes('title')" :class="$style.personTitle">
      <span :class="$style.personTitleText">{{ person.title }}</span>
    </div>
  </div>
</template>

<script>
  import avatar from './avatar'
  import link from './link'

  export default {
    name: 'mv-person',
    props: {
      person: Object,
      display: {
        type: Array,
        default: () => [
          'avatar',
          'name',
          'title'
        ]
      }
    },
    data: function () {
      return {
        avatar: {
          url: this.person.url,
          title: this.person.name,
          image: {
            src: this.person.avatar,
            title: this.person.name
          }
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
  @value desktop from './breakpoints.css';
  @value lem from './scale.css';

  .person {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
  }

  .personAvatar,
  .personName {
    margin-bottom: calc(lem / 2);
  }

  @media desktop {
    .person {
      flex-direction: row;
    }

    .personAvatar,
    .personName {
      margin-bottom: 0;
      margin-right: lem;
    }

    .personTitle {
      /* Shrink it for a better look */
      max-width: calc(lem * 3);
    }
  }

  .personName {
    composes: large1 from './scale.css';
  }

  .personNameWithLink {
    composes: linkUnderlined from './text-style.css';
  }

  .personTitle {
    composes: default from './colors.css';
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .personTitleText {
    composes: lightItalic from './fonts.css';
  }
</style>
