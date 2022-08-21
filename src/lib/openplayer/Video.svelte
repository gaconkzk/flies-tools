<script lang="ts">
  import type Player from 'openplayerjs'
  import OpenPlayerJs from 'openplayerjs?client'
  import { nanoid } from 'nanoid'
  import { onMount, onDestroy } from 'svelte'

  import './styles.css'

  import { DEFAULT_CONFIG as defaultConfig } from '../constant'
  import RingLoader from '$lib/components/RingLoader.svelte'

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

  let loading = true

  onMount(async () => {
    if (container) {
      try {
        player = new OpenPlayerJs(container)
        await player.init()
      } catch (err) {
        console.error(err)
      } finally {
        loading = false
      }
    }
  })

  onDestroy(() => {
    player?.destroy()
  })
</script>

<div>
  {#if loading}
    <RingLoader />
  {/if}

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
</div>
