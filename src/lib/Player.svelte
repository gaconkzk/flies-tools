<script lang="ts">
  import PlyrVideo from './plyr/Video.svelte'
  import OpenPlayerVideo from './openplayer/Video.svelte'
  import { extractMediaType } from './utils/media'

  const types = {
    plyr: PlyrVideo,
    openplayer: OpenPlayerVideo,
  }

  export let type: 'plyr' | 'openplayer' = 'plyr'
  export let tracks: TrackType[] = []
  export let sources: SourceType[] | string[] = []

  $: srcs = sources.map((s) => (typeof s === 'string' ? { src: s, type: extractMediaType(s) } : s))
  const { type: _type, tracks: _tracks, sources: _sources, class: _class, ...propNoType } = $$props
</script>

<div class={_class}>
  <svelte:component this={types[type]} src={srcs?.[0]?.src} {...propNoType}>
    {#if srcs.length > 1}
      {#each srcs as source}
        <source {...source} />
      {/each}
    {/if}
    {#if tracks.length > 0}
      {#each tracks as track}
        <track {...track} />
      {/each}
    {/if}
  </svelte:component>
</div>
