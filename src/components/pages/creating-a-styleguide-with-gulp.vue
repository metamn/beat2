<template lang="html">
  <mv-article :article="article" :display="display">
    <vue-markdown>
    Styleguides have been around for a while, and like web components, they didn’t went mainstream.

    Why? There is no such thing like a universal plugin  to create a styleguide, and, there is no consensus on what goes into a styleguide.

    Everybody rolls her own.
    The most well known styleguides today are Google’s Material Design <sup id="footnote--1">[1](#footnotes--1)</sup>,
    Lonely Planet’s Rizzo <sup id="footnote--2">[2](#footnotes--2)</sup>, and Pattern Lab / Atomic Design <sup id="footnote--3">[3](#footnotes--3)</sup> .
    All unique in design, content and the tools behind creating them.

    If you check out [styleguides.io](http://styleguides.io/) you'll find dozens of tools & ways to create a styleguide.
    It's overhelming. You don't know where to start, which one to choose to have a future-proof solution.

    Never mind. This article will help you understand how styleguides work and how you can roll your own with a small effort.

    ## Styleguide for whom?

    The first question everybody should ask is who needs a styleguide and why.

    Project owners might need it to be sure the design and development are in sync, everybody speaks the same language, new team members can catch up instantly, and the whole project is like to be done by a single person.

    Designers might need it to be able to make design decisions on a granular level. They can overview the whole picture or the smallest details.

    Developers might need it to have a framework easy to learn and participate where they can write error-free code.

    A *complete* styleguide covers all above scenarios and provides:

    1. A styleguide living together with the associated website.
    Any change in the site design is automatically updated in the styleguide.

    2. A decision making tool. All components and groups of components building the site will have their own styleguide entry.
    Designers will be able to overview a part of the user interface or a whole segment of it.

    3. Error-free code. Components living in multiple environments &mdash; the website itself and in the various styleguide entries &mdash; are more error-proof than those *made to work* in a single context.


    A few tools offer a complete styleguide and if they do their solution is bound to a specific platform &mdash; Ruby On Rails for Lonely Planet's Rizzo, PHP for Pattern Lab &mdash; or to a specific outcome &mdash; Google's Material Design is likely to produce the same experience for any website.

    What if to have a platform independent complete styleguide? One created with front-end tools and easily attachable to any back-end?
    You can have it more easily than you might thought.

    ## Styleguide architecture

    The theory behind maintainable styleguides is [Component API](http://ianfeather.co.uk/a-maintainable-style-guide/) defined by Ian Feather of Rizzo.

    > ... creating a component layer which both our user-facing applications and our Style Guide can work from.

    In other words there is a need for a database to store all user interface parameters. Both the site and the styleguide uses this database to build the interface. Changes go to this database and are automatically propagated to both the site and the styleguide.
  </vue-markdown>

  <mv-image :class="$style.image" :image="article.images[0]"/>

  <vue-markdown>
    Since the styleguide architecture is so simple we can implement with our existing front-end tools.
    The database can be a JSON file, Gulp / Grunt / etc. can be the glue engine to sync the database with the front-end code.
  </vue-markdown>

  <mv-image :class="$style.image" :image="article.images[1]"/>

  <vue-markdown>
    The rules are simple:

    1. Every user interface definition goes into a JSON file

    2. Gulp creates HTML and CSS files from the database both for the site and the styleguide

    3. The HTML and CSS files for the site are included also in the styleguide. This makes the styleguide stay in sync with the website.


    ## A concrete example

    Let's take a look at how to define the colors of a site and sync with the styleguide.

    First we will need a JSON file to define the colors:

    Then we will have to covert this data into CSS using Gulp and Swig, a tool coming with Gulp and used to generate HTML, CSS or JS.

    After conversion we will have a complete SCSS file, generated from the database, which otherwise would be written by hand by front-end developers.

    The most important part of the process above is that we *define data* instead of *writing code*.
    This makes sure data will be the same both for the site and the styleguide and there won't be human mistakes.

    Or put another way, the process above let's non-developers to describe user interfaces.
    JSON is plain English and no code. It's easy to use by anyone.

    A designer can hand over a JSON file with user interface definitions and the single task of the developer will be to convert that data to HTML and CSS.

    ### Use style

    Once styles are generated we will need the HTML to display them.
    Like the CSS, HTML will use the JSON data to create the structure displaying styles.

    The example below is the styleguide entry for colors. It's a HTML skeleton code displaying which colors are used to build the site. The code is independent of the colors it displays. Colors can change, new ones can be added or others removed. This code's outcome is only defined by JSON data.

    Gulp transforms the skeleton into a final HTML which contains the same colors as defined in the `colors.scss.json` file above.
  </vue-markdown>

  <mv-image :class="$style.image" :image="article.images[2]"/>

  <vue-markdown>
    ## See live, comment, contribute

    My portfolio features a complete, living styleguide built on these principles and technologies.
    You can [see it live](http://metamn.io/styleguide/), check the source code on [Github](https://github.com/metamn/metamn-v1),
    or contribute to the [open source version](https://github.com/metamn/ssgg).
    </vue-markdown>
  </mv-article>
</template>

<script>
  import article from '../project/article'
  import VueMarkdown from 'vue-markdown'
  import image from '../framework/image'

  export default {
    name: 'mv-creating-a-styleguide-with-gulp',
    props: {
      display: Array
    },
    data: function () {
      return {
        article: {
          title: 'Creating A Styleguide With Gulp',
          slug: 'creating-a-styleguide-with-gulp',
          excerpt: 'Creating a component layer which both our user-facing applications and our Style Guide can work from.',
          date: '2015-05-15',
          categories: ['code'],
          images: [
            {
              title: 'Styleguide architecture',
              src: '/static/images/styleguide-architecture_tablet.png',
              srcset: '/static/images/styleguide-architecture_mobile.png 420w, /static/images/styleguide-architecture_tablet.png 768w, /static/images/styleguide-architecture.png 1536w'
            },
            {
              title: 'Styleguide architecture details',
              src: '/static/images/styleguide-details-portrait_tablet.png',
              srcset: '/static/images/styleguide-details-portrait_mobile.png 420w, /static/images/styleguide-details-portrait_tablet.png 768w, /static/images/styleguide-details_laptop.png 1400w, /static/images/styleguide-details_laptop2x.png 2800w'
            },
            {
              title: 'Styleguide colors example',
              src: '/static/images/styleguide-example-portrait_tablet.png',
              srcset: '/static/images/styleguide-example-portrait_mobile.png 420w, /static/images/styleguide-example-portrait_tablet.png 768w, /static/images/styleguide-example_laptop.png 1400w, /static/images/styleguide-example_laptop2x.png 2800w'
            }
          ]
        }
      }
    },
    components: {
      'mv-article': article,
      'vue-markdown': VueMarkdown,
      'mv-image': image
    }
  }
</script>

<style module>
</style>
