<script>
  import CardIcon1 from '../../assets/images/cardIcon1.png'
  import CardIcon2 from '../../assets/images/cardIcon2.png'
  import CardIcon3 from '../../assets/images/cardIcon3.png'

  const cards = [
    {
      icon: CardIcon1,
      title: 'Chat Builder',
      points: [
        'The fastest way to go live.'
      ]
    },
    {
      icon: CardIcon2,
      title: 'UI Kits',
      points: [
        'Production-ready components with full flexibility.'
      ]
    },
    {
      icon: CardIcon3,
      title: 'SDKs & APIs',
      points: [
        'The toolbox for when you want total control.'
      ]
    }
  ]
</script>

<section
  id="developers"
  class="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8"
  aria-labelledby="integration-heading"
>
  <div class="absolute inset-0 bg-hero-glow pointer-events-none" aria-hidden="true"></div>
  <div
    class="glow-orb left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 bg-brand-purple/12"
    aria-hidden="true"
  ></div>

  <div class="relative z-10 mx-auto w-full max-w-6xl rounded-3xl bg-[#070714] px-4 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
    <div class="mx-auto max-w-3xl text-center">
      <p class="font-body text-lg text-brand-purple">Chat integration options</p>
      <h2 id="integration-heading" class="mt-3 font-display text-3xl font-700 leading-tight text-white sm:text-4xl lg:text-5xl">
        Your launch, your way. Done right.
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-subtext sm:text-lg">
        Start with what gets you to production fastest - or matches your needs the best.
        Swap it out or level it up later.
      </p>
    </div>

    <div class="relative mt-14 border-y border-brand-border/70 border-x border-brand-border/70 lg:mt-16 lg:border-x-0">
      <div class="pointer-events-none absolute inset-0 lg:hidden" aria-hidden="true">
        <span class="absolute left-0 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-border/90 bg-[#070714]"></span>
        <span class="absolute right-0 top-0 h-3 w-3 translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-border/90 bg-[#070714]"></span>
        <span class="absolute left-0 bottom-0 h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full border border-brand-border/90 bg-[#070714]"></span>
        <span class="absolute right-0 bottom-0 h-3 w-3 translate-x-1/2 translate-y-1/2 rounded-full border border-brand-border/90 bg-[#070714]"></span>
      </div>

      <div class="hidden lg:block">
        <span class="absolute left-0 top-0 h-full w-px bg-brand-border/70"></span>
        <span class="absolute left-1/3 top-0 h-full w-px bg-brand-border/70"></span>
        <span class="absolute left-2/3 top-0 h-full w-px bg-brand-border/70"></span>
        <span class="absolute right-0 top-0 h-full w-px bg-brand-border/70"></span>

        <span class="absolute left-0 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-border/90 bg-[#070714]"></span>
        <span class="absolute left-1/3 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-border/90 bg-[#070714]"></span>
        <span class="absolute left-2/3 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-border/90 bg-[#070714]"></span>
        <span class="absolute right-0 top-0 h-3 w-3 translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-border/90 bg-[#070714]"></span>

        <span class="absolute left-0 bottom-0 h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full border border-brand-border/90 bg-[#070714]"></span>
        <span class="absolute left-1/3 bottom-0 h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full border border-brand-border/90 bg-[#070714]"></span>
        <span class="absolute left-2/3 bottom-0 h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full border border-brand-border/90 bg-[#070714]"></span>
        <span class="absolute right-0 bottom-0 h-3 w-3 translate-x-1/2 translate-y-1/2 rounded-full border border-brand-border/90 bg-[#070714]"></span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3">
      {#each cards as card, index}
          <article class="relative min-h-[220px] border-b border-brand-border/70 px-5 py-8 last:border-b-0 sm:px-7 sm:py-10 lg:border-b-0 lg:px-6 lg:py-8">
            {#if index !== cards.length - 1}
              <span class="pointer-events-none absolute bottom-0 left-0 h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full border border-brand-border/90 bg-[#070714] lg:hidden"></span>
              <span class="pointer-events-none absolute bottom-0 right-0 h-3 w-3 translate-x-1/2 translate-y-1/2 rounded-full border border-brand-border/90 bg-[#070714] lg:hidden"></span>
            {/if}

            <img src={card.icon} alt="" loading="lazy" decoding="async" width="40" height="40" class="mb-9 h-10 w-10 object-contain" aria-hidden="true" />

            <h3 class="font-body text-xl font-600 leading-tight text-white">{card.title}</h3>

            <ul class="mt-2 space-y-2.5">
              {#each card.points as point}
                <li class="flex items-start gap-2.5">
                  <span class="text-sm leading-relaxed text-brand-subtext">{point}</span>
                </li>
              {/each}
            </ul>

            <button
              type="button"
              class="mt-5 inline-flex text-sm font-600 text-brand-purple transition-colors duration-200 hover:text-brand-violet"
            >
              Try Builder
            </button>
          </article>
      {/each}
      </div>
    </div>
  </div>
</section>
