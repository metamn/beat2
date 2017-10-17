<template lang="html">
  <div :class="$style.person">
    <mv-avatar :class="$style.personAvatar" :avatar="avatar" />

    <mv-link v-if="person.url" :class="$style.personNameWithLink" :url="person.url" :title="person.name">
      {{ person.name }}
    </mv-link>
    <div v-else :class="$style.personName">
      {{ person.name }}
    </div>

    <div :class="$style.personTitle">
      {{ person.title }}
    </div>
  </div>
</template>

<script>
  import avatar from './avatar'
  import link from './link'

  export default {
    name: 'mv-person',
    props: {
      person: Object
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
  @value landscape from './breakpoints.css';
  @value portrait from './breakpoints.css';
  @value lem from './scale.css';

  .person {
    display: flex;
    justify-content: center;
    align-items: center
  }

  @media portrait {
    .person {
      flex-direction: column;
    }

    .personAvatar,
    .personName,
    .personNameWithLink,
    .personTitle {
      margin-bottom: calc(lem / 2);
    }
  }

  @media landscape {
    .personAvatar,
    .personName,
    .personNameWithLink,
    .personTitle {
      margin-right: calc(lem / 2);
    }
  }

  .personNameWithLink {
    composes: linkUnderlined from './text-style.css';
  }

  .personName {

  }

  .personTitle {

  }
</style>
