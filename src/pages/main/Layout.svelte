<script lang="ts">
  import { onMount } from 'svelte'
  import TitleBar from '$lib/components/TitleBar.svelte'
  import Main from './Main.svelte'

  import { useTauri, maximize } from '$lib/hooks/useTauri'
  import FooterBar from '$lib/components/FooterBar.svelte'
  import { isMac } from '$lib/hooks/useOS'

  const { isTauri } = useTauri()

  onMount(async () => {
    if (window.__TAURI__) {
      isTauri.update(() => true)
    }
  })
</script>

<TitleBar />
<div
  id="flies-tools"
  class:tauri-top={$isTauri && !isMac()}
  class:tauri-bottom={$isTauri}
  class:no-maximized={!$maximize}
>
  <Main />
</div>
<FooterBar />

<style>
  #flies-tools {
    @apply bg-gray-800 w-full scrollbar scrollbar-rounded scrollbar-w-6px scrollbar-radius-2 scrollbar-track-radius-4 scrollbar-thumb-radius-4;
  }

  .tauri-top {
    @apply mt-30px;
  }

  .tauri-bottom {
    @apply mb-16px;
  }
</style>
