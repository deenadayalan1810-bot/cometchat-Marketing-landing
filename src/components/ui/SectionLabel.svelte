<script>
  /**
   * className: extra utility classes e.g. "mb-4" or "text-center"
   * centered: if true, uses mx-auto to center the inline-flex element
   */
  export let className = ''
  export let centered   = false
</script>

<span class="section-label {centered ? 'mx-auto' : ''} {className}">
  <slot />
</span>
