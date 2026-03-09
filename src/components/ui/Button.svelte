<script>
  /** 'primary' | 'outline' */
  export let variant = 'primary'
  export let href    = '#'
  export let className = ''
</script>

<a
  {href}
  class="{variant === 'primary' ? 'btn-primary' : 'btn-outline'} {className}"
>
  <slot />
</a>
