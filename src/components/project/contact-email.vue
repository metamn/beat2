<template lang="html">
  <aside :class="$style.curvedEmail">
    <h3 hidden>Contact via email</h3>

    <mv-link url="bartus.csongor@gmail.com" title="bartus.csongor@gmail.com" type="email" :class="[$style.warped, 'warped']">
      <span class='w0'>b</span><span class='w1'>a</span><span class='w2'>r</span><span class='w3'>t</span><span class='w4'>u</span><span class='w5'>s</span><span class='w6'>.</span><span class='w7'>c</span><span class='w8'>s</span><span class='w9'>o</span><span class='w10'>n</span><span class='w11'>g</span><span class='w12'>o</span><span class='w13'>r</span><span class='w14'>@</span><span class='w15'>g</span><span class='w16'>m</span><span class='w17'>a</span><span class='w18'>i</span><span class='w19'>l</span><span class='w20'>.</span><span class='w21'>c</span><span class='w22'>o</span><span class='w23'>m</span>
    </mv-link>
  </aside>
</template>

<script>
  import link from '../framework/link'

  export default {
    name: 'mv-contact-email',
    components: {
      'mv-link': link
    }
  }
</script>

<style module>
  .curvedEmail {
    overflow: hidden;
    max-width: 100%;
  }

  .warped {
    position: relative;
    display: block;
    width:526px;
    height:608px;
  }

  /**
   * Reduce .warped when overflows the screen
   */
  @media screen and (max-width: 520px) {
    .warped {
      transform: scale(.8) translate(-35%, -35%);
      max-height: 70vh;
    }
  }
</style>

<style lang="css">
  .warped>span[class^=w]:nth-of-type(n+0){display:block; position:absolute;
   -moz-transform-origin:50% 100%; -webkit-transform-origin:50% 100%; -o-transform-origin:50%
   100%; -ms-transform-origin:50% 100%; transform-origin:50% 100%; }

   .warped .w0 {-moz-transform: rotate(-8.34rad);-webkit-transform: rotate(-8.34rad);-o-transform:
   rotate(-8.34rad);-ms-transform: rotate(-8.34rad); transform: rotate(-8.34rad);
   width: 23px; height: 25px; left: 187.95px; top: 320.96px;}

   .warped .w1 {-moz-transform: rotate(-8.19rad);-webkit-transform: rotate(-8.19rad);-o-transform:
   rotate(-8.19rad);-ms-transform: rotate(-8.19rad); transform: rotate(-8.19rad);
   width: 23px; height: 25px; left: 177.15px; top: 296.27px;}

   .warped .w2 {-moz-transform: rotate(-8.01rad);-webkit-transform: rotate(-8.01rad);-o-transform:
   rotate(-8.01rad);-ms-transform: rotate(-8.01rad); transform: rotate(-8.01rad);
   width: 15px; height: 25px; left: 175.17px; top: 272.83px;}

   .warped .w3 {-moz-transform: rotate(-7.81rad);-webkit-transform: rotate(-7.81rad);-o-transform:
   rotate(-7.81rad);-ms-transform: rotate(-7.81rad); transform: rotate(-7.81rad);
   width: 15px; height: 25px; left: 173.96px; top: 252.51px;}

   .warped .w4 {-moz-transform: rotate(-7.52rad);-webkit-transform: rotate(-7.52rad);-o-transform:
   rotate(-7.52rad);-ms-transform: rotate(-7.52rad); transform: rotate(-7.52rad);
   width: 23px; height: 25px; left: 174.38px; top: 229.16px;}

   .warped .w5 {-moz-transform: rotate(-7.17rad);-webkit-transform: rotate(-7.17rad);-o-transform:
   rotate(-7.17rad);-ms-transform: rotate(-7.17rad); transform: rotate(-7.17rad);
   width: 18px; height: 25px; left: 189.13px; top: 207.39px;}

   .warped .w6 {-moz-transform: rotate(-6.91rad);-webkit-transform: rotate(-6.91rad);-o-transform:
   rotate(-6.91rad);-ms-transform: rotate(-6.91rad); transform: rotate(-6.91rad);
   width: 11px; height: 25px; left: 206.67px; top: 194.23px;}

   .warped .w7 {-moz-transform: rotate(-6.68rad);-webkit-transform: rotate(-6.68rad);-o-transform:
   rotate(-6.68rad);-ms-transform: rotate(-6.68rad); transform: rotate(-6.68rad);
   width: 18px; height: 25px; left: 220.17px; top: 184.77px;}

   .warped .w8 {-moz-transform: rotate(-6.44rad);-webkit-transform: rotate(-6.44rad);-o-transform:
   rotate(-6.44rad);-ms-transform: rotate(-6.44rad); transform: rotate(-6.44rad);
   width: 18px; height: 25px; left: 242.64px; top: 178.59px;}

   .warped .w9 {-moz-transform: rotate(-6.19rad);-webkit-transform: rotate(-6.19rad);-o-transform:
   rotate(-6.19rad);-ms-transform: rotate(-6.19rad); transform: rotate(-6.19rad);
   width: 23px; height: 25px; left: 265.61px; top: 177.96px;}

   .warped .w10 {-moz-transform: rotate(-5.94rad);-webkit-transform: rotate(-5.94rad);-o-transform:
   rotate(-5.94rad);-ms-transform: rotate(-5.94rad); transform: rotate(-5.94rad);
   width: 23px; height: 25px; left: 292.69px; top: 184.13px;}

   .warped .w11 {-moz-transform: rotate(-5.68rad);-webkit-transform: rotate(-5.68rad);-o-transform:
   rotate(-5.68rad);-ms-transform: rotate(-5.68rad); transform: rotate(-5.68rad);
   width: 22px; height: 25px; left: 317.48px; top: 196.73px;}

   .warped .w12 {-moz-transform: rotate(-5.43rad);-webkit-transform: rotate(-5.43rad);-o-transform:
   rotate(-5.43rad);-ms-transform: rotate(-5.43rad); transform: rotate(-5.43rad);
   width: 23px; height: 25px; left: 337.29px; top: 214.93px;}

   .warped .w13 {-moz-transform: rotate(-5.23rad);-webkit-transform: rotate(-5.23rad);-o-transform:
   rotate(-5.23rad);-ms-transform: rotate(-5.23rad); transform: rotate(-5.23rad);
   width: 15px; height: 25px; left: 355.21px; top: 234.78px;}

   .warped .w14 {-moz-transform: rotate(-4.99rad);-webkit-transform: rotate(-4.99rad);-o-transform:
   rotate(-4.99rad);-ms-transform: rotate(-4.99rad); transform: rotate(-4.99rad);
   width: 40px; height: 25px; left: 354.85px; top: 264.68px;}

   .warped .w15 {-moz-transform: rotate(-4.78rad);-webkit-transform: rotate(-4.78rad);-o-transform:
   rotate(-4.78rad);-ms-transform: rotate(-4.78rad); transform: rotate(-4.78rad);
   width: 22px; height: 25px; left: 369.61px; top: 300.14px;}

   .warped .w16 {-moz-transform: rotate(-10.87rad);-webkit-transform: rotate(-10.87rad);-o-transform:
   rotate(-10.87rad);-ms-transform: rotate(-10.87rad); transform: rotate(-10.87rad);
   width: 35px; height: 25px; left: 362.05px; top: 336.8px;}

   .warped .w17 {-moz-transform: rotate(-10.63rad);-webkit-transform: rotate(-10.63rad);-o-transform:
   rotate(-10.63rad);-ms-transform: rotate(-10.63rad); transform: rotate(-10.63rad);
   width: 23px; height: 25px; left: 360.04px; top: 369.51px;}

   .warped .w18 {-moz-transform: rotate(-10.44rad);-webkit-transform: rotate(-10.44rad);-o-transform:
   rotate(-10.44rad);-ms-transform: rotate(-10.44rad); transform: rotate(-10.44rad);
   width: 10px; height: 25px; left: 357.17px; top: 388.39px;}

   .warped .w19 {-moz-transform: rotate(-10.27rad);-webkit-transform: rotate(-10.27rad);-o-transform:
   rotate(-10.27rad);-ms-transform: rotate(-10.27rad); transform: rotate(-10.27rad);
   width: 13px; height: 25px; left: 345.81px; top: 401.53px;}

   .warped .w20 {-moz-transform: rotate(-10.08rad);-webkit-transform: rotate(-10.08rad);-o-transform:
   rotate(-10.08rad);-ms-transform: rotate(-10.08rad); transform: rotate(-10.08rad);
   width: 11px; height: 25px; left: 334.09px; top: 413.33px;}

   .warped .w21 {-moz-transform: rotate(-9.88rad);-webkit-transform: rotate(-9.88rad);-o-transform:
   rotate(-9.88rad);-ms-transform: rotate(-9.88rad); transform: rotate(-9.88rad);
   width: 18px; height: 25px; left: 314.11px; top: 423.44px;}

   .warped .w22 {-moz-transform: rotate(-9.64rad);-webkit-transform: rotate(-9.64rad);-o-transform:
   rotate(-9.64rad);-ms-transform: rotate(-9.64rad); transform: rotate(-9.64rad);
   width: 23px; height: 25px; left: 288.01px; top: 431.42px;}

   .warped .w23 {-moz-transform: rotate(-9.37rad);-webkit-transform: rotate(-9.37rad);-o-transform:
   rotate(-9.37rad);-ms-transform: rotate(-9.37rad); transform: rotate(-9.37rad);
   width: 35px; height: 25px; left: 248.16px; top: 433.75px;}
</style>
