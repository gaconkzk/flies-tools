<script lang="ts">
  import 'uno.css'
  import '@unocss/reset/eric-meyer.css'
  import './app.css'
  import TitleBar from '$lib/components/TitleBar.svelte'
  import { useTauri } from '$lib/hooks/useTauri'
  const { isTauri } = useTauri()
</script>

<div id="app" class:rounded={$isTauri}>
  <TitleBar />
  <slot />
</div>

<style>
  #app {
    @apply bg-gray-800;
  }

  .rounded {
    @apply rounded-t-2xl pt-30px;
  }
</style>
