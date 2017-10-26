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
            },
            {
              person: {
                name: 'Andrew Johnson',
                title: 'Designer',
                url: 'http://www.aetherpoint.com',
                twitter: 'Aetherpoint',
                avatar: '/static/images/Aetherpoint.jpg'
              },
              quote: 'Typography and Game development'
            },
            {
              person: {
                name: 'Michael Johnson',
                title: 'Creative director at Happy Cog',
                url: 'http://happycog.com/',
                twitter: 'happycog',
                avatar: '/static/images/happycog.jpg'
              },
              quote: 'Use chance to shape an experience (UX)'
            },
            {
              person: {
                name: 'Gerry McGovern',
                title: 'Founder of Customer Carewords',
                url: 'http://www.customercarewords.com/',
                twitter: 'gerrymcgovern',
                avatar: '/static/images/gerrymcgovern.jpg'
              },
              quote: 'Trust in web design and branding'
            },
            {
              person: {
                name: 'Cameron Moll',
                title: 'CEO, Authentic Jobs',
                url: 'http://twitter.com/cameronmoll',
                twitter: 'cameronmoll',
                avatar: '/static/images/cameronmoll.jpg'
              },
              quote: 'Unified design && How career impacts personal life'
            },
            {
              person: {
                name: 'Yesenia Perez-Cruz',
                title: 'Senior product designer at Vox Media',
                url: 'http://www.yeseniaperezcruz.com/',
                twitter: 'yeseniaa',
                avatar: '/static/images/yeseniaa.jpg'
              },
              quote: 'Being more deliberate with my design decisions'
            },
            {
              person: {
                name: 'Susan Robertson',
                title: 'Front-end developer',
                url: 'https://www.susanjeanrobertson.com',
                twitter: 'susanjrobertson',
                avatar: '/static/images/susanjrobertson.jpg'
              },
              quote: 'Responsive web design'
            },
            {
              person: {
                name: 'Jen Simmons',
                title: 'Host and executive producer of The Web Ahead; designer advocate at Mozilla',
                url: 'http://jensimmons.com',
                twitter: 'jensimmons',
                avatar: '/static/images/jensimmons.jpg'
              },
              quote: 'New page layouts with CSS Flexbox and Grid'
            },
            {
              person: {
                name: 'Rian van der Merwe',
                title: 'Product design director at Jive Software',
                url: 'http://www.elezea.com',
                twitter: 'rianvdm',
                avatar: '/static/images/rianvdm.jpg'
              },
              quote: 'Study and explore things on the periphery of design'
            },
            {
              person: {
                name: 'Jeffrey Zeldman',
                title: 'Founder of Happy Cog & publisher of A List Apart',
                url: 'http://zeldman.com',
                twitter: 'zeldman',
                avatar: '/static/images/zeldman.jpg'
              },
              quote: 'Get back into the hustle and grind of client-facing design'
            },
            {
              person: {
                name: 'Liz Danzico',
                title: 'Chair and cofounder of SVA MFA Interaction Design; creative director, NPR',
                url: 'http://bobulate.com',
                twitter: 'bobulate',
                avatar: '/static/images/bobulate.jpg'
              },
              quote: 'For the next year, I’m practicing non-motion. No sudden shifts; no pivots; no renovations. Instead: continuity and flow.'
            },
            {
              person: {
                name: 'Brad Frost',
                title: 'Web designer',
                url: 'http://bradfrost.com',
                twitter: 'brad_frost',
                avatar: '/static/images/brad_frost.jpg'
              },
              quote: 'Death To Bullshit.'
            },
            {
              person: {
                name: 'Andrew Grimes',
                title: 'User experience consultant',
                url: 'http://apgrimes.co.uk/',
                twitter: 'Andrew_Grimes',
                avatar: '/static/images/Andrew_Grimes.jpg'
              },
              quote: 'Sites that match design with description, and vary layout as often as magazines do.'
            },
            {
              person: {
                name: 'Lara Hogan',
                title: 'Senior engineering manager at Etsy',
                url: 'http://larahogan.me',
                twitter: 'lara_hogan',
                avatar: '/static/images/lara_hogan.jpg'
              },
              quote: 'Fears about public speaking.'
            },
            {
              person: {
                name: 'Denise Jacobs',
                title: 'Founder and CEO of The Creative Dose; speaker + author + creativity evangelist',
                url: 'http://denisejacobs.com/',
                twitter: 'denisejacobs',
                avatar: '/static/images/denisejacobs.jpeg'
              },
              quote: 'Free people from the tyranny of their inner critic.'
            },
            {
              person: {
                name: 'Erin Lynch',
                title: 'Writer / designer / founder of shop, and production manager at A List Apart',
                url: 'http://www.webclique.net',
                twitter: 'erinlynch',
                avatar: '/static/images/erinlynch.jpg'
              },
              quote: 'Growth'
            },
            {
              person: {
                name: 'Sophie Shepherd',
                title: 'Designer at GitHub',
                url: 'http://sophieshepherd.com',
                twitter: 'sophshepherd',
                avatar: '/static/images/sophshepherd.jpg'
              },
              quote: 'Push the boundaries of the medium (web)'
            },
            {
              person: {
                name: 'Rachel Andrew',
                title: 'Founder of edgeofmyseat.com, the company behind Perch',
                url: 'http://rachelandrew.co.uk/',
                twitter: 'rachelandrew',
                avatar: '/static/images/rachelandrew.jpg'
              },
              quote: 'Javascript'
            },
            {
              person: {
                name: 'Anthony Colangelo',
                title: 'iOS developer, Big Cartel',
                url: 'https://acolangelo.com/',
                twitter: 'acolangelo',
                avatar: '/static/images/acolangelo.jpg'
              },
              quote: 'Hardware and 3-D printing'
            },
            {
              person: {
                name: 'Garin Evans',
                title: 'Developer',
                url: 'http://www.garinevans.com',
                twitter: 'mrgarinevans',
                avatar: '/static/images/mrgarinevans.jpeg'
              },
              quote: 'React Native'
            },
            {
              person: {
                name: 'Lyza Danger Gardner',
                title: 'CTO, Cloud Four',
                url: 'https://www.lyza.com',
                twitter: 'lyzadanger',
                avatar: '/static/images/lyzadanger.jpeg'
              },
              quote: 'Physical Web, HTML controlled hardware'
            },
            {
              person: {
                name: 'Matt Griffin',
                title: 'Founder of Bearded',
                url: 'http://www.bearded.com/',
                twitter: 'elefontpress',
                avatar: '/static/images/elefontpress.png'
              },
              quote: 'Accessibility'
            },
            {
              person: {
                name: 'Krystal Higgins',
                title: 'Senior interaction designer',
                url: 'http://www.kryshiggins.com/',
                twitter: 'kryshiggins',
                avatar: '/static/images/kryshiggins.jpg'
              },
              quote: 'Physical Web, HTML controlled hardware'
            },
            {
              person: {
                name: 'Ryan Irelan',
                title: 'Builder of Mijingo',
                url: 'http://ryanirelan.com',
                twitter: 'ryanirelan',
                avatar: '/static/images/ryanirelan.jpg'
              },
              quote: 'Decoupled content management systems'
            },
            {
              person: {
                name: 'Scott Jehl',
                title: 'Designer / developer at Filament Group and author of Responsible Responsive Design',
                url: 'http://scottjehl.com',
                twitter: 'scottjehl',
                avatar: '/static/images/scottjehl.jpg'
              },
              quote: 'HTTP2 and Service Workers'
            },
            {
              person: {
                name: 'Peter-Paul Koch',
                title: 'Mobile platform strategist',
                url: 'http://www.quirksmode.org',
                twitter: 'ppk',
                avatar: '/static/images/ppk.jpeg'
              },
              quote: 'Installable web apps'
            },
            {
              person: {
                name: 'Una Kravets',
                title: 'Front-end developer at IBM Design, Austin',
                url: 'http://twitter.com/una',
                twitter: 'Una',
                avatar: '/static/images/una.jpg'
              },
              quote: 'Javascript, Web images, Offline web apps'
            },
            {
              person: {
                name: 'Jeff Lembeck',
                title: 'www engineer at npm, Inc.',
                url: 'https://gist.github.com/jefflembeck/2eac4a73baec1af658b7',
                twitter: 'jefflembeck',
                avatar: '/static/images/jefflembeck.jpg'
              },
              quote: 'Node JS'
            },
            {
              person: {
                name: 'Mark Llobrera',
                title: 'Technology director, Bluecadet',
                url: 'http://alistapart.com/author/mllobrera',
                twitter: 'dirtystylus',
                avatar: '/static/images/dirtystylus.jpeg'
              },
              quote: 'Learning'
            },
            {
              person: {
                name: 'Paul Robert Lloyd',
                title: 'Independent graphic designer and web developer',
                url: 'https://paulrobertlloyd.com',
                twitter: 'paulrobertlloyd',
                avatar: '/static/images/paulrobertlloyd.png'
              },
              quote: 'Javascript'
            },
            {
              person: {
                name: 'Sarah Parmenter',
                title: 'Designer and founder, You Know Who',
                url: 'http://twitter.com/sazzy',
                twitter: 'sazzy',
                avatar: '/static/images/sazzy.jpg'
              },
              quote: 'Programming && Honest design and branding'
            },
            {
              person: {
                name: 'Simon St. Laurent',
                title: 'Strategic description director at O’Reilly Media, Inc.',
                url: 'http://www.simonstl.com',
                twitter: '',
                avatar: ''
              },
              quote: 'The borderlands between best practices for app development and site development.'
            },
            {
              person: {
                name: 'Ian Vanhoof',
                title: 'Technical editor at A List Apart',
                url: 'http://twitter.com/ianvanhoof',
                twitter: 'ianvanhoof',
                avatar: '/static/images/ianvanhoof.jpg'
              },
              quote: 'HTTP2'
            },
            {
              person: {
                name: 'Aarron Walter',
                title: 'Vice president of R&D at MailChimp',
                url: 'http://twitter.com/aarron',
                twitter: 'aarron',
                avatar: '/static/images/aarron.jpg'
              },
              quote: 'Sharpening my tools'
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
