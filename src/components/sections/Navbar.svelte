<script>
  import Logo   from '../layout/Logo.svelte'
  import Icon   from '../ui/Icon.svelte'
  import { NAV_LINKS } from '../../lib/data.js'

  let mobileOpen = false
</script>

<header class="fixed top-0 inset-x-0 z-50 h-14
               border-b border-brand-border/50
               backdrop-blur-xl bg-brand-dark/85">
  <nav class="w-full px-6 sm:px-6 lg:px-8
              h-full flex items-center justify-between gap-8"
       aria-label="Main navigation">

    <Logo />

    <!-- Desktop links -->
    <ul class="hidden md:flex items-center gap-0.5 flex-1 justify-center" role="list">
      {#each NAV_LINKS as link}
        <li>
          <a href={link.href}
             class="text-white hover:text-brand-purple text-sm font-body
                    px-3.5 py-1.5 rounded-md hover:bg-white/5 transition-colors duration-150">
            {link.label}
          </a>
        </li>
      {/each}
    </ul>

    <!-- Desktop CTA -->
    <div class="hidden md:flex items-center gap-4 shrink-0">
      <a href="/login"
         class="text-white hover:text-brand-purple text-sm font-body transition-colors duration-150">
        Log in
      </a>
      <a href="/signup"
         class="btn-primary !text-xs !px-4 !py-2 !rounded-lg">
        Start for free
      </a>
    </div>

    <!-- Mobile hamburger -->
    <button class="md:hidden p-1.5 text-brand-subtext hover:text-white transition-colors"
            on:click={() => (mobileOpen = !mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            type="button">
      <Icon name={mobileOpen ? 'close' : 'menu'} size={20} />
    </button>
  </nav>

  <!-- Mobile drawer -->
  {#if mobileOpen}
    <div class="md:hidden absolute inset-x-0 top-14
                border-b border-brand-border bg-brand-dark/95 backdrop-blur-xl
                px-4 py-4 shadow-2xl shadow-black/50">
      <ul class="flex flex-col" role="list">
        {#each NAV_LINKS as link}
          <li>
            <a href={link.href}
               class="flex items-center text-white hover:text-brand-purple
                      text-sm font-body px-3 py-3 rounded-lg hover:bg-white/5 transition-colors"
               on:click={() => (mobileOpen = false)}>
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
      <div class="mt-3 pt-3 border-t border-brand-border/50 flex flex-col gap-2">
        <a href="/login"
           class="text-brand-subtext text-sm font-body px-3 py-2.5">Log in</a>
        <a href="/signup" class="btn-primary justify-center">Start for free</a>
      </div>
    </div>
  {/if}
</header>

