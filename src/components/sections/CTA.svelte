<script>
  import CTAImg from '../../assets/images/CTAImg.png'
  import Ellipse from '../../assets/images/Ellipse.png'
</script>

<section id="pricing" class="relative overflow-hidden pt-6" aria-labelledby="cta-heading">

  <div class="cta-shell relative z-10 w-full overflow-hidden rounded-none bg-[#03030B] pb-14 pt-12 sm:pb-20 sm:pt-14">
    <div class="relative z-30 mx-auto flex w-full max-w-[110px] items-center justify-center sm:max-w-[118px]">
      
      <img src={CTAImg} alt="CometChat app icon" loading="lazy" decoding="async" width="118" height="118" class="relative z-10 h-auto w-full object-contain" />
    </div>

    <div class="ellipse-wrap pointer-events-none" aria-hidden="true">
      <img src={Ellipse} alt="" loading="lazy" decoding="async" width="1800" height="620" class="ellipse-bg" />
      <div class="ellipse-bottom-fade"></div>
    </div>

    <div class="cta-dome relative z-20 mx-auto mt-7 max-w-[980px] px-5 pb-12 pt-14 text-center sm:mt-10 sm:px-8 sm:pb-20 sm:pt-20">
      <div class="cta-dome-glow pointer-events-none absolute inset-0" aria-hidden="true"></div>

      <h2 id="cta-heading" class="relative z-20 font-body text-[41px] font-600 leading-[1.04] tracking-[-0.02em] text-[#F2F2FA] sm:text-[50px] lg:text-[52px]">
        You don't need to build it
        <br />
        all to ship it all
      </h2>

      <p class="relative z-20 mx-auto mt-4 max-w-[610px] text-[15px] leading-[1.42] text-[#A7A6C9] sm:text-[17px]">
        Start with chat. Or go full stack. Build fast, scale securely, and
        focus on what your agent does - not what it's missing.
      </p>

      <div class="relative z-20 mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3">
        <a
          href="/contact"
          class="inline-flex h-9 min-w-[104px] items-center justify-center rounded-[10px] border border-[#1F2240] bg-[#0B0C1B] px-4 text-[12px] font-600 text-[#D9D9EA] transition-colors duration-200 hover:border-[#3D3F66]"
        >
          Talk to Us
        </a>
        <a
          href="/signup"
          class="inline-flex h-9 min-w-[158px] items-center justify-center rounded-[10px] bg-[#7356F5] px-5 text-[12px] font-600 text-white transition-colors duration-200 hover:bg-[#8165FF]"
        >
          Try the Agent Builder
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .cta-shell::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(3, 3, 11, 0) 0%, rgba(3, 3, 11, 0.74) 58%, rgba(3, 3, 11, 0.98) 100%);
    pointer-events: none;
  }

  .cta-dome {
    position: relative;
    overflow: visible;
  }

  .ellipse-wrap {
    position: absolute;
    left: 50%;
    top: 228px;
    width: 100%;
    height: 360px;
    transform: translateX(-50%);
    z-index: 8;
  }

  .ellipse-bg {
    position: absolute;
    left: 50%;
    top: 0;
    width: 148%;
    max-width: none;
    transform: translateX(-50%);
    z-index: 9;
    opacity: 0.96;
    filter: drop-shadow(0 -24px 40px rgba(124, 92, 252, 0.38));
  }

  .ellipse-bottom-fade {
    position: absolute;
    left: 50%;
    top: 46%;
    width: 160%;
    height: 62%;
    transform: translateX(-50%);
    background: radial-gradient(ellipse at center, rgba(124, 92, 252, 0.06) 0%, rgba(3, 3, 11, 0.68) 58%, rgba(3, 3, 11, 0.96) 100%);
    filter: blur(12px);
    z-index: 6;
  }

  .cta-dome-glow {
    position: absolute;
    left: 50%;
    top: -12%;
    width: 136%;
    height: 48%;
    transform: translateX(-50%);
    border-radius: 999px 999px 0 0;
    background: radial-gradient(ellipse at top, rgba(124, 92, 252, 0.34) 0%, rgba(124, 92, 252, 0.1) 40%, rgba(124, 92, 252, 0) 74%);
    filter: blur(20px);
    z-index: 7;
  }

  @media (max-width: 1024px) {
    .cta-dome h2 {
      font-size: 48px;
    }
  }

  @media (max-width: 640px) {
    .ellipse-wrap {
      top: 190px;
      height: 290px;
    }

    .ellipse-bg {
      width: 206%;
      filter: drop-shadow(0 -16px 28px rgba(124, 92, 252, 0.34));
    }

    .cta-dome-glow {
      width: 178%;
      top: -18%;
      height: 42%;
      filter: blur(18px);
    }

    .ellipse-bottom-fade {
      top: 38%;
      width: 178%;
      height: 66%;
    }

    .cta-dome h2 {
      font-size: 34px;
      line-height: 1.08;
    }

    .cta-dome p {
      font-size: 15px;
    }
  }
</style>

