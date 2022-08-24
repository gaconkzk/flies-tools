<script lang="ts">
  import { MEDIA_TYPE } from '$lib/constant'

  import Player from '$lib/Player.svelte'

  export const data = null
  export const errors = null
</script>

<div class="ml-45px w-full">
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
      class="w-320px h-200px justify-center items-center flex"
    />
    <div class="w-400px h-200px relative">
      <div
        class="w-100px h-100px rounded-full glm-gray-100-blur-4-opacity-30 absolute top-100px right-35px"
      />
      <div
        class="w-300px h-150px border border-white border-opacity-18 glm-blue-400-blur-9px-opacity-20 absolute top-0 left-10px rounded"
      />
    </div>
    <div class="w-400px h-200px relative">
      <div
        class="w-100px h-100px rounded-full glm-gray-100-blur-4-opacity-30 absolute top-100px right-35px"
      />
      <div
        class="w-300px h-150px border border-white border-opacity-18 glm-blue-400-blur-9px-opacity-20 absolute top-0 left-10px rounded"
      />
    </div>
    <div class="w-400px h-200px relative">
      <div
        class="w-100px h-100px rounded-full glm-gray-100-blur-4-opacity-30 absolute top-100px right-35px"
      />
      <div
        class="w-300px h-150px border border-white border-opacity-18 glm-blue-400-blur-9px-opacity-20 absolute top-0 left-10px rounded"
      />
    </div>
    <div class="w-400px h-200px relative">
      <div
        class="w-100px h-100px rounded-full glm-gray-100-blur-4-opacity-30 absolute top-100px right-35px"
      />
      <div
        class="w-300px h-150px border border-white border-opacity-18 glm-blue-400-blur-9px-opacity-20 absolute top-0 left-10px rounded"
      />
    </div>
  </main>
</div>
