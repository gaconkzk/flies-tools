<script lang="ts">
  import { onMount } from 'svelte'
  import { os } from '@tauri-apps/api'
  import TitleBar from '$lib/components/TitleBar.svelte'
  import Main from './Main.svelte'
  import { useTauri } from '$lib/hooks/useTauri'
  import FooterBar from '$lib/components/FooterBar.svelte'
  import SideBar from '$lib/components/SideBar.svelte'

  const { isTauri, platform, maximize } = useTauri()

  onMount(async () => {
    if (window.__TAURI__) {
      isTauri.update(() => true)

      let osPlatform = await os.platform()
      platform.update(() => osPlatform)
    }
  })
</script>

<TitleBar />
<div
  id="flies-tools"
  class:tauri-top={$isTauri && $platform !== 'darwin'}
  class:tauri-bottom={$isTauri && $platform !== 'darwin'}
  class:no-maximized={$isTauri && !$maximize}
>
  <SideBar />
  <Main />
</div>
<FooterBar />

<style>
  #flies-tools {
    @apply bg-gray-800 w-full scrollbar scrollbar-rounded scrollbar-w-6px scrollbar-radius-2 scrollbar-track-radius-4 scrollbar-thumb-radius-4;
    @apply flex flex-row justify-start;
  }

  .tauri-top {
    @apply mt-30px;
  }

  .tauri-bottom {
    @apply mb-16px;
  }
</style>
