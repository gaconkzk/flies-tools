<script lang="ts">
  import TitleBar from '$lib/components/TitleBar.svelte'
  import Main from './Main.svelte'

  import { useTauri } from '$lib/hooks/useTauri'

  const isTauri = useTauri()
</script>

<div id="flies-tools" class:tauri={isTauri}>
  <TitleBar />
  <Main />
</div>

<style>
  #flies-tools {
    @apply bg-gray-800 w-full h-full scrollbar scrollbar-rounded scrollbar-w-6px scrollbar-radius-2 scrollbar-track-radius-4 scrollbar-thumb-radius-4;
  }

  .tauri {
    @apply mt-30px;
  }
</style>
