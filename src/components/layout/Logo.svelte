<script>
  export let href      = '/'
  export let label     = 'CometChat Home'
  export let className = ''
</script>

<a {href} class="flex items-center gap-2 shrink-0 {className}" aria-label={label}>
  
  <span class="font-display font-500 text-white text-md tracking-tight leading-none">
    comet<b>chat</b>
  </span>
</a>
