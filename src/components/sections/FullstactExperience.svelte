<script>
  import CourseMain from '../../assets/images/courseMain.png'
  import CourseIcon from '../../assets/images/courseIcon.png'
  import CourseIcon2 from '../../assets/images/courseIcon (2).png'
  import CourseCard1 from '../../assets/images/courseCardOG.png'
  import CourseCard2 from '../../assets/images/courseCard2.png'
  import SolidIcon from '../../assets/images/Solid.png'

  const cards = [
    {
      icon: CourseIcon,
      title: 'BYOB - Bring Your Own (Agent) Brain',
      points: [
        'Use your existing LLM orchestration',
        "Plug into CometChat's UI, mod, notifications, and insights",
        'Modular, protocol-compatible, and fast to implement'
      ],
      image: CourseCard1
    },
    {
      icon: CourseIcon2,
      title: 'Build Inside CometChat',
      points: [
        'Visual Agent Builder',
        'Design prompt logic, memory, retries, tool use',
        'Simulate and ship - all from a single canvas'
      ],
      image: CourseCard2
    }
  ]
</script>

<section
  id="solutions"
  class="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 lg:px-8"
  aria-labelledby="fullstack-experience-heading"
>
  <div class="absolute inset-0 bg-hero-glow pointer-events-none" aria-hidden="true"></div>
  <div
    class="glow-orb left-1/2 top-20 h-[380px] w-[380px] -translate-x-1/2 bg-brand-purple/15"
    aria-hidden="true"
  ></div>

  <div class="relative z-10 mx-auto w-full max-w-6xl rounded-3xl bg-[#070714] px-4 py-10 sm:px-8 sm:py-14">
    <img
      src={CourseMain}
      alt="Full stack experience"
      loading="lazy"
      decoding="async"
      width="1200"
      height="700"
      class="mx-auto mb-8 w-full object-contain sm:mb-10"
    />

    <div class="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
      <h2
        id="fullstack-experience-heading"
        class="font-display text-3xl font-700 leading-tight text-white sm:text-4xl"
      >
        Plug in your logic.
        <br />
        Or build it here.
      </h2>
      <p class="mt-3 text-base text-brand-subtext sm:text-lg">Two paths. Same full-stack experience.</p>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {#each cards as card}
        <article class="rounded-2xl border border-brand-border/80 bg-brand-dark/60 p-5 sm:p-6">
          <img src={card.icon} alt="" loading="lazy" decoding="async" width="40" height="40" class="mb-5 h-10 w-10 object-contain" aria-hidden="true" />

          <h3 class="font-body text-[26px] font-600 leading-tight text-white">{card.title}</h3>

          <ul class="mt-4 space-y-2.5">
            {#each card.points as point}
              <li class="flex items-start gap-2.5">
                <img src={SolidIcon} alt="" loading="lazy" decoding="async" width="14" height="14" class="mt-1 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span class="text-sm leading-relaxed text-brand-subtext">{point}</span>
              </li>
            {/each}
          </ul>

          <button
            type="button"
            class="mt-5 inline-flex text-sm font-600 text-brand-purple transition-colors duration-200 hover:text-brand-violet"
          >
            Learn more
          </button>

          <div class="mt-6 overflow-hidden rounded-xl border border-brand-border/60 bg-[#0B0B1D] p-2 sm:p-3">
            <img
              src={card.image}
              alt={`${card.title} preview`}
              loading="lazy"
              decoding="async"
              width="560"
              height="340"
              class="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
