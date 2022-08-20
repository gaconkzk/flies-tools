<script lang="ts">
  import type Player from 'openplayerjs'
  import { nanoid } from 'nanoid'
  import { onMount, onDestroy } from 'svelte'

  import './styles.css'

  import { DEFAULT_CONFIG as defaultConfig } from '../constant'
  export let bgImg: string | null = null
  export let src: string | null = null
  export let preload: string = 'auto'

  let container: HTMLMediaElement
  let player: Player

  let config = Object.assign(
    {},
    { ...defaultConfig },
    {
      showLoaderOnInit: false,
      pauseOthers: false,
    },
  )

  onMount(async () => {
    // client load - no ssr - for this case
    const pjs = await import('openplayerjs')
    if (container) {
      try {
        player = new pjs.default(container)
        await player.init()
      } catch (err) {
        console.error(err)
      }
    }
  })

  onDestroy(() => {
    player?.destroy()
  })
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video
  bind:this={container}
  id="op_{nanoid()}"
  data-poster={bgImg}
  class="op-player__media"
  {src}
  {preload}
>
  <slot />
</video>
