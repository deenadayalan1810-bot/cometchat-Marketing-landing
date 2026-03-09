<script>
  import InsightDashboard from '../../assets/images/InsightDashboard.png'
  import SolidIcon from '../../assets/images/Solid.png'
  import SectionLabel   from '../ui/SectionLabel.svelte'

  const points = [
    'Product use data. Measure everything that matters.',
    'See usage breakdowns, prompt paths, funnel drop-offs.',
    'Observe how users interact with your agent.',
    'Share outcomes and feedback loops.',
    'Repeatable, flexible, and privacy respectful.',
    'You won’t outgrow what you start with. When you grow deeper.'
    ]
</script>

<section id="resources" class="relative min-h-[90vh] flex items-center
                pt-14 pb-16 md:pt-16 md:pb-24
                px-4 sm:px-6 lg:px-8 overflow-hidden"
         aria-labelledby="insights-heading">

  <!-- Hero glow -->
  <div class="absolute inset-0 bg-hero-glow pointer-events-none" aria-hidden="true"></div>
  <div class="glow-orb top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[600px] h-[600px] bg-brand-purple/10"
       aria-hidden="true"></div>

  <div class="relative z-10 max-w-7xl mx-auto mt-10">
    <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

      <!-- ── Left: Copy ────────────────────────────────────────── -->
      <div class="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">

        <SectionLabel centered={true} className="mb-4 block">Insights dashboard</SectionLabel>
        <h2 id="insights-heading"
            class="font-400 text-white leading-[1.08]
                   text-xl sm:text-5xl lg:text-[2.50rem] mb-5">
                   Ship the agent. Then make it better.
                   Without needing Mixpanel, Segment, or BI setups.
        </h2>
        <p class="text-brand-subtext text-base sm:text-lg leading-relaxed
                  mb-4 max-w-[480px] mx-auto lg:mx-0">
          When you ship your agent you’ll inevitably ask what’s working and where to improve.
        </p>
        <ul class="space-y-3">
          {#each points as point}
            <li class="flex items-start gap-3">
              <img src={SolidIcon} alt="" loading="lazy" decoding="async" width="16" height="16" class="w-4 h-4 mt-1 shrink-0" aria-hidden="true" />
              <p class="text-brand-subtext text-sm leading-relaxed">{point}</p>
            </li>
          {/each}
        </ul>
        <p class="text-brand-subtext text-base sm:text-lg leading-relaxed
                  mt-4 max-w-[480px] mx-auto lg:mx-0">
          Notifications aren’t a growth hack. They’re UX. And we built them to grow with you.
        </p>
      
      </div>

      <!-- ── Right: Chat mockup ─────────────────────────────────── -->
      <div class="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-[420px] mx-auto lg:mx-0 lg:ml-auto">
        <div class="relative animate-float">
          <img
             src={InsightDashboard}
             alt="Analytics dashboard for AI agent conversations"
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


      
