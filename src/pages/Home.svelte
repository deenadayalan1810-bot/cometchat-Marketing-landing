<script>
  import Navbar           from '../components/sections/Navbar.svelte'
  import Hero             from '../components/sections/Hero.svelte'
  import Logos            from '../components/sections/Logos.svelte'
  import Features         from '../components/sections/Features.svelte'
  import LlmBackend         from '../components/sections/LlmBackend.svelte'
  import PlatformOverview from '../components/sections/PlatformOverview.svelte'
  // import ProductShowcase  from '../components/sections/ProductShowcase.svelte'
  import Production  from '../components/sections/Production.svelte'
  import Integrations     from '../components/sections/Integrations.svelte'
  import Insights         from '../components/sections/Insights.svelte'
  import FullstactExperience from '../components/sections/FullstactExperience.svelte'
  // import DeveloperTools   from '../components/sections/DeveloperTools.svelte'
  import CTA              from '../components/sections/CTA.svelte'
  import Footer           from '../components/sections/Footer.svelte'
</script>

<div class="relative min-h-screen overflow-x-hidden bg-brand-dark">
  <!-- Persistent ambient glow â€” subtle purple bloom at the very top -->
  <div class="fixed top-0 inset-x-0 h-[1px] bg-brand-purple/20 z-50 pointer-events-none"
       aria-hidden="true"></div>
  <div class="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]
              bg-brand-purple/[0.07] rounded-full blur-[120px] pointer-events-none z-0"
       aria-hidden="true"></div>

  <Navbar />

  <main class="relative z-10">
    <Hero />
    <Logos />
    <Features />
    <LlmBackend />
    <PlatformOverview />
    <Production />
    <Insights />
    <FullstactExperience />
    <Integrations />
    <CTA />
  </main>

  <Footer />
</div>

