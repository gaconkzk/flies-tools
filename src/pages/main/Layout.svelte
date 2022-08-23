<script lang="ts">
  import TitleBar from '$lib/components/TitleBar.svelte'
  import Main from './Main.svelte'

  import { useTauri, maximize } from '$lib/hooks/useTauri'

  const { isTauri } = useTauri()
</script>

<TitleBar />
<div id="flies-tools" class:tauri={$isTauri} class:no-maximized={!$maximize}>
  <Main />
</div>
{#if $isTauri}
  <div
    class="fixed bottom-0 left-0 h-4 w-full rounded-b-2xl flex flex-row justify-center items-between"
  >
    <div class="w-16px h-4 bg-gray-800 rounded-bl-2xl" />
    <div class="w-full h-4 bg-gray-800" />
    <div class="w-16px h-4 bg-gray-800 rounded-br-2xl" />
  </div>
{/if}

<style>
  #flies-tools {
    @apply bg-gray-800 w-full scrollbar scrollbar-rounded scrollbar-w-6px scrollbar-radius-2 scrollbar-track-radius-4 scrollbar-thumb-radius-4;
  }

  .tauri {
    @apply mt-30px mb-16px;
  }
</style>
