<script>
  import { ICONS, getIconMeta } from '../../lib/icons.js'

  /** @type {string} Icon name from the ICONS registry */
  export let name

  /** Override rendered size in px (both width & height) */
  export let size = 18

  /** Override fill; most icons use stroke="currentColor" so this rarely matters */
  export let fill = 'none'

  $: path    = ICONS[name] ?? ''
  $: meta    = getIconMeta(name)
</script>

<svg
  width={size}
  height={size}
  viewBox={meta.viewBox}
  {fill}
  aria-hidden="true"
  focusable="false"
>
  {@html path}
</svg>

