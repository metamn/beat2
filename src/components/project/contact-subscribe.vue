<template lang="html">
  <aside class="contact-subscribe">
    <h3 hidden>Subscribe to newsletter</h3>

    <!-- Begin MailChimp Signup Form -->
    <div id="mc_embed_signup">
    <form action="//metamn.us13.list-manage.com/subscribe/post?u=b178b1c2898e554fb49906630&amp;id=6f3b53b2da" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">

    <div class="mc-field-group">
      <label for="mce-EMAIL">Email Address </label>
      <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Your Email">
    </div>
    <p><a href="http://us13.campaign-archive1.com/home/?u=b178b1c2898e554fb49906630&id=6f3b53b2da" title="View previous campaigns">View previous campaigns.</a></p>
      <div id="mce-responses" class="clear">
        <div class="response" id="mce-error-response" style="display:none"></div>
        <div class="response" id="mce-success-response" style="display:none"></div>
      </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b178b1c2898e554fb49906630_6f3b53b2da" tabindex="-1" value=""></div>
        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
        </div>
    </form>
    </div>
    <!--End mc_embed_signup-->
  </aside>
</template>

<script>
  export default {
    name: 'mv-contact-subscribe'
  }
</script>

<style lang="css">
  .contact-subscribe {
    display: flex;
    flex-basis: 100%;

    #mc_embed_signup {
      width: 100%;
    }

    #mc_embed_signup_scroll {
      display: flex;
      flex-direction: column;
      justify-content: center;

      // Email input label
      label {
        display: none;
      }

      // Email input
      .email {
        @include max-width(25em * 1.333);

        @include mobile {
          width: calc(100% - #{$lem * 2});
        }
      }

      .email,
      .button {
        @include text-style(name);
        @include colors(black-on-white);
        @include border(thin, all);
        padding: $lem / 2;
      }

      // The submit button
      .button {
        margin-top: 1px;

        transform: skew(5deg);
        @include colors(white-on-black);
        @include transition(transform);

        &:hover {
          transform: skew(-5deg);
        }
      }

      // View campaigns
      p {
        display: none;
      }
    }
  }
</style>
