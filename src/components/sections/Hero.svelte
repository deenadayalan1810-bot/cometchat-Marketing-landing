<script>
  import Icon       from '../ui/Icon.svelte'
  import headIcon from '../../assets/images/Profile.png'
  import heroImage from '../../assets/images/hero-chat-preview.png'
  import { HERO } from '../../lib/data.js'
</script>

<section id="home" class="relative min-h-[90vh] flex items-center
                pt-14 pb-16 md:pt-16 md:pb-24
                px-4 sm:px-6 lg:px-8 overflow-hidden"
         aria-labelledby="hero-heading">

  <!-- Hero glow -->
  <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
  <div class="glow-orb top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[600px] h-[600px]"
       aria-hidden="true"></div>

  <div class="relative z-10 max-w-7xl mx-auto mt-10">
    <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

      <!-- â”€â”€ Left: Copy â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
      <div class="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">

        <!-- Badge pill -->
        <div class="inline-flex items-center gap-2 mb-6
                    px-3 py-1.5 rounded-full
                    border border-brand-purple/30
                    text-brand-violet text-xs font-mono tracking-wide">
          <img
            src={headIcon}
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
            width="16"
            height="16"
            class="w-4 h-4 rounded-full object-cover shrink-0"
          />
          {HERO.badge}
        </div>

        <h1 id="hero-heading"
            class="font-display font-400 text-white leading-[1.08]
                   text-3xl sm:text-5xl lg:text-[3.75rem] mb-5">
          {HERO.headline} <span class="gradient-text">{HERO.headspan}</span><br>

          <span class="gradient-text">{HERO.headlineSub}</span>
        </h1>

        <p class="text-brand-subtext text-base sm:text-lg leading-relaxed
                  mb-8 max-w-[480px] mx-auto lg:mx-0">
          {HERO.body}
        </p>

        <div class="flex flex-col sm:flex-row items-center gap-3
                    justify-center lg:justify-start">
          <a href={HERO.primaryCta.href}
             class="btn-primary px-6 py-3 text-sm w-full sm:w-auto justify-center
                    !shadow-lg !shadow-brand-purple/30">
            {HERO.primaryCta.label}
            <Icon name="arrow-right" size={14} />
          </a>
          <a href={HERO.secondaryCta.href}
             class="btn-outline px-6 py-3 text-sm w-full sm:w-auto justify-center">
            {HERO.secondaryCta.label}
          </a>
        </div>

        <p class="mt-6 text-brand-muted text-xs">
          Trusted by <span class="text-white font-600">{HERO.trustNote}</span> companies in production
        </p>
      </div>

      <!-- â”€â”€ Right: Chat mockup â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
      <div class="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-[420px] mx-auto lg:mx-0 lg:ml-auto">
        <div class="relative animate-float">
          <img
             src={heroImage}
             alt="AI agent chat interface preview"
             loading="eager"
             fetchpriority="high"
             decoding="async"
             width="900"
             height="720"
             class="w-full max-w-[500px] abject-contain"
          />
        </div>
      </div>

    </div>
  </div>
</section>

