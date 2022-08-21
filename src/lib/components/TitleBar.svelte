<script lang="ts">
  import { appWindow } from '@tauri-apps/api/window?client'

  import TitleBarButton from './TitleBarButton.svelte'
  import { useTauri } from '$lib/hooks/useTauri'
  const { class: containerClass, ...restProps } = $$props

  const { isTauri } = useTauri()

  let maximized = false

  const toggleMaximize = async () => {
    try {
      await appWindow.toggleMaximize()
      maximized = !maximized
    } catch (err) {
      console.error(err)
    }
  }
</script>

{#if $isTauri}
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
    @apply fixed h-30px top-0 left-0 right-0 select-none flex justify-end bg-cyan-300 opacity-25;
  }
  .titlebar-rounded {
    @apply rounded-t-2xl;
  }
</style>
