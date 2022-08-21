<script lang="ts">
  import Plyr from 'plyr'
  import { onDestroy, onMount } from 'svelte'
  import { nanoid } from 'nanoid'

  import './styles.css'
  import { DEFAULT_CONFIG as defaultConfig } from '../constant'

  import Hls from 'hls.js'
  import RingLoader from '$lib/components/RingLoader.svelte'

  export let bgImg: string | null = null
  export let src: string | null = null
  export let preload: string = 'auto'

  let container: HTMLMediaElement
  let player: Plyr

  let loading = true

  // let config = Object.assign({}, { ...defaultConfig }, {})

  onMount(() => {
    if (container) {
      if (Hls.isSupported()) {
        const hls = new Hls()

        hls.loadSource(src || '')
        hls.attachMedia(container)
      }
      player = new Plyr(container)

      loading = false
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
  <video bind:this={container} id="pl_{nanoid()}" data-poster={bgImg} {src} {preload}>
    <slot />
  </video>
</div>
