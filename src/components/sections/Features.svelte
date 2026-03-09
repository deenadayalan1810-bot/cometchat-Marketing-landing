<script>
  import featureImage from '../../assets/images/agent-gap-comparison.png'
</script>

<section id="features" class="relative min-h-[90vh] flex items-center
                pt-14 pb-16 md:pt-16 md:pb-24
                px-4 sm:px-6 lg:px-8 overflow-hidden"
         aria-labelledby="features-heading">

  <!-- Hero glow -->
  <div class="absolute inset-0 bg-hero-glow pointer-events-none" aria-hidden="true"></div>
  <div class="glow-orb top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[600px] h-[600px] bg-brand-purple/10"
       aria-hidden="true"></div>

  <div class="relative z-10 max-w-7xl mx-auto mt-10">
    <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

      <!-- â”€â”€ Left: Copy â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
      <div class="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">


        <h2 id="features-heading"
            class="font-display font-400 text-white leading-[1.08]
                   text-3xl sm:text-5xl lg:text-[3.75rem] mb-5">
                   Everything your agent needs to go from prototype to product-fixed.
        </h2>

        <p class="text-brand-subtext text-base sm:text-lg leading-relaxed
                  mb-8 max-w-[480px] mx-auto lg:mx-0">
          Modular when you want control.All-in-one when you just need to launch.
        </p>
      </div>

      <!-- â”€â”€ Right: Chat mockup â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
      <div class="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-[420px] mx-auto lg:mx-0 lg:ml-auto">
        <div class="relative animate-float">
          <img
             src={featureImage}
             alt="Product workflow comparison interface"
             loading="lazy"
             decoding="async"
             width="1000"
             height="740"
             class="w-full max-w-[500px] abject-contain"
          />
        </div>
      </div>

    </div>
  </div>
</section>
