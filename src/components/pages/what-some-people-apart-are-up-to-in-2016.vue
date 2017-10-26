<template lang="html">
  <mv-article :article="article" :displayAsThumb="displayAsThumb"></mv-article>
</template>

<script>
  import article from '../project/article'

  export default {
    name: 'mv-what-some-people-apart-are-up-to-in-2016',
    props: {
      displayAsThumb: {
        type: Boolean,
        default: false
      }
    },
    data: function () {
      return {
        article: {
          title: 'What Some People Apart Are Up To In 2016',
          slug: 'what-some-people-apart-are-up-to-in-2016',
          excerpt: 'The goals of prominent web designers and developers for 2016.',
          date: '2016-02-14',
          categories: ['trend'],
          display: [
            'title-with-link',
            'date',
            'categories',
            'authors'
          ],
          authors: [
            {
              person: {
                name: 'Cennydd Bowles',
                title: 'Digital product designer',
                url: 'http://www.cennydd.com',
                twitter: 'Cennydd',
                avatar: '/static/images/cenydd.jpg'
              },
              quote: 'Sound design'
            },
            {
              person: {
                name: 'Josh Clark',
                title: 'Principal at Big Medium',
                url: 'http://twitter.com/bigmediumjosh',
                twitter: 'bigmediumjosh',
                avatar: '/static/images/bigmediumjosh.jpg'
              },
              quote: 'Physical interfaces for digital systems'
            },
            {
              person: {
                name: 'Nathan Curtis',
                title: 'Founder and principal of EightShape',
                url: 'https://twitter.com/nathanacurtis',
                twitter: 'nathanacurtis',
                avatar: '/static/images/nathanacurtis.jpg'
              },
              quote: 'Living style guides'
            },
            {
              person: {
                name: 'Meg Dickey-Kurdziolek',
                title: 'Freelance UX’er',
                url: 'http://www.megkurdziolek.com/',
                twitter: 'megak',
                avatar: '/static/images/megak.jpg'
              },
              quote: 'More accessible products'
            },
            {
              person: {
                name: 'Daniel Ferro',
                title: 'Senior interaction designer at Forum One',
                url: 'https://twitter.com/DFerroF1',
                twitter: 'DFerroF1',
                avatar: '/static/images/DFerroF1.jpg'
              },
              quote: 'Delight in unexpected places (UX)'
            },
            {
              person: {
                name: 'Anne Gibson',
                title: 'Information architect',
                url: 'http://twitter.com/kirabug',
                twitter: 'kirabug',
                avatar: '/static/images/kirabug.png'
              },
              quote: 'Lean UX'
            },
            {
              person: {
                name: 'Val Head',
                title: 'Designer & consultant',
                url: 'http://www.html5rocks.com/en/features/offline',
                twitter: 'vlh',
                avatar: '/static/images/vlh.jpg'
              },
              quote: 'Sounds design and Data visualization'
            }
          ]
        }
      }
    },
    components: {
      'mv-article': article
    }
  }
</script>

<style lang="css">
</style>
