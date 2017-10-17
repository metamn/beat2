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
  .person {

  }

  .personAvatar {

  }

  .personNameWithLink {

  }

  .personName {

  }

  .personTitle {

  }
</style>
