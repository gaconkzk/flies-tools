<script lang="ts">
  import Plyr from 'plyr'
  import { onDestroy, onMount } from 'svelte'
  import { nanoid } from 'nanoid'

  import './styles.css'
  import { DEFAULT_CONFIG as defaultConfig } from '../constant'

  import Hls from 'hls.js'

  export let bgImg: string | null = null
  export let src: string | null = null
  export let preload: string = 'auto'

  let container: HTMLMediaElement
  let player: Plyr

  // let config = Object.assign({}, { ...defaultConfig }, {})

  onMount(() => {
    if (container) {
      if (Hls.isSupported()) {
        const hls = new Hls()

        hls.loadSource(src || '')
        hls.attachMedia(container)
        // hls.on(Hls.Events.MANIFEST_PARSED, function () {
        //   container.play()
        // })
      }
      player = new Plyr(container)
    }
  })

  onDestroy(() => {
    player?.destroy()
  })
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video bind:this={container} id="pl_{nanoid()}" data-poster={bgImg} {src} {preload}>
  <slot />
</video>
