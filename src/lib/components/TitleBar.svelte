<script lang="ts">
  import { onMount } from 'svelte'

  import TitleBarButton from './TitleBarButton.svelte'
  const { class: containerClass, ...restProps } = $$props

  let isTauri = false
  onMount(() => {
    isTauri = !!window.__TAURI__
  })
</script>

{#if isTauri}
  <div data-tauri-drag-region class="titlebar {containerClass}" {...restProps}>
    <TitleBarButton
      id="titlebar-minimize"
      src="https://api.iconify.design/mdi:window-minimize.svg"
      alt="minimize"
    />
    <TitleBarButton
      id="titlebar-minimize"
      src="https://api.iconify.design/mdi:window-maximize.svg"
      alt="maximize"
    />
    <TitleBarButton
      id="titlebar-close"
      src="https://api.iconify.design/mdi:close.svg"
      alt="close"
    />
  </div>
{/if}

<style>
  .titlebar {
    @apply fixed h-30px top-0 left-0 right-0 select-none flex justify-end bg-cyan-300;
  }
</style>
