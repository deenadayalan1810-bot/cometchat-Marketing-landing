<script>
  import productionImg from '../../assets/images/production.png'
  import SolidIcon from '../../assets/images/Solid.png'
  import SectionLabel   from '../ui/SectionLabel.svelte'

  const points = [
    'Ready-to-ship chat UI kits for web and mobile.',
    'Message composer, toolbars and agent actions.',
    'Rich components, forms and agent workflows.',
    'Smart conversation threads.',
    'Built-in moderation and analytics.'
    ]
</script>

<section id="platform" class="relative min-h-[90vh] flex items-center
                pt-14 pb-16 md:pt-16 md:pb-24
                px-4 sm:px-6 lg:px-8 overflow-hidden"
         aria-labelledby="platform-heading">

  <!-- Hero glow -->
  <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
  <div class="glow-orb top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[600px] h-[600px]"
       aria-hidden="true"></div>

  <div class="relative z-10 max-w-7xl mx-auto mt-10">
    <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

      <div class="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">

        <SectionLabel centered={true} className="mb-4 block">Production-ready chat UI</SectionLabel>
        <h2 id="platform-heading"
            class="font-400 text-white leading-[1.08]
                   text-xl sm:text-5xl lg:text-[2.50rem] mb-5">
                   The UX layer your agent deserves.Built for LLM-native interactions, out of the box. 
        </h2>
        <p class="text-brand-subtext text-base sm:text-lg leading-relaxed
                  mb-8 max-w-[480px] mx-auto lg:mx-0">
          Forget cobbling together buttons and hoping users 'get it'.Our chat layer is purpose-built for how agents think - and how humans expect them to respond.
        </p>
        <ul class="space-y-3">
          {#each points as point}
            <li class="flex items-start gap-3">
              <img src={SolidIcon} alt="" loading="lazy" decoding="async" width="16" height="16" class="w-4 h-4 mt-1 shrink-0" aria-hidden="true" />
              <p class="text-brand-subtext text-sm leading-relaxed">{point}</p>
            </li>
          {/each}
        </ul>
      
      </div>

      <!-- â”€â”€ Right: Chat mockup â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
      <div class="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-[420px] mx-auto lg:mx-0 lg:ml-auto">
        <div class="relative animate-float">
          <img
             src={productionImg}
             alt="Production-ready chat user interface preview"
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


      

