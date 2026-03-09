<script>
  import CometchatLogo from '../../assets/images/CometChatLogo.png'
  import FacebookIcon from '../../assets/images/facebook.png'
  import LinkedinIcon from '../../assets/images/linkedin.png'
  import InstagramIcon from '../../assets/images/instagram.png'
  import TwitterIcon from '../../assets/images/twitter.png'
  import GithubIcon from '../../assets/images/github.png'

  const footerColumns = {
    Platform: [
      'Chat & Messaging',
      'Voice & Video Calls',
      'Features',
      'Chat & Messaging',
      'Voice & Video Calls',
      'Notifications',
      'Analytics & Insights',
      'Multi-Tenant Chat',
      'Integration Methods',
      'UI Kits',
      'SDKs & APIs'
    ],
    Solutions: [
      'By Use cases',
      'On-demand',
      'Online Marketplaces',
      'SaaS Businesses',
      'Healthcare & Telehealth',
      'Community & Social',
      'Dating',
      'Comparison',
      'CometChat vs Sendbird',
      'Compare Top Chat SDKs',
      'Sendbird Alternatives',
      'Stream Chat Alternatives'
    ],
    Developers: [
      'Docs',
      'Sample Apps',
      'APIs',
      'Product Updates',
      'Feature Requests',
      'System Status',
      'Support',
      'Community',
      'Help Center',
      'Office Hours',
      'Report an issue'
    ],
    Resources: [
      'Templates',
      'Tutorials',
      'Blog',
      'Chat UI Kits',
      'React Chat UI Kit',
      'Flutter Chat UI Kit',
      'Android Chat UI Kit',
      'React Native Chat UI Kit',
      'iOS Chat UI Kit'
    ],
    Company: [
      'Careers',
      'Partners',
      'Pricing',
      'Implementation Services',
      'Chat with us',
      'Terms and Legal',
      'Terms of Service',
      'Privacy Policy',
      'Sub-processors List',
      'Data Processing Addendum',
      'Vulnerability Disclosure Program'
    ]
  }

  const mobileSections = [
    { title: 'Platform', links: footerColumns.Platform },
    { title: 'Solutions', links: footerColumns.Solutions },
    { title: 'Developers', links: footerColumns.Developers },
    { title: 'Resources', links: footerColumns.Resources },
    {
      title: 'Competitors',
      links: [
        'Comparison',
        'CometChat vs Sendbird',
        'Compare Top Chat SDKs',
        'Sendbird Alternatives',
        'Stream Chat Alternatives'
      ]
    },
    { title: 'Company', links: footerColumns.Company }
  ]

  let openSections = {
    Platform: false,
    Solutions: false,
    Developers: false,
    Resources: false,
    Competitors: false,
    Company: false
  }

  const legalLinks = ['Terms of Use', 'Privacy Policy']
  const socialLinks = [
    { label: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/cometchat' },
    { label: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/company/cometchat' },
    { label: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/cometchat' },
    { label: 'Twitter', icon: TwitterIcon, href: 'https://x.com/cometchat' },
    { label: 'GitHub', icon: GithubIcon, href: 'https://github.com/cometchat-pro' }
  ]

  const sectionBreakLinks = new Set([
    'Integration Methods',
    'Comparison',
    'Support',
    'Chat UI Kits',
    'Terms and Legal'
  ])

  const toggleSection = (title) => {
    openSections = { ...openSections, [title]: !openSections[title] }
  }

  const resolveFooterHref = (label) => {
    const lower = label.toLowerCase()
    if (lower.includes('pricing') || lower.includes('terms') || lower.includes('privacy')) return '#pricing'
    if (lower.includes('docs') || lower.includes('api') || lower.includes('sdk') || lower.includes('developer')) return '#developers'
    if (lower.includes('template') || lower.includes('tutorial') || lower.includes('blog') || lower.includes('resource')) return '#resources'
    if (lower.includes('feature') || lower.includes('chat') || lower.includes('analytics')) return '#platform'
    if (lower.includes('comparison') || lower.includes('solution')) return '#solutions'
    return '/'
  }
</script>

<footer class="border-t border-brand-border/40 bg-[#03030B] px-4 sm:px-6 lg:px-8 pt-20 pb-8" aria-label="Site footer">
  <div class="w-full">
    <div class="mb-9">
      <a href="/" class="inline-block text-white font-body font-600 text-[28px] leading-none tracking-[-0.03em]">
        cometchat
      </a>
    </div>

    <div class="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
      {#each Object.entries(footerColumns) as [category, links]}
        <nav aria-label="{category} links">
          <h3 class="text-brand-purple/90 font-display font-400 text-[13px] mb-3">{category}</h3>
          <ul class="space-y-2.5" role="list">
            {#each links as link}
              <li class:mt-5={sectionBreakLinks.has(link)}>
                <a
                  href={resolveFooterHref(link)}
                  class="text-[12px] leading-[1.2] transition-colors duration-150 {sectionBreakLinks.has(link) ? 'text-white/55 hover:text-white/90' : 'text-white hover:text-white/55'}"
                >
                  {link}
                </a>
              </li>
            {/each}
          </ul>
        </nav>
      {/each}
    </div>

    <div class="md:hidden mb-10">
      {#each mobileSections as section}
        <div class="border-b border-brand-border/40 py-2">
          <button
            type="button"
            class="flex w-full items-center justify-between py-2 text-left text-brand-purple/95 font-body font-600 text-[16px]"
            on:click={() => toggleSection(section.title)}
            aria-expanded={openSections[section.title]}
            aria-controls={`footer-${section.title}`}
          >
            <span>{section.title}</span>
            <span class="text-brand-purple text-[22px] leading-none">{openSections[section.title] ? '-' : '+'}</span>
          </button>

          {#if openSections[section.title]}
            <ul id={`footer-${section.title}`} class="pb-3 pt-2 space-y-2.5">
              {#each section.links as link}
                <li>
                  <a href={resolveFooterHref(link)} class="text-white/55 hover:text-white/90 text-[13px] leading-[1.25] transition-colors duration-150">
                    {link}
                  </a>
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      {/each}
    </div>

    <div class="mb-8 mt-2">
      <img src={CometchatLogo} alt="CometChat watermark logo" loading="lazy" decoding="async" width="1440" height="260" class="w-full h-auto object-contain opacity-45 md:opacity-25" />
    </div>

    <div class="border-t border-brand-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
      <div class="order-2 sm:order-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-white/55">
        <p>2025 © CometChat</p>
        {#each legalLinks as item}
          <a href={item === 'Privacy Policy' ? '/privacy' : '/terms'} class="hover:text-white/90 transition-colors duration-150">{item}</a>
        {/each}
      </div>

      <nav aria-label="Social links" class="order-1 sm:order-2 w-full sm:w-auto">
        <ul class="flex flex-wrap items-center gap-x-4 gap-y-2" role="list">
          {#each socialLinks as item}
            <li>
              <a href={item.href} class="inline-flex items-center gap-1.5 text-white/55 hover:text-white/90 transition-colors duration-150" aria-label={item.label}>
                <img src={item.icon} alt="" loading="lazy" decoding="async" width="12" height="12" class="h-3 w-3 object-contain opacity-80" aria-hidden="true" />
                <span>{item.label}</span>
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
  </div>
</footer>

