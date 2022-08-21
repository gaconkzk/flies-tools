<script lang="ts">
  import { MEDIA_TYPE } from '$lib/constant'

  import Player from '$lib/Player.svelte'

  export const data = null
  export const errors = null
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev" class="a-highlight">kit.svelte.dev</a> to read the documentation
</p>

<main>
  <Player
    type="openplayer"
    preload="false"
    sources={[
      // {
      //   src: 'http://aio.us.to/file/MQLF4X5MEUS7',
      //   type: MEDIA_TYPE.MP4,
      // },
      {
        src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        type: MEDIA_TYPE.M3U8,
      },
    ]}
    bgImg="https://hips.hearstapps.com/hmg-prod/images/quotes-about-love2-1640022840.jpg"
    class="h-400px w-600px justify-center"
  />
</main>
