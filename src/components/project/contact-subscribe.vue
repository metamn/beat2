<template lang="html">
  <aside :class="$style.contactSubscribe">
    <h3 hidden>Subscribe to newsletter</h3>

    <!-- Begin MailChimp Signup Form -->
    <div id="mc_embed_signup" :class="$style.mcEmbedSignup">
      <form action="//metamn.us13.list-manage.com/subscribe/post?u=b178b1c2898e554fb49906630&amp;id=6f3b53b2da" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll" :class="$style.mcEmbedSignupScroll">
          <div class="mc-field-group">
            <label for="mce-EMAIL" :class="$style.mcEmbedSignupScrollLabel">Email Address </label>
            <input type="email" value="" name="EMAIL" :class="[$style.mcEmbedSignupScrollEmail, 'required']" id="mce-EMAIL" placeholder="Your Email">
          </div>
          <p :class="$style.mcEmbedSignupScrollP">
            <a href="http://us13.campaign-archive1.com/home/?u=b178b1c2898e554fb49906630&id=6f3b53b2da" title="View previous campaigns">View previous campaigns.</a>
          </p>
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b178b1c2898e554fb49906630_6f3b53b2da" tabindex="-1" value=""></div>
          <div class="clear">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" :class="$style.mcEmbedSignupScrollButton">
          </div>
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

<style module>
  @value lem from '../framework/scale.css';
  @value mobile from '../framework/breakpoints.css';

  .contactSubscribe {
    display: flex;
    flex-basis: 100%;
  }

  .mcEmbedSignup {
    width: 100%;
  }

  .mcEmbedSignupScroll {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .mcEmbedSignupScrollLabel,
  .mcEmbedSignupScrollP {
    display: none;
  }

  .mcEmbedSignupScrollEmail,
  .mcEmbedSignupScrollButton {
    composes: name from './../framework/text-style.css';
    composes: normalAll from '../framework/border.css';
    padding: calc(lem / 2);
  }

  .mcEmbedSignupScrollEmail {
    max-width: calc(25em * 1.333);

    @media mobile {
      $paddingOnMobile: calc(lem * 2);
      width: calc(100% - $paddingOnMobile);
      background: red;
    }
  }

  .mcEmbedSignupScrollButton {
    margin-top: 1px;
    cursor: pointer;

    transform: skew(5deg);
    composes: cubicBezier from '../framework/transition.css';
    composes: inverted from '../framework/colors.css';
  }

  .mcEmbedSignupScrollButton:hover {
    transform: skew(-5deg);
  }
</style>
