<script lang="ts">
  import { onMount } from 'svelte'
  import { appWindow } from '@tauri-apps/api/window?client'

  import TitleBarButton from './TitleBarButton.svelte'
  const { class: containerClass, ...restProps } = $$props

  let isTauri = false
  let maximized = false

  const toggleMaximize = async () => {
    try {
      await appWindow.toggleMaximize()
      maximized = !maximized
    } catch (err) {
      console.error(err)
    }
  }

  onMount(() => {
    isTauri = !!window.__TAURI__
  })
</script>

{#if isTauri}
  <div
    data-tauri-drag-region
    class="titlebar {containerClass}"
    class:titlebar-rounded={!maximized}
    {...restProps}
  >
    <TitleBarButton
      id="titlebar-minimize"
      src="https://api.iconify.design/mdi:window-minimize.svg"
      alt="minimize"
      on:click={() => appWindow.minimize()}
    />
    <TitleBarButton
      id="titlebar-minimize"
      src="https://api.iconify.design/mdi:window-maximize.svg"
      alt="maximize"
      on:click={() => toggleMaximize()}
    />
    <TitleBarButton
      id="titlebar-close"
      src="https://api.iconify.design/mdi:close.svg"
      alt="close"
      on:click={() => appWindow.close()}
    />
  </div>
{/if}

<style>
  .titlebar {
    @apply fixed h-30px top-0 left-0 right-0 select-none flex justify-end bg-cyan-300;
  }
  .titlebar-rounded {
    @apply rounded-t-2xl;
  }
</style>
