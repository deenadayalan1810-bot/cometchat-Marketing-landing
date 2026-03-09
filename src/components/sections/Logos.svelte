<script>
  import { CUSTOMER_LOGOS } from '../../lib/data.js'

  const logos = [...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS]
</script>

<section class="relative overflow-hidden px-4 pb-10 pt-6 sm:px-6 lg:px-8" aria-label="Trusted by companies">
  <div class="relative z-10 mx-auto w-full max-w-6xl">
    <div class="logo-frame relative border-y border-brand-border/70 border-x border-brand-border/70 bg-[#070714]">
      <div class="pointer-events-none absolute inset-0" aria-hidden="true">
        <span class="absolute left-0 top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#070714]"></span>
        <span class="absolute right-0 top-0 h-5 w-5 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#070714]"></span>
        <span class="absolute left-0 bottom-0 h-5 w-5 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#070714]"></span>
        <span class="absolute right-0 bottom-0 h-5 w-5 translate-x-1/2 translate-y-1/2 rounded-full bg-[#070714]"></span>

        <span class="absolute left-0 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-border/90 bg-[#070714]"></span>
        <span class="absolute right-0 top-0 h-3 w-3 translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-border/90 bg-[#070714]"></span>
        <span class="absolute left-0 bottom-0 h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full border border-brand-border/90 bg-[#070714]"></span>
        <span class="absolute right-0 bottom-0 h-3 w-3 translate-x-1/2 translate-y-1/2 rounded-full border border-brand-border/90 bg-[#070714]"></span>
      </div>

      <div class="relative overflow-hidden">
        <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#070714] to-transparent sm:w-24"></div>
        <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#070714] to-transparent sm:w-24"></div>

        <ul class="logo-track flex min-w-max items-center gap-x-10 px-6 py-6 sm:gap-x-14 sm:px-10 sm:py-7" role="list" aria-hidden="true">
          {#each logos as name}
            <li class="whitespace-nowrap px-2 font-display text-[30px] font-700 tracking-tight text-white/55 transition-colors duration-300 hover:text-white/90 sm:text-2xl">
              {name}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>

<style>
  .logo-track {
    animation: scroll-x 24s linear infinite;
  }

  .logo-frame:hover .logo-track {
    animation-play-state: paused;
  }

  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 640px) {
    .logo-track {
      animation-duration: 16s;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .logo-track {
      animation: none;
      width: 100%;
      min-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
